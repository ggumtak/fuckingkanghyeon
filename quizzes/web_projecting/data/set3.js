// File: quizzes/web_projecting/data/set3.js
// 웹기획 객관식 30문제 - IA 정보구조 심화
const set3 = {
    setId: "web-set-3",
    questions: [
        // IA 개념 심화 (1-10)
        { id: "wp3-01", type: "mcq", prompt: "IA(정보구조)의 4대 구성요소가 아닌 것은?", options: ["조직 시스템(Organization System)", "라벨링 시스템(Labeling System)", "내비게이션 시스템(Navigation System)", "서버 시스템(Server System)"], correctIndex: 3, explanation: "IA 4대 요소: 조직, 라벨링, 내비게이션, 검색 시스템" },
        { id: "wp3-02", type: "mcq", prompt: "IA에서 '조직 시스템(Organization System)'의 역할은?", options: ["콘텐츠를 분류하고 그룹화하는 방식 정의", "서버 조직도 작성", "팀 조직 구성", "파일 압축"], correctIndex: 0, explanation: "조직 시스템은 콘텐츠 분류/그룹화 방식 정의" },
        { id: "wp3-03", type: "mcq", prompt: "IA에서 '검색 시스템(Search System)'의 목적은?", options: ["사용자가 원하는 정보를 빠르게 찾도록 지원", "검색 엔진 최적화", "광고 노출", "해킹 방지"], correctIndex: 0, explanation: "검색 시스템으로 정보를 빠르게 찾도록 지원" },
        { id: "wp3-04", type: "mcq", prompt: "IA 설계 시 '카드 소팅(Card Sorting)'의 목적은?", options: ["사용자 관점의 정보 분류 방식 파악", "카드 게임 테스트", "결제 시스템 테스트", "보안 테스트"], correctIndex: 0, explanation: "카드 소팅으로 사용자 관점의 분류 방식 파악" },
        { id: "wp3-05", type: "mcq", prompt: "'오픈 카드 소팅'과 '클로즈드 카드 소팅'의 차이는?", options: ["오픈은 사용자가 카테고리를 만들고, 클로즈드는 미리 정해진 카테고리에 분류", "동일함", "오픈이 더 제한적", "클로즈드가 자유로움"], correctIndex: 0, explanation: "오픈=사용자가 카테고리 생성, 클로즈드=기존 카테고리 사용" },
        { id: "wp3-06", type: "mcq", prompt: "IA에서 '메타데이터(Metadata)'의 역할은?", options: ["콘텐츠에 대한 설명 정보를 제공하여 검색/필터링 용이", "데이터 삭제", "데이터 암호화", "데이터 백업"], correctIndex: 0, explanation: "메타데이터는 콘텐츠 설명 정보로 검색/필터링 지원" },
        { id: "wp3-07", type: "mcq", prompt: "IA 설계에서 '택소노미(Taxonomy)'란?", options: ["콘텐츠를 체계적으로 분류하는 계층 구조", "세금 계산", "동물 분류학", "프로그래밍 언어"], correctIndex: 0, explanation: "택소노미는 콘텐츠의 체계적 계층 분류 구조" },
        { id: "wp3-08", type: "mcq", prompt: "IA에서 '폴크소노미(Folksonomy)'의 특징은?", options: ["사용자들이 자유롭게 태그를 붙이는 분류 방식", "전문가만 분류", "자동 분류", "계층적 분류만"], correctIndex: 0, explanation: "폴크소노미는 사용자가 자유롭게 태그 부여" },
        { id: "wp3-09", type: "mcq", prompt: "IA에서 '패싯 분류(Faceted Classification)'의 장점은?", options: ["여러 기준으로 동시에 필터링 가능", "단일 기준만 사용", "분류 불가", "검색 불가"], correctIndex: 0, explanation: "패싯 분류로 여러 기준 동시 필터링 가능" },
        { id: "wp3-10", type: "mcq", prompt: "IA에서 '글로벌 내비게이션'과 '로컬 내비게이션'의 차이는?", options: ["글로벌은 전체 사이트 공통, 로컬은 특정 섹션 전용", "동일함", "글로벌이 작음", "로컬이 전체에 적용"], correctIndex: 0, explanation: "글로벌=사이트 전체 공통, 로컬=특정 섹션 전용" },

        // IA 설계 실무 (11-20)
        { id: "wp3-11", type: "mcq", prompt: "사이트맵 작성 시 고려해야 할 것이 아닌 것은?", options: ["콘텐츠 계층 구조", "페이지 간 관계", "내비게이션 흐름", "서버 IP 주소"], correctIndex: 3, explanation: "서버 IP는 사이트맵과 무관" },
        { id: "wp3-12", type: "mcq", prompt: "IA에서 '뎁스(Depth)'가 깊어지면 발생하는 문제는?", options: ["사용자가 원하는 정보에 도달하기 어려움", "페이지가 빨라짐", "디자인이 개선됨", "비용 절감"], correctIndex: 0, explanation: "뎁스가 깊으면 정보 도달이 어려워짐" },
        { id: "wp3-13", type: "mcq", prompt: "IA에서 '브레드크럼(Breadcrumb)'의 역할은?", options: ["현재 위치 표시 및 상위 페이지 이동 지원", "빵 만들기 레시피", "쿠키 정책", "광고 배너"], correctIndex: 0, explanation: "브레드크럼은 현재 위치와 이동 경로 표시" },
        { id: "wp3-14", type: "mcq", prompt: "IA 설계 시 '3클릭 규칙'의 의미는?", options: ["3번의 클릭 안에 원하는 정보에 도달해야 함", "3번 클릭 금지", "3초 이내 로딩", "3페이지 제한"], correctIndex: 0, explanation: "3클릭 규칙: 3번 클릭 내 정보 도달 권장" },
        { id: "wp3-15", type: "mcq", prompt: "IA에서 'IA 설계 문서'에 포함되는 것이 아닌 것은?", options: ["사이트맵", "와이어프레임", "내비게이션 구조", "서버 코드"], correctIndex: 3, explanation: "서버 코드는 IA 설계 문서에 포함되지 않음" },
        { id: "wp3-16", type: "mcq", prompt: "IA 설계 시 '사용자 시나리오' 작성의 목적은?", options: ["사용자 행동 흐름을 예측하고 설계에 반영", "시나리오 작가 채용", "영화 제작", "게임 개발"], correctIndex: 0, explanation: "사용자 시나리오로 행동 흐름 예측 및 설계 반영" },
        { id: "wp3-17", type: "mcq", prompt: "IA에서 '정보 냄새(Information Scent)'란?", options: ["사용자가 링크나 메뉴를 통해 원하는 정보가 있을 것 같은 단서", "향기 마케팅", "냄새 감지 기술", "데이터 손상"], correctIndex: 0, explanation: "정보 냄새: 원하는 정보가 있을 것 같은 시각적 단서" },
        { id: "wp3-18", type: "mcq", prompt: "IA 설계 시 '콘텐츠 인벤토리'의 역할은?", options: ["기존 콘텐츠 목록화 및 분석", "재고 관리", "재무 관리", "인사 관리"], correctIndex: 0, explanation: "콘텐츠 인벤토리로 기존 콘텐츠를 목록화하고 분석" },
        { id: "wp3-19", type: "mcq", prompt: "IA에서 '콘텐츠 갭 분석'의 목적은?", options: ["필요하지만 없는 콘텐츠 파악", "콘텐츠 삭제", "디자인 변경", "서버 증설"], correctIndex: 0, explanation: "콘텐츠 갭 분석으로 부족한 콘텐츠를 파악" },
        { id: "wp3-20", type: "mcq", prompt: "IA 설계가 SEO에 미치는 영향은?", options: ["명확한 구조가 검색엔진 크롤링에 유리", "SEO와 무관", "SEO에 해로움", "광고 비용 증가"], correctIndex: 0, explanation: "명확한 IA 구조가 검색엔진 크롤링에 유리" },

        // IA 평가 및 개선 (21-30)
        { id: "wp3-21", type: "mcq", prompt: "IA 설계 후 사용성 테스트를 하는 이유는?", options: ["실제 사용자가 정보를 잘 찾는지 검증", "디자인 확정", "코드 완성", "서버 테스트"], correctIndex: 0, explanation: "사용성 테스트로 정보 탐색 용이성 검증" },
        { id: "wp3-22", type: "mcq", prompt: "IA에서 '트리 테스트(Tree Test)'의 목적은?", options: ["내비게이션 구조의 효과성을 시각 디자인 없이 검증", "나무 관리", "환경 테스트", "성능 테스트"], correctIndex: 0, explanation: "트리 테스트로 내비게이션 구조 효과성 검증" },
        { id: "wp3-23", type: "mcq", prompt: "IA 개선 시 가장 먼저 확인해야 할 데이터는?", options: ["사용자 행동 분석 데이터", "서버 로그", "매출 데이터만", "직원 만족도"], correctIndex: 0, explanation: "사용자 행동 분석으로 개선점 파악" },
        { id: "wp3-24", type: "mcq", prompt: "IA에서 '이탈률(Bounce Rate)'이 높다면 의미하는 것은?", options: ["사용자가 원하는 정보를 찾지 못하고 떠남", "성공적인 사이트", "빠른 로딩", "좋은 디자인"], correctIndex: 0, explanation: "높은 이탈률은 정보 탐색 실패를 의미할 수 있음" },
        { id: "wp3-25", type: "mcq", prompt: "IA 설계에서 'A/B 테스트' 활용 목적은?", options: ["두 가지 구조 중 더 효과적인 것 선택", "알파벳 테스트", "학력 평가", "체력 테스트"], correctIndex: 0, explanation: "A/B 테스트로 더 효과적인 IA 구조 선택" },
        { id: "wp3-26", type: "mcq", prompt: "IA를 반응형 웹에 적용할 때 고려할 점은?", options: ["화면 크기에 따른 내비게이션 변화", "고정 레이아웃만 사용", "PC 버전만 고려", "모바일 무시"], correctIndex: 0, explanation: "반응형에서는 화면 크기별 내비게이션 고려" },
        { id: "wp3-27", type: "mcq", prompt: "IA에서 '햄버거 메뉴'의 장단점으로 올바른 것은?", options: ["공간 절약 장점, 메뉴 발견성 저하 단점", "항상 좋음", "항상 나쁨", "PC에만 사용"], correctIndex: 0, explanation: "햄버거 메뉴: 공간 절약 but 발견성 저하" },
        { id: "wp3-28", type: "mcq", prompt: "IA 설계 시 '접근성(Accessibility)' 고려의 의미는?", options: ["장애가 있는 사용자도 정보에 접근 가능하도록 설계", "물리적 접근", "가격 접근성", "시간 접근성"], correctIndex: 0, explanation: "접근성: 장애인도 접근 가능하도록 설계" },
        { id: "wp3-29", type: "mcq", prompt: "IA와 콘텐츠 전략(Content Strategy)의 관계는?", options: ["IA는 콘텐츠 전략의 구조적 기반 제공", "무관함", "반대 개념", "동일한 것"], correctIndex: 0, explanation: "IA가 콘텐츠 전략의 구조적 기반이 됨" },
        { id: "wp3-30", type: "mcq", prompt: "대규모 사이트 IA 설계 시 가장 중요한 것은?", options: ["확장성 있는 분류 체계와 일관된 내비게이션", "최소한의 페이지", "화려한 디자인", "빠른 배포"], correctIndex: 0, explanation: "대규모 사이트는 확장성과 일관성이 핵심" }
    ]
};
