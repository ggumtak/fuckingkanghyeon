// File: quizzes/database/data/set16.js
// 최종 점검 세트 (3/3) - 25문제 - DML + 함수 + 타입 + 필드 + JOIN 종합
const set16 = {
    setId: "set-16",
    questions: [
        // INSERT (1-3)
        { id: "fr16-01", type: "short", prompt: "userTbl에 userID='PARK', name='박씨'만 입력. (나머지 NULL/기본값)", acceptableAnswers: ["INSERT INTO userTbl (userID, name) VALUES ('PARK', '박씨')", "INSERT INTO userTbl(userID, name) VALUES('PARK', '박씨')"], explanation: "최소 컬럼만 명시" },
        { id: "fr16-02", type: "short", prompt: "buyTbl에 순번 30, 아이디 'YJS', 물품 '모자', 분류 '의류', 가격 25, 수량 3 추가.", acceptableAnswers: ["INSERT INTO buyTbl VALUES (30, 'YJS', '모자', '의류', 25, 3)", "INSERT INTO buyTbl VALUES(30, 'YJS', '모자', '의류', 25, 3)"], explanation: "전체 컬럼 INSERT" },
        { id: "fr16-03", type: "short", prompt: "userTbl에 아이디 'CHOI', 이름 '최씨', 생년 1992, 지역 '울산', 국번 '010', 전화번호 '99998888' 추가.\n(컬럼 리스트 명시)", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr, mobile1, mobile2) VALUES ('CHOI', '최씨', 1992, '울산', '010', '99998888')", "INSERT INTO userTbl(userID, name, birthYear, addr, mobile1, mobile2) VALUES('CHOI', '최씨', 1992, '울산', '010', '99998888')"], explanation: "일부 컬럼 명시" },

        // UPDATE/DELETE (4-7)
        { id: "fr16-04", type: "short", prompt: "buyTbl에서 가격이 50 이하이고 분류가 '서적'인 상품의 가격을 20으로 변경.", acceptableAnswers: ["UPDATE buyTbl SET price = 20 WHERE price <= 50 AND groupName = '서적'", "UPDATE buyTbl SET price=20 WHERE price<=50 AND groupName='서적'"], explanation: "복합 조건 UPDATE" },
        { id: "fr16-05", type: "short", prompt: "userTbl에서 키가 170 이상 180 이하인 회원의 지역을 '경기'로 변경.", acceptableAnswers: ["UPDATE userTbl SET addr = '경기' WHERE height >= 170 AND height <= 180", "UPDATE userTbl SET addr='경기' WHERE height BETWEEN 170 AND 180"], explanation: "범위 조건 UPDATE" },
        { id: "fr16-06", type: "short", prompt: "buyTbl에서 아이디가 'KBS' 또는 'BBK'인 구매 삭제.", acceptableAnswers: ["DELETE FROM buyTbl WHERE userID = 'KBS' OR userID = 'BBK'", "DELETE FROM buyTbl WHERE userID IN ('KBS', 'BBK')"], explanation: "OR/IN 조건 DELETE" },
        { id: "fr16-07", type: "essay", prompt: "TRUNCATE TABLE과 DELETE의 차이점 3가지를 설명하시오.", rubric: ["TRUNCATE는 WHERE 불가", "TRUNCATE가 더 빠름", "TRUNCATE는 롤백 제한", "로그 기록 차이"], maxLength: 300, explanation: "TRUNCATE vs DELETE" },

        // 함수 결과 예측 (8-13)
        { id: "fr16-08", type: "short", prompt: "SELECT POWER(2, 10); 의 결과는?", acceptableAnswers: ["1024"], explanation: "POWER(2,10) = 2^10 = 1024" },
        { id: "fr16-09", type: "short", prompt: "SELECT SUBSTRING('DATABASE', 5, 4); 의 결과는?", acceptableAnswers: ["BASE", "'BASE'"], explanation: "5번째부터 4글자" },
        { id: "fr16-10", type: "short", prompt: "SELECT REPLACE('HELLO', 'L', 'X'); 의 결과는?", acceptableAnswers: ["HEXXO", "'HEXXO'"], explanation: "L을 X로 치환" },
        { id: "fr16-11", type: "short", prompt: "SELECT DAY('2024-12-25'); 의 결과는?", acceptableAnswers: ["25"], explanation: "DAY()는 일 추출" },
        { id: "fr16-12", type: "short", prompt: "SELECT TRIM('  HELLO  '); 의 결과는?", acceptableAnswers: ["HELLO", "'HELLO'"], explanation: "TRIM()은 양쪽 공백 제거" },
        { id: "fr16-13", type: "short", prompt: "SELECT CHARINDEX('L', 'HELLO'); 의 결과는?", acceptableAnswers: ["3"], explanation: "첫 번째 L의 위치 = 3" },

        // 데이터 타입 (14-17)
        { id: "fr16-14", type: "essay", prompt: "TINYINT, SMALLINT, INT, BIGINT의 바이트 크기를 순서대로 쓰시오.", rubric: ["TINYINT: 1바이트", "SMALLINT: 2바이트", "INT: 4바이트", "BIGINT: 8바이트"], maxLength: 150, explanation: "정수형 바이트 크기" },
        { id: "fr16-15", type: "essay", prompt: "DATETIME2와 기존 DATETIME의 차이점을 설명하시오.", rubric: ["DATETIME2가 더 정밀", "나노초 지원", "저장 범위 확대"], maxLength: 200, explanation: "DATETIME2 vs DATETIME" },
        { id: "fr16-16", type: "essay", prompt: "UNIQUEIDENTIFIER 타입의 용도와 특징.", rubric: ["GUID 저장", "16바이트", "전역 고유 식별자"], maxLength: 200, explanation: "UNIQUEIDENTIFIER" },
        { id: "fr16-17", type: "essay", prompt: "BIT 타입이 저장할 수 있는 값 3가지는?", rubric: ["0", "1", "NULL"], maxLength: 100, explanation: "BIT = 0, 1, NULL" },

        // 필드 작성 (18-21)
        { id: "fr16-18", type: "short", prompt: "성별(gender)을 'M' 또는 'F'만 허용하는 필드 정의.", acceptableAnswers: ["gender CHAR(1) CHECK(gender IN ('M', 'F'))", "gender CHAR(1) CHECK (gender IN ('M', 'F'))"], explanation: "CHECK 제약조건" },
        { id: "fr16-19", type: "short", prompt: "나이(age)를 0~150 사이만 허용하는 필드 정의.", acceptableAnswers: ["age TINYINT CHECK(age >= 0 AND age <= 150)", "age TINYINT CHECK (age >= 0 AND age <= 150)", "age INT CHECK(age BETWEEN 0 AND 150)"], explanation: "CHECK 범위 제약" },
        { id: "fr16-20", type: "short", prompt: "이메일(email)을 고유하게(중복 불가) 설정하는 필드 정의.", acceptableAnswers: ["email VARCHAR(100) UNIQUE", "email NVARCHAR(100) UNIQUE", "email VARCHAR(100) UNIQUE NOT NULL"], explanation: "UNIQUE 제약" },
        { id: "fr16-21", type: "short", prompt: "국가(nation)를 기본값 '대한민국'으로 설정하는 필드 정의.", acceptableAnswers: ["nation NVARCHAR(20) DEFAULT '대한민국'", "nation NCHAR(10) DEFAULT '대한민국'"], explanation: "DEFAULT 제약" },

        // JOIN 결과 (22-25)
        { id: "fr16-22", type: "short", prompt: "userTbl과 buyTbl을 INNER JOIN하여 '책'을 구매한 회원 이름을 나열하시오.", acceptableAnswers: ["성시경, 은지원", "은지원, 성시경", "SSK, EJW"], explanation: "책 구매: SSK, EJW" },
        { id: "fr16-23", type: "short", prompt: "buyTbl에서 수량(amount)의 총합은?", acceptableAnswers: ["35", "35개"], explanation: "2+1+1+5+3+10+5+2+1+2+1+2=35" },
        { id: "fr16-24", type: "short", prompt: "INNER JOIN 결과에서 '경남' 지역 회원의 구매 건수는?", acceptableAnswers: ["3", "3건"], explanation: "경남=KBS,YJS, KBS만 3건 구매" },
        { id: "fr16-25", type: "essay", prompt: "JOIN에서 ON 절과 WHERE 절의 역할 차이를 설명하시오.", rubric: ["ON: 조인 조건", "WHERE: 결과 필터링", "실행 순서 차이"], maxLength: 250, explanation: "ON vs WHERE" }
    ]
};
