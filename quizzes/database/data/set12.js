/**
 * Database Midterm Quiz - Set 12
 * File: quizzes/database/data/set12.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set12 = {
    setId: "set-12",
    questions: [
        {
            id: "db-set2-1",
            type: "code-fill",
            prompt: "다음은 `buyTbl`에서 `userID`가 'JYP'인 회원의 구매 수량(`amount`)을 5개로 수정하는 구문입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "UPDATE buyTbl\nSET amount = 5\n( 1 ) userID = 'JYP';",
            blanks: [
                { index: 1, answer: "WHERE", explanation: "특정 조건에 맞는 행만 수정하려면 WHERE 절을 사용해야 합니다. 생략 시 모든 데이터가 수정됩니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "UPDATE" }
        },
        {
            id: "db-set2-2",
            type: "code-fill",
            prompt: "다음은 `userTbl`에서 주소(`addr`)가 '서울'이 아닌 회원들을 삭제하는 구문입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "DELETE FROM userTbl\nWHERE addr ( 1 ) '서울';",
            blanks: [
                { index: 1, answer: "<>", explanation: "SQL에서 '같지 않다'를 표현하는 연산자는 `<>` 또는 `!=`입니다. (표준 SQL에서는 <>를 주로 사용)" }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "DELETE" }
        },
        {
            id: "db-set2-3",
            type: "code-fill",
            prompt: "`userTbl`의 데이터를 기반으로 `userTbl_Backup`이라는 테이블을 생성하면서 동시에 데이터를 복사하려고 합니다. 빈칸을 완성하세요.",
            language: "sql",
            code: "SELECT *\n( 1 ) userTbl_Backup\nFROM userTbl;",
            blanks: [
                { index: 1, answer: "INTO", explanation: "`SELECT ... INTO ... FROM` 구문은 쿼리 결과를 새 테이블로 만들어 저장할 때 사용합니다." }
            ],
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "INSERT" }
        },
        {
            id: "db-set2-4",
            type: "code-fill",
            prompt: "특정 열(column)의 값을 명시하지 않고 `INSERT` 할 때, 자동으로 1씩 증가하는 숫자가 들어가도록 설정된 열 속성을 무엇이라 합니까?",
            language: "sql",
            code: "CREATE TABLE buyTbl (\n    num INT ( 1 )(1,1),\n    userID CHAR(8)\n);",
            blanks: [
                { index: 1, answer: "IDENTITY", explanation: "IDENTITY(시작값, 증가값) 속성은 데이터 삽입 시 자동으로 일련번호를 생성해줍니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set2-5",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n```sql\nSELECT CEILING(4.2);\n```",
            acceptableAnswers: ["5"],
            explanation: "CEILING() 함수는 소수점 이하 값이 있으면 무조건 올림하여 정수를 반환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set2-6",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n```sql\nSELECT SUBSTRING('Hello World', 7, 5);\n```\n(작은따옴표 없이 텍스트만 입력하세요)",
            acceptableAnswers: ["World"],
            explanation: "SUBSTRING(문자열, 시작위치, 길이) 함수는 7번째 글자인 'W'부터 5글자를 가져옵니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set2-7",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n```sql\nSELECT LTRIM('   SQL');\n```\n(공백 처리에 유의하여 적으시오)",
            acceptableAnswers: ["SQL"],
            explanation: "LTRIM() 함수는 문자열 왼쪽의 공백을 제거합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set2-8",
            type: "short",
            prompt: "오늘 날짜가 '2025-12-25'라고 가정할 때, 다음 함수의 결과값은 무엇입니까?\n\n```sql\nSELECT DAY(GETDATE());\n```",
            acceptableAnswers: ["25"],
            explanation: "DAY() 함수는 날짜 데이터에서 '일(Day)' 부분만 정수로 반환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set2-9",
            type: "essay",
            prompt: "데이터 타입 `DATETIME`과 `DATE`의 가장 큰 차이점을 저장되는 '정보의 범위' 측면에서 설명하시오.",
            rubric: [
                "DATETIME은 날짜와 시, 분, 초(시간)를 모두 저장함",
                "DATE는 시간 정보 없이 연, 월, 일(날짜)만 저장함"
            ],
            maxLength: 150,
            explanation: "DATETIME은 날짜와 시간을 모두 포함하지만, DATE는 오직 날짜(연-월-일) 정보만 저장합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "easy", topic: "DataType" }
        },
        {
            id: "db-set2-10",
            type: "essay",
            prompt: "SQL Server의 `BIGINT` 데이터 타입이 `INT` 데이터 타입보다 더 필요한 경우는 언제인지 설명하시오.",
            rubric: [
                "INT의 범위를 넘어서는 매우 큰 정수를 저장할 때 필요함",
                "예: 약 21억 이상의 데이터 건수나 금액 등을 다룰 때"
            ],
            maxLength: 200,
            explanation: "INT는 약 ±21억까지만 저장 가능하므로, 이를 초과하는 매우 큰 숫자(ID값, 큰 금액 등)를 저장할 때 BIGINT를 사용합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set2-11",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 열(Column) 정의를 완성하세요.\n- 열 이름: `prodCode`\n- 데이터 타입: **고정 길이** 문자열 3자리\n- 제약 조건: `prodID` 열과 함께 묶어서 **기본 키**로 설정 (테이블 생성 구문 내부가 아닌, ALTER 구문 사용 가정)",
            language: "sql",
            code: "ALTER TABLE buyTbl\nADD CONSTRAINT PK_buyTbl_CodeID\nPRIMARY KEY ( prodCode, ( 1 ) );",
            blanks: [
                { index: 1, answer: "prodID", explanation: "두 개 이상의 열을 합쳐서 기본 키(복합 키)로 만들 때는 괄호 안에 열 이름들을 쉼표로 나열합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "hard", topic: "CreateField" }
        },
        {
            id: "db-set2-12",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 열 정의를 완성하세요.\n- 열 이름: `age`\n- 데이터 타입: 정수형(`INT`)\n- 제약 조건: 입력되는 나이는 반드시 **0보다 커야 한다**는 조건 추가",
            language: "sql",
            code: "age INT CHECK ( age ( 1 ) 0 )",
            blanks: [
                { index: 1, answer: ">", explanation: "데이터의 유효성 검사를 위해 CHECK 제약조건을 사용하며, 0보다 커야 하므로 `>` 연산자를 씁니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set2-13",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 열 정의를 완성하세요.\n- 열 이름: `homepage`\n- 데이터 타입: **매우 긴 텍스트** (예: 게시글 본문)를 저장할 수 있는 유니코드 지원 타입 (최대 크기 자동)",
            language: "sql",
            code: "homepage NVARCHAR( ( 1 ) )",
            blanks: [
                { index: 1, answer: "MAX", explanation: "SQL Server에서 대용량 텍스트를 저장할 때는 `(MAX)`를 크기로 지정합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-set2-14",
            type: "code-fill",
            prompt: "다음은 `userTbl`(회원)을 기준으로 `buyTbl`(구매)을 조인하되, **구매 이력이 없는 회원**도 출력되게 하고 싶습니다. 빈칸에 들어갈 조인 종류를 적으세요.",
            language: "sql",
            code: "SELECT U.name, B.prodName\nFROM buyTbl B\n( 1 ) OUTER JOIN userTbl U\nON B.userID = U.userID;",
            blanks: [
                { index: 1, answer: "RIGHT", explanation: "기준이 되는 `userTbl`이 오른쪽에 위치해 있으므로, 오른쪽 테이블의 모든 데이터를 출력하려면 `RIGHT` OUTER JOIN을 써야 합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "JOIN" }
        },
        {
            id: "db-set2-15",
            type: "short",
            prompt: "두 테이블을 연결(JOIN)할 때, 양쪽 테이블에 **동일한 이름의 열(Column)**이 존재한다면, `SELECT` 절에서 해당 열을 부를 때 반드시 무엇을 함께 써주어야 합니까?",
            acceptableAnswers: ["테이블이름", "별칭", "alias", "테이블명"],
            explanation: "열 이름이 중복될 경우, 어느 테이블의 열인지 식별하기 위해 `테이블명.열이름` 또는 `별칭.열이름` 형식을 사용해야 합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-set2-16",
            type: "code-fill",
            prompt: "회원 테이블(`userTbl`)에 데이터를 입력할 때 `birthYear` 열을 생략하면 자동으로 **2000**이 입력되게 하려 합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "CREATE TABLE userTbl (\n    ...\n    birthYear INT ( 1 ) 2000,\n    ...\n);",
            blanks: [
                { index: 1, answer: "DEFAULT", explanation: "값이 입력되지 않았을 때의 기본값을 지정하는 키워드는 `DEFAULT`입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "CreateField" }
        },
        {
            id: "db-set2-17",
            type: "essay",
            prompt: "`CHECK` 제약 조건의 역할을 설명하고, 이것이 데이터 무결성에 어떻게 기여하는지 서술하시오.",
            rubric: [
                "입력되는 데이터가 특정 조건(범위, 형식 등)을 만족하는지 검사함",
                "잘못된 데이터(예: 음수 나이, 잘못된 점수 등) 입력을 방지하여 무결성을 유지함"
            ],
            maxLength: 200,
            explanation: "CHECK 제약 조건은 데이터 입력 시 조건을 검사하여, 조건에 맞지 않는 데이터가 저장되는 것을 원천적으로 차단합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-set2-18",
            type: "code-fill",
            prompt: "SQL Server에서 날짜 형식인 문자열 '2022-10-20'을 `DATE` 타입으로 변환하는 함수 구문을 완성하세요.",
            language: "sql",
            code: "SELECT ( 1 )('2022-10-20' AS DATE);",
            blanks: [
                { index: 1, answer: "CAST", explanation: "데이터 타입을 변환하는 표준 SQL 함수는 `CAST`입니다. (`CONVERT`를 쓸 수도 있지만 구문 구조상 `AS`를 쓰는 것은 `CAST`입니다.)" }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-set2-19",
            type: "short",
            prompt: "다음 SQL 실행 결과 예측:\n\n```sql\nSELECT YEAR('2024-05-05');\n```",
            acceptableAnswers: ["2024"],
            explanation: "YEAR() 함수는 날짜에서 연도 부분만 정수로 추출합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-set2-20",
            type: "essay",
            prompt: "`FOREIGN KEY`(외래 키) 제약 조건을 설정할 때, 참조되는 테이블(부모 테이블)의 열은 반드시 어떤 제약 조건을 가지고 있어야 합니까?",
            rubric: [
                "PRIMARY KEY(기본 키) 또는 UNIQUE(고유 키) 제약 조건이 설정되어 있어야 함",
                "참조되는 값이 유일해야 식별이 가능하기 때문임"
            ],
            maxLength: 150,
            explanation: "외래 키가 참조하는 열은 반드시 PK(기본 키)이거나 UNIQUE(고유 키)여야 정확한 참조가 가능합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "hard", topic: "DataType" }
        }
    ]
};

if (typeof window !== 'undefined') window.set12 = set12;
