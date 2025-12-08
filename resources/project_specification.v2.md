# 퀴즈 앱 - 프로젝트 명세서 v2

> [!CAUTION]
> ## 🤖 AI 에이전트 필독!
> **이 문서는 프로젝트의 Single Source of Truth입니다.**
> 파일 생성/수정 전에 반드시 2장(폴더 구조), 7장(AI 지침)을 읽으세요.
> 코드와 이 문서가 다르면, **이 문서를 먼저 수정** 후 코드를 맞춥니다.

> **목적**
> - 이 프로젝트를 처음 보는 **사람/AI**가 구조를 빠르게 이해하고,
> - 새로운 퀴즈(객관식/주관식/서술형/빈칸)를 **안전하게 추가**할 수 있도록 하는 기준 문서


---

## 0. 이 문서를 사용하는 방법

1. **전체 구조 파악**: 1~3장을 읽어서 파일 구조와 디자인 시스템을 이해한다.
2. **데이터 모델 확인**: 4장을 읽고 퀴즈 데이터 스키마를 따른다.
3. **핵심 모듈 이해**: 5장에서 `quiz-app.js`와 `ai-chat.js`의 역할을 파악한다.
4. **작업별 절차 사용**: 6장의 워크플로우에서
   - 새 회차 추가 → 6.1
   - 새 문제 유형 추가 → 6.2
   - AI 기능 수정 → 6.3
5. **항상 이 문서를 기준으로**
   실제 코드와 이 문서가 다르면, **이 문서를 먼저 수정한 뒤** 코드/워크플로우를 맞춘다.

---

## 1. 시스템 개요

### 1.1 현재 기능

- **Python 연결 리스트 코드 빈칸 채우기 퀴즈** (6개 회차, 190+ 문제)
- **개별/전체 채점** (`Enter` = 개별, `Ctrl+Enter` = 전체)
- **3단계 피드백**:
  - 🟢 초록 = 처음부터 정답 (readOnly)
  - 🟡 노랑 = 틀렸다가 고침 (readOnly)
  - 🔴 빨강 = 오답 또는 정답 확인
- **복습 모드**: 틀린 문제만 / 고친 문제 포함
- **Gemini 스타일 사이드바 네비게이션**
- **AI 채팅 패널** (`Ctrl+L`): Gemini 2.5 Flash API 연동
- **백지 복습 모드** (`blank-practice.html`)

### 1.2 장기 목표

**범용 퀴즈 생성 플랫폼**

- **입력**: 사용자가 Markdown/텍스트/코드로 퀴즈를 정의
- **처리**: AI 파서 또는 스크립트가 공통 **퀴즈 데이터 모델(v2)**로 변환
- **출력**: 반응형 웹 퀴즈 페이지 자동 생성

**다양한 문제 유형 지원**:
- 코드 빈칸 채우기 (현재 구현됨)
- 객관식 (MCQ)
- 단답형
- 서술형 (AI 채점 연동 가능)

---

## 2. 파일 구조

> [!IMPORTANT]
> **폴더 배치 규칙을 반드시 준수할 것!**
> - `quizzes/` = 퀴즈 파일만 (HTML, 문제 데이터 JS)
> - `resources/` = 참고자료만 (OCR, CSV, 문서)
> - `shared/` = 공용 스크립트/스타일

