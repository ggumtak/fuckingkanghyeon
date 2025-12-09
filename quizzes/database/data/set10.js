// File: quizzes/database/data/set10.js
// 필드 작성 문제 (3/3) - 15문항 - 시험 문제 유형 6번 대비
const set10 = {
    setId: "set-10",
    questions: [
        // [1-5] 제약조건 포함 필드
        { id: "f10-01", type: "short", prompt: "회원 아이디(userID)를 기본키로 설정하는 필드를 만드세요.\n조건: 최대 8자 고정 길이, 기본키 설정", acceptableAnswers: ["userID CHAR(8) PRIMARY KEY", "userID char(8) PRIMARY KEY", "userID CHAR(8) primary key", "userID char(8) primary key"], explanation: "PRIMARY KEY로 기본키 설정" },
        { id: "f10-02", type: "short", prompt: "일련번호(seq)를 자동 증가로 설정하는 필드를 만드세요.\n조건: 정수형, 1부터 시작해서 1씩 증가", acceptableAnswers: ["seq INT IDENTITY(1,1)", "seq INT IDENTITY(1, 1)", "seq int IDENTITY(1,1)", "seq INT identity(1,1)"], explanation: "IDENTITY(1,1)로 자동 증가" },
        { id: "f10-03", type: "short", prompt: "국적(nation)에 기본값을 설정하는 필드를 만드세요.\n조건: 유니코드 4글자, 기본값 '대한민국'", acceptableAnswers: ["nation NCHAR(4) DEFAULT '대한민국'", "nation nchar(4) DEFAULT '대한민국'", "nation NCHAR(4) default '대한민국'"], explanation: "DEFAULT로 기본값 설정" },
        { id: "f10-04", type: "short", prompt: "이메일(email)에 고유 제약조건을 설정하는 필드를 만드세요.\n조건: 최대 100자 가변 길이, 중복 불허", acceptableAnswers: ["email VARCHAR(100) UNIQUE", "email varchar(100) UNIQUE", "email VARCHAR(100) unique", "email NVARCHAR(100) UNIQUE"], explanation: "UNIQUE로 중복 방지" },
        { id: "f10-05", type: "short", prompt: "이름(name)에 NOT NULL 제약조건을 설정하는 필드를 만드세요.\n조건: 유니코드 20자, 필수 입력", acceptableAnswers: ["name NVARCHAR(20) NOT NULL", "name nvarchar(20) NOT NULL", "name NVARCHAR(20) not null"], explanation: "NOT NULL로 필수 입력" },

        // [6-10] 복합 조건 필드
        { id: "f10-06", type: "short", prompt: "학번(studentId)을 기본키 + 자동증가로 설정하는 필드를 만드세요.\n조건: 정수형, 1부터 1씩 자동증가, 기본키", acceptableAnswers: ["studentId INT IDENTITY(1,1) PRIMARY KEY", "studentId INT IDENTITY(1, 1) PRIMARY KEY", "studentId int IDENTITY(1,1) PRIMARY KEY", "studentId INT identity(1,1) primary key"], explanation: "IDENTITY + PRIMARY KEY 조합" },
        { id: "f10-07", type: "short", prompt: "나이(age)에 입력 범위를 제한하는 필드를 만드세요.\n조건: 작은 정수형, 0 이상 150 이하 값만 허용", acceptableAnswers: ["age TINYINT CHECK(age >= 0 AND age <= 150)", "age TINYINT CHECK (age >= 0 AND age <= 150)", "age tinyint CHECK(age >= 0 AND age <= 150)"], explanation: "CHECK로 범위 제한" },
        { id: "f10-08", type: "short", prompt: "성별(gender)에 특정 값만 허용하는 필드를 만드세요.\n조건: 1글자 고정, 'M' 또는 'F'만 허용", acceptableAnswers: ["gender CHAR(1) CHECK(gender IN ('M', 'F'))", "gender CHAR(1) CHECK (gender IN ('M', 'F'))", "gender char(1) CHECK(gender IN ('M', 'F'))", "gender CHAR(1) CHECK(gender = 'M' OR gender = 'F')"], explanation: "CHECK와 IN으로 값 제한" },
        { id: "f10-09", type: "short", prompt: "가입일(regDate)에 현재 날짜를 기본값으로 설정하는 필드를 만드세요.\n조건: 날짜시간 타입, 기본값은 현재 시스템 시간", acceptableAnswers: ["regDate DATETIME DEFAULT GETDATE()", "regDate datetime DEFAULT GETDATE()", "regDate DATETIME default GETDATE()", "regDate DATETIME2 DEFAULT GETDATE()"], explanation: "DEFAULT GETDATE()로 현재 시간" },
        { id: "f10-10", type: "short", prompt: "활성화 상태(isActive)에 기본값을 설정하는 필드를 만드세요.\n조건: 논리형, 기본값 1(활성화)", acceptableAnswers: ["isActive BIT DEFAULT 1", "isActive bit DEFAULT 1", "isActive BIT default 1"], explanation: "BIT에 DEFAULT 1 설정" },

        // [11-15] 실전 복합 문제
        { id: "f10-11", type: "short", prompt: "상품 가격(price)을 만드세요.\n조건: 전체 10자리, 소수점 2자리, NULL 불허", acceptableAnswers: ["price DECIMAL(10,2) NOT NULL", "price DECIMAL(10, 2) NOT NULL", "price decimal(10,2) NOT NULL", "price NUMERIC(10,2) NOT NULL"], explanation: "DECIMAL + NOT NULL" },
        { id: "f10-12", type: "short", prompt: "주문번호(orderNo)를 만드세요.\n조건: 10자리 고정 길이, 중복 불허, NULL 불허", acceptableAnswers: ["orderNo CHAR(10) UNIQUE NOT NULL", "orderNo CHAR(10) NOT NULL UNIQUE", "orderNo char(10) UNIQUE NOT NULL"], explanation: "CHAR + UNIQUE + NOT NULL" },
        { id: "f10-13", type: "short", prompt: "회원등급(memberLevel)을 만드세요.\n조건: 정수형, 1~5 사이 값만 허용", acceptableAnswers: ["memberLevel INT CHECK(memberLevel >= 1 AND memberLevel <= 5)", "memberLevel INT CHECK (memberLevel >= 1 AND memberLevel <= 5)", "memberLevel int CHECK(memberLevel BETWEEN 1 AND 5)"], explanation: "INT + CHECK 범위 제한" },
        { id: "f10-14", type: "short", prompt: "수정일시(modifiedAt)를 만드세요.\n조건: 날짜시간 타입, NULL 허용, 기본값 없음", acceptableAnswers: ["modifiedAt DATETIME NULL", "modifiedAt DATETIME", "modifiedAt datetime NULL", "modifiedAt DATETIME2 NULL", "modifiedAt datetime2 NULL"], explanation: "DATETIME NULL 허용" },
        { id: "f10-15", type: "short", prompt: "비밀번호 해시(passwordHash)를 만드세요.\n조건: 64자 고정 길이 (SHA-256), NULL 불허", acceptableAnswers: ["passwordHash CHAR(64) NOT NULL", "passwordHash char(64) NOT NULL", "passwordHash VARCHAR(64) NOT NULL"], explanation: "CHAR(64) + NOT NULL" }
    ]
};
