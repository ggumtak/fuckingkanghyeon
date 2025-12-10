/**
 * V2 Quiz System
 * Supports multiple question types: code-fill, mcq, short, essay
 * Reuses existing color feedback system (green/yellow/red)
 */

// State for v2 quizzes
const v2States = new Map();
const v2WasEverWrong = new Set();
let currentV2Round = null;

// Undo history for grading (Ctrl+Z support)
const v2UndoHistory = [];
const MAX_UNDO_HISTORY = 20;

// ========== Scroll Utility ==========
/**
 * Scroll element to optimal position in viewport
 * - Input fields (blank, short, essay): slightly below center (55%)
 * - MCQ cards: near top (20%) to show all options
 * - Mobile adjusts for keyboard
 */
function scrollToUpperCenterV2(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();

    // Use visualViewport if available (accounts for keyboard on mobile)
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const isMobile = window.innerWidth < 768;

    // Determine scroll position based on element type
    const isMcqCard = element.classList.contains('question-card') &&
        element.dataset.type === 'mcq';

    let scrollPercent;
    if (isMcqCard) {
        // MCQ cards: show near top so all options are visible
        scrollPercent = isMobile ? 0.15 : 0.15;
    } else {
        // Input fields: slightly above center for comfortable typing
        scrollPercent = isMobile ? 0.45 : 0.45;
    }

    let targetY = window.scrollY + rect.top - (viewportHeight * scrollPercent);

    // Mobile safety: Make sure input is at least 150px above keyboard area
    if (isMobile && !isMcqCard) {
        const maxY = window.scrollY + rect.top - (viewportHeight - 150);
        if (targetY > maxY) {
            targetY = maxY;
        }
    }

    window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
    });
}

// Get localStorage key for current quiz
function getV2StorageKey() {
    const setId = currentV2Round?.setId || 'unknown';
    return `v2_quiz_progress_${setId}`;
}

// Save v2 quiz progress to localStorage
function saveV2Progress() {
    if (!currentV2Round) return;

    const progress = {
        states: Object.fromEntries(v2States),
        wasEverWrong: Array.from(v2WasEverWrong),
        values: {},
        mcqSelections: {}
    };

    // Save input values
    document.querySelectorAll('.v2-blank, .v2-short').forEach(input => {
        const key = input.classList.contains('v2-short')
            ? `short-${input.dataset.question}`
            : `${input.dataset.question}-${input.dataset.blank}`;
        progress.values[key] = {
            value: input.value,
            readOnly: input.readOnly,
            classList: Array.from(input.classList).filter(c => ['correct', 'wrong', 'retry'].includes(c))
        };
    });

    // Save MCQ selections
    document.querySelectorAll('.mcq-option input[type="radio"]:checked').forEach(radio => {
        progress.mcqSelections[radio.name] = radio.value;
    });

    // Save essay values (including self-grading state)
    document.querySelectorAll('.v2-essay').forEach(textarea => {
        const qId = textarea.dataset.question;
        progress.values[`essay-${qId}`] = {
            value: textarea.value,
            readOnly: textarea.readOnly,
            classList: Array.from(textarea.classList).filter(c => ['correct', 'wrong', 'retry'].includes(c))
        };
    });

    try {
        localStorage.setItem(getV2StorageKey(), JSON.stringify(progress));
    } catch (e) {
        console.warn('Failed to save v2 progress:', e);
    }
}

// Load v2 quiz progress from localStorage
function loadV2Progress() {
    try {
        const stored = localStorage.getItem(getV2StorageKey());
        if (!stored) return null;
        return JSON.parse(stored);
    } catch (e) {
        console.warn('Failed to load v2 progress:', e);
        return null;
    }
}

// Restore v2 quiz progress after rendering
function restoreV2Progress() {
    const progress = loadV2Progress();
    if (!progress) return;

    // Restore states
    if (progress.states) {
        for (const [key, value] of Object.entries(progress.states)) {
            v2States.set(key, value);
        }
    }

    // Restore wasEverWrong
    if (progress.wasEverWrong) {
        progress.wasEverWrong.forEach(key => v2WasEverWrong.add(key));
    }

    // Restore input values
    if (progress.values) {
        for (const [key, data] of Object.entries(progress.values)) {
            if (key.startsWith('short-')) {
                const qId = key.replace('short-', '');
                const input = document.querySelector(`.v2-short[data-question="${qId}"]`);
                if (input && data) {
                    input.value = data.value || '';
                    input.readOnly = data.readOnly || false;
                    data.classList?.forEach(cls => input.classList.add(cls));
                }
            } else if (key.startsWith('essay-')) {
                const qId = key.replace('essay-', '');
                const textarea = document.querySelector(`.v2-essay[data-question="${qId}"]`);
                const card = document.getElementById(`q-${qId}`);
                if (textarea && data) {
                    textarea.value = data.value || '';
                    textarea.readOnly = data.readOnly || false;
                    data.classList?.forEach(cls => textarea.classList.add(cls));

                    // Restore self-grading UI state
                    const state = v2States.get(`essay-${qId}`);
                    if (state === 'self-correct' || state === 'self-wrong') {
                        const selfCheckWrapper = card?.querySelector('.essay-self-check');
                        if (selfCheckWrapper) {
                            const isCorrect = state === 'self-correct';
                            selfCheckWrapper.innerHTML = `
                                <span style="color: var(--${isCorrect ? 'success' : 'error'}); font-size: 0.9em; font-weight: 500;">
                                    ${isCorrect ? '✓ 정답 처리됨' : '✗ 오답 처리됨'}
                                </span>
                                <button type="button" class="btn btn-sm essay-self-reset" data-question="${qId}"
                                        style="background: transparent; color: var(--text-muted); border: 1px solid var(--border); font-size: 0.8em;">
                                    취소
                                </button>
                            `;
                            const resetBtn = selfCheckWrapper.querySelector('.essay-self-reset');
                            if (resetBtn) resetBtn.onclick = () => resetSelfGradeEssay(qId);
                        }
                    }
                }
            } else if (key.includes('-')) {
                const [qId, blankIdx] = key.split('-');
                const input = document.querySelector(`.v2-blank[data-question="${qId}"][data-blank="${blankIdx}"]`);
                if (input && data) {
                    input.value = data.value || '';
                    input.readOnly = data.readOnly || false;
                    data.classList?.forEach(cls => input.classList.add(cls));
                }
            }
        }
    }

    // Restore MCQ selections
    if (progress.mcqSelections) {
        for (const [name, value] of Object.entries(progress.mcqSelections)) {
            const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
            if (radio) {
                radio.checked = true;
                // Also apply visual state
                const option = radio.closest('.mcq-option');
                const questionId = name.replace('mcq-', '');
                const state = v2States.get(`mcq-${questionId}`);
                if (state === 'correct') {
                    option?.classList.add('correct');
                } else if (state === 'graded') {
                    // Wrong answer - show both wrong selection and correct answer
                    option?.classList.add('wrong');
                    // Find and highlight the correct answer
                    const card = radio.closest('.question-card');
                    if (card && currentV2Round) {
                        const question = currentV2Round.questions.find(q => q.id === questionId);
                        if (question && typeof question.correctIndex === 'number') {
                            const correctOption = card.querySelectorAll('.mcq-option')[question.correctIndex];
                            correctOption?.classList.add('correct');
                        }
                    }
                }
                // Disable all radios in this MCQ since it's already answered
                const card = radio.closest('.question-card');
                if (card) {
                    card.querySelectorAll('input[type="radio"]').forEach(r => r.disabled = true);
                }
            }
        }
    }

    updateV2Score();
}

