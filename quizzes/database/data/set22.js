/**
 * Database Practice Quiz - Set 22 (Code-Fill Set 1)
 * File: quizzes/database/data/set22.js
 */
const set22 = {
    setId: "set-22",
    questions: [
        {
            id: "db-s1-q01",
            type: "code-fill",
            prompt: "다음은 `userTbl`에 새로운 회원 '이승기(LSG)'를 입력하는 구문입니다. 모든 컬럼을 명시하여 입력할 때 빈칸을 채우세요.\n(아이디, 이름, 생년, 지역, 국번, 전화번호, 키, 가입일)",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name, birthYear, addr, mobile1, mobile2, height, mDate)\n( 1 ) ('LSG', '이승기', 1987, '서울', '011', '1111111', 182, '2008-08-08');",
            blanks: [{ index: 1, answer: "VALUES", explanation: "데이터 입력 시 구체적인 값을 지정하는 키워드는 VALUES입니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "db-s1-q02",
            type: "code-fill",
            prompt: "`buyTbl`에서 '운동화'를 구매한 기록의 수량(amount)을 모두 5개로 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\n( 1 ) amount = 5\nWHERE prodName = '운동화';",
            blanks: [{ index: 1, answer: "SET", explanation: "UPDATE문에서 값을 변경할 컬럼을 지정할 때 SET을 사용합니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "db-s1-q03",
            type: "code-fill",
            prompt: "`userTbl`에서 지역(addr)이 '경기'인 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE ( 1 ) userTbl\nWHERE addr = '경기';",
            blanks: [{ index: 1, answer: "FROM", explanation: "DELETE 문법은 DELETE FROM 테이블명 형식을 따릅니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "db-s1-q04",
            type: "code-fill",
            prompt: "`userTbl`에 아이디 'KBS', 이름 '김범수', 생년 1979, 지역 '경남'만 입력하고 나머지 컬럼은 생략하는 구문입니다.",
            language: "sql",
            code: "INSERT INTO userTbl ( ( 1 ) )\nVALUES ('KBS', '김범수', 1979, '경남');",
            blanks: [{ index: 1, answer: "userID, name, birthYear, addr", explanation: "입력하려는 값의 순서와 개수에 맞춰 컬럼명을 나열해야 합니다." }],
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "db-s1-q05",
            type: "code-fill",
            prompt: "`buyTbl`의 가격(price)을 모두 1.5배 인상하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price ( 1 ) 1.5;",
            blanks: [{ index: 1, answer: "*", explanation: "기존 값에 1.5를 곱하기 위해 곱셈 연산자(*)를 사용합니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "db-s1-q06",
            type: "code-fill",
            prompt: "`userTbl`에서 키(height)가 170보다 작은 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl\n( 1 ) height < 170;",
            blanks: [{ index: 1, answer: "WHERE", explanation: "삭제할 대상을 선별하는 조건절에는 WHERE가 필요합니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "db-s1-q07",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 숫자로만 적으시오.\n```sql\nSELECT ABS(-100);\n```",
            acceptableAnswers: ["100"],
            explanation: "ABS는 절대값을 반환하는 함수입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "수치 함수" }
        },
        {
            id: "db-s1-q08",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 숫자로만 적으시오.\n```sql\nSELECT LEN('SQL Server');\n``` (공백 포함)",
            acceptableAnswers: ["10"],
            explanation: "'SQL Server'는 공백 1칸을 포함해 총 10글자입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "문자열 함수" }
        },
        {
            id: "db-s1-q09",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 숫자로 적으시오.\n```sql\nSELECT ROUND(123.4567, 2);\n```",
            acceptableAnswers: ["123.46"],
            explanation: "소수점 셋째 자리(6)에서 반올림하여 둘째 자리까지 표현하므로 123.46이 됩니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "수치 함수" }
        },
        {
            id: "db-s1-q10",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 적으시오.\n```sql\nSELECT LEFT('SQL Server', 3);\n```",
            acceptableAnswers: ["SQL"],
            explanation: "왼쪽에서 3글자를 가져오므로 'SQL'이 됩니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "문자열 함수" }
        },
        {
            id: "db-s1-q11",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 적으시오.\n```sql\nSELECT YEAR('2025-12-25');\n```",
            acceptableAnswers: ["2025"],
            explanation: "YEAR 함수는 날짜 데이터에서 연도 부분만 추출합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "날짜 함수" }
        },
        {
            id: "db-s1-q12",
            type: "short",
            prompt: "다음 SQL의 실행 결과(정수)를 적으시오.\n```sql\nSELECT CAST('100' AS INT) + 200;\n```",
            acceptableAnswers: ["300"],
            explanation: "문자열 '100'이 정수 100으로 변환되어 200과 더해져 300이 됩니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "형변환 함수" }
        },
        {
            id: "db-s1-q13",
            type: "essay",
            prompt: "데이터 타입 `CHAR`와 `VARCHAR`의 차이점에 대해 저장 공간 할당 방식을 중심으로 서술하시오.",
            rubric: ["CHAR는 고정 길이 문자열로, 데이터가 짧아도 정해진 공간을 모두 차지한다(공백 패딩).", "VARCHAR는 가변 길이 문자열로, 실제 입력된 데이터만큼만 공간을 사용한다."],
            maxLength: 300,
            explanation: "CHAR는 고정 길이, VARCHAR는 가변 길이입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s1-q14",
            type: "essay",
            prompt: "`NCHAR` 또는 `NVARCHAR` 타입에서 앞에 붙은 'N'의 의미와 이것이 필요한 이유를 서술하시오.",
            rubric: ["N은 National(또는 Unicode)을 의미한다.", "한글 등 다국어 문자를 깨짐 없이 저장하기 위해 유니코드(2바이트) 저장이 필요할 때 사용한다."],
            maxLength: 300,
            explanation: "유니코드 지원을 통해 다국어를 처리하기 위함입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s1-q15",
            type: "essay",
            prompt: "데이터 타입 `DELETE`와 `TRUNCATE`의 차이점을 '로그 기록'과 '복구 가능성' 측면에서 서술하시오.",
            rubric: ["DELETE는 행 단위로 로그를 남겨 속도가 느리지만 롤백이 용이하다.", "TRUNCATE는 페이지 단위로 할당을 해제하고 로그를 최소화하여 속도가 빠르다."],
            maxLength: 300,
            explanation: "DELETE는 로그를 많이 남기고 느림, TRUNCATE는 빠르지만 조건부 삭제 불가.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "데이터 조작" }
        },
        {
            id: "db-s1-q16",
            type: "essay",
            prompt: "정수형 타입인 `INT`와 `BIGINT`의 차이점은 무엇인지 서술하시오.",
            rubric: ["저장 가능한 숫자의 범위가 다르다.", "INT는 4바이트(약 21억), BIGINT는 8바이트(매우 큰 수)를 저장한다."],
            maxLength: 200,
            explanation: "INT는 4바이트 정수, BIGINT는 8바이트 정수로 표현 범위가 다릅니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s1-q17",
            type: "essay",
            prompt: "날짜 타입 `DATE`와 `DATETIME`의 차이점을 저장되는 정보의 관점에서 서술하시오.",
            rubric: ["DATE는 '연-월-일' 날짜 정보만 저장한다.", "DATETIME은 날짜뿐만 아니라 '시:분:초' 시간 정보까지 포함한다."],
            maxLength: 200,
            explanation: "DATE는 날짜만, DATETIME은 날짜와 시간을 모두 포함합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s1-q18",
            type: "essay",
            prompt: "`NULL` 값의 의미는 무엇인지, 공백('')이나 숫자 0과 비교하여 서술하시오.",
            rubric: ["NULL은 '데이터가 없음' 또는 '알 수 없음(Unknown)'을 의미한다.", "0은 숫자값, 공백('')은 문자값이 존재하는 것이므로 NULL과는 다르다."],
            maxLength: 200,
            explanation: "NULL은 값의 부재를 의미하며 0이나 공백과는 다른 상태입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s1-q19",
            type: "short",
            prompt: "한글 이름 3~5글자를 저장하기 위해 가장 적절한 '가변 길이 유니코드' 데이터 타입 정의를 쓰시오. (예: `INT`)",
            acceptableAnswers: ["NVARCHAR(5)", "NVARCHAR(10)"],
            explanation: "한글 저장을 위해 N이 필요하고, 가변 길이이므로 VARCHAR를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s1-q20",
            type: "short",
            prompt: "나이(Age)를 저장하려고 합니다. 0~255 사이의 정수만 저장하면 될 때, 가장 공간 효율적인 정수 데이터 타입은?",
            acceptableAnswers: ["TINYINT"],
            explanation: "TINYINT는 1바이트(0~255)를 사용하므로 나이 저장에 가장 효율적입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s1-q21",
            type: "short",
            prompt: "물품의 단가를 저장할 때, 최대 10자리 숫자이며 소수점은 없어도 됩니다. 고정밀도를 보장하는 십진수 타입 정의를 쓰시오.",
            acceptableAnswers: ["DECIMAL(10,0)", "NUMERIC(10,0)", "INT"],
            explanation: "정확한 수치 저장을 위해 DECIMAL 또는 NUMERIC을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s1-q22",
            type: "short",
            prompt: "회원의 생일 정보를 'YYYY-MM-DD' 형태로만 저장하고 싶습니다. 시간은 필요 없습니다. 알맞은 데이터 타입은?",
            acceptableAnswers: ["DATE"],
            explanation: "날짜 정보만 저장하는 타입은 DATE입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s1-q23",
            type: "short",
            prompt: "고정된 길이의 영문 국가 코드 3글자(예: 'KOR', 'USA')를 저장하기 위한 가장 효율적인 데이터 타입 정의는?",
            acceptableAnswers: ["CHAR(3)"],
            explanation: "길이가 항상 일정하므로 가변형(VARCHAR)보다 고정형(CHAR)이 성능상 유리할 수 있습니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s1-q24",
            type: "short",
            prompt: "평점(0.0 ~ 5.0)을 저장하기 위해 전체 2자리, 소수점 이하 1자리를 허용하는 데이터 타입 정의를 쓰시오.",
            acceptableAnswers: ["DECIMAL(2,1)", "NUMERIC(2,1)"],
            explanation: "전체 2자리 중 소수점 1자리는 DECIMAL(2,1)입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s1-q25",
            type: "essay",
            prompt: "다음 INNER JOIN 구문의 결과가 의미하는 바를 서술하시오.\n```sql\nSELECT * FROM userTbl U \nINNER JOIN buyTbl B ON U.userID = B.userID\n```",
            rubric: ["userTbl과 buyTbl의 아이디가 일치하는 행만 결합한다.", "즉, 물품을 구매한 적이 있는 회원의 정보와 구매 내역만 출력된다.", "구매하지 않은 회원은 출력되지 않는다."],
            maxLength: 300,
            explanation: "구매 이력이 있는(조인 성공) 회원만 출력됩니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s1-q26",
            type: "essay",
            prompt: "다음 LEFT OUTER JOIN 구문의 결과 해석을 서술하시오.\n```sql\nSELECT U.name, B.prodName \nFROM userTbl U \nLEFT JOIN buyTbl B ON U.userID = B.userID\n```",
            rubric: ["userTbl(왼쪽)의 모든 회원을 출력한다.", "구매 기록이 있는 회원은 물품명이 같이 나오고, 없는 회원은 물품명이 NULL로 표시된다."],
            maxLength: 300,
            explanation: "모든 회원을 출력하되 구매 이력이 없으면 NULL로 표시합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s1-q27",
            type: "short",
            prompt: "`userTbl`에 회원 10명, `buyTbl`에 구매 기록 12건이 있을 때, `CROSS JOIN`을 수행하면 결과 행(Row)의 개수는 몇 개인지 숫자로 적으시오.",
            acceptableAnswers: ["120"],
            explanation: "CROSS JOIN은 두 테이블 행의 개수를 곱한 결과(카테시안 곱)를 반환합니다. 10 * 12 = 120.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "JOIN 해석" }
        },
        {
            id: "db-s1-q28",
            type: "essay",
            prompt: "다음 쿼리에서 `WHERE B.prodName IS NULL` 조건이 의미하는 바를 서술하시오.\n```sql\nSELECT U.name FROM userTbl U \nLEFT JOIN buyTbl B ON U.userID = B.userID \nWHERE B.prodName IS NULL\n```",
            rubric: ["LEFT JOIN으로 전체 회원을 가져온 상태에서,", "구매 내역(prodName)이 없는(NULL인) 행만 필터링한다.", "결과적으로 '한 번도 구매하지 않은 회원'을 추출한다."],
            maxLength: 300,
            explanation: "구매 이력이 없는 회원을 찾기 위한 조건입니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s1-q29",
            type: "essay",
            prompt: "Self Join(자체 조인)은 어떤 상황에서 사용하는지 '조직도'나 '직속상관'을 예로 들어 서술하시오.",
            rubric: ["테이블 하나 안에 부하직원과 상관 정보가 같이 있을 때 사용한다.", "직원의 '상관ID'를 통해 같은 테이블의 '직원ID'를 찾아 이름을 알아낼 때 유용하다."],
            maxLength: 300,
            explanation: "같은 테이블 내의 계층 관계를 풀 때 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s1-q30",
            type: "essay",
            prompt: "3개의 테이블(학생, 동아리, 가입정보)을 조인할 때 `INNER JOIN`을 두 번 연속 사용하는 이유와 그 동작 방식을 서술하시오.",
            rubric: ["학생-가입정보를 먼저 연결하고, 그 결과를 다시 동아리 테이블과 연결해야 하기 때문이다.", "세 테이블 간의 연결 고리(외래키)를 따라 건너건너 정보를 가져오기 위함이다."],
            maxLength: 300,
            explanation: "테이블 A와 B를 연결하고, 그 결과와 C를 연결하여 3개 테이블 정보를 모두 합치기 위함입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        }
    ]
};

if (typeof window !== 'undefined') window.set22 = set22;
