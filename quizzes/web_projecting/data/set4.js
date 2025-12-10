// File: quizzes/web_projecting/data/set4.js
// 웹기획 객관식 30문제 - UI/UX 심화
const set4 = {
    setId: "web-set-4",
    questions: [
        // UI 심화 (1-15)
        { id: "wp4-01", type: "mcq", prompt: "UI 디자인 원칙 중 '일관성(Consistency)'의 의미는?", options: ["동일한 요소는 동일한 방식으로 표현", "매 페이지 다른 스타일", "랜덤 배치", "복잡한 구조"], correctIndex: 0, explanation: "일관성: 동일 요소는 동일하게 표현" },
        { id: "wp4-02", type: "mcq", prompt: "UI에서 '어포던스(Affordance)'란?", options: ["디자인 요소가 사용법을 암시하는 특성", "가격 할인", "성능 향상", "보안 기능"], correctIndex: 0, explanation: "어포던스: 사용법을 암시하는 디자인 특성" },
        { id: "wp4-03", type: "mcq", prompt: "UI에서 '피츠의 법칙(Fitts's Law)'이 말하는 것은?", options: ["대상이 크고 가까울수록 빠르게 클릭 가능", "작을수록 좋음", "색상의 영향", "텍스트 길이"], correctIndex: 0, explanation: "피츠의 법칙: 크고 가까울수록 클릭 용이" },
        { id: "wp4-04", type: "mcq", prompt: "UI에서 '힉의 법칙(Hick's Law)'이 의미하는 것은?", options: ["선택지가 많을수록 결정 시간이 길어짐", "선택이 빠름", "색상이 중요", "크기가 중요"], correctIndex: 0, explanation: "힉의 법칙: 선택지 많으면 결정 시간 증가" },
        { id: "wp4-05", type: "mcq", prompt: "UI에서 '게슈탈트 원리' 중 '근접성'의 의미는?", options: ["가까이 있는 요소들은 그룹으로 인식", "멀리 있으면 그룹", "색상으로만 그룹", "크기로만 그룹"], correctIndex: 0, explanation: "근접성: 가까운 요소들을 그룹으로 인식" },
        { id: "wp4-06", type: "mcq", prompt: "UI에서 '시각적 계층(Visual Hierarchy)'의 목적은?", options: ["중요한 정보를 먼저 인지하도록 유도", "모든 정보 동일 크기", "숨기기", "복잡하게 만들기"], correctIndex: 0, explanation: "시각적 계층: 중요 정보 먼저 인지하도록 유도" },
        { id: "wp4-07", type: "mcq", prompt: "UI 디자인에서 '화이트 스페이스(여백)'의 역할은?", options: ["가독성 향상 및 요소 분리", "공간 낭비", "비용 절감", "기술적 제한"], correctIndex: 0, explanation: "여백은 가독성 향상과 요소 구분에 기여" },
        { id: "wp4-08", type: "mcq", prompt: "UI에서 '색상 대비(Contrast)'가 중요한 이유는?", options: ["가독성과 접근성 향상", "예쁜 디자인만", "비용 절감", "로딩 속도"], correctIndex: 0, explanation: "색상 대비로 가독성과 접근성 향상" },
        { id: "wp4-09", type: "mcq", prompt: "UI에서 'CTA(Call To Action)' 버튼의 목적은?", options: ["사용자에게 특정 행동을 유도", "장식용", "숨기기", "복잡하게 만들기"], correctIndex: 0, explanation: "CTA: 사용자의 특정 행동 유도(가입, 구매 등)" },
        { id: "wp4-10", type: "mcq", prompt: "UI 디자인에서 '반응형 디자인'의 의미는?", options: ["다양한 화면 크기에 적응하는 레이아웃", "느린 반응", "고정 크기만", "PC 전용"], correctIndex: 0, explanation: "반응형: 다양한 화면 크기에 적응" },
        { id: "wp4-11", type: "mcq", prompt: "UI에서 '마이크로 인터랙션'의 예는?", options: ["버튼 호버 시 색상 변화", "전체 페이지 리디자인", "서버 교체", "도메인 변경"], correctIndex: 0, explanation: "마이크로 인터랙션: 작은 피드백(호버, 클릭 효과 등)" },
        { id: "wp4-12", type: "mcq", prompt: "UI에서 '스켈레톤 스크린'의 목적은?", options: ["로딩 중 레이아웃 미리보기로 체감 대기시간 감소", "뼈대 사진", "보안 강화", "데이터 저장"], correctIndex: 0, explanation: "스켈레톤: 로딩 중 레이아웃 표시로 대기감 감소" },
        { id: "wp4-13", type: "mcq", prompt: "UI 디자인 시스템(Design System)의 장점은?", options: ["일관된 디자인 및 개발 효율성 향상", "비용 증가", "속도 저하", "품질 저하"], correctIndex: 0, explanation: "디자인 시스템으로 일관성과 효율성 향상" },
        { id: "wp4-14", type: "mcq", prompt: "UI에서 '다크 모드' 제공의 이점은?", options: ["눈의 피로 감소 및 배터리 절약", "보안 강화", "속도 향상", "용량 감소"], correctIndex: 0, explanation: "다크 모드: 눈 피로 감소, OLED 배터리 절약" },
        { id: "wp4-15", type: "mcq", prompt: "UI 접근성(Accessibility) 가이드라인은?", options: ["WCAG (Web Content Accessibility Guidelines)", "GDPR", "ISO 9001", "CMMI"], correctIndex: 0, explanation: "WCAG가 웹 접근성 가이드라인" },

        // UX 심화 (16-30)
        { id: "wp4-16", type: "mcq", prompt: "UX 디자인에서 '공감(Empathy)'이 중요한 이유는?", options: ["사용자 관점에서 문제를 이해하기 위해", "비용 절감", "개발 속도", "서버 성능"], correctIndex: 0, explanation: "공감: 사용자 관점에서 문제 이해" },
        { id: "wp4-17", type: "mcq", prompt: "UX에서 '사용자 여정 지도(User Journey Map)'의 목적은?", options: ["사용자 경험의 전체 흐름을 시각화", "지도 제작", "여행 안내", "GPS 추적"], correctIndex: 0, explanation: "사용자 여정 지도: 경험 흐름 시각화" },
        { id: "wp4-18", type: "mcq", prompt: "UX에서 '페인 포인트(Pain Point)'란?", options: ["사용자가 겪는 불편함이나 문제점", "신체 통증", "서버 오류", "가격 문제만"], correctIndex: 0, explanation: "페인 포인트: 사용자의 불편함/문제점" },
        { id: "wp4-19", type: "mcq", prompt: "UX 리서치 방법 중 '정성적 연구'의 예는?", options: ["심층 인터뷰, 사용성 테스트", "설문 통계", "A/B 테스트 수치", "클릭률 분석"], correctIndex: 0, explanation: "정성적: 인터뷰, 관찰 등 심층 이해 방법" },
        { id: "wp4-20", type: "mcq", prompt: "UX 리서치 방법 중 '정량적 연구'의 예는?", options: ["설문 조사, 분석 데이터", "심층 인터뷰", "관찰 연구", "포커스 그룹"], correctIndex: 0, explanation: "정량적: 수치화 가능한 설문, 분석 등" },
        { id: "wp4-21", type: "mcq", prompt: "UX에서 'MVP(Minimum Viable Product)'의 목적은?", options: ["최소 기능으로 빠르게 시장 검증", "모든 기능 포함", "완벽한 제품", "오래 개발"], correctIndex: 0, explanation: "MVP: 최소 기능으로 빠른 시장 검증" },
        { id: "wp4-22", type: "mcq", prompt: "UX 디자인의 '반복적 설계(Iterative Design)' 과정은?", options: ["디자인 → 테스트 → 개선 반복", "한 번에 완성", "테스트 없음", "수정 금지"], correctIndex: 0, explanation: "반복적: 디자인-테스트-개선 사이클 반복" },
        { id: "wp4-23", type: "mcq", prompt: "UX에서 '태스크 분석(Task Analysis)'의 목적은?", options: ["사용자가 목표 달성을 위해 수행하는 단계 파악", "업무 배분", "급여 계산", "일정 관리"], correctIndex: 0, explanation: "태스크 분석: 목표 달성 단계 파악" },
        { id: "wp4-24", type: "mcq", prompt: "UX에서 '휴리스틱 평가'란?", options: ["전문가가 사용성 원칙에 따라 평가", "사용자 테스트", "코드 리뷰", "보안 감사"], correctIndex: 0, explanation: "휴리스틱: 전문가의 사용성 원칙 기반 평가" },
        { id: "wp4-25", type: "mcq", prompt: "'닐슨의 10가지 사용성 휴리스틱'에 포함되지 않는 것은?", options: ["시스템 상태의 가시성", "사용자 제어와 자유", "오류 방지", "서버 성능 최적화"], correctIndex: 3, explanation: "닐슨 휴리스틱에 서버 성능은 포함되지 않음" },
        { id: "wp4-26", type: "mcq", prompt: "UX에서 '감성 디자인(Emotional Design)'의 목표는?", options: ["긍정적 감정을 유발하여 사용자 만족도 향상", "감정 무시", "기능만 중시", "비용 절감"], correctIndex: 0, explanation: "감성 디자인: 긍정적 감정 유발로 만족도 향상" },
        { id: "wp4-27", type: "mcq", prompt: "UX에서 '온보딩(Onboarding)'의 목적은?", options: ["신규 사용자가 서비스를 쉽게 이해하도록 안내", "퇴사 처리", "데이터 백업", "서버 설정"], correctIndex: 0, explanation: "온보딩: 신규 사용자의 서비스 이해 안내" },
        { id: "wp4-28", type: "mcq", prompt: "UX에서 '인지 부하(Cognitive Load)' 줄이기 위한 방법은?", options: ["정보를 단순화하고 청킹(Chunking) 활용", "더 많은 정보 표시", "복잡한 메뉴", "작은 텍스트"], correctIndex: 0, explanation: "인지 부하 감소: 단순화, 청킹 활용" },
        { id: "wp4-29", type: "mcq", prompt: "UX에서 '사용자 피드백 루프'의 중요성은?", options: ["지속적인 개선을 위한 사용자 의견 수집", "피드백 무시", "개발 중단", "비용 증가"], correctIndex: 0, explanation: "피드백 루프: 지속적 개선을 위한 의견 수집" },
        { id: "wp4-30", type: "mcq", prompt: "좋은 UX를 측정하는 지표가 아닌 것은?", options: ["작업 완료율", "오류율", "사용자 만족도", "서버 다운타임"], correctIndex: 3, explanation: "서버 다운타임은 UX가 아닌 기술 지표" }
    ]
};