```text
testpractice-main/
├── quiz.html                    # 메인 대시보드
├── index.html                   # 리다이렉트
├── deploy.bat                   # GitHub Pages 배포
│
├── quizzes/                     # 🎯 퀴즈 전용 폴더
│   ├── database/                # 데이터베이스 과목
│   │   ├── database-set1.html ~ set12.html  # 세트별 퀴즈 페이지
│   │   └── data/
│   │       └── set1.js ~ set12.js           # 문제 데이터
│   │
│   └── linked_list/             # Python 연결리스트 과목
│       ├── quiz-1.html ~ quiz-10.html       # 회차별 퀴즈 페이지
│       ├── blank-practice.html              # 백지 복습 모드
│       └── data/
│           └── quiz-1-data.js ~ quiz-10-data.js
│
├── resources/                   # 📚 참고자료 전용 폴더
│   ├── project_specification.v2.md  # 이 문서 (프로젝트 명세)
│   ├── README.md                    # 사용 가이드
│   │
│   ├── database/                # DB 과목 참고자료
│   │   ├── userTbl.csv          # 회원 테이블 샘플
│   │   ├── buyTbl.csv           # 구매 테이블 샘플
│   │   └── 데이터베이스 ocr.txt   # 강의 슬라이드 OCR
│   │
│   └── linked_list/             # 연결리스트 참고자료
│       ├── 자료구조 12주차 소스코드.txt
│       └── anki_*.tsv           # Anki 카드 데이터
│
├── shared/                      # 🔧 공용 모듈
│   ├── styles.css               # 메인 스타일 (전체 테마)
│   ├── quiz-v2-styles.css       # v2 퀴즈 스타일
│   ├── quiz-app.js              # v1 퀴즈 엔진
│   ├── quiz-v2.js               # v2 퀴즈 엔진
│   ├── quiz-config.js           # 🔑 과목/세트 등록
│   ├── nav-config.js            # 사이드바 설정
│   ├── sidebar.js               # 사이드바 렌더링
│   └── ai-chat.js               # AI 채팅 패널
│
└── .agent/workflows/            # AI 에이전트 워크플로우
```

### 2.1 파일 배치 규칙

| 파일 유형 | 저장 위치 | 예시 |
|----------|----------|------|
| 퀴즈 HTML 페이지 | `quizzes/과목명/` | `database-set1.html` |
| 문제 데이터 JS | `quizzes/과목명/data/` | `set1.js` |
| OCR, CSV, 문서 | `resources/과목명/` | `userTbl.csv` |
| 백업 파일 (.bak) | `resources/과목명/` | - |
| 공용 스크립트 | `shared/` | `quiz-app.js` |
| 프로젝트 문서 | `resources/` (루트) | 이 파일 |

### 2.2 새 과목 추가 절차

1. `quizzes/새과목/` 폴더 생성
2. `quizzes/새과목/data/` 폴더 생성
3. `resources/새과목/` 폴더 생성 (참고자료용)
4. HTML, JS 파일 생성
5. `shared/quiz-config.js`에 module 등록 (folder: `'quizzes/새과목'`)

### 2.3 핵심 파일 역할

| 파일 | 역할 | 수정 시 주의사항 |
|------|------|------------------|
| `quiz-config.js` | 과목/세트 등록, 폴더 경로 정의 | folder에 `quizzes/` 접두사 필수 |
| `quiz-app.js` | v1 퀴즈 렌더링, 채점, 상태 관리 | 함수별 분리 유지 |
| `quiz-v2.js` | v2 퀴즈 (서술형, MCQ 등) | 새 타입 추가 시 확장 |
| `nav-config.js` | 사이드바 메뉴 구조 정의 | LocalStorage 연동 |
| `ai-chat.js` | Gemini API 연동, 채팅 UI | API 키는 LocalStorage |
| `styles.css` | 전역 디자인 시스템 | CSS 변수만 사용 |

---

## 3. 디자인 시스템

### 3.1 컬러 토큰 (CSS 변수)

> [!IMPORTANT]
> 색상은 **반드시 CSS 변수로만** 사용한다. 하드코딩 금지.

