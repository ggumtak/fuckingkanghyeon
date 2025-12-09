/**
 * Database Midterm Quiz - Set 1
 * File: quizzes/database/data/set1.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set1 = {
    setId: "set-1",
    questions: [
        {
            id: "dml-insert-01",
            type: "code-fill",
            prompt: "다음은 `userTbl`에 새로운 회원 데이터를 삽입하는 구문입니다. 빈칸을 채워 완성하세요.\n- 아이디: 'SJH'\n- 이름: '서장훈'\n- 출생년도: 1974\n- 지역: '서울'",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name, birthYear, addr)\nVALUES ( ( 1 ), ( 2 ), ( 3 ), ( 4 ) );",
            blanks: [
                { index: 1, answer: "'SJH'", explanation: "문자열 값은 작은따옴표로 감싸야 합니다." },
                { index: 2, answer: "'서장훈'", explanation: "이름 문자열도 작은따옴표로 감싸야 합니다." },
                { index: 3, answer: "1974", explanation: "숫자형 데이터(INT)는 따옴표 없이 입력합니다." },
                { index: 4, answer: "'서울'", explanation: "문자열 데이터입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT Syntax" }
        },
        {
            id: "dml-update-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 제품명(prodName)이 '운동화'인 제품의 단가(price)를 10% 인상하는 구문을 작성하세요.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price * ( 1 )\nWHERE prodName = ( 2 );",
            blanks: [
                { index: 1, answer: "1.1", explanation: "10% 인상은 원래 가격에 1.1을 곱하는 것과 같습니다." },
                { index: 2, answer: "'운동화'", explanation: "조건절에서 문자열 리터럴은 작은따옴표를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE Logic" }
        },
        {
            id: "dml-delete-01",
            type: "code-fill",
            prompt: "`userTbl`에서 지역(addr)이 '경기'인 모든 회원의 정보를 삭제하는 구문을 작성하세요.",
            language: "sql",
            code: "DELETE FROM ( 1 )\nWHERE ( 2 ) = '경기';",
            blanks: [
                { index: 1, answer: "userTbl", explanation: "삭제할 대상 테이블 이름을 지정합니다." },
                { index: 2, answer: "addr", explanation: "지역 정보를 담고 있는 컬럼명은 addr입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE Syntax" }
        },
        {
            id: "dml-insert-02",
            type: "code-fill",
            prompt: "`buyTbl`에 데이터를 삽입하려 합니다. 컬럼명을 생략하고 모든 값을 순서대로 입력할 때의 구문을 완성하세요.\n(순번, 아이디, 물품명, 분류, 단가, 수량 순서)",
            language: "sql",
            code: "INSERT INTO buyTbl\nVALUES ( NULL, 'KBS', '티셔츠', '의류', 30, 2 );",
            blanks: [],
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT All Columns" }
        },
        {
            id: "dml-update-02",
            type: "short",
            prompt: "다음 UPDATE 구문이 실행될 때 발생하는 현상이나 오류에 대해 서술하세요. (안전모드 등 설정은 기본값 가정)\n```sql\nUPDATE userTbl SET mobile1 = '010';\n```",
            acceptableAnswers: [
                "모든 행의 mobile1이 010으로 변경된다",
                "모든 데이터가 수정된다",
                "WHERE절이 없어서 전체 데이터가 바뀐다"
            ],
            explanation: "WHERE 절이 누락된 UPDATE 문은 테이블의 모든 행에 영향을 미칩니다.",
            meta: { difficulty: "medium", skillTag: "[디버깅]", topic: "UPDATE Safety" }
        },
        {
            id: "dml-delete-02",
            type: "mcq",
            prompt: "다음 중 테이블의 모든 행을 삭제하지만, 트랜잭션 로그를 최소화하여 속도가 가장 빠른 삭제 명령은 무엇입니까?",
            options: [
                "① DELETE FROM buyTbl",
                "② DROP TABLE buyTbl",
                "③ TRUNCATE TABLE buyTbl",
                "④ REMOVE TABLE buyTbl"
            ],
            correctIndex: 2,
            explanation: "TRUNCATE는 데이터만 빠르게 삭제하고 테이블 구조는 남기며, 로그 기록을 최소화합니다. DROP은 테이블 자체를 없앱니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "TRUNCATE vs DELETE" }
        },
        {
            id: "func-pred-01",
            type: "mcq",
            prompt: "다음 SQL 문의 실행 결과로 올바른 것은?\n```sql\nSELECT CHARINDEX('Server', 'SQL Server 2019');\n```",
            options: [
                "① 4",
                "② 5",
                "③ 0",
                "④ 1"
            ],
            correctIndex: 1,
            explanation: "'SQL Server'에서 'S'는 5번째 위치에 시작합니다. (SQL 다음 공백 1칸)",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "String Functions" }
        },
        {
            id: "func-pred-02",
            type: "short",
            prompt: "다음 SQL 문의 결과를 숫자로 적으시오.\n```sql\nSELECT LEN('SQL Server 2019');\n```",
            acceptableAnswers: ["15"],
            explanation: "공백을 포함한 전체 문자열의 길이는 15입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "String Functions" }
        },
        {
            id: "func-pred-03",
            type: "mcq",
            prompt: "다음 형변환 함수의 결과가 다른 하나는?\n```sql\n1) SELECT CAST('10' AS INT)\n2) SELECT CONVERT(INT, '10')\n3) SELECT PARSE('10' AS INT)\n4) SELECT TRY_PARSE('ABC' AS INT)\n```",
            options: [
                "① 1번",
                "② 2번",
                "③ 3번",
                "④ 4번"
            ],
            correctIndex: 3,
            explanation: "1, 2, 3번은 모두 정수 10을 반환하지만, 4번 TRY_PARSE는 변환 실패 시 NULL을 반환합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Conversion Functions" }
        },
        {
            id: "func-pred-04",
            type: "short",
            prompt: "오늘 날짜가 2025년 12월 10일일 때, 다음 쿼리의 결과값(정수)을 예측하시오.\n```sql\nSELECT DAY('2025-12-10');\n```",
            acceptableAnswers: ["10"],
            explanation: "DAY() 함수는 날짜에서 일(day) 부분만 정수로 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Date Functions" }
        },
        {
            id: "func-pred-05",
            type: "mcq",
            prompt: "다음 SQL의 결과값은?\n```sql\nSELECT CEILING(123.45);\n```",
            options: [
                "① 123",
                "② 124",
                "③ 123.4",
                "④ 123.5"
            ],
            correctIndex: 1,
            explanation: "CEILING()은 올림 함수로, 주어진 숫자보다 크거나 같은 최소 정수를 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Math Functions" }
        },
        {
            id: "func-pred-06",
            type: "short",
            prompt: "다음 쿼리의 실행 결과는 무엇인가?\n```sql\nSELECT REPLACE('SQL Server', 'Server', '서버');\n```",
            acceptableAnswers: ["SQL 서버", "'SQL 서버'"],
            explanation: "REPLACE(문자열, 찾을문자, 바꿀문자) 함수는 해당 문자열을 치환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "String Functions" }
        },
        {
            id: "dtype-desc-01",
            type: "short",
            prompt: "고정 길이 문자열을 저장하며, 남는 공간을 공백으로 채우는 데이터 타입은 무엇인가? (영어 대문자로 답하시오)",
            acceptableAnswers: ["CHAR", "CHARACTER"],
            explanation: "CHAR는 고정 길이 문자열 타입입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-02",
            type: "mcq",
            prompt: "유니코드(Unicode) 문자열을 저장하기 위해 사용되며, 한 글자당 2바이트를 사용하는 가변 길이 데이터 타입은?",
            options: [
                "① VARCHAR",
                "② CHAR",
                "③ NVARCHAR",
                "④ TEXT"
            ],
            correctIndex: 2,
            explanation: "NVARCHAR는 가변 길이 유니코드 데이터를 저장합니다. (N 접두사)",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-03",
            type: "short",
            prompt: "SQL Server에서 날짜와 시간을 모두 저장할 수 있으며, `YYYY-MM-DD hh:mm:ss` 형식을 가지는 대표적인 데이터 타입은?",
            acceptableAnswers: ["DATETIME", "DATETIME2"],
            explanation: "DATETIME 또는 DATETIME2가 날짜와 시간을 함께 저장합니다. DATE는 날짜만 저장합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-04",
            type: "essay",
            prompt: "CHAR(10)과 VARCHAR(10)의 차이점을 저장 방식과 공간 효율성 측면에서 설명하시오.",
            rubric: [
                "CHAR는 고정 길이로, 'A'를 저장해도 10바이트(공백 포함)를 차지함",
                "VARCHAR는 가변 길이로, 'A'를 저장하면 실제 데이터 길이만큼만 저장됨",
                "데이터 길이가 일정하면 CHAR, 들쑥날쑥하면 VARCHAR가 유리함"
            ],
            maxLength: 300,
            explanation: "CHAR는 고정 길이, VARCHAR는 가변 길이입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-05",
            type: "mcq",
            prompt: "소수점이 있는 숫자를 정밀하게 저장하기 위해 사용되며, `DECIMAL(p, s)` 형식으로 정의하는 데이터 타입과 가장 유사한(동의어) 타입은?",
            options: [
                "① FLOAT",
                "② REAL",
                "③ NUMERIC",
                "④ INT"
            ],
            correctIndex: 2,
            explanation: "DECIMAL과 NUMERIC은 기능적으로 거의 동일한 고정 정밀도 데이터 타입입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-06",
            type: "short",
            prompt: "대용량 텍스트 데이터를 저장하기 위해 기존의 TEXT 타입을 대체하여 사용이 권장되는, 최대 크기를 지정할 수 있는 가변 문자열 타입은? (형식: `타입명(MAX)`)",
            acceptableAnswers: ["VARCHAR(MAX)", "NVARCHAR(MAX)"],
            explanation: "VARCHAR(MAX) 또는 NVARCHAR(MAX)는 2GB까지 데이터를 저장할 수 있는 LOB 타입입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-create-01",
            type: "short",
            prompt: "테이블 생성 시, '이름(name)' 필드를 **가변 길이 유니코드 문자열**로 최대 **10글자**까지 저장하도록 정의하는 구문을 작성하시오. (필드명과 타입만 작성)",
            acceptableAnswers: ["name NVARCHAR(10)", "name nvarchar(10)"],
            explanation: "유니코드는 `N`이 붙은 `NVARCHAR`를 사용하며 괄호 안에 길이를 지정합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-02",
            type: "short",
            prompt: "'키(height)' 필드를 **정수형(Integer)** 데이터로 저장하도록 정의하시오.",
            acceptableAnswers: ["height INT", "height INTEGER", "height int"],
            explanation: "정수는 `INT` 또는 `INTEGER` 타입을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-03",
            type: "short",
            prompt: "'평점(rating)' 필드를 전체 **5자리** 숫자 중 소수점 이하 **2자리**를 가지는 실수형으로 정의하시오.",
            acceptableAnswers: ["rating DECIMAL(5,2)", "rating NUMERIC(5,2)", "rating decimal(5, 2)"],
            explanation: "전체 자릿수(p)와 소수점 자릿수(s)를 지정하는 타입은 `DECIMAL(p,s)`입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-04",
            type: "short",
            prompt: "'가입일(regDate)' 필드를 **날짜만**(시간 제외) 저장하는 타입으로 정의하시오.",
            acceptableAnswers: ["regDate DATE", "regDate date"],
            explanation: "날짜만 저장할 때는 `DATE` 타입을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-05",
            type: "short",
            prompt: "'코드(code)' 필드를 **고정 길이** 문자열 **5자리**로 정의하시오.",
            acceptableAnswers: ["code CHAR(5)", "code char(5)"],
            explanation: "고정 길이는 `CHAR` 타입을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-06",
            type: "short",
            prompt: "'소개(intro)' 필드를 **최대 길이**를 가진 가변 유니코드 문자열로 정의하시오. (LOB 대체)",
            acceptableAnswers: ["intro NVARCHAR(MAX)", "intro nvarchar(max)"],
            explanation: "최대 길이는 `(MAX)` 키워드를 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "join-interp-01",
            type: "mcq",
            prompt: "다음 `userTbl`과 `buyTbl`을 `INNER JOIN` 했을 때, 결과에 **포함되지 않는** 사용자는 누구인가?\n(참고: `buyTbl`에는 KBS, JYP, BBK, SSK, EJW의 구매 기록만 존재함)\n\n- userTbl 회원: LSG, KBS, KKH, JYP, SSK, LJB, YJS, EJW, JKW, BBK",
            options: [
                "① KBS",
                "② JYP",
                "③ LSG",
                "④ BBK"
            ],
            correctIndex: 2,
            explanation: "INNER JOIN은 두 테이블에 공통으로 존재하는 데이터만 출력합니다. LSG는 구매 기록(`buyTbl`)이 없으므로 제외됩니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INNER JOIN" }
        },
        {
            id: "join-interp-02",
            type: "code-fill",
            prompt: "`userTbl`을 기준으로 `buyTbl`을 조인하되, **구매 기록이 없는 회원도 모두 출력**하고자 합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT u.name, b.prodName\nFROM userTbl u\n( 1 ) OUTER JOIN buyTbl b\nON u.userID = b.userID;",
            blanks: [
                { index: 1, answer: "LEFT", explanation: "왼쪽 테이블(`userTbl`)의 모든 데이터를 유지하려면 `LEFT OUTER JOIN`을 사용합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "OUTER JOIN" }
        },
        {
            id: "join-interp-03",
            type: "mcq",
            prompt: "`userTbl`(회원 10명)과 `buyTbl`(구매기록 12건)을 `CROSS JOIN` 했을 때 생성되는 결과 행(Row)의 개수는?",
            options: [
                "① 10",
                "② 12",
                "③ 22",
                "④ 120"
            ],
            correctIndex: 3,
            explanation: "CROSS JOIN은 두 테이블의 행 개수를 곱한 값(Cartesian Product)을 반환합니다. 10 * 12 = 120.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "CROSS JOIN" }
        },
        {
            id: "join-interp-04",
            type: "short",
            prompt: "다음 조인 구문에서 `ON` 절의 역할은 무엇인가?\n```sql\nFROM userTbl u INNER JOIN buyTbl b ON u.userID = b.userID\n```",
            acceptableAnswers: ["조인 조건", "두 테이블을 연결하는 조건", "결합 조건"],
            explanation: "ON 절은 두 테이블을 결합할 때 기준이 되는 컬럼 조건을 명시합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN Syntax" }
        },
        {
            id: "join-interp-05",
            type: "essay",
            prompt: "INNER JOIN과 LEFT OUTER JOIN의 결정적인 차이점을 `userTbl`(회원)과 `buyTbl`(구매) 관계를 예로 들어 설명하시오.",
            rubric: [
                "INNER JOIN은 구매 기록이 있는 회원만 출력함",
                "LEFT OUTER JOIN은 구매 기록이 없더라도 모든 회원을 출력함",
                "LEFT JOIN 시 구매 기록이 없는 회원의 buyTbl 컬럼은 NULL로 표시됨"
            ],
            maxLength: 300,
            explanation: "INNER JOIN은 교집합, OUTER JOIN은 기준 테이블 전체를 포함합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN Differences" }
        },
        {
            id: "join-interp-06",
            type: "mcq",
            prompt: "`userTbl`(회원)과 `buyTbl`(구매), 그리고 두 테이블을 연결하는 `userBuyTbl`(회원-구매 연결) 세 테이블을 조인하려 합니다. 올바른 조인 순서와 방식은?",
            options: [
                "① userTbl - buyTbl 바로 조인",
                "② userTbl과 buyTbl을 CROSS JOIN",
                "③ userTbl - userBuyTbl - buyTbl 순으로 INNER JOIN",
                "④ buyTbl - userTbl 순으로 OUTER JOIN"
            ],
            correctIndex: 2,
            explanation: "다대다 관계를 해소하는 연결 테이블(`userBuyTbl`)을 중간에 두고 순차적으로 조인해야 합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Multi-table JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set1 = set1;
