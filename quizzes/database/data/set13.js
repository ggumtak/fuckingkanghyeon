/**
 * Database Midterm Quiz - Set 13
 * File: quizzes/database/data/set13.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set13 = {
    setId: "set-13",
    questions: [
        {
            id: "db-set3-1",
            type: "code-fill",
            prompt: "다음은 `buyTbl`에 데이터를 삽입하는 구문입니다. `num` 열이 `IDENTITY`로 설정되어 있어 값을 직접 입력할 수 없을 때, 나머지 열에만 데이터를 넣기 위해 빈칸을 채우세요.",
            language: "sql",
            code: "INSERT INTO buyTbl ( ( 1 ), prodName, groupName, price, amount )\nVALUES ('KBS', '운동화', NULL, 30, 2);",
            blanks: [
                { index: 1, answer: "userID", explanation: "IDENTITY 열을 제외한 나머지 열 이름을 명시해야 합니다. 첫 번째 값 'KBS'에 해당하는 열은 `userID`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "INSERT" }
        },
        {
            id: "db-set3-2",
            type: "code-fill",
            prompt: "다음은 `userTbl`에서 `mobile1` 열이 **NULL**인 행만 골라 전화번호를 '010'으로 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET mobile1 = '010'\nWHERE mobile1 IS ( 1 );",
            blanks: [
                { index: 1, answer: "NULL", explanation: "NULL 값을 찾을 때는 `=`가 아니라 `IS NULL`을 사용해야 합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "UPDATE" }
        },
        {
            id: "db-set3-3",
            type: "code-fill",
            prompt: "다음은 `userTbl`과 `buyTbl`을 조인하여, 회원의 이름(`name`)과 그 회원이 구매한 물품(`prodName`)을 출력하되, 테이블에 **별칭(Alias)**을 사용하는 구문입니다.",
            language: "sql",
            code: "SELECT U.name, B.prodName\nFROM userTbl ( 1 ) \nINNER JOIN buyTbl ( 2 )\nON U.userID = B.userID;",
            blanks: [
                { index: 1, answer: "U", explanation: "테이블 이름 뒤에 한 칸 띄우고 별칭을 지정합니다 (AS 생략 가능)." },
                { index: 2, answer: "B", explanation: "구매 테이블 buyTbl의 별칭을 B로 지정하여 SELECT 절 등에서 B.prodName 형태로 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set3-4",
            type: "short",
            prompt: "다음 함수 실행 결과 값을 적으시오.\n\n```sql\nSELECT ABS(-10) + FLOOR(3.9);\n```",
            acceptableAnswers: ["13"],
            explanation: "ABS(-10)은 10, FLOOR(3.9)는 3(소수점 버림)이므로 10 + 3 = 13입니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set3-5",
            type: "short",
            prompt: "다음 SQL 구문의 실행 결과는 무엇입니까?\n\n```sql\nSELECT REPLACE('SQL Project', 'Project', 'Server');\n```",
            acceptableAnswers: ["SQL Server"],
            explanation: "REPLACE(전체문자열, 찾을단어, 바꿀단어)는 문자열 내의 특정 단어를 치환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set3-6",
            type: "essay",
            prompt: "`CHAR(5)`와 `VARCHAR(5)`에 동일하게 문자열 'A'를 저장했을 때, 내부적인 저장 방식의 차이를 설명하시오.",
            rubric: [
                "CHAR(5)는 'A' 뒤에 공백 4칸을 채워 항상 5바이트(길이)를 차지함",
                "VARCHAR(5)는 'A'만 저장하여 1바이트(실제 길이)만 사용함"
            ],
            maxLength: 200,
            explanation: "CHAR는 남는 공간을 공백으로 채워 고정 길이를 유지하고, VARCHAR는 실제 데이터 길이만큼만 저장합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set3-7",
            type: "code-fill",
            prompt: "다음은 날짜 '2023-01-01'에 100일을 더한 날짜를 구하는 함수입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT DATEADD( ( 1 ), 100, '2023-01-01' );",
            blanks: [
                { index: 1, answer: "day", explanation: "DATEADD 함수의 첫 번째 인자는 더할 날짜의 단위(day, month, year 등)입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set3-8",
            type: "essay",
            prompt: "`FULL OUTER JOIN`의 결과를 집합 개념(교집합, 합집합 등)을 사용하여 설명하시오.",
            rubric: [
                "두 테이블의 합집합과 같음을 설명",
                "왼쪽 테이블에만 있는 행, 오른쪽 테이블에만 있는 행, 둘 다 있는 행 모두를 포함함"
            ],
            maxLength: 150,
            explanation: "FULL OUTER JOIN은 두 테이블의 합집합을 구하는 것으로, 매칭되는 행뿐만 아니라 매칭되지 않는 양쪽의 모든 행을 출력합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "JOIN" }
        },
        {
            id: "db-set3-9",
            type: "code-fill",
            prompt: "다음은 `userTbl`과 `buyTbl`을 조인할 때, `ON` 절이 아닌 `WHERE` 절에서 일반적인 필터링 조건을 추가하는 예시입니다. '운동화'를 산 사람만 조회하도록 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT U.name, B.prodName\nFROM userTbl U\nINNER JOIN buyTbl B\nON U.userID = B.userID\n( 1 ) B.prodName = '운동화';",
            blanks: [
                { index: 1, answer: "WHERE", explanation: "조인이 완료된 결과 집합에서 특정 행을 필터링할 때는 WHERE 절을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set3-10",
            type: "essay",
            prompt: "테이블의 필드를 정의할 때 `NOT NULL` 제약 조건을 설정하지 않으면 기본적으로 어떤 상태가 되는지 설명하시오.",
            rubric: [
                "NULL 값을 허용하는 상태(Nullable)가 됨",
                "데이터를 입력하지 않아도 에러가 발생하지 않고 NULL이 저장됨"
            ],
            maxLength: 100,
            explanation: "별도로 지정하지 않으면 기본적으로 NULL 허용(NULLable) 상태가 되어, 값이 없어도 저장이 가능해집니다.",
            meta: { skillTag: "[개념응용]", difficulty: "easy", topic: "CreateField" }
        }
    ]
};

if (typeof window !== 'undefined') window.set13 = set13;
