/**
 * Database Midterm Quiz - Set 10 (Round 9)
 * File: quizzes/database/data/set10.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set10 = {
    setId: "set-10",
    questions: [
        {
            id: "r9-insert-01",
            type: "code-fill",
            prompt: "`userTbl`에 아이디 'Z1', 이름 '지원', 출생년도 2000, 지역 '제주'인 회원을 추가하는 구문입니다. 나머지 컬럼은 생략합니다.",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name, birthYear, addr)\nVALUES ('Z1', '지원', 2000, ( 1 ));",
            blanks: [
                { index: 1, answer: "'제주'", explanation: "지역(addr)은 문자열 데이터이므로 작은따옴표로 감쌉니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r9-insert-02",
            type: "mcq",
            prompt: "`INSERT` 문 수행 시 `VALUES` 대신 `SELECT` 문을 사용하여 데이터를 삽입하는 경우에 대한 설명으로 옳은 것은?",
            options: [
                "① 한 번에 한 행만 삽입할 수 있다.",
                "② 대상 테이블이 미리 존재해야 한다.",
                "③ 열의 개수와 데이터 타입이 일치하지 않아도 된다.",
                "④ `INSERT INTO ... SELECT` 구문은 표준 SQL이 아니다."
            ],
            correctIndex: 1,
            explanation: "`INSERT INTO ... SELECT`는 이미 만들어진 테이블에 대량의 데이터를 삽입할 때 사용하며, 열 개수와 타입이 호환되어야 합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r9-insert-03",
            type: "code-fill",
            prompt: "`buyTbl`에 데이터를 넣을 때 `price`와 `amount`를 곱한 값을 별도로 계산해서 넣는 것이 아니라, 값을 넣을 때 직접 연산하여 넣는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl (userID, prodName, price, amount)\nVALUES ('KBS', '티셔츠', 20 * 2, ( 1 ));",
            blanks: [
                { index: 1, answer: "2", explanation: "단가(20) * 2 로 입력했으므로 수량은 2가 논리적으로 적합합니다. VALUES 절 안에서도 연산이 가능합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r9-insert-04",
            type: "short",
            prompt: "기본키(PK) 제약조건이 설정된 `userID` 컬럼에 이미 존재하는 아이디 'KBS'를 다시 INSERT 하려고 하면 어떤 오류가 발생하는가? (키워드 중심 서술)",
            acceptableAnswers: ["PK 위배", "중복 키 오류", "Primary Key Violation"],
            explanation: "기본키는 중복된 값을 허용하지 않습니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r9-update-01",
            type: "code-fill",
            prompt: "`userTbl`에서 2013년 이후(`>= 2013`)에 가입한 회원의 전화번호 국번(`mobile1`)을 일괄적으로 '010'으로 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET mobile1 = '010'\nWHERE YEAR(mDate) ( 1 ) 2013;",
            blanks: [
                { index: 1, answer: ">=", explanation: "2013년 이후(포함)이므로 `>=` 연산자를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r9-update-02",
            type: "code-fill",
            prompt: "`buyTbl`의 데이터를 수정하되, `userTbl`에 없는 회원(탈퇴 회원 등)이 남긴 구매 기록의 `userID`를 'UNKNOWN'으로 변경하는 구문입니다. (서브쿼리 활용)",
            language: "sql",
            code: "UPDATE buyTbl\nSET userID = 'UNKNOWN'\nWHERE userID NOT IN ( SELECT ( 1 ) FROM userTbl );",
            blanks: [
                { index: 1, answer: "userID", explanation: "회원 테이블에 존재하는 ID 목록을 가져와야 합니다." }
            ],
            meta: { difficulty: "hard", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r9-update-03",
            type: "short",
            prompt: "`UPDATE` 문에서 값을 원래 값에 1을 더하는 형태(`col = col + 1`)가 가능한가? (O/X)",
            acceptableAnswers: ["O", "가능", "예"],
            explanation: "기존 컬럼 값을 참조하여 연산 후 다시 대입하는 것은 가능합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r9-delete-01",
            type: "code-fill",
            prompt: "`userTbl`에서 지역(`addr`)이 '경남'이면서 키(`height`)가 175 이상인 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl\nWHERE addr = '경남' ( 1 ) height >= 175;",
            blanks: [
                { index: 1, answer: "AND", explanation: "두 조건을 모두 만족해야 하므로 `AND` 연산자를 사용합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r9-delete-02",
            type: "mcq",
            prompt: "다음 중 `DELETE` 문에 대한 설명으로 틀린 것은?",
            options: [
                "① `WHERE` 절을 생략하면 테이블의 모든 데이터가 삭제된다.",
                "② 삭제된 데이터는 트랜잭션 로그를 통해 복구할 수 있다.",
                "③ `TOP` 구문과 함께 사용하여 일부만 삭제할 수 있다.",
                "④ 테이블의 정의(스키마)까지 모두 삭제된다."
            ],
            correctIndex: 3,
            explanation: "테이블의 정의까지 삭제하는 것은 `DROP TABLE`입니다. `DELETE`는 데이터만 삭제합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r9-func-01",
            type: "short",
            prompt: "다음 날짜 함수 쿼리의 결과는 몇 월인가? `SELECT MONTH('2025-05-05')`",
            acceptableAnswers: ["5", "5월"],
            explanation: "MONTH 함수는 월 부분을 정수로 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r9-func-02",
            type: "mcq",
            prompt: "`SELECT SUBSTRING('대한민국만세', 3, 2)`의 결과는?",
            options: ["① 대한", "② 민국", "③ 만세", "④ 국만"],
            correctIndex: 1,
            explanation: "3번째 글자('민')부터 2글자를 가져오므로 '민국'입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r9-func-03",
            type: "code-fill",
            prompt: "현재 날짜와 시간을 구하는 시스템 함수입니다.",
            language: "sql",
            code: "SELECT ( 1 )();",
            blanks: [
                { index: 1, answer: "GETDATE", explanation: "SQL Server에서 현재 시각은 `GETDATE()` 또는 `SYSDATETIME()`을 사용합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r9-dtype-desc-01",
            type: "short",
            prompt: "`NVARCHAR(10)` 데이터 타입에 한글 '가나다' 3글자를 저장하면, 실제 데이터가 차지하는 공간(바이트)은 대략 얼마인가? (메타데이터 제외, 순수 데이터 기준)",
            acceptableAnswers: ["6바이트", "6"],
            explanation: "유니코드(N)는 한 글자당 2바이트를 사용하므로 3글자는 6바이트입니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Data Types" }
        },
        {
            id: "r9-dtype-desc-02",
            type: "mcq",
            prompt: "SQL Server의 날짜/시간 데이터 타입 중, 날짜뿐만 아니라 시간까지 포함하며 가장 높은 정밀도(소수점 이하 초)를 지원하는 타입은?",
            options: ["① DATE", "② SMALLDATETIME", "③ DATETIME", "④ DATETIME2"],
            correctIndex: 3,
            explanation: "`DATETIME2`는 `DATETIME`보다 더 넓은 날짜 범위와 높은 정밀도를 지원합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r9-dtype-create-01",
            type: "short",
            prompt: "테이블 생성 시 `userID` 컬럼을 8글자 고정 길이 문자열로 정의하고 `PRIMARY KEY`로 설정하는 구문을 작성하시오.",
            acceptableAnswers: ["userID CHAR(8) PRIMARY KEY"],
            explanation: "CHAR(8)과 PRIMARY KEY 제약조건을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r9-dtype-create-02",
            type: "short",
            prompt: "컬럼 `height`를 작은 정수형(`SMALLINT`)으로 정의하고 NULL을 허용하지 않도록 설정하시오.",
            acceptableAnswers: ["height SMALLINT NOT NULL"],
            explanation: "SMALLINT NOT NULL 입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r9-join-01",
            type: "code-fill",
            prompt: "`buyTbl`을 기준으로 `userTbl`을 조인하되, 제품을 구매한 적이 있는 회원의 정보만 출력하는 `INNER JOIN` 구문입니다. (표준 구문)",
            language: "sql",
            code: "SELECT u.name, b.prodName\nFROM buyTbl b ( 1 ) JOIN userTbl u\nON b.userID = u.userID;",
            blanks: [
                { index: 1, answer: "INNER", explanation: "두 테이블의 교집합을 구하는 것은 INNER JOIN입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r9-join-02",
            type: "mcq",
            prompt: "다음 `CROSS JOIN` 구문에 대한 설명으로 옳은 것은?\n`SELECT * FROM userTbl, buyTbl`",
            options: [
                "① 오류가 발생하는 구문이다.",
                "② `userTbl`의 행 수와 `buyTbl`의 행 수를 더한 만큼 출력된다.",
                "③ `userTbl`의 모든 행과 `buyTbl`의 모든 행이 결합(곱하기)되어 출력된다.",
                "④ 두 테이블의 `userID`가 같은 행만 출력된다."
            ],
            correctIndex: 2,
            explanation: "콤마(,)로 테이블을 나열하고 조건이 없으면 암시적인 CROSS JOIN(상호 조인)이 수행됩니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r9-join-03",
            type: "essay",
            prompt: "`userTbl`과 `buyTbl`을 조인하여 '가입은 했으나 구매 기록이 없는 회원'의 목록을 뽑으려 합니다. `LEFT OUTER JOIN`과 `WHERE ... IS NULL`을 어떻게 조합해야 하는지 설명하시오.",
            rubric: [
                "`userTbl`을 왼쪽에 두고 `LEFT OUTER JOIN`을 수행한다",
                "조인 조건은 `userID`로 한다",
                "`WHERE` 절에서 `buyTbl`의 PK나 필수 컬럼(prodName 등)이 `NULL`인 것을 찾는다"
            ],
            maxLength: 300,
            explanation: "LEFT JOIN 결과 중 우측 테이블 값이 NULL인 행이 매칭되지 않은(구매 없는) 회원입니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r9-join-04",
            type: "short",
            prompt: "세 개의 테이블 A, B, C를 조인할 때 순서대로 A-B를 조인하고, 그 결과와 C를 조인합니다. 이때 사용하는 조인 연산자는 연속해서 무엇을 사용하는가? (가장 일반적인 내부 조인)",
            acceptableAnswers: ["INNER JOIN"],
            explanation: "`FROM A INNER JOIN B ON ... INNER JOIN C ON ...` 형태로 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set10 = set10;
