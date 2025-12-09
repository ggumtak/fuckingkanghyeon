/**
 * Database Midterm Quiz - Set 6 (Round 6)
 * File: quizzes/database/data/set6.js
 */
const set6 = {
    setId: "set-6",
    questions: [
        {
            id: "r6-insert-01",
            type: "code-fill",
            prompt: "`INSERT INTO ... SELECT` 구문을 사용하여 `buyTbl`의 데이터를 `buyTbl2`로 복사하되, '전자' 제품만 복사하는 구문을 완성하세요.",
            language: "sql",
            code: "INSERT INTO buyTbl2\nSELECT * FROM buyTbl WHERE groupName = ( 1 );",
            blanks: [
                { index: 1, answer: "'전자'", explanation: "문자열 리터럴 '전자'를 지정합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r6-insert-02",
            type: "short",
            prompt: "데이터 삽입 시 `UNIQUE` 제약조건을 위반하면 어떤 현상이 발생하는가?",
            acceptableAnswers: ["오류 발생", "삽입 실패", "에러"],
            explanation: "중복된 값은 UNIQUE 제약조건에 의해 거부되어 오류가 발생합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r6-insert-03",
            type: "code-fill",
            prompt: "특정 컬럼 목록을 명시하여 `userTbl`에 최소한의 정보(아이디, 이름)만 넣는 구문입니다.",
            language: "sql",
            code: "INSERT INTO userTbl ( ( 1 ), ( 2 ) ) VALUES ('NEW', '신입');",
            blanks: [
                { index: 1, answer: "userID", explanation: "아이디 컬럼명." },
                { index: 2, answer: "name", explanation: "이름 컬럼명." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r6-insert-04",
            type: "mcq",
            prompt: "`VALUES` 절에 여러 행의 데이터를 나열하여 한 번에 삽입하는 구문으로 옳은 것은?",
            options: [
                "① INSERT INTO tbl VALUES (1, 'A'), (2, 'B'), (3, 'C');",
                "② INSERT INTO tbl VALUES (1, 'A') AND (2, 'B');",
                "③ INSERT INTO tbl VALUES { (1, 'A'), (2, 'B') };",
                "④ INSERT MULTIPLE INTO tbl VALUES (1, 'A'), (2, 'B');"
            ],
            correctIndex: 0,
            explanation: "콤마(,)로 구분하여 여러 괄호 세트를 나열하면 다중 행 삽입이 가능합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r6-update-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 가격이 100 이상인 제품의 가격을 10% 할인(0.9배)해주는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl SET price = price * 0.9 WHERE price ( 1 ) 100;",
            blanks: [
                { index: 1, answer: ">=", explanation: "100 이상이므로 `>=` 연산자를 사용합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r6-update-02",
            type: "short",
            prompt: "UPDATE 문에서 여러 컬럼을 동시에 수정할 때 컬럼 간의 구분자는 무엇인가?",
            acceptableAnswers: ["콤마", ","],
            explanation: "`SET col1=val1, col2=val2` 처럼 콤마로 구분합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r6-update-03",
            type: "code-fill",
            prompt: "아이디가 'JYP'인 회원의 가입일(`mDate`)을 오늘 날짜(`GETDATE()`)로 수정하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl SET mDate = ( 1 ) WHERE userID = 'JYP';",
            blanks: [
                { index: 1, answer: "GETDATE()", explanation: "현재 날짜 함수를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r6-update-04",
            type: "essay",
            prompt: "`UPDATE` 문 실행 시 `TOP` 절을 함께 사용하면 어떤 효과가 있는지 설명하시오. (예: `UPDATE TOP(5) ...`)",
            rubric: ["조건에 맞는 행 중 상위 n개만 업데이트된다"],
            maxLength: 200,
            explanation: "일부 행만 테스트로 업데이트하거나 제한할 때 유용합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r6-delete-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 구매 수량(`amount`)이 5개 이상인 기록을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM buyTbl WHERE amount ( 1 ) 5;",
            blanks: [
                { index: 1, answer: ">=", explanation: "5개 이상은 `>=` 입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r6-delete-02",
            type: "short",
            prompt: "DELETE 문으로 삭제된 데이터는 복구가 가능한가? (트랜잭션 로그가 남아있다는 가정 하에)",
            acceptableAnswers: ["네", "가능하다", "예"],
            explanation: "DELETE는 로그를 기록하므로 롤백이 가능합니다. (TRUNCATE는 복구가 더 어렵거나 불가능할 수 있음)",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r6-delete-03",
            type: "mcq",
            prompt: "다음 중 가장 느리게 동작할 것으로 예상되는 삭제 명령은? (대용량 테이블 기준)",
            options: [
                "① TRUNCATE TABLE bigTbl",
                "② DROP TABLE bigTbl",
                "③ DELETE FROM bigTbl",
                "④ 모두 동일하다"
            ],
            correctIndex: 2,
            explanation: "DELETE는 행마다 로그를 기록하므로 대용량 처리 시 가장 느립니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r6-delete-04",
            type: "code-fill",
            prompt: "아이디가 'BBK'인 사용자의 구매 기록을 `buyTbl`에서 모두 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE ( 1 ) buyTbl WHERE userID = 'BBK';",
            blanks: [
                { index: 1, answer: "FROM", explanation: "DELETE 문법은 `DELETE FROM 테이블` 입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r6-func-01",
            type: "short",
            prompt: "`SQRT(36)`의 결과값은?",
            acceptableAnswers: ["6"],
            explanation: "제곱근 함수입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r6-func-02",
            type: "mcq",
            prompt: "랜덤한 0~1 사이의 실수를 반환하는 함수는?",
            options: ["① RAND()", "② RANDOM()", "③ NEWID()", "④ ROUND()"],
            correctIndex: 0,
            explanation: "SQL Server의 랜덤 함수는 RAND()입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r6-func-03",
            type: "code-fill",
            prompt: "날짜 '2022-12-25'에서 '12'월만 추출하는 함수를 완성하세요.",
            language: "sql",
            code: "SELECT ( 1 )('2022-12-25');",
            blanks: [
                { index: 1, answer: "MONTH", explanation: "MONTH() 함수는 월 부분을 정수로 반환합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r6-func-04",
            type: "short",
            prompt: "`REVERSE('SQL')`의 결과는?",
            acceptableAnswers: ["LQS", "'LQS'"],
            explanation: "문자열을 거꾸로 뒤집습니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r6-dtype-desc-01",
            type: "mcq",
            prompt: "`ROWVERSION` 데이터 타입에 대한 설명으로 옳은 것은?",
            options: [
                "① 날짜를 저장한다.",
                "② 데이터베이스 전체에서 유일한 고유번호를 저장한다.",
                "③ 행이 수정될 때마다 자동으로 변경되는 이진 숫자이다.",
                "④ 사용자가 직접 값을 입력해야 한다."
            ],
            correctIndex: 2,
            explanation: "자동으로 변경되는 버전 관리용 이진 데이터입니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r6-dtype-desc-02",
            type: "short",
            prompt: "`JSON` 데이터를 저장하기 위한 전용 데이터 타입이 SQL Server(표준)에 별도로 존재하는가? (예/아니오)",
            acceptableAnswers: ["아니오", "No"],
            explanation: "SQL Server는 JSON을 NVARCHAR 등에 저장하고 JSON 함수로 처리합니다(최신 버전 기준 별도 타입 없음, 텍스트로 저장). *참고: 일부 최신 DB는 지원하나 교재 범위 내에서는 주로 NVARCHAR 사용을 언급함.*",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r6-dtype-desc-03",
            type: "essay",
            prompt: "`CAST`와 `CONVERT`의 차이점을 서술하시오.",
            rubric: ["기능은 거의 같으나 CONVERT는 날짜 포맷 등 스타일 옵션을 지정할 수 있다", "CAST는 ANSI 표준이고 CONVERT는 SQL Server 전용이다"],
            maxLength: 200,
            explanation: "CONVERT가 스타일 지정 등 기능이 더 많습니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r6-dtype-desc-04",
            type: "short",
            prompt: "참/거짓을 저장하는 `BIT` 타입에 `2`를 넣으면 어떻게 저장되는가?",
            acceptableAnswers: ["1"],
            explanation: "0이 아닌 숫자는 1로 변환되어 저장됩니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Data Types" }
        },
        {
            id: "r6-dtype-create-01",
            type: "short",
            prompt: "컬럼 `rank`를 순위를 저장하는 정수형으로 정의하되, NULL을 허용하세요.",
            acceptableAnswers: ["rank INT NULL", "rank INT"],
            explanation: "NULL 허용이 기본값이지만 명시적으로 NULL을 적을 수도 있습니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r6-dtype-create-02",
            type: "short",
            prompt: "컬럼 `code`를 고정 길이 2자리 문자열 `CHAR(2)`로 정의하고, 기본값으로 'KR'을 설정하시오.",
            acceptableAnswers: ["code CHAR(2) DEFAULT 'KR'"],
            explanation: "CHAR(2) 뒤에 DEFAULT 'KR'을 붙입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r6-dtype-create-03",
            type: "short",
            prompt: "컬럼 `weight`를 실수형 `FLOAT`로 정의하시오.",
            acceptableAnswers: ["weight FLOAT"],
            explanation: "FLOAT 입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r6-dtype-create-04",
            type: "short",
            prompt: "컬럼 `ipAddr`를 가변 문자열 15자리로 정의하시오.",
            acceptableAnswers: ["ipAddr VARCHAR(15)"],
            explanation: "VARCHAR(15) 입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r6-join-01",
            type: "code-fill",
            prompt: "`userTbl`의 모든 회원을 출력하되, 구매 기록이 있으면 구매 물품을, 없으면 NULL을 출력하는 `LEFT JOIN` 구문입니다.",
            language: "sql",
            code: "SELECT u.name, b.prodName\nFROM userTbl u ( 1 ) OUTER JOIN buyTbl b\nON u.userID = b.userID;",
            blanks: [
                { index: 1, answer: "LEFT", explanation: "왼쪽 테이블 전체 포함은 LEFT OUTER JOIN입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r6-join-02",
            type: "mcq",
            prompt: "`RIGHT OUTER JOIN`은 어떤 테이블의 데이터를 모두 살리는가?",
            options: ["① 왼쪽 테이블", "② 오른쪽 테이블", "③ 양쪽 테이블", "④ 교집합만"],
            correctIndex: 1,
            explanation: "오른쪽(RIGHT) 테이블 기준입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r6-join-03",
            type: "short",
            prompt: "테이블 A와 B를 조인하는 조건이 `A.ID = B.ID` 일 때, 이것을 무슨 조인(동등 조인 등)이라고 부르는가?",
            acceptableAnswers: ["동등 조인", "Equi Join", "내부 조인"],
            explanation: "등호(=)를 사용하는 조인을 동등 조인(Equi Join)이라고 하며 가장 일반적인 형태입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r6-join-04",
            type: "essay",
            prompt: "자체 조인(Self Join)을 사용하여 '직원' 테이블에서 '매니저 이름'을 함께 출력하려면 어떻게 쿼리를 구성해야 하는지 설명하시오.",
            rubric: ["직원 테이블을 A, 매니저용 직원 테이블을 B로 별칭을 준다", "A.매니저ID = B.직원ID 조건으로 조인한다"],
            maxLength: 200,
            explanation: "같은 테이블을 두 번 불러와 별칭을 다르게 주고 조인 조건을 겁니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set6 = set6;
