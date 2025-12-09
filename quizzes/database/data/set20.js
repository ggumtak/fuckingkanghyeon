/**
 * Database Practice Quiz - Set 20 (Practice Set 1)
 * File: quizzes/database/data/set20.js
 */
const set20 = {
    setId: "set-20",
    questions: [
        {
            id: "s1-q1",
            type: "essay",
            prompt: "userTbl 테이블에 다음 신규 회원을 추가하는 INSERT 구문을 작성하시오.\n- 아이디: 'ZZZ'\n- 이름: '조조'\n- 생년: 2000\n- 지역: '경기'\n- 국번: '010'\n- 전화번호: '1234567'\n- 키: 180\n- 가입일: '2022-01-01'",
            rubric: ["INSERT INTO userTbl VALUES ... 구문을 사용해야 함", "문자열 데이터에 따옴표를 정확히 사용해야 함", "컬럼 순서를 지켜야 함"],
            explanation: "INSERT INTO userTbl VALUES ('ZZZ', '조조', 2000, '경기', '010', '1234567', 180, '2022-01-01');",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "s1-q2",
            type: "essay",
            prompt: "buyTbl 테이블에 아이디(userID)가 'KBS'이고, 물품명(prodName)이 '노트북'인 데이터를 삽입하시오. (단, 가격과 수량은 입력하지 않음)",
            rubric: ["INSERT INTO buyTbl (열이름...) VALUES (...) 형식을 사용해야 함", "생략된 컬럼을 제외하고 명시된 컬럼만 괄호 안에 나열해야 함"],
            explanation: "INSERT INTO buyTbl (userID, prodName) VALUES ('KBS', '노트북');",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "s1-q3",
            type: "essay",
            prompt: "userTbl에서 아이디(userID)가 'LSG'인 회원의 전화번호 국번(mobile1)을 '019'로 수정하는 UPDATE 구문을 작성하시오.",
            rubric: ["UPDATE ... SET ... WHERE 구문을 사용해야 함", "WHERE userID = 'LSG' 조건이 필수임"],
            explanation: "UPDATE userTbl SET mobile1 = '019' WHERE userID = 'LSG';",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "s1-q4",
            type: "essay",
            prompt: "buyTbl에서 '운동화'의 가격(price)을 50으로 수정하는 구문을 작성하시오.",
            rubric: ["UPDATE buyTbl SET price = 50 WHERE prodName = '운동화'; 형태여야 함"],
            explanation: "UPDATE buyTbl SET price = 50 WHERE prodName = '운동화';",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "s1-q5",
            type: "essay",
            prompt: "buyTbl에서 수량(amount)이 1개인 구매 내역을 모두 삭제하는 DELETE 구문을 작성하시오.",
            rubric: ["DELETE FROM buyTbl WHERE amount = 1; 형태여야 함"],
            explanation: "DELETE FROM buyTbl WHERE amount = 1;",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "s1-q6",
            type: "essay",
            prompt: "userTbl의 데이터를 삭제하지 않고 테이블의 구조는 남기되, 모든 행을 가장 빠르게 삭제하는 구문은 무엇인가요? (DELETE 제외)",
            rubric: ["TRUNCATE TABLE userTbl; 구문이어야 함", "DELETE보다 TRUNCATE가 성능상 유리함을 인지하고 있는지 확인"],
            explanation: "TRUNCATE TABLE userTbl;",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "s1-q7",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT LEN('Hello World');\n```",
            acceptableAnswers: ["11"],
            explanation: "공백을 포함하여 총 11글자입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s1-q8",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT ABS(-500);\n```",
            acceptableAnswers: ["500"],
            explanation: "ABS는 절대값을 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s1-q9",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT ROUND(12.345, 1);\n```",
            acceptableAnswers: ["12.3"],
            explanation: "소수점 첫째 자리까지 남기고 둘째 자리에서 반올림합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s1-q10",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT LEFT('Database', 4);\n```",
            acceptableAnswers: ["Data"],
            explanation: "왼쪽에서 4글자를 가져옵니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s1-q11",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT LOWER('SQL Server');\n```",
            acceptableAnswers: ["sql server"],
            explanation: "모든 문자를 소문자로 변환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s1-q12",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT REVERSE('ABC');\n```",
            acceptableAnswers: ["CBA"],
            explanation: "문자열을 역순으로 뒤집습니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s1-q13",
            type: "essay",
            prompt: "CHAR(5)와 VARCHAR(5) 데이터 타입의 차이점을 저장 방식과 공간 효율성 측면에서 설명하시오.",
            rubric: ["CHAR는 고정 길이, VARCHAR는 가변 길이임을 언급", "CHAR는 남는 공간을 공백으로 채우고, VARCHAR는 데이터 길이만큼만 쓴다는 점 설명"],
            explanation: "CHAR는 고정된 공간을 할당하며 빈 공간을 공백으로 채우지만, VARCHAR는 실제 입력된 데이터 크기만큼만 공간을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s1-q14",
            type: "essay",
            prompt: "NCHAR 또는 NVARCHAR 타입에서 앞에 붙은 'N'의 의미와 이 타입을 사용하는 주된 이유를 설명하시오.",
            rubric: ["N은 Unicode(유니코드)를 의미함", "다국어(한글 등) 지원을 위해 사용됨"],
            explanation: "N은 National(Unicode)을 의미하며, 한글이나 한자 등 다양한 언어를 깨짐 없이 저장하기 위해 사용합니다. (문자당 2바이트)",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s1-q15",
            type: "essay",
            prompt: "DELETE 문과 TRUNCATE 문의 차이점을 롤백 가능 여부와 속도 측면에서 서술하시오.",
            rubric: ["DELETE는 로그를 남겨 롤백이 가능하고 느림", "TRUNCATE는 로그를 최소화하여 롤백이 제한적이며 빠름"],
            explanation: "DELETE는 행 단위로 삭제하며 로그를 기록해 느리지만 복구가 쉽고, TRUNCATE는 테이블 초기화 수준으로 빠르지만 복구가 어렵습니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "s1-q16",
            type: "essay",
            prompt: "정수형 데이터 타입 중 BIGINT를 사용해야 하는 경우는 언제인지 INT와 비교하여 설명하시오.",
            rubric: ["INT의 범위를 넘어서는 아주 큰 정수를 저장할 때 사용", "INT는 약 21억, BIGINT는 그보다 훨씬 큰 범위임을 언급"],
            explanation: "INT(4바이트)로 표현할 수 없는 21억 이상의 큰 숫자를 다룰 때 8바이트인 BIGINT를 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s1-q17",
            type: "essay",
            prompt: "DATE 타입과 DATETIME 타입의 저장 정보 차이를 설명하시오.",
            rubric: ["DATE는 날짜(연월일)만 저장", "DATETIME은 날짜와 시분초(시간)까지 저장"],
            explanation: "DATE는 '2023-01-01'처럼 날짜만, DATETIME은 '2023-01-01 12:00:00'처럼 시간 정보도 포함합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s1-q18",
            type: "essay",
            prompt: "SQL Server의 BIT 데이터 타입은 주로 어떤 용도로 사용되는지 설명하시오.",
            rubric: ["0, 1, NULL 만 저장 가능", "참/거짓(Boolean) 논리값 표현에 사용"],
            explanation: "BIT는 0 또는 1의 값을 가지며 주로 Yes/No, True/False와 같은 논리형 데이터를 저장하는 데 사용됩니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s1-q19",
            type: "short",
            prompt: "필드명: `intro`, 데이터타입: 최대 100글자의 가변 길이 문자열 (유니코드 지원 필수). SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["NVARCHAR(100)"],
            explanation: "가변 길이는 VARCHAR, 유니코드는 N 접두사가 필요하므로 NVARCHAR(100)입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s1-q20",
            type: "short",
            prompt: "필드명: `code`, 데이터타입: 고정 길이 10글자 문자열 (영문/숫자 전용). SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["CHAR(10)"],
            explanation: "고정 길이는 CHAR를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s1-q21",
            type: "short",
            prompt: "필드명: `score`, 데이터타입: 소수점 아래 1자리까지 포함하는 전체 3자리의 숫자 (예: 99.9). SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["DECIMAL(3,1)", "NUMERIC(3,1)"],
            explanation: "전체 3자리 중 소수점 1자리이므로 DECIMAL(3,1)입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s1-q22",
            type: "short",
            prompt: "필드명: `isMember`, 데이터타입: 참(1) 또는 거짓(0)만을 저장. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["BIT"],
            explanation: "논리값 저장은 BIT 타입을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s1-q23",
            type: "short",
            prompt: "필드명: `regDate`, 데이터타입: 날짜와 시간을 모두 저장. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["DATETIME", "DATETIME2"],
            explanation: "날짜와 시간은 DATETIME을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s1-q24",
            type: "short",
            prompt: "필드명: `population`, 데이터타입: 21억이 넘는 인구수를 저장하기 위한 정수형. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["BIGINT"],
            explanation: "21억 초과 정수는 BIGINT가 필요합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s1-q25",
            type: "essay",
            prompt: "userTbl(회원)과 buyTbl(구매)을 INNER JOIN 했을 때 결과에 포함되지 않는 행은 어떤 데이터인지 설명하시오.",
            rubric: ["구매 기록이 없는 회원", "회원 테이블에 없는 아이디의 구매 기록(FK 제약이 없다면)"],
            explanation: "두 테이블의 조인 조건(userID)이 일치하는 행만 나오므로, 물건을 한 번도 구매하지 않은 회원은 결과에서 제외됩니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s1-q26",
            type: "essay",
            prompt: "LEFT OUTER JOIN을 사용하여 userTbl(Left)과 buyTbl(Right)을 연결했을 때, 구매 이력이 없는 회원을 찾아내는 WHERE 절 조건을 작성하고 그 이유를 설명하시오.",
            rubric: ["WHERE buyTbl.prodName IS NULL (또는 PK IS NULL)", "LEFT JOIN은 매칭 안 되면 NULL로 채우기 때문"],
            explanation: "WHERE buyTbl.prodName IS NULL; 매칭되는 구매 기록이 없으면 buyTbl 측 컬럼이 NULL로 표시되는 점을 이용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s1-q27",
            type: "short",
            prompt: "userTbl과 buyTbl을 CROSS JOIN (상호 조인) 했을 때 결과 행의 개수는 어떻게 계산되는지 수식으로 설명하시오.",
            acceptableAnswers: ["userTbl 행 개수 * buyTbl 행 개수", "M * N", "M*N"],
            explanation: "한 테이블의 모든 행과 다른 테이블의 모든 행을 결합하므로 두 테이블 행 수의 곱이 됩니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s1-q28",
            type: "short",
            prompt: "INNER JOIN 시 두 테이블에 동일한 이름의 컬럼(userID)이 있을 때, SELECT 절에서 이를 구분하기 위해 반드시 사용해야 하는 것은?",
            acceptableAnswers: ["테이블명.컬럼명", "Alias", "별칭", "buyTbl.userID", "테이블별칭"],
            explanation: "모호성을 피하기 위해 테이블명.컬럼명 형식이나 별칭(Alias)을 사용해야 합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s1-q29",
            type: "essay",
            prompt: "다음 쿼리의 실행 결과가 의미하는 바를 서술하시오.\n```sql\nSELECT DISTINCT U.userID \nFROM userTbl U \nINNER JOIN buyTbl B ON U.userID = B.userID;\n```",
            rubric: ["물건을 구매한 적이 있는 회원들의 목록", "중복 제거됨"],
            explanation: "INNER JOIN으로 구매 기록이 있는 회원을 추리고, DISTINCT로 중복된 아이디를 제거하여 순수 구매자 목록을 보여줍니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s1-q30",
            type: "short",
            prompt: "userTbl의 PK는 userID이고 buyTbl의 FK는 userID입니다. 이 두 테이블을 JOIN할 때 가장 기본이 되는 '조인 조건' 구문을 작성하시오.",
            acceptableAnswers: ["userTbl.userID = buyTbl.userID", "ON userTbl.userID = buyTbl.userID", "U.userID = B.userID"],
            explanation: "PK와 FK 컬럼이 일치하는 조건을 ON 절에 기술해야 합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set20 = set20;
