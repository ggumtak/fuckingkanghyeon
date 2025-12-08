/**
 * Database Midterm Quiz - Set 7 (Essay/서술형)
 */
const set7 = {
    setId: "set-essay-1",
    questions: [
        { id: "essay-insert-1-1", type: "essay", prompt: "userTbl에 다음 신규 회원을 추가하는 INSERT 문을 작성하세요.\n아이디: 'TWC', 이름: '트와이스', 출생년도: 1995, 지역: '서울', 키: 167", acceptableAnswers: ["INSERT INTO userTbl (userID, name, birthYear, addr, height) VALUES ('TWC', N'트와이스', 1995, N'서울', 167);"], rubric: ["INSERT INTO userTbl", "VALUES", "'TWC'", "N'트와이스'", "1995", "N'서울'"] },
        { id: "essay-insert-1-2", type: "essay", prompt: "buyTbl에 다음 구매 내역을 추가하는 INSERT 문을 작성하세요.\nuserID: 'KBS', 제품명: '노트북', 분류: '전자', 가격: 1200, 수량: 1", acceptableAnswers: ["INSERT INTO buyTbl (userID, prodName, groupName, price, amount) VALUES ('KBS', N'노트북', N'전자', 1200, 1);"], rubric: ["INSERT INTO buyTbl", "VALUES", "'KBS'", "N'노트북'", "1200"] },
        { id: "essay-insert-1-3", type: "essay", prompt: "userTbl에 아이디 'EXO', 이름 '엑소', 지역 '경기'인 회원을 추가하세요. (나머지 컬럼은 생략)", acceptableAnswers: ["INSERT INTO userTbl (userID, name, addr) VALUES ('EXO', N'엑소', N'경기');"], rubric: ["INSERT INTO userTbl", "userID", "name", "addr", "VALUES", "'EXO'"] },
        { id: "essay-update-1-1", type: "essay", prompt: "userTbl에서 아이디가 'LSG'인 회원의 주소(addr)를 '제주'로 변경하는 UPDATE 문을 작성하세요.", acceptableAnswers: ["UPDATE userTbl SET addr = N'제주' WHERE userID = 'LSG';"], rubric: ["UPDATE userTbl", "SET addr", "N'제주'", "WHERE userID", "'LSG'"] },
        { id: "essay-update-1-2", type: "essay", prompt: "buyTbl에서 제품명(prodName)이 '운동화'인 상품의 단가(price)를 50으로 수정하는 쿼리를 작성하세요.", acceptableAnswers: ["UPDATE buyTbl SET price = 50 WHERE prodName = N'운동화';"], rubric: ["UPDATE buyTbl", "SET price", "50", "WHERE prodName", "N'운동화'"] },
        { id: "essay-update-1-3", type: "essay", prompt: "userTbl에서 이름이 '김범수'인 회원의 국번(mobile1)을 '010'으로 수정하세요.", acceptableAnswers: ["UPDATE userTbl SET mobile1 = '010' WHERE name = N'김범수';"], rubric: ["UPDATE userTbl", "SET mobile1", "'010'", "WHERE name", "N'김범수'"] },
        { id: "essay-delete-1-1", type: "essay", prompt: "userTbl에서 아이디가 'KKH'인 회원의 정보를 삭제하는 DELETE 문을 작성하세요.", acceptableAnswers: ["DELETE FROM userTbl WHERE userID = 'KKH';"], rubric: ["DELETE FROM userTbl", "WHERE userID", "'KKH'"] },
        { id: "essay-delete-1-2", type: "essay", prompt: "buyTbl에서 분류(groupName)가 '의류'인 모든 구매 기록을 삭제하세요.", acceptableAnswers: ["DELETE FROM buyTbl WHERE groupName = N'의류';"], rubric: ["DELETE FROM buyTbl", "WHERE groupName", "N'의류'"] },
        { id: "essay-func-1-1", type: "essay", prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\nSELECT LEFT('SQL Server', 3);", acceptableAnswers: ["SQL"], rubric: ["SQL"] },
        { id: "essay-func-1-2", type: "essay", prompt: "다음 SQL 함수의 실행 결과를 적으시오.\nSELECT SUBSTRING('대한민국만세', 3, 2);", acceptableAnswers: ["민국"], rubric: ["민국"] },
        { id: "essay-func-1-3", type: "essay", prompt: "다음 SQL 문의 결과값을 적으시오.\nSELECT ROUND(123.4567, 2);", acceptableAnswers: ["123.46"], rubric: ["123.46"] },
        { id: "essay-func-1-4", type: "essay", prompt: "문자열 '2023'을 정수형으로 변환하는 CAST 함수를 작성하세요.", acceptableAnswers: ["CAST('2023' AS INT)"], rubric: ["CAST", "AS INT", "'2023'"] },
        { id: "essay-func-1-5", type: "essay", prompt: "현재 날짜와 시간을 반환하는 SQL Server 내장 함수는 무엇입니까?", acceptableAnswers: ["GETDATE()"], rubric: ["GETDATE"] },
        { id: "essay-func-1-6", type: "essay", prompt: "문자열 앞뒤의 공백을 모두 제거하는 함수 2개를 각각 적으시오.", acceptableAnswers: ["LTRIM, RTRIM (또는 TRIM)"], rubric: ["LTRIM", "RTRIM"] },
        { id: "essay-type-1-1", type: "essay", prompt: "고정 길이 문자열을 저장하며, 남는 공간을 공백으로 채우는 데이터 타입은 무엇입니까?", acceptableAnswers: ["CHAR"], rubric: ["CHAR"] },
        { id: "essay-type-1-2", type: "essay", prompt: "가변 길이 문자열을 저장하며, 입력된 데이터 길이만큼만 공간을 차지하는 데이터 타입은?", acceptableAnswers: ["VARCHAR"], rubric: ["VARCHAR"] },
        { id: "essay-type-1-3", type: "essay", prompt: "유니코드(한글 등) 문자를 저장하기 위해 사용하며, 문자당 2바이트를 할당하는 가변 길이 데이터 타입은?", acceptableAnswers: ["NVARCHAR"], rubric: ["NVARCHAR"] },
        { id: "essay-type-1-4", type: "essay", prompt: "-21억 ~ +21억 범위의 정수를 저장하는 가장 일반적인 정수형 데이터 타입은?", acceptableAnswers: ["INT"], rubric: ["INT"] },
        { id: "essay-type-1-5", type: "essay", prompt: "날짜와 시간을 함께 저장할 수 있는 데이터 타입으로 YYYY-MM-DD hh:mm:ss 형식을 갖는 것은?", acceptableAnswers: ["DATETIME"], rubric: ["DATETIME"] },
        { id: "essay-type-1-6", type: "essay", prompt: "데이터베이스에서 '값이 없음' 또는 '알 수 없음'을 나타내는 특수한 값은 무엇입니까?", acceptableAnswers: ["NULL"], rubric: ["NULL"] },
        { id: "essay-field-1-1", type: "essay", prompt: "전체 자릿수가 10자리이고, 그 중 소수점 이하가 2자리인 숫자 필드를 정의하는 구문을 작성하세요.", acceptableAnswers: ["DECIMAL(10, 2)"], rubric: ["DECIMAL", "10", "2"] },
        { id: "essay-field-1-2", type: "essay", prompt: "최대 5글자의 한글 이름을 저장할 수 있는 고정 길이 유니코드 문자열 필드 정의 구문을 작성하세요.", acceptableAnswers: ["NCHAR(5)"], rubric: ["NCHAR", "5"] },
        { id: "essay-field-1-3", type: "essay", prompt: "입력 값이 생략될 경우 자동으로 0이 입력되도록 하는 제약조건 키워드는?", acceptableAnswers: ["DEFAULT"], rubric: ["DEFAULT"] },
        { id: "essay-join-1-1", type: "essay", prompt: "두 테이블의 조인 조건이 일치하는 행만 반환하는 가장 일반적인 조인 방식은?", acceptableAnswers: ["INNER JOIN"], rubric: ["INNER", "JOIN"] },
        { id: "essay-join-1-2", type: "essay", prompt: "LEFT OUTER JOIN 수행 시, 왼쪽 테이블에는 데이터가 있지만 오른쪽 테이블에 매칭되는 데이터가 없을 경우, 오른쪽 테이블의 컬럼 값은 무엇으로 표시됩니까?", acceptableAnswers: ["NULL"], rubric: ["NULL"] },
        { id: "essay-join-1-3", type: "essay", prompt: "userTbl(회원)과 buyTbl(구매)을 조인하여 '한 번이라도 구매한 적이 있는 회원'의 목록만 출력하려 합니다. 어떤 조인을 사용해야 가장 적절합니까?", acceptableAnswers: ["INNER JOIN"], rubric: ["INNER JOIN"] },
        { id: "essay-join-1-4", type: "essay", prompt: "userTbl(회원)을 기준으로 buyTbl(구매)을 조인하여, 구매 기록이 없는 회원을 포함한 '모든 회원'의 구매 현황을 보려 합니다. 이때 사용해야 할 조인 구문은?", acceptableAnswers: ["LEFT OUTER JOIN (또는 LEFT JOIN)"], rubric: ["LEFT", "OUTER", "JOIN"] }
    ]
};
if (typeof window !== 'undefined') window.set7 = set7;
