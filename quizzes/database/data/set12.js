// File: quizzes/database/data/set12.js
// INSERT 구문 작성 문제 - 시험 유형 1번 대비
const set12 = {
    setId: "set-12",
    questions: [
        // [1-5] 기본 INSERT (전체 컬럼)
        { id: "i12-01", type: "short", prompt: "userTbl에 다음 회원을 추가하세요.\n아이디: 'NEW', 이름: '신입', 생년: 2000, 지역: '서울'\n(나머지 컬럼은 NULL, 전체 컬럼 순서대로 VALUES)", acceptableAnswers: ["INSERT INTO userTbl VALUES ('NEW', '신입', 2000, '서울', NULL, NULL, NULL, NULL)", "INSERT INTO userTbl VALUES('NEW', '신입', 2000, '서울', NULL, NULL, NULL, NULL)"], explanation: "전체 컬럼 INSERT" },
        { id: "i12-02", type: "short", prompt: "buyTbl에 다음 구매를 추가하세요.\n순번: 13, 아이디: 'LSG', 물품: '키보드', 분류: '전자', 가격: 50, 수량: 1", acceptableAnswers: ["INSERT INTO buyTbl VALUES (13, 'LSG', '키보드', '전자', 50, 1)", "INSERT INTO buyTbl VALUES(13, 'LSG', '키보드', '전자', 50, 1)"], explanation: "전체 컬럼 INSERT" },
        { id: "i12-03", type: "short", prompt: "userTbl에 아이디 'ABC', 이름 '에이비씨', 생년 1995, 지역 '부산', 국번 '010', 전화번호 '12345678', 키 175, 가입일 '2024-01-01'을 추가하세요.", acceptableAnswers: ["INSERT INTO userTbl VALUES ('ABC', '에이비씨', 1995, '부산', '010', '12345678', 175, '2024-01-01')", "INSERT INTO userTbl VALUES('ABC', '에이비씨', 1995, '부산', '010', '12345678', 175, '2024-01-01')"], explanation: "전체 컬럼 INSERT" },
        { id: "i12-04", type: "short", prompt: "buyTbl에 순번 14, 아이디 'KKH', 물품 '기타', 분류 NULL, 가격 200, 수량 1 추가.", acceptableAnswers: ["INSERT INTO buyTbl VALUES (14, 'KKH', '기타', NULL, 200, 1)", "INSERT INTO buyTbl VALUES(14, 'KKH', '기타', NULL, 200, 1)"], explanation: "NULL 값 포함 INSERT" },
        { id: "i12-05", type: "short", prompt: "buyTbl에 순번 15, 아이디 'YJS', 물품 '마우스', 분류 '전자', 가격 30, 수량 2 추가.", acceptableAnswers: ["INSERT INTO buyTbl VALUES (15, 'YJS', '마우스', '전자', 30, 2)", "INSERT INTO buyTbl VALUES(15, 'YJS', '마우스', '전자', 30, 2)"], explanation: "전체 컬럼 INSERT" },

        // [6-10] 특정 컬럼만 INSERT
        { id: "i12-06", type: "short", prompt: "userTbl에 아이디 'TEST', 이름 '테스트', 생년 1990만 입력하세요.\n(컬럼 리스트 명시)", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear) VALUES ('TEST', '테스트', 1990)", "INSERT INTO userTbl(userID, name, birthYear) VALUES('TEST', '테스트', 1990)"], explanation: "특정 컬럼만 명시하여 INSERT" },
        { id: "i12-07", type: "short", prompt: "userTbl에 아이디 'MIN', 이름 '민수', 지역 '대전'만 입력하세요.\n(컬럼 리스트 명시)", acceptableAnswers: ["INSERT INTO userTbl (userID, name, addr) VALUES ('MIN', '민수', '대전')", "INSERT INTO userTbl(userID, name, addr) VALUES('MIN', '민수', '대전')"], explanation: "특정 컬럼만 명시" },
        { id: "i12-08", type: "short", prompt: "buyTbl에 아이디 'JKW', 물품 '시계', 가격 150만 입력하세요.\n(컬럼: userID, prodName, price)", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, price) VALUES ('JKW', '시계', 150)", "INSERT INTO buyTbl(userID, prodName, price) VALUES('JKW', '시계', 150)"], explanation: "특정 컬럼만 명시" },
        { id: "i12-09", type: "short", prompt: "userTbl에 userID='KIM', name='김씨', birthYear=1985, addr='인천', height=168만 입력하세요.", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr, height) VALUES ('KIM', '김씨', 1985, '인천', 168)", "INSERT INTO userTbl(userID, name, birthYear, addr, height) VALUES('KIM', '김씨', 1985, '인천', 168)"], explanation: "일부 컬럼만 명시" },
        { id: "i12-10", type: "short", prompt: "buyTbl에 userID='LJB', prodName='안경', groupName='의류', amount=1만 입력.\n(num, price 생략)", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, groupName, amount) VALUES ('LJB', '안경', '의류', 1)", "INSERT INTO buyTbl(userID, prodName, groupName, amount) VALUES('LJB', '안경', '의류', 1)"], explanation: "일부 컬럼만 명시" },

        // [11-15] 응용 INSERT
        { id: "i12-11", type: "essay", prompt: "userTbl에 새 회원을 추가할 때, 컬럼 리스트를 명시하는 방식과 생략하는 방식의 차이점과 장단점을 설명하시오.", rubric: ["컬럼 명시: 순서 무관, 일부만 입력 가능", "컬럼 생략: 모든 컬럼 순서대로 필수", "명시 방식이 유지보수에 유리"], maxLength: 300, explanation: "컬럼 명시가 안전하고 명확함" },
        { id: "i12-12", type: "short", prompt: "buyTbl에 순번 16, 아이디 'SSK', 물품 '달력', 분류 '서적', 가격 10, 수량 5 추가.", acceptableAnswers: ["INSERT INTO buyTbl VALUES (16, 'SSK', '달력', '서적', 10, 5)", "INSERT INTO buyTbl VALUES(16, 'SSK', '달력', '서적', 10, 5)"], explanation: "전체 컬럼 INSERT" },
        { id: "i12-13", type: "short", prompt: "userTbl에 userID='PAK', name='박씨', birthYear=1978, addr='광주' 입력.\n(컬럼 리스트 명시)", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr) VALUES ('PAK', '박씨', 1978, '광주')", "INSERT INTO userTbl(userID, name, birthYear, addr) VALUES('PAK', '박씨', 1978, '광주')"], explanation: "특정 컬럼만" },
        { id: "i12-14", type: "short", prompt: "buyTbl에 순번 17, 아이디 'EJW', 물품 '가방', 분류 NULL, 가격 80, 수량 1 추가.", acceptableAnswers: ["INSERT INTO buyTbl VALUES (17, 'EJW', '가방', NULL, 80, 1)", "INSERT INTO buyTbl VALUES(17, 'EJW', '가방', NULL, 80, 1)"], explanation: "NULL 포함 INSERT" },
        { id: "i12-15", type: "short", prompt: "userTbl에 userID='CHO', name='조씨'만 입력 (나머지 기본값/NULL).", acceptableAnswers: ["INSERT INTO userTbl (userID, name) VALUES ('CHO', '조씨')", "INSERT INTO userTbl(userID, name) VALUES('CHO', '조씨')"], explanation: "최소 컬럼만 명시" }
    ]
};
