/**
 * Database Midterm Quiz - Set 11 (Essay/서술형 세트5)
 */
const set11 = {
    setId: "set-essay-5",
    questions: [
        { id: "essay-insert-5-1", type: "essay", prompt: "userTbl에 아이디: 'IU', 이름: '아이유', 출생년도: 1993, 지역: '서울', 키: 161, 가입일: 2023-05-16을 추가하는 INSERT 문을 작성하세요.", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr, height, mDate) VALUES ('IU', N'아이유', 1993, N'서울', 161, '2023-05-16');"], rubric: ["INSERT INTO userTbl", "VALUES", "'IU'", "N'아이유'", "161"] },
        { id: "essay-insert-5-2", type: "essay", prompt: "buyTbl에 'IU' 회원이 '기타'를 1개(단가 300) 구매한 내역을 '악기' 분류로 추가하세요.", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, groupName, price, amount) VALUES ('IU', N'기타', N'악기', 300, 1);"], rubric: ["INSERT INTO buyTbl", "VALUES", "'IU'", "N'기타'", "N'악기'"] },
        { id: "essay-insert-5-3", type: "essay", prompt: "한 번의 INSERT 문으로 userTbl에 ('WIN', '위너'), ('IKN', '아이콘') 두 명의 회원을 동시에 추가하는 쿼리를 작성하세요. (나머지 컬럼 생략)", acceptableAnswers: ["INSERT INTO userTbl (userID, name) VALUES ('WIN', N'위너'), ('IKN', N'아이콘');"], rubric: ["INSERT INTO userTbl", "VALUES", "('WIN', N'위너')", "('IKN', N'아이콘')"] },
        { id: "essay-update-5-1", type: "essay", prompt: "userTbl에서 'BBK' 회원의 키(height)를 178로, 지역(addr)을 '서울'로 동시에 수정하는 쿼리를 작성하세요.", acceptableAnswers: ["UPDATE userTbl SET height = 178, addr = N'서울' WHERE userID = 'BBK';"], rubric: ["UPDATE userTbl", "SET", "height = 178", "addr = N'서울'", "WHERE"] },
        { id: "essay-update-5-2", type: "essay", prompt: "buyTbl에서 제품명(prodName)이 '모니터'인 데이터들의 가격(price)을 모두 10% 할인된 가격으로 수정하세요. (곱하기 연산 사용)", acceptableAnswers: ["UPDATE buyTbl SET price = price * 0.9 WHERE prodName = N'모니터';"], rubric: ["UPDATE buyTbl", "SET price", "price * 0.9", "WHERE prodName"] },
        { id: "essay-update-5-3", type: "essay", prompt: "userTbl의 모든 회원에 대해 출생년도(birthYear)를 1씩 증가시키는 쿼리를 작성하세요.", acceptableAnswers: ["UPDATE userTbl SET birthYear = birthYear + 1;"], rubric: ["UPDATE userTbl", "SET birthYear", "+ 1"] },
        { id: "essay-delete-5-1", type: "essay", prompt: "buyTbl에서 분류(groupName)가 NULL인(입력되지 않은) 데이터를 모두 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE groupName IS NULL;"], rubric: ["DELETE FROM buyTbl", "WHERE groupName", "IS NULL"] },
        { id: "essay-delete-5-2", type: "essay", prompt: "userTbl에서 지역(addr)이 '서울'이 아니면서, 키(height)가 170 이하인 회원을 삭제하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE addr != N'서울' AND height <= 170;"], rubric: ["DELETE FROM userTbl", "WHERE addr", "!=", "AND height"] },
        { id: "essay-func-5-1", type: "essay", prompt: "입력된 값들 중 NULL이 아닌 첫 번째 값을 반환하는 함수는? (예: (NULL, NULL, 'A') -> 'A')", acceptableAnswers: ["COALESCE"], rubric: ["COALESCE"] },
        { id: "essay-func-5-2", type: "essay", prompt: "숫자 2의 10승(거듭제곱)을 구하는 함수 구문을 작성하세요.", acceptableAnswers: ["POWER(2, 10)"], rubric: ["POWER"] },
        { id: "essay-func-5-3", type: "essay", prompt: "SQL Server에서 문자열을 결합할 때 사용하는 함수(또는 연산자)는?", acceptableAnswers: ["CONCAT (또는 + 연산자)"], rubric: ["CONCAT", "+"] },
        { id: "essay-func-5-4", type: "essay", prompt: "문자열 'ABC'를 소문자 'abc'로 변환하는 함수는?", acceptableAnswers: ["LOWER"], rubric: ["LOWER"] },
        { id: "essay-func-5-5", type: "essay", prompt: "날짜 데이터에서 '월(Month)'만 정수형으로 추출하는 함수는?", acceptableAnswers: ["MONTH"], rubric: ["MONTH"] },
        { id: "essay-func-5-6", type: "essay", prompt: "조건에 따라 다른 값을 반환하는 제어문 형태의 함수는? (IF ~ THEN ~ ELSE 와 유사)", acceptableAnswers: ["CASE WHEN ... END"], rubric: ["CASE", "WHEN", "END"] },
        { id: "essay-type-5-1", type: "essay", prompt: "전역 고유 식별자(GUID)를 저장하기 위한 16바이트 크기의 데이터 타입은?", acceptableAnswers: ["UNIQUEIDENTIFIER"], rubric: ["UNIQUEIDENTIFIER"] },
        { id: "essay-type-5-2", type: "essay", prompt: "날짜와 시간을 저장하되, 타임존(Timezone) 정보까지 포함하는 데이터 타입은?", acceptableAnswers: ["DATETIMEOFFSET"], rubric: ["DATETIMEOFFSET"] },
        { id: "essay-type-5-3", type: "essay", prompt: "과거에는 TEXT 타입을 썼으나, 현재는 이것으로 대체하여 사용하기를 권장하는 가변 길이 대용량 문자열 타입은?", acceptableAnswers: ["VARCHAR(MAX)"], rubric: ["VARCHAR(MAX)"] },
        { id: "essay-type-5-4", type: "essay", prompt: "소수점 이하 7자리까지 정밀하게 숫자를 표현하는 4바이트 부동 소수점 데이터 타입은?", acceptableAnswers: ["REAL"], rubric: ["REAL"] },
        { id: "essay-type-5-5", type: "essay", prompt: "데이터베이스 내에서 자동 생성되는 고유한 이진 숫자로, 행의 버전을 관리할 때 사용하는 타입은? (TIMESTAMP의 바뀐 이름)", acceptableAnswers: ["ROWVERSION"], rubric: ["ROWVERSION"] },
        { id: "essay-type-5-6", type: "essay", prompt: "고정 길이의 이진 데이터(Binary Data)를 저장하는 데이터 타입은?", acceptableAnswers: ["BINARY"], rubric: ["BINARY"] },
        { id: "essay-field-5-1", type: "essay", prompt: "테이블 생성 시, 특정 컬럼이 다른 테이블의 기본키(PK)를 참조하도록 설정하는 제약조건은?", acceptableAnswers: ["FOREIGN KEY (REFERENCES)"], rubric: ["FOREIGN", "KEY", "REFERENCES"] },
        { id: "essay-field-5-2", type: "essay", prompt: "컬럼을 정의할 때 초기값(Seed)과 증가값(Increment)을 지정하여 숫자가 자동 입력되게 하는 속성은?", acceptableAnswers: ["IDENTITY"], rubric: ["IDENTITY"] },
        { id: "essay-field-5-3", type: "essay", prompt: "데이터 입력 시 값이 비어있지 않아야 함을 강제하는 제약조건 키워드는?", acceptableAnswers: ["NOT NULL"], rubric: ["NOT NULL"] },
        { id: "essay-join-5-1", type: "essay", prompt: "두 테이블의 모든 행을 반환하며, 매칭되지 않는 행은 NULL로 표시하는 조인 방식은? (합집합 개념)", acceptableAnswers: ["FULL OUTER JOIN"], rubric: ["FULL", "OUTER", "JOIN"] },
        { id: "essay-join-5-2", type: "essay", prompt: "조인 쿼리에서 컬럼 이름이 길거나 중복될 때, 짧은 이름으로 대체하여 가독성을 높이는 기능을 무엇이라 합니까? (예: userTbl AS U)", acceptableAnswers: ["Alias (별칭)"], rubric: ["Alias", "별칭"] },
        { id: "essay-join-5-3", type: "essay", prompt: "두 쿼리의 결과 중 '공통된 행(교집합)'만 반환하는 집합 연산자는?", acceptableAnswers: ["INTERSECT"], rubric: ["INTERSECT"] },
        { id: "essay-join-5-4", type: "essay", prompt: "JOIN 조건절에 등호(=) 외의 연산자(>, < 등)를 사용하는 조인을 통칭하여 무엇이라 합니까?", acceptableAnswers: ["Non-Equi Join (비등가 조인)"], rubric: ["Non-Equi", "비등가"] }
    ]
};
if (typeof window !== 'undefined') window.set11 = set11;
