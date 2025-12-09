/**
 * Database Quiz - Set 4 (계산 연습)
 * File: quizzes/database/data/set4.js
 * 날짜 및 시간 계산 + 순위/분석 함수 + 형변환 함수
 */
const set4 = {
    setId: "set-4",
    questions: [
        // ---------------------------------------------------------
        // 3. 날짜 및 시간 계산 (07-2)
        // ---------------------------------------------------------
        {
            id: "c11",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 YYYY-MM-DD 형식으로 쓰세요.\n\nSELECT DATEADD(day, 3, '2024-01-30');",
            acceptableAnswers: ["2024-02-02"]
        },
        {
            id: "c12",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 정수로 쓰세요. (두 날짜 사이의 일수 차이)\n\nSELECT DATEDIFF(day, '2024-01-01', '2024-01-10');",
            acceptableAnswers: ["9"]
        },
        {
            id: "c13",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 정수로 쓰세요. (해당 날짜의 '월' 부분 추출)\n\nSELECT MONTH('2024-12-25');",
            acceptableAnswers: ["12"]
        },
        {
            id: "c14",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 쓰세요. (해당 달의 마지막 날짜)\n\nSELECT EOMONTH('2024-02-10');\n(2024년은 윤년입니다)",
            acceptableAnswers: ["2024-02-29"]
        },

        // ---------------------------------------------------------
        // 4. 순위 함수 결과 예측 - 데이터 가정형 (07-3)
        // ---------------------------------------------------------
        {
            id: "c15",
            type: "short",
            prompt: "[가정 데이터: 점수 테이블]\n학생A: 100점\n학생B: 90점\n학생C: 90점\n학생D: 80점\n\n위 데이터를 가지고 다음 쿼리를 실행했을 때 '학생D'의 순위(RANK)는 몇 등입니까?\n\nSELECT RANK() OVER(ORDER BY 점수 DESC) ...",
            acceptableAnswers: ["4", "4등"]
        },
        {
            id: "c16",
            type: "short",
            prompt: "[가정 데이터: 점수 테이블]\n학생A: 100점\n학생B: 90점\n학생C: 90점\n학생D: 80점\n\n위 데이터를 가지고 다음 쿼리를 실행했을 때 '학생D'의 순위(DENSE_RANK)는 몇 등입니까?\n\nSELECT DENSE_RANK() OVER(ORDER BY 점수 DESC) ...",
            acceptableAnswers: ["3", "3등"]
        },
        {
            id: "c17",
            type: "short",
            prompt: "[가정 데이터: 10명의 회원]\n10명의 회원을 성적순으로 정렬한 뒤, 3개의 그룹으로 나누려 합니다.\n\nSELECT NTILE(3) OVER(...) ...\n\n이때, 1등이 속한 '첫 번째 그룹'에는 몇 명이 배정됩니까?",
            acceptableAnswers: ["4", "4명"]
        },

        // ---------------------------------------------------------
        // 5. 분석 함수 결과 예측 (07-3)
        // ---------------------------------------------------------
        {
            id: "c18",
            type: "short",
            prompt: "[가정 데이터: 연도별 매출]\n2020년: 100원\n2021년: 200원\n2022년: 300원\n\n현재 행이 '2021년(200원)'일 때, 다음 쿼리의 결과값은 무엇입니까?\n\nSELECT LEAD(매출, 1, 0) OVER(ORDER BY 연도 ASC) ...",
            acceptableAnswers: ["300"]
        },
        {
            id: "c19",
            type: "short",
            prompt: "[가정 데이터: 연도별 매출]\n2020년: 100원\n2021년: 200원\n2022년: 300원\n\n현재 행이 '2020년(100원)'일 때, 다음 쿼리의 결과값은 무엇입니까?\n(이전 행이 없으면 0을 반환하도록 설정됨)\n\nSELECT LAG(매출, 1, 0) OVER(ORDER BY 연도 ASC) ...",
            acceptableAnswers: ["0"]
        },

        // ---------------------------------------------------------
        // 6. 형변환 함수 (07-2)
        // ---------------------------------------------------------
        {
            id: "c20",
            type: "short",
            prompt: "다음 쿼리의 실행 결과를 쓰세요. (문자열 -> 날짜 변환)\n\nSELECT PARSE('2024년 5월 5일' AS DATE);",
            acceptableAnswers: ["2024-05-05"]
        },
        {
            id: "c21",
            type: "short",
            prompt: "다음 쿼리의 실행 결과를 쓰세요. (변환 실패 시 NULL 반환 함수)\n\nSELECT TRY_CONVERT(INT, '오백원');",
            acceptableAnswers: ["NULL", "null"]
        }
    ]
};

if (typeof window !== 'undefined') window.set4 = set4;