```css
:root {
    /* === Core Backgrounds (Gemini 스타일) === */
    --bg-primary: #131314;       /* 전체 배경 */
    --bg-secondary: #1E1F20;     /* 사이드바, 입력 영역 */
    --bg-tertiary: #282A2C;      /* 상승된 카드 */
    --bg-card: #1E1F20;          /* 카드 배경 */
    --bg-card-hover: #282A2C;    /* 카드 호버 */

    /* === Accent Blues === */
    --accent: #A8C7FA;           /* 링크, 버튼 */
    --accent-glow: #4285F4;      /* 그라디언트 블루 */
    --accent-light: #A8C7FA;     /* 강조 텍스트 */
    --accent-dim: rgba(168, 199, 250, 0.12);
    --accent-border: rgba(168, 199, 250, 0.3);

    /* === 상태 색상 === */
    --success: #4ade80;          /* 정답 (초록) */
    --success-dim: rgba(74, 222, 128, 0.12);
    --error: #F97373;            /* 오답 (빨강) */
    --error-dim: rgba(249, 115, 115, 0.12);
    --warning: #FBBF24;          /* 재시도 (노랑) */
    --warning-dim: rgba(251, 191, 36, 0.12);

    /* === 텍스트 계층 === */
    --text: #E3E3E3;             /* 기본 텍스트 */
    --text-secondary: #C4C7C5;   /* 보조 텍스트 */
    --text-muted: #7F848E;       /* 흐린 텍스트 */
    --text-dim: #444746;         /* 플레이스홀더 */

    /* === 코드 블록 === */
    --code-bg: #1E1E1E;          /* 코드 배경 */
    --code-border: rgba(68, 71, 70, 0.5);

    /* === 테두리 & 상호작용 === */
    --border: #444746;
    --border-hover: rgba(255, 255, 255, 0.12);
    --hover-bg: rgba(255, 255, 255, 0.08);
    --active-bg: rgba(255, 255, 255, 0.12);

    /* === 그림자 === */
    --shadow-md: 0 12px 40px rgba(0, 0, 0, 0.6);
    --shadow-lg: 0 24px 60px rgba(0, 0, 0, 0.7);
    --shadow-glow: 0 0 20px rgba(168, 199, 250, 0.1);

    /* === 라운드 코너 === */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 28px;
    --radius-pill: 999px;
}
```

### 3.2 구문 하이라이팅 (Atom One Dark)

| 토큰 | 색상 | 용도 |
|------|------|------|
| `.keyword` | `#C678DD` | `def`, `class`, `if` 등 |
| `.function` | `#61AFEF` | 함수명 |
| `.string` | `#98C379` | 문자열 |
| `.number` | `#D19A66` | 숫자 |
| `.comment` | `#5C6370` | 주석 |
| `.builtin` | `#E5C07B` | 내장 함수 |
| `.variable` | `#E06C75` | 변수명 |

### 3.3 폰트

| 용도 | 폰트 | 비고 |
|------|------|------|
| UI 텍스트 | `Inter`, `Noto Sans KR` | 모던하고 깔끔 |
| 코드 | `JetBrains Mono` | 고정폭 |
| 한국어 특수 | `BMJua` | 친근한 느낌 |

### 3.4 입력 필드 상태 클래스

```css
.blank-input           /* 기본 상태 */
.blank-input.correct   /* 처음부터 정답 → readOnly */
.blank-input.retry     /* 틀렸다가 고침 → readOnly */
.blank-input.wrong     /* 오답 상태 */
```

### 3.5 레이아웃 패턴

**메인 페이지 (`quiz.html`)**:
- 히어로 섹션: 배지 + 타이틀 + 통계 pill
- 카드 그리드: 회차별 네비게이션 카드
- 팁 섹션: 단축키 안내

**퀴즈 페이지 (`quiz-N.html`)**:
- 헤더: 회차 제목 + 부제목
- 코드 블록: 빈칸 포함 코드
- 컨트롤: 채점/정답/초기화 버튼
- 점수 표시: 현재 점수 / 총점
- 정답표: 토글 가능

**반응형 기준**:
- `≥ 1024px`: 사이드바 고정, 3열 카드 그리드
- `768px ~ 1023px`: 사이드바 축소, 2열 그리드
- `≤ 767px`: 사이드바 오버레이, 1열 그리드

---

## 4. 퀴즈 데이터 모델

### 4.1 v1 형식 (현재 사용 중)

> [!NOTE]
> 기존 6개 회차는 v1 형식으로 유지. 마이그레이션 없이 그대로 사용.

```javascript
// 파일: data/quiz-N-data.js
const quizNData = {
    id: 'N',                           // 회차 번호 (문자열)
    title: 'N회차: 제목',                // 표시용 제목
    total: 46,                         // 빈칸 개수
    answers: ['ans1', 'ans2', ...],    // 정답 배열 (순서대로)
    code: `<span class="keyword">def</span>...( 1 )...`
    // ( N ) 형식의 빈칸 표시, HTML span으로 구문 하이라이팅 포함
};
```