/**
 * Render a v2 quiz round
 * @param {Object} round - QuizRound object
 * @param {string} containerId - Container element ID (default: 'v2-quiz-container')
 */
function renderQuizRound(round, containerId = 'v2-quiz-container') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('V2 quiz container not found:', containerId);
        return;
    }

    currentV2Round = round;
    container.innerHTML = '';

    // Render each question
    round.questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `q-${q.id}`;
        card.dataset.questionId = q.id;
        card.dataset.type = q.type;

        // Question header with number and type badge
        const typeBadges = {
            'code-fill': q.language?.toUpperCase() || 'CODE',
            'mcq': '객관식',
            'short': '단답형',
            'essay': '서술형'
        };

        card.innerHTML = `
            <div class="question-header">
                <span class="question-number">Q${index + 1}</span>
                <span class="question-type-badge ${q.type}">${typeBadges[q.type] || q.type}</span>
                ${q.points ? `<span class="question-points">${q.points}점</span>` : ''}
            </div>
            <div class="question-body"></div>
        `;

        const body = card.querySelector('.question-body');

        // Render based on type
        switch (q.type) {
            case 'code-fill':
                renderCodeFillQuestion(q, body);
                break;
            case 'mcq':
                renderMcqQuestion(q, body);
                break;
            case 'short':
                renderShortQuestion(q, body);
                break;
            case 'essay':
                renderEssayQuestion(q, body);
                break;
            default:
                body.innerHTML = `<p>Unknown question type: ${q.type}</p>`;
        }

        container.appendChild(card);
    });

    // Bind v2 events
    bindV2Events(round);

    // Restore saved progress from localStorage
    restoreV2Progress();

    updateV2Score();

    // Add shuffle button if not already present
    addShuffleButton();

    // Auto-generate prev/next navigation if function available
    if (typeof createBottomNavigation === 'function') {
        createBottomNavigation();
    }
}

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Shuffle current quiz questions and re-render
 */
function shuffleV2Quiz() {
    if (!currentV2Round) return;

    // Clear current progress
    v2States.clear();
    v2WasEverWrong.clear();
    localStorage.removeItem(getV2StorageKey());

    // Shuffle questions
    const shuffled = shuffleArray(currentV2Round.questions);
    const shuffledRound = {
        ...currentV2Round,
        questions: shuffled
    };

    // Re-render with shuffled questions
    renderQuizRound(shuffledRound);
}

/**
 * Add shuffle button to controls section
 */
function addShuffleButton() {
    const controls = document.querySelector('.controls');
    if (!controls) return;

    // Skip if already added
    if (controls.querySelector('.btn-shuffle')) return;

    const shuffleBtn = document.createElement('button');
    shuffleBtn.className = 'btn btn-secondary btn-shuffle';
    shuffleBtn.innerHTML = '🔀 섞기';
    shuffleBtn.title = '문제 순서 랜덤 섞기';
    shuffleBtn.onclick = shuffleV2Quiz;
    shuffleBtn.style.cssText = 'background: var(--accent-dim, rgba(168, 199, 250, 0.12)); border-color: var(--accent, #A8C7FA);';

    // Insert at the beginning of controls
    controls.insertBefore(shuffleBtn, controls.firstChild);
}

/**
     * Render code-fill question (SQL blanks)
     */
function renderCodeFillQuestion(q, container) {
    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.innerHTML = parseMarkdownPrompt(q.prompt);
    container.appendChild(prompt);

    const codeBlock = document.createElement('div');
    codeBlock.className = 'code-block v2-code';

    // Create a placeholder for blanks that won't be affected by hljs
    const blankPlaceholders = new Map();
    let codeText = q.code;

    // Replace ( N ) with unique placeholders before highlighting
    if (q.blanks) {
        for (let i = q.blanks.length; i >= 1; i--) {
            const placeholder = `___BLANK_${i}___`;
            blankPlaceholders.set(placeholder, i);
            codeText = codeText.replace(`( ${i} )`, placeholder);
        }
    }

    // Create pre and code elements for hljs
    const pre = document.createElement('pre');
    const code = document.createElement('code');

    // Set language class for highlight.js
    const langMap = {
        'sql': 'sql',
        'python': 'python',
        'javascript': 'javascript',
        'js': 'javascript',
        'csharp': 'csharp',
        'cs': 'csharp',
        'java': 'java',
        'cpp': 'cpp',
        'c': 'c'
    };
    const lang = langMap[q.language?.toLowerCase()] || q.language || 'plaintext';
    code.className = `language-${lang}`;
    code.textContent = codeText;
    pre.appendChild(code);
    codeBlock.appendChild(pre);
    container.appendChild(codeBlock);

    // Apply highlight.js if available
    if (typeof hljs !== 'undefined') {
        hljs.highlightElement(code);
    }

    // Now replace placeholders with actual input elements
    let highlightedHtml = code.innerHTML;
    blankPlaceholders.forEach((blankIndex, placeholder) => {
        const blank = q.blanks.find(b => b.index === blankIndex);
        const placeholderText = blank?.placeholder || `(${blankIndex})`;
        const inputHtml = `<input type="text" class="blank-input v2-blank" data-question="${q.id}" data-blank="${blankIndex}" placeholder="${placeholderText}" enterkeyhint="done">`;
        highlightedHtml = highlightedHtml.replace(placeholder, inputHtml);
    });

    code.innerHTML = highlightedHtml;
}

