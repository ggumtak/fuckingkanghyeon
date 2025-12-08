/**
 * Linked List Fill-in-the-Blank Quiz App (v4.0)
 * Features:
 * - Enter: Grade input
 * - Enter again on wrong: Show answer (stays red)
 * - Ctrl+Enter: Grade all
 * - Yellow state: Fixed after being wrong
 * - Green (correct): Readonly, locked
 * - Review mode: Retry wrong answers only
 * - LocalStorage: Persist progress across sessions
 * - Completion modal: Next/Retry/Home buttons
 */

// ========== State Management ==========
// Track input states: null, 'graded', 'shown', 'correct'
const inputStates = new Map();

// Track if input was ever wrong (for yellow state)
const wasEverWrong = new Set();

// LocalStorage key prefix
const STORAGE_PREFIX = 'quiz_progress_';

// Normalize answer for flexible comparison (ignore whitespace only, preserve case)
function normalizeAnswer(str) {
    if (!str) return '';
    // Remove all whitespace for comparison (so "a = b" matches "a=b")
    // Case is preserved! (None != none)
    return str.replace(/\s+/g, '');
}

// ========== Scroll Utility ==========
/**
 * Scroll element to upper-center of viewport (about 35% from top)
 * Used for both quiz blanks and essay/practice mode
 */
function scrollToUpperCenter(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - (window.innerHeight * 0.35);
    window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
    });
}

// ========== LocalStorage Functions ==========
function getStorageKey(quizId) {
    return STORAGE_PREFIX + quizId;
}

function saveProgress(quizId) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
    const progress = {
        values: {},
        states: {},
        wasEverWrong: []
    };

    inputs.forEach(input => {
        const blankNum = input.dataset.blank;
        const inputKey = getInputKey(input);
        progress.values[blankNum] = input.value;
        progress.states[blankNum] = {
            state: inputStates.get(inputKey) || null,
            classList: Array.from(input.classList).filter(c => ['correct', 'wrong', 'retry'].includes(c)),
            readOnly: input.readOnly
        };
        if (wasEverWrong.has(inputKey)) {
            progress.wasEverWrong.push(blankNum);
        }
    });

    try {
        localStorage.setItem(getStorageKey(quizId), JSON.stringify(progress));
    } catch (e) {
        console.warn('Failed to save progress:', e);
    }
}

function loadProgress(quizId) {
    try {
        const stored = localStorage.getItem(getStorageKey(quizId));
        if (!stored) return null;
        return JSON.parse(stored);
    } catch (e) {
        console.warn('Failed to load progress:', e);
        return null;
    }
}

function restoreProgress(quizId, progress) {
    if (!progress) return;

    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
    inputs.forEach(input => {
        const blankNum = input.dataset.blank;
        const inputKey = getInputKey(input);
        const savedState = progress.states[blankNum];

        // Restore value
        if (progress.values[blankNum] !== undefined) {
            input.value = progress.values[blankNum];
        }

        // Restore state
        if (savedState) {
            if (savedState.state) {
                inputStates.set(inputKey, savedState.state);
            }
            savedState.classList.forEach(cls => input.classList.add(cls));
            input.readOnly = savedState.readOnly;
        }

        // Restore wasEverWrong
        if (progress.wasEverWrong && progress.wasEverWrong.includes(blankNum)) {
            wasEverWrong.add(inputKey);
        }
    });
}

function clearProgress(quizId) {
    try {
        localStorage.removeItem(getStorageKey(quizId));
    } catch (e) {
        console.warn('Failed to clear progress:', e);
    }
}

// Create blank input field
function createInput(quizId, blankNum) {
    return `<input type="text" class="blank-input" data-quiz="${quizId}" data-blank="${blankNum}" placeholder="(${blankNum})">`;
}

// Calculate blank width based on longest answer
function calculateBlankWidth(answers) {
    const maxLen = Math.max(...answers.map(a => a.length));
    return Math.min(Math.max(maxLen * 11 + 24, 70), 260);
}

