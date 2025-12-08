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
    model: 'gemini-flash-latest',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
    storageKey: 'gemini_api_key'
};

// System prompt with Ailey persona (base)
const BASE_SYSTEM_PROMPT = `너는 에일리야. Python 코딩 퀴즈 앱에 통합된 친근한 AI 학습 도우미야.

[페르소나 - 에일리]
- 따뜻하고 공감적인 학습 코치야
- 친근한 반말 사용해 (예: ~했어?, ~해볼까?, ~거든, ~잖아!)
- 이모지 자연스럽게 사용해 (😊🤓🤔💡✨)
- 사용자가 틀려도 격려하면서 힌트를 줘

[사고 과정]
1. 사용자 질문의 핵심을 파악해
2. 개념을 직관적으로 설명해 (비유, 메타포 활용)
3. "왜 그런지" 근본 원리를 설명해
4. 정답은 직접 알려주지 말고 힌트를 줘

[절대 금지 사항]
- 1. 2. 3. 4. 같은 번호 매기기 금지 (질문에 대한 답변만 자연스럽게)
- ~입니다, ~습니다 같은 존댓말 금지 (반말만 사용)
- 정답을 직접적으로 알려주는 것 금지
- 길고 장황한 설명 금지 (핵심만 간결하게)

[응답 스타일]
- 물어본 것에만 딱 대답해
- 마치 친한 선배가 알려주듯이 자연스럽게
- 개념 설명할 때는 "이게 뭐냐면~" "쉽게 말하면~" 이런 식으로
- 막히면 "어디서 막혔어?" "뭐가 헷갈려?" 하고 물어봐

[퀴즈 앱 정보]
- Python 연결 리스트 빈칸 채우기 퀴즈
- Enter로 채점, Ctrl+Enter로 전체 채점
- 초록색=정답, 빨간색=오답, 노란색=수정 후 정답`;

// ========== Page Context Extraction ==========
/**
 * Extract current page quiz context from DOM
 * Works for any quiz page automatically
 */
function getCurrentPageContext() {
    const context = {
        title: document.title || '',
        roundName: '',
        subtitle: '',
        code: '',
        answers: [],
        currentScore: '',
        totalQuestions: 0
    };

    // Get header info
    const h1 = document.querySelector('header h1, h1');
    if (h1) context.roundName = h1.textContent.trim();

    const subtitle = document.querySelector('.subtitle, header p');
    if (subtitle) context.subtitle = subtitle.textContent.trim();

    // Get code from pre element (the quiz code block)
    const codeBlock = document.querySelector('.code-block pre, pre[id^="code-"]');
    if (codeBlock) {
        // Get text content without input values interfering
        context.code = codeBlock.textContent.trim().slice(0, 2000); // Limit to 2000 chars
    }

    // Get answers from answer grid
    const answerItems = document.querySelectorAll('.answer-item');
    answerItems.forEach(item => {
        context.answers.push(item.textContent.trim());
    });
    context.totalQuestions = context.answers.length;

    // Get current score
    const scoreEl = document.querySelector('.score-num');
    const totalEl = document.querySelector('.score-total');
    if (scoreEl && totalEl) {
        context.currentScore = `${scoreEl.textContent}${totalEl.textContent}`;
    }

    return context;
}

/**
 * Build dynamic system prompt with current page context
 */
function buildSystemPrompt() {
    const ctx = getCurrentPageContext();

    let prompt = BASE_SYSTEM_PROMPT;

    // Add current page context if available
    if (ctx.roundName || ctx.code) {
        prompt += `\n\n=== 현재 페이지 정보 ===`;

        if (ctx.roundName) {
            prompt += `\n회차: ${ctx.roundName}`;
        }
        if (ctx.subtitle) {
            prompt += `\n주제: ${ctx.subtitle}`;
        }
        if (ctx.currentScore) {
            prompt += `\n현재 점수: ${ctx.currentScore}`;
        }
        if (ctx.totalQuestions) {
            prompt += `\n총 문제 수: ${ctx.totalQuestions}개`;
        }
        if (ctx.code) {
            prompt += `\n\n현재 퀴즈 코드:\n\`\`\`python\n${ctx.code}\n\`\`\``;
        }
        if (ctx.answers.length > 0) {
            prompt += `\n\n정답 목록 (참고용, 사용자에게 직접 공개하지 말 것):\n${ctx.answers.slice(0, 20).join(', ')}`;
            if (ctx.answers.length > 20) {
                prompt += ` ... 외 ${ctx.answers.length - 20}개`;
            }
        }

        prompt += `\n\n사용자가 현재 문제에 대해 물어볼 수 있습니다. 힌트를 주되 직접적인 정답은 피하세요.`;
    }

    return prompt;
}

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

    // Build dynamic system prompt with current page context
    const systemPrompt = buildSystemPrompt();

    // Build conversation with system prompt
    const contents = [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: '네, 이해했습니다. 현재 페이지의 퀴즈 정보를 확인했어요. 도움이 필요하시면 말씀해주세요!' }] },
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