/**
 * Render MCQ question
 */
function renderMcqQuestion(q, container) {
    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.innerHTML = parseMarkdownPrompt(q.prompt);
    container.appendChild(prompt);

    const options = document.createElement('div');
    options.className = 'mcq-options';

    q.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.className = 'mcq-option';

        // Remove leading number markers if present (①②③④ or 1. 2. etc.)
        // Pattern: optional leading number/circle marker followed by space or dot
        const cleanOpt = opt.replace(/^[①②③④⑤⑥⑦⑧⑨⑩][\s.]?\s*|^\d+[\.\)]\s*/g, '').trim();

        label.innerHTML = `
            <input type="radio" name="mcq-${q.id}" value="${i}" data-question="${q.id}">
            <span class="mcq-marker">${String.fromCharCode(9312 + i)}</span>
            <span class="mcq-text">${escapeHtml(cleanOpt)}</span>
        `;
        options.appendChild(label);
    });

    container.appendChild(options);
}

/**
 * Render short answer question
 */
function renderShortQuestion(q, container) {
    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.innerHTML = parseMarkdownPrompt(q.prompt);
    container.appendChild(prompt);

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'short-answer-wrapper';
    inputWrapper.innerHTML = `
        <input type="text" class="short-answer-input v2-short" 
               data-question="${q.id}" 
               placeholder="답을 입력하세요..."
               enterkeyhint="done">
    `;
    container.appendChild(inputWrapper);
}

/**
 * Render essay question
 */
function renderEssayQuestion(q, container) {
    const prompt = document.createElement('div');
    prompt.className = 'question-prompt';
    prompt.innerHTML = parseMarkdownPrompt(q.prompt);
    container.appendChild(prompt);

    const textareaWrapper = document.createElement('div');
    textareaWrapper.className = 'essay-wrapper';
    textareaWrapper.innerHTML = `
        <textarea class="essay-textarea v2-essay" 
                  data-question="${q.id}" 
                  placeholder="답을 작성하세요..."
                  rows="4"></textarea>
    `;
    container.appendChild(textareaWrapper);

    // Button container for essay actions
    const btnGroup = document.createElement('div');
    btnGroup.className = 'essay-btn-group';
    btnGroup.style.cssText = 'display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;';

    // Show answer button
    const showBtn = document.createElement('button');
    showBtn.className = 'btn btn-sm btn-show-answer';
    showBtn.textContent = '정답 예시 보기';
    showBtn.onclick = () => showEssayAnswer(q);
    btnGroup.appendChild(showBtn);

    // Self-check buttons
    const selfCheckWrapper = document.createElement('div');
    selfCheckWrapper.className = 'essay-self-check';
    selfCheckWrapper.style.cssText = 'display: flex; gap: 6px; align-items: center;';
    selfCheckWrapper.innerHTML = `
        <span style="color: var(--text-muted); font-size: 0.85em; margin-right: 4px;">자기 채점:</span>
        <button type="button" class="btn btn-sm essay-self-correct" data-question="${q.id}" 
                style="background: var(--success-dim); color: var(--success); border: 1px solid var(--success);">
            ✓ 맞았어요
        </button>
        <button type="button" class="btn btn-sm essay-self-wrong" data-question="${q.id}"
                style="background: var(--error-dim); color: var(--error); border: 1px solid var(--error);">
            ✗ 틀렸어요
        </button>
    `;
    btnGroup.appendChild(selfCheckWrapper);
    container.appendChild(btnGroup);

    // Bind self-check events
    setTimeout(() => {
        const correctBtn = container.querySelector('.essay-self-correct');
        const wrongBtn = container.querySelector('.essay-self-wrong');
        if (correctBtn) correctBtn.onclick = () => selfGradeEssay(q.id, true);
        if (wrongBtn) wrongBtn.onclick = () => selfGradeEssay(q.id, false);
    }, 0);
}

/**
 * Self-grade essay question
 */
function selfGradeEssay(questionId, isCorrect) {
    const card = document.getElementById(`q-${questionId}`);
    if (!card) return;

    const textarea = card.querySelector('.v2-essay');
    const selfCheckWrapper = card.querySelector('.essay-self-check');
    const key = `essay-${questionId}`;

    // Remove existing state
    card.classList.remove('essay-self-correct-state', 'essay-self-wrong-state');
    textarea?.classList.remove('correct', 'wrong', 'retry');

    if (isCorrect) {
        card.classList.add('essay-self-correct-state');
        textarea?.classList.add('correct');
        if (textarea) textarea.readOnly = true;
        v2States.set(key, 'self-correct');

        // Update button states
        if (selfCheckWrapper) {
            selfCheckWrapper.innerHTML = `
                <span style="color: var(--success); font-size: 0.9em; font-weight: 500;">
                    ✓ 정답 처리됨
                </span>
                <button type="button" class="btn btn-sm essay-self-reset" data-question="${questionId}"
                        style="background: transparent; color: var(--text-muted); border: 1px solid var(--border); font-size: 0.8em;">
                    취소
                </button>
            `;
            const resetBtn = selfCheckWrapper.querySelector('.essay-self-reset');
            if (resetBtn) resetBtn.onclick = () => resetSelfGradeEssay(questionId);
        }
    } else {
        card.classList.add('essay-self-wrong-state');
        textarea?.classList.add('wrong');
        if (textarea) textarea.readOnly = true;
        v2States.set(key, 'self-wrong');
        v2WasEverWrong.add(key);

        // Update button states
        if (selfCheckWrapper) {
            selfCheckWrapper.innerHTML = `
                <span style="color: var(--error); font-size: 0.9em; font-weight: 500;">
                    ✗ 오답 처리됨
                </span>
                <button type="button" class="btn btn-sm essay-self-reset" data-question="${questionId}"
                        style="background: transparent; color: var(--text-muted); border: 1px solid var(--border); font-size: 0.8em;">
                    취소
                </button>
            `;
            const resetBtn = selfCheckWrapper.querySelector('.essay-self-reset');
            if (resetBtn) resetBtn.onclick = () => resetSelfGradeEssay(questionId);
        }
    }

    updateV2Score();
    saveV2Progress();
}

/**
 * Reset self-grade for essay question
 */
