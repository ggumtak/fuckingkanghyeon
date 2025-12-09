/**
 * Database Midterm Quiz - Set 5 (Round 5)
 * File: quizzes/database/data/set5.js
 */
const set5 = {
    setId: "set-5",
    questions: [
        {
            id: "r5-insert-01",
            type: "code-fill",
            prompt: "`userTbl`에 아이디 'ABC', 이름 '에이비', 생년 1990, 지역 '서울', 국번 '010', 전화번호 '11112222', 키 175, 가입일 '2023-01-01'인 회원을 삽입하는 구문입니다.",
            language: "sql",
            code: "INSERT INTO userTbl \nVALUES ('ABC', '에이비', 1990, '서울', '010', '11112222', ( 1 ), ( 2 ));",
            blanks: [
                { index: 1, answer: "175", explanation: "키(height)는 숫자형이므로 따옴표 없이 입력합니다." },
                { index: 2, answer: "'2023-01-01'", explanation: "날짜형 데이터는 문자열처럼 작은따옴표로 감싸야 합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r5-insert-02",
            type: "code-fill",
            prompt: "`buyTbl`의 `num` 컬럼이 자동 증가(IDENTITY)라고 할 때, `num`을 제외하고 나머지 컬럼(userID, prodName, groupName, price, amount)만 지정하여 데이터를 넣는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl ( ( 1 ), prodName, groupName, price, amount )\nVALUES ('KBS', '노트북', '전자', 1000, 1);",
            blanks: [
                { index: 1, answer: "userID", explanation: "첫 번째로 지정할 컬럼은 사용자 아이디(userID)입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r5-insert-03",
            type: "mcq",
            prompt: "다음 INSERT 구문 중 문법적으로 오류가 발생할 가능성이 가장 높은 것은? (단, `num`은 PK이자 IDENTITY 컬럼임)",
            options: [
                "① INSERT INTO buyTbl VALUES (NULL, 'KBS', '운동화', NULL, 30, 2);",
                "② INSERT INTO buyTbl (userID, prodName, price, amount) VALUES ('KBS', '운동화', 30, 2);",
                "③ INSERT INTO buyTbl VALUES (1, 'KBS', '운동화', NULL, 30, 2);",
                "④ INSERT INTO buyTbl (userID, prodName) VALUES ('KBS', '운동화');"
            ],
            correctIndex: 2,
            explanation: "IDENTITY 컬럼(`num`)에는 명시적으로 값을 지정(여기서는 1)하여 입력할 수 없습니다(IDENTITY_INSERT OFF 상태 가정).",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r5-insert-04",
            type: "code-fill",
            prompt: "기존 테이블 `buyTbl_Backup`이 이미 존재할 때, `buyTbl`의 모든 데이터를 백업 테이블로 복사하여 삽입하는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl_Backup\nSELECT ( 1 ) FROM buyTbl;",
            blanks: [
                { index: 1, answer: "*", explanation: "모든 열을 선택하려면 와일드카드 *를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r5-insert-05",
            type: "short",
            prompt: "테이블 생성 시 정의된 기본값(Default)을 사용하여 데이터를 INSERT하려 합니다. VALUES 절에 직접 값을 쓰는 대신 사용할 수 있는 키워드는?",
            acceptableAnswers: ["DEFAULT"],
            explanation: "값을 명시하지 않고 기본값을 넣으려면 `DEFAULT` 키워드를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r5-insert-06",
            type: "code-fill",
            prompt: "자동 증가 값을 생성하는 시퀀스 `buySeq`를 사용하여 `buyTbl`에 값을 넣는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl VALUES ( ( 1 ) VALUE FOR buySeq, 'KBS', '노트북', '전자', 1000, 1);",
            blanks: [
                { index: 1, answer: "NEXT", explanation: "시퀀스의 다음 값을 가져오는 구문은 `NEXT VALUE FOR ...` 입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r5-update-01",
            type: "code-fill",
            prompt: "`userTbl`에서 'KBS'의 주소(`addr`)를 '경북'으로 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET addr = '경북'\nWHERE ( 1 ) = 'KBS';",
            blanks: [
                { index: 1, answer: "userID", explanation: "회원을 식별하는 PK 컬럼은 userID입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r5-update-02",
            type: "code-fill",
            prompt: "`buyTbl`의 모든 제품 단가(`price`)를 50% 인상(1.5배)하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price * ( 1 );",
            blanks: [
                { index: 1, answer: "1.5", explanation: "50% 인상은 1.5를 곱하는 것과 같습니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r5-update-03",
            type: "short",
            prompt: "UPDATE 문을 작성할 때 `WHERE` 절을 실수로 생략하면 어떤 결과가 발생하는가?",
            acceptableAnswers: ["모든 행이 수정된다", "전체 데이터가 변경된다"],
            explanation: "조건이 없으므로 테이블의 모든 행에 대해 수정이 일어납니다.",
            meta: { difficulty: "medium", skillTag: "[디버깅]", topic: "UPDATE" }
        },
        {
            id: "r5-update-04",
            type: "code-fill",
            prompt: "`userTbl`에서 국번(`mobile1`)이 없는(NULL) 회원의 국번을 '010'으로 채우는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET mobile1 = '010'\nWHERE mobile1 ( 1 );",
            blanks: [
                { index: 1, answer: "IS NULL", explanation: "NULL 값 확인은 `IS NULL`을 사용해야 합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r5-update-05",
            type: "mcq",
            prompt: "다음 중 UPDATE 구문의 형식이 올바른 것은?",
            options: [
                "① UPDATE userTbl VALUES (addr='서울') WHERE userID='KBS'",
                "② UPDATE userTbl SET addr='서울' WHERE userID='KBS'",
                "③ UPDATE userTbl (addr) VALUES ('서울') WHERE userID='KBS'",
                "④ SELECT * FROM userTbl INTO addr='서울'"
            ],
            correctIndex: 1,
            explanation: "UPDATE 구문은 `UPDATE 테이블 SET 열=값 WHERE 조건` 형식을 따릅니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r5-update-06",
            type: "code-fill",
            prompt: "서브쿼리를 활용하여 '운동화'를 구매한 적이 있는 사용자의 키(`height`)를 5cm 증가시키는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET height = height + 5\nWHERE userID IN ( SELECT userID FROM buyTbl WHERE ( 1 ) = '운동화' );",
            blanks: [
                { index: 1, answer: "prodName", explanation: "구매 테이블에서 제품명 컬럼은 prodName입니다." }
            ],
            meta: { difficulty: "hard", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r5-delete-01",
            type: "code-fill",
            prompt: "`userTbl`에서 키(`height`)가 170보다 작은 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl\nWHERE ( 1 ) < 170;",
            blanks: [
                { index: 1, answer: "height", explanation: "키 정보는 height 컬럼에 저장됩니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r5-delete-02",
            type: "code-fill",
            prompt: "`buyTbl`의 데이터를 모두 지우되, 테이블 구조는 남기고 트랜잭션 로그 공간을 절약하는 가장 빠른 방법을 사용하세요.",
            language: "sql",
            code: "( 1 ) TABLE buyTbl;",
            blanks: [
                { index: 1, answer: "TRUNCATE", explanation: "TRUNCATE는 로그 기록을 최소화하며 모든 행을 빠르게 삭제합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r5-delete-03",
            type: "mcq",
            prompt: "`DELETE FROM userTbl`을 실행했을 때의 결과는?",
            options: [
                "① 오류가 발생한다.",
                "② userTbl 테이블 파일 자체가 삭제된다.",
                "③ userTbl의 모든 행 데이터가 삭제되지만 테이블 껍데기는 남는다.",
                "④ 첫 번째 행만 삭제된다."
            ],
            correctIndex: 2,
            explanation: "WHERE 절 없는 DELETE는 모든 행을 삭제하지만 테이블 객체(스키마)는 유지합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r5-delete-04",
            type: "short",
            prompt: "참조 무결성 제약조건(FK)으로 연결된 부모 테이블의 행을 삭제하려 할 때, 자식 테이블에 데이터가 남아있으면 삭제가 거부됩니다. 이를 해결하기 위해 삭제 시 자식 데이터도 함께 지워지도록 설정하는 옵션은?",
            acceptableAnswers: ["ON DELETE CASCADE", "CASCADE"],
            explanation: "ON DELETE CASCADE 옵션은 부모 데이터 삭제 시 참조하는 자식 데이터도 연쇄적으로 삭제합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r5-delete-05",
            type: "code-fill",
            prompt: "서브쿼리를 이용해 '전자' 분류(`groupName`) 제품을 구매한 적이 없는 구매 기록만 삭제하는(사실상 의미 없지만 문법 연습용) 구문을 완성하세요.",
            language: "sql",
            code: "DELETE FROM buyTbl WHERE groupName ( 1 ) '전자';",
            blanks: [
                { index: 1, answer: "!=", explanation: "'전자'가 아닌 것만 삭제하므로 `<>` 또는 `!=` 연산자를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r5-delete-06",
            type: "short",
            prompt: "DROP TABLE과 DELETE TABLE(틀린문법) 중 실제로 존재하는 명령어는 무엇인가?",
            acceptableAnswers: ["DROP TABLE"],
            explanation: "테이블 자체를 삭제하는 명령은 `DROP TABLE`이며, 데이터를 삭제하는 것은 `DELETE FROM`입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r5-func-01",
            type: "mcq",
            prompt: "다음 쿼리의 결과값은? `SELECT LEFT('ABCDE', 2)`",
            options: ["① AB", "② CD", "③ DE", "④ BC"],
            correctIndex: 0,
            explanation: "LEFT(문자열, n)은 왼쪽에서 n글자를 가져옵니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r5-func-02",
            type: "short",
            prompt: "문자열의 앞뒤 공백을 제거하는 함수 `LTRIM`과 `RTRIM`을 사용하여 ' ABC '의 양쪽 공백을 모두 없애는 쿼리를 작성할 때 빈칸에 들어갈 함수는? `SELECT ( )( ' ABC ' )`",
            acceptableAnswers: ["TRIM"],
            explanation: "최신 SQL Server 버전에서는 `TRIM()` 함수로 양쪽 공백을 한 번에 제거할 수 있습니다. (혹은 LTRIM(RTRIM(...)))",
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r5-func-03",
            type: "mcq",
            prompt: "`SELECT CEILING(4.1)`의 결과는?",
            options: ["① 4", "② 4.1", "③ 5", "④ 4.5"],
            correctIndex: 2,
            explanation: "CEILING은 올림 함수이므로 4.1보다 큰 정수 5를 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r5-func-04",
            type: "short",
            prompt: "`GETDATE()` 함수는 무엇을 반환하는가?",
            acceptableAnswers: ["현재 날짜와 시간", "시스템 날짜 시간"],
            explanation: "현재 시스템의 날짜와 시간을 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r5-func-05",
            type: "mcq",
            prompt: "두 날짜 `2020-01-01`과 `2021-01-01` 사이의 '일(Day)' 수 차이를 구하는 함수는?",
            options: ["① DATEDIFF(day, ...)", "② DATEADD(day, ...)", "③ DATENAME(day, ...)", "④ DATEPART(day, ...)"],
            correctIndex: 0,
            explanation: "DATEDIFF는 차이를 구합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r5-func-06",
            type: "code-fill",
            prompt: "NULL 값을 다른 값으로 대체하는 함수입니다. `mobile1`이 NULL이면 '없음'으로 출력하는 구문을 완성하세요.",
            language: "sql",
            code: "SELECT ( 1 )(mobile1, '없음') FROM userTbl;",
            blanks: [
                { index: 1, answer: "ISNULL", explanation: "SQL Server에서 `ISNULL(컬럼, 대체값)` 함수를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r5-dtype-desc-01",
            type: "short",
            prompt: "고정 길이 문자열 타입 `CHAR`는 남는 공간을 무엇으로 채우는가?",
            acceptableAnswers: ["공백", "스페이스"],
            explanation: "지정된 길이보다 짧은 데이터가 들어오면 나머지는 공백으로 채워집니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r5-dtype-desc-02",
            type: "mcq",
            prompt: "가변 길이 유니코드 문자열을 저장하며, 최대 2GB까지 저장 가능한 데이터 타입은?",
            options: ["① VARCHAR(MAX)", "② NVARCHAR(MAX)", "③ NCHAR(MAX)", "④ TEXT"],
            correctIndex: 1,
            explanation: "유니코드(N) + 가변(VAR) + 대용량(MAX) = NVARCHAR(MAX).",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r5-dtype-desc-03",
            type: "essay",
            prompt: "`TRUNCATE TABLE`을 사용할 수 없는 경우(제약조건 관련)에 대해 설명하시오.",
            rubric: ["해당 테이블이 외래 키(Foreign Key)에 의해 참조되고 있는 경우 TRUNCATE 할 수 없다"],
            maxLength: 200,
            explanation: "FK 참조를 받는 테이블은 데이터 무결성을 위해 TRUNCATE가 제한됩니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r5-dtype-desc-04",
            type: "short",
            prompt: "숫자형 타입 중 소수점을 저장할 수 **없는** 타입은? (FLOAT, REAL, INT, DECIMAL 중)",
            acceptableAnswers: ["INT"],
            explanation: "INT는 정수만 저장합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r5-dtype-create-01",
            type: "short",
            prompt: "컬럼 `age`를 0부터 255까지 저장 가능한 작은 정수형으로 정의하시오.",
            acceptableAnswers: ["age TINYINT"],
            explanation: "0~255 범위는 TINYINT입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r5-dtype-create-02",
            type: "short",
            prompt: "컬럼 `price`를 통화 단위 저장용 `MONEY` 타입으로 정의하시오.",
            acceptableAnswers: ["price MONEY"],
            explanation: "통화용 타입은 MONEY입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r5-dtype-create-03",
            type: "short",
            prompt: "컬럼 `content`를 유니코드 가변 문자열 100자로 정의하시오.",
            acceptableAnswers: ["content NVARCHAR(100)"],
            explanation: "NVARCHAR(100)입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r5-dtype-create-04",
            type: "short",
            prompt: "컬럼 `createDate`를 날짜와 시간 모두 저장하는 `DATETIME` 타입으로 정의하고 NULL 입력을 허용하지 않게 하시오.",
            acceptableAnswers: ["createDate DATETIME NOT NULL"],
            explanation: "NOT NULL 제약조건을 붙입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r5-join-01",
            type: "mcq",
            prompt: "`INNER JOIN`의 결과에 대한 설명으로 옳은 것은?",
            options: [
                "① 두 테이블의 모든 행이 출력된다.",
                "② 조인 조건이 일치하는 행만 출력된다.",
                "③ 왼쪽 테이블의 데이터는 모두 출력된다.",
                "④ 오른쪽 테이블의 데이터는 모두 출력된다."
            ],
            correctIndex: 1,
            explanation: "INNER JOIN은 교집합입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r5-join-02",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하여 회원 이름과 구매 제품을 출력하되, 별칭(Alias) `u`와 `b`를 사용하세요.",
            language: "sql",
            code: "SELECT u.name, b.prodName\nFROM userTbl ( 1 ) INNER JOIN buyTbl ( 2 )\nON u.userID = b.userID;",
            blanks: [
                { index: 1, answer: "u", explanation: "테이블 뒤에 별칭을 지정합니다." },
                { index: 2, answer: "b", explanation: "테이블 뒤에 별칭을 지정합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r5-join-03",
            type: "essay",
            prompt: "`CROSS JOIN`의 결과 행 개수가 `테이블A 행 수 * 테이블B 행 수`가 되는 이유를 설명하시오.",
            rubric: ["모든 경우의 수를 조합하기 때문이다", "A의 각 행마다 B의 모든 행을 하나씩 붙이기 때문이다"],
            maxLength: 200,
            explanation: "Cartesian Product(데카르트 곱)이기 때문입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r5-join-04",
            type: "short",
            prompt: "세 개의 테이블 A, B, C를 JOIN할 때 `ON` 절은 최소 몇 개가 필요한가? (모두 INNER JOIN 가정)",
            acceptableAnswers: ["2", "2개"],
            explanation: "A-B 연결에 1개, 그 결과와 C 연결에 1개, 총 2개가 필요합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set5 = set5;
