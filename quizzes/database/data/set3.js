/**
 * Database Quiz - Set 3 (계산 연습)
 * File: quizzes/database/data/set3.js
 * 수치 및 수학 함수 계산 + 문자열 조작 결과 예측
 */
const set3 = {
    setId: "set-3",
    questions: [
        // ---------------------------------------------------------
        // 1. 수치 및 수학 함수 계산 (07-2)
        // ---------------------------------------------------------
        {
            id: "c1",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 숫자로 쓰세요.\n\nSELECT CEILING(12.34);",
            acceptableAnswers: ["13"]
        },
        {
            id: "c2",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 숫자로 쓰세요.\n\nSELECT FLOOR(12.99);",
            acceptableAnswers: ["12"]
        },
        {
            id: "c3",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 숫자로 쓰세요.\n\nSELECT ABS(-50) + SQRT(25);",
            acceptableAnswers: ["55"]
        },
        {
            id: "c4",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 숫자로 쓰세요.\n\nSELECT POWER(2, 4);",
            acceptableAnswers: ["16"]
        },
        {
            id: "c5",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 숫자로 쓰세요. (정수 나눗셈에 주의)\n\nSELECT 10 / 3;",
            acceptableAnswers: ["3"]
        },

        // ---------------------------------------------------------
        // 2. 문자열 조작 결과 예측 (07-2)
        // ---------------------------------------------------------
        {
            id: "c6",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요. (문자열 중간 삽입/교체)\n\nSELECT STUFF('010-1234-5678', 5, 4, 'XXXX');",
            acceptableAnswers: ["010-XXXX-5678"]
        },
        {
            id: "c7",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요. (오른쪽 공백 제거 후 연결)\n\nSELECT RTRIM('Hello   ') + 'World';",
            acceptableAnswers: ["HelloWorld"]
        },
        {
            id: "c8",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요. (특정 문자 위치 찾기)\n\nSELECT CHARINDEX('DB', 'Happy DB Class');",
            acceptableAnswers: ["7"]
        },
        {
            id: "c9",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요. (길이 반환)\n\nSELECT LEN('SQL Server');",
            acceptableAnswers: ["10"]
        },
        {
            id: "c10",
            type: "short",
            prompt: "다음 SQL문의 실행 결과를 예측하여 쓰세요. (문자열 부분 추출)\n\nSELECT SUBSTRING('ABCDEFG', 3, 3);",
            acceptableAnswers: ["CDE"]
        }
    ]
};

if (typeof window !== 'undefined') window.set3 = set3;
