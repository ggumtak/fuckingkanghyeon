/**
 * Database Midterm Quiz - Set 15 (Round 12)
 * File: quizzes/database/data/set15.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set15 = {
    setId: "set-15",
    questions: [
        {
            id: "r12-insert-01",
            type: "code-fill",
            prompt: "`userTbl`에 회원 정보를 넣을 때, `birthYear`를 모르면 `NULL`로 처리하고, `mDate`는 오늘 날짜 함수를 사용하여 넣는 구문입니다. (아이디 'NONAME', 이름 '익명')",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name, birthYear, mDate)\nVALUES ('NONAME', '익명', ( 1 ), ( 2 ));",
            blanks: [
                { index: 1, answer: "NULL", explanation: "모르는 값은 NULL을 입력합니다." },
                { index: 2, answer: "GETDATE()", explanation: "오늘 날짜를 입력하기 위해 함수를 호출합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r12-insert-02",
            type: "short",
            prompt: "SQL Server에서 테이블의 데이터를 다른 테이블로 복사하면서 테이블을 **새로 생성**하는 구문은? (힌트: `SELECT ...`)",
            acceptableAnswers: ["SELECT INTO", "SELECT ... INTO"],
            explanation: "`SELECT * INTO newTbl FROM oldTbl` 구문입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r12-update-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 '서적' 분류(`groupName`)의 제품 가격을 100원 인상하고, 분류명도 '도서'로 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price + 100, ( 1 ) = '도서'\nWHERE groupName = '서적';",
            blanks: [
                { index: 1, answer: "groupName", explanation: "변경할 컬럼인 분류명(groupName)을 지정합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r12-update-02",
            type: "mcq",
            prompt: "`UPDATE` 구문 실행 후, 변경된 행의 개수를 알고 싶을 때 SQL Server Management Studio 메시지 창에서 확인할 수 있는 문구는?",
            options: [
                "① (n)개 행이 영향을 받음",
                "② (n)개 행이 삭제됨",
                "③ (n)개 테이블이 생성됨",
                "④ (n)개 인덱스가 수정됨"
            ],
            correctIndex: 0,
            explanation: "UPDATE, INSERT, DELETE 실행 시 '(n) row(s) affected' 메시지가 뜹니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r12-delete-01",
            type: "code-fill",
            prompt: "`userTbl`에서 아이디가 5글자 이상(`LEN(userID) >= 5`)인 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl WHERE ( 1 )(userID) >= 5;",
            blanks: [
                { index: 1, answer: "LEN", explanation: "문자열 길이를 구하는 함수는 LEN입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r12-delete-02",
            type: "short",
            prompt: "`DELETE` 문을 사용하여 테이블의 데이터를 모두 지워도, 자동 증가(`IDENTITY`) 컬럼의 시드(Seed) 값은 초기화되지 않습니다. 시드 값까지 초기화하려면 어떤 명령어를 써야 합니까?",
            acceptableAnswers: ["TRUNCATE", "TRUNCATE TABLE"],
            explanation: "TRUNCATE는 IDENTITY 값을 초기값으로 리셋합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r12-func-01",
            type: "mcq",
            prompt: "다음 중 날짜의 '월'을 영어 이름(예: January)이나 숫자 등 다양한 형식으로 변환할 때 가장 유용한 함수는?",
            options: ["① DATENAME()", "② DAY()", "③ YEAR()", "④ GETDATE()"],
            correctIndex: 0,
            explanation: "`DATENAME(month, ...)`을 사용하면 'January', 'May' 등의 문자열을 얻을 수 있습니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r12-func-02",
            type: "code-fill",
            prompt: "전화번호 `mobile2`의 값이 NULL인 경우 '없음'이라고 출력하는 `ISNULL` 함수 예제입니다.",
            language: "sql",
            code: "SELECT ( 1 )(mobile2, '없음') FROM userTbl;",
            blanks: [
                { index: 1, answer: "ISNULL", explanation: "ISNULL(표현식, 대체값) 함수입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r12-func-03",
            type: "short",
            prompt: "`SELECT POWER(2, 3)`의 결과는?",
            acceptableAnswers: ["8"],
            explanation: "2의 3제곱은 8입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r12-func-04",
            type: "short",
            prompt: "`SELECT RTRIM(' SQL ')`의 결과는? (양쪽 따옴표 제외하고 문자열 내용만 생각)",
            acceptableAnswers: [" SQL"],
            explanation: "RTRIM은 오른쪽 공백만 제거하므로 왼쪽 공백은 남습니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r12-dtype-desc-01",
            type: "mcq",
            prompt: "다음 중 `DATE` 데이터 타입의 형식으로 올바른 예시는?",
            options: ["① 2025-12-25 12:00:00", "② 12:00:00", "③ 2025-12-25", "④ 2025년 12월 25일"],
            correctIndex: 2,
            explanation: "DATE 타입은 'YYYY-MM-DD' 형식의 날짜만 저장합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r12-dtype-desc-02",
            type: "short",
            prompt: "정수형 타입 중 `BIGINT`는 몇 바이트를 사용하는가?",
            acceptableAnswers: ["8바이트", "8"],
            explanation: "BIGINT는 8바이트 정수형입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r12-dtype-create-01",
            type: "short",
            prompt: "컬럼 `userName`을 정의할 때, 값이 비어있지 않아야 하며(`NOT NULL`), 중복도 허용하지 않도록(`UNIQUE`) 동시에 제약조건을 거시오. (타입은 `VARCHAR(10)`)",
            acceptableAnswers: ["userName VARCHAR(10) NOT NULL UNIQUE"],
            explanation: "두 제약조건을 나열하여 작성합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r12-dtype-create-02",
            type: "short",
            prompt: "컬럼 `joinDate`를 `DATETIME`으로 정의하고, 입력이 없으면 `2025-01-01`이 기본값으로 들어가게 하시오.",
            acceptableAnswers: ["joinDate DATETIME DEFAULT '2025-01-01'"],
            explanation: "DEFAULT '날짜문자열'을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r12-join-01",
            type: "code-fill",
            prompt: "`userTbl`의 아이디와 이름, 그리고 해당 회원의 `buyTbl` 구매 수량을 출력하되, 한 번도 구매하지 않은 회원은 수량을 `0`으로 표시하고 싶습니다. `ISNULL`과 `LEFT JOIN`을 사용하세요.",
            language: "sql",
            code: "SELECT u.name, ISNULL(b.amount, 0)\nFROM userTbl u ( 1 ) JOIN buyTbl b\nON u.userID = b.userID;",
            blanks: [
                { index: 1, answer: "LEFT OUTER", explanation: "모든 회원을 출력해야 하므로 LEFT OUTER JOIN이 필요합니다." }
            ],
            meta: { difficulty: "hard", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r12-join-02",
            type: "mcq",
            prompt: "3개 테이블 A, B, C를 조인할 때, `A`와 `B`를 `CROSS JOIN`하고, 그 결과와 `C`를 `INNER JOIN`한다면 결과 집합의 크기(행 수)는?",
            options: [
                "① A행수 + B행수 + C행수",
                "② (A행수 * B행수) 중 C와 조건이 맞는 것",
                "③ A행수 * B행수 * C행수",
                "④ A행수와 C행수의 교집합"
            ],
            correctIndex: 1,
            explanation: "A와 B의 곱집합(Cartesian Product)이 먼저 생성되고, 그 결과 집합이 C와 조건에 따라 필터링(조인)됩니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r12-join-03",
            type: "essay",
            prompt: "`UNION` 연산자를 사용할 때 주의해야 할 '컬럼 규칙' 두 가지를 서술하시오.",
            rubric: [
                "두 SELECT 문의 열 개수가 같아야 한다",
                "각 열의 데이터 타입이 호환되어야 한다"
            ],
            maxLength: 200,
            explanation: "집합 연산을 위해 구조가 일치해야 합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set15 = set15;
