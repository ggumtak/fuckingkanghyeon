/**
 * Database Midterm Quiz - Set 4 (Round 4)
 * File: quizzes/database/data/set4.js
 */
const set4 = {
    setId: "set-4",
    questions: [
        {
            id: "dml-merge-01",
            type: "code-fill",
            prompt: "다음은 `MERGE` 문을 사용하여 `userTbl_New`의 데이터를 `userTbl`에 병합하는 구문입니다. 매칭되는 데이터가 있으면 업데이트하고, 없으면 삽입하는 빈칸을 채우세요.",
            language: "sql",
            code: "MERGE userTbl AS T\nUSING userTbl_New AS S\nON T.userID = S.userID\nWHEN MATCHED THEN\n    UPDATE SET T.name = S.name\nWHEN NOT MATCHED THEN\n    ( 1 ) (userID, name) VALUES (S.userID, S.name);",
            blanks: [
                { index: 1, answer: "INSERT", explanation: "조건이 맞지 않을 때(데이터가 없을 때) 새로운 행을 추가하려면 INSERT 문을 사용합니다." }
            ],
            meta: { difficulty: "hard", skillTag: "[코드빈칸]", topic: "MERGE" }
        },
        {
            id: "func-window-01",
            type: "code-fill",
            prompt: "`userTbl`에서 키(`height`)가 큰 순서대로 순위를 매기되, 키가 같으면 같은 등수로 처리하고 다음 등수는 건너뛰는(예: 1, 2, 2, 4등) 윈도우 함수를 사용하려고 합니다.",
            language: "sql",
            code: "SELECT name, height,\n       ( 1 )() OVER (ORDER BY height DESC) AS 등수\nFROM userTbl;",
            blanks: [
                { index: 1, answer: "RANK", explanation: "RANK() 함수는 동점자 발생 시 같은 순위를 부여하고, 그 수만큼 다음 순위를 건너뜁니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "Window Functions" }
        },
        {
            id: "func-window-02",
            type: "mcq",
            prompt: "다음 윈도우 함수 중, 정렬된 데이터 그룹을 지정된 숫자만큼의 그룹(버킷)으로 나누어 번호를 부여하는 함수는?",
            options: [
                "① ROW_NUMBER()",
                "② RANK()",
                "③ NTILE()",
                "④ DENSE_RANK()"
            ],
            correctIndex: 2,
            explanation: "NTILE(n) 함수는 데이터를 n개의 그룹으로 분할하여 그룹 번호를 반환합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Window Functions" }
        },
        {
            id: "func-window-03",
            type: "short",
            prompt: "키(`height`) 순으로 정렬했을 때, 바로 앞 행의 키 값을 가져와서 현재 행과 비교하려고 합니다. 이때 사용하는 분석 함수 이름은?",
            acceptableAnswers: ["LAG", "LAG()"],
            explanation: "LAG() 함수는 현재 행을 기준으로 이전 행의 데이터를 참조할 때 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Window Functions" }
        },
        {
            id: "func-json-01",
            type: "mcq",
            prompt: "행(Row) 데이터를 열(Column)로 회전시켜 통계 데이터를 보기 쉽게 만드는 연산자는 무엇인가?",
            options: [
                "① UNPIVOT",
                "② PIVOT",
                "③ MERGE",
                "④ ROLLUP"
            ],
            correctIndex: 1,
            explanation: "PIVOT 연산자는 행 데이터를 열 데이터로 변환하여 집계 결과를 보여줍니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "PIVOT" }
        },
        {
            id: "dtype-special-01",
            type: "short",
            prompt: "테이블의 행이 수정될 때마다 자동으로 갱신되는 고유한 이진 숫자를 저장하며, 주로 낙관적 잠금(Optimistic Locking)에 사용되는 데이터 타입은?",
            acceptableAnswers: ["ROWVERSION", "TIMESTAMP"],
            explanation: "ROWVERSION(구 TIMESTAMP)은 데이터 변경 시 자동으로 값이 변하는 유니크한 이진 값을 가집니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-special-02",
            type: "short",
            prompt: "전 세계적으로 유일한 값을 생성하는 GUID(Globally Unique Identifier)를 저장하기 위한 데이터 타입은?",
            acceptableAnswers: ["UNIQUEIDENTIFIER"],
            explanation: "GUID를 저장하는 타입은 UNIQUEIDENTIFIER이며 `NEWID()` 함수로 생성합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "join-cte-01",
            type: "code-fill",
            prompt: "다음은 CTE(Common Table Expression)를 사용하여 사용자별 총 구매액을 구하는 구문입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "WITH UserBuySum (userID, total)\nAS\n(\n    SELECT userID, SUM(price * amount)\n    FROM buyTbl\n    GROUP BY ( 1 )\n)\nSELECT * FROM UserBuySum ORDER BY total DESC;",
            blanks: [
                { index: 1, answer: "userID", explanation: "사용자별 합계를 구하려면 userID로 그룹화(GROUP BY)해야 합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "CTE" }
        },
        {
            id: "join-cte-02",
            type: "mcq",
            prompt: "재귀적 CTE(Recursive CTE)를 사용할 때 필수적인 요소가 **아닌** 것은?",
            options: [
                "① 앵커 멤버 (초기값 쿼리)",
                "② 재귀 멤버 (자기 자신을 참조하는 쿼리)",
                "③ UNION ALL",
                "④ CROSS JOIN"
            ],
            correctIndex: 3,
            explanation: "재귀적 CTE는 앵커 멤버와 재귀 멤버를 `UNION ALL`로 결합하여 구성합니다. CROSS JOIN은 필수가 아닙니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Recursive CTE" }
        },
        {
            id: "dtype-xml-01",
            type: "short",
            prompt: "반정형 데이터인 XML 문서를 테이블의 컬럼에 저장하기 위해 제공되는 데이터 타입 이름은?",
            acceptableAnswers: ["XML"],
            explanation: "SQL Server는 XML 데이터를 저장하고 쿼리할 수 있는 XML 데이터 타입을 제공합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "func-agg-01",
            type: "code-fill",
            prompt: "그룹별 소계와 총계를 자동으로 구해주는 `GROUP BY`의 확장 기능을 사용하려 합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT groupName, SUM(price * amount)\nFROM buyTbl\nGROUP BY ( 1 ) (groupName);",
            blanks: [
                { index: 1, answer: "ROLLUP", explanation: "ROLLUP 함수는 지정된 컬럼에 대해 소계와 총합 행을 추가로 생성합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "GROUP BY Extensions" }
        },
        {
            id: "dml-create-schema-01",
            type: "short",
            prompt: "데이터베이스 내에서 테이블, 뷰 등의 객체를 논리적으로 그룹화하여 관리하는 컨테이너인 '스키마(SCHEMA)'를 생성하는 명령어를 작성하시오.",
            acceptableAnswers: ["CREATE SCHEMA"],
            explanation: "스키마 생성 구문은 `CREATE SCHEMA 스키마명` 입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Schema" }
        },
        {
            id: "dml-identity-02",
            type: "mcq",
            prompt: "가장 최근에 생성된 IDENTITY 값을 확인하기 위해 사용하는 전역 변수는?",
            options: [
                "① @@VERSION",
                "② @@IDENTITY",
                "③ @@SERVERNAME",
                "④ @@SPID"
            ],
            correctIndex: 1,
            explanation: "`@@IDENTITY`는 현재 세션에서 마지막으로 생성된 ID 값을 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "IDENTITY Variables" }
        },
        {
            id: "join-pivot-01",
            type: "code-fill",
            prompt: "`pivotTest` 테이블에서 계절(`season`)을 열로 변환하여 수량(`amount`)의 합계를 구하는 PIVOT 구문입니다.",
            language: "sql",
            code: "SELECT *\nFROM pivotTest\nPIVOT ( SUM(amount) FOR season IN ([봄], [여름], [가을], [겨울]) ) AS pvt;",
            blanks: [],
            meta: { difficulty: "hard", skillTag: "[코드빈칸]", topic: "PIVOT Syntax" }
        },
        {
            id: "func-json-02",
            type: "essay",
            prompt: "`DENSE_RANK()`와 `ROW_NUMBER()`의 차이점을 순위 부여 방식을 기준으로 설명하시오.",
            rubric: [
                "ROW_NUMBER는 값의 중복 여부와 상관없이 1, 2, 3, 4 처럼 고유한 순번을 매김",
                "DENSE_RANK는 값이 같으면 같은 순위를 주되, 중간에 비어있는 번호 없이(1, 1, 2, ...) 순위를 매김"
            ],
            maxLength: 300,
            explanation: "ROW_NUMBER는 단순 일련번호, DENSE_RANK는 빽빽한(건너뜀 없는) 순위입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Window Functions" }
        }
    ]
};

if (typeof window !== 'undefined') window.set4 = set4;
