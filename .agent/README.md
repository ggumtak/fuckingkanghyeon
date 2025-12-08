# AI Agent Instructions

> **🚨 이 프로젝트에서 작업하기 전에 반드시 읽어야 할 문서!**

## 필수 사전 읽기

**작업을 시작하기 전에 아래 문서를 반드시 먼저 읽으세요:**

```
resources/project_specification.v2.md
```

이 문서에는 다음 정보가 포함되어 있습니다:
- 📂 프로젝트 폴더 구조 및 파일 배치 규칙
- 🎨 디자인 시스템 (CSS 변수, 색상, 폰트)
- 📊 퀴즈 데이터 모델 (v1, v2 형식)
- 🔧 핵심 모듈 설명 (quiz-app.js, quiz-v2.js 등)
- 📝 새 과목/세트/문제 추가 워크플로우
- ⚠️ AI 에이전트 금지 사항

---

## 핵심 규칙 요약

### 폴더 구조
```
quizzes/     → 퀴즈 파일만! (HTML, 문제 데이터 JS)
resources/   → 참고자료만! (OCR, CSV, 문서)
shared/      → 공용 스크립트/스타일
```

### 파일 생성 시 규칙
1. **퀴즈 HTML** → `quizzes/과목명/파일.html`
2. **문제 데이터 JS** → `quizzes/과목명/data/파일.js`
3. **참고자료** → `resources/과목명/`
4. **새 과목 등록** → `shared/quiz-config.js`에 module 추가

### 코드 작성 규칙
- 변수/함수명: camelCase (영문)
- 주석: 영문
- UI 텍스트: 한국어
- 색상: CSS 변수만 사용 (하드코딩 금지)

---

## 작업 전 체크리스트

- [ ] `resources/project_specification.v2.md` 읽었는가?
- [ ] 파일을 올바른 폴더에 생성하는가?
- [ ] quiz-config.js 경로에 `quizzes/` 접두사 확인했는가?
- [ ] CSS 색상을 변수로 사용하는가?
