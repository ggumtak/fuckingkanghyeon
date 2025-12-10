# Quiz App - Project Specification (spec.md)

> [!CRITICAL]
> ## 🤖 AI Quick Contract (For All Coding Agents: Human & AI)
>
> 1. **Always prioritize maintainability, optimization, and stability.**
>    - Prefer simple, readable, and predictable code over “clever” but fragile solutions.
>    - Do not introduce unnecessary complexity only to save a few lines or micro-optimize.
>    - Never break existing working features without a clear reason and a migration/rollback plan.
>
> 2. **This file (`spec.md`) is the Single Source of Truth for this project.**
>    - If actual code and this document disagree, **update this document first**, then align the code.
>    - When you make a meaningful change to any of the following, you **MUST** update `spec.md`:
>      - Folder structure or file placement rules
>      - Quiz data model (v1/v2 formats, question types, required fields)
>      - Core behavior of shared modules:
>        - `quiz-app.js`, `quiz-v2.js` (rendering, grading, state management)
>        - `quiz-config.js`, `nav-config.js` (navigation & module registration)
>        - `ai-chat.js` (AI chat behavior or API integration)
>
> 3. **When NOT strictly required to update `spec.md` (optional changes):**
>    - Small UI text copy changes (Korean or English)
>    - Minor layout tweaks that do not change workflows or structure
>    - Internal refactors that keep the same external behavior and public API
>    → For these, updating this file is **recommended but not mandatory**.
>
> 4. **Language Rules (MANDATORY)**
>    - All **code, comments, variable names, function names, and documentation inside code files** must be written in **ENGLISH**.
>    - **Korean is allowed ONLY for:**
>      - Web UI text visible to users (buttons, labels, messages, prompts)
>      - Reference materials in the `resources/` folder
>      - Quiz question prompts and explanations shown in the UI
>
> 5. **Python Tooling (Available)**
>    - Python is available for batch operations, code generation, and optimization tasks.
>    - Use cases: bulk file updates, data processing, quiz set generation, code refactoring.
>    - **Delete temp scripts after use** (do not commit utility scripts to repo).
>    - Document significant Python-based changes in this file.
>
> 6. **If you are a new agent (or new to this project):**
>    - Open this file and **first read all sections whose titles end with:**
>      - `[AI MUST READ]`
>      - `[AI MUST READ WHEN EDITING]`
>    - At minimum, read:
>      - Section 0 – How to Use This Document        `[AI MUST READ]`
>      - Section 2 – File Structure                  `[AI MUST READ]`
>      - Section 4 – Quiz Data Model                 `[AI MUST READ]`
>      - Section 5 – Core Modules                    `[AI MUST READ]`
>      - Section 7 – AI Agent Guidelines             `[AI MUST READ]`

---

> [!NOTE]
> **Purpose of this Document**
>
> - Enable **humans/AI** new to this project to quickly understand the structure.
> - Provide a reference for **safely adding** new quizzes (MCQ/short answer/essay/fill-in-the-blank).
> - Prevent changes that would silently break folder structure, quiz data model, or shared modules.

---

## 0. How to Use This Document  [AI MUST READ]

1. **Understand Overall Structure**  
   Read sections **1–3** to grasp the file structure and design system.

2. **Check Data Model**  
   Read **section 4** and follow the quiz data schema.

3. **Understand Core Modules**  
   Section **5** explains the roles of `quiz-app.js` and `ai-chat.js`.

4. **Use Task-Specific Workflows**  
   From **section 6**:
   - Add new round → 6.1  
   - Add new question type → 6.2  
   - Modify AI features → 6.3  

5. **Always Use This Document as Reference**  
   If actual code differs from this document, **update this document first**, then align code/workflows.

---

## 1. System Overview  [REFERENCE]

### 1.1 Current Features

- **Python Linked List Code Fill-in-the-blank Quiz** (10+ rounds, 350+ questions)
- **Individual/Batch Grading** (`Enter` = individual, `Ctrl+Enter` = batch)
- **3-Level Feedback**:
  - 🟢 Green = Correct on first try (readOnly)
  - 🟡 Yellow = Fixed after wrong (readOnly)
  - 🔴 Red = Wrong or answer revealed
