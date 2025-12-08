/**
 * Database Midterm Quiz - Set 12 (Essay/서술형 세트6)
 */
const set12 = {
    setId: "set-essay-6",
    questions: [
        { id: "essay-insert-6-1", type: "essay", prompt: "userTbl에 아이디 'PSY', 이름 '싸이', 지역 '강남'을 추가하는 INSERT 문을 작성하세요.", acceptableAnswers: ["INSERT INTO userTbl (userID, name, addr) VALUES ('PSY', N'싸이', N'강남');"], rubric: ["INSERT INTO userTbl", "VALUES", "'PSY'", "N'싸이'", "N'강남'"] },
        { id: "essay-insert-6-2", type: "essay", prompt: "buyTbl에 아이디 'PSY', 제품 '선글라스', 가격 2000, 수량 100을 추가하는 쿼리를 작성하세요.", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, price, amount) VALUES ('PSY', N'선글라스', 2000, 100);"], rubric: ["INSERT INTO buyTbl", "VALUES", "'PSY'", "N'선글라스'", "2000"] },
        { id: "essay-insert-6-3", type: "essay", prompt: "다른 테이블(sourceTbl)의 모든 데이터를 조회하여 buyTbl에 삽입하는 INSERT INTO ... SELECT 구문의 기본 형식을 작성하세요.", acceptableAnswers: ["INSERT INTO buyTbl (cols...) SELECT cols... FROM sourceTbl;"], rubric: ["INSERT INTO", "SELECT", "FROM"] },
        { id: "essay-update-6-1", type: "essay", prompt: "userTbl에서 아이디 'JYP' 회원의 전화번호(mobile2)를 제거(NULL로 변경)하는 쿼리를 작성하세요.", acceptableAnswers: ["UPDATE userTbl SET mobile2 = NULL WHERE userID = 'JYP';"], rubric: ["UPDATE userTbl", "SET mobile2", "NULL", "WHERE userID"] },
        { id: "essay-update-6-2", type: "essay", prompt: "buyTbl에서 가격이 1000 이상인 제품의 가격을 5% 인상하세요.", acceptableAnswers: ["UPDATE buyTbl SET price = price * 1.05 WHERE price >= 1000;"], rubric: ["UPDATE buyTbl", "SET price", "1.05", "WHERE price"] },
        { id: "essay-update-6-3", type: "essay", prompt: "userTbl에서 지역이 '경기'인 모든 회원의 키를 1cm 줄이세요.", acceptableAnswers: ["UPDATE userTbl SET height = height - 1 WHERE addr = N'경기';"], rubric: ["UPDATE userTbl", "SET height", "- 1", "WHERE addr"] },
        { id: "essay-delete-6-1", type: "essay", prompt: "buyTbl 테이블의 모든 행을 삭제하되, 로그를 최소화하여 빠르게 삭제하고 ID값도 초기화하는 명령어는?", acceptableAnswers: ["TRUNCATE TABLE buyTbl;"], rubric: ["TRUNCATE TABLE"] },
        { id: "essay-delete-6-2", type: "essay", prompt: "userTbl에서 이름이 '김'으로 시작하는(LIKE 사용) 모든 회원을 삭제하는 쿼리를 작성하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE name LIKE N'김%';"], rubric: ["DELETE FROM userTbl", "WHERE name", "LIKE", "N'김%'"] },
        { id: "essay-func-6-1", type: "essay", prompt: "입력된 문자열의 왼쪽과 오른쪽 공백을 모두 제거하는 최신 함수는?", acceptableAnswers: ["TRIM"], rubric: ["TRIM"] },
        { id: "essay-func-6-2", type: "essay", prompt: "숫자 데이터를 문자로 변환하는 함수로, STR이나 CAST 외에, 특정 포맷(예: 'N0', 'C')을 지정할 수 있는 함수는?", acceptableAnswers: ["FORMAT"], rubric: ["FORMAT"] },
        { id: "essay-func-6-3", type: "essay", prompt: "해당 컬럼의 평균값을 구하는 집계 함수는?", acceptableAnswers: ["AVG"], rubric: ["AVG"] },
        { id: "essay-func-6-4", type: "essay", prompt: "현재 날짜와 시간에서 '연도'를 기준으로 1년을 뺀 날짜를 구하는 DATEADD 구문을 작성하세요.", acceptableAnswers: ["DATEADD(YEAR, -1, GETDATE())"], rubric: ["DATEADD", "YEAR", "-1"] },
        { id: "essay-func-6-5", type: "essay", prompt: "문자열 내에서 특정 패턴을 찾아 해당 패턴의 시작 위치를 반환하는 함수는? (LIKE와 유사하지만 위치 반환)", acceptableAnswers: ["PATINDEX"], rubric: ["PATINDEX"] },
        { id: "essay-func-6-6", type: "essay", prompt: "특정 입력값이 숫자인지 판별하여 1(참) 또는 0(거짓)을 반환하는 함수는?", acceptableAnswers: ["ISNUMERIC"], rubric: ["ISNUMERIC"] },
        { id: "essay-type-6-1", type: "essay", prompt: "SQL Server 내부 시스템에서 사용하는 식별자(테이블명, 컬럼명 등)를 저장하기 위한 특수 데이터 타입은?", acceptableAnswers: ["SYSNAME"], rubric: ["SYSNAME"] },
        { id: "essay-type-6-2", type: "essay", prompt: "여러 형태의 데이터(숫자, 문자, 날짜 등)를 하나의 컬럼에 저장할 수 있도록 허용하는 유일한 데이터 타입은?", acceptableAnswers: ["SQL_VARIANT"], rubric: ["SQL_VARIANT"] },
        { id: "essay-type-6-3", type: "essay", prompt: "문자열 저장 시 CHAR와 VARCHAR 중, 저장된 데이터의 길이가 일정하지 않을 때 공간 효율이 더 좋은 것은?", acceptableAnswers: ["VARCHAR"], rubric: ["VARCHAR"] },
        { id: "essay-type-6-4", type: "essay", prompt: "숫자형 데이터 중 소수점이 없으며, 1바이트 크기(0~255)를 갖는 것은?", acceptableAnswers: ["TINYINT"], rubric: ["TINYINT"] },
        { id: "essay-type-6-5", type: "essay", prompt: "날짜 타입 중 분(Minute) 단위까지만 저장하고 초(Second) 이하가 필요 없는 경우 사용하는 타입은? (SQL Server 2008 이상)", acceptableAnswers: ["SMALLDATETIME (또는 DATETIME2(0))"], rubric: ["SMALLDATETIME"] },
        { id: "essay-type-6-6", type: "essay", prompt: "큰 정수(BIGINT)를 사용할 필요는 없지만 INT 범위(21억)는 넘을 수 있는 경우, 별도의 타입이 있습니까? (O/X)", acceptableAnswers: ["X (BIGINT를 써야 함)"], rubric: ["X"] },
        { id: "essay-field-6-1", type: "essay", prompt: "테이블의 컬럼 정의 시, NULL 값이 매우 많은 경우 저장 공간을 최적화하기 위해 사용하는 옵션 키워드는?", acceptableAnswers: ["SPARSE"], rubric: ["SPARSE"] },
        { id: "essay-field-6-2", type: "essay", prompt: "문자열 컬럼 생성 시, 대소문자 구분 여부나 언어별 정렬 규칙을 지정하는 키워드는?", acceptableAnswers: ["COLLATE"], rubric: ["COLLATE"] },
        { id: "essay-field-6-3", type: "essay", prompt: "기존 테이블에 있는 제약조건(Constraint)을 삭제하기 위한 ALTER TABLE 구문의 하위 명령어는?", acceptableAnswers: ["DROP CONSTRAINT"], rubric: ["DROP CONSTRAINT"] },
        { id: "essay-join-6-1", type: "essay", prompt: "첫 번째 쿼리의 결과에서 두 번째 쿼리의 결과(교집합)를 뺀 나머지(차집합)를 반환하는 집합 연산자는?", acceptableAnswers: ["EXCEPT"], rubric: ["EXCEPT"] },
        { id: "essay-join-6-2", type: "essay", prompt: "3개 이상의 테이블을 조인할 때, 괄호를 사용하지 않는다면 조인은 어떤 순서로 처리됩니까?", acceptableAnswers: ["순차적으로 (앞에서부터)"], rubric: ["순차", "앞에서"] },
        { id: "essay-join-6-3", type: "essay", prompt: "FROM 절에 서브쿼리를 사용하여 마치 테이블처럼 사용하는 것을 무엇이라 부릅니까?", acceptableAnswers: ["인라인 뷰 (Inline View) 또는 파생 테이블 (Derived Table)"], rubric: ["인라인 뷰", "파생 테이블"] },
        { id: "essay-join-6-4", type: "essay", prompt: "조인 시 ON 절 대신 WHERE 절에 조인 조건을 적는 구식 표기법(Non-ANSI)은 사용이 권장됩니까?", acceptableAnswers: ["권장되지 않음 (ANSI 표준 권장)"], rubric: ["권장되지 않음", "X"] }
    ]
};
if (typeof window !== 'undefined') window.set12 = set12;
