/**
 * Database Midterm Quiz - Set 9 (Round 8)
 * File: quizzes/database/data/set9.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set9 = {
    setId: "set-9",
    questions: [
        {
            id: "r8-insert-01",
            type: "code-fill",
            prompt: "`buyTbl`의 `num` 컬럼은 IDENTITY 속성이 있어 직접 값을 넣을 수 없습니다. 하지만 데이터를 복구하기 위해 강제로 값을 넣으려 할 때 사용하는 옵션 설정 구문입니다.",
            language: "sql",
            code: "SET IDENTITY_INSERT buyTbl ( 1 );\nINSERT INTO buyTbl (num, userID, prodName) VALUES (1, 'KBS', '운동화');\nSET IDENTITY_INSERT buyTbl OFF;",
            blanks: [
                { index: 1, answer: "ON", explanation: "강제 입력을 위해 IDENTITY_INSERT를 ON으로 설정합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r8-insert-02",
            type: "short",
            prompt: "INSERT 문 실행 시, 문자열 데이터 안에 작은따옴표(') 자체를 문자로 포함시키려면 어떻게 해야 하는가? (예: `I'm` 입력)",
            acceptableAnswers: ["''", "작은따옴표 두 개", "이스케이프"],
            explanation: "작은따옴표를 두 번 연속(`''`) 쓰면 문자로 인식됩니다. (`'I''m'` 처럼)",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r8-insert-03",
            type: "code-fill",
            prompt: "`userTbl`에 여러 명의 회원을 한 번의 쿼리로 삽입하는 다중 행 INSERT 구문입니다.",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name) \nVALUES ('AAA', '에이'), ( ( 1 ), '비비' ), ('CCC', '씨씨');",
            blanks: [
                { index: 1, answer: "'BBB'", explanation: "두 번째 행의 ID 값도 문자열이므로 따옴표가 필요합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r8-insert-04",
            type: "mcq",
            prompt: "다음 중 `SELECT ... INTO` 구문으로 데이터를 복사할 때 복사되지 **않는** 속성은?",
            options: [
                "① 컬럼 이름",
                "② 데이터 타입",
                "③ 행 데이터",
                "④ 기본 키(PK) 및 외래 키(FK) 제약조건"
            ],
            correctIndex: 3,
            explanation: "테이블 구조와 데이터는 복사되지만, 키 제약조건은 자동으로 복사되지 않습니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r8-update-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 단가(`price`)가 1000 이상인 제품의 가격을 5% 인상(1.05배)하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl SET price = price * 1.05 WHERE price ( 1 ) 1000;",
            blanks: [
                { index: 1, answer: ">=", explanation: "1000 이상 조건이므로 `>=`를 사용합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r8-update-02",
            type: "short",
            prompt: "`UPDATE` 문으로 특정 컬럼 값을 `NULL`로 만들고 싶을 때, `SET` 절에 어떻게 작성해야 하는가? (컬럼명 col1 가정)",
            acceptableAnswers: ["col1 = NULL", "SET col1 = NULL"],
            explanation: "`SET 컬럼명 = NULL` 형식을 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r8-update-03",
            type: "code-fill",
            prompt: "`userTbl`의 나이(`birthYear`) 정보를 이용해 모든 회원의 나이를 계산하여 별도의 `age` 컬럼(임시 가정)에 업데이트한다고 할 때, 현재 연도 2025년을 기준으로 나이를 구하는 식입니다.",
            language: "sql",
            code: "UPDATE userTbl SET age = 2025 - ( 1 ) + 1;",
            blanks: [
                { index: 1, answer: "birthYear", explanation: "나이 = 현재연도 - 출생연도 + 1 (한국식 나이 가정 시) 입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r8-update-04",
            type: "essay",
            prompt: "`buyTbl`에서 `userTbl`의 지역이 '서울'인 사용자가 구매한 제품의 수량(`amount`)을 1씩 증가시키는 `UPDATE` 구문의 논리를 설명하시오. (Join 포함 UPDATE)",
            rubric: ["FROM 절에 buyTbl과 userTbl을 조인한다", "WHERE 절에서 userTbl.addr = '서울' 조건을 건다", "SET 절에서 buyTbl.amount += 1을 수행한다"],
            maxLength: 300,
            explanation: "UPDATE 문에도 FROM 절을 써서 조인한 뒤 조건을 걸 수 있습니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r8-delete-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 분류(`groupName`)가 '의류'이거나 '서적'인 데이터를 모두 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM buyTbl WHERE groupName IN ( '의류', ( 1 ) );",
            blanks: [
                { index: 1, answer: "'서적'", explanation: "IN 연산자 안에 삭제할 분류명을 나열합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r8-delete-02",
            type: "mcq",
            prompt: "`TRUNCATE TABLE` 명령어가 `DELETE` 보다 빠른 주된 이유는?",
            options: [
                "① 데이터를 삭제하지 않고 숨기기 때문이다.",
                "② 트랜잭션 로그를 최소한으로 기록하기 때문이다.",
                "③ 인덱스를 사용하지 않기 때문이다.",
                "④ WHERE 절을 사용할 수 있기 때문이다."
            ],
            correctIndex: 1,
            explanation: "로그 기록을 줄여 성능을 높입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r8-delete-03",
            type: "code-fill",
            prompt: "`userTbl`의 상위 5명 회원만 삭제하려고 합니다. `TOP` 구문을 활용하세요.",
            language: "sql",
            code: "DELETE ( 1 ) (5) FROM userTbl;",
            blanks: [
                { index: 1, answer: "TOP", explanation: "DELETE TOP(n) 구문을 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r8-delete-04",
            type: "short",
            prompt: "`DELETE` 문을 실행한 후, 아직 `COMMIT` 하지 않은 상태라면 데이터를 복구하기 위해 실행해야 하는 명령어는?",
            acceptableAnswers: ["ROLLBACK", "롤백"],
            explanation: "트랜잭션을 취소하고 되돌리는 명령은 ROLLBACK입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r8-func-01",
            type: "short",
            prompt: "`SELECT ABS(-100)`의 결과값은?",
            acceptableAnswers: ["100"],
            explanation: "절대값 함수입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r8-func-02",
            type: "mcq",
            prompt: "`SELECT FLOOR(3.9)`의 결과는?",
            options: ["① 3", "② 4", "③ 3.9", "④ 3.5"],
            correctIndex: 0,
            explanation: "FLOOR는 내림 함수이므로 3.9보다 작은 최대 정수 3을 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r8-func-03",
            type: "code-fill",
            prompt: "문자열 'SQL Server 2019'에서 'Server'라는 단어가 시작되는 위치(인덱스)를 찾는 함수입니다.",
            language: "sql",
            code: "SELECT ( 1 )('Server', 'SQL Server 2019');",
            blanks: [
                { index: 1, answer: "CHARINDEX", explanation: "문자열 위치 찾기 함수는 CHARINDEX입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r8-func-04",
            type: "short",
            prompt: "날짜형 데이터를 '2025년 01월 01일' 같은 특정 형식의 문자열로 변환할 때 사용하는 함수는 `FORMAT` 또는 무엇인가?",
            acceptableAnswers: ["CONVERT"],
            explanation: "CONVERT 함수에 스타일 코드를 주어 형식을 지정할 수 있습니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r8-dtype-desc-01",
            type: "mcq",
            prompt: "`DECIMAL(5, 2)` 데이터 타입에 저장할 수 **없는** 값은?",
            options: ["① 123.45", "② 12.34", "③ 1234.5", "④ -123.45"],
            correctIndex: 2,
            explanation: "전체 5자리 중 소수점 2자리를 쓰므로 정수부는 3자리까지만 가능합니다. 1234.5는 정수부가 4자리라 불가능합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r8-dtype-desc-02",
            type: "short",
            prompt: "`DATETIME`과 `DATE`의 가장 큰 차이점은 무엇인가?",
            acceptableAnswers: ["시간 포함 여부", "시분초 저장 여부"],
            explanation: "DATETIME은 시간까지, DATE는 날짜만 저장합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r8-dtype-desc-03",
            type: "essay",
            prompt: "큰 이미지를 DB에 저장할 때 사용하는 `VARBINARY(MAX)` 타입의 특징을 간단히 설명하시오.",
            rubric: ["최대 2GB까지 저장 가능", "가변 길이 이진 데이터"],
            maxLength: 200,
            explanation: "대용량 이진 데이터를 저장하는 LOB 타입입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r8-dtype-create-01",
            type: "short",
            prompt: "컬럼 `isMember`를 `BIT` 타입으로 정의하고, 기본값을 1로 설정하세요.",
            acceptableAnswers: ["isMember BIT DEFAULT 1"],
            explanation: "BIT 타입과 DEFAULT 제약조건을 조합합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r8-dtype-create-02",
            type: "short",
            prompt: "컬럼 `moneyValue`를 화폐 전용 타입 `SMALLMONEY`로 정의하세요.",
            acceptableAnswers: ["moneyValue SMALLMONEY"],
            explanation: "SMALLMONEY 타입입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r8-dtype-create-03",
            type: "short",
            prompt: "컬럼 `bigText`를 유니코드 대용량 텍스트 저장용(`MAX`)으로 정의하세요.",
            acceptableAnswers: ["bigText NVARCHAR(MAX)"],
            explanation: "NVARCHAR(MAX)를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r8-join-01",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하되, 한 번도 구매하지 않은 회원만 출력하려고 합니다. `LEFT JOIN` 후 `WHERE` 절을 완성하세요.",
            language: "sql",
            code: "SELECT u.name\nFROM userTbl u LEFT JOIN buyTbl b\nON u.userID = b.userID\nWHERE b.prodName ( 1 );",
            blanks: [
                { index: 1, answer: "IS NULL", explanation: "조인된 오른쪽 테이블 컬럼이 NULL인 경우가 매칭 안 된(구매 안 한) 경우입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r8-join-02",
            type: "mcq",
            prompt: "`FULL OUTER JOIN`의 결과는 집합 연산으로 비유하면 무엇과 같은가?",
            options: ["① 교집합", "② 차집합", "③ 합집합", "④ 부분집합"],
            correctIndex: 2,
            explanation: "양쪽 테이블의 모든 데이터를 포함하므로 합집합과 유사합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r8-join-03",
            type: "short",
            prompt: "다음 `CROSS JOIN` 쿼리의 결과 건수는? (userTbl: 10건, buyTbl: 5건 가정)\n```sql\nSELECT * FROM userTbl CROSS JOIN buyTbl;\n```",
            acceptableAnswers: ["50", "50건"],
            explanation: "10 * 5 = 50건입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set9 = set9;
