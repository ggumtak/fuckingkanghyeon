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

// System prompt with Ailey persona (comprehensive version)
const BASE_SYSTEM_PROMPT = `# Ailey System Prompt (Python Quiz Helper)

You are **Ailey**, a friendly AI learning assistant integrated into a **Python code-fill quiz app**.

---

## 1) Persona DNA

### Role
- Warm, empathetic learning coach.
- Feels like a close senior who supports the user without judgment.

### Tone & Language
- **Use casual Korean (반말) only**. Output must be in Korean.
- **No honorifics** (avoid ~습니다, ~세요).
- Use emojis naturally and sparingly: 😊🤓🤔💡✨
- Encourage the user even when they're wrong.

### Style
- Answer only what the user asked.
- Keep responses crisp and confident.
- When explaining code, use Python code blocks.

---

## 2) Constitution (Non-Negotiable Laws)

**LAW 0 — Korean Output Only**
All responses must be in casual Korean. Never use formal speech.

**LAW 1 — Hint-First Default**
By default, provide hints unless the user explicitly requests the answer.

**LAW 2 — Respect User Intent**
If the user asks for the answer directly ("정답 알려줘", "답 뭐야"), give it immediately. Do not refuse.

**LAW 3 — No Unnecessary Length**
Avoid long lectures. Prioritize compact clarity.

**LAW 4 — No Option Dumping**
Do not reprint all choices/options when user asks about a specific question.

**LAW 5 — Code Formatting**
When showing code, use \`\`\`python code blocks.

---

## 3) Intent Router (Mode System)

### MODE A — Micro-Hint (Default)
Give a small, usable hint. One concrete hint + suggest next step.

### MODE B — Intuition + Principle
Used when user asks "why" or seems confused. Quick intuition + root principle.

### MODE C — Direct Answer
Used when user explicitly requests the answer. Give exact answer + one-line reason.

### MODE D — Gentle Check-in
Used when user is frustrated. Acknowledge emotion + offer choice: "힌트 더 줄까, 아니면 정답 바로 줄까?" 😊

---

## 4) Mode Triggers

- "힌트만", "스포 금지" → MODE A
- "왜?", "원리", "개념 설명" → MODE B
- "정답 알려줘", "답 뭐야" → MODE C
- "나 진짜 막힘", "답답해" → MODE D

---

## 5) Token Rules

- Aim for **~80–160 tokens** per response (3–6 short sentences).
- Only expand if user explicitly asks for deeper explanation.
- No filler, no redundant restatements.

---

## 6) Quiz App Context

- **Enter** = grade current answer
- **Ctrl + Enter** = grade all
- Green = correct, Red = incorrect, Yellow = corrected

---

## 7) What You Must Never Do

- Use formal Korean (~입니다, ~세요)
- Give long lecture-style explanations by default
- Refuse to provide the answer when explicitly asked
- Reprint all options when user asks about a question number
- Use bullet points (-, *, 1. 2. 3.) in responses - write naturally instead
- Use tables or "요약:" formatted output - just write plain text naturally
- Use ASCII table formatting with | and - characters`;

// ========== Page Context Extraction ==========
/**
 * Extract current page quiz context from DOM
 * Works for any quiz page automatically
 * Now includes full v2 quiz questions data
 */
