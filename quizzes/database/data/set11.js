// File: quizzes/database/data/set11.js
// JOIN 결과 예측 문제 - 시험 유형 7번 대비
// userTbl과 buyTbl을 INNER/LEFT/RIGHT/FULL JOIN했을 때 결과 예측
const set11 = {
    setId: "set-11",
    questions: [
        // [1-5] INNER JOIN 결과 예측
        { id: "j11-01", type: "short", prompt: "userTbl과 buyTbl을 userID로 INNER JOIN 했을 때, 결과 행(Row)의 개수는?", acceptableAnswers: ["12", "12개", "12 rows"], explanation: "buyTbl의 12건이 모두 userTbl과 매칭됨" },
        { id: "j11-02", type: "short", prompt: "INNER JOIN시, 아이디 'KBS'인 회원의 구매 내역은 몇 건인가?", acceptableAnswers: ["3", "3건", "3개"], explanation: "KBS는 운동화, 노트북, 청바지 3건 구매" },
        { id: "j11-03", type: "short", prompt: "INNER JOIN시, 구매 기록이 있는 회원(중복 제외)은 총 몇 명인가?", acceptableAnswers: ["5", "5명", "5개"], explanation: "KBS, JYP, BBK, SSK, EJW 5명" },
        { id: "j11-04", type: "essay", prompt: "다음 쿼리의 결과로 나오는 name을 모두 나열하시오.\n\nSELECT DISTINCT u.name\nFROM userTbl u\nINNER JOIN buyTbl b ON u.userID = b.userID;", rubric: ["김범수", "조용필", "바비킴", "성시경", "은지원"], maxLength: 200, explanation: "구매 내역이 있는 5명" },
        { id: "j11-05", type: "short", prompt: "INNER JOIN 결과에서 '전자' 분류 구매자의 이름을 중복 없이 모두 나열하시오.", acceptableAnswers: ["김범수, 조용필, 바비킴", "김범수,조용필,바비킴", "바비킴, 조용필, 김범수", "KBS, JYP, BBK"], explanation: "전자 분류: 노트북(KBS), 모니터(JYP,BBK), 메모리(BBK)" },

        // [6-10] LEFT OUTER JOIN 결과 예측
        { id: "j11-06", type: "short", prompt: "userTbl LEFT JOIN buyTbl 결과의 총 행(Row) 수는?", acceptableAnswers: ["17", "17개", "17건"], explanation: "구매 12건 + 구매없는 회원 5명 = 17" },
        { id: "j11-07", type: "essay", prompt: "userTbl LEFT JOIN buyTbl에서, prodName이 NULL인 회원의 name을 모두 나열하시오.\n(구매 기록이 없는 회원)", rubric: ["이승기", "김경호", "임재범", "윤종신", "조관우"], maxLength: 200, explanation: "구매 기록이 없는 5명" },
        { id: "j11-08", type: "short", prompt: "LEFT JOIN에서 구매 기록이 NULL인 회원은 총 몇 명인가?", acceptableAnswers: ["5", "5명"], explanation: "LSG, KKH, LJB, YJS, JKW 5명" },
        { id: "j11-09", type: "short", prompt: "LEFT JOIN에서 '서울' 지역 회원 중 구매 기록이 없는 사람은 몇 명?", acceptableAnswers: ["2", "2명"], explanation: "이승기(LSG), 임재범(LJB) 2명" },
        { id: "j11-10", type: "essay", prompt: "다음 쿼리의 결과를 설명하시오.\n\nSELECT u.name, b.prodName\nFROM userTbl u\nLEFT JOIN buyTbl b ON u.userID = b.userID\nWHERE b.prodName IS NULL;", rubric: ["구매 기록이 없는 회원 조회", "5명 반환", "NULL 조건으로 미구매자 필터링"], maxLength: 300, explanation: "LEFT JOIN + IS NULL = 미구매 회원" },

        // [11-15] RIGHT JOIN / FULL JOIN 및 응용
        { id: "j11-11", type: "short", prompt: "buyTbl RIGHT JOIN userTbl 결과의 총 행 수는?", acceptableAnswers: ["17", "17개"], explanation: "userTbl 기준이므로 LEFT JOIN과 동일한 17건" },
        { id: "j11-12", type: "essay", prompt: "INNER JOIN과 LEFT OUTER JOIN의 차이를 '데이터 누락' 관점에서 설명하시오.", rubric: ["INNER는 매칭되지 않으면 누락", "LEFT는 왼쪽 테이블 전체 포함", "NULL로 채움"], maxLength: 300, explanation: "INNER는 교집합, LEFT는 왼쪽 전체" },
        { id: "j11-13", type: "short", prompt: "userTbl CROSS JOIN buyTbl의 결과 행 수는? (10명 x 12건)", acceptableAnswers: ["120", "120개", "120건"], explanation: "CROSS JOIN = 곱집합 = 10 * 12 = 120" },
        { id: "j11-14", type: "essay", prompt: "다음 쿼리의 결과로 반환되는 물품명(prodName)을 모두 나열하시오.\n\nSELECT b.prodName\nFROM buyTbl b\nJOIN userTbl u ON b.userID = u.userID\nWHERE u.addr = '서울';", rubric: ["책", "모니터", "메모리", "운동화"], maxLength: 200, explanation: "서울 지역: SSK(책), BBK(모니터,메모리,운동화x3)" },
        { id: "j11-15", type: "short", prompt: "INNER JOIN에서 분류(groupName)가 NULL인 구매 건수는?", acceptableAnswers: ["3", "3건"], explanation: "운동화 3건(num 1, 10, 12)이 NULL" }
    ]
};
