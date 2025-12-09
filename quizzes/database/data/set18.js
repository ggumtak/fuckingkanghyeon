/**
 * Database Midterm Quiz - Set 18 (Round 14 심화)
 * File: quizzes/database/data/set18.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set18 = {
    setId: "set-18",
    questions: [
        {
            id: "r14-insert-01",
            type: "code-fill",
            prompt: "`buyTbl`에 시퀀스 `buySeq`의 다음 값을 사용하여 데이터를 삽입하는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl (num, userID) VALUES ( ( 1 ) VALUE FOR buySeq, 'KBS' );",
            blanks: [
                { index: 1, answer: "NEXT", explanation: "NEXT VALUE FOR 구문입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r14-insert-02",
            type: "code-fill",
            prompt: "한 번의 `INSERT` 문으로 `buyTbl`에 두 개의 행((1, 'A'), (2, 'B'))을 삽입하는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl (num, userID)\nVALUES (1, 'A'), ( ( 1 ), ( 2 ) );",
            blanks: [
                { index: 1, answer: "2", explanation: "두 번째 행의 첫 번째 값입니다." },
                { index: 2, answer: "'B'", explanation: "두 번째 행의 두 번째 값입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r14-insert-03",
            type: "short",
            prompt: "`userTbl`의 `addr` 컬럼에 기본값(DEFAULT) 제약조건이 있습니다. `INSERT` 시 값을 생략하지 않고 명시적으로 기본값이 들어가게 하려면 `VALUES` 절에 어떤 키워드를 쓰는가?",
            acceptableAnswers: ["DEFAULT"],
            explanation: "`VALUES (..., DEFAULT)` 형태로 사용 가능합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r14-insert-04",
            type: "mcq",
            prompt: "`INT` 타입 컬럼에 `'ABC'`라는 문자열을 `INSERT` 하려 하면 발생하는 현상은?",
            options: ["① 0으로 입력됨", "② NULL로 입력됨", "③ 데이터 타입 변환 오류 발생", "④ 아스키코드로 변환되어 입력됨"],
            correctIndex: 2,
            explanation: "형변환이 불가능한 문자열은 에러를 발생시킵니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r14-update-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 가격(`price`)이 500 이하인 제품의 가격을 1.5배 올리는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl SET price = price * 1.5 WHERE price ( 1 ) 500;",
            blanks: [
                { index: 1, answer: "<=", explanation: "이하는 `<=` 입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r14-update-02",
            type: "code-fill",
            prompt: "`userTbl`의 `mDate`(가입일)를 현재 날짜로부터 1년 전으로 변경하는 구문입니다. `DATEADD` 사용.",
            language: "sql",
            code: "UPDATE userTbl SET mDate = DATEADD(year, ( 1 ), GETDATE());",
            blanks: [
                { index: 1, answer: "-1", explanation: "1년 전이므로 -1을 더합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r14-update-03",
            type: "short",
            prompt: "`UPDATE` 문 하나로 `addr` 컬럼과 `mobile1` 컬럼 두 개를 동시에 수정할 때 구분자로 사용하는 기호는?",
            acceptableAnswers: ["콤마", ",", "쉼표"],
            explanation: "컬럼 간 콤마(,)를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r14-update-04",
            type: "mcq",
            prompt: "`UPDATE TOP(10) buyTbl SET ...` 구문의 의미는?",
            options: ["① 상위 10%만 수정", "② 상위 10개 행만 수정", "③ 10번 실행", "④ 오류 발생"],
            correctIndex: 1,
            explanation: "TOP(n)은 개수를 의미합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r14-delete-01",
            type: "code-fill",
            prompt: "`userTbl`에서 2020년 1월 1일 ~ 2020년 12월 31일 사이에 가입한 회원을 삭제하는 구문입니다. `BETWEEN` 사용.",
            language: "sql",
            code: "DELETE FROM userTbl WHERE mDate BETWEEN '2020-01-01' ( 1 ) '2020-12-31';",
            blanks: [
                { index: 1, answer: "AND", explanation: "BETWEEN A AND B 구문입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r14-delete-02",
            type: "short",
            prompt: "부모 테이블의 행을 삭제할 때 자식 테이블의 행도 자동으로 삭제되게 하려면 외래 키 설정 시 어떤 옵션을 주는가?",
            acceptableAnswers: ["ON DELETE CASCADE", "CASCADE"],
            explanation: "연쇄 삭제 옵션은 ON DELETE CASCADE입니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r14-delete-03",
            type: "code-fill",
            prompt: "조인된 결과를 바탕으로 삭제하는 T-SQL 구문입니다. `userTbl`의 지역이 '경기'인 회원의 구매 기록을 `buyTbl`에서 삭제합니다.",
            language: "sql",
            code: "DELETE b\nFROM buyTbl b INNER JOIN userTbl u ON b.userID = u.userID\nWHERE u.addr = ( 1 );",
            blanks: [
                { index: 1, answer: "'경기'", explanation: "조건값 '경기'입니다." }
            ],
            meta: { difficulty: "hard", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r14-delete-04",
            type: "mcq",
            prompt: "`TRUNCATE TABLE` 실행 후 롤백(Rollback)이 가능한가? (트랜잭션 내에서 실행 시)",
            options: ["① 불가능하다", "② 가능하다", "③ SQL Server 버전에 따라 다르다", "④ 관리자만 가능하다"],
            correctIndex: 1,
            explanation: "트랜잭션(BEGIN TRAN) 안에서 수행했다면 TRUNCATE도 롤백 가능합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r14-func-01",
            type: "short",
            prompt: "`SELECT SUBSTRING('ABCDE', 2, 3)`의 결과는?",
            acceptableAnswers: ["BCD", "'BCD'"],
            explanation: "2번째(B)부터 3글자(BCD)입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r14-func-02",
            type: "mcq",
            prompt: "두 날짜 사이의 간격을 구하는 함수 `DATEDIFF(day, A, B)`에서 A가 B보다 미래의 날짜라면 결과값은?",
            options: ["① 양수", "② 음수", "③ 0", "④ 오류"],
            correctIndex: 1,
            explanation: "시작일이 종료일보다 크면 음수가 나옵니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r14-func-03",
            type: "code-fill",
            prompt: "문자열 내의 특정 문자를 다른 문자로 바꾸는 `REPLACE` 함수 예제입니다. '02-123-4567'의 하이픈(-)을 점(.)으로 바꾸세요.",
            language: "sql",
            code: "SELECT REPLACE('02-123-4567', '-', ( 1 ));",
            blanks: [
                { index: 1, answer: "'.'", explanation: "바꿀 문자 '.'입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r14-func-04",
            type: "short",
            prompt: "`SELECT CEILING(3.14)`의 결과는?",
            acceptableAnswers: ["4"],
            explanation: "올림 함수이므로 4입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r14-func-05",
            type: "mcq",
            prompt: "순위 함수 중, 동점자가 있어도 순위를 건너뛰지 않고 연속적으로 매기는 함수는? (예: 1등, 1등, 2등)",
            options: ["① RANK()", "② DENSE_RANK()", "③ ROW_NUMBER()", "④ NTILE()"],
            correctIndex: 1,
            explanation: "DENSE_RANK(조밀한 순위)입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r14-func-06",
            type: "short",
            prompt: "`CAST('2025' AS INT)`의 결과 데이터 타입은 무엇인가?",
            acceptableAnswers: ["INT", "정수", "정수형"],
            explanation: "INT로 변환했으므로 정수형입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r14-dtype-desc-01",
            type: "short",
            prompt: "`VARCHAR(MAX)`가 저장할 수 있는 최대 용량은?",
            acceptableAnswers: ["2GB", "2기가바이트"],
            explanation: "LOB 타입은 2GB까지 저장 가능합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r14-dtype-desc-02",
            type: "mcq",
            prompt: "다음 중 통화(돈)를 저장하기 위해 제공되는 데이터 타입은?",
            options: ["① CASH", "② MONEY", "③ CURRENCY", "④ DOLLAR"],
            correctIndex: 1,
            explanation: "SQL Server의 통화 타입은 MONEY, SMALLMONEY입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r14-dtype-desc-03",
            type: "essay",
            prompt: "`BIT` 데이터 타입은 내부적으로 1, 0만 저장하지만 출력 시 True/False로 나오지 않습니다. 이를 논리값처럼 쓰기 위해 보통 어떻게 활용하는지 쓰시오.",
            rubric: ["1을 참, 0을 거짓으로 약속하고 사용한다", "WHERE 절에서 컬럼 = 1 등으로 비교한다"],
            maxLength: 200,
            explanation: "0/1로 저장되며 애플리케이션 레벨에서 boolean으로 매핑해 씁니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r14-dtype-desc-04",
            type: "short",
            prompt: "`CHAR(10)`에 'A' 한 글자를 넣으면 1바이트만 차지하는가, 10바이트를 차지하는가?",
            acceptableAnswers: ["10바이트", "10"],
            explanation: "고정 길이는 데이터 내용과 무관하게 할당된 크기를 모두 차지합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r14-dtype-create-01",
            type: "short",
            prompt: "컬럼 `desc`를 정의할 때 `VARCHAR(MAX)`로 선언하고 `NULL`을 허용하는 구문을 작성하시오.",
            acceptableAnswers: ["desc VARCHAR(MAX) NULL", "desc VARCHAR(MAX)"],
            explanation: "NULL은 생략 가능하나 명시적으로 적을 수 있습니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r14-dtype-create-02",
            type: "short",
            prompt: "컬럼 `code`를 3글자 고정 길이 `CHAR`로 정의하고, 기본값으로 'N/A'를 설정하시오.",
            acceptableAnswers: ["code CHAR(3) DEFAULT 'N/A'"],
            explanation: "CHAR(3)과 DEFAULT를 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r14-dtype-create-03",
            type: "short",
            prompt: "컬럼 `num`을 아주 작은 정수 `TINYINT`로 정의하고 `NOT NULL` 설정하시오.",
            acceptableAnswers: ["num TINYINT NOT NULL"],
            explanation: "TINYINT NOT NULL 입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r14-join-01",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하되, `userTbl`의 모든 회원이 나오도록 `LEFT OUTER JOIN`을 수행하는 구문입니다.",
            language: "sql",
            code: "SELECT u.name, b.prodName\nFROM userTbl u ( 1 ) OUTER JOIN buyTbl b\nON u.userID = b.userID;",
            blanks: [
                { index: 1, answer: "LEFT", explanation: "왼쪽 테이블 전체 포함은 LEFT 입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r14-join-02",
            type: "mcq",
            prompt: "자기 자신의 테이블과 조인하는 'Self Join'을 수행할 때 반드시 필요한 것은?",
            options: ["① 서로 다른 테이블 별칭(Alias)", "② GROUP BY 절", "③ HAVING 절", "④ ORDER BY 절"],
            correctIndex: 0,
            explanation: "같은 테이블을 두 번 부르므로 구분을 위해 별칭이 필수입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r14-join-03",
            type: "short",
            prompt: "`UNION` 연산자가 중복을 제거한다면, 중복을 포함하여 무조건 합치는 연산자는?",
            acceptableAnswers: ["UNION ALL"],
            explanation: "UNION ALL 입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r14-join-04",
            type: "essay",
            prompt: "다대다(M:N) 관계인 학생 테이블과 동아리 테이블을 조인하여 학생별 동아리 가입 현황을 보려 합니다. 이때 필요한 중간 테이블의 역할을 설명하시오.",
            rubric: ["두 테이블의 PK를 FK로 가져와서 연결해주는 역할", "실제 매핑 정보를 저장하는 역할"],
            maxLength: 200,
            explanation: "연결 테이블(Associative Entity)이 필요합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set18 = set18;
