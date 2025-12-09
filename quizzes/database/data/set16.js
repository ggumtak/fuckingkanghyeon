/**
 * Database Midterm Quiz - Set 16
 * File: quizzes/database/data/set16.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set16 = {
    setId: "set-16",
    questions: [
        {
            id: "db-set3-1",
            type: "code-fill",
            prompt: "다음은 `userTbl`에 아이디 'YJS', 이름 '유재석'인 회원을 추가하는 쿼리입니다. 이메일(`email`)은 아직 없어서 `NULL`을 명시적으로 입력하려 합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "INSERT INTO userTbl ( userID, name, email )\nVALUES ( 'YJS', '유재석', ( 1 ) );",
            blanks: [
                { index: 1, answer: "NULL", explanation: "데이터가 없을 때 명시적으로 NULL을 입력하려면 `NULL` 키워드를 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "INSERT" }
        },
        {
            id: "db-set3-2",
            type: "code-fill",
            prompt: "다음은 `buyTbl`에 데이터를 입력할 때, 열 이름을 생략하고 모든 값을 순서대로 입력하는 방식입니다. `buyTbl`의 두 번째 열인 `userID`에 'KHD'를 입력하세요.",
            language: "sql",
            code: "INSERT INTO buyTbl VALUES ( 1, ( 1 ), '운동화', NULL, 30, 2 );",
            blanks: [
                { index: 1, answer: "'KHD'", explanation: "문자열 데이터는 반드시 작은따옴표(')로 감싸야 합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "INSERT" }
        },
        {
            id: "db-set3-3",
            type: "code-fill",
            prompt: "이미 존재하는 `userTbl_Backup` 테이블에 `userTbl`의 모든 데이터를 복사해 넣는 `INSERT ... SELECT` 구문입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "INSERT ( 1 ) userTbl_Backup\nSELECT * FROM userTbl;",
            blanks: [
                { index: 1, answer: "INTO", explanation: "데이터를 삽입할 목적지 테이블 앞에는 `INTO`를 붙여야 합니다." }
            ],
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "INSERT" }
        },
        {
            id: "db-set3-4",
            type: "code-fill",
            prompt: "`buyTbl`에서 가격(`price`)이 100 이상인 물품들의 가격을 10% 할인된 가격으로 일괄 수정하는 쿼리입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price * 0.9\n( 1 ) price >= 100;",
            blanks: [
                { index: 1, answer: "WHERE", explanation: "특정 조건(가격 100 이상)을 만족하는 행만 수정하기 위해 WHERE 절을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "UPDATE" }
        },
        {
            id: "db-set3-5",
            type: "code-fill",
            prompt: "아이디가 'BBK'인 회원의 주소(`addr`)를 '부산'으로, 휴대폰 국번(`mobile1`)을 '010'으로 함께 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET addr = '부산' ( 1 ) mobile1 = '010'\nWHERE userID = 'BBK';",
            blanks: [
                { index: 1, answer: ",", explanation: "여러 열을 수정할 때는 쉼표(,)로 구분하여 나열합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "UPDATE" }
        },
        {
            id: "db-set3-6",
            type: "code-fill",
            prompt: "`userTbl`에서 가입일(`mDate`)이 '2010-01-01' 이전인 회원들을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl\nWHERE mDate ( 1 ) '2010-01-01';",
            blanks: [
                { index: 1, answer: "<", explanation: "이전 날짜를 의미하므로 작다(<) 연산자를 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "DELETE" }
        },
        {
            id: "db-set3-7",
            type: "short",
            prompt: "다음 함수 실행 결과를 적으시오.\n```sql\nSELECT LEN('SQL Server');\n```",
            acceptableAnswers: ["10"],
            explanation: "공백을 포함하여 S,Q,L, ,S,e,r,v,e,r 총 10글자입니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set3-8",
            type: "short",
            prompt: "다음 함수 실행 결과를 적으시오.\n```sql\nSELECT LEFT('Database', 4);\n```",
            acceptableAnswers: ["Data"],
            explanation: "왼쪽에서부터 4글자인 'Data'를 반환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set3-9",
            type: "short",
            prompt: "다음 함수 실행 결과를 적으시오.\n```sql\nSELECT ABS(-500);\n```",
            acceptableAnswers: ["500"],
            explanation: "ABS는 절대값을 구하는 함수입니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set3-10",
            type: "short",
            prompt: "다음 함수 실행 결과를 적으시오.\n```sql\nSELECT CEILING(12.3);\n```",
            acceptableAnswers: ["13"],
            explanation: "CEILING은 소수점 이하를 무조건 올림하여 정수를 반환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set3-11",
            type: "short",
            prompt: "다음 함수 실행 결과를 적으시오.\n```sql\nSELECT YEAR('2024-12-25');\n```",
            acceptableAnswers: ["2024"],
            explanation: "YEAR 함수는 날짜 데이터에서 연도 부분만 추출합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set3-12",
            type: "short",
            prompt: "다음 함수 실행 결과를 적으시오.\n```sql\nSELECT ISNULL(NULL, '없음');\n```\n(SQL Server 기준)",
            acceptableAnswers: ["없음", "'없음'"],
            explanation: "ISNULL(A, B) 함수는 A가 NULL이면 B를 반환하고, 아니면 A를 반환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set3-13",
            type: "essay",
            prompt: "`VARCHAR`와 `NVARCHAR` 데이터 타입의 차이점을 '유니코드 지원 여부'와 '저장 용량' 관점에서 설명하시오.",
            rubric: ["VARCHAR는 영문 1바이트/한글 2바이트 등 가변이지만 유니코드를 완벽 지원하지 않을 수 있음", "NVARCHAR는 유니코드를 지원하며 문자당 항상 2바이트를 사용함을 언급"],
            maxLength: 150,
            explanation: "NVARCHAR는 다국어(유니코드) 지원을 위해 문자당 2바이트를 사용하며, VARCHAR는 비유니코드 문자열을 저장합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set3-14",
            type: "essay",
            prompt: "테이블 생성 시 `PRIMARY KEY`로 지정된 열이 자동으로 갖게 되는 두 가지 제약조건 속성은 무엇입니까?",
            rubric: ["NOT NULL (널 값 불가)", "UNIQUE (중복 값 불가)"],
            maxLength: 100,
            explanation: "기본 키는 식별자이므로 값이 반드시 존재해야 하며(NOT NULL), 중복될 수 없습니다(UNIQUE).",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set3-15",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 필드 정의를 완성하세요.\n- 열 이름: `age`\n- 데이터 타입: 0~255 사이의 작은 양수를 저장하는 정수형\n- 제약 조건: 생략 시 기본값 0",
            language: "sql",
            code: "age TINYINT ( 1 ) 0",
            blanks: [
                { index: 1, answer: "DEFAULT", explanation: "기본값을 설정하는 키워드는 DEFAULT입니다. 0~255 범위는 TINYINT가 적합합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set3-16",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 필드 정의를 완성하세요.\n- 열 이름: `score`\n- 데이터 타입: 소수점 둘째 자리까지 저장하는 실수형\n- 제약 조건: 0 이상 100 이하의 값만 입력 가능",
            language: "sql",
            code: "score DECIMAL(5,2) ( 1 ) ( score >= 0 AND score <= 100 )",
            blanks: [
                { index: 1, answer: "CHECK", explanation: "값의 범위를 제한하여 유효성을 검사하려면 CHECK 제약조건을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "hard", topic: "CreateField" }
        },
        {
            id: "db-set3-17",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 필드 정의를 완성하세요.\n- 열 이름: `prodName`\n- 데이터 타입: 고정 길이 문자열 10자 (한글 저장 가능)",
            language: "sql",
            code: "prodName ( 1 )(10)",
            blanks: [
                { index: 1, answer: "NCHAR", explanation: "한글 저장(유니코드)을 위한 N 접두사와 고정 길이 CHAR를 합쳐 NCHAR를 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set3-18",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 필드 정의를 완성하세요.\n- 열 이름: `regTime`\n- 데이터 타입: 날짜와 시간 모두 저장\n- 제약 조건: 빈 값(NULL)을 허용하지 않음",
            language: "sql",
            code: "regTime DATETIME ( 1 ) NULL",
            blanks: [
                { index: 1, answer: "NOT", explanation: "NULL을 허용하지 않으려면 NOT NULL을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set3-19",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하여, 구매 기록이 없는 회원의 목록을 뽑으려 합니다. 다음 쿼리의 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT U.name\nFROM userTbl U\nLEFT OUTER JOIN buyTbl B\nON U.userID = B.userID\nWHERE B.prodName IS ( 1 );",
            blanks: [
                { index: 1, answer: "NULL", explanation: "LEFT JOIN 결과에서 오른쪽 테이블(buyTbl)의 컬럼이 NULL인 행은 매칭되는 구매 기록이 없다는 뜻입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "JOIN" }
        },
        {
            id: "db-set3-20",
            type: "code-fill",
            prompt: "다음은 `buyTbl`을 `userTbl`과 내부 조인(INNER JOIN)하는 구문입니다. `ON` 절의 조건을 완성하세요.",
            language: "sql",
            code: "SELECT *\nFROM buyTbl B\nINNER JOIN userTbl U\n( 1 ) B.userID = U.userID",
            blanks: [
                { index: 1, answer: "ON", explanation: "조인 조건을 기술하는 키워드는 ON입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set3-21",
            type: "short",
            prompt: "다음 조인 구문의 결과 행 개수는 몇 개입니까?\n(userTbl: 10행, buyTbl: 5행)\n```sql\nSELECT * FROM userTbl CROSS JOIN buyTbl;\n```",
            acceptableAnswers: ["50", "50개"],
            explanation: "CROSS JOIN은 두 테이블의 행 개수를 곱한 만큼의 결과(카테시안 곱)를 생성합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set3-22",
            type: "essay",
            prompt: "`UNION`과 `UNION ALL`의 차이점을 '중복 데이터 처리' 관점에서 설명하시오.",
            rubric: ["UNION은 중복된 행을 제거하고 보여준다.", "UNION ALL은 중복된 행까지 모두 포함하여 보여준다."],
            maxLength: 150,
            explanation: "UNION은 합집합을 구하며 중복을 제거하지만, UNION ALL은 단순히 결과를 이어 붙여 중복을 포함합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "JOIN" }
        },
        {
            id: "db-set3-23",
            type: "short",
            prompt: "다음 SQL에서 `CONVERT` 함수를 사용해 정수 10을 실수(FLOAT)로 변환한 결과를 예측하시오.\n```sql\nSELECT CONVERT(FLOAT, 10);\n```",
            acceptableAnswers: ["10", "10.0"],
            explanation: "정수 10이 실수형 10(또는 10.0)으로 변환됩니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set3-24",
            type: "short",
            prompt: "다음 SQL 실행 결과는?\n```sql\nSELECT REVERSE('ABCDE');\n```",
            acceptableAnswers: ["EDCBA"],
            explanation: "문자열을 거꾸로 뒤집습니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set3-25",
            type: "short",
            prompt: "다음 SQL 실행 결과는?\n```sql\nSELECT POWER(2, 3);\n```",
            acceptableAnswers: ["8"],
            explanation: "2의 3제곱은 8입니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set3-26",
            type: "essay",
            prompt: "SQL Server의 `IDENTITY(1,1)` 속성을 가진 열에 임의의 값을 직접 `INSERT` 하려고 하면 에러가 발생합니다. 이를 해결하기 위해 실행해야 하는 명령어는 무엇입니까?",
            rubric: ["SET IDENTITY_INSERT 테이블명 ON"],
            maxLength: 100,
            explanation: "`SET IDENTITY_INSERT [테이블명] ON`을 실행하면 자동 증가 열에도 직접 값을 넣을 수 있습니다.",
            meta: { skillTag: "[개념응용]", difficulty: "hard", topic: "INSERT" }
        },
        {
            id: "db-set3-27",
            type: "code-fill",
            prompt: "다음은 테이블의 구조를 수정하여 새로운 열 `birth`를 추가하는 구문입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "ALTER ( 1 ) userTbl\nADD birth INT;",
            blanks: [
                { index: 1, answer: "TABLE", explanation: "테이블 구조 변경 명령어는 `ALTER TABLE`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set3-28",
            type: "code-fill",
            prompt: "다음은 서브쿼리를 이용한 `UPDATE` 구문입니다. `buyTbl`의 평균 가격보다 비싼 물품의 가격을 1000으로 수정하세요.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = 1000\nWHERE price > ( SELECT ( 1 )(price) FROM buyTbl );",
            blanks: [
                { index: 1, answer: "AVG", explanation: "평균값을 구하는 집계 함수는 `AVG`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "hard", topic: "UPDATE" }
        },
        {
            id: "db-set3-29",
            type: "short",
            prompt: "테이블을 삭제할 때 사용하는 명령어 `DROP`, `DELETE`, `TRUNCATE` 중, 테이블 자체를 완전히 없애버리는(스키마 포함) 명령어는 무엇입니까?",
            acceptableAnswers: ["DROP", "DROP TABLE"],
            explanation: "DROP TABLE은 데이터뿐만 아니라 테이블 정의 자체를 삭제합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DELETE" }
        },
        {
            id: "db-set3-30",
            type: "essay",
            prompt: "`JOIN` 조건절에 `ON` 대신 `WHERE`를 사용하여 두 테이블을 콤마(,)로 나열하는 방식(예: FROM A, B WHERE A.id=B.id)은 어떤 조인과 동일합니까?",
            rubric: ["INNER JOIN (내부 조인)"],
            maxLength: 100,
            explanation: "과거 표준 방식이나 오라클 방식에서 콤마로 나열하고 WHERE절에 조건을 주는 것은 명시적 INNER JOIN과 동일하게 동작합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set16 = set16;