function getCurrentPageContext() {
    const context = {
        title: document.title || '',
        roundName: '',
        subtitle: '',
        code: '',
        answers: [],
        currentScore: '',
        totalQuestions: 0,
        questions: [] // v2 quiz questions array
    };

    // Get header info
    const h1 = document.querySelector('header h1, h1');
    if (h1) context.roundName = h1.textContent.trim();

    const subtitle = document.querySelector('.subtitle, header p');
    if (subtitle) context.subtitle = subtitle.textContent.trim();

    // Get code from pre element (the quiz code block) - for v1 quizzes
    const codeBlock = document.querySelector('.code-block pre, pre[id^="code-"]');
    if (codeBlock) {
        context.code = codeBlock.textContent.trim().slice(0, 2000);
    }

    // Get answers from answer grid - for v1 quizzes
    const answerItems = document.querySelectorAll('.answer-item');
    answerItems.forEach(item => {
        context.answers.push(item.textContent.trim());
    });
    context.totalQuestions = context.answers.length;

    // Get v2 quiz questions data if available (global currentV2Round)
    if (typeof currentV2Round !== 'undefined' && currentV2Round?.questions) {
        context.questions = currentV2Round.questions.map((q, idx) => ({
            num: idx + 1,
            id: q.id,
            type: q.type,
            prompt: q.prompt,
            answer: q.type === 'mcq'
                ? (q.options?.[q.correctIndex] || '')
                : (q.acceptableAnswers?.join(' / ') || q.modelAnswer || ''),
            options: q.options || null,
            explanation: q.explanation || ''
        }));
        context.totalQuestions = context.questions.length;
    }

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
 * Includes full v2 quiz questions so AI can answer 'what is question N?'
 */
function buildSystemPrompt() {
    const ctx = getCurrentPageContext();

    let prompt = BASE_SYSTEM_PROMPT;

    // Add current page context if available
    if (ctx.roundName || ctx.code || ctx.questions.length > 0) {
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

        // v2 quiz: Include full questions data
        if (ctx.questions.length > 0) {
            prompt += `\n\n=== 문제 목록 (전체) ===`;
            ctx.questions.forEach(q => {
                prompt += `\n\n[${q.num}번] ${q.prompt}`;
                if (q.type === 'mcq' && q.options) {
                    prompt += `\n보기: ${q.options.join(' / ')}`;
                }
                prompt += `\n정답: ${q.answer}`;
                if (q.explanation) {
                    prompt += `\n해설: ${q.explanation}`;
                }
            });
            prompt += `\n\n[중요] 사용자가 "N번 문제 뭐야?", "N번 정답 알려줘" 등을 물으면 위 데이터에서 바로 찾아서 답해줘!`;
        }

        // v1 quiz: old format
        if (ctx.code) {
            prompt += `\n\n현재 퀴즈 코드:\n\`\`\`python\n${ctx.code}\n\`\`\``;
        }
        if (ctx.answers.length > 0 && ctx.questions.length === 0) {
            prompt += `\n\n정답 목록:\n${ctx.answers.slice(0, 30).join(', ')}`;
            if (ctx.answers.length > 30) {
                prompt += ` ... 외 ${ctx.answers.length - 30}개`;
            }
        }

        prompt += `\n\n사용자가 문제 내용이나 정답을 물어보면 바로 알려줘. 힌트만 원하면 힌트를 주고.`;
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
        <div class="chat-tabs">
            <button class="chat-tab active" data-tab="chat" onclick="switchChatTab('chat')">💬 채팅</button>
            <button class="chat-tab" data-tab="concepts" onclick="switchChatTab('concepts')">📚 핵심개념</button>
        </div>
        <div class="chat-tab-content" id="chatTabContent">
            <div class="chat-messages" id="chatMessages">
                ${hasApiKey() ? getWelcomeHTML() : getSetupHTML()}
            </div>
        </div>
        <div class="concepts-tab-content" id="conceptsTabContent" style="display:none;">
            <div class="concepts-header">
                <span class="concepts-count" id="conceptsCount">0개의 개념</span>
                <button class="btn btn-sm concepts-edit" onclick="toggleSelectMode()" title="편집 모드">✏️ 편집</button>
                <button class="btn btn-sm concepts-anki" onclick="exportConceptsAnki()" title="Anki용 내보내기">📚 Anki</button>
                <button class="btn btn-sm concepts-clear" onclick="clearAllConcepts()" title="전체 삭제">🗑️</button>
            </div>
            <div class="concepts-select-actions" id="conceptsSelectActions" style="display:none;">
                <span class="selected-count" id="selectedCount">0개 선택됨</span>
                <button class="btn btn-sm" onclick="exportConceptsAnki()">📚 선택 Anki</button>
                <button class="btn btn-sm btn-danger" onclick="deleteSelectedConcepts()">🗑️ 삭제</button>
            </div>
            <div class="concepts-list" id="conceptsList">
                <div class="concepts-empty">아직 저장된 핵심개념이 없습니다.<br>문제의 <strong>?</strong> 버튼을 눌러 AI 설명을 받아보세요!</div>
            </div>
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

    // Load saved concepts
    loadSavedConcepts();
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
            <div class="welcome-icon">✨</div>
            <div class="welcome-text">
                <strong>안녕! 나는 에일리야 😊</strong><br>
                퀴즈 풀다가 막히면 언제든 물어봐! 힌트 줄게~
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
        switchChatTab('chat');

        // Focus with scroll prevention using body overflow lock
        if (hasApiKey()) {
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                chatInput.focus({ preventScroll: true });
            }
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

    // Click outside to close (but not when dragging)
    let isDragging = false;
    let mouseDownTarget = null;

    document.addEventListener('mousedown', (e) => {
        mouseDownTarget = e.target;
        isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (mouseDownTarget) {
            isDragging = true;
        }
    });

    document.addEventListener('mouseup', (e) => {
        if (!chatPanelOpen || isDragging) {
            mouseDownTarget = null;
            isDragging = false;
            return;
        }

        const panel = document.getElementById('aiChatPanel');
        const modal = document.getElementById('apiKeyModal');

        // Don't close if clicking inside panel or modal
        if (panel?.contains(e.target) || modal?.contains(e.target)) {
            mouseDownTarget = null;
            return;
        }

        // Don't close if mousedown was inside panel (prevents closing during text selection)
        if (panel?.contains(mouseDownTarget)) {
            mouseDownTarget = null;
            return;
        }

        // Close panel when clicking outside
        toggleChatPanel();
        mouseDownTarget = null;
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
    // First, parse code blocks and apply syntax highlighting
    // Pattern: ```language\ncode\n``` or ```\ncode\n```
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;

    let result = text;
    let match;
    const codeBlocks = [];

    // Extract and process code blocks first
    while ((match = codeBlockRegex.exec(text)) !== null) {
        const lang = match[1] || 'plaintext';
        const code = match[2].trim();

        let highlightedCode;
        if (typeof hljs !== 'undefined') {
            try {
                const langMap = {
                    'python': 'python', 'py': 'python',
                    'sql': 'sql',
                    'javascript': 'javascript', 'js': 'javascript',
                    'java': 'java',
                    'csharp': 'csharp', 'cs': 'csharp',
                    'cpp': 'cpp', 'c': 'c'
                };
                const hljsLang = langMap[lang.toLowerCase()] || lang || 'plaintext';
                highlightedCode = hljs.highlight(code, { language: hljsLang }).value;
            } catch (e) {
                highlightedCode = escapeHtml(code);
            }
        } else {
            highlightedCode = escapeHtml(code);
        }

        const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
        codeBlocks.push(`<pre class="chat-code-block"><code class="hljs">${highlightedCode}</code></pre>`);
        result = result.replace(match[0], placeholder);
    }

    // Format remaining text (bold, italic, inline code, line breaks)
    result = result
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');

    // Restore code blocks
    codeBlocks.forEach((block, i) => {
        result = result.replace(`__CODE_BLOCK_${i}__`, block);
    });

    return result;
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

// ========== Concept Explanation System ==========
const CONCEPTS_STORAGE_KEY = 'ai_saved_concepts';
let savedConcepts = [];

// Switch between Chat and Concepts tabs
function switchChatTab(tab) {
    const chatTab = document.querySelector('.chat-tab[data-tab="chat"]');
    const conceptsTab = document.querySelector('.chat-tab[data-tab="concepts"]');
    const chatContent = document.getElementById('chatTabContent');
    const conceptsContent = document.getElementById('conceptsTabContent');
    const inputArea = document.querySelector('.chat-input-area');

    if (tab === 'chat') {
        chatTab?.classList.add('active');
        conceptsTab?.classList.remove('active');
        if (chatContent) chatContent.style.display = 'block';
        if (conceptsContent) conceptsContent.style.display = 'none';
        if (inputArea) inputArea.style.display = 'flex';
    } else {
        chatTab?.classList.remove('active');
        conceptsTab?.classList.add('active');
        if (chatContent) chatContent.style.display = 'none';
        if (conceptsContent) conceptsContent.style.display = 'block';
        if (inputArea) inputArea.style.display = 'none';
        renderConceptsList();
    }
}

// Load saved concepts from localStorage
function loadSavedConcepts() {
    try {
        const stored = localStorage.getItem(CONCEPTS_STORAGE_KEY);
        savedConcepts = stored ? JSON.parse(stored) : [];
    } catch (e) {
        savedConcepts = [];
    }
}

// Save concepts to localStorage
function saveConcepts() {
    try {
        localStorage.setItem(CONCEPTS_STORAGE_KEY, JSON.stringify(savedConcepts));
    } catch (e) {
        console.warn('Failed to save concepts:', e);
    }
}

// Render concepts list
function renderConceptsList() {
    const list = document.getElementById('conceptsList');
    const count = document.getElementById('conceptsCount');
    if (!list) return;

    if (savedConcepts.length === 0) {
        list.innerHTML = '<div class="concepts-empty">아직 저장된 핵심개념이 없습니다.<br>문제의 <strong>?</strong> 버튼을 눌러 AI 설명을 받아보세요!</div>';
    } else {
        list.innerHTML = savedConcepts.map((c, i) => `
            <div class="concept-item ${selectedIndices.has(i) ? 'selected' : ''}" data-index="${i}">
                <div class="concept-header" onclick="toggleConceptExpand(${i})">
                    ${isSelectMode ? `<input type="checkbox" class="concept-checkbox" ${selectedIndices.has(i) ? 'checked' : ''} onchange="event.stopPropagation(); toggleConceptSelection(${i})">` : '<span class="concept-expand-icon">▶</span>'}
                    <span class="concept-title">${escapeHtml(c.title || '문제 ' + (i + 1))}</span>
                    ${!isSelectMode ? `<button class="concept-delete" onclick="event.stopPropagation(); deleteConcept(${i})" title="삭제">×</button>` : ''}
                </div>
                <div class="concept-body" style="display: none;">
                    ${c.back ? `<div class="concept-back"><strong>뒷면:</strong> ${escapeHtml(c.back)}</div>` : ''}
                    <div class="concept-content">${formatAIResponse(c.extra || c.explanation || '(설명 없음)')}</div>
                </div>
            </div>
        `).join('');

        // Bind long-press events for mobile (enters select mode)
        bindConceptLongPress();
    }

    if (count) count.textContent = `${savedConcepts.length}개`;
}

// Toggle concept expand/collapse
function toggleConceptExpand(index) {
    if (isSelectMode) return; // Don't expand in select mode

    const item = document.querySelector(`.concept-item[data-index="${index}"]`);
    if (!item) return;

    const body = item.querySelector('.concept-body');
    const icon = item.querySelector('.concept-expand-icon');

    if (body.style.display === 'none') {
        body.style.display = 'block';
        if (icon) icon.textContent = '▼';
        item.classList.add('expanded');
    } else {
        body.style.display = 'none';
        if (icon) icon.textContent = '▶';
        item.classList.remove('expanded');
    }
}

// Bind long-press events for mobile multi-select
function bindConceptLongPress() {
    document.querySelectorAll('.concept-item').forEach(item => {
        let timer = null;

        item.addEventListener('touchstart', (e) => {
            timer = setTimeout(() => {
                if (!isSelectMode) {
                    isSelectMode = true;
                    renderConceptsList();
                    updateSelectModeUI();
                }
                const index = parseInt(item.dataset.index);
                if (!isNaN(index)) {
                    toggleConceptSelection(index);
                }
            }, 500); // 500ms long press
        }, { passive: true });

        item.addEventListener('touchend', () => {
            if (timer) clearTimeout(timer);
        });

        item.addEventListener('touchmove', () => {
            if (timer) clearTimeout(timer);
        });

        // Click to toggle in select mode
        item.addEventListener('click', (e) => {
            if (isSelectMode && !e.target.classList.contains('concept-checkbox') && !e.target.classList.contains('concept-delete')) {
                const index = parseInt(item.dataset.index);
                if (!isNaN(index)) {
                    toggleConceptSelection(index);
                }
            }
        });
    });
}

// Delete a concept
function deleteConcept(index) {
    savedConcepts.splice(index, 1);
    saveConcepts();
    renderConceptsList();
}

// Clear all concepts
function clearAllConcepts() {
    if (confirm('모든 핵심개념을 삭제하시겠습니까?')) {
        savedConcepts = [];
        saveConcepts();
        renderConceptsList();
    }
}

// Multi-select mode state
let isSelectMode = false;
let selectedIndices = new Set();
let longPressTimer = null;

// Toggle select mode (for desktop edit button)
function toggleSelectMode() {
    isSelectMode = !isSelectMode;
    selectedIndices.clear();
    renderConceptsList();
    updateSelectModeUI();
}

// Update select mode UI
function updateSelectModeUI() {
    const editBtn = document.querySelector('.concepts-edit');
    const exportBtn = document.querySelector('.concepts-export');
    const selectActions = document.getElementById('conceptsSelectActions');

    if (isSelectMode) {
        if (editBtn) editBtn.innerHTML = '✓ 완료';
        if (selectActions) selectActions.style.display = 'flex';
    } else {
        if (editBtn) editBtn.innerHTML = '✏️ 편집';
        if (selectActions) selectActions.style.display = 'none';
    }
}

// Toggle concept selection
function toggleConceptSelection(index) {
    if (selectedIndices.has(index)) {
        selectedIndices.delete(index);
    } else {
        selectedIndices.add(index);
    }

    const item = document.querySelector(`.concept-item[data-index="${index}"]`);
    if (item) {
        item.classList.toggle('selected', selectedIndices.has(index));
    }

    // Update selected count
    const selectedCount = document.getElementById('selectedCount');
    if (selectedCount) {
        selectedCount.textContent = `${selectedIndices.size}개 선택됨`;
    }
}

// Export concepts to CSV (all or selected)
function exportConceptsCSV() {
    const toExport = isSelectMode && selectedIndices.size > 0
        ? Array.from(selectedIndices).map(i => savedConcepts[i]).filter(Boolean)
        : savedConcepts;

    if (toExport.length === 0) {
        alert('내보낼 핵심개념이 없습니다.');
        return;
    }

    // CSV with BOM for Excel compatibility
    let csv = '\uFEFF제목,핵심개념,날짜\n';

    toExport.forEach(c => {
        const title = (c.title || '').replace(/"/g, '""');
        const explanation = (c.explanation || '').replace(/"/g, '""').replace(/\n/g, ' ');
        const timestamp = c.timestamp || '';
        csv += `"${title}","${explanation}","${timestamp}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `핵심개념_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
}

// Export to Anki-compatible TSV (Tab-separated: Front<TAB>Back<TAB>Extra)
// Anki imports TAB-separated files with 3 fields: Front, Back, Extra (for extra info)
function exportConceptsAnki() {
    const toExport = isSelectMode && selectedIndices.size > 0
        ? Array.from(selectedIndices).map(i => savedConcepts[i]).filter(Boolean)
        : savedConcepts;

    if (toExport.length === 0) {
        alert('내보낼 핵심개념이 없습니다.');
        return;
    }

    // Anki TSV format: Front<TAB>Back<TAB>Extra (3 columns, no headers)
    // - TAB (\t) separates fields
    // - Newlines within fields must be converted to <br> (HTML)
    // - TAB characters within fields must be removed/replaced
    let tsv = '';

    toExport.forEach(c => {
        // Field 1: Front (앞면) - concept name/question
        const front = escapeAnkiField(c.title || '');

        // Field 2: Back (뒷면) - short answer
        const back = escapeAnkiField(c.back || '');

        // Field 3: Extra (해설) - detailed explanation with HTML formatting
        let extra = c.extra || c.explanation || '';
        // Convert markdown code blocks to HTML
        extra = extra
            .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
        extra = escapeAnkiField(extra);

        // Write line: Front<TAB>Back<TAB>Extra
        tsv += `${front}\t${back}\t${extra}\n`;
    });

    // Create downloadable TSV file
    const blob = new Blob([tsv], { type: 'text/tab-separated-values;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `핵심개념_Anki_${new Date().toISOString().slice(0, 10)}.tsv`;
    link.click();
}

// Escape field content for Anki TSV export
// - Replace tabs with spaces (TAB is field separator)
// - Replace newlines with <br> (Anki supports HTML)
function escapeAnkiField(text) {
    if (!text) return '';
    return text
        .replace(/\t/g, '    ')  // Replace tabs with 4 spaces
        .replace(/\r?\n/g, '<br>');  // Convert newlines to HTML breaks
}

// Delete selected concepts
function deleteSelectedConcepts() {
    if (selectedIndices.size === 0) return;
    if (!confirm(`${selectedIndices.size}개의 핵심개념을 삭제하시겠습니까?`)) return;

    // Delete from highest index to lowest to avoid index shifting
    const indices = Array.from(selectedIndices).sort((a, b) => b - a);
    indices.forEach(i => savedConcepts.splice(i, 1));

    selectedIndices.clear();
    isSelectMode = false;
    saveConcepts();
    renderConceptsList();
    updateSelectModeUI();
}

// Request AI explanation for a question (called from ? button)
async function requestConceptExplanation(questionId, questionText) {
    if (!hasApiKey()) {
        showApiKeyModal();
        return;
    }

    // Open panel and switch to concepts tab
    if (!chatPanelOpen) toggleChatPanel();
    switchChatTab('concepts');

    // Show loading indicator
    const list = document.getElementById('conceptsList');
    const loadingId = Date.now();
    const loadingHTML = `
        <div class="concept-item concept-loading" id="concept-loading-${loadingId}">
            <div class="concept-header">
                <span class="concept-title">🔄 AI가 설명 생성 중...</span>
            </div>
            <div class="concept-content typing-dots"><span></span><span></span><span></span></div>
        </div>
    `;

    if (list.querySelector('.concepts-empty')) {
        list.innerHTML = loadingHTML;
    } else {
        list.insertAdjacentHTML('afterbegin', loadingHTML);
    }

    try {
        // Anki 3-field prompt: Front (concept name) / Back (answer) / Extra (explanation)
        const prompt = `다음 문제에 대한 플래시카드를 만들어줘.

**반드시 아래 형식을 따라줘:**

[앞면]
핵심 개념 이름 (간단하게: 예) "리스트 컴프리헨션", "클래스 생성자")

[뒷면]
정답 한 줄 (예: "2", "append()", "[150, 170]")

[해설]
자세한 설명 (코드 예시 포함 가능)

---
문제:
${questionText}`;

        const response = await callGeminiAPI(prompt);

        // Remove loading indicator
        document.getElementById(`concept-loading-${loadingId}`)?.remove();

        // Parse Front/Back/Extra from response
        let front = '';
        let back = '';
        let extra = '';

        // Try structured parsing first
        const frontMatch = response.match(/\[앞면\]\s*\n*([^\[\n]+)/i);
        const backMatch = response.match(/\[뒷면\]\s*\n*([^\[\n]+)/i);
        const extraMatch = response.match(/\[해설\]\s*\n*([\s\S]+?)(?:\n---|\n\n\n|$)/i);

        if (frontMatch) front = frontMatch[1].trim();
        if (backMatch) back = backMatch[1].trim();
        if (extraMatch) extra = extraMatch[1].trim();

        // Fallback: if front is empty, extract from response differently
        if (!front) {
            // Try to get first non-empty line as front
            const lines = response.split('\n').filter(l => l.trim() && !l.startsWith('['));
            if (lines.length > 0) {
                front = lines[0].replace(/^[-*#\d.)\s]+/, '').trim().slice(0, 50);
            }
            // If still empty, use question text
            if (!front) {
                front = questionText.slice(0, 40) + '...';
            }
            // Use rest as extra if no structured parsing worked
            if (!back && !extra && lines.length > 1) {
                back = lines[1]?.replace(/^[-*#\d.)\s]+/, '').trim() || '';
                extra = lines.slice(2).join('\n').trim();
            }
        }

        // Clean up front - remove any tags/markers
        front = front.replace(/^\*\*|\*\*$/g, '').replace(/^#+\s*/, '').trim();

        // Default title
        const title = front || questionText.slice(0, 40) + '...';

        // Save concept with 3-field structure for Anki export
        const concept = {
            questionId,
            title,   // Front (앞면)
            back,    // Back (뒷면)
            extra,   // Extra (해설)
            explanation: back + (extra ? '\n\n---\n\n' + extra : '') || response, // Display content, fallback to full response
            timestamp: new Date().toLocaleString('ko-KR')
        };

        savedConcepts.unshift(concept);
        saveConcepts();
        renderConceptsList();

    } catch (error) {
        document.getElementById(`concept-loading-${loadingId}`)?.remove();
        alert('AI 설명 생성 실패: ' + error.message);
    }
}

// Add ? button to a question card (called when question is graded wrong)
function addConceptButton(card, questionText) {
    // Skip if already has button
    if (card.querySelector('.concept-help-btn')) return;

    const header = card.querySelector('.question-header');
    if (!header) return;

    const btn = document.createElement('button');
    btn.className = 'concept-help-btn';
    btn.innerHTML = '?';
    btn.title = 'AI 핵심개념 설명 받기';
    btn.onclick = (e) => {
        e.stopPropagation();
        const qId = card.dataset.questionId || card.id;
        requestConceptExplanation(qId, questionText);
    };

    header.appendChild(btn);
}

// Expose functions globally
if (typeof window !== 'undefined') {
    window.switchChatTab = switchChatTab;
    window.exportConceptsCSV = exportConceptsCSV;
    window.exportConceptsAnki = exportConceptsAnki;
    window.clearAllConcepts = clearAllConcepts;
    window.deleteConcept = deleteConcept;
    window.deleteSelectedConcepts = deleteSelectedConcepts;
    window.toggleSelectMode = toggleSelectMode;
    window.toggleConceptSelection = toggleConceptSelection;
    window.toggleConceptExpand = toggleConceptExpand;
    window.requestConceptExplanation = requestConceptExplanation;
    window.addConceptButton = addConceptButton;
}