**빈칸 규칙**:
- `( N )` 형식으로 표시 (N은 1부터 시작)
- 공백 포함: 괄호 안에 공백 필수
- 렌더링 시 `<input>` 태그로 치환

### 4.2 v2 형식 (신규 회차용)

> [!IMPORTANT]
> 새로 만드는 회차부터 이 형식을 사용한다.

#### 4.2.1 QuizRound (회차)

```javascript
// 파일: data/v2/linked-list-N.js

/**
 * @typedef {Object} QuizRound
 * @property {string} id - 전역 유니크 ID (예: 'linked-list-7')
 * @property {string} title - 표시용 제목
 * @property {string} subject - nav-config.js의 subject.id와 매칭
 * @property {string} [level] - 난이도 (basic, intermediate, advanced)
 * @property {string[]} [tags] - 검색/필터용 태그
 * @property {Question[]} questions - 문제 배열
 */

export const quizRound = {
    id: 'linked-list-7',
    title: '7회차: 고급 포인터',
    subject: 'linked-list',
    level: 'advanced',
    tags: ['python', 'linked-list', 'pointer'],
    questions: [ /* Question[] */ ]
};
```

#### 4.2.2 공통 필드 (BaseQuestion)

```javascript
/**
 * @typedef {Object} BaseQuestion
 * @property {string} id - 문제 ID (예: 'q1')
 * @property {'code-fill' | 'mcq' | 'short' | 'essay'} type - 문제 유형
 * @property {string} prompt - 문제 지문 (한국어)
 * @property {number} [points=1] - 배점
 * @property {string} [explanation] - 해설
 */
```

#### 4.2.3 코드 빈칸 (CodeFillQuestion)

```javascript
/**
 * @typedef {Object} CodeFillQuestion
 * @extends BaseQuestion
 * @property {'code-fill'} type
 * @property {'python' | 'javascript' | 'pseudo'} language
 * @property {string} code - ( N ) 표기 포함된 코드
 * @property {Blank[]} blanks - 빈칸 정보 배열
 */

/**
 * @typedef {Object} Blank
 * @property {number} index - 빈칸 번호 (1부터)
 * @property {string} answer - 정답
 * @property {string} [placeholder] - 힌트
 */

// 예시
{
    id: 'q1',
    type: 'code-fill',
    prompt: '다음 코드의 빈칸을 채우세요.',
    language: 'python',
    code: `def appendNode(data):
    node = ( 1 )()
    node.data = data`,
    blanks: [
        { index: 1, answer: 'Node', placeholder: '클래스명' }
    ]
}
```

#### 4.2.4 객관식 (McqQuestion)

```javascript
/**
 * @typedef {Object} McqQuestion
 * @extends BaseQuestion
 * @property {'mcq'} type
 * @property {string[]} options - 보기 배열
 * @property {number} correctIndex - 정답 인덱스 (0부터)
 */

// 예시
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

#### 4.2.5 단답형 (ShortQuestion)

```javascript
/**
 * @typedef {Object} ShortQuestion
 * @extends BaseQuestion
 * @property {'short'} type
 * @property {string[]} acceptableAnswers - 허용 가능한 답 목록
 * @property {boolean} [caseSensitive=false] - 대소문자 구분
 */

// 예시
{
    id: 'q3',
    type: 'short',
    prompt: '연결 리스트에서 마지막 노드의 link 값은?',
    acceptableAnswers: ['None', 'null', '없음'],
    caseSensitive: false
}
```

#### 4.2.6 서술형 (EssayQuestion)

```javascript
/**
 * @typedef {Object} EssayQuestion
 * @extends BaseQuestion
 * @property {'essay'} type
 * @property {string[]} rubric - 채점 기준 키워드
 * @property {number} [maxLength=500] - 최대 글자수
 */

