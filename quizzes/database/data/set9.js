// File: quizzes/database/data/set9.js
// 필드 작성 문제 (2/3) - 15문항 - 시험 문제 유형 6번 대비
const set9 = {
    setId: "set-9",
    questions: [
        // [1-5] 정밀 숫자형 필드
        { id: "f9-01", type: "short", prompt: "제품 무게(weight)를 저장하는 필드를 만드세요.\n조건: 전체 5자리, 소수점 이하 2자리 (예: 123.45)", acceptableAnswers: ["weight DECIMAL(5,2)", "weight DECIMAL(5, 2)", "weight decimal(5,2)", "weight NUMERIC(5,2)", "weight NUMERIC(5, 2)"], explanation: "DECIMAL(5,2)는 xxx.xx 형태" },
        { id: "f9-02", type: "short", prompt: "환율(exchangeRate)을 저장하는 필드를 만드세요.\n조건: 전체 10자리, 소수점 이하 4자리", acceptableAnswers: ["exchangeRate DECIMAL(10,4)", "exchangeRate DECIMAL(10, 4)", "exchangeRate decimal(10,4)", "exchangeRate NUMERIC(10,4)"], explanation: "DECIMAL(10,4)는 xxxxxx.xxxx 형태" },
        { id: "f9-03", type: "short", prompt: "과학 실험 데이터(measurement)를 저장하는 필드를 만드세요.\n조건: 매우 크거나 작은 수, 부동 소수점 사용", acceptableAnswers: ["measurement FLOAT", "measurement float", "measurement FLOAT NULL", "measurement FLOAT NOT NULL", "measurement REAL", "measurement real"], explanation: "FLOAT는 부동 소수점 근사값" },
        { id: "f9-04", type: "short", prompt: "주문 수량(quantity)을 저장하는 필드를 만드세요.\n조건: -32,768 ~ 32,767 범위의 정수", acceptableAnswers: ["quantity SMALLINT", "quantity smallint", "quantity SMALLINT NULL", "quantity SMALLINT NOT NULL"], explanation: "SMALLINT는 2바이트 정수" },
        { id: "f9-05", type: "short", prompt: "월 급여(salary)를 저장하는 필드를 만드세요.\n조건: 원 단위 정수, 일반적인 금액 범위", acceptableAnswers: ["salary INT", "salary int", "salary INT NULL", "salary INT NOT NULL", "salary MONEY", "salary money"], explanation: "INT 또는 MONEY 적합" },

        // [6-10] 다양한 문자열 필드
        { id: "f9-06", type: "short", prompt: "주민등록번호(ssn)를 저장하는 필드를 만드세요.\n조건: 정확히 14자리 고정 (하이픈 포함 123456-1234567)", acceptableAnswers: ["ssn CHAR(14)", "ssn char(14)", "ssn CHAR(14) NULL", "ssn CHAR(14) NOT NULL"], explanation: "CHAR(14)는 14자리 고정 길이" },
        { id: "f9-07", type: "short", prompt: "휴대폰 번호(phone)를 저장하는 필드를 만드세요.\n조건: 최대 13자리, 숫자와 하이픈, 가변 길이", acceptableAnswers: ["phone VARCHAR(13)", "phone varchar(13)", "phone VARCHAR(13) NULL", "phone VARCHAR(13) NOT NULL", "phone VARCHAR(15)", "phone varchar(15)"], explanation: "VARCHAR(13)은 가변 길이 문자열" },
        { id: "f9-08", type: "short", prompt: "회사명(companyName)을 저장하는 필드를 만드세요.\n조건: 최대 50자, 한글 회사명 포함, 가변 길이", acceptableAnswers: ["companyName NVARCHAR(50)", "companyName nvarchar(50)", "companyName NVARCHAR(50) NULL", "companyName NVARCHAR(50) NOT NULL"], explanation: "NVARCHAR(50)은 유니코드 가변 길이" },
        { id: "f9-09", type: "short", prompt: "상품 코드(productCode)를 저장하는 필드를 만드세요.\n조건: 정확히 8자리 영문+숫자 고정", acceptableAnswers: ["productCode CHAR(8)", "productCode char(8)", "productCode CHAR(8) NULL", "productCode CHAR(8) NOT NULL"], explanation: "CHAR(8)은 8자리 고정 길이" },
        { id: "f9-10", type: "short", prompt: "JSON 형식의 설정값(settings)을 저장하는 필드를 만드세요.\n조건: 길이가 매우 긴 텍스트, 영문 기반", acceptableAnswers: ["settings VARCHAR(MAX)", "settings varchar(max)", "settings VARCHAR(MAX) NULL", "settings VARCHAR(max)", "settings NVARCHAR(MAX)"], explanation: "VARCHAR(MAX)는 대용량 텍스트" },

        // [11-15] 날짜/시간 심화 필드
        { id: "f9-11", type: "short", prompt: "글로벌 서비스 이벤트 시간(eventTime)을 저장하는 필드를 만드세요.\n조건: 날짜/시간 + 표준 시간대(Timezone) 정보 포함", acceptableAnswers: ["eventTime DATETIMEOFFSET", "eventTime datetimeoffset", "eventTime DATETIMEOFFSET NULL", "eventTime DATETIMEOFFSET NOT NULL"], explanation: "DATETIMEOFFSET은 시간대 포함" },
        { id: "f9-12", type: "short", prompt: "간단한 약속 시간(appointmentTime)을 저장하는 필드를 만드세요.\n조건: 분 단위까지만 필요, 초 단위 정밀도 불필요", acceptableAnswers: ["appointmentTime SMALLDATETIME", "appointmentTime smalldatetime", "appointmentTime SMALLDATETIME NULL", "appointmentTime SMALLDATETIME NOT NULL"], explanation: "SMALLDATETIME은 분 단위 정밀도" },
        { id: "f9-13", type: "short", prompt: "정밀한 로그 기록 시간(logTime)을 저장하는 필드를 만드세요.\n조건: 최신 타입, 나노초 수준 정밀도", acceptableAnswers: ["logTime DATETIME2", "logTime datetime2", "logTime DATETIME2(7)", "logTime DATETIME2 NULL", "logTime DATETIME2 NOT NULL"], explanation: "DATETIME2는 높은 정밀도" },
        { id: "f9-14", type: "short", prompt: "행 버전 관리용 필드(rowVersion)를 만드세요.\n조건: 행이 수정될 때마다 자동 변경되는 고유 이진 숫자", acceptableAnswers: ["rowVersion ROWVERSION", "rowVersion rowversion", "rowVersion TIMESTAMP", "rowVersion timestamp"], explanation: "ROWVERSION은 자동 버전 관리" },
        { id: "f9-15", type: "short", prompt: "전 세계 고유 식별자(globalId)를 저장하는 필드를 만드세요.\n조건: GUID 형식, 16바이트", acceptableAnswers: ["globalId UNIQUEIDENTIFIER", "globalId uniqueidentifier", "globalId UNIQUEIDENTIFIER NULL", "globalId UNIQUEIDENTIFIER NOT NULL"], explanation: "UNIQUEIDENTIFIER는 GUID 저장" }
    ]
};
