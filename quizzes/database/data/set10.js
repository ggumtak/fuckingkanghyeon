/**
 * Database Midterm Quiz - Set 10 (Essay/서술형 세트4)
 */
const set10 = {
    setId: "set-essay-4",
    questions: [
        { id: "essay-insert-4-1", type: "essay", prompt: "userTbl에 아이디 'ITZY', 이름 '있지'를 추가하세요. (나머지 컬럼은 모두 NULL로 입력된다고 가정)", acceptableAnswers: ["INSERT INTO userTbl (userID, name) VALUES ('ITZY', N'있지');"], rubric: ["INSERT INTO userTbl", "VALUES", "'ITZY'", "N'있지'"] },
        { id: "essay-insert-4-2", type: "essay", prompt: "buyTbl에 아이디 'ITZY', 제품 '지갑', 분류 '잡화', 가격 30, 수량 5를 추가하는 쿼리를 작성하세요.", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, groupName, price, amount) VALUES ('ITZY', N'지갑', N'잡화', 30, 5);"], rubric: ["INSERT INTO buyTbl", "VALUES", "'ITZY'", "N'지갑'", "N'잡화'"] },
        { id: "essay-insert-4-3", type: "essay", prompt: "userTbl의 모든 데이터를 복사하여 'buyUserTbl'이라는 새로운 테이블로 삽입하는 쿼리를 작성하세요. (테이블 생성과 동시에 삽입)", acceptableAnswers: ["SELECT * INTO buyUserTbl FROM userTbl;"], rubric: ["SELECT * INTO", "FROM userTbl"] },
        { id: "essay-update-4-1", type: "essay", prompt: "userTbl에서 출생년도(birthYear)가 1980년 이전인 회원들의 키(height)를 180으로 일괄 수정하세요.", acceptableAnswers: ["UPDATE userTbl SET height = 180 WHERE birthYear < 1980;"], rubric: ["UPDATE userTbl", "SET height", "180", "WHERE birthYear"] },
        { id: "essay-update-4-2", type: "essay", prompt: "buyTbl에서 userID가 'KBS'이면서 제품명이 '청바지'인 행의 수량(amount)을 5로 변경하세요.", acceptableAnswers: ["UPDATE buyTbl SET amount = 5 WHERE userID = 'KBS' AND prodName = N'청바지';"], rubric: ["UPDATE buyTbl", "SET amount", "5", "AND prodName"] },
        { id: "essay-update-4-3", type: "essay", prompt: "userTbl의 전화번호(mobile2) 컬럼 값을 모두 NULL로 초기화하는 쿼리를 작성하세요.", acceptableAnswers: ["UPDATE userTbl SET mobile2 = NULL;"], rubric: ["UPDATE userTbl", "SET mobile2", "NULL"] },
        { id: "essay-delete-4-1", type: "essay", prompt: "userTbl에서 지역(addr)이 '경남'인 회원을 삭제하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE addr = N'경남';"], rubric: ["DELETE FROM userTbl", "WHERE addr", "N'경남'"] },
        { id: "essay-delete-4-2", type: "essay", prompt: "buyTbl에서 가격(price)이 100 이상이면서 500 이하인 제품의 구매 기록을 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE price BETWEEN 100 AND 500;"], rubric: ["DELETE FROM buyTbl", "WHERE price", "BETWEEN", "100", "500"] },
        { id: "essay-func-4-1", type: "essay", prompt: "문자열의 왼쪽 공백만 제거하는 함수는?", acceptableAnswers: ["LTRIM"], rubric: ["LTRIM"] },
        { id: "essay-func-4-2", type: "essay", prompt: "소수점 첫째 자리에서 반올림하여 정수로 만드는 함수 예시를 작성하세요. (값 3.6 기준)", acceptableAnswers: ["ROUND(3.6, 0)"], rubric: ["ROUND", "3.6", "0"] },
        { id: "essay-func-4-3", type: "essay", prompt: "숫자 100을 문자열 '100'으로 변환하는 CONVERT 함수 구문을 작성하세요. (INT -> VARCHAR)", acceptableAnswers: ["CONVERT(VARCHAR, 100)"], rubric: ["CONVERT", "VARCHAR"] },
        { id: "essay-func-4-4", type: "essay", prompt: "다음 중 집계 함수(Aggregate Function)가 아닌 것은? (SUM, AVG, MAX, LEN)", acceptableAnswers: ["LEN"], rubric: ["LEN"] },
        { id: "essay-func-4-5", type: "essay", prompt: "문자열 내에서 특정 문자열의 시작 위치(인덱스)를 찾는 함수는?", acceptableAnswers: ["CHARINDEX"], rubric: ["CHARINDEX"] },
        { id: "essay-func-4-6", type: "essay", prompt: "0 이상 1 미만의 난수(Random Number)를 발생시키는 함수는?", acceptableAnswers: ["RAND()"], rubric: ["RAND"] },
        { id: "essay-type-4-1", type: "essay", prompt: "XML 데이터를 저장하기 위해 SQL Server에서 제공하는 전용 데이터 타입은?", acceptableAnswers: ["XML"], rubric: ["XML"] },
        { id: "essay-type-4-2", type: "essay", prompt: "기하학적 공간 데이터(좌표, 도형 등)를 저장하기 위한 데이터 타입 중 하나를 쓰시오.", acceptableAnswers: ["GEOMETRY (또는 GEOGRAPHY)"], rubric: ["GEOMETRY", "GEOGRAPHY"] },
        { id: "essay-type-4-3", type: "essay", prompt: "고정 길이 문자열 CHAR와 가변 길이 문자열 VARCHAR 중 검색 속도가 일반적으로 더 빠른 것은 무엇입니까?", acceptableAnswers: ["CHAR"], rubric: ["CHAR"] },
        { id: "essay-type-4-4", type: "essay", prompt: "정수형 타입 중 가장 큰 범위를 가지며, 8바이트를 사용하는 것은?", acceptableAnswers: ["BIGINT"], rubric: ["BIGINT"] },
        { id: "essay-type-4-5", type: "essay", prompt: "'2023-12-31 23:59:59.1234567'과 같이 정밀한 시간(나노초 단위)을 저장할 수 있는 데이터 타입은?", acceptableAnswers: ["DATETIME2"], rubric: ["DATETIME2"] },
        { id: "essay-type-4-6", type: "essay", prompt: "데이터베이스 공간 절약을 위해 가변 길이 문자열을 사용하되, 유니코드를 지원하지 않는 타입은?", acceptableAnswers: ["VARCHAR"], rubric: ["VARCHAR"] },
        { id: "essay-field-4-1", type: "essay", prompt: "이미 존재하는 테이블(userTbl)에 'email'이라는 컬럼(VARCHAR(50))을 추가하는 구문을 작성하세요.", acceptableAnswers: ["ALTER TABLE userTbl ADD email VARCHAR(50);"], rubric: ["ALTER TABLE", "ADD", "email", "VARCHAR"] },
        { id: "essay-field-4-2", type: "essay", prompt: "테이블의 특정 컬럼을 삭제하는 명령어 구문은?", acceptableAnswers: ["ALTER TABLE ... DROP COLUMN ..."], rubric: ["ALTER TABLE", "DROP COLUMN"] },
        { id: "essay-field-4-3", type: "essay", prompt: "두 개의 컬럼(col1, col2)을 합쳐서 기본키(Primary Key)로 설정하는 것을 무엇이라 합니까?", acceptableAnswers: ["복합키 (Composite Key)"], rubric: ["복합키", "Composite"] },
        { id: "essay-join-4-1", type: "essay", prompt: "buyTbl에 구매 기록이 없는 userTbl의 회원을 찾기 위해 EXCEPT(차집합) 연산자를 사용하는 기본 구문을 설명하세요. (SELECT userID FROM userTbl ...)", acceptableAnswers: ["SELECT userID FROM userTbl EXCEPT SELECT userID FROM buyTbl"], rubric: ["EXCEPT", "SELECT"] },
        { id: "essay-join-4-2", type: "essay", prompt: "서브쿼리(SubQuery)를 사용하여 '김범수' 회원이 구매한 제품의 목록을 조회하는 쿼리를 작성하세요.", acceptableAnswers: ["SELECT prodName FROM buyTbl WHERE userID = (SELECT userID FROM userTbl WHERE name = N'김범수');"], rubric: ["SELECT prodName", "WHERE userID =", "SELECT userID"] },
        { id: "essay-join-4-3", type: "essay", prompt: "상관 서브쿼리(Correlated Subquery)란 무엇입니까? 간단히 서술하세요.", acceptableAnswers: ["메인 쿼리의 컬럼을 서브쿼리에서 참조하여, 메인 쿼리의 행마다 서브쿼리가 실행되는 구조"], rubric: ["메인 쿼리", "참조", "반복 실행"] },
        { id: "essay-join-4-4", type: "essay", prompt: "JOIN을 사용하지 않고, WHERE 절에 콤마(,)로 테이블을 나열하여 조인하는 방식(예: FROM A, B WHERE A.id=B.id)은 권장됩니까? (O/X)", acceptableAnswers: ["X (ANSI 표준 조인 구문 사용 권장)"], rubric: ["X"] }
    ]
};
if (typeof window !== 'undefined') window.set10 = set10;