function resetSelfGradeEssay(questionId) {
    const card = document.getElementById(`q-${questionId}`);
    if (!card) return;

    const textarea = card.querySelector('.v2-essay');
    const selfCheckWrapper = card.querySelector('.essay-self-check');
    const key = `essay-${questionId}`;

    // Remove states
    card.classList.remove('essay-self-correct-state', 'essay-self-wrong-state');
    textarea?.classList.remove('correct', 'wrong', 'retry');
    if (textarea) textarea.readOnly = false;
    v2States.delete(key);

    // Restore buttons
    if (selfCheckWrapper) {
        selfCheckWrapper.innerHTML = `
            <span style="color: var(--text-muted); font-size: 0.85em; margin-right: 4px;">자기 채점:</span>
            <button type="button" class="btn btn-sm essay-self-correct" data-question="${questionId}" 
                    style="background: var(--success-dim); color: var(--success); border: 1px solid var(--success);">
                ✓ 맞았어요
            </button>
            <button type="button" class="btn btn-sm essay-self-wrong" data-question="${questionId}"
                    style="background: var(--error-dim); color: var(--error); border: 1px solid var(--error);">
                ✗ 틀렸어요
            </button>
        `;
        const correctBtn = selfCheckWrapper.querySelector('.essay-self-correct');
        const wrongBtn = selfCheckWrapper.querySelector('.essay-self-wrong');
        if (correctBtn) correctBtn.onclick = () => selfGradeEssay(questionId, true);
        if (wrongBtn) wrongBtn.onclick = () => selfGradeEssay(questionId, false);
    }

    updateV2Score();
    saveV2Progress();
}

function showEssayAnswer(q) {
    const card = document.getElementById(`q-${q.id}`);
    if (!card) return;

    let answerDiv = card.querySelector('.essay-answer-example');
    if (answerDiv) {
        answerDiv.classList.toggle('show');
        return;
    }

    answerDiv = document.createElement('div');
    answerDiv.className = 'essay-answer-example show';

    let content = '';

    // Show model answer first if available
    if (q.answer) {
        content = `<strong>모범 답안:</strong><br>${q.answer}`;
    }

    // Show rubric (grading criteria)
    if (q.rubric?.length) {
        if (content) content += '<br><br>';
        content += `<strong>채점 기준:</strong><br>` + q.rubric.map(r => `• ${r}`).join('<br>');
    }

    // Show acceptable answers for short answer type
    if (q.acceptableAnswers?.length) {
        if (content) content += '<br><br>';
        content += `<strong>정답 예시:</strong><br>` + q.acceptableAnswers.join(' / ');
    }

    answerDiv.innerHTML = content || '정답 예시가 없습니다.';
    card.querySelector('.question-body').appendChild(answerDiv);
}


function bindV2Events(round) {
    // v2-blank (code-fill inputs)
    document.querySelectorAll('.v2-blank').forEach(input => {
        // Focus: scroll to upper-center
        input.addEventListener('focus', () => scrollToUpperCenterV2(input));

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.ctrlKey) {
                e.preventDefault();
                gradeV2CodeFill(input, round);
            } else if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                gradeAllV2();
            } else if (e.key === "'" || e.key === '"') {
                // Auto-complete quotes: ' -> '' with cursor in between
                e.preventDefault();
                const start = input.selectionStart;
                const end = input.selectionEnd;
                const value = input.value;
                const quote = e.key;
                input.value = value.slice(0, start) + quote + quote + value.slice(end);
                input.setSelectionRange(start + 1, start + 1);
            }
        });
    });

    document.querySelectorAll('.mcq-options input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => gradeV2Mcq(radio, round));
    });

    // MCQ cards: keyboard 1234 selection and focus handling
    document.querySelectorAll('.question-card[data-type="mcq"]').forEach(card => {
        // Make card focusable
        card.setAttribute('tabindex', '0');

        // Track if focus came from mouse click (to avoid scroll interference)
        let isMouseFocusing = false;

        card.addEventListener('mousedown', () => {
            isMouseFocusing = true;
        });

        // Focus: scroll to upper-center ONLY on keyboard focus (Tab), not mouse click
        card.addEventListener('focus', () => {
            if (isMouseFocusing) {
                // Mouse click focus - don't scroll (would interfere with radio selection)
                isMouseFocusing = false;
                return;
            }
            // Keyboard Tab focus - scroll to show the card
            setTimeout(() => scrollToUpperCenterV2(card), 50);
        });

        // Reset flag on mouseup (in case focus didn't happen)
        card.addEventListener('mouseup', () => {
            isMouseFocusing = false;
        });

        // Keyboard selection: 1, 2, 3, 4 (or numpad)
        card.addEventListener('keydown', (e) => {
            // Skip if already answered (radio buttons disabled)
            const radios = card.querySelectorAll('input[type="radio"]');
            if (Array.from(radios).some(r => r.disabled)) return;

            // Map key to option index (1->0, 2->1, etc.)
            let optionIndex = -1;

            // Standard number keys (both keyboard and mobile)
            if (['1', '2', '3', '4', '5'].includes(e.key)) {
                optionIndex = parseInt(e.key) - 1;
            }
            // Numpad keys
            else if (e.code?.startsWith('Numpad') && ['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5'].includes(e.code)) {
                optionIndex = parseInt(e.code.replace('Numpad', '')) - 1;
            }

            if (optionIndex >= 0 && optionIndex < radios.length) {
                e.preventDefault();
                radios[optionIndex].checked = true;
                radios[optionIndex].dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
    });

    // v2-short (short answer inputs)
    document.querySelectorAll('.v2-short').forEach(input => {
        // Focus: scroll to upper-center
        input.addEventListener('focus', () => scrollToUpperCenterV2(input));

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                gradeV2Short(input, round);
            } else if (e.key === "'" || e.key === '"') {
                // Auto-complete quotes: ' -> '' with cursor in between
                e.preventDefault();
                const start = input.selectionStart;
                const end = input.selectionEnd;
                const value = input.value;
                const quote = e.key;
                input.value = value.slice(0, start) + quote + quote + value.slice(end);
                input.setSelectionRange(start + 1, start + 1);
            }
        });
    });

    // Essay: Tab key moves to next question
    document.querySelectorAll('.v2-essay').forEach(textarea => {
        // Focus: scroll to upper-center
        textarea.addEventListener('focus', () => scrollToUpperCenterV2(textarea));

        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                const card = textarea.closest('.question-card');
                if (card) {
                    moveToNextQuestion(card);
                }
            } else if (e.key === "'" || e.key === '"') {
                // Auto-complete quotes: ' -> '' with cursor in between
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const value = textarea.value;
                const quote = e.key;
                textarea.value = value.slice(0, start) + quote + quote + value.slice(end);
                textarea.setSelectionRange(start + 1, start + 1);
            } else if (e.ctrlKey && (e.key === '1' || e.key === '2')) {
                // Ctrl+1: Self-grade as correct, Ctrl+2: Self-grade as wrong
                e.preventDefault();
                const card = textarea.closest('.question-card');
                if (card) {
                    const questionId = card.id.replace('q-', '');
                    const isCorrect = e.key === '1';
                    selfGradeEssay(questionId, isCorrect);
                    moveToNextQuestion(card);
                }
            }
        });
    });
}

