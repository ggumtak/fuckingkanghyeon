/**
 * Database Midterm Quiz - Set 17
 * File: quizzes/database/data/set17.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set17 = {
    setId: "set-17",
    questions: [
        {
            id: "db-set4-1",
            type: "code-fill",
            prompt: "다음은 `buyTbl`에 아이디 'JYP', 물품 '노트북'을 입력하는 쿼리입니다. `amount`(수량) 열에는 기본값(DEFAULT)을 적용하려 합니다.",
            language: "sql",
            code: "INSERT INTO buyTbl (userID, prodName, amount)\nVALUES ('JYP', '노트북', ( 1 ) );",
            blanks: [
                { index: 1, answer: "DEFAULT", explanation: "설정된 기본값을 입력하려면 `DEFAULT` 키워드를 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "INSERT" }
        },
        {
            id: "db-set4-2",
            type: "code-fill",
            prompt: "`userTbl`에서 키(`height`)가 NULL인 회원의 키를 170으로 일괄 수정하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET height = 170\nWHERE height ( 1 ) NULL;",
            blanks: [
                { index: 1, answer: "IS", explanation: "NULL 값인지 확인할 때는 `= NULL`이 아니라 `IS NULL`을 사용해야 합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "UPDATE" }
        },
        {
            id: "db-set4-3",
            type: "code-fill",
            prompt: "다음은 구매 수량(`amount`)이 5개 이상인 구매 기록을 모두 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM buyTbl\nWHERE amount ( 1 ) 5;",
            blanks: [
                { index: 1, answer: ">=", explanation: "5개 '이상'이므로 크거나 같다(`>=`) 연산자를 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "DELETE" }
        },
        {
            id: "db-set4-4",
            type: "code-fill",
            prompt: "두 문자열을 연결하여 하나로 만드는 함수를 사용하여 'SQL'과 'Server'를 붙이려고 합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT ( 1 )('SQL', 'Server');",
            blanks: [
                { index: 1, answer: "CONCAT", explanation: "문자열 연결 함수는 `CONCAT`입니다. (또는 `+` 연산자도 가능하지만 함수 형태는 CONCAT)" }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set4-5",
            type: "short",
            prompt: "다음 SQL 문의 실행 결과는?\n```sql\nSELECT ROUND(123.567, 0);\n```",
            acceptableAnswers: ["124", "124.0"],
            explanation: "소수점 첫째 자리에서 반올림하여 0번째 자리(일의 자리)까지 표시하므로 124가 됩니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set4-6",
            type: "short",
            prompt: "다음 SQL 문의 실행 결과는?\n```sql\nSELECT LTRIM('   Hello');\n```",
            acceptableAnswers: ["Hello"],
            explanation: "왼쪽 공백을 제거합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set4-7",
            type: "short",
            prompt: "다음 SQL 문의 실행 결과는?\n```sql\nSELECT MONTH('2022-05-05');\n```",
            acceptableAnswers: ["5", "05"],
            explanation: "날짜에서 월(Month) 부분을 추출합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set4-8",
            type: "essay",
            prompt: "`CHAR` 타입 대신 `VARCHAR` 타입을 사용하는 것이 저장 공간 효율 면에서 유리한 경우는 언제인지 설명하시오.",
            rubric: ["저장될 문자열의 길이가 들쑥날쑥할 때 (가변적일 때)", "고정 길이로 잡으면 낭비되는 공간이 많을 때"],
            maxLength: 150,
            explanation: "데이터 길이가 일정하지 않은 경우(예: 주소, 이름), CHAR는 최대 길이를 다 차지하지만 VARCHAR는 실제 길이만큼만 사용하여 효율적입니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set4-9",
            type: "essay",
            prompt: "`DATETIME` 데이터 타입은 날짜와 시간을 모두 저장합니다. 시간 정보가 필요 없고 날짜(연/월/일)만 저장하고 싶을 때 사용하는 최적의 데이터 타입은 무엇입니까?",
            rubric: ["DATE 타입"],
            maxLength: 100,
            explanation: "SQL Server 2008부터 도입된 `DATE` 타입을 사용하면 날짜만 3바이트로 저장할 수 있습니다.",
            meta: { skillTag: "[개념응용]", difficulty: "easy", topic: "DataType" }
        },
        {
            id: "db-set4-10",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 열 정의를 완성하세요.\n- 열 이름: `price`\n- 데이터 타입: 정수형(`INT`)\n- 제약 조건: 값을 입력하지 않으면 0이 입력되고, `NULL` 값은 허용하지 않음",
            language: "sql",
            code: "price INT ( 1 ) 0 NOT NULL",
            blanks: [
                { index: 1, answer: "DEFAULT", explanation: "기본값 설정은 `DEFAULT 값` 형식을 따릅니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set4-11",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 열 정의를 완성하세요.\n- 열 이름: `email`\n- 데이터 타입: 가변 길이 문자열 50자\n- 제약 조건: 테이블 내에서 중복된 이메일은 저장될 수 없음",
            language: "sql",
            code: "email VARCHAR(50) ( 1 )",
            blanks: [
                { index: 1, answer: "UNIQUE", explanation: "중복을 방지하는 유일 키 제약조건은 `UNIQUE`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set4-12",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 열 정의를 완성하세요.\n- 열 이름: `contents`\n- 데이터 타입: 2GB까지 저장 가능한 대용량 유니코드 텍스트",
            language: "sql",
            code: "contents ( 1 ) ( MAX )",
            blanks: [
                { index: 1, answer: "NVARCHAR", explanation: "대용량 유니코드 텍스트는 `NVARCHAR(MAX)`를 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set4-13",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하되, 조인 조건이 일치하는 데이터가 없더라도 `userTbl`의 모든 회원은 출력하고 싶습니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT U.name, B.prodName\nFROM userTbl U\n( 1 ) JOIN buyTbl B\nON U.userID = B.userID;",
            blanks: [
                { index: 1, answer: "LEFT", explanation: "왼쪽 테이블(userTbl)을 기준으로 전체 데이터를 출력하려면 `LEFT OUTER JOIN` (또는 LEFT JOIN)을 씁니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set4-14",
            type: "code-fill",
            prompt: "다음 쿼리는 `INNER JOIN`을 사용하여 아이디가 'KBS'인 사람의 구매 기록만 조회합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT *\nFROM userTbl U\nINNER JOIN buyTbl B\n( 1 ) U.userID = B.userID\nWHERE U.userID = 'KBS';",
            blanks: [
                { index: 1, answer: "ON", explanation: "조인 조건을 지정하는 절은 `ON`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set4-15",
            type: "short",
            prompt: "다음 SQL 문의 실행 결과로 나오는 행(Row)의 수는?\n(userTbl 행: 5개, buyTbl 행: 3개)\n```sql\nSELECT * FROM userTbl CROSS JOIN buyTbl;\n```",
            acceptableAnswers: ["15", "15개"],
            explanation: "5 * 3 = 15개의 행이 생성됩니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set4-16",
            type: "short",
            prompt: "다음 SQL에서 `GETDATE()` 함수가 반환하는 데이터 타입은 무엇입니까?",
            acceptableAnswers: ["DATETIME", "datetime"],
            explanation: "GETDATE()는 현재 날짜와 시간을 포함하는 DATETIME 값을 반환합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set4-17",
            type: "code-fill",
            prompt: "다음은 `userTbl`의 데이터를 삭제하지 않고 테이블의 모든 행을 빠르게 제거하는 구문입니다. (로그 최소화)",
            language: "sql",
            code: "( 1 ) TABLE userTbl;",
            blanks: [
                { index: 1, answer: "TRUNCATE", explanation: "테이블 데이터를 완전 삭제하는 빠른 명령어는 `TRUNCATE`입니다." }
            ],
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DELETE" }
        },
        {
            id: "db-set4-18",
            type: "code-fill",
            prompt: "`buyTbl`에서 `groupName`이 NULL인 데이터를 조회하는 쿼리입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT * FROM buyTbl\nWHERE groupName ( 1 ) NULL;",
            blanks: [
                { index: 1, answer: "IS", explanation: "NULL 비교는 `= NULL`이 아닌 `IS NULL`을 사용해야 합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set4-19",
            type: "essay",
            prompt: "SQL에서 `NULL`과 숫자 `0`, 그리고 `공백 문자('')`의 차이점을 설명하시오.",
            rubric: ["NULL은 '알 수 없음' 또는 '값 없음' 상태", "0은 숫자로서의 값, 공백은 문자열로서의 값 존재함"],
            maxLength: 150,
            explanation: "NULL은 데이터 자체가 존재하지 않음을 의미하며, 0이나 공백은 각각 숫자와 문자로 존재하는 실제 값입니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set4-20",
            type: "code-fill",
            prompt: "다음은 `userTbl`의 아이디를 참조하는 외래 키(`FK`)를 `buyTbl`에 추가하는 구문입니다.",
            language: "sql",
            code: "ALTER TABLE buyTbl\nADD CONSTRAINT FK_user_buy\n( 1 ) KEY (userID) REFERENCES userTbl(userID);",
            blanks: [
                { index: 1, answer: "FOREIGN", explanation: "외래 키 제약 조건은 `FOREIGN KEY`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "hard", topic: "CreateField" }
        },
        {
            id: "db-set4-21",
            type: "short",
            prompt: "다음 SQL 문의 결과는?\n```sql\nSELECT SQRT(100);\n```",
            acceptableAnswers: ["10"],
            explanation: "100의 제곱근은 10입니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set4-22",
            type: "short",
            prompt: "다음 SQL 문의 결과는?\n```sql\nSELECT CAST('20' AS INT) + 30;\n```",
            acceptableAnswers: ["50"],
            explanation: "문자 '20'이 정수 20으로 변환되어 30과 더해집니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set4-23",
            type: "code-fill",
            prompt: "다음은 `CASE` 문을 활용하여 점수가 90 이상이면 'A', 아니면 'B'를 출력하는 구문입니다.",
            language: "sql",
            code: "SELECT \n  CASE \n    WHEN score >= 90 THEN 'A'\n    ( 1 ) 'B'\n  END\nFROM userTbl;",
            blanks: [
                { index: 1, answer: "ELSE", explanation: "CASE 문에서 조건에 맞지 않을 때의 처리는 `ELSE` 절을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set4-24",
            type: "essay",
            prompt: "`SELF JOIN`(자체 조인)은 어떤 상황에서 주로 사용되는지 '조직도'나 '계층 구조'를 예로 들어 설명하시오.",
            rubric: ["자기 자신의 테이블을 참조할 때 사용", "직원의 상사(Manager)를 같은 직원 테이블에서 찾을 때 등"],
            maxLength: 150,
            explanation: "같은 테이블 내에 계층 관계(직원-상사 등)가 있을 때, 이를 연결하여 정보를 조회하기 위해 사용합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "hard", topic: "JOIN" }
        },
        {
            id: "db-set4-25",
            type: "code-fill",
            prompt: "다음은 2023년 1월 1일로부터 100일 후의 날짜를 계산하는 함수입니다.",
            language: "sql",
            code: "SELECT DATEADD( ( 1 ), 100, '2023-01-01');",
            blanks: [
                { index: 1, answer: "day", explanation: "일(Day) 단위로 더하기 위해 `day`(또는 `dd`)를 인자로 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set4-26",
            type: "code-fill",
            prompt: "`userTbl` 테이블의 이름을 `newTbl`로 변경하는 시스템 저장 프로시저입니다. (SQL Server)",
            language: "sql",
            code: "EXEC sp_rename 'userTbl', '( 1 )';",
            blanks: [
                { index: 1, answer: "newTbl", explanation: "변경할 새 이름을 인자로 넣습니다." }
            ],
            meta: { skillTag: "[개념응용]", difficulty: "hard", topic: "DataType" }
        },
        {
            id: "db-set4-27",
            type: "short",
            prompt: "다음 SQL 문의 결과 문자열은 무엇입니까?\n```sql\nSELECT SPACE(5) + 'A';\n```",
            acceptableAnswers: ["     A"],
            explanation: "공백 5칸 뒤에 A가 붙습니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set4-28",
            type: "code-fill",
            prompt: "다음은 `userTbl`에서 가장 키가 큰 사람의 키를 구하는 집계 함수입니다.",
            language: "sql",
            code: "SELECT ( 1 )(height) FROM userTbl;",
            blanks: [
                { index: 1, answer: "MAX", explanation: "최대값을 구하는 함수는 MAX입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set4-29",
            type: "essay",
            prompt: "`DROP TABLE` 명령어를 사용하면 테이블 안의 데이터만 삭제됩니까? 아니면 테이블 구조까지 삭제됩니까?",
            rubric: ["테이블 구조(객체)까지 모두 삭제됨"],
            maxLength: 50,
            explanation: "DROP TABLE은 테이블 객체 자체를 DB에서 제거하므로 구조와 데이터가 모두 사라집니다.",
            meta: { skillTag: "[개념응용]", difficulty: "easy", topic: "DELETE" }
        },
        {
            id: "db-set4-30",
            type: "code-fill",
            prompt: "다음은 `buyTbl`에서 `userID`와 `prodName`을 기준으로 그룹화하여 `amount`의 합계를 구하는 쿼리입니다.",
            language: "sql",
            code: "SELECT userID, prodName, SUM(amount)\nFROM buyTbl\n( 1 ) userID, prodName;",
            blanks: [
                { index: 1, answer: "GROUP BY", explanation: "그룹 집계를 위해 사용하는 절은 `GROUP BY`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "Function" }
        }
    ]
};

if (typeof window !== 'undefined') window.set17 = set17;
