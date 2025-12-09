// File: quizzes/database/data/set14.js
// 최종 점검 세트 (1/3) - 25문제 - DML + 함수 + 타입 + 필드 + JOIN 종합
const set14 = {
    setId: "set-14",
    questions: [
        // INSERT (1-4)
        { id: "fr14-01", type: "short", prompt: "userTbl에 아이디 'NEW', 이름 '신입', 생년 2000, 지역 '서울'을 추가하세요.\n(컬럼 리스트 명시)", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr) VALUES ('NEW', '신입', 2000, '서울')", "INSERT INTO userTbl(userID, name, birthYear, addr) VALUES('NEW', '신입', 2000, '서울')"], explanation: "특정 컬럼만 명시하여 INSERT" },
        { id: "fr14-02", type: "short", prompt: "buyTbl에 순번 20, 아이디 'KBS', 물품 '시계', 분류 '전자', 가격 300, 수량 1 추가.", acceptableAnswers: ["INSERT INTO buyTbl VALUES (20, 'KBS', '시계', '전자', 300, 1)", "INSERT INTO buyTbl VALUES(20, 'KBS', '시계', '전자', 300, 1)"], explanation: "전체 컬럼 INSERT" },

        // UPDATE/DELETE (3-6)
        { id: "fr14-03", type: "short", prompt: "userTbl에서 아이디 'BBK'인 회원의 지역을 '부산'으로 변경.", acceptableAnswers: ["UPDATE userTbl SET addr = '부산' WHERE userID = 'BBK'", "UPDATE userTbl SET addr='부산' WHERE userID='BBK'"], explanation: "UPDATE SET WHERE" },
        { id: "fr14-04", type: "short", prompt: "buyTbl에서 물품명이 '운동화'인 모든 구매 삭제.", acceptableAnswers: ["DELETE FROM buyTbl WHERE prodName = '운동화'", "DELETE buyTbl WHERE prodName = '운동화'", "DELETE FROM buyTbl WHERE prodName='운동화'"], explanation: "DELETE FROM WHERE" },
        { id: "fr14-05", type: "short", prompt: "buyTbl에서 가격이 100 이상인 상품의 수량을 모두 2로 변경.", acceptableAnswers: ["UPDATE buyTbl SET amount = 2 WHERE price >= 100", "UPDATE buyTbl SET amount=2 WHERE price>=100"], explanation: "비교 연산자 UPDATE" },
        { id: "fr14-06", type: "short", prompt: "userTbl에서 출생년도가 1960 이전인 회원 삭제.", acceptableAnswers: ["DELETE FROM userTbl WHERE birthYear < 1960", "DELETE userTbl WHERE birthYear < 1960", "DELETE FROM userTbl WHERE birthYear<1960"], explanation: "비교 연산자 DELETE" },

        // 함수 결과 예측 (7-12)
        { id: "fr14-07", type: "short", prompt: "SELECT UPPER('hello'); 의 결과는?", acceptableAnswers: ["HELLO", "'HELLO'"], explanation: "UPPER()는 대문자 변환" },
        { id: "fr14-08", type: "short", prompt: "SELECT LEFT('DATABASE', 4); 의 결과는?", acceptableAnswers: ["DATA", "'DATA'"], explanation: "LEFT()는 왼쪽부터 추출" },
        { id: "fr14-09", type: "short", prompt: "SELECT ROUND(123.456, 1); 의 결과는?", acceptableAnswers: ["123.5"], explanation: "ROUND()는 반올림" },
        { id: "fr14-10", type: "short", prompt: "SELECT ABS(-50); 의 결과는?", acceptableAnswers: ["50"], explanation: "ABS()는 절대값" },
        { id: "fr14-11", type: "short", prompt: "SELECT YEAR('2024-12-25'); 의 결과는?", acceptableAnswers: ["2024"], explanation: "YEAR()는 연도 추출" },
        { id: "fr14-12", type: "short", prompt: "SELECT LEN('Korea'); 의 결과는?", acceptableAnswers: ["5"], explanation: "LEN()는 문자열 길이" },

        // 데이터 타입 (13-16)
        { id: "fr14-13", type: "essay", prompt: "INT와 BIGINT 데이터 타입의 차이를 설명하시오.", rubric: ["INT는 4바이트", "BIGINT는 8바이트", "BIGINT가 더 큰 숫자 저장"], maxLength: 200, explanation: "INT 4바이트 vs BIGINT 8바이트" },
        { id: "fr14-14", type: "essay", prompt: "VARCHAR와 NVARCHAR의 차이를 설명하시오.", rubric: ["VARCHAR는 영문 1바이트", "NVARCHAR는 유니코드 2바이트", "다국어는 NVARCHAR 사용"], maxLength: 200, explanation: "VARCHAR vs NVARCHAR" },
        { id: "fr14-15", type: "essay", prompt: "DATE와 DATETIME의 차이를 설명하시오.", rubric: ["DATE는 날짜만", "DATETIME은 날짜+시간", "시분초 저장 여부"], maxLength: 200, explanation: "DATE vs DATETIME" },
        { id: "fr14-16", type: "essay", prompt: "DECIMAL(10,2)에서 10과 2의 의미는?", rubric: ["전체 10자리", "소수점 이하 2자리", "정밀도/스케일"], maxLength: 200, explanation: "DECIMAL(p,s) 의미" },

        // 필드 작성 (17-20)
        { id: "fr14-17", type: "short", prompt: "이메일(email)을 최대 100자 가변 길이로 저장하는 필드 정의.", acceptableAnswers: ["email VARCHAR(100)", "email varchar(100)", "email VARCHAR(100) NULL", "email VARCHAR(100) NOT NULL"], explanation: "VARCHAR(100)" },
        { id: "fr14-18", type: "short", prompt: "가격(price)을 전체 8자리, 소수점 2자리로 저장하는 필드 정의.", acceptableAnswers: ["price DECIMAL(8,2)", "price DECIMAL(8, 2)", "price decimal(8,2)", "price NUMERIC(8,2)"], explanation: "DECIMAL(8,2)" },
        { id: "fr14-19", type: "short", prompt: "활성 여부(isActive)를 참/거짓으로 저장하는 필드 정의.", acceptableAnswers: ["isActive BIT", "isActive bit", "isActive BIT NULL", "isActive BIT NOT NULL"], explanation: "BIT 타입" },
        { id: "fr14-20", type: "short", prompt: "생년월일(birthDate)을 날짜만 저장하는 필드 정의.", acceptableAnswers: ["birthDate DATE", "birthDate date", "birthDate DATE NULL", "birthDate DATE NOT NULL"], explanation: "DATE 타입" },

        // JOIN 결과 (21-25)
        { id: "fr14-21", type: "short", prompt: "userTbl과 buyTbl을 INNER JOIN했을 때 결과 행 수는?", acceptableAnswers: ["12", "12개"], explanation: "buyTbl 12건 모두 매칭" },
        { id: "fr14-22", type: "short", prompt: "userTbl LEFT JOIN buyTbl 결과 행 수는?", acceptableAnswers: ["17", "17개"], explanation: "12 + 구매없는 5명 = 17" },
        { id: "fr14-23", type: "short", prompt: "구매 기록이 있는 회원 수(중복 제외)는?", acceptableAnswers: ["5", "5명"], explanation: "KBS, JYP, BBK, SSK, EJW 5명" },
        { id: "fr14-24", type: "short", prompt: "userTbl CROSS JOIN buyTbl 결과 행 수는? (10명 x 12건)", acceptableAnswers: ["120", "120개"], explanation: "곱집합 = 10 * 12 = 120" },
        { id: "fr14-25", type: "essay", prompt: "LEFT JOIN에서 prodName이 NULL인 행의 의미는?", rubric: ["구매 기록이 없는 회원", "매칭되는 데이터 없음", "5명이 해당"], maxLength: 200, explanation: "LEFT JOIN + IS NULL" }
    ]
};