- **Review Mode**: Wrong questions only / Include fixed questions
- **Gemini-style Sidebar Navigation**
- **AI Chat Panel** (`Ctrl+L`): Gemini 2.5 Flash API integration
- **Blank Practice Mode** (`blank-practice.html`)
- **PWA Support** (v2.1): Install as mobile app, offline caching via Service Worker
- **Custom Dark Scrollbars**: Matches Gemini-style dark theme
- **Smart Focus Navigation**: When solving backwards, jumps to closest unfilled blank instead of top
- **Auto-scroll to Upper Center**: Focused blank automatically scrolls to ~35% from viewport top
- **Progress Persistence**: LocalStorage saves quiz progress, restored on page reload
- **Completion Modal**: Shows "Next / Retry / Home" buttons when all blanks filled correctly
- **Floating Navigation Bar**: Quick quiz switching (1-10) at top of quiz pages
- **Responsive Design**: Optimized for Galaxy S23 Ultra (phone) and Galaxy S7+ (tablet)
- **Shuffle Questions**: Random question order button on all quiz pages
- **MCQ Keyboard Navigation**: Number keys (1-4) to select options, auto-advance to next question
- **Essay Self-Grading**: Ctrl+1 (correct) / Ctrl+2 (wrong) for essay questions
- **Quote Auto-Complete**: Typing ' or " auto-completes to '' or "" with cursor between
- **Swipe Navigation**: Swipe/drag from screen edges to navigate between quiz pages (mobile + desktop)

### 1.2 Long-term Goals

**General-Purpose Quiz Generation Platform**

- **Input**: User defines quizzes in Markdown/text/code
- **Processing**: AI parser or script converts to common **Quiz Data Model (v2)**
- **Output**: Auto-generate responsive web quiz pages

**Support Various Question Types:**

- Code fill-in-the-blank (currently implemented)
- Multiple Choice (MCQ)
- Short Answer
- Essay (AI grading integration possible)

---

## 2. File Structure  [AI MUST READ]

> [!IMPORTANT]
> **Follow folder placement rules strictly!**
>
> - `quizzes/` = Quiz files only (HTML, question data JS)
> - `resources/` = Reference materials only (OCR, CSV, documents)
> - `shared/` = Shared scripts/styles

