// File: quizzes/database/data/set24.js
// Field Creation - 필드 작성 및 제약조건 문제 (30문항) - Short Answer Type
const set24 = {
    setId: "set-24",
    questions: [
        // [1-5] 정수형 및 숫자형 (Integer & Numeric)
        { id: "f-01", type: "short", prompt: "회원 테이블의 '나이(age)' 컬럼을 만들려고 합니다. 0~255 사이의 작은 정수만 저장하면 되므로 가장 효율적인 데이터 타입은 무엇입니까?", acceptableAnswers: ["TINYINT", "tinyint"] },
        { id: "f-02", type: "short", prompt: "인구 수나 유튜브 조회수처럼 21억이 넘을 수 있는 매우 큰 정수를 저장하기 위해 사용하는 데이터 타입은 무엇입니까?", acceptableAnswers: ["BIGINT", "bigint"] },
        { id: "f-03", type: "short", prompt: "학생의 '평점(gpa)'을 저장합니다. 전체 3자리 중 소수점 이하 2자리를 저장해야 합니다. (예: 4.50) 사용할 데이터 타입을 작성하세요.", acceptableAnswers: ["DECIMAL(3, 2)", "DECIMAL(3,2)", "decimal(3, 2)", "decimal(3,2)"] },
        { id: "f-04", type: "short", prompt: "과학 실험 데이터처럼 매우 크거나 매우 작은 수(부동 소수점)를 저장하기 위해 사용하는 근사 숫자 데이터 타입은 무엇입니까?", acceptableAnswers: ["FLOAT", "float"] },
        { id: "f-05", type: "short", prompt: "제품의 가격을 저장할 때, SQL Server에서 화폐 단위 저장에 최적화된 데이터 타입은 무엇입니까?", acceptableAnswers: ["MONEY", "money"] },

        // [6-10] 문자열 (Character Strings)
        { id: "f-06", type: "short", prompt: "주민등록번호나 우편번호처럼 길이가 항상 5자리로 고정된 코드를 저장할 때 사용하는 데이터 타입을 작성하세요.", acceptableAnswers: ["CHAR(5)", "char(5)"] },
        { id: "f-07", type: "short", prompt: "이메일 주소처럼 길이가 가변적인 영문/숫자 데이터를 최대 50자까지 저장할 때 사용하는 데이터 타입을 작성하세요.", acceptableAnswers: ["VARCHAR(50)", "varchar(50)"] },
        { id: "f-08", type: "short", prompt: "한국어 이름을 저장해야 합니다. 이름은 최대 4글자이며, 유니코드를 지원하는 고정 길이 타입을 작성하세요.", acceptableAnswers: ["NCHAR(4)", "nchar(4)"] },
        { id: "f-09", type: "short", prompt: "다국어(유니코드) 댓글 내용을 저장합니다. 길이는 가변적이며 최대 100자입니다. 사용할 데이터 타입을 작성하세요.", acceptableAnswers: ["NVARCHAR(100)", "nvarchar(100)"] },
        { id: "f-10", type: "short", prompt: "뉴스 기사 본문처럼 8,000자가 넘어갈 수 있는 대용량 텍스트를 저장하기 위해 최대 크기의 가변 문자열 타입을 작성하세요.", acceptableAnswers: ["VARCHAR(MAX)", "varchar(max)", "VARCHAR(max)", "varchar(MAX)"] },

        // [11-15] 날짜 및 시간 (Date & Time)
        { id: "f-11", type: "short", prompt: "회원의 '생년월일(birthDate)'을 저장합니다. 시간 정보는 필요 없고 날짜만 저장하는 데이터 타입은 무엇입니까?", acceptableAnswers: ["DATE", "date"] },
        { id: "f-12", type: "short", prompt: "수업 시작 시간처럼 날짜 없이 '시:분:초'만 저장하는 데이터 타입은 무엇입니까?", acceptableAnswers: ["TIME", "time"] },
        { id: "f-13", type: "short", prompt: "게시글 작성 일시를 저장합니다. 날짜와 시간을 모두 포함하며, 기존 DATETIME보다 더 넓은 범위와 정밀도를 가진 최신 타입은 무엇입니까?", acceptableAnswers: ["DATETIME2", "datetime2"] },
        { id: "f-14", type: "short", prompt: "글로벌 서비스를 위해 날짜, 시간과 함께 '표준 시간대(Timezone) 오프셋' 정보까지 저장하는 데이터 타입은 무엇입니까?", acceptableAnswers: ["DATETIMEOFFSET", "datetimeoffset"] },
        { id: "f-15", type: "short", prompt: "분 단위까지만 정확하면 되는 간단한 약속 시간을 저장하기 위해, 초 단위 이하 정밀도가 낮은 날짜/시간 타입은 무엇입니까?", acceptableAnswers: ["SMALLDATETIME", "smalldatetime"] },

        // [16-20] 특수 데이터 타입 (Special Types)
        { id: "f-16", type: "short", prompt: "회원의 탈퇴 여부(isDeleted)를 저장합니다. 참(1) 또는 거짓(0)의 값만 가질 수 있는 데이터 타입은 무엇입니까?", acceptableAnswers: ["BIT", "bit"] },
        { id: "f-17", type: "short", prompt: "이미지 파일이나 음악 파일을 데이터베이스에 직접 저장하기 위해 이진(Binary) 데이터를 가변 길이로 저장하는 타입을 작성하세요.", acceptableAnswers: ["VARBINARY(MAX)", "varbinary(max)", "VARBINARY(max)", "varbinary(MAX)"] },
        { id: "f-18", type: "short", prompt: "전 세계적으로 유일한 식별자(GUID)를 저장하기 위해 사용하는 16바이트 크기의 데이터 타입은 무엇입니까?", acceptableAnswers: ["UNIQUEIDENTIFIER", "uniqueidentifier"] },
        { id: "f-19", type: "short", prompt: "XML 데이터를 구조적으로 저장하고 쿼리할 수 있도록 지원하는 전용 데이터 타입은 무엇입니까?", acceptableAnswers: ["XML", "xml"] },
        { id: "f-20", type: "short", prompt: "테이블의 행이 수정될 때마다 자동으로 변경되는 고유한 이진 숫자를 저장하여 버전 관리에 사용하는 데이터 타입은 무엇입니까?", acceptableAnswers: ["ROWVERSION", "rowversion", "TIMESTAMP", "timestamp"] },

        // [21-25] 제약조건 심화 1 (Constraints I)
        { id: "f-21", type: "short", prompt: "테이블의 각 행을 고유하게 식별하는 기본키(PK)를 설정하기 위해 컬럼 뒤에 붙이는 키워드는 무엇입니까?", acceptableAnswers: ["PRIMARY KEY", "primary key"] },
        { id: "f-22", type: "short", prompt: "일련번호(seq) 컬럼이 1부터 시작하여 데이터가 입력될 때마다 자동으로 1씩 증가하도록 설정하는 속성을 작성하세요.", acceptableAnswers: ["IDENTITY(1,1)", "IDENTITY(1, 1)", "identity(1,1)", "identity(1, 1)"] },
        { id: "f-23", type: "short", prompt: "국적(nation) 컬럼에 값을 입력하지 않으면 자동으로 기본값이 입력되도록 설정하는 키워드는 무엇입니까?", acceptableAnswers: ["DEFAULT", "default"] },
        { id: "f-24", type: "short", prompt: "가입일(regDate) 컬럼에 값을 입력하지 않으면 현재 시스템의 날짜와 시간이 자동으로 입력되도록 하는 함수는 무엇입니까?", acceptableAnswers: ["GETDATE()", "getdate()", "GETDATE", "getdate"] },
        { id: "f-25", type: "short", prompt: "특정 컬럼에 중복된 값을 허용하지 않도록(NULL 한 번 허용) 설정하는 제약조건 키워드는 무엇입니까?", acceptableAnswers: ["UNIQUE", "unique"] },

        // [26-30] 제약조건 심화 2 (Constraints II)
        { id: "f-26", type: "short", prompt: "성별(gender) 컬럼에 특정 값만 들어오도록 데이터의 유효성을 검사하는 제약조건 키워드는 무엇입니까?", acceptableAnswers: ["CHECK", "check"] },
        { id: "f-27", type: "short", prompt: "나이(age) 컬럼에 19세 이상인 값만 입력되도록 할 때 사용하는 비교 연산자는 무엇입니까?", acceptableAnswers: [">=", ">= ", " >="] },
        { id: "f-28", type: "short", prompt: "구매 테이블의 'userID' 컬럼이 회원 테이블(userTbl)의 'userID'를 참조하도록 외래키(FK)를 설정할 때 사용하는 키워드는 무엇입니까?", acceptableAnswers: ["REFERENCES", "references"] },
        { id: "f-29", type: "short", prompt: "필수 입력 필드인 이름(name) 컬럼이 절대 비어있을 수 없도록 NULL 값을 허용하지 않는 설정 키워드는 무엇입니까?", acceptableAnswers: ["NOT NULL", "not null"] },
        { id: "f-30", type: "short", prompt: "기존 테이블에 나중에 제약조건을 추가하려고 할 때 ALTER TABLE 구문에서 사용하는 키워드는 무엇입니까?", acceptableAnswers: ["ADD", "add"] }
    ]
};