function gradeV2CodeFill(input, round) {
    const questionId = input.dataset.question;
    const blankIndex = parseInt(input.dataset.blank);
    const question = round.questions.find(q => q.id === questionId);
    if (!question?.blanks) return;

    const blank = question.blanks.find(b => b.index === blankIndex);
    if (!blank) return;

    const key = `${questionId}-${blankIndex}`;
    const state = v2States.get(key);

    // Save undo state before first grading (not on retry/show answer)
    if (!state || state !== 'correct') {
        saveUndoState(input, 'blank', { stateKey: key });
    }

    const userAnswer = input.value.trim();
    const correctAnswer = blank.answer;
    const isCorrect = userAnswer && normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);

    // Already graded wrong -> Second Enter: show answer or accept correction
    if (state === 'graded') {
        if (isCorrect) {
            // User corrected the answer - show as retry (yellow)
            input.classList.remove('wrong');
            input.classList.add('retry');
            input.readOnly = true;
            v2States.set(key, 'correct');
        } else {
            // Still wrong or empty - show correct answer
            input.value = correctAnswer;
            input.classList.remove('retry');
            input.classList.add('wrong');
            input.readOnly = true;
            v2States.set(key, 'shown');
        }
        moveToNextV2Input(input);
    } else if (!state || state !== 'correct') {
        // First Enter: grade the answer
        input.classList.remove('correct', 'wrong', 'retry');
        if (isCorrect) {
            input.classList.add(v2WasEverWrong.has(key) ? 'retry' : 'correct');
            input.readOnly = true;
            v2States.set(key, 'correct');
            moveToNextV2Input(input);
        } else {
            // Wrong or empty - mark as graded, need second Enter to show answer
            input.classList.add('wrong');
            v2WasEverWrong.add(key);
            v2States.set(key, 'graded');
        }
    }

    updateV2Score();
    saveV2Progress();
}

function gradeV2Mcq(radio, round) {
    const questionId = radio.dataset.question;
    const question = round.questions.find(q => q.id === questionId);
    if (!question) return;

    const card = document.getElementById(`q-${questionId}`);
    const key = `mcq-${questionId}`;

    // Save undo state before grading
    saveUndoState(radio, 'mcq', { stateKey: key });

    const selectedIndex = parseInt(radio.value);
    const isCorrect = selectedIndex === question.correctIndex;

    card.querySelectorAll('.mcq-option').forEach(opt => opt.classList.remove('correct', 'wrong'));
    const selectedLabel = radio.closest('.mcq-option');

    if (isCorrect) {
        selectedLabel.classList.add('correct');
        v2States.set(key, 'correct');
    } else {
        selectedLabel.classList.add('wrong');
        v2WasEverWrong.add(key);
        v2States.set(key, 'graded');
        const correctOption = card.querySelectorAll('.mcq-option')[question.correctIndex];
        if (correctOption) correctOption.classList.add('correct');
    }

    card.querySelectorAll('input[type="radio"]').forEach(r => r.disabled = true);
    updateV2Score();
    saveV2Progress();

    // Auto-focus to next question after MCQ is answered
    moveToNextQuestion(card);
}

function gradeV2Short(input, round) {
    const questionId = input.dataset.question;
    const question = round.questions.find(q => q.id === questionId);
    if (!question?.acceptableAnswers) return;

    const key = `short-${questionId}`;
    const state = v2States.get(key);

    // Save undo state before first grading (not on retry/show answer)
    if (!state || state !== 'correct') {
        saveUndoState(input, 'short', { stateKey: key });
    }

    const userAnswer = input.value.trim();
    const isCorrect = userAnswer && question.acceptableAnswers.some(ans =>
        question.caseSensitive ? userAnswer === ans : normalizeAnswer(userAnswer) === normalizeAnswer(ans)
    );

    // Already graded wrong -> Second Enter: show answer or accept correction
    if (state === 'graded') {
        if (isCorrect) {
            // User corrected the answer - show as retry (yellow)
            input.classList.remove('wrong');
            input.classList.add('retry');
            input.readOnly = true;
            v2States.set(key, 'correct');
        } else {
            // Still wrong or empty - show correct answer
            input.value = question.acceptableAnswers[0];
            input.classList.remove('retry');
            input.classList.add('wrong');
            input.readOnly = true;
            v2States.set(key, 'shown');
        }
        moveToNextV2Input(input);
    } else if (!state || state !== 'correct') {
        // First Enter: grade the answer
        input.classList.remove('correct', 'wrong', 'retry');
        if (isCorrect) {
            input.classList.add(v2WasEverWrong.has(key) ? 'retry' : 'correct');
            input.readOnly = true;
            v2States.set(key, 'correct');
            moveToNextV2Input(input);
        } else {
            // Wrong or empty - mark as graded, need second Enter to show answer
            input.classList.add('wrong');
            v2WasEverWrong.add(key);
            v2States.set(key, 'graded');
        }
    }

    updateV2Score();
    saveV2Progress();
}

function gradeAllV2() {
    if (!currentV2Round) return;
    currentV2Round.questions.forEach(q => {
        if (q.type === 'code-fill') {
            document.querySelectorAll(`.v2-blank[data-question="${q.id}"]`).forEach(input => {
                if (!input.readOnly) gradeV2CodeFill(input, currentV2Round);
            });
        } else if (q.type === 'short') {
            const shortInput = document.querySelector(`.v2-short[data-question="${q.id}"]`);
            if (shortInput && !shortInput.readOnly) gradeV2Short(shortInput, currentV2Round);
        }
    });
    updateV2Score();
}

function resetV2Quiz() {
    if (!currentV2Round) return;
    document.querySelectorAll('.v2-blank, .v2-short').forEach(input => {
        input.value = '';
        input.classList.remove('correct', 'wrong', 'retry');
        input.readOnly = false;
    });
    document.querySelectorAll('.mcq-option').forEach(opt => opt.classList.remove('correct', 'wrong'));
    document.querySelectorAll('.mcq-options input[type="radio"]').forEach(radio => {
        radio.checked = false;
        radio.disabled = false;
    });
    document.querySelectorAll('.v2-essay').forEach(textarea => textarea.value = '');
    document.querySelectorAll('.essay-answer-example').forEach(el => el.remove());
    v2States.clear();
    v2WasEverWrong.clear();
    updateV2Score();

    // Clear saved progress
    try {
        localStorage.removeItem(getV2StorageKey());
    } catch (e) { }
}