```text
testpractice-main/
├── quiz.html                    # Main dashboard (deprecated, use index.html)
├── index.html                   # Main dashboard / PWA entry
├── manifest.json                # PWA manifest
├── sw.js                        # Service Worker
├── deploy.bat                   # GitHub Pages deploy
│
├── quizzes/                     # 🎯 Quiz-only folder
│   ├── database/                # Database subject
│   │   ├── database-set1.html ~ set12.html  # Set-based quiz pages
│   │   ├── database-midterm.html            # Midterm practice
│   │   └── data/
│   │       └── set1.js ~ set12.js           # Question data
│   │
│   └── linked_list/             # Python Linked List subject
│       ├── quiz-1.html ~ quiz-10.html       # Round-based quiz pages
│       ├── linked-list-full.html            # Full code practice (Set 1+2)
│       ├── blank-practice.html              # Blank practice mode
│       └── data/
│           ├── quiz-1-data.js ~ quiz-10-data.js
│           ├── linked-list-set1.js          # Set 1: 주요 로직 (27문제)
│           └── linked-list-set2.js          # Set 2: 변수/조건식 (21문제)
│
├── resources/                   # 📚 Reference materials folder
│   ├── README.md                # Usage guide
│   │
│   ├── database/                # DB subject references
│   │   ├── userTbl.csv          # User table sample
│   │   ├── buyTbl.csv           # Purchase table sample
│   │   └── database_ocr.txt     # Lecture slide OCR
│   │
│   └── linked_list/             # Linked list references
│       ├── data_structure_week12_source.txt
│       └── anki_*.tsv           # Anki card data
│
├── shared/                      # 🔧 Shared modules
│   ├── styles.css               # Main styles (global theme)
│   ├── index.css                # Main dashboard styles
│   ├── quiz-v2-styles.css       # v2 quiz styles
│   ├── quiz-app.js              # v1 quiz engine
│   ├── quiz-v2.js               # v2 quiz engine
│   ├── quiz-config.js           # 🔑 Subject/set registration
│   ├── nav-config.js            # Sidebar config
│   ├── sidebar.js               # Sidebar rendering
│   ├── swipe-nav.js             # Swipe/drag page navigation
│   └── ai-chat.js               # AI chat panel
│
├── assets/                      # App icons, images
│   └── img.png                  # App icon
│
└── .agent/workflows/            # AI agent workflows
````

### 2.1 File Placement Rules

| File Type           | Location                | Example               |
| ------------------- | ----------------------- | --------------------- |
| Quiz HTML pages     | `quizzes/subject/`      | `database-set1.html`  |
| Question data JS    | `quizzes/subject/data/` | `set1.js`             |
| OCR, CSV, documents | `resources/subject/`    | `userTbl.csv`         |
| Backup files (.bak) | `resources/subject/`    | -                     |
| Shared scripts      | `shared/`               | `quiz-app.js`         |
| Project docs        | `resources/` (root)     | This file (`spec.md`) |

### 2.2 Adding New Subject Procedure

1. Create `quizzes/new_subject/` folder
2. Create `quizzes/new_subject/data/` folder
3. Create `resources/new_subject/` folder (for references)
4. Create HTML and JS files
5. Register module in `shared/quiz-config.js` (folder: `'quizzes/new_subject'`)

### 2.3 Core File Roles

| File             | Role                                   | Modification Notes                    |
| ---------------- | -------------------------------------- | ------------------------------------- |
| `quiz-config.js` | Subject/set registration, folder paths | `quizzes/` prefix required for folder |
| `quiz-app.js`    | v1 quiz rendering, grading, state      | Maintain function separation          |
| `quiz-v2.js`     | v2 quiz (essay, MCQ, etc.)             | Extend when adding new types          |
| `nav-config.js`  | Sidebar menu structure definition      | LocalStorage integration              |
| `ai-chat.js`     | Gemini API integration, chat UI        | API key in LocalStorage               |
| `styles.css`     | Global design system                   | Use CSS variables only                |
| `index.css`      | Main dashboard styles                  | Folder/file card grid, animations     |

---

## 3. Design System  [REFERENCE]

### 3.1 Color Tokens (CSS Variables)

> [!IMPORTANT]
> Colors must **only be used via CSS variables**. No hardcoding.

```css
:root {
    /* === Core Backgrounds (Gemini style) === */
    --bg-primary: #131314;       /* Main background */
    --bg-secondary: #1E1F20;     /* Sidebar, input areas */
    --bg-tertiary: #282A2C;      /* Elevated cards */
    --bg-card: #1E1F20;          /* Card background */
    --bg-card-hover: #282A2C;    /* Card hover */

    /* === Accent Blues === */
    --accent: #A8C7FA;           /* Links, buttons */
    --accent-glow: #4285F4;      /* Gradient blue */
    --accent-light: #A8C7FA;     /* Emphasis text */
    --accent-dim: rgba(168, 199, 250, 0.12);
    --accent-border: rgba(168, 199, 250, 0.3);

    /* === Status Colors === */
    --success: #4ade80;          /* Correct (green) */
    --success-dim: rgba(74, 222, 128, 0.12);
    --error: #F97373;            /* Wrong (red) */
    --error-dim: rgba(249, 115, 115, 0.12);
    --warning: #FBBF24;          /* Retry (yellow) */
    --warning-dim: rgba(251, 191, 36, 0.12);

    /* === Text Hierarchy === */
    --text: #E3E3E3;             /* Primary text */
    --text-secondary: #C4C7C5;   /* Secondary text */
    --text-muted: #7F848E;       /* Muted text */
    --text-dim: #444746;         /* Placeholder */

    /* === Code Blocks === */
    --code-bg: #1E1E1E;          /* Code background */
    --code-border: rgba(68, 71, 70, 0.5);

    /* === Borders & Interactions === */
    --border: #444746;
    --border-hover: rgba(255, 255, 255, 0.12);
    --hover-bg: rgba(255, 255, 255, 0.08);
    --active-bg: rgba(255, 255, 255, 0.12);

    /* === Shadows === */
    --shadow-md: 0 12px 40px rgba(0, 0, 0, 0.6);
    --shadow-lg: 0 24px 60px rgba(0, 0, 0, 0.7);
    --shadow-glow: 0 0 20px rgba(168, 199, 250, 0.1);

    /* === Border Radius === */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --radius-pill: 999px;
}
```

### 3.2 Syntax Highlighting (Atom One Dark)

| Token       | Color     | Usage                      |
| ----------- | --------- | -------------------------- |
| `.keyword`  | `#C678DD` | `def`, `class`, `if`, etc. |
| `.function` | `#61AFEF` | Function names             |
| `.string`   | `#98C379` | Strings                    |
| `.number`   | `#D19A66` | Numbers                    |
| `.comment`  | `#5C6370` | Comments                   |
| `.builtin`  | `#E5C07B` | Built-in functions         |
| `.variable` | `#E06C75` | Variable names             |

