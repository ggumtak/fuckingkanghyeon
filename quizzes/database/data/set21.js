/**
 * Database Practice Quiz - Set 21 (Practice Set 2)
 * File: quizzes/database/data/set21.js
 */
const set21 = {
    setId: "set-21",
    questions: [
        {
            id: "s2-q1",
            type: "essay",
            prompt: "buyTbl 테이블의 모든 행에 대해 단가(price)를 10% 인상하는 UPDATE 구문을 작성하시오. (단, WHERE 절 사용 금지)",
            rubric: ["UPDATE buyTbl SET price = price * 1.1;", "WHERE 절 없이 전체 적용됨을 이해"],
            explanation: "UPDATE buyTbl SET price = price * 1.1;",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "s2-q2",
            type: "essay",
            prompt: "userTbl 테이블에서 지역(addr)이 '서울'이거나 '경기'인 회원들을 모두 삭제하는 DELETE 구문을 작성하시오.",
            rubric: ["DELETE FROM userTbl WHERE addr IN ('서울', '경기') 또는 OR 사용"],
            explanation: "DELETE FROM userTbl WHERE addr IN ('서울', '경기');",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "s2-q3",
            type: "essay",
            prompt: "buyTbl에 데이터를 입력하려는데, num 열이 IDENTITY(자동증가)로 설정되어 있어 값을 직접 입력할 수 없습니다. 이를 무시하고 강제로 값을 입력하기 위해 실행해야 하는 설정 구문은?",
            rubric: ["SET IDENTITY_INSERT buyTbl ON;"],
            explanation: "SET IDENTITY_INSERT buyTbl ON; 을 실행하면 자동 증가 컬럼에도 명시적으로 값을 넣을 수 있습니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "s2-q4",
            type: "essay",
            prompt: "buyTbl에서 '전자' 그룹(groupName)에 속한 제품들의 분류를 'Digital'로 변경하는 UPDATE 구문을 작성하시오.",
            rubric: ["UPDATE buyTbl SET groupName = 'Digital' WHERE groupName = '전자';"],
            explanation: "UPDATE buyTbl SET groupName = 'Digital' WHERE groupName = '전자';",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "s2-q5",
            type: "essay",
            prompt: "userTbl에 아이디 'TEST', 이름 '테스트'만 입력하고 나머지 컬럼은 Default 또는 NULL이 들어가도록 하는 INSERT 구문을 작성하시오.",
            rubric: ["INSERT INTO userTbl (userID, name) VALUES ('TEST', '테스트');"],
            explanation: "INSERT INTO userTbl (userID, name) VALUES ('TEST', '테스트');",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "s2-q6",
            type: "essay",
            prompt: "buyTbl에서 가격(price)이 100 이상인 제품을 모두 삭제하는 구문을 작성하시오.",
            rubric: ["DELETE FROM buyTbl WHERE price >= 100;"],
            explanation: "DELETE FROM buyTbl WHERE price >= 100;",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "s2-q7",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT CAST('100' AS INT) + 50;\n```",
            acceptableAnswers: ["150"],
            explanation: "문자열 '100'을 정수로 변환 후 50을 더합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s2-q8",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT CEILING(123.45);\n```",
            acceptableAnswers: ["124"],
            explanation: "CEILING은 소수점 이하 값을 무조건 올림 처리하여 정수를 반환합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s2-q9",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT FLOOR(123.99);\n```",
            acceptableAnswers: ["123"],
            explanation: "FLOOR는 소수점 이하 값을 무조건 버림(내림) 처리합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s2-q10",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT REPLACE('Apple', 'p', 'b');\n```",
            acceptableAnswers: ["Abble"],
            explanation: "문자열 내의 'p'를 모두 'b'로 치환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s2-q11",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT SUBSTRING('KOREA', 2, 2);\n```",
            acceptableAnswers: ["OR"],
            explanation: "2번째 위치부터 2글자를 잘라냅니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s2-q12",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하시오.\n```sql\nSELECT SQRT(100);\n```",
            acceptableAnswers: ["10"],
            explanation: "SQRT는 제곱근을 구하는 함수입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "s2-q13",
            type: "essay",
            prompt: "DECIMAL(5, 2) 데이터 타입에서 괄호 안의 숫자 5와 2가 각각 의미하는 바를 설명하시오.",
            rubric: ["5는 전체 자릿수(정밀도)", "2는 소수점 이하 자릿수(스케일)"],
            explanation: "전체 5자리 숫자를 저장하되, 그중 소수점 아래가 2자리라는 뜻입니다. (예: 123.45)",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s2-q14",
            type: "essay",
            prompt: "TEXT, NTEXT 와 같은 LOB 데이터 타입 대신 최근 SQL Server에서 사용을 권장하는 데이터 타입은 무엇인지 설명하시오.",
            rubric: ["VARCHAR(MAX)", "NVARCHAR(MAX)"],
            explanation: "대용량 텍스트 저장을 위해 VARCHAR(MAX) 또는 NVARCHAR(MAX) 사용을 권장합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s2-q15",
            type: "essay",
            prompt: "묵시적 형변환(Implicit Conversion)과 명시적 형변환(Explicit Conversion)의 차이를 설명하고, 명시적 형변환을 위해 사용하는 함수 2가지를 쓰시오.",
            rubric: ["묵시적: DBMS가 자동으로 변환 / 명시적: 사용자가 직접 변환", "함수: CAST(), CONVERT()"],
            explanation: "묵시적 형변환은 시스템이 자동으로 수행하는 것이고, 명시적 형변환은 CAST나 CONVERT 함수를 써서 의도적으로 타입을 바꾸는 것입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Function" }
        },
        {
            id: "s2-q16",
            type: "essay",
            prompt: "테이블 생성 시 특정 열에 `IDENTITY(1,1)` 속성을 지정하는 이유는 무엇인지 설명하시오.",
            rubric: ["자동 증가값 생성", "1부터 시작하여 1씩 증가"],
            explanation: "데이터 입력 시 일련번호를 자동으로 1부터 1씩 증가시키며 생성하기 위함입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s2-q17",
            type: "essay",
            prompt: "유니코드 문자열을 저장할 때 문자 리터럴 앞에 반드시 붙여야 하는 접두사는 무엇인지 쓰시오. (예: `INSERT INTO ... VALUES( ?'가나다')`)",
            rubric: ["N (대문자)"],
            explanation: "유니코드 상수를 지정할 때는 N'문자열' 형식을 사용해야 합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s2-q18",
            type: "essay",
            prompt: "`UNIQUE` 제약 조건과 `PRIMARY KEY` 제약 조건의 가장 큰 차이점(NULL 허용 여부 관점)을 설명하시오.",
            rubric: ["PRIMARY KEY는 NULL 불가", "UNIQUE는 NULL 1개 허용"],
            explanation: "PK는 NULL을 허용하지 않지만, UNIQUE는 중복을 막되 NULL 값은 (일반적으로 1개) 허용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "s2-q19",
            type: "short",
            prompt: "필드명: `story`, 데이터타입: 2GB까지 저장 가능한 가변 길이 유니코드 문자열. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["NVARCHAR(MAX)"],
            explanation: "대용량 유니코드 텍스트는 NVARCHAR(MAX)를 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s2-q20",
            type: "short",
            prompt: "필드명: `salary`, 데이터타입: 통화(돈) 값을 저장하기 위한 전용 데이터 타입. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["MONEY"],
            explanation: "화폐 단위 저장을 위해 MONEY 타입을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s2-q21",
            type: "short",
            prompt: "필드명: `seq`, 데이터타입: -32,768 ~ 32,767 범위의 작은 정수. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["SMALLINT"],
            explanation: "INT보다 작은 범위의 정수는 SMALLINT를 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s2-q22",
            type: "short",
            prompt: "필드명: `meetingTime`, 데이터타입: 날짜 없이 시간(시:분:초.나노초)만 저장. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["TIME"],
            explanation: "시간 정보만 저장할 때는 TIME 타입을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s2-q23",
            type: "short",
            prompt: "필드명: `ratio`, 데이터타입: 부동 소수점 방식의 근사치를 저장하는 실수형. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["FLOAT", "REAL"],
            explanation: "부동 소수점 실수는 FLOAT를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s2-q24",
            type: "short",
            prompt: "필드명: `uuid`, 데이터타입: 전역 고유 식별자(GUID)를 저장하는 타입. SQL 정의 구문을 작성하시오.",
            acceptableAnswers: ["UNIQUEIDENTIFIER"],
            explanation: "GUID 저장을 위해 UNIQUEIDENTIFIER 타입을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "s2-q25",
            type: "essay",
            prompt: "userTbl(회원)과 buyTbl(구매)을 `FULL OUTER JOIN` 했을 때의 결과 집합이 어떤 데이터를 포함하는지 설명하시오.",
            rubric: ["왼쪽 테이블의 모든 데이터", "오른쪽 테이블의 모든 데이터", "매칭되지 않는 부분은 NULL 처리"],
            explanation: "조건이 일치하는 데이터뿐만 아니라, 구매 내역이 없는 회원과 (이론상) 회원 정보가 없는 구매 내역까지 모두 포함합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s2-q26",
            type: "essay",
            prompt: "`UNION`과 `UNION ALL`의 차이점을 중복 데이터 처리 관점에서 설명하시오.",
            rubric: ["UNION은 중복을 제거함", "UNION ALL은 중복을 포함하여 무조건 합침"],
            explanation: "UNION은 결과 합치기 후 중복 행을 제거(정렬 유발)하지만, UNION ALL은 단순히 결과를 합쳐서 보여줍니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s2-q27",
            type: "short",
            prompt: "두 테이블을 연결할 때, 조인 조건이 없는 경우 발생하며 모든 경우의 수를 조합하여 결과 행을 만드는 조인 방식의 이름은?",
            acceptableAnswers: ["CROSS JOIN", "상호 조인", "Cartesian Product", "교차조인"],
            explanation: "조건 없이 M*N개의 행을 만드는 것은 CROSS JOIN입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s2-q28",
            type: "short",
            prompt: "다음 쿼리의 빈칸에 들어갈 알맞은 조인 키워드는?\n```sql\nSELECT * FROM A \n(   ?   ) JOIN B ON A.id = B.id\nWHERE B.id IS NULL;\n```",
            acceptableAnswers: ["LEFT", "LEFT OUTER"],
            explanation: "B테이블에 없는 A테이블의 데이터를 찾기 위해(IS NULL 체크) LEFT OUTER JOIN을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s2-q29",
            type: "essay",
            prompt: "자체 조인(Self Join)은 어떤 경우에 사용하는지 `empTbl` (직원, 직속상관) 예를 들어 설명하시오.",
            rubric: ["동일한 테이블을 조인할 때 사용", "직원 테이블 내에서 '직원'과 '상관' 관계를 찾을 때 등 계층형 구조 조회 시 사용"],
            explanation: "자기 자신의 테이블과 조인하여, 같은 테이블 내의 계층 관계(부하직원-상관) 등을 조회할 때 사용합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "s2-q30",
            type: "short",
            prompt: "SQL에서 두 쿼리의 결과 중 '교집합'(공통된 행)만을 반환하는 집합 연산자는 무엇인가요?",
            acceptableAnswers: ["INTERSECT"],
            explanation: "INTERSECT 연산자는 두 결과 집합 모두에 존재하는 데이터만 반환합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set21 = set21;