function showAllV2Answers() {
    if (!currentV2Round) return;
    currentV2Round.questions.forEach(q => {
        if (q.type === 'code-fill') {
            q.blanks?.forEach(blank => {
                const input = document.querySelector(`.v2-blank[data-question="${q.id}"][data-blank="${blank.index}"]`);
                if (input && !input.classList.contains('correct') && !input.classList.contains('retry')) {
                    input.value = blank.answer;
                    input.classList.add('wrong');
                    input.readOnly = true;
                }
            });
        } else if (q.type === 'mcq') {
            const card = document.getElementById(`q-${q.id}`);
            if (card) {
                const correctOption = card.querySelectorAll('.mcq-option')[q.correctIndex];
                if (correctOption) correctOption.classList.add('correct');
                card.querySelectorAll('input[type="radio"]').forEach(r => r.disabled = true);
            }
        } else if (q.type === 'short') {
            const input = document.querySelector(`.v2-short[data-question="${q.id}"]`);
            if (input && !input.classList.contains('correct') && !input.classList.contains('retry')) {
                input.value = q.acceptableAnswers?.[0] || '';
                input.classList.add('wrong');
                input.readOnly = true;
            }
        } else if (q.type === 'essay') {
            showEssayAnswer(q);
        }
    });
    updateV2Score();
    saveV2Progress();
}

function updateV2Score() {
    if (!currentV2Round) return;
    let correct = 0, total = 0;
    currentV2Round.questions.forEach(q => {
        if (q.type === 'code-fill') {
            q.blanks?.forEach(blank => {
                total++;
                if (v2States.get(`${q.id}-${blank.index}`) === 'correct') correct++;
            });
        } else if (q.type === 'mcq' || q.type === 'short') {
            total++;
            const key = q.type === 'mcq' ? `mcq-${q.id}` : `short-${q.id}`;
            if (v2States.get(key) === 'correct') correct++;
        } else if (q.type === 'essay') {
            // Essay questions count with self-grading
            total++;
            const essayState = v2States.get(`essay-${q.id}`);
            if (essayState === 'self-correct') correct++;
        }
    });
    const scoreEl = document.getElementById('v2-score');
    const totalEl = document.getElementById('v2-total');
    if (scoreEl) scoreEl.textContent = correct;
    if (totalEl) totalEl.textContent = total;
}

function moveToNextV2Blank(currentInput) {
    moveToNextV2Input(currentInput);
}

/**
 * Move focus to next unanswered question after current card
 * Used after MCQ is answered or essay is graded
 */
function moveToNextQuestion(currentCard) {
    if (!currentCard) return;

    // Get all question cards in order
    const allCards = Array.from(document.querySelectorAll('.question-card'));
    const currentCardIndex = allCards.indexOf(currentCard);

    // Look through remaining question cards for any unanswered question
    for (let i = currentCardIndex + 1; i < allCards.length; i++) {
        const card = allCards[i];
        const questionType = card.dataset.type;

        // Check for editable inputs (blank or short)
        const nextInput = card.querySelector('.v2-blank:not([readonly]), .v2-short:not([readonly])');
        if (nextInput) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => nextInput.focus(), 250);
            return;
        }

        // Check for unanswered MCQ (no radio buttons checked and not disabled)
        if (questionType === 'mcq') {
            const radios = card.querySelectorAll('input[type="radio"]');
            const anyChecked = Array.from(radios).some(r => r.checked);
            const allDisabled = Array.from(radios).every(r => r.disabled);

            if (!anyChecked && !allDisabled) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    // Focus the card itself for keyboard 1234 selection
                    card.focus();
                }, 250);
                return;
            }
        }

        // Check for essay textarea (that hasn't been graded yet)
        if (questionType === 'essay') {
            const nextEssay = card.querySelector('.v2-essay');
            const essayState = v2States.get(`essay-${card.id.replace('q-', '')}`);
            if (nextEssay && essayState !== 'self-correct' && essayState !== 'self-wrong') {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => nextEssay.focus(), 250);
                return;
            }
        }
    }

    // No more unanswered questions - quiz complete or at end
}

/**
 * Move focus to next input field (blank, short answer, or unanswered MCQ)
 * Works for all question types with input fields
 * Fixed: Now correctly finds next input even when current input was just made readonly
 * Enhanced: Also includes unanswered MCQ questions in focus navigation
 */
function moveToNextV2Input(currentInput) {
    // Get current question card
    const currentCard = currentInput.closest('.question-card');
    if (!currentCard) return;

    // Get all question cards in order
    const allCards = Array.from(document.querySelectorAll('.question-card'));
    const currentCardIndex = allCards.indexOf(currentCard);

    // First: try to find next input within the same card
    const sameCardInputs = Array.from(currentCard.querySelectorAll('.v2-blank, .v2-short'));
    const currentInputIndex = sameCardInputs.indexOf(currentInput);

    for (let i = currentInputIndex + 1; i < sameCardInputs.length; i++) {
        if (!sameCardInputs[i].readOnly) {
            sameCardInputs[i].focus();
            return;
        }
    }

    // Second: look through remaining question cards for any unanswered question
    for (let i = currentCardIndex + 1; i < allCards.length; i++) {
        const card = allCards[i];
        const questionType = card.dataset.type;

        // Check for editable inputs (blank or short)
        const nextInput = card.querySelector('.v2-blank:not([readonly]), .v2-short:not([readonly])');
        if (nextInput) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => nextInput.focus(), 250);
            return;
        }

        // Check for unanswered MCQ (no radio buttons checked and not disabled)
        if (questionType === 'mcq') {
            const radios = card.querySelectorAll('input[type="radio"]');
            const anyChecked = Array.from(radios).some(r => r.checked);
            const allDisabled = Array.from(radios).every(r => r.disabled);

            if (!anyChecked && !allDisabled) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    // Focus the card itself for keyboard 1234 selection
                    card.focus();
                }, 250);
                return;
            }
        }

        // Check for essay textarea
        const nextEssay = card.querySelector('.v2-essay');
        if (nextEssay && questionType === 'essay') {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => nextEssay.focus(), 250);
            return;
        }
    }

    // No more unanswered questions - quiz complete or at end
}


