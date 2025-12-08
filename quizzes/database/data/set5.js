/**
 * Database Midterm Quiz - Set 5
 */
const set5 = {
    setId: "set-5",
    questions: [
        { id: "s5-insert-1", type: "code-fill", prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: HNS, 성명: 한나수, 출생년도: 1995, 지역: 부산, 키: 169, 가입일: 2018-02-02", language: "sql", code: "INSERT INTO userTbl (userID, name, birthYear, addr, height, mDate)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ), ( 6 ));", blanks: [{ index: 1, answer: "'HNS'" }, { index: 2, answer: "N'한나수'" }, { index: 3, answer: "1995" }, { index: 4, answer: "N'부산'" }, { index: 5, answer: "169" }, { index: 6, answer: "'2018-02-02'" }] },
        { id: "s5-insert-2", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: LSG, 제품명: 무선청소기, 분류: 전자, 가격: 300, 수량: 1", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'LSG'" }, { index: 2, answer: "N'무선청소기'" }, { index: 3, answer: "N'전자'" }, { index: 4, answer: "300" }, { index: 5, answer: "1" }] },
        { id: "s5-insert-3", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: KBS, 제품명: 커피, 분류: NULL, 가격: 5, 수량: 10", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'KBS'" }, { index: 2, answer: "N'커피'" }, { index: 3, answer: "NULL" }, { index: 4, answer: "5" }, { index: 5, answer: "10" }] },
        { id: "s5-update-1", type: "code-fill", prompt: "userTbl에서 userID가 'SSK'인 사용자의 지역(addr)을 '인천'으로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET addr = ( 1 )\nWHERE userID = ( 2 );", blanks: [{ index: 1, answer: "N'인천'" }, { index: 2, answer: "'SSK'" }] },
        { id: "s5-update-2", type: "code-fill", prompt: "buyTbl에서 groupName이 '전자'인 레코드의 수량(amount)을 1씩 증가시키세요.", language: "sql", code: "UPDATE buyTbl\nSET amount = amount + ( 1 )\nWHERE groupName = ( 2 );", blanks: [{ index: 1, answer: "1" }, { index: 2, answer: "N'전자'" }] },
        { id: "s5-update-3", type: "code-fill", prompt: "userTbl에서 addr이 '서울'인 사용자의 키(height)를 2 감소시키세요.", language: "sql", code: "UPDATE userTbl\nSET height = height - ( 1 )\nWHERE addr = ( 2 );", blanks: [{ index: 1, answer: "2" }, { index: 2, answer: "N'서울'" }] },
        { id: "s5-delete-1", type: "code-fill", prompt: "buyTbl에서 userID가 'BBK'이고 제품명이 '모니터'인 레코드만 삭제하세요.", language: "sql", code: "DELETE FROM buyTbl\nWHERE userID = ( 1 ) AND prodName = ( 2 );", blanks: [{ index: 1, answer: "'BBK'" }, { index: 2, answer: "N'모니터'" }] },
        { id: "s5-delete-2", type: "code-fill", prompt: "userTbl에서 addr이 '경남'인 사용자만 삭제하세요.", language: "sql", code: "DELETE FROM userTbl\nWHERE addr = ( 1 );", blanks: [{ index: 1, answer: "N'경남'" }] },
        { id: "s5-func-1", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT LEFT('Database', 4);", options: ["Data", "Base", "DataB", "ase"], correctIndex: 0 },
        { id: "s5-func-2", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT RIGHT(N'안녕하세요', 2);", options: ["안녕", "하세요", "하세", "요"], correctIndex: 1 },
        { id: "s5-func-3", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT SUBSTRING('0123456789', 3, 4);", options: ["0123", "2345", "2346", "3456"], correctIndex: 1 },
        { id: "s5-func-4", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT ROUND(45.444, 2);", options: ["45.44", "45.45", "45.4", "46.00"], correctIndex: 0 },
        { id: "s5-func-5", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CAST(123.99 AS INT);", options: ["123", "124", "123.99", "오류 발생"], correctIndex: 0 },
        { id: "s5-func-6", type: "mcq", prompt: "다음 쿼리의 결과에 대한 설명으로 옳은 것은?\n\nSELECT GETDATE();", options: ["현재 날짜만 반환한다", "현재 시간만 반환한다", "현재 날짜와 시간을 DATETIME 형식으로 반환한다", "정수 값을 반환한다"], correctIndex: 2 },
        { id: "s5-type-1", type: "short", prompt: "INT 타입의 용도를 간단히 설명하세요.", acceptableAnswers: ["정수 저장", "정수형 데이터"] },
        { id: "s5-type-2", type: "short", prompt: "DECIMAL(8,3)의 의미를 설명하세요.", acceptableAnswers: ["전체 8자리 소수 3자리", "정밀도 8 소수 3"] },
        { id: "s5-type-3", type: "short", prompt: "CHAR와 VARCHAR의 차이를 간단히 설명하세요.", acceptableAnswers: ["CHAR는 고정길이 VARCHAR는 가변길이", "고정길이 vs 가변길이"] },
        { id: "s5-type-4", type: "short", prompt: "NCHAR와 VARCHAR의 차이를 간단히 설명하세요.", acceptableAnswers: ["NCHAR는 유니코드 고정길이", "유니코드 여부와 길이 특성 차이"] },
        { id: "s5-type-5", type: "short", prompt: "VARCHAR(50)의 의미를 설명하세요.", acceptableAnswers: ["최대 50자 가변길이 문자열", "최대 50글자 저장"] },
        { id: "s5-type-6", type: "short", prompt: "DATETIME 타입이 저장하는 정보를 설명하세요.", acceptableAnswers: ["날짜와 시간", "날짜+시간"] },
        { id: "s5-field-1", type: "code-fill", prompt: "상품 원가를 저장할 baseCostTbl을 생성하세요.\nbaseCost는 전체 7자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE baseCostTbl (\n  itemID INT,\n  baseCost ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(7,2)" }] },
        { id: "s5-field-2", type: "code-fill", prompt: "평균 속도를 저장할 speedTbl을 생성하세요.\nspeed는 전체 5자리 중 소수 1자리까지 저장합니다.", language: "sql", code: "CREATE TABLE speedTbl (\n  carID INT,\n  speed ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(5,1)" }] },
        { id: "s5-field-3", type: "code-fill", prompt: "수수료율을 저장할 feeTbl을 생성하세요.\nfeeRate는 전체 4자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE feeTbl (\n  feeID INT,\n  feeRate ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(4,2)" }] },
        { id: "s5-join-1", type: "mcq", prompt: "userTbl과 buyTbl을 INNER JOIN했을 때 옳은 설명은?", options: ["모든 사용자가 나온다", "구매 이력이 있는 사용자만 나온다", "구매 이력이 없는 사용자만 나온다", "buyTbl의 NULL groupName만 나온다"], correctIndex: 1 },
        { id: "s5-join-2", type: "mcq", prompt: "userTbl 기준 LEFT OUTER JOIN 결과에 대한 설명으로 옳은 것은?", options: ["buyTbl에 있는 사용자만 나온다", "조건이 맞는 행만 나온다", "구매 이력 유무와 관계없이 모든 사용자가 포함된다", "구매 이력이 없는 사용자는 제외된다"], correctIndex: 2 },
        { id: "s5-join-3", type: "mcq", prompt: "다음 쿼리의 결과는 어떤 사용자들을 의미하는가?\n\nSELECT U.userID, U.name\nFROM userTbl U\nLEFT OUTER JOIN buyTbl B\nON U.userID = B.userID\nWHERE B.userID IS NULL;", options: ["전자 제품 구매자", "구매 이력이 있는 사용자", "구매 이력이 없는 사용자", "모든 사용자"], correctIndex: 2 },
        { id: "s5-join-4", type: "mcq", prompt: "FULL OUTER JOIN의 특징으로 옳은 것은?", options: ["항상 INNER JOIN과 같다", "왼쪽 테이블만 모두 포함한다", "오른쪽 테이블만 모두 포함한다", "양쪽 테이블의 모든 행을 포함할 수 있다"], correctIndex: 3 }
    ]
};
if (typeof window !== 'undefined') window.set5 = set5;
