---
description: Add new fill-in-the-blank quiz round to the linked list quiz app
---

# Quiz Round Workflow

## Quick Start
User says: "이 빈칸 코드 추가해줘" → Check highest N in `data/quiz-N-data.js` → Create N+1

---

## Project Structure
```
html/
├── quiz.html                    ← Main entry point
├── deploy.bat                   ← GitHub deploy (not uploaded)
├── .agent/
│   └── workflows/
│       └── add-quiz-round.md    ← THIS FILE
└── linked_list_quiz/
    ├── styles.css               ← Gemini theme CSS (900+ lines)
    ├── quiz-app.js              ← Quiz logic + floating nav
    ├── nav-config.js            ← Navigation config (LocalStorage)
    ├── sidebar.js               ← Gemini-style sidebar
    ├── blank-practice.html
    ├── quiz-1~6.html
    └── data/
        └── quiz-1~6-data.js
```

---

## Design System

### Color Palette (Gemini Theme)
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#131314` | Main background |
| `--bg-card` | `#1E1F20` | Cards, sidebar |
| `--accent` | `#A8C7FA` | Links, buttons |
| `--text` | `#E3E3E3` | Primary text |
| `--success` | `#4ade80` | Correct |
| `--error` | `#F97373` | Wrong |

### Syntax Highlighting (Atom One Dark)
| Token | Color |
|-------|-------|
| `.keyword` | `#C678DD` |
| `.function` | `#61AFEF` |
| `.string` | `#98C379` |
| `.number` | `#D19A66` |
| `.comment` | `#5C6370` |

### Fonts
- **English**: `Inter` (clean, modern)
- **Korean**: `BMJua` fallback (friendly, readable)
- **Code**: `JetBrains Mono`

### UI Components
- Hamburger sidebar: left, 280px wide
- Floating scroll: bottom right, ▲▼
- Review buttons: integrated in controls (🔴🟡)
- Cards: radius 20px, hover glow

---

## Adding New Quiz

### Step 1: Data File
`data/quiz-{N}-data.js`
```javascript
const quizNData = {
    id: 'N',
    title: 'N회차: [Title]',
    total: [count],
    answers: ['ans1', 'ans2', ...],
    code: `<span class="keyword">def</span>...( 1 )...`
};
```

### Step 2: HTML File
`quiz-{N}.html` - Copy from quiz-6.html, change:
- Title, h1, subtitle
- Script src: `quiz-N-data.js`
- renderQuiz('N', quizNData)
- score-total: / [count]

### Step 3: Register in Sidebar
Option A (Admin UI):
1. Open any quiz page
2. Click ☰ → ⚙️ 관리
3. Click ➕ 페이지 추가
4. Fill form and submit

Option B (Config file):
Edit `nav-config.js` DEFAULT_NAV_CONFIG.subjects

---

## Quiz Features
| Key | Action |
|-----|--------|
| `Enter` | Grade input |
| `Enter` x2 | Show answer (red) |
| `Ctrl+Enter` | Grade all |
| Green | Correct (readonly) |
| Yellow | Fixed after wrong |
| Red | Wrong/Shown |

---

## Important Rules
- **Code/Comments**: English only
- **UI Text**: Korean
- **No header emojis** in quiz pages
- **Keep CSS concise** for maintenance
- **Use CSS variables** for colors, never hardcode
