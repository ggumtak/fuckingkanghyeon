/**
 * Gemini AI Chat Panel (Public Deployment Version)
 * 
 * Features:
 * - Ctrl+L to open/close
 * - Gemini 2.5 Flash API integration
 * - User provides their own API key (stored in LocalStorage)
 * - Gemini-style UI
 * - Context-aware (knows about the quiz app)
 */

// ========== Configuration ==========
const GEMINI_CONFIG = {
    model: 'gemini-2.0-flash-exp',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
    storageKey: 'gemini_api_key'
};

// System prompt with quiz app context
const SYSTEM_PROMPT = `You are a helpful AI assistant integrated into a Python coding quiz web app.

The app features:
- Fill-in-the-blank quizzes for Python linked list code
- 6 quiz rounds with 190+ questions
- Gemini-style dark theme UI
- Enter to grade, Ctrl+Enter for all, yellow for retry, green for correct

When users ask about the quiz:
- Help them understand Python code concepts
- Explain linked list operations
- Give hints without directly revealing answers
- Use Korean for responses unless asked otherwise

Keep responses concise and helpful.`;

// ========== State ==========
let chatPanelOpen = false;
let chatHistory = [];
let chatSessions = []; // Array of past sessions
let currentSessionIndex = -1; // -1 = new chat
const MAX_MESSAGES = 15; // Max messages per chat
const CHAT_SESSIONS_KEY = 'ai_chat_sessions';

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
    createChatPanel();
    bindChatKeyboard();
});

// ========== Get/Set API Key ==========
function getApiKey() {
    return localStorage.getItem(GEMINI_CONFIG.storageKey) || '';
}

function setApiKey(key) {
    localStorage.setItem(GEMINI_CONFIG.storageKey, key);
}

function hasApiKey() {
    return getApiKey().length > 0;
}

// ========== Floating AI Button ==========
function createFloatingAIButton() {
    const btn = document.createElement('button');
    btn.id = 'floatingAIBtn';
    btn.className = 'floating-ai-btn';
    btn.innerHTML = '✨';
    btn.title = 'AI 채팅 (Ctrl+L)';
    btn.onclick = toggleChatPanel;
    document.body.appendChild(btn);
}

// ========== Create Chat Panel ==========
function createChatPanel() {
    // Create floating AI button (always visible)
    createFloatingAIButton();

    const panel = document.createElement('div');
    panel.id = 'aiChatPanel';
    panel.className = 'ai-chat-panel';
    panel.innerHTML = `
        <div class="ai-chat-resize-handle" id="aiChatResizeHandle"></div>
        <div class="chat-header">
            <div class="chat-header-left">
                <span class="chat-logo">✨</span>
                <span class="chat-title">Gemini AI</span>
            </div>
            <div class="chat-header-right">
                <button class="chat-btn" onclick="startNewChat()" title="새 채팅">+</button>
                <button class="chat-btn" onclick="undoLastMessage()" title="되돌리기">↩</button>
                <button class="chat-btn" onclick="showChatHistory()" title="히스토리">📜</button>
                <button class="chat-settings" onclick="showApiKeyModal()" title="API 키 설정">⚙️</button>
                <button class="chat-close" onclick="toggleChatPanel()" title="닫기">✕</button>
            </div>
        </div>
        <div class="chat-messages" id="chatMessages">
            ${hasApiKey() ? getWelcomeHTML() : getSetupHTML()}
        </div>
        <div class="chat-input-area">
            <textarea 
                id="chatInput" 
                class="chat-input" 
                placeholder="메시지를 입력하세요... (Enter로 전송)"
                rows="1"
                ${!hasApiKey() ? 'disabled' : ''}
            ></textarea>
            <button class="chat-send" onclick="sendChatMessage()" title="전송" ${!hasApiKey() ? 'disabled' : ''}>
                ➤
            </button>
        </div>
    `;
    document.body.appendChild(panel);

    // Create API key modal
    createApiKeyModal();

    // Auto-resize textarea
    const input = document.getElementById('chatInput');
    input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    });

    // Enter to send (Shift+Enter for newline)
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
        }
    });

    // Setup resize functionality
    setupResizeHandle();
}

