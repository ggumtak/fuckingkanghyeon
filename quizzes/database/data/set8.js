/**
 * Database Midterm Quiz - Set 8 (Round 7)
 * File: quizzes/database/data/set8.js
 * 모든 예제는 userTbl, buyTbl 테이블을 기준으로 합니다.
 */
const set8 = {
    setId: "set-8",
    questions: [
        {
            id: "r7-insert-01",
            type: "code-fill",
            prompt: "`userTbl`에 회원 아이디 'TROT', 이름 '임영웅', 출생년도 1991, 지역 '경기', 국번 '010', 전화번호 '55556666', 키 182, 가입일 '2025-01-01'을 삽입하는 구문을 완성하세요.",
            language: "sql",
            code: "INSERT INTO userTbl \nVALUES ('TROT', '임영웅', 1991, '경기', '010', '55556666', ( 1 ), ( 2 ));",
            blanks: [
                { index: 1, answer: "182", explanation: "키(height)는 정수형 데이터이므로 숫자 그대로 입력합니다." },
                { index: 2, answer: "'2025-01-01'", explanation: "가입일(mDate)은 날짜 타입이므로 문자열 형식('YYYY-MM-DD')으로 감싸서 입력합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r7-insert-02",
            type: "code-fill",
            prompt: "`buyTbl`에 데이터를 삽입하되, `num` 컬럼은 자동 증가하므로 제외하고, `userID`와 `prodName` 두 개의 컬럼 값만 지정하여 넣는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl ( ( 1 ), ( 2 ) )\nVALUES ('KBS', '청바지');",
            blanks: [
                { index: 1, answer: "userID", explanation: "첫 번째 값 'KBS'에 대응하는 컬럼명입니다." },
                { index: 2, answer: "prodName", explanation: "두 번째 값 '청바지'에 대응하는 컬럼명입니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r7-insert-03",
            type: "short",
            prompt: "`userTbl`에 데이터를 입력할 때, `birthYear` 컬럼에 값을 지정하지 않아도 자동으로 `1900`이 입력되게 하려면 테이블 생성 시 어떤 키워드를 사용하여 제약조건을 설정해야 하는가?",
            acceptableAnswers: ["DEFAULT", "default"],
            explanation: "값이 없을 때 기본값을 입력하는 제약조건은 `DEFAULT`입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "INSERT" }
        },
        {
            id: "r7-insert-04",
            type: "code-fill",
            prompt: "이미 생성된 `buyTbl_New` 테이블에 `buyTbl`의 내용 중 '서적' 분류인 데이터만 골라서 복사해 넣는 구문입니다.",
            language: "sql",
            code: "INSERT INTO buyTbl_New\nSELECT * FROM buyTbl WHERE groupName = ( 1 );",
            blanks: [
                { index: 1, answer: "'서적'", explanation: "조건값 문자열 '서적'을 입력합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "INSERT" }
        },
        {
            id: "r7-update-01",
            type: "code-fill",
            prompt: "`userTbl`에서 이름이 '김범수'인 회원의 지역(`addr`)을 '서울'로 수정하는 구문입니다.",
            language: "sql",
            code: "UPDATE userTbl\nSET ( 1 ) = '서울'\nWHERE name = '김범수';",
            blanks: [
                { index: 1, answer: "addr", explanation: "수정할 컬럼인 지역(addr)을 지정합니다." }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r7-update-02",
            type: "code-fill",
            prompt: "`buyTbl`에서 제품명이 '책'인 데이터의 가격(`price`)을 10% 인상하고, 분류(`groupName`)를 '도서'로 동시에 변경하는 구문입니다.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price * 1.1, groupName = '도서'\nWHERE ( 1 ) = '책';",
            blanks: [
                { index: 1, answer: "prodName", explanation: "제품명 컬럼인 prodName을 조건으로 사용합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "UPDATE" }
        },
        {
            id: "r7-update-03",
            type: "short",
            prompt: "다음 SQL 실행 시 `userTbl`의 어떤 행들이 영향을 받는가?\n```sql\nUPDATE userTbl SET mobile1 = '010' WHERE mobile1 IS NULL;\n```",
            acceptableAnswers: ["국번이 없는 회원", "mobile1이 NULL인 행"],
            explanation: "조건절 `mobile1 IS NULL`에 해당하는 행만 업데이트됩니다.",
            meta: { difficulty: "easy", skillTag: "[디버깅]", topic: "UPDATE" }
        },
        {
            id: "r7-update-04",
            type: "essay",
            prompt: "`UPDATE` 문 사용 시 실수로 `WHERE` 절을 빠뜨렸을 때 발생할 수 있는 치명적인 문제점과 이를 방지하기 위한 습관을 서술하시오.",
            rubric: ["모든 행의 데이터가 동일한 값으로 덮어쓰기 된다", "실행 전 SELECT 문으로 대상을 먼저 확인하거나 트랜잭션을 사용한다"],
            maxLength: 300,
            explanation: "전체 데이터가 훼손될 수 있으므로 주의해야 합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "UPDATE" }
        },
        {
            id: "r7-delete-01",
            type: "code-fill",
            prompt: "`userTbl`에서 가입일(`mDate`)이 '2010-01-01' 이전인 오래된 회원을 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM userTbl WHERE mDate ( 1 ) '2010-01-01';",
            blanks: [
                { index: 1, answer: "<", explanation: "이전 날짜는 작다(<) 연산자를 사용합니다. (포함 시 <=)" }
            ],
            meta: { difficulty: "easy", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r7-delete-02",
            type: "mcq",
            prompt: "`buyTbl`의 모든 데이터를 삭제하되, 삭제 속도가 가장 빠르고 로그를 최소화하는 명령어는?",
            options: [
                "① DELETE * FROM buyTbl",
                "② DROP TABLE buyTbl",
                "③ TRUNCATE TABLE buyTbl",
                "④ ERASE buyTbl"
            ],
            correctIndex: 2,
            explanation: "TRUNCATE는 데이터만 빠르게 비우는 명령어입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r7-delete-03",
            type: "code-fill",
            prompt: "서브쿼리를 사용하여 `buyTbl`에서 'JYP'가 구매한 내역만 삭제하는 구문입니다.",
            language: "sql",
            code: "DELETE FROM buyTbl WHERE userID = ( SELECT userID FROM userTbl WHERE userID = ( 1 ) );",
            blanks: [
                { index: 1, answer: "'JYP'", explanation: "서브쿼리 조건값으로 'JYP'를 넣습니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "DELETE" }
        },
        {
            id: "r7-delete-04",
            type: "short",
            prompt: "특정 테이블을 삭제(`DROP`)하려는데, 다른 테이블이 외래 키(FK)로 이 테이블을 참조하고 있어 삭제가 안 됩니다. 이때 어떻게 해야 삭제할 수 있는가? (강제 옵션 제외)",
            acceptableAnswers: ["참조하는 테이블을 먼저 삭제한다", "외래 키 제약조건을 삭제한다"],
            explanation: "자식 테이블을 먼저 지우거나 FK 제약조건을 제거해야 부모 테이블을 DROP 할 수 있습니다.",
            meta: { difficulty: "hard", skillTag: "[개념응용]", topic: "DELETE" }
        },
        {
            id: "r7-func-01",
            type: "short",
            prompt: "`SELECT SUBSTRING('ABCDEFG', 3, 2)`의 실행 결과는?",
            acceptableAnswers: ["CD", "'CD'"],
            explanation: "3번째 글자(C)부터 2글자를 가져옵니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r7-func-02",
            type: "mcq",
            prompt: "`SELECT ROUND(123.456, 1)`의 결과는?",
            options: ["① 123.4", "② 123.5", "③ 123", "④ 124"],
            correctIndex: 1,
            explanation: "소수 첫째 자리까지 남기고 둘째 자리에서 반올림하므로 .45 -> .5가 됩니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r7-func-03",
            type: "code-fill",
            prompt: "오늘 날짜(`GETDATE()`)로부터 100일 뒤의 날짜를 구하는 함수 구문입니다.",
            language: "sql",
            code: "SELECT ( 1 )(day, 100, GETDATE());",
            blanks: [
                { index: 1, answer: "DATEADD", explanation: "날짜를 더하는 함수는 DATEADD입니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "Functions" }
        },
        {
            id: "r7-func-04",
            type: "short",
            prompt: "`SELECT LEN('안녕하세요')`의 결과값은? (SQL Server 기준)",
            acceptableAnswers: ["5"],
            explanation: "LEN 함수는 글자 수를 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Functions" }
        },
        {
            id: "r7-dtype-desc-01",
            type: "mcq",
            prompt: "SQL Server의 `INT` 데이터 타입이 차지하는 저장 공간 크기는?",
            options: ["① 1바이트", "② 2바이트", "③ 4바이트", "④ 8바이트"],
            correctIndex: 2,
            explanation: "INT는 4바이트 정수형입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r7-dtype-desc-02",
            type: "short",
            prompt: "유니코드 문자열을 저장할 때 사용하는 데이터 타입 앞에는 어떤 알파벳이 붙는가?",
            acceptableAnswers: ["N"],
            explanation: "NCHAR, NVARCHAR 처럼 N이 붙습니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r7-dtype-desc-03",
            type: "essay",
            prompt: "`VARCHAR(100)`과 `CHAR(100)`의 저장 방식 차이를 설명하고, 언제 `CHAR`를 쓰는 것이 유리한지 예시를 드시오.",
            rubric: ["CHAR는 고정 길이로 남는 공간을 공백으로 채움", "VARCHAR는 데이터 길이만큼만 저장함", "주민등록번호나 사번처럼 길이가 항상 일정한 데이터는 CHAR가 성능상 유리할 수 있음"],
            maxLength: 300,
            explanation: "고정 길이 데이터는 CHAR가, 가변 데이터는 VARCHAR가 효율적입니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "Data Types" }
        },
        {
            id: "r7-dtype-create-01",
            type: "short",
            prompt: "컬럼 `addr`를 한글을 포함한 주소를 저장할 수 있도록 가변 길이 문자열 타입으로 정의하세요. 길이는 넉넉하게 50자로 합니다.",
            acceptableAnswers: ["addr NVARCHAR(50)"],
            explanation: "한글 저장을 위해 NVARCHAR를 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r7-dtype-create-02",
            type: "short",
            prompt: "컬럼 `birthYear`를 정수형으로 정의하고, NULL 값이 들어오지 못하도록 설정하세요.",
            acceptableAnswers: ["birthYear INT NOT NULL"],
            explanation: "INT 뒤에 NOT NULL을 붙입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r7-dtype-create-03",
            type: "short",
            prompt: "컬럼 `score`를 소수점 이하 값을 정밀하게 저장하기 위해 전체 5자리, 소수점 2자리인 `DECIMAL` 타입으로 정의하세요.",
            acceptableAnswers: ["score DECIMAL(5, 2)", "score DECIMAL(5,2)"],
            explanation: "DECIMAL(전체자릿수, 소수자릿수) 형식을 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "Create Field" }
        },
        {
            id: "r7-join-01",
            type: "code-fill",
            prompt: "`userTbl`과 `buyTbl`을 조인하여 '김범수'가 구매한 물품 목록을 출력하는 구문입니다.",
            language: "sql",
            code: "SELECT u.name, b.prodName\nFROM userTbl u ( 1 ) JOIN buyTbl b\nON u.userID = b.userID\nWHERE u.name = '김범수';",
            blanks: [
                { index: 1, answer: "INNER", explanation: "구매 기록이 있는 데이터만 조회하므로 INNER JOIN이 적합합니다." }
            ],
            meta: { difficulty: "medium", skillTag: "[코드빈칸]", topic: "JOIN" }
        },
        {
            id: "r7-join-02",
            type: "mcq",
            prompt: "`LEFT OUTER JOIN` 수행 시, 오른쪽 테이블(`buyTbl`)에 매칭되는 데이터가 없을 경우 해당 컬럼들은 어떤 값으로 채워지는가?",
            options: ["① 0", "② 공백(Empty String)", "③ NULL", "④ 삭제됨"],
            correctIndex: 2,
            explanation: "매칭되지 않는 부분은 NULL로 표시됩니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "r7-join-03",
            type: "short",
            prompt: "두 테이블을 연결(JOIN)할 때 사용하는 조건절의 키워드는 `WHERE`가 아니라 무엇인가? (표준 조인 구문 기준)",
            acceptableAnswers: ["ON"],
            explanation: "표준 SQL에서는 조인 조건을 `ON` 절에 기술합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set8 = set8;
