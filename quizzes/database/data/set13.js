// File: quizzes/database/data/set13.js
// UPDATE/DELETE 구문 작성 문제 - 시험 유형 2-3번 대비
const set13 = {
    setId: "set-13",
    questions: [
        // [1-5] UPDATE 기본
        { id: "ud13-01", type: "short", prompt: "userTbl에서 아이디가 'LSG'인 회원의 지역(addr)을 '인천'으로 변경하세요.", acceptableAnswers: ["UPDATE userTbl SET addr = '인천' WHERE userID = 'LSG'", "UPDATE userTbl SET addr='인천' WHERE userID='LSG'"], explanation: "UPDATE SET WHERE 구문" },
        { id: "ud13-02", type: "short", prompt: "buyTbl에서 순번(num)이 1인 구매의 수량(amount)을 5로 변경하세요.", acceptableAnswers: ["UPDATE buyTbl SET amount = 5 WHERE num = 1", "UPDATE buyTbl SET amount=5 WHERE num=1"], explanation: "UPDATE SET WHERE 구문" },
        { id: "ud13-03", type: "short", prompt: "userTbl에서 이름이 '김범수'인 회원의 키(height)를 180으로 변경하세요.", acceptableAnswers: ["UPDATE userTbl SET height = 180 WHERE name = '김범수'", "UPDATE userTbl SET height=180 WHERE name='김범수'"], explanation: "UPDATE SET WHERE 구문" },
        { id: "ud13-04", type: "short", prompt: "buyTbl에서 물품명이 '모니터'인 상품의 가격(price)을 250으로 변경하세요.", acceptableAnswers: ["UPDATE buyTbl SET price = 250 WHERE prodName = '모니터'", "UPDATE buyTbl SET price=250 WHERE prodName='모니터'"], explanation: "여러 행 UPDATE" },
        { id: "ud13-05", type: "short", prompt: "userTbl에서 출생년도가 1970 미만인 회원의 지역을 '경기'로 변경하세요.", acceptableAnswers: ["UPDATE userTbl SET addr = '경기' WHERE birthYear < 1970", "UPDATE userTbl SET addr='경기' WHERE birthYear<1970"], explanation: "비교 연산자 사용 UPDATE" },

        // [6-10] DELETE 기본
        { id: "ud13-06", type: "short", prompt: "buyTbl에서 순번(num)이 12인 구매 기록을 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE num = 12", "DELETE buyTbl WHERE num = 12", "DELETE FROM buyTbl WHERE num=12"], explanation: "DELETE FROM WHERE 구문" },
        { id: "ud13-07", type: "short", prompt: "userTbl에서 아이디가 'JKW'인 회원을 삭제하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE userID = 'JKW'", "DELETE userTbl WHERE userID = 'JKW'", "DELETE FROM userTbl WHERE userID='JKW'"], explanation: "DELETE FROM WHERE 구문" },
        { id: "ud13-08", type: "short", prompt: "buyTbl에서 분류(groupName)가 '의류'인 모든 구매를 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE groupName = '의류'", "DELETE buyTbl WHERE groupName = '의류'", "DELETE FROM buyTbl WHERE groupName='의류'"], explanation: "특정 조건 DELETE" },
        { id: "ud13-09", type: "short", prompt: "userTbl에서 키(height)가 170 미만인 회원을 모두 삭제하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE height < 170", "DELETE userTbl WHERE height < 170", "DELETE FROM userTbl WHERE height<170"], explanation: "비교 연산자 DELETE" },
        { id: "ud13-10", type: "short", prompt: "buyTbl에서 아이디가 'BBK'인 모든 구매 기록을 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE userID = 'BBK'", "DELETE buyTbl WHERE userID = 'BBK'", "DELETE FROM buyTbl WHERE userID='BBK'"], explanation: "특정 사용자 DELETE" },

        // [11-15] 복합 조건 UPDATE/DELETE
        { id: "ud13-11", type: "short", prompt: "buyTbl에서 아이디가 'EJW'이고 물품명이 '책'인 구매의 수량을 10으로 변경하세요.", acceptableAnswers: ["UPDATE buyTbl SET amount = 10 WHERE userID = 'EJW' AND prodName = '책'", "UPDATE buyTbl SET amount=10 WHERE userID='EJW' AND prodName='책'"], explanation: "AND 조건 UPDATE" },
        { id: "ud13-12", type: "short", prompt: "userTbl에서 지역이 '서울'이거나 '경기'인 회원의 국번(mobile1)을 '02'로 변경하세요.", acceptableAnswers: ["UPDATE userTbl SET mobile1 = '02' WHERE addr = '서울' OR addr = '경기'", "UPDATE userTbl SET mobile1='02' WHERE addr='서울' OR addr='경기'", "UPDATE userTbl SET mobile1 = '02' WHERE addr IN ('서울', '경기')"], explanation: "OR 조건 UPDATE" },
        { id: "ud13-13", type: "short", prompt: "buyTbl에서 가격이 100 이상이고 분류가 '전자'인 구매를 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE price >= 100 AND groupName = '전자'", "DELETE buyTbl WHERE price >= 100 AND groupName = '전자'", "DELETE FROM buyTbl WHERE price>=100 AND groupName='전자'"], explanation: "복합 조건 DELETE" },
        { id: "ud13-14", type: "short", prompt: "userTbl 전체 회원의 키(height)를 2만큼 증가시키세요.\n(WHERE 없이)", acceptableAnswers: ["UPDATE userTbl SET height = height + 2", "UPDATE userTbl SET height=height+2"], explanation: "전체 행 UPDATE, 기존값 기반" },
        { id: "ud13-15", type: "essay", prompt: "DELETE와 TRUNCATE TABLE의 차이점을 설명하시오.", rubric: ["DELETE는 WHERE 사용 가능", "TRUNCATE는 전체 삭제만", "TRUNCATE가 더 빠름", "DELETE는 트랜잭션 로그 기록", "TRUNCATE는 롤백 제한"], maxLength: 300, explanation: "DELETE vs TRUNCATE 차이" }
    ]
};
