/**
 * V2 Quiz System
 * Supports multiple question types: code-fill, mcq, short, essay
 * Reuses existing color feedback system (green/yellow/red)
 */

// State for v2 quizzes
const v2States = new Map();
const v2WasEverWrong = new Set();
let currentV2Round = null;

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
    updateV2Score();
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
        label.innerHTML = `
            <input type="radio" name="mcq-${q.id}" value="${i}" data-question="${q.id}">
            <span class="mcq-marker">${String.fromCharCode(9312 + i)}</span>
            <span class="mcq-text">${escapeHtml(opt)}</span>
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

    // Calculate input width based on longest acceptable answer
    let inputWidth = 400; // default max
    if (q.acceptableAnswers && q.acceptableAnswers.length > 0) {
        const maxLen = Math.max(...q.acceptableAnswers.map(a => a.length));
        // ~10px per character + padding, min 200px, max 100%
        inputWidth = Math.min(Math.max(maxLen * 10 + 40, 200), 800);
    }

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'short-answer-wrapper';
    inputWrapper.innerHTML = `
        <input type="text" class="short-answer-input v2-short" 
               data-question="${q.id}" 
               placeholder="답을 입력하세요..."
               enterkeyhint="done"
               style="width: ${inputWidth}px; max-width: 100%;">
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

    const showBtn = document.createElement('button');
    showBtn.className = 'btn btn-sm btn-show-answer';
    showBtn.textContent = '정답 예시 보기';
    showBtn.onclick = () => showEssayAnswer(q);
    container.appendChild(showBtn);
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
    if (q.rubric?.length) content = `<strong>채점 기준:</strong><br>` + q.rubric.map(r => `• ${r}`).join('<br>');
    if (q.acceptableAnswers?.length) content += `<br><br><strong>정답 예시:</strong><br>` + q.acceptableAnswers.join(' / ');

    answerDiv.innerHTML = content || '정답 예시가 없습니다.';
    card.querySelector('.question-body').appendChild(answerDiv);
}

