/**
 * Database Midterm Quiz - Set 11 (Round 10)
 * File: quizzes/database/data/set11.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set11 = {
    setId: "set-11",
    questions: [
        {
            id: "r10-insert-01",
            type: "code-fill",
            prompt: "`userTbl`에 데이터를 삽입하되, 컬럼 순서를 바꾸어 '이름'과 '아이디' 순으로 값을 넣는 구문입니다.",
            language: "sql",
            code: "INSERT INTO userTbl (name, userID)\nVALUES ( ( 1 ), ( 2 ) );",
            blanks: [
                { index: 1, answer: "'강호동'", explanation: "첫 번째 컬럼인 name에 대응하는 값을 넣습니다." },
                { index: 2, answer: "'KHD'", explanation: "두 번째 컬럼인 userID에 대응하는 값을 넣습니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r10-insert-02",
            type: "short",
            prompt: "SQL Server에서 자동 증가값(`IDENTITY`)이 중간에 삭제되어 이빨이 빠진 것처럼 비었을 때, 이를 채우기 위해 강제로 특정 값을 INSERT 하려면 어떤 옵션을 `ON`으로 켜야 하는가?",
            acceptableAnswers: ["IDENTITY_INSERT", "SET IDENTITY_INSERT"],
            explanation: "`SET IDENTITY_INSERT 테이블명 ON` 구문을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r10-update-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 '전자' 제품들의 수량(`amount`)을 2배로 늘리고, 가격(`price`)은 10% 인하하는 복합 수정 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET amount = amount * 2, price = price * 0.9\nWHERE groupName = ( 1 );",
            blanks: [
                { index: 1, answer: "'전자'", explanation: "조건값 문자열 '전자'를 입력합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r10-update-02",
            type: "essay",
            prompt: "`MERGE` 문은 `INSERT`, `UPDATE`, `DELETE`를 한 번에 처리할 수 있습니다. 어떤 경우에 `UPDATE`가 수행되고 어떤 경우에 `INSERT`가 수행되는지 `MATCHED` 키워드를 사용하여 설명하시오.",
            rubric: [
                "조건이 일치하면(`WHEN MATCHED`) `UPDATE`를 수행한다",
                "조건이 일치하지 않으면(`WHEN NOT MATCHED`) `INSERT`를 수행한다"
            ],
            maxLength: 300,
            explanation: "소스와 타겟의 키가 일치하면(MATCHED) 수정, 없으면(NOT MATCHED) 삽입합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r10-delete-01",
            type: "code-fill",
            prompt: "`userTbl`에서 아이디가 'A'로 시작하는(`LIKE`) 모든 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl WHERE userID LIKE ( 1 );",
            blanks: [
                { index: 1, answer: "'A%'", explanation: "A로 시작하는 모든 문자열은 'A%' 패턴을 사용합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r10-delete-02",
            type: "short",
            prompt: "대량의 데이터를 삭제할 때 트랜잭션 로그 공간 문제로 `DELETE` 대신 `TRUNCATE`를 쓰려고 합니다. 하지만 `WHERE` 절 조건을 주고 싶습니다. `TRUNCATE`에서 `WHERE` 절을 쓸 수 있는가? (O/X)",
            acceptableAnswers: ["X", "아니오", "불가능"],
            explanation: "`TRUNCATE TABLE`은 조건 없이 전체 데이터를 삭제할 때만 사용 가능합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r10-func-01",
            type: "mcq",
            prompt: "다음 중 `NULL` 값을 처리하는 함수가 **아닌** 것은?",
            options: ["① ISNULL()", "② COALESCE()", "③ IFNULL()", "④ GETDATE()"],
            correctIndex: 3,
            explanation: "`GETDATE()`는 날짜 함수입니다. 정답은 명확히 날짜 함수인 4번입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r10-func-02",
            type: "short",
            prompt: "`SELECT LEN(N'코리아')`의 결과값은? (SQL Server)",
            acceptableAnswers: ["3"],
            explanation: "LEN 함수는 문자 개수를 반환합니다. (바이트 수가 아님)",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r10-func-03",
            type: "code-fill",
            prompt: "문자열 'ABCDE'의 오른쪽 2글자를 제외한 나머지('ABC')를 가져오기 위해 `LEFT`와 길이 함수 `LEN`을 조합하는 구문입니다.",
            language: "sql",
            code: "SELECT LEFT('ABCDE', LEN('ABCDE') - ( 1 ));",
            blanks: [
                { index: 1, answer: "2", explanation: "전체 길이에서 2를 뺀 만큼 왼쪽에서 가져오면 됩니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r10-func-04",
            type: "mcq",
            prompt: "`ROW_NUMBER()` 윈도우 함수의 특징으로 옳은 것은?",
            options: [
                "① 동일한 값에 대해 같은 순위를 부여한다 (예: 1등, 1등, 3등).",
                "② 동일한 값이라도 고유한 순번을 부여한다 (예: 1등, 2등, 3등).",
                "③ 그룹(Bucket)을 나누어 번호를 매긴다.",
                "④ 이전 행의 값을 가져온다."
            ],
            correctIndex: 1,
            explanation: "ROW_NUMBER는 중복 값에 관계없이 일련번호를 매깁니다. 동점 처리는 RANK나 DENSE_RANK입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r10-dtype-desc-01",
            type: "short",
            prompt: "SQL Server에서 '참(1)' 또는 '거짓(0)'을 저장하기 위해 사용하는 가장 효율적인 데이터 타입은?",
            acceptableAnswers: ["BIT", "bit"],
            explanation: "BIT 타입은 0, 1, NULL을 저장하며 불리언 용도로 쓰입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r10-dtype-desc-02",
            type: "mcq",
            prompt: "다음 데이터 타입 중 정밀도(Precision)와 스케일(Scale)을 지정하여 정확한 소수점 숫자를 저장하는 것은?",
            options: ["① INT", "② FLOAT", "③ DECIMAL", "④ REAL"],
            correctIndex: 2,
            explanation: "FLOAT/REAL은 부동소수점(근사치)이고, DECIMAL/NUMERIC은 고정 정밀도(정확한 값)를 저장합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r10-dtype-create-01",
            type: "short",
            prompt: "컬럼 `regDate`를 정의할 때, 데이터 타입을 `DATE`로 하고 기본값으로 오늘 날짜(`GETDATE()`)가 들어가도록 작성하시오.",
            acceptableAnswers: ["regDate DATE DEFAULT GETDATE()"],
            explanation: "DEFAULT 제약조건 뒤에 함수를 사용할 수 있습니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r10-dtype-create-02",
            type: "short",
            prompt: "컬럼 `serialNum`을 고유 식별자 `UNIQUEIDENTIFIER` 타입으로 정의하고, 기본값으로 `NEWID()`를 사용하여 자동 생성되게 하시오.",
            acceptableAnswers: ["serialNum UNIQUEIDENTIFIER DEFAULT NEWID()"],
            explanation: "GUID 타입은 `UNIQUEIDENTIFIER`이며 `NEWID()` 함수로 생성합니다.",
            meta: { difficulty: "hard", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r10-join-01",
            type: "code-fill",
            prompt: "`userTbl`의 아이디와 `buyTbl`의 아이디가 같은 것끼리 조인하여, 회원이 구매한 총액(`SUM(price*amount)`)을 구하는 구문입니다. `GROUP BY`를 완성하세요.",
            language: "sql",
            code: "SELECT u.userID, SUM(b.price * b.amount)\nFROM userTbl u INNER JOIN buyTbl b ON u.userID = b.userID\nGROUP BY ( 1 );",
            blanks: [
                { index: 1, answer: "u.userID", explanation: "집계 함수(SUM)를 제외한 나머지 컬럼(u.userID)은 GROUP BY 절에 명시해야 합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r10-join-02",
            type: "mcq",
            prompt: "다음 SQL 구문의 빈칸에 들어갈 알맞은 조인 종류는?\n`SELECT * FROM A ( ) JOIN B ON A.id = B.id` (결과: A 테이블의 모든 행과, B 테이블과 일치하는 행은 결합하여 출력, 불일치 B는 NULL)",
            options: ["① INNER", "② LEFT OUTER", "③ RIGHT OUTER", "④ FULL OUTER"],
            correctIndex: 1,
            explanation: "왼쪽 테이블(A)을 모두 살리는 것은 LEFT OUTER JOIN입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r10-join-03",
            type: "short",
            prompt: "자체 조인(Self Join)은 서로 다른 두 테이블이 아니라 ( ) 테이블과 ( ) 테이블을 조인하는 것이다. 빈칸에 들어갈 말은?",
            acceptableAnswers: ["동일한", "같은", "자기 자신"],
            explanation: "자체 조인은 자기 자신(동일 테이블)을 대상으로 조인하는 기법입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set11 = set11;