// Render quiz
function renderQuiz(quizId, data) {
    const codeEl = document.getElementById(`code-${quizId}`);
    if (!codeEl) return;

    let html = data.code;

    // Replace blanks in reverse order
    for (let i = data.answers.length; i >= 1; i--) {
        html = html.replace(`( ${i} )`, createInput(quizId, i));
    }

    codeEl.innerHTML = html;

    // Set dynamic blank width
    const blankWidth = calculateBlankWidth(data.answers);
    codeEl.querySelectorAll('.blank-input').forEach(input => {
        input.style.width = `${blankWidth}px`;
    });

    // Build answer grid
    const grid = document.getElementById(`answerGrid-${quizId}`);
    if (grid) {
        grid.innerHTML = data.answers.map((ans, i) =>
            `<div class="answer-item"><span>(${i + 1})</span>${ans}</div>`
        ).join('');
    }

    // Create review section
    createReviewSection(quizId, data);

    // Bind events
    bindEvents(quizId, data);

    // Restore saved progress
    const savedProgress = loadProgress(quizId);
    if (savedProgress) {
        restoreProgress(quizId, savedProgress);
        updateScore(quizId, data);
    }

    // Create completion modal
    createCompletionModal();
}

// Create compact review section at bottom
function createReviewSection(quizId, data) {
    const controls = document.querySelector('.controls');
    if (!controls || document.getElementById(`review-${quizId}`)) return;

    // Add review buttons to controls (natural integration)
    const reviewBtns = document.createElement('div');
    reviewBtns.id = `review-${quizId}`;
    reviewBtns.style.cssText = 'display: flex; gap: 8px; margin-left: 12px; padding-left: 12px; border-left: 1px solid var(--border);';
    reviewBtns.innerHTML = `
        <button class="btn btn-secondary" onclick="reviewWrong('${quizId}', ${JSON.stringify(data).replace(/"/g, '&quot;')}, 'hard')" title="정답 본 문제만 다시 풀기">
            오답 다시
        </button>
        <button class="btn btn-secondary" onclick="reviewWrong('${quizId}', ${JSON.stringify(data).replace(/"/g, '&quot;')}, 'all')" title="고친 문제도 포함해서 다시 풀기">
            전체 다시
        </button>
    `;
    controls.appendChild(reviewBtns);

    // Add floating scroll buttons only (nav bar removed - sidebar is enough)
    createFloatingScrollButtons();
}