### 3.3 Fonts

| Usage          | Font                    | Notes         |
| -------------- | ----------------------- | ------------- |
| UI Text        | `Inter`, `Noto Sans KR` | Modern, clean |
| Code           | `JetBrains Mono`        | Monospace     |
| Korean special | `BMJua`                 | Friendly feel |

### 3.4 Input Field State Classes

```css
.blank-input           /* Default state */
.blank-input.correct   /* Correct on first try → readOnly */
.blank-input.retry     /* Fixed after wrong → readOnly */
.blank-input.wrong     /* Wrong state */
```

### 3.5 Layout Patterns

**Main Page (`quiz.html`)**:

* Hero section: Badge + Title + Stats pill
* Card grid: Round-based navigation cards
* Tips section: Keyboard shortcuts

**Quiz Page (`quiz-N.html`)**:

* Header: Round title + subtitle
* Code block: Code with blanks
* Controls: Grade/Answer/Reset buttons
* Score display: Current score / Total
* Answer table: Toggleable

**Responsive Breakpoints**:

* `≥ 1024px`: Fixed sidebar, 3-column card grid
* `768px ~ 1023px`: Collapsed sidebar, 2-column grid
* `≤ 767px`: Overlay sidebar, 1-column grid

---

## 4. Quiz Data Model  [AI MUST READ]

> [!IMPORTANT]
> All quizzes use the v2 format. The v1 format has been deprecated and removed.

### 4.1 Quiz Data Structure

```javascript
// File: data/v2/linked-list-N.js

/**
 * @typedef {Object} QuizRound
 * @property {string} id - Globally unique ID (e.g., 'linked-list-7')
 * @property {string} title - Display title
 * @property {string} subject - Matches subject.id in nav-config.js
 * @property {string} [level] - Difficulty (basic, intermediate, advanced)
 * @property {string[]} [tags] - Search/filter tags
 * @property {Question[]} questions - Question array
 */

export const quizRound = {
    id: 'linked-list-7',
    title: 'Round 7: Advanced Pointers',
    subject: 'linked-list',
    level: 'advanced',
    tags: ['python', 'linked-list', 'pointer'],
    questions: [ /* Question[] */ ]
};
```

#### 4.2.2 Common Fields (BaseQuestion)

```javascript
/**
 * @typedef {Object} BaseQuestion
 * @property {string} id - Question ID (e.g., 'q1')
 * @property {'code-fill' | 'mcq' | 'short' | 'essay'} type - Question type
 * @property {string} prompt - Question text (Korean for UI)
 * @property {number} [points=1] - Points
 * @property {string} [explanation] - Explanation
 */
```

#### 4.2.3 Code Fill-in-the-blank (CodeFillQuestion)

```javascript
/**
 * @typedef {Object} CodeFillQuestion
 * @extends BaseQuestion
 * @property {'code-fill'} type
 * @property {'python' | 'javascript' | 'pseudo'} language
 * @property {string} code - Code with ( N ) notation
 * @property {Blank[]} blanks - Blank info array
 */

/**
 * @typedef {Object} Blank
 * @property {number} index - Blank number (from 1)
 * @property {string} answer - Correct answer
 * @property {string} [placeholder] - Hint
 */

// Example
{
    id: 'q1',
    type: 'code-fill',
    prompt: '다음 코드의 빈칸을 채우세요.',
    language: 'python',
    code: `def appendNode(data):
    node = ( 1 )()
    node.data = data`,
    blanks: [
        { index: 1, answer: 'Node', placeholder: 'Class name' }
    ]
}
```

#### 4.2.4 Multiple Choice (McqQuestion)

```javascript
/**
 * @typedef {Object} McqQuestion
 * @extends BaseQuestion
 * @property {'mcq'} type
 * @property {string[]} options - Choice array
 * @property {number} correctIndex - Correct answer index (from 0)
 */

// Example
{
    id: 'q2',
    type: 'mcq',
    prompt: 'head가 None일 때 의미하는 것은?',
    options: [
        '리스트가 비어있다',
        '리스트에 노드가 1개',
        '리스트가 정렬됨',
        '에러 상태'
    ],
    correctIndex: 0,
    explanation: 'head가 None이면 리스트에 노드가 없다는 뜻입니다.'
}
```

