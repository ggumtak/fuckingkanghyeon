/**
 * Database Practice Quiz - Set 23 (Code-Fill Set 2)
 * File: quizzes/database/data/set23.js
 */
const set23 = {
    setId: "set-23",
    questions: [
        {
            id: "db-s2-q01",
            type: "code-fill",
            prompt: "`userTbl`에 아이디 'SSK', 이름 '성시경', 생년 1979를 입력하되, 나머지 컬럼은 테이블의 DEFAULT 값이나 NULL이 들어가도록 컬럼명을 지정해 입력하세요.",
            language: "sql",
            code: "INSERT INTO userTbl ( ( 1 ) )\nVALUES ('SSK', '성시경', 1979);",
            blanks: [{ index: 1, answer: "userID, name, birthYear", explanation: "입력하고자 하는 세 컬럼만 명시해야 합니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "db-s2-q02",
            type: "code-fill",
            prompt: "`buyTbl`에서 'JYP'가 구매한 물품 내역을 `userTbl`의 'KBS' 아이디로 명의를 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET userID = 'KBS'\n( 1 ) userID = 'JYP';",
            blanks: [{ index: 1, answer: "WHERE", explanation: "변경 대상을 지정하는 조건절입니다." }],
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "db-s2-q03",
            type: "code-fill",
            prompt: "`userTbl`에서 2010년 이전에 가입(`mDate`)한 회원을 모두 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl\nWHERE mDate ( 1 ) '2010-01-01';",
            blanks: [{ index: 1, answer: "<", explanation: "2010년 1월 1일 이전이므로 작다(<) 연산자를 사용합니다." }],
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "db-s2-q04",
            type: "code-fill",
            prompt: "`buyTbl`에 아이디 'JYP', 물품 '모니터', 분류 '전자', 단가 200, 수량 1을 입력하는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\n( 1 ) ('JYP', '모니터', '전자', 200, 1);",
            blanks: [{ index: 1, answer: "VALUES", explanation: "값을 나열할 때 VALUES 절을 사용합니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "db-s2-q05",
            type: "code-fill",
            prompt: "`userTbl`의 모든 회원의 생년(`birthYear`)을 1년씩 감소(나이 증가)시키는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET birthYear = birthYear ( 1 ) 1;",
            blanks: [{ index: 1, answer: "-", explanation: "1을 빼기 위해 뺄셈 연산자(-)를 사용합니다." }],
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "db-s2-q06",
            type: "code-fill",
            prompt: "`buyTbl`에서 분류(`groupName`)가 알 수 없는(NULL) 데이터를 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM buyTbl\nWHERE groupName ( 1 ) NULL;",
            blanks: [{ index: 1, answer: "IS", explanation: "NULL 값 확인은 = 대신 IS NULL을 사용해야 합니다." }],
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "db-s2-q07",
            type: "short",
            prompt: "다음 날짜 함수 결과(일 수 차이)를 숫자로 적으시오.\n```sql\nSELECT DATEDIFF(day, '2023-01-01', '2023-01-05');\n```",
            acceptableAnswers: ["4"],
            explanation: "1월 1일과 1월 5일의 차이는 4일입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "날짜 함수" }
        },
        {
            id: "db-s2-q08",
            type: "short",
            prompt: "다음 문자열 함수 결과를 적으시오.\n```sql\nSELECT REPLICATE('A', 3);\n```",
            acceptableAnswers: ["AAA"],
            explanation: "A를 3번 반복합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "문자열 함수" }
        },
        {
            id: "db-s2-q09",
            type: "short",
            prompt: "다음 함수 결과를 적으시오.\n```sql\nSELECT SUBSTRING('ABCDE', 2, 2);\n```",
            acceptableAnswers: ["BC"],
            explanation: "2번째 글자부터 2개를 가져오므로 BC입니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "문자열 함수" }
        },
        {
            id: "db-s2-q10",
            type: "short",
            prompt: "다음 수학 함수 결과(올림값)를 적으시오.\n```sql\nSELECT CEILING(4.2);\n```",
            acceptableAnswers: ["5"],
            explanation: "CEILING은 소수점을 무조건 올림 처리하여 정수를 반환합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "수치 함수" }
        },
        {
            id: "db-s2-q11",
            type: "short",
            prompt: "다음 함수 결과를 적으시오.\n```sql\nSELECT ISNULL(NULL, '없음');\n``` (SQL Server 기준)",
            acceptableAnswers: ["없음"],
            explanation: "첫 번째 값이 NULL이면 두 번째 값을 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "기타 함수" }
        },
        {
            id: "db-s2-q12",
            type: "short",
            prompt: "다음 문자열 뒤집기 함수의 결과를 적으시오.\n```sql\nSELECT REVERSE('DB');\n```",
            acceptableAnswers: ["BD"],
            explanation: "문자열 순서를 뒤집습니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "문자열 함수" }
        },
        {
            id: "db-s2-q13",
            type: "essay",
            prompt: "데이터 타입 `VARCHAR(MAX)`의 특징과 용도를 `TEXT` 타입과 비교하여 서술하시오.",
            rubric: ["VARCHAR(MAX)는 대용량 텍스트(최대 2GB)를 저장할 수 있는 최신 타입이다.", "과거의 TEXT 타입은 기능 제한이 많아 앞으로는 VARCHAR(MAX) 사용이 권장된다."],
            maxLength: 300,
            explanation: "대용량 데이터를 다루기 위한 타입으로 TEXT의 대체제입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s2-q14",
            type: "essay",
            prompt: "`FLOAT`와 `DECIMAL`의 차이점을 '정확도'와 '부동 소수점' 관점에서 서술하시오.",
            rubric: ["FLOAT는 부동 소수점 방식이라 근사값을 저장하여 오차가 발생할 수 있다.", "DECIMAL은 고정 소수점 방식이라 정확한 수치를 저장한다(돈 계산 등에 적합)."],
            maxLength: 300,
            explanation: "FLOAT는 근사값, DECIMAL은 정확한 값을 저장합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s2-q15",
            type: "essay",
            prompt: "`IDENTITY` 속성이 설정된 컬럼(예: 자동 증가 번호)에 INSERT할 때 주의할 점을 서술하시오.",
            rubric: ["INSERT 문에서 해당 컬럼 값을 직접 지정하면 안 된다(자동 입력됨).", "강제로 입력하려면 `SET IDENTITY_INSERT ON` 옵션을 켜야 한다."],
            maxLength: 300,
            explanation: "자동 증가 컬럼은 값을 명시하지 않아야 합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "데이터 조작" }
        },
        {
            id: "db-s2-q16",
            type: "essay",
            prompt: "데이터 타입 `BIT`의 용도와 저장 가능한 값에 대해 서술하시오.",
            rubric: ["BIT는 0, 1, 또는 NULL만 저장할 수 있다.", "주로 참/거짓(Boolean)을 표현하는 플래그 용도로 사용된다."],
            maxLength: 200,
            explanation: "0과 1만 저장하는 논리형 타입입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "데이터 타입" }
        },
        {
            id: "db-s2-q17",
            type: "essay",
            prompt: "`UNIQUE` 제약조건과 `PRIMARY KEY` 제약조건의 차이점 중 'NULL 허용 여부'에 대해 서술하시오.",
            rubric: ["PRIMARY KEY는 NULL을 절대 허용하지 않는다.", "UNIQUE는 NULL 값을 (보통 1개) 허용할 수 있다."],
            maxLength: 200,
            explanation: "PK는 NOT NULL 필수, UNIQUE는 NULL 가능.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "제약 조건" }
        },
        {
            id: "db-s2-q18",
            type: "essay",
            prompt: "`CHECK` 제약조건의 역할에 대해 '입력 데이터 검증' 관점에서 서술하시오.",
            rubric: ["입력되는 데이터가 특정 조건(예: 나이 > 0)을 만족하는지 검사한다.", "조건에 맞지 않는 데이터의 입력을 거부하여 무결성을 유지한다."],
            maxLength: 200,
            explanation: "데이터의 유효 범위를 제한하는 제약조건입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "제약 조건" }
        },
        {
            id: "db-s2-q19",
            type: "short",
            prompt: "매우 긴 소설책 내용 전체(2GB 이하)를 저장해야 할 때 가장 적절한 문자열 데이터 타입은?",
            acceptableAnswers: ["VARCHAR(MAX)", "NVARCHAR(MAX)"],
            explanation: "MAX 키워드를 사용하여 대용량 텍스트를 저장합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s2-q20",
            type: "short",
            prompt: "회원 탈퇴 여부를 'True/False'로만 구분하여 저장하려 합니다. 가장 작은 공간을 차지하는 데이터 타입은?",
            acceptableAnswers: ["BIT"],
            explanation: "0 또는 1만 저장하는 BIT 타입이 적절합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s2-q21",
            type: "short",
            prompt: "화폐 단위를 저장하려 합니다. SQL Server에서 돈(Currency) 처리에 특화된 데이터 타입은?",
            acceptableAnswers: ["MONEY", "SMALLMONEY"],
            explanation: "화폐 저장을 위한 MONEY 타입이 있습니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s2-q22",
            type: "short",
            prompt: "날짜와 시간을 아주 정밀하게(소수점 7자리까지) 저장해야 하는 경우, DATETIME보다 권장되는 최신 데이터 타입은?",
            acceptableAnswers: ["DATETIME2"],
            explanation: "DATETIME2는 더 넓은 날짜 범위와 정밀한 시간을 지원합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s2-q23",
            type: "short",
            prompt: "과학적 계산을 위해 매우 크거나 매우 작은 실수를 '근사값'으로 빠르게 처리하고 싶습니다. 어떤 타입을 써야 할까요?",
            acceptableAnswers: ["FLOAT", "REAL"],
            explanation: "부동 소수점 처리는 FLOAT를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s2-q24",
            type: "short",
            prompt: "전 세계 모든 문자를 지원하기 위해 '한 글자'만 저장하는 고정 길이 유니코드 필드를 만들고 싶습니다. 타입 정의는?",
            acceptableAnswers: ["NCHAR(1)"],
            explanation: "유니코드(N), 고정길이(CHAR), 1글자이므로 NCHAR(1)입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "필드 생성" }
        },
        {
            id: "db-s2-q25",
            type: "essay",
            prompt: "다음 `GROUP BY`가 포함된 JOIN 쿼리의 의미를 서술하시오.\n```sql\nSELECT U.name, SUM(B.amount) \nFROM userTbl U JOIN buyTbl B ON U.userID = B.userID \nGROUP BY U.name\n```",
            rubric: ["userTbl과 buyTbl을 조인한 후,", "회원 이름(U.name)별로 그룹을 묶어,", "각 회원이 구매한 총 수량(SUM)을 출력한다."],
            maxLength: 300,
            explanation: "회원별 총 구매 수량을 구하는 쿼리입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s2-q26",
            type: "essay",
            prompt: "`RIGHT OUTER JOIN`을 사용하여 `userTbl RIGHT JOIN buyTbl`을 수행했을 때, `userTbl`에 없는 아이디가 `buyTbl`에 있다면 결과가 어떻게 나오는지 서술하시오.",
            rubric: ["RIGHT JOIN이므로 오른쪽 테이블(buyTbl)의 모든 데이터는 무조건 출력된다.", "만약 회원 목록(userTbl)에 없는 아이디가 구매 테이블에 있다면,", "회원 정보(이름 등)는 NULL로 채워진 채 구매 내역이 출력된다."],
            maxLength: 300,
            explanation: "오른쪽 테이블 기준이므로 매칭되지 않는 왼쪽 정보는 NULL이 됩니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s2-q27",
            type: "essay",
            prompt: "`FULL OUTER JOIN`의 동작 방식을 INNER JOIN, LEFT JOIN과 비교하여 서술하시오.",
            rubric: ["FULL OUTER JOIN은 왼쪽과 오른쪽 테이블의 모든 데이터를 합쳐서 보여준다.", "매칭되는 행은 연결하고,", "매칭되지 않는 행(왼쪽에만 있거나 오른쪽에만 있는 경우)도 버리지 않고 상대방 쪽을 NULL로 채워 출력한다."],
            maxLength: 300,
            explanation: "양쪽 테이블의 모든 데이터를 포함하는 합집합 개념입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s2-q28",
            type: "essay",
            prompt: "다음 `UNION` 쿼리의 결과에 대해 서술하시오.\n```sql\nSELECT name FROM userTbl \nUNION \nSELECT name FROM userTbl\n```",
            rubric: ["UNION은 두 쿼리의 결과를 합치면서 '중복을 제거'한다.", "따라서 같은 테이블을 두 번 합쳤으므로, 결과는 원래 테이블의 이름 목록(중복 제거됨)과 동일하다."],
            maxLength: 300,
            explanation: "UNION은 중복을 제거하므로 단순 조회와 결과가 같습니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s2-q29",
            type: "essay",
            prompt: "`EXCEPT` 연산자의 동작을 `userTbl`과 `buyTbl`의 아이디 목록을 예로 들어 설명하시오.\n```sql\nSELECT userID FROM userTbl \nEXCEPT \nSELECT userID FROM buyTbl\n```",
            rubric: ["앞의 쿼리 결과(전체 회원 아이디)에서 뒤의 쿼리 결과(구매한 적 있는 아이디)를 뺀다.", "즉, 차집합(Difference)을 구하는 것으로 '구매한 적이 없는 회원 아이디'만 남는다."],
            maxLength: 300,
            explanation: "차집합 연산으로, 구매 이력이 없는 회원을 구합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        },
        {
            id: "db-s2-q30",
            type: "essay",
            prompt: "`UNION ALL`이 `UNION`보다 성능상 유리한 이유를 서술하시오.",
            rubric: ["UNION은 중복 제거를 위해 내부적으로 정렬(Sort)이나 비교 작업을 수행해야 한다.", "UNION ALL은 중복 검사 없이 단순히 결과를 이어 붙이기 때문에 처리 속도가 더 빠르다."],
            maxLength: 300,
            explanation: "중복 제거 과정이 없어 더 빠릅니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN 해석" }
        }
    ]
};

if (typeof window !== 'undefined') window.set23 = set23;
