// File: quizzes/web_projecting/data/set2.js
// 웹기획 객관식 30문제 - RFP/WBS 심화
const set2 = {
    setId: "web-set-2",
    questions: [
        // RFP 심화 (1-15)
        { id: "wp2-01", type: "mcq", prompt: "RFP에서 '범위(Scope)' 정의가 중요한 이유는?", options: ["프로젝트 경계를 명확히 하여 분쟁 방지", "디자인 색상 결정", "서버 위치 선정", "개발자 채용"], correctIndex: 0, explanation: "범위 정의로 프로젝트 경계를 명확히 함" },
        { id: "wp2-02", type: "mcq", prompt: "RFP에서 '평가 기준(Evaluation Criteria)'의 역할은?", options: ["제안서 선정 시 객관적 판단 기준 제공", "디자인 가이드 제시", "코드 리뷰 기준", "테스트 케이스 정의"], correctIndex: 0, explanation: "평가 기준으로 제안서를 객관적으로 비교 선정" },
        { id: "wp2-03", type: "mcq", prompt: "RFP 작성 시 '일정(Schedule)'에 포함되어야 할 것은?", options: ["주요 마일스톤과 납기일", "개발자 출퇴근 시간", "점심 시간", "휴가 일정"], correctIndex: 0, explanation: "일정에는 마일스톤과 납기일이 포함" },
        { id: "wp2-04", type: "mcq", prompt: "RFP의 '기술 요구사항' 섹션에 포함되지 않는 것은?", options: ["사용할 프로그래밍 언어", "시스템 호환성 요건", "성능 기준", "발주처 회사 연혁"], correctIndex: 3, explanation: "회사 연혁은 기술 요구사항이 아님" },
        { id: "wp2-05", type: "mcq", prompt: "RFP를 통해 여러 업체의 제안서를 받는 이유는?", options: ["경쟁을 통한 최적의 제안 선택", "문서 수집 취미", "법적 의무", "직원 교육용"], correctIndex: 0, explanation: "경쟁을 통해 최적의 제안을 선택하기 위함" },
        { id: "wp2-06", type: "mcq", prompt: "RFP에 '예산 범위'를 명시하는 이점은?", options: ["적정 수준의 제안을 유도", "업체 수익 보장", "세금 절감", "디자인 품질 향상"], correctIndex: 0, explanation: "예산 범위로 적정 수준의 현실적 제안 유도" },
        { id: "wp2-07", type: "mcq", prompt: "RFP에서 '계약 조건' 섹션의 목적은?", options: ["법적 관계와 의무 사항 명시", "코드 스타일 가이드", "디자인 시안 요청", "테스트 방법 정의"], correctIndex: 0, explanation: "계약 조건으로 법적 관계와 의무를 명시" },
        { id: "wp2-08", type: "mcq", prompt: "RFP 제출 후 업체가 작성하는 문서는?", options: ["제안서(Proposal)", "RFI (Request For Information)", "SOW (Statement of Work)", "NDA (비밀유지계약)"], correctIndex: 0, explanation: "RFP 수령 후 제안서를 작성하여 제출" },
        { id: "wp2-09", type: "mcq", prompt: "RFP와 RFI의 차이점은?", options: ["RFI는 정보 요청, RFP는 제안 요청", "동일한 문서", "RFI가 더 상세함", "RFP가 먼저 작성됨"], correctIndex: 0, explanation: "RFI=정보요청, RFP=제안요청으로 목적이 다름" },
        { id: "wp2-10", type: "mcq", prompt: "RFP 작성 전 내부적으로 먼저 해야 할 것은?", options: ["요구사항 분석 및 정리", "개발 시작", "서버 구매", "직원 채용"], correctIndex: 0, explanation: "RFP 전 내부 요구사항을 먼저 분석 정리" },
        { id: "wp2-11", type: "mcq", prompt: "RFP에서 '필수 요구사항'과 '선택 요구사항'을 구분하는 이유는?", options: ["우선순위 명확화 및 제안 평가 용이", "문서량 증가", "법적 요건", "디자인 참고"], correctIndex: 0, explanation: "필수/선택 구분으로 우선순위를 명확히 함" },
        { id: "wp2-12", type: "mcq", prompt: "RFP에 '질의응답(Q&A)' 기간을 두는 이유는?", options: ["업체들의 명확한 이해를 돕기 위해", "시간 낭비", "업무 지연", "문서 수정"], correctIndex: 0, explanation: "Q&A로 업체들이 RFP를 명확히 이해하도록 함" },
        { id: "wp2-13", type: "mcq", prompt: "RFP에서 '샘플' 또는 '데모' 요청의 목적은?", options: ["업체 역량을 실제로 확인", "무료 서비스 이용", "저작권 획득", "경쟁 제거"], correctIndex: 0, explanation: "샘플/데모로 업체의 실제 역량을 검증" },
        { id: "wp2-14", type: "mcq", prompt: "RFP에 '보안 요구사항'을 명시해야 하는 경우는?", options: ["개인정보나 민감한 데이터를 다룰 때", "모든 프로젝트에 불필요", "디자인 프로젝트만", "마케팅 프로젝트만"], correctIndex: 0, explanation: "민감 데이터 취급 시 보안 요구사항 필수" },
        { id: "wp2-15", type: "mcq", prompt: "RFP 평가 시 '가격'만을 기준으로 하면 안 되는 이유는?", options: ["품질, 역량, 일정 등 종합적 평가 필요", "가격이 중요하지 않아서", "법적으로 금지", "항상 비싼 게 좋아서"], correctIndex: 0, explanation: "가격 외에도 품질, 역량 등 종합 평가 필요" },

        // WBS 심화 (16-30)
        { id: "wp2-16", type: "mcq", prompt: "WBS의 최상위 레벨에 위치하는 것은?", options: ["프로젝트 전체", "개별 태스크", "작업 패키지", "마일스톤"], correctIndex: 0, explanation: "WBS 최상위에는 프로젝트 전체가 위치" },
        { id: "wp2-17", type: "mcq", prompt: "WBS 분해의 적정 수준을 판단하는 기준은?", options: ["작업을 관리하고 할당할 수 있는 단위", "최대한 상세하게", "최대한 간단하게", "팀원 수와 동일하게"], correctIndex: 0, explanation: "관리/할당 가능한 수준까지 분해" },
        { id: "wp2-18", type: "mcq", prompt: "WBS 사전(WBS Dictionary)의 역할은?", options: ["각 작업 패키지의 상세 설명 제공", "단어장 역할", "번역 도구", "데이터베이스 스키마"], correctIndex: 0, explanation: "WBS 사전은 각 작업 패키지를 상세 설명" },
        { id: "wp2-19", type: "mcq", prompt: "WBS 작성 시 '100% 규칙'의 의미는?", options: ["하위 요소의 합이 상위 요소의 100%를 구성", "100개 항목 필요", "100% 완료 후 작성", "100명이 검토"], correctIndex: 0, explanation: "100% 규칙: 하위 합 = 상위 전체" },
        { id: "wp2-20", type: "mcq", prompt: "WBS에서 '작업 패키지'를 더 분해한 것은?", options: ["활동(Activity)", "마일스톤", "프로젝트", "포트폴리오"], correctIndex: 0, explanation: "작업 패키지를 분해하면 활동(Activity)이 됨" },
        { id: "wp2-21", type: "mcq", prompt: "WBS 번호 체계(예: 1.2.3)의 목적은?", options: ["작업 간 계층 관계를 명확히 표현", "전화번호 관리", "IP 주소 할당", "버전 관리"], correctIndex: 0, explanation: "번호 체계로 계층 관계를 명확히 표현" },
        { id: "wp2-22", type: "mcq", prompt: "WBS 작성에 팀원을 참여시키는 이점은?", options: ["현실적인 분해 및 팀 이해도 향상", "작업 시간 증가", "비용 증가", "품질 저하"], correctIndex: 0, explanation: "팀원 참여로 현실적 분해와 이해도 향상" },
        { id: "wp2-23", type: "mcq", prompt: "WBS와 간트 차트(Gantt Chart)의 관계는?", options: ["WBS 기반으로 간트 차트 일정 작성", "동일한 문서", "반대 개념", "관련 없음"], correctIndex: 0, explanation: "WBS로 작업을 분해한 후 간트 차트로 일정 표현" },
        { id: "wp2-24", type: "mcq", prompt: "WBS에서 '성과물 기반' 분해 방식의 장점은?", options: ["결과물 중심으로 명확한 목표 설정", "과정 중심 관리", "시간 절약", "비용 절감"], correctIndex: 0, explanation: "성과물 기반으로 결과 중심 목표 설정" },
        { id: "wp2-25", type: "mcq", prompt: "WBS 작성 후 변경이 필요할 때 해야 할 것은?", options: ["변경 통제 프로세스를 통해 관리", "즉시 삭제", "무시", "새로 작성"], correctIndex: 0, explanation: "WBS 변경은 변경 통제 프로세스로 관리" },
        { id: "wp2-26", type: "mcq", prompt: "WBS가 비용 산정에 활용되는 이유는?", options: ["각 작업 패키지별로 비용 추정 가능", "총액만 필요해서", "비용과 무관", "예산 삭감"], correctIndex: 0, explanation: "작업 패키지별로 비용 산정 가능" },
        { id: "wp2-27", type: "mcq", prompt: "WBS의 '상호 배타적(Mutually Exclusive)' 원칙은?", options: ["작업 간 중복이 없어야 함", "작업 공유 필수", "중복 허용", "순서 무관"], correctIndex: 0, explanation: "작업 간 중복 없이 상호 배타적이어야 함" },
        { id: "wp2-28", type: "mcq", prompt: "WBS 작성 도구로 적합한 것은?", options: ["Microsoft Project, Excel, 마인드맵 도구", "메모장만", "계산기", "번역기"], correctIndex: 0, explanation: "MS Project, Excel, 마인드맵 등 활용 가능" },
        { id: "wp2-29", type: "mcq", prompt: "WBS가 리스크 관리에 도움이 되는 이유는?", options: ["각 작업별 리스크 식별 가능", "리스크와 무관", "리스크 증가", "리스크 은폐"], correctIndex: 0, explanation: "작업별로 리스크를 식별하고 관리 가능" },
        { id: "wp2-30", type: "mcq", prompt: "WBS 완성도를 검증하는 방법은?", options: ["100% 규칙 확인 및 이해관계자 검토", "자동 검증 도구만", "검증 불필요", "일부만 확인"], correctIndex: 0, explanation: "100% 규칙 확인과 이해관계자 검토로 검증" }
    ]
};