// ========== Resize Handle ==========
function setupResizeHandle() {
    const panel = document.getElementById('aiChatPanel');
    const handle = document.getElementById('aiChatResizeHandle');
    if (!handle) return;

    let isResizing = false;
    let startX;
    let startWidth;

    handle.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startWidth = panel.offsetWidth;
        handle.classList.add('dragging');
        document.body.style.cursor = 'ew-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const diff = startX - e.clientX;
        const newWidth = Math.min(Math.max(startWidth + diff, 280), 600);
        panel.style.width = newWidth + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (!isResizing) return;
        isResizing = false;
        handle.classList.remove('dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    });
}

function getWelcomeHTML() {
    return `
        <div class="chat-welcome">
            <div class="welcome-icon">🤖</div>
            <div class="welcome-text">
                <strong>안녕하세요!</strong><br>
                퀴즈에 대해 궁금한 게 있으면 물어보세요.
            </div>
        </div>
    `;
}

function getSetupHTML() {
    return `
        <div class="chat-welcome setup">
            <div class="welcome-icon">🔑</div>
            <div class="welcome-text">
                <strong>API 키가 필요합니다</strong><br>
                <a href="https://aistudio.google.com/apikey" target="_blank">Google AI Studio</a>에서 무료로 발급받으세요.
                <br><br>
                <button class="setup-btn" onclick="showApiKeyModal()">🔑 API 키 설정하기</button>
            </div>
        </div>
    `;
}

// ========== API Key Modal ==========
function createApiKeyModal() {
    const modal = document.createElement('div');
    modal.id = 'apiKeyModal';
    modal.className = 'api-key-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>🔑 Gemini API 키 설정</h3>
                <button onclick="hideApiKeyModal()">✕</button>
            </div>
            <div class="modal-body">
                <p>
                    <a href="https://aistudio.google.com/apikey" target="_blank">Google AI Studio</a>에서 
                    무료 API 키를 발급받으세요.
                </p>
                <input 
                    type="password" 
                    id="apiKeyInput" 
                    placeholder="API 키를 입력하세요"
                    value="${getApiKey()}"
                >
                <div class="modal-note">
                    💡 API 키는 브라우저에만 저장되며, 서버로 전송되지 않습니다.
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-cancel" onclick="hideApiKeyModal()">취소</button>
                <button class="btn-save" onclick="saveApiKey()">저장</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showApiKeyModal() {
    document.getElementById('apiKeyModal').classList.add('show');
    document.getElementById('apiKeyInput').focus();
}

function hideApiKeyModal() {
    document.getElementById('apiKeyModal').classList.remove('show');
}

function saveApiKey() {
    const input = document.getElementById('apiKeyInput');
    const key = input.value.trim();

    if (!key) {
        alert('API 키를 입력하세요.');
        return;
    }

    setApiKey(key);
    hideApiKeyModal();

    // Update UI
    document.getElementById('chatMessages').innerHTML = getWelcomeHTML();
    document.getElementById('chatInput').disabled = false;
    document.querySelector('.chat-send').disabled = false;

    // Focus input
    document.getElementById('chatInput').focus();
}

// ========== Toggle Panel ==========
function toggleChatPanel() {
    chatPanelOpen = !chatPanelOpen;
    const panel = document.getElementById('aiChatPanel');

    if (chatPanelOpen) {
        panel.classList.add('open');
        document.body.classList.add('ai-panel-open');
        if (hasApiKey()) {
            document.getElementById('chatInput').focus();
        }
    } else {
        panel.classList.remove('open');
        document.body.classList.remove('ai-panel-open');
    }
}

// ========== Keyboard Shortcut ==========
function bindChatKeyboard() {
    document.addEventListener('keydown', (e) => {
        // Ctrl+L to toggle
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            toggleChatPanel();
        }
        // Escape to close
        if (e.key === 'Escape') {
            if (document.getElementById('apiKeyModal').classList.contains('show')) {
                hideApiKeyModal();
            } else if (chatPanelOpen) {
                toggleChatPanel();
            }
        }
    });
}

// ========== Send Message ==========
async function sendChatMessage() {
    if (!hasApiKey()) {
        showApiKeyModal();
        return;
    }

    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    // Clear input
    input.value = '';
    input.style.height = 'auto';

    // Add user message to UI
    addMessageToUI('user', message);

    // Add to history (limit to MAX_MESSAGES)
    chatHistory.push({ role: 'user', parts: [{ text: message }] });
    if (chatHistory.length > MAX_MESSAGES * 2) {
        chatHistory = chatHistory.slice(-MAX_MESSAGES * 2);
    }

    // Show typing indicator
    const typingId = showTypingIndicator();

    try {
        const response = await callGeminiAPI(message);
        removeTypingIndicator(typingId);
        addMessageToUI('ai', response);
        chatHistory.push({ role: 'model', parts: [{ text: response }] });
    } catch (error) {
        removeTypingIndicator(typingId);

        if (error.message.includes('API_KEY_INVALID') || error.message.includes('401')) {
            addMessageToUI('error', 'API 키가 유효하지 않습니다. 다시 설정해주세요.');
            showApiKeyModal();
        } else {
            addMessageToUI('error', `오류: ${error.message}`);
        }
    }
}

// ========== Gemini API Call ==========
async function callGeminiAPI(userMessage) {
    const apiKey = getApiKey();
    const url = `${GEMINI_CONFIG.baseUrl}/${GEMINI_CONFIG.model}:generateContent?key=${apiKey}`;

    // Build conversation with system prompt
    const contents = [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: '네, 이해했습니다. 퀴즈 앱 AI 도우미로서 도움을 드리겠습니다.' }] },
        ...chatHistory
    ];

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1024
            }
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'API 요청 실패');
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '응답을 받지 못했습니다.';
}

