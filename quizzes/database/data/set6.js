/**
 * Database Midterm Quiz - Set 6
 */
const set6 = {
    setId: "set-6",
    questions: [
        { id: "s6-insert-1", type: "code-fill", prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: JDM, 성명: 정다미, 출생년도: 2000, 지역: 경기, 키: 165", language: "sql", code: "INSERT INTO userTbl (userID, name, birthYear, addr, height)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'JDM'" }, { index: 2, answer: "N'정다미'" }, { index: 3, answer: "2000" }, { index: 4, answer: "N'경기'" }, { index: 5, answer: "165" }] },
        { id: "s6-insert-2", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: JYP, 제품명: 스피커, 분류: 전자, 가격: 150, 수량: 2", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'JYP'" }, { index: 2, answer: "N'스피커'" }, { index: 3, answer: "N'전자'" }, { index: 4, answer: "150" }, { index: 5, answer: "2" }] },
        { id: "s6-insert-3", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: SSK, 제품명: 수첩, 분류: 문구, 가격: 8, 수량: 4", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'SSK'" }, { index: 2, answer: "N'수첩'" }, { index: 3, answer: "N'문구'" }, { index: 4, answer: "8" }, { index: 5, answer: "4" }] },
        { id: "s6-update-1", type: "code-fill", prompt: "userTbl에서 userID가 'KBS'인 사용자의 키(height)를 175로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET height = ( 1 )\nWHERE userID = ( 2 );", blanks: [{ index: 1, answer: "175" }, { index: 2, answer: "'KBS'" }] },
        { id: "s6-update-2", type: "code-fill", prompt: "buyTbl에서 제품명이 '노트북'인 레코드의 가격(price)을 900으로 수정하세요.", language: "sql", code: "UPDATE buyTbl\nSET price = ( 1 )\nWHERE prodName = ( 2 );", blanks: [{ index: 1, answer: "900" }, { index: 2, answer: "N'노트북'" }] },
        { id: "s6-update-3", type: "code-fill", prompt: "userTbl에서 mobile1이 NULL인 사용자의 mobile1과 mobile2를 각각 '10', '7777777'로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET mobile1 = ( 1 ), mobile2 = ( 2 )\nWHERE mobile1 IS ( 3 );", blanks: [{ index: 1, answer: "'10'" }, { index: 2, answer: "'7777777'" }, { index: 3, answer: "NULL" }] },
        { id: "s6-delete-1", type: "code-fill", prompt: "buyTbl에서 price가 200 이하인 레코드만 삭제하세요.", language: "sql", code: "DELETE FROM buyTbl\nWHERE price <= ( 1 );", blanks: [{ index: 1, answer: "200" }] },
        { id: "s6-delete-2", type: "code-fill", prompt: "userTbl에서 가입일(mDate)이 '2009-04-04'인 사용자만 삭제하세요.", language: "sql", code: "DELETE FROM userTbl\nWHERE mDate = ( 1 );", blanks: [{ index: 1, answer: "'2009-04-04'" }] },
        { id: "s6-func-1", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT LEFT(N'컴퓨터공학', 2);", options: ["컴퓨터", "컴퓨", "컴퓨", "컴"], correctIndex: 3 },
        { id: "s6-func-2", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT RIGHT('123456', 3);", options: ["123", "456", "345", "56"], correctIndex: 1 },
        { id: "s6-func-3", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT SUBSTRING(N'데이터분석', 2, 2);", options: ["데이", "이터", "터분", "분석"], correctIndex: 1 },
        { id: "s6-func-4", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT ROUND(999.995, 2);", options: ["999.99", "1000.00", "999.995", "999.9"], correctIndex: 1 },
        { id: "s6-func-5", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CAST(15.5 AS DECIMAL(4,1));", options: ["15.5", "15.50", "16.0", "오류 발생"], correctIndex: 0 },
        { id: "s6-func-6", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT DATEADD(month, 1, '2025-03-15');", options: ["2025-04-14", "2025-04-15", "2025-03-16", "2025-05-15"], correctIndex: 1 },
        { id: "s6-type-1", type: "short", prompt: "INT와 BIGINT의 차이를 간단히 설명하세요.", acceptableAnswers: ["저장 범위 차이", "BIGINT가 더 큰 정수 범위"] },
        { id: "s6-type-2", type: "short", prompt: "DECIMAL(6,2)의 의미를 설명하세요.", acceptableAnswers: ["전체 6자리 소수 2자리", "정밀도 6 소수 2"] },
        { id: "s6-type-3", type: "short", prompt: "CHAR(13)이 적합한 데이터 예를 한 가지 설명하세요.", acceptableAnswers: ["고정 길이 코드", "주민등록번호 같은 고정 길이 문자열"] },
        { id: "s6-type-4", type: "short", prompt: "VARCHAR의 장점을 간단히 설명하세요.", acceptableAnswers: ["가변 길이라 공간 효율", "필요한 만큼만 저장"] },
        { id: "s6-type-5", type: "short", prompt: "NCHAR/NVARCHAR가 필요한 이유를 설명하세요.", acceptableAnswers: ["유니코드 저장", "한글 등 다국어 저장"] },
        { id: "s6-type-6", type: "short", prompt: "DATETIME과 DATE의 차이를 간단히 설명하세요.", acceptableAnswers: ["DATETIME은 날짜+시간, DATE는 날짜만", "시간 포함 여부"] },
        { id: "s6-field-1", type: "code-fill", prompt: "포인트 적립률을 저장할 pointTbl을 생성하세요.\nrate는 전체 5자리 중 소수 3자리까지 저장합니다.", language: "sql", code: "CREATE TABLE pointTbl (\n  memberID INT,\n  rate ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(5,3)" }] },
        { id: "s6-field-2", type: "code-fill", prompt: "상품 평점을 저장할 reviewTbl을 생성하세요.\nscore는 전체 3자리 중 소수 1자리까지 저장합니다.", language: "sql", code: "CREATE TABLE reviewTbl (\n  reviewID INT,\n  score ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(3,1)" }] },
        { id: "s6-field-3", type: "code-fill", prompt: "총 결제 금액을 저장할 payTbl을 생성하세요.\ntotalPay는 전체 10자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE payTbl (\n  payID INT,\n  totalPay ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(10,2)" }] },
        { id: "s6-join-1", type: "mcq", prompt: "다음 중 구매 이력이 있는 사용자만 뽑기에 가장 적절한 조인은?", options: ["userTbl LEFT OUTER JOIN buyTbl", "userTbl RIGHT OUTER JOIN buyTbl", "userTbl INNER JOIN buyTbl", "userTbl FULL OUTER JOIN buyTbl"], correctIndex: 2 },
        { id: "s6-join-2", type: "mcq", prompt: "LEFT OUTER JOIN 후 buyTbl 컬럼이 NULL로 나오는 의미는?", options: ["해당 사용자가 탈퇴했다", "해당 사용자의 구매 이력이 없다", "groupName이 반드시 NULL이다", "데이터 타입 오류다"], correctIndex: 1 },
        { id: "s6-join-3", type: "mcq", prompt: "다음 쿼리의 결과 설명으로 옳은 것은?\n\nSELECT U.userID, U.name, B.prodName\nFROM userTbl U\nLEFT OUTER JOIN buyTbl B\nON U.userID = B.userID;", options: ["구매 이력이 있는 사용자만 나온다", "모든 사용자 + 구매 정보가 있으면 함께 나온다", "모든 구매 기록만 나온다", "구매 이력이 없는 사용자는 제거된다"], correctIndex: 1 },
        { id: "s6-join-4", type: "mcq", prompt: "INNER JOIN과 LEFT OUTER JOIN의 차이를 가장 정확히 설명한 것은?", options: ["두 조인은 항상 결과가 같다", "INNER JOIN은 불일치 행도 포함한다", "LEFT OUTER JOIN은 왼쪽 테이블의 모든 행을 유지한다", "LEFT OUTER JOIN은 오른쪽 테이블의 모든 행을 유지한다"], correctIndex: 2 }
    ]
};
if (typeof window !== 'undefined') window.set6 = set6;