#### 4.2.5 Short Answer (ShortQuestion)

```javascript
/**
 * @typedef {Object} ShortQuestion
 * @extends BaseQuestion
 * @property {'short'} type
 * @property {string[]} acceptableAnswers - List of acceptable answers
 * @property {boolean} [caseSensitive=false] - Case sensitivity
 */

// Example
{
    id: 'q3',
    type: 'short',
    prompt: '연결 리스트에서 마지막 노드의 link 값은?',
    acceptableAnswers: ['None', 'null', '없음'],
    caseSensitive: false
}
```

#### 4.2.6 Essay (EssayQuestion)

> [!IMPORTANT]
> Essay 문제에는 반드시 `answer` 필드(모범 답안)를 포함해야 합니다.
> 사용자가 "정답 예시 보기" 버튼을 클릭하면 이 답안이 표시됩니다.

```javascript
/**
 * @typedef {Object} EssayQuestion
 * @extends BaseQuestion
 * @property {'essay'} type
 * @property {string[]} rubric - Grading criteria keywords
 * @property {string} answer - Model answer (REQUIRED - displayed when user clicks "정답 예시 보기")
 * @property {number} [maxLength=500] - Max character count
 */

// Example
{
    id: 'q4',
    type: 'essay',
    prompt: "SQL Server의 'DATETIME' 데이터 형식에 대해 설명하세요.",
    rubric: ['날짜와 시간', 'YYYY-MM-DD hh:mm:ss', '3.33ms 정밀도'],
    answer: 'DATETIME은 날짜와 시간을 함께 저장하는 타입입니다. 8바이트를 사용하며 1753-01-01부터 9999-12-31까지의 날짜를 저장합니다.',
    maxLength: 300
}
```



---

## 5. Core Modules  [AI MUST READ]

### 5.1 quiz-v2.js

**Role**: Quiz rendering, grading, state management for all question types

**Main Functions**:

| Function                    | Role                                    | Call Timing     |
| --------------------------- | --------------------------------------- | --------------- |
| `renderQuizRound(round)`    | Render all questions in a quiz round   | Page load       |
| `gradeV2CodeFill(input)`    | Grade code-fill blank                  | Enter key       |
| `gradeV2Mcq(radio)`         | Grade MCQ selection                    | Click/key       |
| `gradeV2Short(input)`       | Grade short answer                     | Enter key       |
| `gradeAllV2()`              | Batch grading (Ctrl+Enter)             | Button/shortcut |
| `showAllV2Answers()`        | Show all answers                       | Button          |
| `resetV2Quiz()`             | Reset quiz                             | Button          |
| `reviewWrongV2()`           | Review wrong answers only              | Button          |

**State Management**:

```javascript
const v2States = new Map();     // Grading state for each input
const v2WasEverWrong = new Set(); // Track inputs that were ever wrong
let currentV2Round = null;       // Current quiz round data
```

**Question Type Rendering**:

```javascript
function renderQuizRound(round) {
    round.questions.forEach(q => {
        switch (q.type) {
            case 'code-fill': renderCodeFillQuestion(q); break;
            case 'mcq':       renderMcqQuestion(q);      break;
            case 'short':     renderShortQuestion(q);    break;
            case 'essay':     renderEssayQuestion(q);    break;
        }
    });
}
```


### 5.2 nav-config.js

**Role**: Sidebar navigation structure definition

**Structure**:

```javascript
const DEFAULT_NAV_CONFIG = {
    subjects: [
        {
            id: 'linked-list',       // Subject ID
            title: '연결 리스트',     // Display name (Korean)
            icon: '🔗',              // Icon
            expanded: true,          // Initial expand state
            pages: [
                { id: 'quiz-1', title: '1회차: 골격 & 포인터', count: 46 },
                // ...
            ]
        }
    ]
};
```

**LocalStorage Integration**:

* Storage key: `quiz_nav_config`
* Can be modified via admin UI (Sidebar → ⚙️ Admin)

### 5.3 ai-chat.js

**Role**: Gemini AI Chat Panel

**Features**:

* `Ctrl+L`: Toggle chat panel
* Gemini 2.5 Flash API calls
* API key stored in LocalStorage (`gemini_api_key`)

**Main Functions**:

| Function                     | Role                   |
| ---------------------------- | ---------------------- |
| `toggleChatPanel()`          | Open/close panel       |
| `sendChatMessage()`          | Send user message      |
| `callGeminiAPI(userMessage)` | API call               |
| `showApiKeyModal()`          | API key settings modal |

