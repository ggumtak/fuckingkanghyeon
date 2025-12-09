/**
 * Database Midterm Quiz - Set 14 (Round 11)
 * File: quizzes/database/data/set14.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set14 = {
    setId: "set-14",
    questions: [
        {
            id: "r11-insert-01",
            type: "code-fill",
            prompt: "`userTbl`에 회원 정보를 입력하되, `mobile1`과 `mobile2`가 없는(NULL) 회원을 입력하는 구문입니다. 컬럼 목록을 생략하고 `NULL`을 명시적으로 입력하세요.",
            language: "sql",
            code: "INSERT INTO userTbl \nVALUES ('NON', '무명', 2000, '강원', ( 1 ), ( 2 ), 170, '2025-01-01');",
            blanks: [
                { index: 1, answer: "NULL", explanation: "국번(mobile1) 데이터가 없으므로 NULL을 입력합니다." },
                { index: 2, answer: "NULL", explanation: "전화번호(mobile2) 데이터가 없으므로 NULL을 입력합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r11-insert-02",
            type: "mcq",
            prompt: "`IDENTITY(1,1)`로 설정된 `buyTbl`의 `num` 컬럼값이 1, 2, 3까지 입력된 후 3번 행이 삭제되었습니다. 그 후 새 데이터를 INSERT하면 `num` 값은 얼마가 생성되는가?",
            options: ["① 1", "② 3", "③ 4", "④ 오류 발생"],
            correctIndex: 2,
            explanation: "IDENTITY는 중간에 삭제된 번호를 채우지 않고, 마지막 생성값 다음 번호(4)를 생성합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r11-insert-03",
            type: "code-fill",
            prompt: "대량의 데이터를 삽입하기 위해 원본 테이블을 조회하여 `userTbl`에 넣는 `INSERT INTO ... SELECT` 구문입니다. (컬럼 개수 일치 가정)",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name, birthYear, addr)\nSELECT UserID, Name, Birth, Region FROM SourceTable\nWHERE Region = ( 1 );",
            blanks: [
                { index: 1, answer: "'서울'", explanation: "조건값 문자열 '서울'을 입력합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r11-insert-04",
            type: "short",
            prompt: "`userTbl` 생성 시 `addr` 컬럼에 `DEFAULT '서울'` 제약조건이 걸려있습니다. INSERT 문에서 `addr` 컬럼에 명시적으로 `NULL`을 입력하면 어떤 값이 저장되는가?",
            acceptableAnswers: ["NULL", "널"],
            explanation: "DEFAULT는 값을 생략했을 때 동작하며, 명시적으로 NULL을 넣으면 NULL이 저장됩니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r11-update-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 'JYP' 회원이 구매한 모든 제품의 수량(`amount`)을 1개씩 증가시키는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET amount = amount + 1\nWHERE ( 1 ) = 'JYP';",
            blanks: [
                { index: 1, answer: "userID", explanation: "회원 아이디 컬럼은 userID입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r11-update-02",
            type: "code-fill",
            prompt: "`userTbl`에서 지역(`addr`)이 '서울'이 아닌 회원의 지역을 '기타'로 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl SET addr = '기타' WHERE addr ( 1 ) '서울';",
            blanks: [
                { index: 1, answer: "!=", explanation: "같지 않음을 나타내는 연산자는 `!=` 또는 `<>`입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r11-update-03",
            type: "short",
            prompt: "SQL Server에서 변수 `@myVar`를 사용하여 `userTbl`의 데이터를 업데이트하려 합니다. `SET @myVar = '010'` 이후 `UPDATE` 문에서 이 변수를 사용할 수 있는가? (O/X)",
            acceptableAnswers: ["O", "예", "가능"],
            explanation: "T-SQL 프로그래밍에서 변수를 쿼리문에 사용할 수 있습니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r11-update-04",
            type: "essay",
            prompt: "`userTbl`의 키(`height`) 정보를 업데이트할 때, `buyTbl`에서 '운동화'를 구매한 적이 있는 사람만 대상으로 1cm 키를 늘리려 합니다. `UPDATE` 문에 `JOIN`을 사용하는 구문의 구조를 설명하시오.",
            rubric: [
                "`UPDATE` 뒤에 별칭을 쓴다 (예: `userTbl` AS U)",
                "`FROM` 절을 사용하여 `userTbl`과 `buyTbl`을 조인한다",
                "`SET` 절에서 `U.height += 1`을 수행한다"
            ],
            maxLength: 300,
            explanation: "`UPDATE 테이블 FROM ... JOIN ...` 구문을 사용합니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r11-delete-01",
            type: "code-fill",
            prompt: "`buyTbl`에서 가격(`price`)이 10 미만이거나 1000 초과인 이상치 데이터를 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM buyTbl WHERE price < 10 ( 1 ) price > 1000;",
            blanks: [
                { index: 1, answer: "OR", explanation: "둘 중 하나라도 만족하면 삭제하므로 `OR` 연산자를 사용합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r11-delete-02",
            type: "mcq",
            prompt: "`userTbl` 데이터를 삭제할 때, `DROP TABLE` 명령을 사용하면 발생하는 결과는?",
            options: [
                "① 데이터만 모두 삭제되고 테이블 구조는 남는다.",
                "② 트랜잭션 로그가 꽉 찬다.",
                "③ 테이블 객체 자체가 삭제되어 조회할 수 없게 된다.",
                "④ 인덱스만 삭제된다."
            ],
            correctIndex: 2,
            explanation: "DROP TABLE은 스키마 정의를 포함한 객체 전체를 날려버립니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r11-delete-03",
            type: "code-fill",
            prompt: "`buyTbl`의 상위 10% 데이터만 삭제하는 구문입니다. (SQL Server 문법)",
            language: "sql",
            code: "DELETE TOP ( 10 ) ( 1 ) FROM buyTbl;",
            blanks: [
                { index: 1, answer: "PERCENT", explanation: "비율로 삭제할 때는 `TOP (n) PERCENT`를 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r11-func-01",
            type: "short",
            prompt: "`SELECT DATENAME(weekday, '2025-12-25')` 함수는 무엇을 반환하는가? (예: 결과의 형태)",
            acceptableAnswers: ["요일 이름", "요일", "Thursday"],
            explanation: "`DATENAME`에 `weekday` 인자를 주면 'Monday', '월요일' 같은 요일 문자열을 반환합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r11-func-02",
            type: "mcq",
            prompt: "다음 중 집계 함수(Aggregate Function)가 **아닌** 것은?",
            options: ["① SUM", "② AVG", "③ MAX", "④ SQRT"],
            correctIndex: 3,
            explanation: "SUM, AVG, MAX는 여러 행을 그룹화하여 계산하지만, SQRT(제곱근)는 단일 값에 대한 스칼라 함수입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Functions" }
        },
        {
            id: "r11-func-03",
            type: "code-fill",
            prompt: "문자열 'SQL'을 5번 반복해서 출력하는 함수 구문입니다.",
            language: "sql",
            code: "SELECT ( 1 )('SQL', 5);",
            blanks: [
                { index: 1, answer: "REPLICATE", explanation: "문자열 반복 함수는 `REPLICATE`입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r11-func-04",
            type: "short",
            prompt: "`SELECT CAST(123.45 AS INT)`의 결과값은?",
            acceptableAnswers: ["123"],
            explanation: "실수를 정수로 변환하면 소수점 이하가 버려집니다(절사).",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r11-dtype-desc-01",
            type: "mcq",
            prompt: "SQL Server의 `VARCHAR`와 `NVARCHAR`의 가장 큰 차이점은?",
            options: [
                "① 저장 가능한 최대 길이",
                "② 유니코드 지원 여부 (NVARCHAR는 유니코드)",
                "③ NULL 허용 여부",
                "④ 정수 저장 가능 여부"
            ],
            correctIndex: 1,
            explanation: "`N`이 붙은 타입은 다국어 처리를 위한 유니코드를 지원하며 용량을 2배 차지합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r11-dtype-desc-02",
            type: "short",
            prompt: "`CREATE TABLE` 시 컬럼의 값이 중복되지 않아야 함을 보장하는 제약조건 이름은? (PK 제외)",
            acceptableAnswers: ["UNIQUE", "unique"],
            explanation: "유일성 보장 제약조건은 UNIQUE입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r11-dtype-create-01",
            type: "short",
            prompt: "컬럼 `birthYear`를 정수형(`INT`)으로 정의하고, 입력 값은 1900년 이상이어야 한다는 `CHECK` 제약조건을 인라인으로 작성하시오.",
            acceptableAnswers: ["birthYear INT CHECK (birthYear >= 1900)"],
            explanation: "값의 유효성 검사는 CHECK 제약조건을 사용합니다.",
            meta: { difficulty: "hard", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r11-dtype-create-02",
            type: "short",
            prompt: "컬럼 `prodCode`를 고정 길이 10자리 `CHAR`로 정의하고, NULL을 허용하지 않으시오.",
            acceptableAnswers: ["prodCode CHAR(10) NOT NULL"],
            explanation: "CHAR(10) NOT NULL 입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r11-join-01",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하여 회원별 총 구매액을 구하는 구문입니다. `SUM` 함수와 `GROUP BY`를 사용하세요.",
            language: "sql",
            code: "SELECT u.userID, SUM(b.price * b.amount) AS total\nFROM userTbl u INNER JOIN buyTbl b ON u.userID = b.userID\nGROUP BY ( 1 );",
            blanks: [
                { index: 1, answer: "u.userID", explanation: "집계되지 않은 컬럼인 userID를 기준으로 그룹화해야 합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r11-join-02",
            type: "mcq",
            prompt: "집합 연산자 중 `UNION`과 `UNION ALL`의 차이점으로 옳은 것은?",
            options: [
                "① `UNION`은 중복을 제거하고 정렬을 유발할 수 있다.",
                "② `UNION ALL`은 중복을 제거한다.",
                "③ `UNION`은 데이터 타입을 자동 변환해준다.",
                "④ 두 연산자는 기능적으로 완전히 동일하다."
            ],
            correctIndex: 0,
            explanation: "`UNION`은 중복 제거를 위해 내부적으로 정렬(또는 해싱) 작업을 수행하므로 `UNION ALL`보다 느릴 수 있습니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r11-join-03",
            type: "essay",
            prompt: "3개 이상의 테이블을 조인할 때 조인 순서가 결과 값(행의 개수나 데이터 내용)에 영향을 미치는가? (INNER JOIN 기준)",
            rubric: ["INNER JOIN 만 사용하는 경우 논리적으로 결과 집합은 동일하다", "옵티마이저가 최적의 순서를 결정한다"],
            maxLength: 200,
            explanation: "INNER JOIN은 결합 법칙이 성립하여 순서가 결과 데이터 집합을 바꾸지 않습니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set14 = set14;