// Helper: Check if current page is a database quiz (case-insensitive grading)
function isDatabaseQuiz() {
    const path = window.location.pathname.toLowerCase();
    return path.includes('/database/') || path.includes('database-set');
}

// Normalize answer for flexible comparison
// Database quizzes: ignore whitespace AND case (SQL is case-insensitive)
// Other quizzes: ignore whitespace only, preserve case
function normalizeAnswer(str, forceCaseInsensitive = false) {
    if (!str) return '';
    // Remove ALL whitespace for comparison (so "a = b" matches "a=b")
    let normalized = str.replace(/\s+/g, '');

    // For database quizzes, also ignore case (SQL keywords/table names are case-insensitive)
    if (forceCaseInsensitive || isDatabaseQuiz()) {
        normalized = normalized.toLowerCase();
    }

    return normalized;
}

/**
 * Review only wrong answers - resets wrong items for re-practice
 */
function reviewWrongV2() {
    if (!currentV2Round) return;

    let hasWrong = false;

    currentV2Round.questions.forEach(q => {
        if (q.type === 'code-fill') {
            q.blanks?.forEach(blank => {
                const key = `${q.id}-${blank.index}`;
                const state = v2States.get(key);
                if (v2WasEverWrong.has(key) || state === 'shown' || state === 'graded') {
                    const input = document.querySelector(`.v2-blank[data-question="${q.id}"][data-blank="${blank.index}"]`);
                    if (input) {
                        input.value = '';
                        input.classList.remove('correct', 'wrong', 'retry');
                        input.readOnly = false;
                        v2States.delete(key);
                        hasWrong = true;
                    }
                }
            });
        } else if (q.type === 'mcq') {
            const key = `mcq-${q.id}`;
            if (v2WasEverWrong.has(key) || v2States.get(key) === 'graded') {
                const card = document.getElementById(`q-${q.id}`);
                if (card) {
                    card.querySelectorAll('.mcq-option').forEach(opt => opt.classList.remove('correct', 'wrong'));
                    card.querySelectorAll('input[type="radio"]').forEach(r => {
                        r.checked = false;
                        r.disabled = false;
                    });
                    v2States.delete(key);
                    hasWrong = true;
                }
            }
        } else if (q.type === 'short') {
            const key = `short-${q.id}`;
            const state = v2States.get(key);
            if (v2WasEverWrong.has(key) || state === 'shown' || state === 'graded') {
                const input = document.querySelector(`.v2-short[data-question="${q.id}"]`);
                if (input) {
                    input.value = '';
                    input.classList.remove('correct', 'wrong', 'retry');
                    input.readOnly = false;
                    v2States.delete(key);
                    hasWrong = true;
                }
            }
        }
    });

    v2WasEverWrong.clear();
    updateV2Score();
    saveV2Progress();

    if (!hasWrong) {
        alert('복습할 문제가 없습니다! 🎉');
    } else {
        const firstBlank = document.querySelector('.v2-blank:not([readonly]), .v2-short:not([readonly])');
        if (firstBlank) firstBlank.focus();
    }
}

// ========== Floating Reference Panel ==========

/**
 * Initialize floating reference panel for database quizzes
 * Converts inline <details class="reference-tables-inline"> to floating panel
 */
function initFloatingReferencePanel() {
    const inlineTables = document.querySelector('.reference-tables-inline');
    if (!inlineTables) return;

    // Create floating panel
    const panel = document.createElement('div');
    panel.className = 'reference-panel';
    panel.id = 'referencePanel';
    panel.innerHTML = `
        <div class="reference-panel-header">
            <h3>📊 참고 테이블</h3>
            <button class="reference-panel-close" onclick="toggleReferencePanel()">✕</button>
        </div>
        <div class="reference-panel-content" id="referencePanelContent"></div>
    `;
    document.body.appendChild(panel);

    // Create toggle button (FAB)
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'reference-toggle-btn';
    toggleBtn.id = 'referenceToggleBtn';
    toggleBtn.innerHTML = '📊 테이블';
    toggleBtn.title = '참조 테이블 열기';
    toggleBtn.onclick = function () { toggleReferencePanel(); };
    document.body.appendChild(toggleBtn);

    // Move table content to floating panel
    const content = document.getElementById('referencePanelContent');
    const detailsContent = inlineTables.querySelector('details');
    if (detailsContent) {
        // Get inner content (skip summary)
        const innerContent = detailsContent.querySelector('div');
        if (innerContent) {
            content.innerHTML = innerContent.innerHTML;
        }
    }

    // Hide inline tables
    inlineTables.style.display = 'none';
}

/**
 * Toggle floating reference panel
 */
function toggleReferencePanel() {
    const panel = document.getElementById('referencePanel');
    const btn = document.getElementById('referenceToggleBtn');
    if (!panel) return;

    panel.classList.toggle('open');
    if (btn) btn.classList.toggle('hidden', panel.classList.contains('open'));
}

// Helper function for escaping HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Parse markdown-style code blocks in prompt text and apply syntax highlighting
 * Converts ```language\ncode\n``` to highlighted <pre><code> blocks
 * @param {string} promptText - The raw prompt text
 * @returns {string} - HTML with code blocks syntax highlighted
 */
function parseMarkdownPrompt(promptText) {
    if (!promptText) return '';

    // Pattern: ```language\ncode\n``` or ```\ncode\n```
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;

    let result = promptText;
    let match;

    while ((match = codeBlockRegex.exec(promptText)) !== null) {
        const lang = match[1] || 'plaintext';
        const code = match[2].trim();
        const escapedCode = escapeHtml(code);

        // Create highlighted code block
        let highlightedCode = escapedCode;
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
                // Fallback if language not recognized
                highlightedCode = escapedCode;
            }
        }

        const codeBlockHtml = `<pre class="hljs-code-block"><code class="hljs language-${lang}">${highlightedCode}</code></pre>`;
        result = result.replace(match[0], codeBlockHtml);
    }

    // Handle remaining line breaks (outside code blocks)
    result = result.replace(/\n/g, '<br>');

    return result;
}

// ========== Auto Navigation (Prev/Next) ==========
/**
 * Create bottom prev/next navigation buttons (v2 version)
 * Reuses quiz-config.js navigation functions if available
 */
