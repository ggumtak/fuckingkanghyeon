// File: quizzes/database/data/set22.js
// SQL Functions - 함수 결과 예측 문제 (30문항)
const set22 = {
    setId: "set-22",
    questions: [
        // --- 1. 수치 연산 함수 (Math Functions) ---
        { id: "q1", type: "short", prompt: "다음 SQL문의 실행 결과(정수)를 적으세요.\n\nSELECT ABS(-100);", acceptableAnswers: ["100"] },
        { id: "q2", type: "mcq", prompt: "다음 반올림 함수의 결과로 올바른 것은?\n\nSELECT ROUND(1234.5678, 2);", options: ["1234.56", "1234.57", "1234.568", "1235"], correctIndex: 1 },
        { id: "q3", type: "mcq", prompt: "음수 자릿수 반올림의 결과로 올바른 것은?\n\nSELECT ROUND(1234.5678, -2);", options: ["1200.00", "1234.00", "1300.00", "1230.00"], correctIndex: 0 },
        { id: "q4", type: "short", prompt: "제곱근을 구하는 다음 함수의 결과값을 적으세요. (정수로 답안 기입)\n\nSELECT SQRT(9);", acceptableAnswers: ["3", "3.0"] },
        { id: "q5", type: "short", prompt: "거듭제곱을 구하는 다음 함수의 결과값을 적으세요.\n\nSELECT POWER(3, 2);", acceptableAnswers: ["9"] },

        // --- 2. 문자열 함수 (String Functions) ---
        { id: "q6", type: "short", prompt: "다음 아스키 코드 변환 함수의 결과값(숫자)을 적으세요.\n\nSELECT ASCII('A');", acceptableAnswers: ["65"] },
        { id: "q7", type: "short", prompt: "다음 문자열 결합 함수의 결과를 띄어쓰기를 포함하여 정확히 적으세요.\n\nSELECT CONCAT('SQL ', 'SERVER ', 2019);", acceptableAnswers: ["SQL SERVER 2019"] },
        { id: "q8", type: "short", prompt: "문자열 내 특정 문자열의 시작 위치를 찾는 함수의 결과값은?\n\nSELECT CHARINDEX('Server', 'SQL Server 2019');", acceptableAnswers: ["5"] },
        { id: "q9", type: "mcq", prompt: "왼쪽에서 문자열을 자르는 함수의 결과는?\n\nSELECT LEFT('SQL Server 2019', 3);", options: ["SQL", "Ser", "2019", "ver"], correctIndex: 0 },
        { id: "q10", type: "mcq", prompt: "오른쪽에서 문자열을 자르는 함수의 결과는?\n\nSELECT RIGHT('SQL Server 2019', 4);", options: ["SQL", "ver ", "2019", "rver"], correctIndex: 2 },
        { id: "q11", type: "short", prompt: "문자열의 중간 부분을 가져오는 SUBSTRING 함수의 결과는?\n\nSELECT SUBSTRING(N'대한민국화이팅', 3, 2);", acceptableAnswers: ["민국"] },
        { id: "q12", type: "short", prompt: "문자열의 길이를 반환하는 LEN 함수의 결과값은? (공백 포함)\n\nSELECT LEN('SQL Server 2019');", acceptableAnswers: ["15"] },
        { id: "q13", type: "short", prompt: "대문자로 변환하는 UPPER 함수의 결과를 적으세요.\n\nSELECT UPPER('abcdEFGH');", acceptableAnswers: ["ABCDEFGH"] },
        { id: "q14", type: "short", prompt: "문자열 앞(왼쪽)의 공백을 제거하는 함수의 이름은?", acceptableAnswers: ["LTRIM", "ltrim"] },
        { id: "q15", type: "short", prompt: "문자열 치환(REPLACE) 함수의 결과를 적으세요.\n\nSELECT REPLACE('SQL Server 2019', 'Server', '서버');", acceptableAnswers: ["SQL 서버 2019"] },
        { id: "q16", type: "short", prompt: "문자열 반복(REPLICATE) 함수의 결과를 적으세요.\n\nSELECT REPLICATE('SQL', 3);", acceptableAnswers: ["SQLSQLSQL"] },
        { id: "q17", type: "short", prompt: "문자열의 순서를 거꾸로 뒤집는 REVERSE 함수의 결과를 적으세요.\n\nSELECT REVERSE('SQL');", acceptableAnswers: ["LQS"] },
        { id: "q18", type: "short", prompt: "문자열의 일부를 다른 문자열로 덮어쓰는 STUFF 함수의 결과는?\n\nSELECT STUFF('SQL 서버 2019', 5, 2, 'Server');", acceptableAnswers: ["SQL Server 2019"] },

        // --- 3. 날짜 및 시간 함수 (Date/Time Functions) ---
        { id: "q19", type: "short", prompt: "현재 날짜와 시간을 반환하는 SQL Server 함수의 이름은?", acceptableAnswers: ["GETDATE", "getdate", "GETDATE()", "getdate()"] },
        { id: "q20", type: "short", prompt: "날짜에서 '월(Month)'만 추출하는 함수의 결과값은?\n\nSELECT MONTH('2022/10/20');", acceptableAnswers: ["10"] },
        { id: "q21", type: "short", prompt: "해당 달의 마지막 날짜를 구하는 EOMONTH 함수의 결과는? (YYYY-MM-DD 형식)\n\nSELECT EOMONTH('2020-10-20');", acceptableAnswers: ["2020-10-31"] },
        { id: "q22", type: "short", prompt: "3개월 후의 마지막 날짜를 구하는 다음 쿼리의 결과는? (YYYY-MM-DD 형식)\n\nSELECT EOMONTH('2020-10-20', 3);", acceptableAnswers: ["2021-01-31"] },
        { id: "q23", type: "mcq", prompt: "날짜를 더하는 DATEADD 함수의 사용법으로 올바른 결과는?\n(2020년 10월 10일에 100일을 더함)", options: ["2020-12-31", "2021-01-18", "2021-01-20", "2020-11-20"], correctIndex: 1 },

        // --- 4. 형 변환 및 기타 함수 ---
        { id: "q24", type: "mcq", prompt: "문자열 '100'과 '200'을 더했을 때의 결과는? (SQL Server 기준)\n\nSELECT '100' + '200';", options: ["300", "100200", "Error", "NULL"], correctIndex: 1 },
        { id: "q25", type: "mcq", prompt: "문자열 '100'과 숫자 200을 더했을 때의 암시적 형변환 결과는?\n\nSELECT '100' + 200;", options: ["300", "100200", "Error", "NULL"], correctIndex: 0 },
        { id: "q26", type: "short", prompt: "실수를 정수로 CAST 변환했을 때의 결과값은? (반올림 없음)\n\nSELECT CAST(123.45 AS INT);", acceptableAnswers: ["123"] },
        { id: "q27", type: "short", prompt: "TRY_PARSE 함수가 변환에 실패했을 때 반환하는 값은 무엇인가?\n\nSELECT TRY_PARSE('123.45' AS INT);", acceptableAnswers: ["NULL", "null"] },
        { id: "q28", type: "short", prompt: "IDENTITY 값과 관련하여 최근 생성된 ID값을 확인하는 시스템 함수는?", acceptableAnswers: ["@@IDENTITY"] },
        { id: "q29", type: "mcq", prompt: "SQL Server 버전을 확인하는 시스템 함수는?", options: ["@@VERSION", "@@SERVERNAME", "@@LANGID", "@@SPID"], correctIndex: 0 },
        { id: "q30", type: "short", prompt: "날짜 형식을 지정된 포맷 문자열로 변환하는 함수의 이름은? (SELECT __(GETDATE(), 'dd/MM/yyyy'))", acceptableAnswers: ["FORMAT", "format"] }
    ]
};