function bindV2Events(round) {
    document.querySelectorAll('.v2-blank').forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.ctrlKey) {
                e.preventDefault();
                gradeV2CodeFill(input, round);
            } else if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                gradeAllV2();
            }
        });
    });

    document.querySelectorAll('.mcq-options input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', () => gradeV2Mcq(radio, round));
    });

    document.querySelectorAll('.v2-short').forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                gradeV2Short(input, round);
            }
        });
    });

    // Essay: Tab key moves to next question
    document.querySelectorAll('.v2-essay').forEach(textarea => {
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                const card = textarea.closest('.question-card');
                if (card) {
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
    const userAnswer = input.value.trim();
    const correctAnswer = blank.answer;
    const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);

    if (state === 'graded' && input.classList.contains('wrong')) {
        input.value = correctAnswer;
        input.readOnly = true;
        v2States.set(key, 'shown');
        moveToNextV2Input(input);
    } else if (!state || state !== 'correct') {
        input.classList.remove('correct', 'wrong', 'retry');
        if (userAnswer) {
            if (isCorrect) {
                input.classList.add(v2WasEverWrong.has(key) ? 'retry' : 'correct');
                input.readOnly = true;
                v2States.set(key, 'correct');
                moveToNextV2Input(input);
            } else {
                input.classList.add('wrong');
                v2WasEverWrong.add(key);
                v2States.set(key, 'graded');
            }
        }
    }
    updateV2Score();
}

function gradeV2Mcq(radio, round) {
    const questionId = radio.dataset.question;
    const question = round.questions.find(q => q.id === questionId);
    if (!question) return;

    const card = document.getElementById(`q-${questionId}`);
    const selectedIndex = parseInt(radio.value);
    const isCorrect = selectedIndex === question.correctIndex;
    const key = `mcq-${questionId}`;

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

    // Auto-focus to next question after MCQ is answered
    moveToNextQuestion(card);
}

function gradeV2Short(input, round) {
    const questionId = input.dataset.question;
    const question = round.questions.find(q => q.id === questionId);
    if (!question?.acceptableAnswers) return;

    const key = `short-${questionId}`;
    const state = v2States.get(key);
    const userAnswer = input.value.trim();
    const isCorrect = question.acceptableAnswers.some(ans =>
        question.caseSensitive ? userAnswer === ans : normalizeAnswer(userAnswer) === normalizeAnswer(ans)
    );

    if (state === 'graded' && input.classList.contains('wrong')) {
        // Second Enter on wrong answer: show correct answer and move to next
        input.value = question.acceptableAnswers[0];
        input.readOnly = true;
        v2States.set(key, 'shown');
        moveToNextV2Input(input);
    } else if (!state || state !== 'correct') {
        input.classList.remove('correct', 'wrong', 'retry');
        if (userAnswer) {
            if (isCorrect) {
                input.classList.add(v2WasEverWrong.has(key) ? 'retry' : 'correct');
                input.readOnly = true;
                v2States.set(key, 'correct');
                moveToNextV2Input(input);
            } else {
                input.classList.add('wrong');
                v2WasEverWrong.add(key);
                v2States.set(key, 'graded');
            }
        }
    }
    updateV2Score();
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
 * Move focus to next input field (blank or short answer)
 * Works for all question types with input fields
 * Fixed: Now correctly finds next input even when current input was just made readonly
 */
function moveToNextV2Input(currentInput) {
    // Get ALL inputs (including readonly) to find current position
    const allInputs = Array.from(document.querySelectorAll('.v2-blank, .v2-short'));
    const currentIndex = allInputs.indexOf(currentInput);

    if (currentIndex < 0) return;

    // Find next non-readonly input after current position
    for (let i = currentIndex + 1; i < allInputs.length; i++) {
        if (!allInputs[i].readOnly) {
            allInputs[i].focus();
            return;
        }
    }

    // No more editable inputs - move to next question
    const card = currentInput.closest('.question-card');
    if (card) {
        moveToNextQuestion(card);
    }
}

/**
 * Move focus to the next question card
 * Handles all question types: code-fill, mcq, short, essay
 * @param {HTMLElement} currentCard - Current question card element
 */
function moveToNextQuestion(currentCard) {
    if (!currentCard) return;

    const nextCard = currentCard.nextElementSibling;
    if (!nextCard || !nextCard.classList.contains('question-card')) {
        // No more questions - show completion message briefly
        return;
    }

    // Scroll to next question
    nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Focus on the first interactive element in next question
    setTimeout(() => {
        // Try code-fill blanks first
        const nextBlank = nextCard.querySelector('.v2-blank:not([readonly])');
        if (nextBlank) {
            nextBlank.focus();
            return;
        }

        // Try short answer input
        const nextShort = nextCard.querySelector('.v2-short:not([readonly])');
        if (nextShort) {
            nextShort.focus();
            return;
        }

        // Try MCQ radio buttons
        const nextRadio = nextCard.querySelector('input[type="radio"]:not(:disabled)');
        if (nextRadio) {
            nextRadio.focus();
            return;
        }

        // Try essay textarea
        const nextEssay = nextCard.querySelector('.v2-essay');
        if (nextEssay) {
            nextEssay.focus();
            return;
        }
    }, 100); // Small delay to allow scroll animation
}

// Normalize answer for flexible comparison (ignore whitespace only, preserve case)
function normalizeAnswer(str) {
    if (!str) return '';
    // Remove ALL whitespace for comparison (so "a = b" matches "a=b")
    // Case is preserved! (None != none)
    return str.replace(/\s+/g, '');
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

// Initialize floating panel on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initFloatingReferencePanel();
});

// Export v2 functions
if (typeof window !== 'undefined') {
    window.renderQuizRound = renderQuizRound;
    window.gradeAllV2 = gradeAllV2;
    window.resetV2Quiz = resetV2Quiz;
    window.showAllV2Answers = showAllV2Answers;
    window.reviewWrongV2 = reviewWrongV2;
    window.toggleReferencePanel = toggleReferencePanel;
}
