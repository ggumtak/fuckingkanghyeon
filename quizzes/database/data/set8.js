/**
 * Database Midterm Quiz - Set 8 (Essay/서술형)
 */
const set8 = {
    setId: "set-essay-2",
    questions: [
        { id: "essay-insert-2-1", type: "essay", prompt: "userTbl에 아이디: 'BTS', 이름: '방탄', 지역: '경기', 국번: '010', 전화번호: '7777777'을 추가하는 INSERT 문을 작성하세요.", acceptableAnswers: ["INSERT INTO userTbl (userID, name, addr, mobile1, mobile2) VALUES ('BTS', N'방탄', N'경기', '010', '7777777');"], rubric: ["INSERT INTO userTbl", "VALUES", "'BTS'", "N'방탄'", "'010'"] },
        { id: "essay-insert-2-2", type: "essay", prompt: "buyTbl에 userID 'BTS'가 '메모리'를 10개(단가 50) 구매한 내역을 추가하세요. (분류는 '전자')", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, groupName, price, amount) VALUES ('BTS', N'메모리', N'전자', 50, 10);"], rubric: ["INSERT INTO buyTbl", "VALUES", "'BTS'", "N'메모리'", "50", "10"] },
        { id: "essay-insert-2-3", type: "essay", prompt: "userTbl에 아이디 'BLK', 이름 '블랙핑크'를 추가하되, 나머지 컬럼은 NULL 또는 Default 값이 들어가도록 생략하여 작성하세요.", acceptableAnswers: ["INSERT INTO userTbl (userID, name) VALUES ('BLK', N'블랙핑크');"], rubric: ["INSERT INTO userTbl", "VALUES", "'BLK'", "N'블랙핑크'"] },
        { id: "essay-update-2-1", type: "essay", prompt: "userTbl에서 아이디가 'KBS'인 회원의 키(height)를 175로 수정하는 UPDATE 문을 작성하세요.", acceptableAnswers: ["UPDATE userTbl SET height = 175 WHERE userID = 'KBS';"], rubric: ["UPDATE userTbl", "SET height", "175", "WHERE userID", "'KBS'"] },
        { id: "essay-update-2-2", type: "essay", prompt: "buyTbl에서 아이디가 'JYP'인 사용자의 모든 구매 수량(amount)을 2개로 변경하세요.", acceptableAnswers: ["UPDATE buyTbl SET amount = 2 WHERE userID = 'JYP';"], rubric: ["UPDATE buyTbl", "SET amount", "2", "WHERE userID", "'JYP'"] },
        { id: "essay-update-2-3", type: "essay", prompt: "userTbl의 모든 회원 지역(addr)을 '서울'로 일괄 변경하는 위험한 쿼리를 작성하세요 (WHERE절 없음).", acceptableAnswers: ["UPDATE userTbl SET addr = N'서울';"], rubric: ["UPDATE userTbl", "SET addr", "N'서울'"] },
        { id: "essay-delete-2-1", type: "essay", prompt: "userTbl에서 가입일(mDate)이 '2010-01-01' 이전인 회원을 삭제하는 쿼리를 작성하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE mDate < '2010-01-01';"], rubric: ["DELETE FROM userTbl", "WHERE mDate", "< '2010-01-01'"] },
        { id: "essay-delete-2-2", type: "essay", prompt: "buyTbl의 모든 데이터를 삭제하되, 테이블 구조는 남겨두는 명령어를 작성하세요.", acceptableAnswers: ["DELETE FROM buyTbl;"], rubric: ["DELETE FROM buyTbl"] },
        { id: "essay-func-2-1", type: "essay", prompt: "문자열의 오른쪽에서 지정된 개수만큼 문자를 반환하는 함수의 이름은?", acceptableAnswers: ["RIGHT"], rubric: ["RIGHT"] },
        { id: "essay-func-2-2", type: "essay", prompt: "다음 쿼리의 결과값은? SELECT CEILING(4.1);", acceptableAnswers: ["5"], rubric: ["5"] },
        { id: "essay-func-2-3", type: "essay", prompt: "두 날짜 사이의 차이를 구하는 함수로, 일(Day) 단위 차이를 구할 때 사용하는 함수는?", acceptableAnswers: ["DATEDIFF"], rubric: ["DATEDIFF"] },
        { id: "essay-func-2-4", type: "essay", prompt: "문자열의 길이를 반환하는 함수는? (예: 'abc' -> 3)", acceptableAnswers: ["LEN"], rubric: ["LEN"] },
        { id: "essay-func-2-5", type: "essay", prompt: "문자열을 거꾸로 뒤집는 함수의 이름은? (예: 'abc' -> 'cba')", acceptableAnswers: ["REVERSE"], rubric: ["REVERSE"] },
        { id: "essay-func-2-6", type: "essay", prompt: "NULL 값을 다른 값으로 대체하여 반환하는 함수는? (예: NULL이면 0 반환)", acceptableAnswers: ["ISNULL"], rubric: ["ISNULL"] },
        { id: "essay-type-2-1", type: "essay", prompt: "INT(4바이트)보다 큰 정수를 저장할 때 사용하며, 8바이트 크기를 갖는 데이터 타입은?", acceptableAnswers: ["BIGINT"], rubric: ["BIGINT"] },
        { id: "essay-type-2-2", type: "essay", prompt: "소수점이 있는 실수를 저장할 때 사용하며, 근사치를 저장하는 데이터 타입은? (부동 소수점)", acceptableAnswers: ["FLOAT"], rubric: ["FLOAT"] },
        { id: "essay-type-2-3", type: "essay", prompt: "참(1) 또는 거짓(0)의 논리 데이터를 저장하기 위해 주로 사용하는 1비트 크기의 데이터 타입은?", acceptableAnswers: ["BIT"], rubric: ["BIT"] },
        { id: "essay-type-2-4", type: "essay", prompt: "가변 길이 유니코드 문자열을 최대 2GB까지 저장할 수 있는 대용량 데이터 타입은?", acceptableAnswers: ["NVARCHAR(MAX)"], rubric: ["NVARCHAR(MAX)"] },
        { id: "essay-type-2-5", type: "essay", prompt: "날짜는 제외하고 '시간(시:분:초)'만 저장하는 데이터 타입은?", acceptableAnswers: ["TIME"], rubric: ["TIME"] },
        { id: "essay-type-2-6", type: "essay", prompt: "통화(화폐) 단위를 저장하기 위한 데이터 타입으로, 소수점 4자리까지 정확도를 유지하는 것은?", acceptableAnswers: ["MONEY"], rubric: ["MONEY"] },
        { id: "essay-field-2-1", type: "essay", prompt: "테이블 생성 시, 해당 컬럼이 테이블의 각 행을 고유하게 식별하도록 지정하는 제약조건(PK)을 무엇이라 합니까?", acceptableAnswers: ["PRIMARY KEY"], rubric: ["PRIMARY", "KEY"] },
        { id: "essay-field-2-2", type: "essay", prompt: "이메일 주소를 저장하기 위해 최대 50자의 가변 길이 문자열 필드를 생성하고, 반드시 값이 입력되도록(NOT NULL) 설정하는 구문을 작성하세요.", acceptableAnswers: ["VARCHAR(50) NOT NULL"], rubric: ["VARCHAR", "50", "NOT NULL"] },
        { id: "essay-field-2-3", type: "essay", prompt: "해당 컬럼의 값이 자동으로 1씩 증가하도록 설정하는 키워드는 무엇입니까?", acceptableAnswers: ["IDENTITY"], rubric: ["IDENTITY"] },
        { id: "essay-join-2-1", type: "essay", prompt: "한 쪽 테이블의 모든 행과 다른 쪽 테이블의 모든 행을 조인하여, 가능한 모든 조합을 생성하는 조인 방식은? (카테시안 곱)", acceptableAnswers: ["CROSS JOIN"], rubric: ["CROSS", "JOIN"] },
        { id: "essay-join-2-2", type: "essay", prompt: "테이블이 자기 자신과 조인하는 것을 무엇이라고 합니까? (예: 조직도에서 상사 이름 찾기)", acceptableAnswers: ["SELF JOIN"], rubric: ["SELF", "JOIN"] },
        { id: "essay-join-2-3", type: "essay", prompt: "LEFT OUTER JOIN 결과에서 오른쪽 테이블의 컬럼 값이 NULL인 경우는 무엇을 의미합니까?", acceptableAnswers: ["매칭되는 데이터가 없음 (구매 이력이 없음 등)"], rubric: ["없음", "매칭", "불일치"] },
        { id: "essay-join-2-4", type: "essay", prompt: "3개의 테이블(A, B, C)을 INNER JOIN 하려고 합니다. JOIN 절은 최소 몇 번 나와야 합니까?", acceptableAnswers: ["2번"], rubric: ["2"] }
    ]
};
if (typeof window !== 'undefined') window.set8 = set8;