// 예시
{
    id: 'q4',
    type: 'essay',
    prompt: 'insertNode 함수가 head.data == findData일 때의 처리 과정을 설명하세요.',
    rubric: ['새 노드 생성', 'link를 기존 head로', 'head를 새 노드로'],
    maxLength: 300
}
```

---

## 5. 핵심 모듈

### 5.1 quiz-app.js

**역할**: 빈칸 퀴즈 렌더링, 채점, 상태 관리

**주요 함수**:

| 함수 | 역할 | 호출 시점 |
|------|------|----------|
| `renderQuiz(quizId, data)` | 코드를 렌더링, `( N )`을 input으로 치환 | 페이지 로드 |
| `checkAnswers(quizId, data)` | 전체 채점 (Ctrl+Enter) | 버튼/단축키 |
| `handleEnterKey(input, quizId, data)` | 개별 채점 (Enter) | 키 이벤트 |
| `showAllAnswers(quizId, data)` | 모든 정답 표시 | 버튼 |
| `resetQuiz(quizId, data)` | 퀴즈 초기화 | 버튼 |
| `reviewWrong(quizId, data, mode)` | 복습 모드 실행 | 버튼 |

**상태 관리**:
```javascript
const inputStates = new Map();  // 각 입력의 채점 상태
const wasEverWrong = new Set(); // 한 번이라도 틀린 입력 추적
```

**v2 확장 시 수정 포인트**:
```javascript
// 타입별 렌더러 분기 추가
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

**역할**: 사이드바 네비게이션 구조 정의

**구조**:
```javascript
const DEFAULT_NAV_CONFIG = {
    subjects: [
        {
            id: 'linked-list',       // 과목 ID
            title: '연결 리스트',     // 표시명
            icon: '🔗',              // 아이콘
            expanded: true,          // 초기 펼침 상태
            pages: [
                { id: 'quiz-1', title: '1회차: 골격 & 포인터', count: 46 },
                // ...
            ]
        }
    ]
};
```

**LocalStorage 연동**:
- 저장 키: `quiz_nav_config`
- 관리 UI를 통해 수정 가능 (사이드바 → ⚙️ 관리)

### 5.3 ai-chat.js

**역할**: Gemini AI 채팅 패널

**기능**:
- `Ctrl+L`: 채팅 패널 열기/닫기
- Gemini 2.5 Flash API 호출
- API 키 LocalStorage 저장 (`gemini_api_key`)

**주요 함수**:
| 함수 | 역할 |
|------|------|
| `toggleChatPanel()` | 패널 열기/닫기 |
| `sendChatMessage()` | 사용자 메시지 전송 |
| `callGeminiAPI(userMessage)` | API 호출 |
| `showApiKeyModal()` | API 키 설정 모달 |

---

## 6. 워크플로우

### 6.1 새 회차(v1) 추가 절차

> [!NOTE]
> 기존 빈칸 채우기 형식으로 회차를 추가할 때 사용

#### Step 1: 데이터 파일 생성

```bash
# 파일: linked_list_quiz/data/quiz-7-data.js
```

```javascript
const quiz7Data = {
    id: '7',
    title: '7회차: [제목]',
    total: [빈칸 개수],
    answers: ['ans1', 'ans2', ...],
    code: `<span class="keyword">def</span> example():
    return ( 1 )`
};
```

#### Step 2: HTML 파일 생성

`quiz-6.html`을 복사하여 `quiz-7.html` 생성 후 수정:

```html
<!-- 변경 사항 -->
<title>7회차: [제목] | 연결 리스트 퀴즈</title>
<h1>7회차: [제목]</h1>
<p class="subtitle">[설명]</p>
<script src="data/quiz-7-data.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        renderQuiz('7', quiz7Data);
    });
</script>
<!-- score-total 부분도 / [빈칸 개수]로 수정 -->
```

#### Step 3: 사이드바 등록

**방법 A (Admin UI)**:
1. 아무 퀴즈 페이지에서 ☰ 클릭
2. ⚙️ 관리 클릭
3. ➕ 페이지 추가
4. 폼 작성 후 저장

**방법 B (코드 직접 수정)**:
```javascript
// nav-config.js의 DEFAULT_NAV_CONFIG.subjects 배열에 추가
{ id: 'quiz-7', title: '7회차: [제목]', count: [빈칸 개수] }
```

#### Step 4: 테스트

