// File: quizzes/web_projecting/data/set1.js
// 웹기획 객관식 30문제 - RFP, WBS, IA, UI/UX, 페르소나
const set1 = {
    setId: "web-set-1",
    questions: [
        // RFP (1-5)
        { id: "wp-01", type: "mcq", prompt: "RFP의 의미는 무엇인가?", options: ["Request For Proposal", "Request For Project", "Report For Planning", "Review For Process"], correctIndex: 0, explanation: "RFP = Request For Proposal (제안요청서)" },
        { id: "wp-02", type: "mcq", prompt: "RFP를 작성하는 주체는 누구인가?", options: ["발주처(클라이언트)", "개발사", "디자이너", "프리랜서"], correctIndex: 0, explanation: "RFP는 발주처가 작성하여 개발사에 요청함" },
        { id: "wp-03", type: "mcq", prompt: "RFP에 포함되지 않는 항목은?", options: ["프로젝트 개요", "요구사항 명세", "예산 및 일정", "개발자 이력서"], correctIndex: 3, explanation: "개발자 이력서는 RFP가 아닌 제안서에 포함" },
        { id: "wp-04", type: "mcq", prompt: "RFP를 받고 제출하는 문서는?", options: ["제안서(Proposal)", "보고서(Report)", "계약서(Contract)", "명세서(Spec)"], correctIndex: 0, explanation: "RFP → 제안서(Proposal) 제출" },
        { id: "wp-05", type: "mcq", prompt: "RFP의 목적으로 가장 적절한 것은?", options: ["프로젝트 요구사항 명확화 및 제안 요청", "개발 완료 보고", "디자인 가이드 제공", "테스트 결과 공유"], correctIndex: 0, explanation: "RFP는 요구사항을 명확히 하고 제안을 요청하는 문서" },

        // WBS (6-10)
        { id: "wp-06", type: "mcq", prompt: "WBS의 의미는 무엇인가?", options: ["Work Breakdown Structure", "Web Based System", "Work Based Schedule", "Web Business Structure"], correctIndex: 0, explanation: "WBS = Work Breakdown Structure (작업분류체계)" },
        { id: "wp-07", type: "mcq", prompt: "WBS의 주요 목적은?", options: ["프로젝트를 관리 가능한 단위로 분해", "디자인 작업 수행", "코드 작성", "서버 설정"], correctIndex: 0, explanation: "WBS는 프로젝트를 관리 가능한 작은 단위로 분해하는 구조" },
        { id: "wp-08", type: "mcq", prompt: "WBS에서 가장 하위 수준의 작업 단위는?", options: ["Work Package", "Milestone", "Phase", "Project"], correctIndex: 0, explanation: "Work Package가 가장 하위 수준의 작업 단위" },
        { id: "wp-09", type: "mcq", prompt: "WBS를 통해 얻을 수 있는 이점이 아닌 것은?", options: ["작업 범위 명확화", "일정 관리 용이", "비용 산정 기준 제공", "디자인 품질 향상"], correctIndex: 3, explanation: "WBS는 범위/일정/비용 관리에 도움, 디자인 품질과 직접 연관 없음" },
        { id: "wp-10", type: "mcq", prompt: "WBS 작성 시 사용되는 분해 기법은?", options: ["하향식(Top-Down) 분해", "상향식(Bottom-Up) 분해만", "랜덤 분해", "알파벳순 분해"], correctIndex: 0, explanation: "WBS는 주로 하향식(Top-Down)으로 분해" },

        // IA 정보구조 (11-17)
        { id: "wp-11", type: "mcq", prompt: "IA의 의미는 무엇인가?", options: ["Information Architecture", "Internet Application", "Interface Analysis", "Integrated API"], correctIndex: 0, explanation: "IA = Information Architecture (정보구조)" },
        { id: "wp-12", type: "mcq", prompt: "IA(정보구조)의 주요 목적은?", options: ["정보를 체계적으로 조직화하여 사용자 탐색 용이하게 함", "서버 성능 향상", "보안 강화", "데이터베이스 설계"], correctIndex: 0, explanation: "IA는 정보를 조직화하여 사용자가 쉽게 찾을 수 있게 함" },
        { id: "wp-13", type: "mcq", prompt: "IA 설계 시 고려하지 않아도 되는 요소는?", options: ["콘텐츠 분류 체계", "내비게이션 구조", "라벨링 시스템", "서버 하드웨어 사양"], correctIndex: 3, explanation: "서버 하드웨어는 IA와 직접 관련 없음" },
        { id: "wp-14", type: "mcq", prompt: "사이트맵(Sitemap)은 IA의 어떤 요소와 관련되는가?", options: ["전체 콘텐츠 구조 시각화", "색상 팔레트", "서버 구성도", "데이터베이스 스키마"], correctIndex: 0, explanation: "사이트맵은 IA에서 전체 콘텐츠 구조를 시각화" },
        { id: "wp-15", type: "mcq", prompt: "IA에서 '라벨링(Labeling)'의 의미는?", options: ["콘텐츠나 메뉴에 적절한 명칭 부여", "이미지에 태그 추가", "파일명 변경", "버전 관리"], correctIndex: 0, explanation: "라벨링은 콘텐츠/메뉴에 사용자가 이해하기 쉬운 명칭 부여" },
        { id: "wp-16", type: "mcq", prompt: "IA 설계 결과물이 아닌 것은?", options: ["사이트맵", "와이어프레임", "내비게이션 구조도", "소스코드"], correctIndex: 3, explanation: "소스코드는 개발 단계 산출물, IA 설계 결과물 아님" },
        { id: "wp-17", type: "mcq", prompt: "IA 설계가 잘못되면 발생하는 문제는?", options: ["사용자가 원하는 정보를 찾기 어려움", "서버가 다운됨", "보안 취약점 발생", "데이터 손실"], correctIndex: 0, explanation: "IA가 잘못되면 사용자 탐색이 어려워짐" },

        // UI/UX (18-25)
        { id: "wp-18", type: "mcq", prompt: "UI의 의미는 무엇인가?", options: ["User Interface", "User Integration", "Universal Input", "Unit Index"], correctIndex: 0, explanation: "UI = User Interface (사용자 인터페이스)" },
        { id: "wp-19", type: "mcq", prompt: "UX의 의미는 무엇인가?", options: ["User Experience", "User Exchange", "Universal Extension", "Unit Execution"], correctIndex: 0, explanation: "UX = User Experience (사용자 경험)" },
        { id: "wp-20", type: "mcq", prompt: "UI와 UX의 관계로 올바른 것은?", options: ["UI는 UX의 일부이며, 좋은 UI가 좋은 UX에 기여한다", "UI와 UX는 완전히 동일하다", "UX는 UI에 포함된다", "둘은 전혀 관련이 없다"], correctIndex: 0, explanation: "UI는 UX의 일부, 좋은 UI → 좋은 UX에 기여" },
        { id: "wp-21", type: "mcq", prompt: "UI 디자인의 주요 관심사는?", options: ["시각적 디자인, 버튼, 아이콘, 레이아웃", "서버 성능", "데이터베이스 최적화", "네트워크 속도"], correctIndex: 0, explanation: "UI는 시각적 요소(버튼, 아이콘, 레이아웃 등)에 집중" },
        { id: "wp-22", type: "mcq", prompt: "UX 디자인의 주요 관심사는?", options: ["사용자의 전체적인 경험과 만족도", "코드 최적화", "서버 보안", "데이터 암호화"], correctIndex: 0, explanation: "UX는 사용자의 전체 경험과 만족도에 집중" },
        { id: "wp-23", type: "mcq", prompt: "좋은 UX를 위해 가장 중요한 것은?", options: ["사용자 중심 설계", "최신 기술 사용", "화려한 애니메이션", "많은 기능"], correctIndex: 0, explanation: "UX의 핵심은 사용자 중심 설계" },
        { id: "wp-24", type: "mcq", prompt: "UI/UX 설계 프로세스의 올바른 순서는?", options: ["리서치 → 와이어프레임 → 프로토타입 → 테스트", "코딩 → 디자인 → 기획 → 테스트", "테스트 → 배포 → 기획 → 디자인", "배포 → 유지보수 → 기획 → 개발"], correctIndex: 0, explanation: "리서치 → 와이어프레임 → 프로토타입 → 테스트 순서" },
        { id: "wp-25", type: "mcq", prompt: "와이어프레임(Wireframe)의 목적은?", options: ["화면 레이아웃과 구성요소 배치 계획", "최종 디자인 완성", "서버 구성", "데이터베이스 설계"], correctIndex: 0, explanation: "와이어프레임은 화면 레이아웃과 요소 배치 계획" },

        // 페르소나 (26-30)
        { id: "wp-26", type: "mcq", prompt: "페르소나(Persona)란 무엇인가?", options: ["가상의 대표 사용자 프로필", "개발팀 직책", "서버 유형", "프로그래밍 언어"], correctIndex: 0, explanation: "페르소나 = 가상의 대표 사용자 프로필" },
        { id: "wp-27", type: "mcq", prompt: "페르소나를 만드는 목적은?", options: ["사용자 니즈를 이해하고 사용자 중심 설계", "개발 비용 절감", "서버 성능 향상", "보안 강화"], correctIndex: 0, explanation: "페르소나는 사용자 니즈 이해 및 사용자 중심 설계에 활용" },
        { id: "wp-28", type: "mcq", prompt: "페르소나에 포함되는 정보가 아닌 것은?", options: ["이름, 나이, 직업", "목표와 동기", "불편사항(Pain Point)", "IP 주소"], correctIndex: 3, explanation: "IP 주소는 페르소나와 무관, 개인정보/목표/불편사항 등이 포함" },
        { id: "wp-29", type: "mcq", prompt: "페르소나 작성 시 가장 중요한 데이터 출처는?", options: ["실제 사용자 리서치 데이터", "개발자의 추측", "경쟁사 광고", "랜덤 생성"], correctIndex: 0, explanation: "페르소나는 실제 사용자 리서치 기반으로 작성" },
        { id: "wp-30", type: "mcq", prompt: "페르소나가 프로젝트에 주는 효과로 가장 적절한 것은?", options: ["팀원 간 사용자에 대한 공통 이해 형성", "서버 비용 감소", "코드 자동 생성", "버그 자동 수정"], correctIndex: 0, explanation: "페르소나는 팀 전체가 사용자에 대해 공통 이해를 형성하게 함" }
    ]
};
