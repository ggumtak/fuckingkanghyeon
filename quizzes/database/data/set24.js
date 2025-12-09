// File: quizzes/database/data/set24.js
// Field Creation - 필드 작성 및 제약조건 문제 (30문항)
const set24 = {
    setId: "set-24",
    questions: [
        // [1-5] 정수형 및 숫자형 (Integer & Numeric)
        { id: "f-01", type: "code-fill", prompt: "회원 테이블의 '나이(age)' 컬럼을 만들려고 합니다. 0~255 사이의 작은 정수만 저장하면 되므로 가장 효율적인 데이터 타입을 사용하세요.", language: "sql", code: "CREATE TABLE userTbl ( age ( 1 ) );", blanks: [{ index: 1, answer: "TINYINT" }] },
        { id: "f-02", type: "code-fill", prompt: "인구 수나 유튜브 조회수처럼 21억이 넘을 수 있는 매우 큰 정수를 저장하기 위해 'viewCount' 컬럼을 정의하세요.", language: "sql", code: "CREATE TABLE videoTbl ( viewCount ( 1 ) );", blanks: [{ index: 1, answer: "BIGINT" }] },
        { id: "f-03", type: "code-fill", prompt: "학생의 '평점(gpa)'을 저장합니다. 전체 3자리 중 소수점 이하 2자리를 저장해야 합니다. (예: 4.50)", language: "sql", code: "CREATE TABLE studentTbl ( gpa ( 1 ) );", blanks: [{ index: 1, answer: "DECIMAL(3, 2)" }] },
        { id: "f-04", type: "code-fill", prompt: "과학 실험 데이터처럼 매우 크거나 매우 작은 수(부동 소수점)를 저장하기 위해 'measure' 컬럼을 근사 숫자 타입으로 정의하세요.", language: "sql", code: "CREATE TABLE labTbl ( measure ( 1 ) );", blanks: [{ index: 1, answer: "FLOAT" }] },
        { id: "f-05", type: "code-fill", prompt: "제품의 가격을 저장할 'price' 컬럼입니다. SQL Server에서 화폐 단위 저장에 최적화된 타입을 사용하세요.", language: "sql", code: "CREATE TABLE productTbl ( price ( 1 ) );", blanks: [{ index: 1, answer: "MONEY" }] },

        // [6-10] 문자열 (Character Strings)
        { id: "f-06", type: "code-fill", prompt: "주민등록번호나 우편번호처럼 길이가 항상 5자리로 고정된 코드를 저장할 'zipCode' 컬럼을 만드세요.", language: "sql", code: "CREATE TABLE addrTbl ( zipCode ( 1 ) );", blanks: [{ index: 1, answer: "CHAR(5)" }] },
        { id: "f-07", type: "code-fill", prompt: "이메일 주소처럼 길이가 가변적인 영문/숫자 데이터를 최대 50자까지 저장할 'email' 컬럼을 정의하세요.", language: "sql", code: "CREATE TABLE userTbl ( email ( 1 ) );", blanks: [{ index: 1, answer: "VARCHAR(50)" }] },
        { id: "f-08", type: "code-fill", prompt: "한국어 이름을 저장해야 합니다. 이름은 최대 4글자이며, 유니코드를 지원하는 고정 길이 타입을 사용하세요.", language: "sql", code: "CREATE TABLE memberTbl ( korName ( 1 ) );", blanks: [{ index: 1, answer: "NCHAR(4)" }] },
        { id: "f-09", type: "code-fill", prompt: "다국어(유니코드) 댓글 내용을 저장합니다. 길이는 가변적이며 최대 100자입니다.", language: "sql", code: "CREATE TABLE commentTbl ( content ( 1 ) );", blanks: [{ index: 1, answer: "NVARCHAR(100)" }] },
        { id: "f-10", type: "code-fill", prompt: "뉴스 기사 본문처럼 8,000자가 넘어갈 수 있는 대용량 텍스트를 저장하기 위해 최대 크기의 가변 문자열 타입을 사용하세요.", language: "sql", code: "CREATE TABLE newsTbl ( articleBody ( 1 ) );", blanks: [{ index: 1, answer: "VARCHAR(MAX)" }] },

        // [11-15] 날짜 및 시간 (Date & Time)
        { id: "f-11", type: "code-fill", prompt: "회원의 '생년월일(birthDate)'을 저장합니다. 시간 정보는 필요 없고 날짜만 저장하는 타입을 사용하세요.", language: "sql", code: "CREATE TABLE userTbl ( birthDate ( 1 ) );", blanks: [{ index: 1, answer: "DATE" }] },
        { id: "f-12", type: "code-fill", prompt: "수업 시작 시간처럼 날짜 없이 '시:분:초'만 저장하는 'classTime' 컬럼을 정의하세요.", language: "sql", code: "CREATE TABLE scheduleTbl ( classTime ( 1 ) );", blanks: [{ index: 1, answer: "TIME" }] },
        { id: "f-13", type: "code-fill", prompt: "게시글 작성 일시를 저장합니다. 날짜와 시간을 모두 포함하며, 기존 DATETIME보다 더 넓은 범위와 정밀도를 가진 최신 타입을 사용하세요.", language: "sql", code: "CREATE TABLE boardTbl ( regDate ( 1 ) );", blanks: [{ index: 1, answer: "DATETIME2" }] },
        { id: "f-14", type: "code-fill", prompt: "글로벌 서비스를 위해 날짜, 시간과 함께 '표준 시간대(Timezone) 오프셋' 정보까지 저장하는 타입을 사용하세요.", language: "sql", code: "CREATE TABLE logTbl ( globalTime ( 1 ) );", blanks: [{ index: 1, answer: "DATETIMEOFFSET" }] },
        { id: "f-15", type: "code-fill", prompt: "분 단위까지만 정확하면 되는 간단한 약속 시간을 저장하기 위해, 초 단위 이하 정밀도가 낮은 날짜/시간 타입을 사용하세요.", language: "sql", code: "CREATE TABLE planTbl ( simpleDate ( 1 ) );", blanks: [{ index: 1, answer: "SMALLDATETIME" }] },

        // [16-20] 특수 데이터 타입 (Special Types)
        { id: "f-16", type: "code-fill", prompt: "회원의 탈퇴 여부(isDeleted)를 저장합니다. 참(1) 또는 거짓(0)의 값만 가질 수 있는 타입을 사용하세요.", language: "sql", code: "CREATE TABLE userTbl ( isDeleted ( 1 ) );", blanks: [{ index: 1, answer: "BIT" }] },
        { id: "f-17", type: "code-fill", prompt: "이미지 파일이나 음악 파일을 데이터베이스에 직접 저장하기 위해 이진(Binary) 데이터를 가변 길이로 저장하는 타입을 사용하세요.", language: "sql", code: "CREATE TABLE fileTbl ( fileData ( 1 ) );", blanks: [{ index: 1, answer: "VARBINARY(MAX)" }] },
        { id: "f-18", type: "code-fill", prompt: "전 세계적으로 유일한 식별자(GUID)를 저장하기 위해 사용하는 16바이트 크기의 데이터 타입은 무엇입니까?", language: "sql", code: "CREATE TABLE idTbl ( globalID ( 1 ) );", blanks: [{ index: 1, answer: "UNIQUEIDENTIFIER" }] },
        { id: "f-19", type: "code-fill", prompt: "XML 데이터를 구조적으로 저장하고 쿼리할 수 있도록 지원하는 전용 데이터 타입을 사용하세요.", language: "sql", code: "CREATE TABLE configTbl ( setting ( 1 ) );", blanks: [{ index: 1, answer: "XML" }] },
        { id: "f-20", type: "code-fill", prompt: "테이블의 행이 수정될 때마다 자동으로 변경되는 고유한 이진 숫자를 저장하여 버전 관리에 사용하는 타입입니다.", language: "sql", code: "CREATE TABLE versionTbl ( versionInfo ( 1 ) );", blanks: [{ index: 1, answer: "ROWVERSION" }] },

        // [21-25] 제약조건 심화 1 (Constraints I)
        { id: "f-21", type: "code-fill", prompt: "회원 ID 컬럼을 정의하면서, 빈 값을 허용하지 않고(NOT NULL) 테이블의 각 행을 식별하는 기본키(PK)로 설정하세요.", language: "sql", code: "CREATE TABLE userTbl ( userID CHAR(8) NOT NULL ( 1 ) );", blanks: [{ index: 1, answer: "PRIMARY KEY" }] },
        { id: "f-22", type: "code-fill", prompt: "일련번호(seq) 컬럼이 1부터 시작하여 데이터가 입력될 때마다 자동으로 1씩 증가하도록 설정하세요.", language: "sql", code: "CREATE TABLE boardTbl ( seq INT ( 1 ) );", blanks: [{ index: 1, answer: "IDENTITY(1,1)" }] },
        { id: "f-23", type: "code-fill", prompt: "국적(nation) 컬럼에 값을 입력하지 않으면 자동으로 'Korea'라는 문자열이 입력되도록 기본값을 설정하세요.", language: "sql", code: "CREATE TABLE memberTbl ( nation NVARCHAR(10) ( 1 ) N'Korea' );", blanks: [{ index: 1, answer: "DEFAULT" }] },
        { id: "f-24", type: "code-fill", prompt: "가입일(regDate) 컬럼에 값을 입력하지 않으면 현재 시스템의 날짜와 시간이 자동으로 입력되도록 함수를 사용해 기본값을 설정하세요.", language: "sql", code: "CREATE TABLE userTbl ( regDate DATETIME DEFAULT ( 1 ) );", blanks: [{ index: 1, answer: "GETDATE()" }] },
        { id: "f-25", type: "code-fill", prompt: "휴대폰 번호(phone)는 중복되어서는 안 됩니다. NULL 값은 한 번만 허용하더라도 중복을 방지하는 제약조건을 설정하세요.", language: "sql", code: "CREATE TABLE contactTbl ( phone CHAR(13) ( 1 ) );", blanks: [{ index: 1, answer: "UNIQUE" }] },

        // [26-30] 제약조건 심화 2 (Constraints II)
        { id: "f-26", type: "code-fill", prompt: "성별(gender) 컬럼에는 'M' 또는 'F'라는 두 가지 값 중 하나만 들어오도록 데이터의 유효성을 검사하는 제약조건을 설정하세요.", language: "sql", code: "CREATE TABLE userTbl ( gender CHAR(1) ( 1 ) (gender IN ('M', 'F')) );", blanks: [{ index: 1, answer: "CHECK" }] },
        { id: "f-27", type: "code-fill", prompt: "나이(age) 컬럼에는 19세 이상인 값만 입력되도록 조건을 거는 제약조건을 설정하세요.", language: "sql", code: "CREATE TABLE adultTbl ( age INT CHECK ( age ( 1 ) 19 ) );", blanks: [{ index: 1, answer: ">=" }] },
        { id: "f-28", type: "code-fill", prompt: "구매 테이블의 'userID' 컬럼이 회원 테이블(userTbl)의 'userID'를 참조하도록 외래키(Foreign Key)를 설정하세요.", language: "sql", code: "CREATE TABLE buyTbl ( userID CHAR(8) ( 1 ) userTbl(userID) );", blanks: [{ index: 1, answer: "REFERENCES" }] },
        { id: "f-29", type: "code-fill", prompt: "필수 입력 필드인 이름(name) 컬럼은 절대 비어있을 수 없습니다. NULL 값을 허용하지 않는 설정을 추가하세요.", language: "sql", code: "CREATE TABLE userTbl ( name NVARCHAR(10) ( 1 ) );", blanks: [{ index: 1, answer: "NOT NULL" }] },
        { id: "f-30", type: "code-fill", prompt: "기존에 있던 'email' 컬럼에 나중에 UNIQUE 제약조건을 추가하려고 합니다. 알맞은 ALTER TABLE 구문을 완성하세요.", language: "sql", code: "ALTER TABLE userTbl ( 1 ) CONSTRAINT UK_email UNIQUE (email);", blanks: [{ index: 1, answer: "ADD" }] }
    ]
};
