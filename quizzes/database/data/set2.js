/**
 * Database Midterm Quiz - Set 2 (Round 2)
 * File: quizzes/database/data/set2.js
 */
const set2 = {
    setId: "set-2",
    questions: [
        {
            id: "dml-insert-03",
            type: "code-fill",
            prompt: "`buyTbl`에 새로운 구매 내역을 추가하려 합니다. `num`(순번)은 자동 증가(IDENTITY) 열이라고 가정할 때, 이를 제외하고 데이터를 삽입하는 구문을 완성하세요.\n- 아이디: 'JYP'\n- 제품명: '이어폰'\n- 분류: '전자'\n- 단가: 50\n- 수량: 1",
            language: "sql",
            code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES ( ( 1 ), ( 2 ), ( 3 ), 50, 1 );",
            blanks: [
                { index: 1, answer: "'JYP'", explanation: "사용자 아이디는 문자열이므로 작은따옴표로 감싸야 합니다." },
                { index: 2, answer: "'이어폰'", explanation: "제품명 문자열입니다." },
                { index: 3, answer: "'전자'", explanation: "분류 문자열입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT Syntax" }
        },
        {
            id: "dml-update-03",
            type: "code-fill",
            prompt: "`userTbl`에서 아이디가 'LSG'인 회원의 전화번호 국번(`mobile1`)을 '011'로, 전화번호 뒷자리(`mobile2`)를 '1234567'로 변경하는 구문을 완성하세요.",
            language: "sql",
            code: "UPDATE userTbl\nSET ( 1 ) = '011', mobile2 = '1234567'\nWHERE ( 2 ) = 'LSG';",
            blanks: [
                { index: 1, answer: "mobile1", explanation: "변경할 컬럼명은 mobile1입니다." },
                { index: 2, answer: "userID", explanation: "조건절에서 식별자로 사용되는 컬럼은 userID입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE Logic" }
        },
        {
            id: "dml-delete-03",
            type: "code-fill",
            prompt: "`buyTbl`에서 분류(`groupName`)가 지정되지 않은(NULL인) 모든 구매 기록을 삭제하는 구문을 작성하세요.",
            language: "sql",
            code: "DELETE FROM buyTbl\nWHERE groupName ( 1 );",
            blanks: [
                { index: 1, answer: "IS NULL", explanation: "NULL 값을 비교할 때는 `=`가 아닌 `IS NULL` 연산자를 사용해야 합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "DELETE NULL Handling" }
        },
        {
            id: "dml-insert-04",
            type: "code-fill",
            prompt: "다른 테이블 `buyTbl_Backup`이 이미 존재한다고 가정할 때, `buyTbl`의 모든 데이터를 백업 테이블로 복사(삽입)하는 구문을 작성하세요.",
            language: "sql",
            code: "INSERT INTO buyTbl_Backup\nSELECT ( 1 ) FROM buyTbl;",
            blanks: [
                { index: 1, answer: "*", explanation: "모든 컬럼을 선택하여 삽입하려면 와일드카드(*)를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT INTO ... SELECT" }
        },
        {
            id: "dml-update-04",
            type: "short",
            prompt: "다음 구문의 실행 결과, `buyTbl`의 `price` 값은 어떻게 변하는지 서술하세요.\n```sql\nUPDATE buyTbl SET price = price + 10;\n```",
            acceptableAnswers: [
                "모든 제품의 단가가 10씩 증가한다",
                "전체 행의 가격이 10 오른다",
                "모든 가격이 10 더해진다"
            ],
            explanation: "WHERE 절이 없으므로 테이블의 모든 행에 대해 현재 가격(price)에 10을 더한 값으로 수정됩니다.",
            meta: { difficulty: "easy", skillTag: "[디버깅]", topic: "UPDATE All Rows" }
        },
        {
            id: "dml-delete-04",
            type: "mcq",
            prompt: "다음 중 `DELETE`, `TRUNCATE`, `DROP`에 대한 설명으로 틀린 것은?",
            options: [
                "① DELETE는 WHERE 절을 사용하여 특정 행만 삭제할 수 있다.",
                "② TRUNCATE는 테이블의 구조는 남기고 데이터만 모두 삭제한다.",
                "③ DROP은 테이블의 구조와 데이터를 모두 삭제한다.",
                "④ TRUNCATE는 트랜잭션 로그를 자세히 기록하므로 속도가 DELETE보다 느리다."
            ],
            correctIndex: 3,
            explanation: "TRUNCATE는 트랜잭션 로그를 최소화하여 기록하므로 대용량 데이터를 삭제할 때 DELETE보다 훨씬 빠릅니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Deletion Types" }
        },
        {
            id: "func-pred-07",
            type: "mcq",
            prompt: "다음 SQL 문의 결과값으로 올바른 것은?\n```sql\nSELECT ABS(-200);\n```",
            options: [
                "① -200",
                "② 200",
                "③ 0",
                "④ NULL"
            ],
            correctIndex: 1,
            explanation: "ABS() 함수는 절대값을 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Math Functions" }
        },
        {
            id: "func-pred-08",
            type: "short",
            prompt: "다음 SQL 문의 결과값을 숫자로 적으시오.\n```sql\nSELECT YEAR('2025-05-05');\n```",
            acceptableAnswers: ["2025"],
            explanation: "YEAR() 함수는 날짜 데이터에서 연도 부분만 추출하여 정수로 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Date Functions" }
        },
        {
            id: "func-pred-09",
            type: "mcq",
            prompt: "다음 문자열 함수 쿼리의 결과는?\n```sql\nSELECT RIGHT('SQL Server', 3);\n```",
            options: [
                "① SQL",
                "② Ser",
                "③ ver",
                "④ Server"
            ],
            correctIndex: 2,
            explanation: "RIGHT(문자열, n)은 오른쪽에서부터 n개의 문자를 반환합니다. 'ver'가 해당됩니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "String Functions" }
        },
        {
            id: "func-pred-10",
            type: "short",
            prompt: "다음 쿼리의 결과 문자열을 정확히 적으시오.\n```sql\nSELECT REPLICATE('A', 3);\n```",
            acceptableAnswers: ["AAA", "'AAA'"],
            explanation: "REPLICATE(문자열, n)은 해당 문자열을 n번 반복합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "String Functions" }
        },
        {
            id: "func-pred-11",
            type: "mcq",
            prompt: "다음 날짜 함수 중, 두 날짜 사이의 차이(일수, 월수 등)를 구하는 함수는?",
            options: [
                "① DATEADD",
                "② DATEDIFF",
                "③ DATENAME",
                "④ DATEPART"
            ],
            correctIndex: 1,
            explanation: "DATEDIFF(datepart, startdate, enddate)는 두 날짜 사이의 간격을 구합니다. DATEADD는 날짜를 더하는 함수입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Date Functions" }
        },
        {
            id: "func-pred-12",
            type: "short",
            prompt: "다음 수학 함수의 결과를 적으시오.\n```sql\nSELECT ROUND(15.55, 1);\n```",
            acceptableAnswers: ["15.6"],
            explanation: "ROUND(숫자, 1)은 소수점 둘째 자리에서 반올림하여 소수점 첫째 자리까지 표현합니다. 15.55 -> 15.6",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Math Functions" }
        },
        {
            id: "dtype-desc-07",
            type: "short",
            prompt: "정수형 데이터 타입 중 가장 작은 공간(1바이트)을 차지하며, 0~255 사이의 값을 저장할 수 있는 타입은 무엇인가?",
            acceptableAnswers: ["TINYINT", "tinyint"],
            explanation: "TINYINT는 1바이트 크기의 정수형 타입입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-08",
            type: "mcq",
            prompt: "논리 데이터 타입으로, 0 또는 1 (또는 NULL) 값만 가질 수 있는 것은?",
            options: [
                "① INT",
                "② SMALLINT",
                "③ BIT",
                "④ BINARY"
            ],
            correctIndex: 2,
            explanation: "BIT 타입은 0 또는 1의 값을 저장하며 주로 참/거짓을 표현할 때 사용됩니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-09",
            type: "short",
            prompt: "SQL Server 2008부터 도입되었으며, 날짜(YYYY-MM-DD) 정보만 저장하고 시간 정보는 포함하지 않는 데이터 타입은?",
            acceptableAnswers: ["DATE", "date"],
            explanation: "시간 없이 날짜만 저장하는 타입은 DATE입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-10",
            type: "essay",
            prompt: "DELETE, TRUNCATE와 달리 테이블 자체를 데이터베이스에서 완전히 제거하는 명령어 `DROP TABLE`의 특징을 서술하시오.",
            rubric: [
                "데이터뿐만 아니라 테이블의 구조(스키마)까지 모두 삭제됨",
                "사용하던 디스크 공간이 즉시 반납됨",
                "제약 조건 등이 있을 경우 삭제 순서에 주의해야 할 수 있음"
            ],
            maxLength: 300,
            explanation: "DROP은 객체 자체를 파괴합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DDL Commands" }
        },
        {
            id: "dtype-desc-11",
            type: "mcq",
            prompt: "유니코드 문자열을 저장할 때 사용하는 접두사 `N`이 붙는 데이터 타입이 **아닌** 것은?",
            options: [
                "① NCHAR",
                "② NVARCHAR",
                "③ NTEXT",
                "④ VARCHAR"
            ],
            correctIndex: 3,
            explanation: "VARCHAR는 비유니코드(영문 1바이트, 한글 2바이트 등) 가변 문자열을 저장합니다. 유니코드용은 NVARCHAR입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-12",
            type: "short",
            prompt: "이미지나 음악 파일 등 이진(Binary) 데이터를 최대 크기(2GB)까지 저장할 수 있는 가변 길이 데이터 타입은? (형식: `타입명(MAX)`)",
            acceptableAnswers: ["VARBINARY(MAX)", "varbinary(max)"],
            explanation: "이진 대용량 데이터는 VARBINARY(MAX)를 사용합니다. (과거 IMAGE 타입 대체)",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-create-07",
            type: "short",
            prompt: "'아이디(userID)' 필드를 **고정 길이** 문자열 **8자리**로, 반드시 값이 입력되어야 하도록(NULL 불가) 정의하시오. (PK 설정 제외)",
            acceptableAnswers: ["userID CHAR(8) NOT NULL", "userID char(8) not null"],
            explanation: "고정 길이는 CHAR, NULL 불가는 NOT NULL을 붙입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-08",
            type: "short",
            prompt: "'나이(age)' 필드를 **정수형**으로 정의하되, 입력하지 않으면 자동으로 **0**이 입력되도록 기본값(DEFAULT)을 설정하시오. (제약조건 이름 생략 가능)",
            acceptableAnswers: ["age INT DEFAULT 0", "age int default 0"],
            explanation: "정수형 INT 뒤에 DEFAULT 0을 명시합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-09",
            type: "short",
            prompt: "'제품설명(description)' 필드를 **가변 길이 유니코드** 문자열로 정의하시오. 길이는 최대 **100글자**입니다.",
            acceptableAnswers: ["description NVARCHAR(100)", "description nvarchar(100)"],
            explanation: "유니코드 가변 길이는 NVARCHAR(n)입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-10",
            type: "short",
            prompt: "'가격(price)' 필드를 화폐 단위를 저장하는 데 최적화된 전용 데이터 타입으로 정의하시오.",
            acceptableAnswers: ["price MONEY", "price money", "price SMALLMONEY"],
            explanation: "SQL Server에는 화폐 저장을 위한 MONEY 또는 SMALLMONEY 타입이 존재합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-11",
            type: "short",
            prompt: "'이메일(email)' 필드를 **가변 길이 문자열** 30자리로 정의하고, 중복된 값이 들어올 수 없도록 **UNIQUE** 제약조건을 설정하시오.",
            acceptableAnswers: ["email VARCHAR(30) UNIQUE", "email varchar(30) unique"],
            explanation: "가변 문자열 VARCHAR와 UNIQUE 제약조건을 함께 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-12",
            type: "short",
            prompt: "'등록일시(regDateTime)' 필드를 날짜와 시간을 모두 포함하고, 정밀도가 높은 **DATETIME2** 타입으로 정의하시오.",
            acceptableAnswers: ["regDateTime DATETIME2", "regDateTime datetime2"],
            explanation: "DATETIME보다 정밀도가 높고 범위가 넓은 DATETIME2를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "join-interp-07",
            type: "mcq",
            prompt: "다음 `userTbl`과 `buyTbl`을 `RIGHT OUTER JOIN` 했을 때의 결과에 대한 설명으로 옳은 것은?\n```sql\nSELECT u.name, b.prodName \nFROM userTbl u \nRIGHT OUTER JOIN buyTbl b ON u.userID = b.userID\n```",
            options: [
                "① userTbl의 모든 회원이 출력된다.",
                "② buyTbl에 존재하는 모든 구매 기록이 출력되며, 해당하는 회원이 없으면 회원 이름은 NULL이 된다.",
                "③ 두 테이블의 교집합만 출력된다.",
                "④ userTbl과 buyTbl의 모든 행이 빠짐없이(합집합) 출력된다."
            ],
            correctIndex: 1,
            explanation: "RIGHT OUTER JOIN은 오른쪽 테이블(`buyTbl`)을 기준으로 하여 모든 행을 출력합니다. 매칭되는 왼쪽 테이블(`userTbl`) 값이 없으면 NULL로 표시합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "OUTER JOIN" }
        },
        {
            id: "join-interp-08",
            type: "code-fill",
            prompt: "세 개의 테이블 `Student`(학생), `Class`(수업), `Enrollment`(수강신청)을 조인하여 학생 이름과 수업 이름을 출력하려 합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT s.stdName, c.className\nFROM Student s\n( 1 ) JOIN Enrollment e ON s.stdID = e.stdID\n( 2 ) JOIN Class c ON e.classID = c.classID;",
            blanks: [
                { index: 1, answer: "INNER", explanation: "학생과 수강신청 정보를 연결합니다. (수강신청한 학생만)" },
                { index: 2, answer: "INNER", explanation: "수강신청 정보와 수업 정보를 연결합니다." }
            ],
            meta: { difficulty: "hard", skillTag: "[코드빈칸]", topic: "Multi-table JOIN" }
        },
        {
            id: "join-interp-09",
            type: "mcq",
            prompt: "자체 조인(Self Join)이 필요한 경우는 언제인가?",
            options: [
                "① 두 개의 서로 다른 테이블을 합칠 때",
                "② 테이블의 행 개수만 알고 싶을 때",
                "③ 하나의 테이블 안에서 '직원'과 '직속 상사'의 관계처럼 계층적인 데이터를 조회할 때",
                "④ 지워진 데이터를 복구할 때"
            ],
            correctIndex: 2,
            explanation: "Self Join은 동일한 테이블을 별칭(Alias)을 사용하여 서로 조인하는 것으로, 조직도나 카테고리 트리 등 계층 구조를 조회할 때 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Self JOIN" }
        },
        {
            id: "join-interp-10",
            type: "short",
            prompt: "다음 쿼리의 빈칸에 들어갈 키워드는 무엇인가? (두 쿼리의 결과 집합을 합치되, 중복된 행은 **제거**함)\n```sql\nSELECT name FROM userTbl\n(      )\nSELECT name FROM buyTbl;\n```",
            acceptableAnswers: ["UNION"],
            explanation: "UNION은 중복을 제거하고 합치며, UNION ALL은 중복을 포함하여 무조건 합칩니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Set Operators" }
        },
        {
            id: "join-interp-11",
            type: "essay",
            prompt: "`userTbl`과 `buyTbl`을 사용하여 '한 번도 물건을 구매하지 않은 회원'의 목록(이름, 주소)을 추출하는 쿼리의 논리를 `LEFT OUTER JOIN`과 `IS NULL`을 사용하여 설명하시오.",
            rubric: [
                "userTbl을 기준으로 LEFT OUTER JOIN을 수행한다",
                "조인 결과, 구매 내역이 없는 회원은 buyTbl 측 컬럼(예: prodName)이 NULL이 된다",
                "WHERE 절에서 buyTbl의 컬럼이 IS NULL인 행만 필터링한다"
            ],
            maxLength: 300,
            explanation: "LEFT JOIN 후 우측 테이블의 PK나 필수 컬럼이 NULL인 것을 찾으면 매칭되지 않은 행(미구매자)을 찾을 수 있습니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Exclusive JOIN" }
        },
        {
            id: "join-interp-12",
            type: "mcq",
            prompt: "다음 중 조인 조건이 없는 경우, 두 테이블의 모든 행을 가능한 모든 조합으로 연결(Cartesian Product)하여 대량의 결과 행을 만들어내는 조인 방식은?",
            options: [
                "① INNER JOIN",
                "② LEFT OUTER JOIN",
                "③ CROSS JOIN",
                "④ SELF JOIN"
            ],
            correctIndex: 2,
            explanation: "CROSS JOIN(상호 조인)은 한 테이블의 모든 행과 다른 테이블의 모든 행을 결합합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "CROSS JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set2 = set2;