- [ ] 데스크톱에서 렌더링 확인
- [ ] 모바일에서 반응형 확인
- [ ] Enter 키 개별 채점 동작
- [ ] Ctrl+Enter 전체 채점 동작
- [ ] 복습 모드 동작

---

### 6.2 새 회차(v2) 추가 절차

> [!IMPORTANT]
> 다양한 문제 유형을 섞어서 출제할 때 사용

#### Step 1: v2 디렉토리 생성 (최초 1회)

```bash
mkdir linked_list_quiz/data/v2
```

#### Step 2: 데이터 파일 생성

```javascript
// 파일: linked_list_quiz/data/v2/linked-list-7.js

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
        // ... 추가 문제
    ]
};
```

#### Step 3: quiz-app.js 확장 (최초 1회)

```javascript
// v2 렌더러 함수 추가
function renderQuizRound(round) { /* ... */ }
function renderCodeFillQuestion(q) { /* ... */ }
function renderMcqQuestion(q) { /* ... */ }
```

#### Step 4: nav-config.js 등록

```javascript
{ id: 'linked-list-7', title: '7회차: 종합', count: 15, type: 'v2' }
```

---

### 6.3 새 문제 유형 추가 절차

#### Step 1: 데이터 모델 정의

4.2장에 새로운 타입 스키마 추가

#### Step 2: 렌더러 함수 추가

```javascript
// quiz-app.js에 추가
function renderNewTypeQuestion(q) {
    const container = document.createElement('div');
    container.className = 'question-card';
    // 렌더링 로직
}
```

#### Step 3: 채점 로직 추가

```javascript
function gradeNewTypeQuestion(q, userAnswer) {
    // 채점 로직
    return { correct: boolean, points: number };
}
```

#### Step 4: CSS 스타일 추가

```css
/* styles.css에 추가 */
.question-card.new-type {
    /* 새 유형 스타일 */
}
```

---

## 7. AI 에이전트 지침

### 7.1 기본 원칙

- 이 문서는 **항상 최신 진실(Single Source of Truth)**이다.
- 코드와 문서가 다르면 **문서를 먼저 수정** 후 코드를 맞춘다.
- 기존 v1 형식(`quiz-*-data.js`)은 **레거시**로 취급하고 읽기 전용으로 참고한다.

### 7.2 코드 작성 규칙

| 항목 | 규칙 |
|------|------|
| **변수/함수명** | camelCase, 영문 |
| **주석** | 영문 |
| **UI 텍스트** | 한국어 |
| **색상** | CSS 변수만 사용 |
| **HTML 클래스** | kebab-case |

### 7.3 수정 시 체크리스트

1. [ ] 이 문서 해당 섹션 확인/업데이트
2. [ ] 기존 기능 회귀 테스트
3. [ ] 반응형 (데스크톱/모바일) 확인
4. [ ] LocalStorage 데이터 호환성 확인

### 7.4 금지 사항

- ❌ CSS 변수 대신 색상 하드코딩
- ❌ 기존 v1 데이터 파일 형식 변경
- ❌ `quiz-app.js` 함수들의 시그니처 변경 (v2 확장 함수는 별도 추가)
- ❌ 퀴즈 페이지 헤더에 이모지 사용

---

## 8. 빠른 참조

### 단축키

| 키 | 기능 |
|----|------|
| `Enter` | 개별 채점 |
| `Enter` x2 | 정답 보기 (틀린 경우) |
| `Ctrl+Enter` | 전체 채점 |
| `Ctrl+L` | AI 채팅 열기/닫기 |

### 상태 색상

| 색상 | 의미 | CSS 클래스 |
|------|------|-----------|
| 🔵 파랑 | 기본/포커스 | `.blank-input` |
| 🟢 초록 | 정답 (잠금) | `.correct` |
| 🟡 노랑 | 고침 (잠금) | `.retry` |
| 🔴 빨강 | 오답/정답확인 | `.wrong` |

### 주요 LocalStorage 키

| 키 | 용도 |
|----|------|
| `quiz_nav_config` | 사이드바 구조 |
| `gemini_api_key` | Gemini API 키 |

---

> **마지막 업데이트**: 2024-12-09
> **버전**: v2.0
