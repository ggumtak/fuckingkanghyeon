/**
 * Database Midterm Quiz - Set 9 (Essay/서술형 세트3)
 */
const set9 = {
    setId: "set-essay-3",
    questions: [
        { id: "essay-insert-3-1", type: "essay", prompt: "userTbl에 다음 신규 회원을 추가하세요.\n아이디: 'RED', 이름: '레드벨벳', 출생년도: 2014, 지역: '경북', 국번: '010', 전화번호: '3333333', 키: 161, 가입일: 2023-01-01", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr, mobile1, mobile2, height, mDate) VALUES ('RED', N'레드벨벳', 2014, N'경북', '010', '3333333', 161, '2023-01-01');"], rubric: ["INSERT INTO userTbl", "VALUES", "'RED'", "N'레드벨벳'", "2014"] },
        { id: "essay-insert-3-2", type: "essay", prompt: "buyTbl에 아이디 'RED' 회원이 '헤드폰'을 2개(단가 100) 구매한 내역을 추가하세요. (분류는 '전자')", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, groupName, price, amount) VALUES ('RED', N'헤드폰', N'전자', 100, 2);"], rubric: ["INSERT INTO buyTbl", "VALUES", "'RED'", "N'헤드폰'", "100", "2"] },
        { id: "essay-insert-3-3", type: "essay", prompt: "userTbl에 아이디 'MAM', 이름 '마마무'를 추가하되, 컬럼 리스트를 생략하지 않고 명시하여 작성하세요. (나머지 값은 NULL 또는 Default)", acceptableAnswers: ["INSERT INTO userTbl (userID, name) VALUES ('MAM', N'마마무');"], rubric: ["INSERT INTO userTbl", "VALUES", "'MAM'", "N'마마무'"] },
        { id: "essay-update-3-1", type: "essay", prompt: "userTbl에서 지역(addr)이 '서울'인 모든 회원의 지역을 'Seoul'로 영문 변경하는 쿼리를 작성하세요.", acceptableAnswers: ["UPDATE userTbl SET addr = 'Seoul' WHERE addr = N'서울';"], rubric: ["UPDATE userTbl", "SET addr", "'Seoul'", "WHERE addr", "N'서울'"] },
        { id: "essay-update-3-2", type: "essay", prompt: "buyTbl에서 '청바지'의 단가(price)를 현재 가격에서 10% 인상된 가격으로 수정하세요. (수식 사용)", acceptableAnswers: ["UPDATE buyTbl SET price = price * 1.1 WHERE prodName = N'청바지';"], rubric: ["UPDATE buyTbl", "SET price", "price * 1.1", "WHERE prodName"] },
        { id: "essay-update-3-3", type: "essay", prompt: "userTbl에서 국번(mobile1)이 없는(NULL) 회원의 국번을 '010'으로 설정하세요.", acceptableAnswers: ["UPDATE userTbl SET mobile1 = '010' WHERE mobile1 IS NULL;"], rubric: ["UPDATE userTbl", "SET mobile1", "IS NULL"] },
        { id: "essay-delete-3-1", type: "essay", prompt: "userTbl에서 키(height)가 170 미만인 회원을 모두 삭제하는 쿼리를 작성하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE height < 170;"], rubric: ["DELETE FROM userTbl", "WHERE height", "< 170"] },
        { id: "essay-delete-3-2", type: "essay", prompt: "buyTbl에서 '전자' 분류(groupName)에 속하는 제품 중 수량(amount)이 5개 이상인 기록을 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE groupName = N'전자' AND amount >= 5;"], rubric: ["DELETE FROM buyTbl", "WHERE groupName", "AND amount"] },
        { id: "essay-func-3-1", type: "essay", prompt: "문자열 내의 모든 소문자를 대문자로 변경하는 함수는?", acceptableAnswers: ["UPPER"], rubric: ["UPPER"] },
        { id: "essay-func-3-2", type: "essay", prompt: "날짜에서 '연도(Year)' 부분만 정수로 추출하는 함수는?", acceptableAnswers: ["YEAR"], rubric: ["YEAR"] },
        { id: "essay-func-3-3", type: "essay", prompt: "숫자의 절대값을 구하는 함수는? (예: -10 -> 10)", acceptableAnswers: ["ABS"], rubric: ["ABS"] },
        { id: "essay-func-3-4", type: "essay", prompt: "다음 쿼리의 결과는 무엇입니까? SELECT REPLACE('Hello World', 'World', 'SQL');", acceptableAnswers: ["Hello SQL"], rubric: ["Hello SQL"] },
        { id: "essay-func-3-5", type: "essay", prompt: "현재 날짜에 100일을 더한 날짜를 구하는 함수 구문을 작성하세요. (함수명만으로도 인정)", acceptableAnswers: ["DATEADD(DAY, 100, GETDATE())"], rubric: ["DATEADD"] },
        { id: "essay-func-3-6", type: "essay", prompt: "특정 문자를 지정한 횟수만큼 반복하여 출력하는 함수는? (예: '*'를 5번 출력)", acceptableAnswers: ["REPLICATE"], rubric: ["REPLICATE"] },
        { id: "essay-type-3-1", type: "essay", prompt: "0 ~ 255 사이의 정수 데이터를 저장하며, 1바이트 크기를 갖는 가장 작은 정수형 데이터 타입은?", acceptableAnswers: ["TINYINT"], rubric: ["TINYINT"] },
        { id: "essay-type-3-2", type: "essay", prompt: "-32,768 ~ 32,767 범위의 정수를 저장하는 2바이트 크기의 정수형 데이터 타입은?", acceptableAnswers: ["SMALLINT"], rubric: ["SMALLINT"] },
        { id: "essay-type-3-3", type: "essay", prompt: "날짜(YYYY-MM-DD)만 저장하고 시간은 저장하지 않는 데이터 타입은?", acceptableAnswers: ["DATE"], rubric: ["DATE"] },
        { id: "essay-type-3-4", type: "essay", prompt: "이미지, 동영상 등 이진 데이터를 저장하기 위한 가변 길이 데이터 타입(최대 2GB)은?", acceptableAnswers: ["VARBINARY(MAX)"], rubric: ["VARBINARY"] },
        { id: "essay-type-3-5", type: "essay", prompt: "CHAR(10) 타입에 'ABC'를 저장하면 실제 저장되는 바이트 수와 형태는 어떻게 됩니까? (영문 기준)", acceptableAnswers: ["10바이트, 'ABC       ' (공백 7개 포함)"], rubric: ["10바이트", "공백"] },
        { id: "essay-type-3-6", type: "essay", prompt: "VARCHAR(10) 타입에 'ABC'를 저장하면 실제 사용되는 데이터 공간 크기는 대략 얼마입니까? (길이 정보 제외, 데이터 자체만)", acceptableAnswers: ["3바이트"], rubric: ["3바이트"] },
        { id: "essay-field-3-1", type: "essay", prompt: "테이블의 특정 컬럼에 중복된 값이 입력되지 않도록 강제하는 제약조건은?", acceptableAnswers: ["UNIQUE"], rubric: ["UNIQUE"] },
        { id: "essay-field-3-2", type: "essay", prompt: "데이터 입력 시 특정 조건(예: 나이가 0보다 커야 함)을 만족하는지 검사하는 제약조건은?", acceptableAnswers: ["CHECK"], rubric: ["CHECK"] },
        { id: "essay-field-3-3", type: "essay", prompt: "외래 키(Foreign Key) 제약조건 설정 시, 부모 테이블의 데이터가 삭제될 때 자식 테이블의 데이터도 함께 삭제되도록 하는 옵션은?", acceptableAnswers: ["ON DELETE CASCADE"], rubric: ["ON DELETE CASCADE"] },
        { id: "essay-join-3-1", type: "essay", prompt: "INNER JOIN과 동일한 결과를 반환하며, 조인 조건절에 등호(=) 만 사용하는 조인을 무엇이라 합니까?", acceptableAnswers: ["등가 조인 (Equi Join)"], rubric: ["등가", "Equi"] },
        { id: "essay-join-3-2", type: "essay", prompt: "RIGHT OUTER JOIN은 어느 쪽 테이블의 모든 데이터를 보존합니까?", acceptableAnswers: ["오른쪽 (두 번째) 테이블"], rubric: ["오른쪽", "RIGHT"] },
        { id: "essay-join-3-3", type: "essay", prompt: "A 테이블(10행)과 B 테이블(5행)을 CROSS JOIN 했을 때 결과 행의 개수는?", acceptableAnswers: ["50개"], rubric: ["50"] },
        { id: "essay-join-3-4", type: "essay", prompt: "UNION 연산자를 사용하여 두 쿼리의 결과를 합칠 때, 중복된 행을 제거하지 않고 모두 포함하려면 어떤 키워드를 사용합니까?", acceptableAnswers: ["UNION ALL"], rubric: ["UNION ALL"] }
    ]
};
if (typeof window !== 'undefined') window.set9 = set9;