// ========== Completion Modal ==========
function createCompletionModal() {
    if (document.getElementById('completionModal')) return;

    const modal = document.createElement('div');
    modal.id = 'completionModal';
    modal.className = 'completion-modal';
    modal.innerHTML = `
        <div class="completion-content">
            <div class="completion-icon">🎉</div>
            <h2>학습을 모두 마쳤습니다!</h2>
            <p>모든 문제를 정확하게 풀었습니다.</p>
            <div class="completion-buttons">
                <button class="btn-next" onclick="goToNextQuiz()">다음 →</button>
                <button class="btn-retry" onclick="retryCurrentQuiz()">다시풀기</button>
                <button class="btn-close" onclick="closeCompletionModal()" title="홈으로 돌아가기">✕</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Add modal styles if not already present
    addCompletionModalStyles();
}

function addCompletionModalStyles() {
    if (document.getElementById('completionModalStyles')) return;

    const style = document.createElement('style');
    style.id = 'completionModalStyles';
    style.textContent = `
        .completion-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
        }
        .completion-modal.show {
            opacity: 1;
            visibility: visible;
        }
        .completion-content {
            background: var(--bg-secondary, #1E1F20);
            border: 1px solid var(--border, #444746);
            border-radius: 24px;
            padding: 40px 50px;
            text-align: center;
            max-width: 420px;
            animation: modalPop 0.3s ease;
        }
        @keyframes modalPop {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .completion-icon {
            font-size: 4rem;
            margin-bottom: 16px;
        }
        .completion-content h2 {
            color: var(--success, #4ade80);
            font-size: 1.5rem;
            margin-bottom: 8px;
        }
        .completion-content p {
            color: var(--text-secondary, #C4C7C5);
            font-size: 0.95rem;
            margin-bottom: 28px;
        }
        .completion-buttons {
            display: flex;
            gap: 12px;
            justify-content: center;
        }
        .completion-buttons button {
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
            border: none;
        }
        .btn-next {
            background: var(--accent, #A8C7FA);
            color: #131314;
        }
        .btn-next:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(168, 199, 250, 0.4);
        }
        .btn-retry {
            background: var(--bg-tertiary, #282A2C);
            color: var(--text, #E3E3E3);
            border: 1px solid var(--border, #444746);
        }
        .btn-retry:hover {
            background: var(--hover-bg, rgba(255,255,255,0.08));
        }
        .btn-close {
            width: 44px;
            height: 44px;
            padding: 0 !important;
            background: transparent;
            color: var(--text-secondary, #C4C7C5);
            border: 1px solid var(--border, #444746) !important;
            font-size: 1.2rem;
        }
        .btn-close:hover {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            border-color: #ef4444 !important;
        }
    `;
    document.head.appendChild(style);
}

function showCompletionModal() {
    const modal = document.getElementById('completionModal');
    if (modal) modal.classList.add('show');
}

function closeCompletionModal() {
    const modal = document.getElementById('completionModal');
    if (modal) modal.classList.remove('show');
    // Go to home using config-based URL
    window.location.href = typeof getHomeUrl === 'function' ? getHomeUrl() : '../../index.html';
}

function goToNextQuiz() {
    // Use config-based navigation if available
    if (typeof hasNextQuiz === 'function' && typeof getNextQuizUrl === 'function') {
        if (hasNextQuiz()) {
            window.location.href = getNextQuizUrl();
        } else {
            alert('마지막 회차입니다! 🎉');
            window.location.href = getHomeUrl();
        }
    } else {
        // Fallback for backwards compatibility
        const currentPage = window.location.pathname.split('/').pop();
        const currentQuiz = parseInt(currentPage.match(/quiz-(\d+)/)?.[1] || '0');
        const nextQuiz = currentQuiz + 1;
        if (nextQuiz <= 6) {
            window.location.href = `quiz-${nextQuiz}.html`;
        } else {
            alert('마지막 회차입니다! 🎉');
            window.location.href = '../../index.html';
        }
    }
}

function retryCurrentQuiz() {
    const modal = document.getElementById('completionModal');
    if (modal) modal.classList.remove('show');

    // Get current quiz ID from the page
    const input = document.querySelector('.blank-input');
    if (input) {
        const quizId = input.dataset.quiz;
        // Find the data - we need to call resetQuiz
        // The data is passed during renderQuiz, we need to get it somehow
        // For now, just reload the page with cleared progress
        clearProgress(quizId);
        window.location.reload();
    }
}

function checkCompletion(quizId, data) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
    let allCorrect = true;

    inputs.forEach(input => {
        const blankNum = parseInt(input.dataset.blank);
        const correctAnswer = data.answers[blankNum - 1];
        const inputKey = getInputKey(input);
        const state = inputStates.get(inputKey);

        // Check if this input is correctly answered (green or yellow, not shown/red)
        if (normalizeAnswer(input.value.trim()) !== normalizeAnswer(correctAnswer) || state === 'shown') {
            allCorrect = false;
        }
    });

    if (allCorrect && inputs.length > 0) {
        // Small delay to let the user see the last answer turn green
        setTimeout(() => {
            showCompletionModal();
        }, 500);
    }
}

// Create floating scroll buttons (top/bottom)
function createFloatingScrollButtons() {
    if (document.getElementById('floatingScrollBtns')) return;

    const floatingBtns = document.createElement('div');
    floatingBtns.id = 'floatingScrollBtns';
    floatingBtns.innerHTML = `
        <button onclick="window.scrollTo({top:0,behavior:'smooth'})" title="맨 위로">▲</button>
        <button onclick="window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})" title="맨 아래로">▼</button>
    `;
    floatingBtns.style.cssText = `
        position: fixed;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        z-index: 1000;
    `;

    const btnStyle = `
        width: 36px;
        height: 36px;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(30,30,30,0.95);
        color: #a0a0a0;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.2s;
        backdrop-filter: blur(8px);
    `;

    floatingBtns.querySelectorAll('button').forEach(btn => {
        btn.style.cssText = btnStyle;
        btn.onmouseenter = () => { btn.style.background = '#4a90d9'; btn.style.color = 'white'; };
        btn.onmouseleave = () => { btn.style.background = 'rgba(30,30,30,0.95)'; btn.style.color = '#a0a0a0'; };
    });

    document.body.appendChild(floatingBtns);
}

// Bind all events
function bindEvents(quizId, data) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);

    inputs.forEach(input => {
        // Focus: Scroll input to upper-center of viewport
        input.addEventListener('focus', () => {
            scrollToUpperCenter(input);
        });

        // Keydown: Enter & Ctrl+Enter
        input.addEventListener('keydown', (e) => {
            // Skip if readonly
            if (input.readOnly) return;

            // Ctrl+Enter: Grade all
            if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                checkAnswers(quizId, data);
                return;
            }

            // Enter: Grade single or show answer
            if (e.key === 'Enter') {
                e.preventDefault();
                handleEnterKey(input, quizId, data);
            }
        });

        // Input change: Only for non-correct inputs
        input.addEventListener('input', () => {
            const inputKey = getInputKey(input);
            const state = inputStates.get(inputKey);

            // Don't allow changes on shown/correct state
            if (state === 'shown') {
                // Keep it wrong but allow retry
            }

            // Remove graded state but keep wasEverWrong tracking
            if (state === 'graded') {
                input.classList.remove('wrong', 'retry');
                inputStates.delete(inputKey);
            }
        });
    });
}

// Get unique key for input
function getInputKey(input) {
    return `${input.dataset.quiz}-${input.dataset.blank}`;
}

// Handle Enter key press
function handleEnterKey(input, quizId, data) {
    const inputKey = getInputKey(input);
    const state = inputStates.get(inputKey);
    const blankNum = parseInt(input.dataset.blank);
    const correctAnswer = data.answers[blankNum - 1];
    const userAnswer = input.value.trim();

    if (state === 'graded' && input.classList.contains('wrong')) {
        // Second Enter on wrong: Show answer, lock it red
        input.value = correctAnswer;
        input.readOnly = true;  // Lock the input!
        inputStates.set(inputKey, 'shown');
        // Keep it red (wrong class) - answer was revealed
        moveToNext(input, quizId);
    } else if (state === 'shown') {
        // Already shown, just move to next
        moveToNext(input, quizId);
    } else {
        // First grade
        const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
        input.classList.remove('correct', 'wrong', 'retry');

        if (userAnswer) {
            if (isCorrect) {
                // Check if was ever wrong
                if (wasEverWrong.has(inputKey)) {
                    input.classList.add('retry'); // Yellow
                } else {
                    input.classList.add('correct'); // Green
                }
                // Lock the input
                input.readOnly = true;
                inputStates.set(inputKey, 'correct');
                moveToNext(input, quizId);
            } else {
                input.classList.add('wrong');
                wasEverWrong.add(inputKey);
                inputStates.set(inputKey, 'graded');
            }
        }
    }

    updateScore(quizId, data);
    saveProgress(quizId);
    checkCompletion(quizId, data);
}

// Move focus to next blank (sequential navigation)
function moveToNext(input, quizId) {
    const currentBlank = parseInt(input.dataset.blank);

    // Try next blank first (current + 1)
    const nextInput = document.querySelector(
        `input[data-quiz="${quizId}"][data-blank="${currentBlank + 1}"]:not([readonly])`
    );
    if (nextInput) {
        nextInput.focus();
        return;
    }

    // No next blank - try previous blank (current - 1) for backwards solving
    const prevInput = document.querySelector(
        `input[data-quiz="${quizId}"][data-blank="${currentBlank - 1}"]:not([readonly])`
    );
    if (prevInput) {
        prevInput.focus();
        return;
    }

    // Neither next nor previous available - all done or isolated, do nothing
}

// Update score display
function updateScore(quizId, data) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
    let score = 0;

    inputs.forEach(input => {
        const blankNum = parseInt(input.dataset.blank);
        const correctAnswer = data.answers[blankNum - 1];
        if (normalizeAnswer(input.value.trim()) === normalizeAnswer(correctAnswer)) score++;
    });

    const scoreEl = document.getElementById(`score-${quizId}`);
    if (scoreEl) scoreEl.textContent = score;
}

// Grade all inputs (Ctrl+Enter or button)
function checkAnswers(quizId, data) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);

    inputs.forEach(input => {
        if (input.readOnly) return; // Skip locked inputs

        const inputKey = getInputKey(input);
        const blankNum = parseInt(input.dataset.blank);
        const correctAnswer = data.answers[blankNum - 1];
        const userAnswer = input.value.trim();
        const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);

        input.classList.remove('correct', 'wrong', 'retry');

        if (userAnswer) {
            if (isCorrect) {
                if (wasEverWrong.has(inputKey)) {
                    input.classList.add('retry');
                } else {
                    input.classList.add('correct');
                }
                input.readOnly = true;
                inputStates.set(inputKey, 'correct');
            } else {
                input.classList.add('wrong');
                wasEverWrong.add(inputKey);
                inputStates.set(inputKey, 'graded');
            }
        }
    });

    updateScore(quizId, data);
    saveProgress(quizId);
    checkCompletion(quizId, data);
}

// Show all answers
function showAllAnswers(quizId, data) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);

    inputs.forEach(input => {
        const inputKey = getInputKey(input);
        const blankNum = parseInt(input.dataset.blank);
        const currentState = inputStates.get(inputKey);

        // Skip already correct (green/yellow)
        if (currentState === 'correct') return;

        input.value = data.answers[blankNum - 1];

        // If was wrong, show red; if never attempted, show as revealed
        if (wasEverWrong.has(inputKey) || input.classList.contains('wrong')) {
            input.classList.remove('correct', 'retry');
            input.classList.add('wrong');
        } else {
            input.classList.add('correct');
        }

        input.readOnly = true;
        inputStates.set(inputKey, currentState === 'correct' ? 'correct' : 'shown');
    });

    updateScore(quizId, data);
    saveProgress(quizId);
}

// Toggle answer section visibility
function toggleAnswers(quizId) {
    const section = document.getElementById(`answers-${quizId}`);
    if (section) section.classList.toggle('show');
}

// Reset quiz
function resetQuiz(quizId, data) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
    inputs.forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'wrong', 'retry');
        input.readOnly = false;

        const inputKey = getInputKey(input);
        inputStates.delete(inputKey);
        wasEverWrong.delete(inputKey);
    });

    const scoreEl = document.getElementById(`score-${quizId}`);
    if (scoreEl) scoreEl.textContent = '0';

    const answersEl = document.getElementById(`answers-${quizId}`);
    if (answersEl) answersEl.classList.remove('show');

    // Focus first input
    const first = document.querySelector(`input[data-quiz="${quizId}"][data-blank="1"]`);
    if (first) first.focus();

    // Clear saved progress
    clearProgress(quizId);
}

// Review mode: Clear wrong answers and retry
function reviewWrong(quizId, data, mode) {
    const inputs = document.querySelectorAll(`input[data-quiz="${quizId}"]`);
    let firstWrong = null;

    inputs.forEach(input => {
        const inputKey = getInputKey(input);
        const state = inputStates.get(inputKey);

        // Determine if this should be cleared
        let shouldClear = false;

        if (mode === 'hard') {
            // Only inputs where answer was revealed (red)
            shouldClear = state === 'shown';
        } else if (mode === 'all') {
            // Include yellow (retry) and red (shown)
            shouldClear = state === 'shown' || (state === 'correct' && input.classList.contains('retry'));
        }

        if (shouldClear) {
            input.value = '';
            input.classList.remove('correct', 'wrong', 'retry');
            input.readOnly = false;
            inputStates.delete(inputKey);

            if (!firstWrong) firstWrong = input;
        }
    });

    updateScore(quizId, data);
    saveProgress(quizId);

    // Focus first cleared input
    if (firstWrong) {
        firstWrong.focus();
        firstWrong.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        alert('복습할 문제가 없습니다! 🎉');
    }
}