// ========== UI Helpers ==========
function addMessageToUI(type, content) {
    const container = document.getElementById('chatMessages');

    // Remove welcome message if exists
    const welcome = container.querySelector('.chat-welcome');
    if (welcome) welcome.remove();

    const msg = document.createElement('div');
    msg.className = `chat-message ${type}`;

    if (type === 'user') {
        msg.innerHTML = `<div class="message-content">${escapeHtml(content)}</div>`;
    } else if (type === 'ai') {
        msg.innerHTML = `
            <div class="message-avatar">✨</div>
            <div class="message-content">${formatAIResponse(content)}</div>
        `;
    } else if (type === 'error') {
        msg.innerHTML = `<div class="message-content error">${escapeHtml(content)}</div>`;
    }

    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
    const container = document.getElementById('chatMessages');
    const id = 'typing-' + Date.now();
    const indicator = document.createElement('div');
    indicator.id = id;
    indicator.className = 'chat-message ai typing';
    indicator.innerHTML = `
        <div class="message-avatar">✨</div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    container.appendChild(indicator);
    container.scrollTop = container.scrollHeight;
    return id;
}

function removeTypingIndicator(id) {
    const indicator = document.getElementById(id);
    if (indicator) indicator.remove();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatAIResponse(text) {
    // Basic markdown formatting
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

// ========== Chat History Management ==========
function startNewChat() {
    // Save current session if has messages
    if (chatHistory.length > 0) {
        saveCurrentSession();
    }
    chatHistory = [];
    currentSessionIndex = -1;
    const container = document.getElementById('chatMessages');
    container.innerHTML = getWelcomeHTML();
}

function undoLastMessage() {
    if (chatHistory.length >= 2) {
        // Remove last AI and user message
        chatHistory.pop();
        chatHistory.pop();
        // Re-render
        rerenderChat();
    }
}

function rerenderChat() {
    const container = document.getElementById('chatMessages');
    container.innerHTML = getWelcomeHTML();
    for (let i = 0; i < chatHistory.length; i++) {
        const msg = chatHistory[i];
        const type = msg.role === 'user' ? 'user' : 'ai';
        addMessageToUI(type, msg.parts[0].text);
    }
}

function saveCurrentSession() {
    if (chatHistory.length === 0) return;
    const session = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('ko-KR'),
        preview: chatHistory[0]?.parts[0]?.text?.slice(0, 30) + '...',
        messages: [...chatHistory]
    };
    chatSessions.unshift(session);
    if (chatSessions.length > 10) chatSessions.pop(); // Keep max 10 sessions
    localStorage.setItem(CHAT_SESSIONS_KEY, JSON.stringify(chatSessions));
}

function loadChatSessions() {
    try {
        const saved = localStorage.getItem(CHAT_SESSIONS_KEY);
        if (saved) chatSessions = JSON.parse(saved);
    } catch (e) {
        chatSessions = [];
    }
}

function showChatHistory() {
    loadChatSessions();
    const container = document.getElementById('chatMessages');
    if (chatSessions.length === 0) {
        container.innerHTML = `
            <div class="chat-welcome">
                <div class="welcome-icon">📜</div>
                <div class="welcome-text">저장된 대화가 없습니다.</div>
            </div>
        `;
        return;
    }
    container.innerHTML = `
        <div class="chat-history-list">
            <div class="history-header">💬 이전 대화</div>
            ${chatSessions.map((s, i) => `
                <div class="history-item" onclick="loadSession(${i})">
                    <div class="history-preview">${escapeHtml(s.preview)}</div>
                    <div class="history-time">${s.timestamp}</div>
                </div>
            `).join('')}
            <button class="history-back-btn" onclick="startNewChat()">← 새 대화 시작</button>
        </div>
    `;
}

function loadSession(index) {
    if (chatHistory.length > 0) saveCurrentSession();
    const session = chatSessions[index];
    if (session) {
        chatHistory = [...session.messages];
        currentSessionIndex = index;
        rerenderChat();
    }
}

// Load sessions on init
document.addEventListener('DOMContentLoaded', loadChatSessions);