---

## 6. Workflows  [AI MUST READ WHEN EDITING]

### 6.1 Adding New Round (v1) Procedure

> [!NOTE]
> Use when adding rounds in existing fill-in-the-blank format.

#### Step 1: Create Data File

```bash
# File: quizzes/linked_list/data/quiz-7-data.js
```

```javascript
const quiz7Data = {
    id: '7',
    title: '7회차: [Title]',
    total: [blank count],
    answers: ['ans1', 'ans2', ...],
    code: `<span class="keyword">def</span> example():
    return ( 1 )`
};
```

#### Step 2: Create HTML File

Copy `quiz-6.html` to `quiz-7.html` and modify:

```html
<!-- Changes -->
<title>7회차: [Title] | 연결 리스트 퀴즈</title>
<h1>7회차: [Title]</h1>
<p class="subtitle">[Description]</p>

<script src="data/quiz-7-data.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        renderQuiz('7', quiz7Data);
    });
</script>

<!-- Also update score-total to / [blank count] -->
```

#### Step 3: Register in Sidebar

**Method A (Admin UI)**:

1. Click ☰ on any quiz page
2. Click ⚙️ Admin
3. ➕ Add Page
4. Fill form and save

**Method B (Direct code modification)**:

```javascript
// Add to DEFAULT_NAV_CONFIG.subjects array in nav-config.js
{ id: 'quiz-7', title: '7회차: [Title]', count: [blank count] }
```

#### Step 4: Test

* [ ] Desktop rendering check
* [ ] Mobile responsive check
* [ ] Enter key individual grading works
* [ ] Ctrl+Enter batch grading works
* [ ] Review mode works

---

### 6.2 Adding New Round (v2) Procedure

> [!IMPORTANT]
> Use when mixing various question types.

#### Step 1: Create v2 Directory (First time only)

```bash
mkdir -p quizzes/linked_list/data/v2
```

#### Step 2: Create Data File

```javascript
// File: quizzes/linked_list/data/v2/linked-list-7.js

export const quizRound = {
    id: 'linked-list-7',
    title: '7회차: 종합 테스트',
    subject: 'linked-list',
    questions: [
        {
            id: 'q1',
            type: 'code-fill',
            prompt: '다음 함수를 완성하세요.',
            language: 'python',
            code: `def appendNode(data):
    node = ( 1 )()`,
            blanks: [{ index: 1, answer: 'Node' }]
        },
        {
            id: 'q2',
            type: 'mcq',
            prompt: 'head의 역할은?',
            options: ['첫 노드 참조', '마지막 노드 참조', '노드 개수 저장'],
            correctIndex: 0
        }
        // ... more questions
    ]
};
```

#### Step 3: Extend quiz-app.js (First time only)

```javascript
// Add v2 renderer functions
function renderQuizRound(round) { /* ... */ }
function renderCodeFillQuestion(q) { /* ... */ }
function renderMcqQuestion(q) { /* ... */ }
```

#### Step 4: Register in nav-config.js

```javascript
{ id: 'linked-list-7', title: '7회차: 종합', count: 15, type: 'v2' }
```

---

### 6.3 Adding New Question Type Procedure

#### Step 1: Define Data Model

Add new type schema in section 4.2.

#### Step 2: Add Renderer Function

```javascript
// Add to quiz-app.js
function renderNewTypeQuestion(q) {
    const container = document.createElement('div');
    container.className = 'question-card';
    // Rendering logic
}
```

#### Step 3: Add Grading Logic

```javascript
function gradeNewTypeQuestion(q, userAnswer) {
    // Grading logic
    return { correct: boolean, points: number };
}
```

#### Step 4: Add CSS Styles

```css
/* Add to styles.css */
.question-card.new-type {
    /* New type styles */
}
```

---

### 6.4 AI Quiz Generation & File Naming Rules  [AI MUST READ WHEN EDITING]

When an AI agent creates new quiz questions/sets, it must follow these rules.

#### 6.4.1 Subject detection

* If the user mentions **"연결 리스트" / "linked list" / Python linked list code** →

  * `subject` id: `linked-list`
  * Base folder: `quizzes/linked_list/`
  * Data folder: `quizzes/linked_list/data/`
  * Resources folder: `resources/linked_list/`

