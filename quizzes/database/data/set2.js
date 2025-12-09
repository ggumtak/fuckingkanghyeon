/**
 * Database Quiz - Set 2
 * File: quizzes/database/data/set2.js
 * 07-2. T-SQL 고급 - 함수(1): 문자열 함수 후반부 + 날짜 및 시간 함수 + MAX 데이터 형식
 */
const set2 = {
    setId: "set-2",
    questions: [
        // 07-2. T-SQL 고급 - 함수(1) : 문자열 함수 (계속)
        {
            id: "q18",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT UPPER('abcdEFGH');",
            acceptableAnswers: ["ABCDEFGH"]
        },
        {
            id: "q19",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요. (공백 주의: 결과의 공백도 정확히 포함)\n\nSELECT LTRIM('  공백 앞뒤두개  ');",
            acceptableAnswers: ["공백 앞뒤두개  ", "공백 앞뒤두개"]
        },
        {
            id: "q20",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT REPLACE('SQL Server 2019', 'Server', '서버');",
            acceptableAnswers: ["SQL 서버 2019"]
        },
        {
            id: "q21",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT REPLICATE('SQL', 5);",
            acceptableAnswers: ["SQLSQLSQLSQLSQL"]
        },
        {
            id: "q22",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT REVERSE('SQL Server 2019');",
            acceptableAnswers: ["9102 revreS LQS"]
        },
        {
            id: "q23",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT SPACE(5);",
            acceptableAnswers: ["     ", "(공백 5개)"]
        },
        {
            id: "q24",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT STUFF('SQL 서버 2019', 5, 2, 'Server');",
            acceptableAnswers: ["SQL Server 2019"]
        },
        // 07-2. T-SQL 고급 - 함수(1) : 날짜 및 시간 함수
        {
            id: "q25",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT DATEADD(day, 100, '2020/10/10');",
            acceptableAnswers: ["2021-01-18", "2021-01-18 00:00:00.000"]
        },
        {
            id: "q26",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT DATENAME(weekday, '2022/10/20');",
            acceptableAnswers: ["목요일", "Thursday"]
        },
        {
            id: "q27",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT DATEPART(year, '2022/10/20');",
            acceptableAnswers: ["2022"]
        },
        {
            id: "q28",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT MONTH('2022/10/20');",
            acceptableAnswers: ["10"]
        },
        {
            id: "q29",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT DATEFROMPARTS('2022','10','20');",
            acceptableAnswers: ["2022-10-20"]
        },
        {
            id: "q30",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT EOMONTH('2020-10-20');",
            acceptableAnswers: ["2020-10-31"]
        },
        {
            id: "q31",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT EOMONTH(GETDATE(), 3);\n(단, 현재 날짜(GETDATE)가 '2020-10-22'라고 가정한다)",
            acceptableAnswers: ["2021-01-31"]
        },
        // 07-3. T-SQL 고급 - 함수(2) : MAX 데이터 형식 및 특수 함수
        {
            id: "q32",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 숫자로 쓰세요. (힌트: VARCHAR의 기본 최대 길이는 8000이다)\n\nSELECT LEN(REPLICATE('A', 1000000));",
            acceptableAnswers: ["8000"]
        },
        {
            id: "q33",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 숫자로 쓰세요.\n\nSELECT LEN(REPLICATE(CAST('A' AS VARCHAR(MAX)), 1000000));",
            acceptableAnswers: ["1000000"]
        }
    ]
};

if (typeof window !== 'undefined') window.set2 = set2;
