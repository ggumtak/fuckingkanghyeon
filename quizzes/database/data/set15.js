// File: quizzes/database/data/set15.js
// 최종 점검 세트 (2/3) - 25문제 - DML + 함수 + 타입 + 필드 + JOIN 종합
const set15 = {
    setId: "set-15",
    questions: [
        // INSERT (1-3)
        { id: "fr15-01", type: "short", prompt: "buyTbl에 userID='LSG', prodName='마우스', price=50만 입력.\n(컬럼 리스트 명시)", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, price) VALUES ('LSG', '마우스', 50)", "INSERT INTO buyTbl(userID, prodName, price) VALUES('LSG', '마우스', 50)"], explanation: "특정 컬럼만 명시" },
        { id: "fr15-02", type: "short", prompt: "userTbl에 아이디 'LEE', 이름 '이씨', 생년 1988, 지역 '대전', 키 175만 입력.", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr, height) VALUES ('LEE', '이씨', 1988, '대전', 175)", "INSERT INTO userTbl(userID, name, birthYear, addr, height) VALUES('LEE', '이씨', 1988, '대전', 175)"], explanation: "일부 컬럼만 명시" },
        { id: "fr15-03", type: "short", prompt: "buyTbl에 순번 25, 아이디 'JKW', 물품 '가방', 분류 NULL, 가격 80, 수량 2 추가.", acceptableAnswers: ["INSERT INTO buyTbl VALUES (25, 'JKW', '가방', NULL, 80, 2)", "INSERT INTO buyTbl VALUES(25, 'JKW', '가방', NULL, 80, 2)"], explanation: "NULL 포함 INSERT" },

        // UPDATE/DELETE (4-7)
        { id: "fr15-04", type: "short", prompt: "buyTbl에서 아이디 'EJW'이고 물품명 '책'인 구매의 수량을 5로 변경.", acceptableAnswers: ["UPDATE buyTbl SET amount = 5 WHERE userID = 'EJW' AND prodName = '책'", "UPDATE buyTbl SET amount=5 WHERE userID='EJW' AND prodName='책'"], explanation: "AND 조건 UPDATE" },
        { id: "fr15-05", type: "short", prompt: "userTbl에서 지역이 '서울'이 아닌 회원의 국번을 '010'으로 변경.", acceptableAnswers: ["UPDATE userTbl SET mobile1 = '010' WHERE addr != '서울'", "UPDATE userTbl SET mobile1='010' WHERE addr<>'서울'", "UPDATE userTbl SET mobile1 = '010' WHERE addr <> '서울'"], explanation: "부정 조건 UPDATE" },
        { id: "fr15-06", type: "short", prompt: "buyTbl에서 분류가 NULL인 모든 구매 삭제.", acceptableAnswers: ["DELETE FROM buyTbl WHERE groupName IS NULL", "DELETE buyTbl WHERE groupName IS NULL"], explanation: "IS NULL 조건 DELETE" },
        { id: "fr15-07", type: "short", prompt: "userTbl 전체 회원의 키를 3만큼 감소.", acceptableAnswers: ["UPDATE userTbl SET height = height - 3", "UPDATE userTbl SET height=height-3"], explanation: "전체 행 UPDATE" },

        // 함수 결과 예측 (8-13)
        { id: "fr15-08", type: "short", prompt: "SELECT REVERSE('ABCDE'); 의 결과는?", acceptableAnswers: ["EDCBA", "'EDCBA'"], explanation: "REVERSE()는 문자열 뒤집기" },
        { id: "fr15-09", type: "short", prompt: "SELECT CEILING(7.1); 의 결과는?", acceptableAnswers: ["8"], explanation: "CEILING()은 올림" },
        { id: "fr15-10", type: "short", prompt: "SELECT FLOOR(7.9); 의 결과는?", acceptableAnswers: ["7"], explanation: "FLOOR()는 내림" },
        { id: "fr15-11", type: "short", prompt: "SELECT MONTH('2024-06-15'); 의 결과는?", acceptableAnswers: ["6"], explanation: "MONTH()는 월 추출" },
        { id: "fr15-12", type: "short", prompt: "SELECT RIGHT('HELLO', 3); 의 결과는?", acceptableAnswers: ["LLO", "'LLO'"], explanation: "RIGHT()는 오른쪽부터 추출" },
        { id: "fr15-13", type: "short", prompt: "SELECT SQRT(81); 의 결과는?", acceptableAnswers: ["9"], explanation: "SQRT()는 제곱근" },

        // 데이터 타입 (14-17)
        { id: "fr15-14", type: "essay", prompt: "CHAR(10)과 VARCHAR(10)의 저장 방식 차이를 설명하시오.", rubric: ["CHAR는 고정 길이 10바이트 항상 사용", "VARCHAR는 실제 데이터 길이만큼 사용", "공간 효율성 차이"], maxLength: 250, explanation: "CHAR vs VARCHAR 차이" },
        { id: "fr15-15", type: "essay", prompt: "FLOAT 타입의 주의점과 등호 비교가 위험한 이유.", rubric: ["근사값 저장", "부동소수점 오차", "등호 비교 시 오류 가능"], maxLength: 250, explanation: "FLOAT 주의점" },
        { id: "fr15-16", type: "essay", prompt: "MONEY 타입의 용도와 특징을 설명하시오.", rubric: ["화폐 단위 저장", "8바이트", "SQL Server 전용"], maxLength: 200, explanation: "MONEY 타입" },
        { id: "fr15-17", type: "essay", prompt: "NVARCHAR(MAX)는 어떤 경우에 사용하나요?", rubric: ["대용량 텍스트", "유니코드 지원", "8000자 초과 데이터"], maxLength: 200, explanation: "NVARCHAR(MAX)" },

        // 필드 작성 (18-21)
        { id: "fr15-18", type: "short", prompt: "주민번호(ssn)를 14자리 고정 길이로 저장하는 필드 정의.", acceptableAnswers: ["ssn CHAR(14)", "ssn char(14)", "ssn CHAR(14) NOT NULL"], explanation: "CHAR(14)" },
        { id: "fr15-19", type: "short", prompt: "대용량 메모(memo)를 저장하는 필드 정의. (8000자 초과, 유니코드)", acceptableAnswers: ["memo NVARCHAR(MAX)", "memo nvarchar(max)", "memo NVARCHAR(MAX) NULL"], explanation: "NVARCHAR(MAX)" },
        { id: "fr15-20", type: "short", prompt: "학번(studentId)을 기본키 + 자동증가로 정의.", acceptableAnswers: ["studentId INT IDENTITY(1,1) PRIMARY KEY", "studentId INT IDENTITY(1, 1) PRIMARY KEY", "studentId int IDENTITY(1,1) PRIMARY KEY"], explanation: "IDENTITY + PRIMARY KEY" },
        { id: "fr15-21", type: "short", prompt: "등록일시(regDate)에 현재 시간을 기본값으로 설정.", acceptableAnswers: ["regDate DATETIME DEFAULT GETDATE()", "regDate datetime DEFAULT GETDATE()", "regDate DATETIME2 DEFAULT GETDATE()"], explanation: "DEFAULT GETDATE()" },

        // JOIN 결과 (22-25)
        { id: "fr15-22", type: "short", prompt: "LEFT JOIN에서 구매 기록이 없는 회원은 몇 명?", acceptableAnswers: ["5", "5명"], explanation: "LSG, KKH, LJB, YJS, JKW 5명" },
        { id: "fr15-23", type: "essay", prompt: "INNER JOIN과 LEFT JOIN의 결과 차이를 설명하시오.", rubric: ["INNER: 매칭된 것만", "LEFT: 왼쪽 전체 + 매칭", "NULL 포함 여부"], maxLength: 250, explanation: "INNER vs LEFT JOIN" },
        { id: "fr15-24", type: "short", prompt: "'전자' 분류 구매자의 이름을 중복 없이 나열하시오.", acceptableAnswers: ["김범수, 조용필, 바비킴", "바비킴, 조용필, 김범수", "KBS, JYP, BBK"], explanation: "전자 분류 구매자 3명" },
        { id: "fr15-25", type: "short", prompt: "아이디 'BBK' 회원의 총 구매 건수는?", acceptableAnswers: ["4", "4건", "4개"], explanation: "BBK: 모니터, 메모리, 운동화x2 = 4건" }
    ]
};
