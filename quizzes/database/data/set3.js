/**
 * Database Midterm Quiz - Set 3 (Round 3)
 * File: quizzes/database/data/set3.js
 */
const set3 = {
    setId: "set-3",
    questions: [
        {
            id: "dml-seq-01",
            type: "code-fill",
            prompt: "다음은 시퀀스(SEQUENCE) 객체를 사용하여 `userTbl`에 데이터를 삽입하는 구문입니다. `userSeq` 시퀀스에서 다음 값을 가져오도록 빈칸을 채우세요.",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name)\nVALUES ( ( 1 ) FOR userSeq, '홍길동' );",
            blanks: [
                { index: 1, answer: "NEXT VALUE", explanation: "시퀀스의 다음 값을 가져오는 구문은 `NEXT VALUE FOR 시퀀스명`입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "SEQUENCE" }
        },
        {
            id: "dml-identity-01",
            type: "code-fill",
            prompt: "`IDENTITY` 속성이 설정된 `buyTbl`의 `num` 컬럼에 강제로 값을 입력하려고 합니다. 빈칸을 채워 설정을 변경하고 입력하세요.",
            language: "sql",
            code: "SET IDENTITY_INSERT buyTbl ( 1 );\nINSERT INTO buyTbl (num, userID, prodName) VALUES (100, 'ABC', '책');\nSET IDENTITY_INSERT buyTbl ( 2 );",
            blanks: [
                { index: 1, answer: "ON", explanation: "IDENTITY 컬럼에 값을 직접 입력하려면 `IDENTITY_INSERT` 옵션을 ON으로 켜야 합니다." },
                { index: 2, answer: "OFF", explanation: "입력이 끝난 후에는 다시 OFF로 꺼야 합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "IDENTITY_INSERT" }
        },
        {
            id: "dml-update-05",
            type: "code-fill",
            prompt: "`buyTbl`에서 '전자' 분류(`groupName`)에 속하는 제품들의 단가(`price`)를 50씩 인하하는 구문을 작성하세요.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price - 50\nWHERE ( 1 ) = '전자';",
            blanks: [
                { index: 1, answer: "groupName", explanation: "분류를 나타내는 컬럼명은 groupName입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE Logic" }
        },
        {
            id: "dml-select-into-01",
            type: "mcq",
            prompt: "다음 구문의 기능에 대한 설명으로 옳은 것은?\n```sql\nSELECT * INTO newTbl FROM oldTbl;\n```",
            options: [
                "① oldTbl의 데이터를 기존에 존재하는 newTbl에 복사한다.",
                "② newTbl이라는 새 테이블을 생성하면서 oldTbl의 데이터를 복사한다.",
                "③ oldTbl의 데이터를 newTbl로 이동시키고 oldTbl은 삭제한다.",
                "④ oldTbl과 newTbl의 데이터를 서로 교환한다."
            ],
            correctIndex: 1,
            explanation: "`SELECT ... INTO` 문은 쿼리 결과를 기반으로 새 테이블을 생성하여 데이터를 삽입합니다. (기존 테이블 삽입은 `INSERT INTO ... SELECT`)",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "SELECT INTO" }
        },
        {
            id: "func-pred-13",
            type: "short",
            prompt: "다음 수학 함수 쿼리의 결과값을 숫자로 적으시오.\n```sql\nSELECT POWER(2, 4);\n```",
            acceptableAnswers: ["16"],
            explanation: "POWER(a, b)는 a의 b제곱을 반환합니다. 2의 4제곱은 16입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Math Functions" }
        },
        {
            id: "func-pred-14",
            type: "mcq",
            prompt: "다음 날짜 함수의 결과로 올바른 것은? (쿼리 실행일은 평년 2월이라 가정)\n```sql\nSELECT EOMONTH('2023-02-05');\n```",
            options: [
                "① 2023-02-05",
                "② 2023-02-28",
                "③ 2023-03-01",
                "④ 2023-02-01"
            ],
            correctIndex: 1,
            explanation: "EOMONTH() 함수는 해당 날짜가 포함된 달의 **마지막 날짜**를 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Date Functions" }
        },
        {
            id: "func-pred-15",
            type: "short",
            prompt: "다음 문자열 함수의 결과를 적으시오.\n```sql\nSELECT LOWER('SQL Server');\n```",
            acceptableAnswers: ["sql server", "'sql server'"],
            explanation: "LOWER() 함수는 모든 대문자를 소문자로 변환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "String Functions" }
        },
        {
            id: "func-pred-16",
            type: "mcq",
            prompt: "다음 중 명시적 형변환 함수가 **아닌** 것은?",
            options: [
                "① CAST()",
                "② CONVERT()",
                "③ PARSE()",
                "④ ROUND()"
            ],
            correctIndex: 3,
            explanation: "ROUND()는 반올림을 수행하는 수학 함수이며, 나머지는 데이터 타입을 변환하는 함수입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Functions Classification" }
        },
        {
            id: "dtype-desc-13",
            type: "short",
            prompt: "실수형 데이터 타입 중, `FLOAT`보다 정밀도는 낮지만(7자리) 저장 공간(4바이트)을 적게 차지하는 데이터 타입은?",
            acceptableAnswers: ["REAL", "real"],
            explanation: "REAL 타입은 4바이트 부동 소수점 값을 저장합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-desc-14",
            type: "mcq",
            prompt: "날짜와 시간을 저장할 때, **표준 시간대(Time Zone)** 정보(예: +09:00)까지 함께 저장할 수 있는 데이터 타입은?",
            options: [
                "① DATETIME",
                "② DATETIME2",
                "③ DATETIMEOFFSET",
                "④ TIMESTAMP"
            ],
            correctIndex: 2,
            explanation: "DATETIMEOFFSET은 UTC와의 시차 정보를 포함하여 날짜와 시간을 저장합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "dtype-create-13",
            type: "short",
            prompt: "`userTbl` 생성 시 `id` 컬럼을 정수형으로 정의하고, **1부터 시작하여 1씩 자동 증가**하도록 설정하는 구문을 작성하시오. (타입과 속성만 작성)",
            acceptableAnswers: ["id INT IDENTITY(1,1)", "id int identity(1,1)"],
            explanation: "자동 증가는 `IDENTITY(seed, increment)` 속성을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "dtype-create-14",
            type: "short",
            prompt: "`email` 컬럼을 정의할 때, 값이 입력되지 않았을 경우 자동으로 `'NO_EMAIL'`이라는 문자열이 저장되도록 **기본값 제약조건**을 설정하시오. (컬럼명, 타입, 제약조건 순 작성)",
            acceptableAnswers: ["email VARCHAR(30) DEFAULT 'NO_EMAIL'", "email varchar(30) default 'NO_EMAIL'"],
            explanation: "기본값은 `DEFAULT '값'` 형식을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Field Definition" }
        },
        {
            id: "join-op-01",
            type: "mcq",
            prompt: "다음 두 쿼리의 결과 집합에서 **첫 번째 쿼리에만 있고 두 번째 쿼리에는 없는** 행만 추출하는 집합 연산자는?",
            options: [
                "① UNION",
                "② UNION ALL",
                "③ INTERSECT",
                "④ EXCEPT"
            ],
            correctIndex: 3,
            explanation: "EXCEPT(차집합)는 선행 쿼리의 결과에서 후행 쿼리의 결과를 뺀 나머지를 반환합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Set Operators" }
        },
        {
            id: "join-op-02",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하되, 조건이 일치하지 않는 양쪽 테이블의 모든 데이터를 포함하여 출력하고자 합니다. 빈칸을 채우세요.",
            language: "sql",
            code: "SELECT u.name, b.prodName\nFROM userTbl u\n( 1 ) JOIN buyTbl b\nON u.userID = b.userID;",
            blanks: [
                { index: 1, answer: "FULL OUTER", explanation: "양쪽 테이블의 모든 행을 포함하려면 FULL OUTER JOIN을 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "OUTER JOIN" }
        },
        {
            id: "join-op-03",
            type: "essay",
            prompt: "`INTERSECT` 연산자와 `INNER JOIN`의 공통점과 차이점을 간략히 설명하시오.",
            rubric: [
                "공통점: 두 데이터 집합의 공통된(교집합) 부분만 추출한다.",
                "차이점: INTERSECT는 두 SELECT문의 결과 열 개수와 타입이 일치해야 한다.",
                "차이점: INNER JOIN은 특정 컬럼(ON 조건)을 기준으로 테이블을 옆으로 결합한다."
            ],
            maxLength: 300,
            explanation: "INTERSECT는 집합 연산자로 행 단위 비교를, INNER JOIN은 테이블 결합을 수행합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Set Operators vs JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set3 = set3;
