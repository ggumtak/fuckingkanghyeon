/**
 * Database Midterm Quiz - Set 3
 * Note: s3-func-1 correctIndex fixed to 0 (데이터) per user feedback
 */
const set3 = {
    setId: "set-3",
    questions: [
        { id: "s3-insert-1", type: "code-fill", prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: KJH, 성명: 김지훈, 출생년도: 1985, 지역: 경남, 키: 180, 가입일: 2011-03-03", language: "sql", code: "INSERT INTO userTbl (userID, name, birthYear, addr, height, mDate)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ), ( 6 ));", blanks: [{ index: 1, answer: "'KJH'" }, { index: 2, answer: "N'김지훈'" }, { index: 3, answer: "1985" }, { index: 4, answer: "N'경남'" }, { index: 5, answer: "180" }, { index: 6, answer: "'2011-03-03'" }] },
        { id: "s3-insert-2", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: SSK, 제품명: 이어폰, 분류: 전자, 가격: 80, 수량: 1", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'SSK'" }, { index: 2, answer: "N'이어폰'" }, { index: 3, answer: "N'전자'" }, { index: 4, answer: "80" }, { index: 5, answer: "1" }] },
        { id: "s3-insert-3", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: LSG, 제품명: 티셔츠, 분류: 의류, 가격: 35, 수량: 2", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'LSG'" }, { index: 2, answer: "N'티셔츠'" }, { index: 3, answer: "N'의류'" }, { index: 4, answer: "35" }, { index: 5, answer: "2" }] },
        { id: "s3-update-1", type: "code-fill", prompt: "userTbl에서 userID가 'JYP'인 사용자의 키(height)를 170으로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET height = ( 1 )\nWHERE userID = ( 2 );", blanks: [{ index: 1, answer: "170" }, { index: 2, answer: "'JYP'" }] },
        { id: "s3-update-2", type: "code-fill", prompt: "buyTbl에서 제품명이 '모니터'인 레코드의 가격(price)을 190으로 수정하세요.", language: "sql", code: "UPDATE buyTbl\nSET price = ( 1 )\nWHERE prodName = ( 2 );", blanks: [{ index: 1, answer: "190" }, { index: 2, answer: "N'모니터'" }] },
        { id: "s3-update-3", type: "code-fill", prompt: "userTbl에서 addr이 '경기'인 사용자의 가입일(mDate)을 '2010-01-01'로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET mDate = ( 1 )\nWHERE addr = ( 2 );", blanks: [{ index: 1, answer: "'2010-01-01'" }, { index: 2, answer: "N'경기'" }] },
        { id: "s3-delete-1", type: "code-fill", prompt: "buyTbl에서 groupName이 NULL인 레코드만 삭제하세요.", language: "sql", code: "DELETE FROM buyTbl\nWHERE groupName IS ( 1 );", blanks: [{ index: 1, answer: "NULL" }] },
        { id: "s3-delete-2", type: "code-fill", prompt: "userTbl에서 키(height)가 160 미만인 사용자만 삭제하세요.", language: "sql", code: "DELETE FROM userTbl\nWHERE height < ( 1 );", blanks: [{ index: 1, answer: "160" }] },
        { id: "s3-func-1", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT LEFT(N'데이터베이스', 3);", options: ["데이터", "데이", "이터", "베이스"], correctIndex: 0 },
        { id: "s3-func-2", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT SUBSTRING('ABCDEFGHIJ', 4, 3);", options: ["ABC", "DEF", "D", "EFG"], correctIndex: 1 },
        { id: "s3-func-3", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT ROUND(98.765, 1);", options: ["98.7", "98.8", "98.76", "99.0"], correctIndex: 1 },
        { id: "s3-func-4", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CAST('2024-12-31' AS DATETIME);", options: ["2024-12-31 00:00:00", "2024-12-31 12:00:00", "2024-12-31", "오류 발생"], correctIndex: 0 },
        { id: "s3-func-5", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT YEAR('1999-07-30');", options: ["1997", "1998", "1999", "2000"], correctIndex: 2 },
        { id: "s3-func-6", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CAST(9999.99 AS DECIMAL(6,2));", options: ["9999.99", "10000.00", "9999.9", "오류 발생"], correctIndex: 0 },
        { id: "s3-type-1", type: "short", prompt: "INT 타입이 저장할 수 있는 데이터의 종류를 설명하세요.", acceptableAnswers: ["정수", "정수형 데이터"] },
        { id: "s3-type-2", type: "short", prompt: "DECIMAL(10,3)의 의미를 설명하세요.", acceptableAnswers: ["전체 10자리 소수 3자리", "정밀도 10 소수 3"] },
        { id: "s3-type-3", type: "short", prompt: "CHAR 타입이 적합한 예시를 한 가지 설명하세요.", acceptableAnswers: ["고정 길이 코드", "주민번호 일부 같은 고정 길이 문자열"] },
        { id: "s3-type-4", type: "short", prompt: "VARCHAR 타입의 장점을 한 문장으로 설명하세요.", acceptableAnswers: ["가변 길이라 공간 효율이 좋다", "필요한 만큼만 저장"] },
        { id: "s3-type-5", type: "short", prompt: "NCHAR가 필요한 이유를 설명하세요.", acceptableAnswers: ["유니코드 저장", "한글 등 다국어 저장"] },
        { id: "s3-type-6", type: "short", prompt: "DATETIME이 저장하는 정보를 설명하세요.", acceptableAnswers: ["날짜와 시간", "날짜+시간"] },
        { id: "s3-field-1", type: "code-fill", prompt: "배송 무게를 저장할 shipTbl을 생성하세요.\nweight는 전체 6자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE shipTbl (\n  shipID INT,\n  weight ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(6,2)" }] },
        { id: "s3-field-2", type: "code-fill", prompt: "할인율을 저장할 discountTbl을 생성하세요.\nrate는 전체 5자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE discountTbl (\n  discID INT,\n  rate ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(5,2)" }] },
        { id: "s3-field-3", type: "code-fill", prompt: "온도를 저장할 tempTbl을 생성하세요.\ntemp는 전체 4자리 중 소수 1자리까지 저장합니다.", language: "sql", code: "CREATE TABLE tempTbl (\n  logID INT,\n  temp ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(4,1)" }] },
        { id: "s3-join-1", type: "mcq", prompt: "다음 중 INNER JOIN의 결과 설명으로 옳은 것은?", options: ["userTbl의 모든 사용자가 나온다", "buyTbl의 모든 구매가 나온다", "두 테이블에서 userID가 일치하는 행만 나온다", "구매가 없는 사용자만 나온다"], correctIndex: 2 },
        { id: "s3-join-2", type: "mcq", prompt: "userTbl U LEFT OUTER JOIN buyTbl B에서 U 기준으로 결과를 볼 때 옳은 설명은?", options: ["구매 이력이 있는 사용자만 포함된다", "구매 이력 유무와 무관하게 모든 사용자가 포함된다", "buyTbl의 레코드가 없는 사용자는 제거된다", "항상 INNER JOIN과 동일하다"], correctIndex: 1 },
        { id: "s3-join-3", type: "mcq", prompt: "다음 쿼리의 의도는 무엇인가?\n\nSELECT U.userID, U.name\nFROM userTbl U\nLEFT OUTER JOIN buyTbl B\nON U.userID = B.userID\nWHERE B.userID IS NULL;", options: ["구매한 사용자 목록", "구매하지 않은 사용자 목록", "모든 사용자와 모든 구매 목록", "전자 제품 구매자 목록"], correctIndex: 1 },
        { id: "s3-join-4", type: "mcq", prompt: "OUTER JOIN에 대한 설명으로 옳은 것은?", options: ["항상 중복이 제거된다", "조인 조건이 맞지 않는 행도 포함할 수 있다", "두 테이블의 행 수가 반드시 같아진다", "WHERE 절을 사용할 수 없다"], correctIndex: 1 }
    ]
};

if (typeof window !== 'undefined') window.set3 = set3;
