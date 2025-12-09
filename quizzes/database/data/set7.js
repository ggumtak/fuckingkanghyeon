/**
 * Database Midterm Quiz - Set 7
 * File: quizzes/database/data/set7.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set7 = {
    setId: "set-7",
    questions: [
        {
            id: "db-mid-1",
            type: "code-fill",
            prompt: "다음은 회원 테이블(userTbl)에 새로운 회원 데이터를 삽입하는 쿼리입니다. 빈칸을 채워 완성하세요.\n- 아이디: 'KHD'\n- 이름: '강호동'\n- 생년: 1970\n- 지역: '경북'\n- 국번: '011'\n- 전화번호: '1111111'\n- 키: 182\n- 가입일: '2007-07-07'",
            language: "sql",
            code: "INSERT INTO userTbl VALUES ( ( 1 ), '강호동', 1970, '경북', '011', '1111111', 182, ( 2 ) );",
            blanks: [
                { index: 1, answer: "'KHD'", explanation: "문자열 값은 작은따옴표로 감싸야 합니다." },
                { index: 2, answer: "'2007-07-07'", explanation: "날짜 형식 또한 작은따옴표로 감싸서 입력합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "INSERT" }
        },
        {
            id: "db-mid-2",
            type: "code-fill",
            prompt: "회원 테이블(userTbl)에서 아이디가 'KBS'인 회원의 주소(addr)를 '서울'로 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET addr = '서울'\n( 1 ) userID = 'KBS';",
            blanks: [
                { index: 1, answer: "WHERE", explanation: "특정 행만 수정하기 위해서는 WHERE 절을 사용하여 조건을 지정해야 합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "UPDATE" }
        },
        {
            id: "db-mid-3",
            type: "code-fill",
            prompt: "구매 테이블(buyTbl)에서 분류(groupName)가 '전자'인 제품들의 단가(price)를 10% 인상하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price * ( 1 )\nWHERE groupName = '전자';",
            blanks: [
                { index: 1, answer: "1.1", explanation: "10% 인상은 기존 값에 1.1을 곱하는 것과 같습니다." }
            ],
            meta: { skillTag: "[코드응용]", difficulty: "medium", topic: "UPDATE" }
        },
        {
            id: "db-mid-4",
            type: "code-fill",
            prompt: "회원 테이블(userTbl)에서 키(height)가 170보다 작은 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE ( 1 ) userTbl\nWHERE height < 170;",
            blanks: [
                { index: 1, answer: "FROM", explanation: "DELETE 구문의 형식은 'DELETE FROM 테이블명 ...' 입니다. (FROM 생략 가능 시스템도 있으나 표준적으로 사용)" }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "easy", topic: "DELETE" }
        },
        {
            id: "db-mid-5",
            type: "short",
            prompt: "다음 INSERT 구문에서 오류가 발생하지 않도록, 특정 열(column)만 지정하여 데이터를 넣고자 합니다. 구문을 완성하기 위해 빈칸에 들어갈 코드를 작성하세요.\n\n```sql\nINSERT INTO userTbl ( userID, name ) VALUES ( 'LKS', '이광수' );\n```\n위 쿼리가 정상 실행되려면, `userID`와 `name`을 제외한 나머지 열들이 **NULL을 허용**하거나 **(      )** 값이 지정되어 있어야 합니다.",
            acceptableAnswers: ["DEFAULT", "default"],
            explanation: "열 목록을 지정해서 INSERT할 때, 생략된 열들은 NULL이 허용되거나 DEFAULT(기본값) 설정이 되어 있어야 오류가 발생하지 않습니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "INSERT" }
        },
        {
            id: "db-mid-6",
            type: "code-fill",
            prompt: "구매 테이블(buyTbl)의 모든 데이터를 삭제하되, 트랜잭션 로그를 최소화하여 속도가 가장 빠른 방식(테이블 구조는 남김)을 사용하려 합니다.",
            language: "sql",
            code: "( 1 ) TABLE buyTbl;",
            blanks: [
                { index: 1, answer: "TRUNCATE", explanation: "TRUNCATE TABLE은 DELETE보다 빠르며 테이블 구조는 남기고 데이터만 모두 삭제합니다." }
            ],
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DELETE" }
        },
        {
            id: "db-mid-7",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n```sql\nSELECT ABS(-200);\n```",
            acceptableAnswers: ["200"],
            explanation: "ABS() 함수는 절대값을 반환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-mid-8",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n```sql\nSELECT LEFT('SQL Server', 3);\n```\n(작은따옴표 없이 텍스트만 입력하세요)",
            acceptableAnswers: ["SQL"],
            explanation: "LEFT(문자열, 길이)는 왼쪽부터 지정된 길이만큼의 문자를 반환합니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-mid-9",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n```sql\nSELECT ROUND(123.4567, 2);\n```",
            acceptableAnswers: ["123.46"],
            explanation: "ROUND(값, 2)는 소수점 둘째 자리까지 반올림하여 표시합니다(셋째 자리에서 반올림).",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-mid-10",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n```sql\nSELECT REVERSE('ABC');\n```",
            acceptableAnswers: ["CBA"],
            explanation: "REVERSE() 함수는 문자열의 순서를 거꾸로 뒤집습니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-mid-11",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 정수로 적으시오.\n\n```sql\nSELECT CAST('50' AS INT) + 50;\n```",
            acceptableAnswers: ["100"],
            explanation: "문자열 '50'을 정수형(INT)으로 형변환한 뒤 50을 더하면 100이 됩니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "Function" }
        },
        {
            id: "db-mid-12",
            type: "short",
            prompt: "다음 SQL 문의 실행 결과(길이 값)를 적으시오.\n\n```sql\nSELECT LEN('Data Base');\n```\n(공백 포함)",
            acceptableAnswers: ["9"],
            explanation: "'Data Base'는 9글자(공백 1개 포함)입니다.",
            meta: { skillTag: "[결과예측]", difficulty: "easy", topic: "Function" }
        },
        {
            id: "db-mid-13",
            type: "essay",
            prompt: "SQL Server의 문자열 데이터 타입인 `CHAR`와 `VARCHAR`의 차이점을 '저장 공간'과 '길이' 측면에서 설명하시오.",
            rubric: [
                "CHAR는 고정 길이 문자열로, 남는 공간을 공백으로 채워 낭비될 수 있음을 언급해야 함",
                "VARCHAR는 가변 길이 문자열로, 실제 입력된 데이터만큼만 공간을 사용함을 언급해야 함"
            ],
            maxLength: 200,
            explanation: "CHAR는 고정 길이로 선언된 만큼 공간을 차지하지만, VARCHAR는 가변 길이로 실제 데이터 길이만큼만 저장합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-mid-14",
            type: "essay",
            prompt: "데이터 타입 `NCHAR`, `NVARCHAR` 앞에 붙은 **'N'**의 의미는 무엇이며, 이것이 필요한 이유를 설명하시오.",
            rubric: [
                "'N'은 Unicode(유니코드)를 의미함을 언급해야 함",
                "다국어(한글 등) 처리를 위해 필요하며, 문자당 2바이트를 사용한다는 점을 포함하면 좋음"
            ],
            maxLength: 200,
            explanation: "N은 Unicode(National Character)를 의미하며, 한글이나 다양한 언어를 깨지지 않고 저장하기 위해 사용됩니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-mid-15",
            type: "essay",
            prompt: "테이블 생성 시 `IDENTITY(1,1)` 속성의 의미를 설명하시오.",
            rubric: [
                "자동으로 숫자가 증가하는 속성임을 설명해야 함",
                "초기값(seed)이 1이고, 증가값(increment)이 1임을 명시해야 함"
            ],
            maxLength: 150,
            explanation: "데이터가 입력될 때마다 1부터 시작하여 1씩 자동으로 증가하는 일련번호를 생성합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-mid-16",
            type: "essay",
            prompt: "`TRUNCATE TABLE`과 `DELETE` 구문의 기능적 차이와 성능 차이를 간략히 설명하시오.",
            rubric: [
                "DELETE는 행 단위로 삭제하며 트랜잭션 로그를 기록해 느리다는 점",
                "TRUNCATE는 테이블 데이터를 한 번에 비우며 로그를 최소화해 빠르다는 점"
            ],
            maxLength: 200,
            explanation: "DELETE는 조건부 삭제가 가능하고 느린 반면, TRUNCATE는 조건 없이 전체 데이터를 빠르게 삭제하고 공간을 해제합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-mid-17",
            type: "essay",
            prompt: "NULL 값의 의미를 설명하고, 집계 함수(SUM, AVG 등)에서 NULL이 어떻게 처리되는지 설명하시오.",
            rubric: [
                "NULL은 '알 수 없는 값' 또는 '데이터 없음'을 의미함을 설명",
                "집계 함수 연산 시 NULL 값은 제외되고 계산됨을 설명"
            ],
            maxLength: 200,
            explanation: "NULL은 값이 없음을 의미하며, COUNT(*)를 제외한 집계 함수에서는 계산 대상에서 제외됩니다.",
            meta: { skillTag: "[개념응용]", difficulty: "hard", topic: "DataType" }
        },
        {
            id: "db-mid-18",
            type: "essay",
            prompt: "`DECIMAL(10, 2)` 데이터 타입의 의미를 '전체 자릿수'와 '소수점 자릿수'를 포함하여 설명하시오.",
            rubric: [
                "전체 자릿수(정밀도)가 10자리임을 설명",
                "소수점 이하 자릿수(배율)가 2자리임을 설명"
            ],
            maxLength: 150,
            explanation: "전체 숫자의 길이는 최대 10자리이며, 그중 소수점 이하가 2자리까지 저장됨을 의미합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "DataType" }
        },
        {
            id: "db-mid-19",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 테이블 열(Column) 정의를 완성하세요.\n- 열 이름: `height`\n- 데이터 타입: 정수형 중 가장 작은 범위(0~255)가 아닌, 일반적인 **정수형**\n- 제약 조건: 값이 반드시 있어야 함 (**NULL 불가**)",
            language: "sql",
            code: "height ( 1 ) ( 2 )",
            blanks: [
                { index: 1, answer: "INT", explanation: "일반적인 정수형은 INT를 사용합니다 (SMALLINT도 가능하나 보통 INT 사용)." },
                { index: 2, answer: "NOT NULL", explanation: "값이 반드시 존재해야 하므로 NOT NULL 제약조건을 씁니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-mid-20",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 테이블 열 정의를 완성하세요.\n- 열 이름: `price`\n- 데이터 타입: 전체 9자리 중 소수점 이하 2자리까지 저장하는 **고정 소수점** 타입",
            language: "sql",
            code: "price ( 1 ) ( 9, 2 )",
            blanks: [
                { index: 1, answer: "DECIMAL", explanation: "고정 정밀도 소수는 DECIMAL 또는 NUMERIC을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-mid-21",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 테이블 열 정의를 완성하세요.\n- 열 이름: `addr`\n- 데이터 타입: **한글**을 저장할 수 있는 **고정 길이** 문자열 (최대 4글자)",
            language: "sql",
            code: "addr ( 1 ) ( 4 )",
            blanks: [
                { index: 1, answer: "NCHAR", explanation: "한글 저장(유니코드)을 위한 N과 고정 길이 CHAR를 합쳐 NCHAR를 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-mid-22",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 테이블 열 정의를 완성하세요.\n- 열 이름: `email`\n- 데이터 타입: 가변 길이 문자열 (최대 30자)\n- 제약 조건: 중복된 이메일이 없어야 함 (**유일 값**)",
            language: "sql",
            code: "email VARCHAR(30) ( 1 )",
            blanks: [
                { index: 1, answer: "UNIQUE", explanation: "중복을 허용하지 않는 제약조건은 UNIQUE입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-mid-23",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 테이블 열 정의를 완성하세요.\n- 열 이름: `mDate`\n- 데이터 타입: **날짜**만 저장 (시간 제외)\n- 제약 조건: 입력하지 않으면 **현재 날짜**가 자동으로 입력됨",
            language: "sql",
            code: "mDate DATE ( 1 ) GETDATE()",
            blanks: [
                { index: 1, answer: "DEFAULT", explanation: "기본값을 설정하는 키워드는 DEFAULT입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-mid-24",
            type: "code-fill",
            prompt: "다음 요구사항에 맞는 테이블 열 정의를 완성하세요.\n- 열 이름: `userID`\n- 데이터 타입: 고정 길이 문자열 8자리\n- 제약 조건: 테이블의 **기본 키**로 설정",
            language: "sql",
            code: "userID CHAR(8) ( 1 ) KEY",
            blanks: [
                { index: 1, answer: "PRIMARY", explanation: "기본 키 제약조건은 PRIMARY KEY입니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "CreateField" }
        },
        {
            id: "db-mid-25",
            type: "code-fill",
            prompt: "다음은 `userTbl`과 `buyTbl`을 조인하여 구매 기록이 있는 회원의 이름과 물품명을 출력하는 쿼리입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT U.name, B.prodName\nFROM userTbl U\n( 1 ) JOIN buyTbl B\nON U.userID = B.userID;",
            blanks: [
                { index: 1, answer: "INNER", explanation: "두 테이블에 모두 존재하는 데이터(교집합)만 조회하려면 INNER JOIN을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "JOIN" }
        },
        {
            id: "db-mid-26",
            type: "code-fill",
            prompt: "다음은 **구매 기록이 없는 회원**까지 모두 포함하여 회원 이름과 구매 물품을 출력하려는 쿼리입니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT U.name, B.prodName\nFROM userTbl U\n( 1 ) OUTER JOIN buyTbl B\nON U.userID = B.userID;",
            blanks: [
                { index: 1, answer: "LEFT", explanation: "왼쪽 테이블(userTbl)의 모든 데이터를 포함하려면 LEFT OUTER JOIN을 사용합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "medium", topic: "JOIN" }
        },
        {
            id: "db-mid-27",
            type: "short",
            prompt: "`userTbl`과 `buyTbl`을 `INNER JOIN` 했을 때, 조건절(ON)에 해당하는 데이터가 한쪽 테이블에는 있고 다른 쪽에는 없다면, 그 행은 결과에 포함됩니까? (O / X 로 대답)",
            acceptableAnswers: ["X", "x"],
            explanation: "INNER JOIN은 조인 조건이 일치하는 행만 출력하므로 포함되지 않습니다.",
            meta: { skillTag: "[개념응용]", difficulty: "easy", topic: "JOIN" }
        },
        {
            id: "db-mid-28",
            type: "code-fill",
            prompt: "다음 쿼리는 구매 이력이 **없는** 회원의 목록만 출력하는 구문입니다. 빈칸을 완성하세요.",
            language: "sql",
            code: "SELECT U.name\nFROM userTbl U\nLEFT OUTER JOIN buyTbl B\nON U.userID = B.userID\nWHERE B.prodName IS ( 1 );",
            blanks: [
                { index: 1, answer: "NULL", explanation: "LEFT JOIN 후 매칭되지 않는 행은 오른쪽 테이블 컬럼이 NULL로 표시되므로, 이를 조건으로 필터링합니다." }
            ],
            meta: { skillTag: "[코드작성]", difficulty: "hard", topic: "JOIN" }
        },
        {
            id: "db-mid-29",
            type: "short",
            prompt: "다음 SQL 문의 결과로 생성되는 행(Row)의 개수는 몇 개인지 계산식 또는 숫자로 쓰시오.\n(userTbl 행 개수: 10개, buyTbl 행 개수: 5개 라고 가정)\n\n```sql\nSELECT * FROM userTbl CROSS JOIN buyTbl;\n```",
            acceptableAnswers: ["50", "50개"],
            explanation: "CROSS JOIN은 두 테이블의 모든 행을 조합(카테시안 곱)하므로 10 * 5 = 50개가 됩니다.",
            meta: { skillTag: "[결과예측]", difficulty: "medium", topic: "JOIN" }
        },
        {
            id: "db-mid-30",
            type: "essay",
            prompt: "`INNER JOIN`과 `LEFT OUTER JOIN`의 가장 큰 차이점을 결과 집합에 포함되는 데이터의 관점에서 설명하시오.",
            rubric: [
                "INNER JOIN은 양쪽 테이블에 모두 존재하는 데이터만 출력함",
                "LEFT OUTER JOIN은 왼쪽 테이블의 모든 데이터를 출력하며, 매칭되지 않는 오른쪽 테이블 데이터는 NULL로 표시함"
            ],
            maxLength: 200,
            explanation: "INNER JOIN은 교집합, LEFT OUTER JOIN은 왼쪽 테이블 전체와 교집합을 포함합니다.",
            meta: { skillTag: "[개념응용]", difficulty: "medium", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set7 = set7;