* If the user mentions **"데이터베이스" / "SQL" / INSERT/UPDATE/DELETE / JOIN 등 DB 관련 키워드** →

  * `subject` id: `database`
  * Base folder: `quizzes/database/`
  * Data folder: `quizzes/database/data/`
  * Resources folder: `resources/database/`

* If the subject is completely new (not `linked-list` / `database`), the agent must:

  * Create a new slug from the subject name (e.g. `algorithms`, `network`, etc.)
  * Assume these folders:

    * `quizzes/<slug>/`
    * `quizzes/<slug>/data/`
    * `resources/<slug>/`

#### 6.4.2 File naming conventions

* **Database sets (set-based quizzes)**:

  * HTML file:

    * `quizzes/database/database-set<N>.html`
  * Data file:

    * `quizzes/database/data/set<N>.js`
    * Exports: `const setN = { setId: 'set-N', questions: [...] };`

* **Linked-list rounds (round-based quizzes)**:

  * HTML file:

    * `quizzes/linked_list/quiz-<N>.html`
  * Data file:

    * `quizzes/linked_list/data/quiz-<N>-data.js`
    * Exports: `const quizNData = { id: 'N', title: 'Round N: ...', ... };`

* **New subjects**:

  * Follow the **database** naming pattern by default:

    * HTML: `quizzes/<slug>/<slug>-set<N>.html`
    * Data: `quizzes/<slug>/data/set<N>.js`
    * Data export name: `const setN = { ... };`

#### 6.4.3 Expectations for answers in this chat

* Whenever you (AI) generate new quizzes or quiz data files, you must:

  * Explicitly show the **intended relative folder path and filename** as a comment before the code block.
  * Example:

    * `// File: quizzes/database/data/set3.js`
    * `// File: quizzes/linked_list/quiz-11.html`
* If the subject is ambiguous, you must:

  * State which subject you assumed (e.g. `subject: 'database'` or `'linked-list'`), and
  * Use the corresponding folder and naming rules above.

---

## 7. AI Agent Guidelines  [AI MUST READ]

### 7.1 Basic Principles

* This document is **always the Single Source of Truth**.
* If code and document differ, **update document first**, then align code.
* Existing v1 format (`quiz-*-data.js`) is **legacy** – treat as read-only reference.

### 7.2 Code Writing Rules

| Item                    | Rule               |
| ----------------------- | ------------------ |
| Variable/Function names | camelCase, English |
| Comments                | English            |
| UI Text                 | Korean             |
| Colors                  | CSS variables only |
| HTML Classes            | kebab-case         |

### 7.3 Modification Checklist

1. [ ] Check/update relevant section of this document
2. [ ] Regression test existing features
3. [ ] Check responsive (desktop/mobile)
4. [ ] Check LocalStorage data compatibility

### 7.4 Prohibited Actions

* ❌ Hardcoding colors instead of CSS variables
* ❌ Changing existing v1 data file format
* ❌ Changing `quiz-app.js` function signatures (add v2 extension functions separately)
* ❌ Using emojis in quiz page headers

### 7.5 Adding New Quizzes (Mandatory)

> [!IMPORTANT]
> **New quizzes MUST be integrated into the existing folder structure and config.**

**Folder Organization Rules:**

1. Quiz files (`*.html`) → `quizzes/subject/` (e.g., `quizzes/database/`, `quizzes/linked_list/`)
2. Question data (`*.js`) → `quizzes/subject/data/`
3. Reference materials → `resources/subject/`
4. Register in `quiz-config.js` to appear in web UI (folder → file navigation)

**When creating a new quiz:**

```javascript
// Add to QUIZ_CONFIG.modules[].quizzes array in quiz-config.js
{
    id: 'new-quiz',
    title: '새 퀴즈',
    subtitle: '설명',
    count: 10,
    icon: '📝',
    file: 'new-quiz.html'
}
```

**When adding a new subject (folder):**

1. Create `quizzes/new_subject/` and `quizzes/new_subject/data/`
2. Create `resources/new_subject/` for reference materials
3. Add new module entry in `quiz-config.js`

**UI Display:**

* Main page: Modules appear as folders, quizzes as files inside folders
* Sidebar: Auto-generated from `quiz-config.js`

---

## 8. Quick Reference  [REFERENCE]

### Keyboard Shortcuts

