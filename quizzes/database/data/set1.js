/**
 * Database Quiz - Set 1
 * File: quizzes/database/data/set1.js
 * 07-2. T-SQL 고급 - 함수(1): 데이터 형식 변환 함수 + 수치 연산 함수 + 문자열 함수 전반부
 */
const set1 = {
    setId: "set-1",
    questions: [
        // 07-2. T-SQL 고급 - 함수(1) : 데이터 형식 변환 함수
        {
            id: "q1",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT CAST('100' AS INT) + 200;",
            acceptableAnswers: ["300"]
        },
        {
            id: "q2",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT CAST(10.12345 AS INT);",
            acceptableAnswers: ["10"]
        },
        {
            id: "q3",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT CAST(10.12345 AS DECIMAL(10,2));",
            acceptableAnswers: ["10.12"]
        },
        {
            id: "q4",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT PARSE('2020년 10월 23일' AS DATE);",
            acceptableAnswers: ["2020-10-23"]
        },
        // 07-2. T-SQL 고급 - 함수(1) : 수치 연산 함수
        {
            id: "q5",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT ABS(-100);",
            acceptableAnswers: ["100"]
        },
        {
            id: "q6",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT ROUND(1234.5678, 2);",
            acceptableAnswers: ["1234.57", "1234.5700"]
        },
        {
            id: "q7",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT POWER(3,2);",
            acceptableAnswers: ["9"]
        },
        // 07-2. T-SQL 고급 - 함수(1) : 문자열 함수
        {
            id: "q8",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT ASCII('A');",
            acceptableAnswers: ["65"]
        },
        {
            id: "q9",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT CHAR(65);",
            acceptableAnswers: ["A"]
        },
        {
            id: "q10",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요. (공백 없이 입력)\n\nSELECT CONCAT('SQL', 'SERVER', 2019);",
            acceptableAnswers: ["SQLSERVER2019"]
        },
        {
            id: "q11",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT UNICODE('가');",
            acceptableAnswers: ["44032"]
        },
        {
            id: "q12",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT CHARINDEX('Server', 'SQL Server 2019');",
            acceptableAnswers: ["5"]
        },
        {
            id: "q13",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT LEFT('SQL Server 2019', 3);",
            acceptableAnswers: ["SQL"]
        },
        {
            id: "q14",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT RIGHT('SQL Server 2019', 4);",
            acceptableAnswers: ["2019"]
        },
        {
            id: "q15",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT SUBSTRING(N'대한민국화이팅', 3, 2);",
            acceptableAnswers: ["민국"]
        },
        {
            id: "q16",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT LEN('SQL Server 2019');",
            acceptableAnswers: ["15"]
        },
        {
            id: "q17",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요.\n\nSELECT LOWER('abcdEFGH');",
            acceptableAnswers: ["abcdefgh"]
        }
    ]
};

if (typeof window !== 'undefined') window.set1 = set1;