function createBottomNavigation() {
    // Remove any existing hardcoded nav buttons first
    const existingHardcodedNav = document.querySelector('.quiz-nav-buttons');
    if (existingHardcodedNav) {
        existingHardcodedNav.remove();
    }

    if (document.getElementById('bottomNav')) return;

    const prevInfo = typeof getPrevQuizInfo === 'function' ? getPrevQuizInfo() : null;
    const nextInfo = typeof getNextQuizInfo === 'function' ? getNextQuizInfo() : null;

    // Create navigation container
    const nav = document.createElement('div');
    nav.id = 'bottomNav';
    nav.innerHTML = `
        <a href="${prevInfo ? (prevInfo.file || `quiz-${prevInfo.id}.html`) : '#'}" 
           class="bottom-nav-btn prev ${!prevInfo ? 'disabled' : ''}"
           ${!prevInfo ? 'onclick="return false;"' : ''}>
            <span class="nav-arrow">←</span>
            <span class="nav-label">
                <span class="nav-direction">이전</span>
                <span class="nav-title">${prevInfo ? prevInfo.title : ''}</span>
            </span>
        </a>
        <a href="${nextInfo ? (nextInfo.file || `quiz-${nextInfo.id}.html`) : '#'}" 
           class="bottom-nav-btn next ${!nextInfo ? 'disabled' : ''}"
           ${!nextInfo ? 'onclick="return false;"' : ''}>
            <span class="nav-label">
                <span class="nav-direction">다음</span>
                <span class="nav-title">${nextInfo ? nextInfo.title : ''}</span>
            </span>
            <span class="nav-arrow">→</span>
        </a>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        #bottomNav {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            margin-top: 32px;
            padding: 20px 0;
            border-top: 1px solid var(--border, #444746);
        }
        .bottom-nav-btn {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            background: var(--bg-card, #1E1F20);
            border: 1px solid var(--border, #444746);
            border-radius: 12px;
            text-decoration: none;
            color: var(--text, #E3E3E3);
            transition: all 0.2s ease;
        }
        .bottom-nav-btn:hover:not(.disabled) {
            background: var(--hover-bg, rgba(255,255,255,0.08));
            border-color: var(--accent, #A8C7FA);
            transform: translateY(-2px);
        }
        .bottom-nav-btn.disabled {
            opacity: 0.3;
            cursor: not-allowed;
            pointer-events: none;
        }
        .bottom-nav-btn.next {
            justify-content: flex-end;
            text-align: right;
        }
        .nav-arrow {
            font-size: 1.5rem;
            color: var(--accent, #A8C7FA);
        }
        .nav-label {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .nav-direction {
            font-size: 0.8rem;
            color: var(--text-muted, #7F848E);
        }
        .nav-title {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text, #E3E3E3);
        }
        @media (max-width: 480px) {
            #bottomNav {
                gap: 10px;
            }
            .bottom-nav-btn {
                padding: 12px 14px;
            }
            .nav-arrow {
                font-size: 1.2rem;
            }
            .nav-title {
                font-size: 0.9rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Insert after main container
    const container = document.querySelector('.container') || document.body;
    container.appendChild(nav);
}

// Initialize floating panel on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initFloatingReferencePanel();
});

// ========== Undo Grading System (Ctrl+Z) ==========
/**
 * Save current state of an element before grading for undo
 */
function saveUndoState(element, type, extraData = {}) {
    const state = {
        type, // 'blank', 'short', 'mcq'
        element,
        timestamp: Date.now(),
        value: element.value || '',
        classes: [...element.classList],
        readOnly: element.readOnly || false,
        disabled: element.disabled || false,
        ...extraData
    };

    // For MCQ, also save radio states
    if (type === 'mcq') {
        const card = element.closest('.question-card');
        if (card) {
            state.cardClasses = [...card.classList];
            state.radioStates = [];
            card.querySelectorAll('input[type="radio"]').forEach(radio => {
                const option = radio.closest('.mcq-option');
                state.radioStates.push({
                    radio,
                    checked: radio.checked,
                    disabled: radio.disabled,
                    optionClasses: option ? [...option.classList] : []
                });
            });
        }
    }

    v2UndoHistory.push(state);
    if (v2UndoHistory.length > MAX_UNDO_HISTORY) {
        v2UndoHistory.shift();
    }
}

/**
 * Undo the last grading action (Ctrl+Z)
 */
function undoLastGrading() {
    if (v2UndoHistory.length === 0) {
        console.log('No grading history to undo');
        return false;
    }

    const state = v2UndoHistory.pop();

    if (state.type === 'blank' || state.type === 'short') {
        const input = state.element;
        if (!input) return false;

        // Restore previous state
        input.value = state.value;
        input.className = state.classes.join(' ');
        input.readOnly = state.readOnly;

        // Remove state from v2States if exists
        if (state.stateKey) {
            v2States.delete(state.stateKey);
        }

        // Focus the input
        input.focus();

    } else if (state.type === 'mcq') {
        // Restore radio and option states
        if (state.radioStates) {
            state.radioStates.forEach(rs => {
                rs.radio.checked = rs.checked;
                rs.radio.disabled = rs.disabled;
                const option = rs.radio.closest('.mcq-option');
                if (option) {
                    option.className = rs.optionClasses.join(' ');
                }
            });
        }

        // Restore card classes
        const card = state.element?.closest('.question-card');
        if (card && state.cardClasses) {
            card.className = state.cardClasses.join(' ');
        }

        // Remove state from v2States
        if (state.stateKey) {
            v2States.delete(state.stateKey);
        }

        // Focus the card
        if (card) card.focus();
    }

    // Update score display
    updateV2Score();
    saveV2Progress();

    console.log('Grading undone');
    return true;
}

// Global Ctrl+Z handler for quiz pages
document.addEventListener('keydown', (e) => {
    // Ctrl+Z to undo last grading
    if (e.ctrlKey && e.key === 'z' && !e.shiftKey) {
        // Don't prevent default for text inputs that aren't graded
        const activeEl = document.activeElement;
        const isTextInput = activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA';

        if (isTextInput && !activeEl.readOnly) {
            // Allow normal undo for editable inputs
            return;
        }

        // Otherwise, undo last grading
        if (v2UndoHistory.length > 0) {
            e.preventDefault();
            undoLastGrading();
        }
    }
});

// Export v2 functions
if (typeof window !== 'undefined') {
    window.renderQuizRound = renderQuizRound;
    window.gradeAllV2 = gradeAllV2;
    window.resetV2Quiz = resetV2Quiz;
    window.showAllV2Answers = showAllV2Answers;
    window.reviewWrongV2 = reviewWrongV2;
    window.toggleReferencePanel = toggleReferencePanel;
    window.undoLastGrading = undoLastGrading;
}