| Key          | Function                 |
| ------------ | ------------------------ |
| `Enter`      | Individual grading       |
| `Enter` x2   | Show answer (when wrong) |
| `Ctrl+Enter` | Batch grading            |
| `Ctrl+L`     | Toggle AI chat           |
| `1-4` keys   | Select MCQ option (when MCQ card focused) |
| `Ctrl+1`     | Self-grade essay as correct |
| `Ctrl+2`     | Self-grade essay as wrong |

### Status Colors

| Color     | Meaning               | CSS Class      |
| --------- | --------------------- | -------------- |
| 🔵 Blue   | Default/focus         | `.blank-input` |
| 🟢 Green  | Correct (locked)      | `.correct`     |
| 🟡 Yellow | Fixed (locked)        | `.retry`       |
| 🔴 Red    | Wrong/answer revealed | `.wrong`       |

### Key LocalStorage Keys

| Key               | Usage             |
| ----------------- | ----------------- |
| `quiz_nav_config` | Sidebar structure |
| `gemini_api_key`  | Gemini API key    |

---

## 9. Problem Prompt Template (문제 프롬프트)  [REFERENCE]

> [!TIP]
> 다른 AI에게 문제를 요청할 때 아래 프롬프트를 복사해서 사용하세요.
> 이 프로젝트의 JSON 형식에 맞는 문제를 바로 받을 수 있습니다.

### 9.1 Full Prompt (Copy & Paste)

````markdown
나는 빈칸 채우기, 객관식, 주관식, 서술형 문제를 지원하는 퀴즈 웹앱을 만들고 있어.
문제를 만들어주면 내 앱에 바로 넣을 수 있게 아래 JSON 형식으로 정확히 맞춰서 줘.

---

## 지원하는 문제 유형 4가지

### 1. code-fill (빈칸 채우기)
코드에서 핵심 부분을 `( N )` 형식으로 빈칸 처리

```javascript
{
    id: "q1",
    type: "code-fill",
    prompt: "다음 SQL문의 빈칸을 채우세요.",
    language: "sql",  // sql, python, javascript, csharp 등
    code: "SELECT * FROM userTbl WHERE name = ( 1 );",
    blanks: [
        { index: 1, answer: "N'홍길동'" }
    ]
}
````

### 2. mcq (객관식)

4지선다 또는 5지선다 객관식

```javascript
{
    id: "q2",
    type: "mcq",
    prompt: "다음 쿼리의 결과는?\n\nSELECT LEFT('Hello', 2);",
    options: ["He", "lo", "Hell", "llo"],
    correctIndex: 0  // 0부터 시작 (첫 번째가 정답)
}
```

### 3. short (주관식/단답형)

여러 정답을 허용하는 단답형

```javascript
{
    id: "q3",
    type: "short",
    prompt: "CHAR와 VARCHAR의 차이를 한 단어로 설명하세요.",
    acceptableAnswers: ["고정길이", "가변길이", "fixed vs variable"]
}
```

### 4. essay (서술형)

AI 채점용 키워드 기반 서술형

```javascript
{
    id: "q4",
    type: "essay",
    prompt: "LEFT OUTER JOIN의 동작 방식을 설명하세요.",
    rubric: ["왼쪽 테이블 모든 행", "오른쪽 NULL", "조인 조건"],
    maxLength: 300
}
```

---

## 전체 세트 구조

```javascript
const setN = {
    setId: "set-N",
    questions: [
        // 위 4가지 유형의 문제들을 배열로 나열
        { id: "q1", type: "code-fill", ... },
        { id: "q2", type: "mcq", ... },
        { id: "q3", type: "short", ... }
    ]
};
```

---

## 빈칸 규칙 (code-fill)

1. 빈칸 형식: `( N )` (괄호 안 공백 필수!)
2. 빈칸 번호는 1부터 시작
3. blanks 배열의 index와 코드의 ( N )이 일치해야 함

---

[요청 사항]
예: "SQL INSERT/UPDATE/DELETE 문제 10개 만들어줘. 빈칸 5개, 객관식 3개, 주관식 2개로 섞어서."

```

### 9.2 Quick Reference Table

| Type       | 용도           | 필수 필드                        |
|------------|----------------|----------------------------------|
| `code-fill`| 코드 빈칸      | `language`, `code`, `blanks[]`  |
| `mcq`      | 객관식         | `options[]`, `correctIndex`     |
| `short`    | 주관식         | `acceptableAnswers[]`           |
| `essay`    | 서술형         | `rubric[]`, `maxLength`         |

---

> **Last Updated**: 2025-12-10  
> **Version**: v3.0 (v1 engine removed, v2-only system)
