// File: quizzes/database/data/set8.js
// 필드 작성 문제 (1/3) - 15문항 - 시험 문제 유형 6번 대비
const set8 = {
    setId: "set-8",
    questions: [
        // [1-5] 기본 정수형 필드
        { id: "f8-01", type: "short", prompt: "회원의 나이(age)를 저장하는 필드를 만드세요.\n조건: 0~255 사이의 작은 정수만 저장, 가장 효율적인 타입 사용", acceptableAnswers: ["age TINYINT", "age tinyint", "age TINYINT NULL", "age TINYINT NOT NULL"], explanation: "TINYINT는 1바이트로 0~255 저장" },
        { id: "f8-02", type: "short", prompt: "상품 가격(price)을 저장하는 필드를 만드세요.\n조건: 일반적인 정수 범위 사용", acceptableAnswers: ["price INT", "price int", "price INT NULL", "price INT NOT NULL", "price INTEGER", "price integer"], explanation: "INT는 4바이트, 일반적인 정수 저장" },
        { id: "f8-03", type: "short", prompt: "유튜브 조회수(viewCount)를 저장하는 필드를 만드세요.\n조건: 21억이 넘을 수 있는 매우 큰 정수", acceptableAnswers: ["viewCount BIGINT", "viewCount bigint", "viewCount BIGINT NULL", "viewCount BIGINT NOT NULL"], explanation: "BIGINT는 8바이트, 매우 큰 정수 저장" },
        { id: "f8-04", type: "short", prompt: "학생 평점(gpa)을 저장하는 필드를 만드세요.\n조건: 전체 3자리, 소수점 이하 2자리 (예: 4.50)", acceptableAnswers: ["gpa DECIMAL(3,2)", "gpa DECIMAL(3, 2)", "gpa decimal(3,2)", "gpa NUMERIC(3,2)", "gpa NUMERIC(3, 2)"], explanation: "DECIMAL(3,2)는 x.xx 형태 저장" },
        { id: "f8-05", type: "short", prompt: "상품 가격(productPrice)을 저장하는 필드를 만드세요.\n조건: SQL Server 화폐 단위 전용 타입 사용", acceptableAnswers: ["productPrice MONEY", "productPrice money", "productPrice MONEY NULL", "productPrice MONEY NOT NULL"], explanation: "MONEY는 화폐 단위 저장 전용" },

        // [6-10] 문자열 필드
        { id: "f8-06", type: "short", prompt: "우편번호(zipCode)를 저장하는 필드를 만드세요.\n조건: 정확히 5자리 고정 길이", acceptableAnswers: ["zipCode CHAR(5)", "zipCode char(5)", "zipCode CHAR(5) NULL", "zipCode CHAR(5) NOT NULL"], explanation: "CHAR(5)는 5자리 고정 길이" },
        { id: "f8-07", type: "short", prompt: "이메일 주소(email)를 저장하는 필드를 만드세요.\n조건: 최대 100자, 영문/숫자 가변 길이", acceptableAnswers: ["email VARCHAR(100)", "email varchar(100)", "email VARCHAR(100) NULL", "email VARCHAR(100) NOT NULL"], explanation: "VARCHAR(100)는 최대 100자 가변 길이" },
        { id: "f8-08", type: "short", prompt: "한국어 이름(korName)을 저장하는 필드를 만드세요.\n조건: 최대 10글자, 유니코드 지원, 고정 길이", acceptableAnswers: ["korName NCHAR(10)", "korName nchar(10)", "korName NCHAR(10) NULL", "korName NCHAR(10) NOT NULL"], explanation: "NCHAR(10)은 유니코드 고정 길이 10자" },
        { id: "f8-09", type: "short", prompt: "댓글 내용(comment)을 저장하는 필드를 만드세요.\n조건: 최대 200자, 다국어(유니코드) 지원, 가변 길이", acceptableAnswers: ["comment NVARCHAR(200)", "comment nvarchar(200)", "comment NVARCHAR(200) NULL", "comment NVARCHAR(200) NOT NULL"], explanation: "NVARCHAR(200)은 유니코드 가변 길이 200자" },
        { id: "f8-10", type: "short", prompt: "블로그 본문(content)을 저장하는 필드를 만드세요.\n조건: 8,000자 이상 대용량 텍스트, 유니코드 지원", acceptableAnswers: ["content NVARCHAR(MAX)", "content nvarchar(max)", "content NVARCHAR(MAX) NULL", "content NVARCHAR(max)"], explanation: "NVARCHAR(MAX)는 대용량 유니코드 텍스트" },

        // [11-15] 날짜/시간 및 특수 필드
        { id: "f8-11", type: "short", prompt: "생년월일(birthDate)을 저장하는 필드를 만드세요.\n조건: 시간 정보 불필요, 날짜만 저장", acceptableAnswers: ["birthDate DATE", "birthDate date", "birthDate DATE NULL", "birthDate DATE NOT NULL"], explanation: "DATE는 날짜만 저장 (시간 없음)" },
        { id: "f8-12", type: "short", prompt: "수업 시작 시간(startTime)을 저장하는 필드를 만드세요.\n조건: 날짜 없이 시:분:초만 저장", acceptableAnswers: ["startTime TIME", "startTime time", "startTime TIME NULL", "startTime TIME NOT NULL"], explanation: "TIME은 시간만 저장 (날짜 없음)" },
        { id: "f8-13", type: "short", prompt: "게시글 작성일시(createdAt)를 저장하는 필드를 만드세요.\n조건: 날짜와 시간 모두 저장", acceptableAnswers: ["createdAt DATETIME", "createdAt datetime", "createdAt DATETIME2", "createdAt datetime2", "createdAt DATETIME NULL", "createdAt DATETIME NOT NULL"], explanation: "DATETIME은 날짜+시간 저장" },
        { id: "f8-14", type: "short", prompt: "회원 탈퇴 여부(isDeleted)를 저장하는 필드를 만드세요.\n조건: 참(1) 또는 거짓(0)만 저장", acceptableAnswers: ["isDeleted BIT", "isDeleted bit", "isDeleted BIT NULL", "isDeleted BIT NOT NULL"], explanation: "BIT는 0, 1, NULL 저장" },
        { id: "f8-15", type: "short", prompt: "프로필 사진(profileImage)을 저장하는 필드를 만드세요.\n조건: 이미지 파일을 이진 데이터로 직접 저장, 대용량", acceptableAnswers: ["profileImage VARBINARY(MAX)", "profileImage varbinary(max)", "profileImage VARBINARY(MAX) NULL", "profileImage VARBINARY(max)"], explanation: "VARBINARY(MAX)는 대용량 이진 데이터" }
    ]
};
