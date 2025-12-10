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
