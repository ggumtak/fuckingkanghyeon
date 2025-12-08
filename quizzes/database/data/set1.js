/**
 * Database Midterm Quiz - Set 1
 */
const set1 = {
    setId: "set-1",
    questions: [
        {
            id: "s1-insert-1",
            type: "code-fill",
            prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: YJS, 성명: 유재석, 출생년도: 1972, 지역: 서울, 키: 178, 가입일: 2015-01-01",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name, birthYear, addr, height, mDate)\nVALUES (( 1 ), N'유재석', ( 2 ), ( 3 ), ( 4 ), ( 5 ));",
            blanks: [
                { index: 1, answer: "'YJS'" },
                { index: 2, answer: "1972" },
                { index: 3, answer: "N'서울'" },
                { index: 4, answer: "178" },
                { index: 5, answer: "'2015-01-01'" }
            ]
        },
        {
            id: "s1-insert-2",
            type: "code-fill",
            prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: LSG, 제품명: 책, 분류: NULL, 가격: 20, 수량: 3",
            language: "sql",
            code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));",
            blanks: [
                { index: 1, answer: "'LSG'" },
                { index: 2, answer: "N'책'" },
                { index: 3, answer: "NULL" },
                { index: 4, answer: "20" },
                { index: 5, answer: "3" }
            ]
        },
        {
            id: "s1-insert-3",
            type: "code-fill",
            prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: HGD, 성명: 홍길동, 지역: 경기, mobile1: 10, mobile2: 1234567, 키: 175",
            language: "sql",
            code: "INSERT INTO userTbl (userID, name, addr, mobile1, mobile2, height)\nVALUES (( 1 ), N'홍길동', ( 2 ), ( 3 ), ( 4 ), ( 5 ));",
            blanks: [
                { index: 1, answer: "'HGD'" },
                { index: 2, answer: "N'경기'" },
                { index: 3, answer: "'10'" },
                { index: 4, answer: "'1234567'" },
                { index: 5, answer: "175" }
            ]
        },
        {
            id: "s1-update-1",
            type: "code-fill",
            prompt: "userTbl에서 userID가 'BBK'인 사용자의 지역(addr)을 '부산'으로 수정하세요.",
            language: "sql",
            code: "UPDATE userTbl\nSET addr = ( 1 )\nWHERE userID = ( 2 );",
            blanks: [
                { index: 1, answer: "N'부산'" },
                { index: 2, answer: "'BBK'" }
            ]
        },
        {
            id: "s1-update-2",
            type: "code-fill",
            prompt: "buyTbl에서 전자(groupName='전자') 제품의 가격(price)을 10% 인상하세요.",
            language: "sql",
            code: "UPDATE buyTbl\nSET price = price * ( 1 )\nWHERE groupName = ( 2 );",
            blanks: [
                { index: 1, answer: "1.1" },
                { index: 2, answer: "N'전자'" }
            ]
        },
        {
            id: "s1-update-3",
            type: "code-fill",
            prompt: "userTbl에서 키(height)가 180 이상인 사용자의 mobile1을 '11'로 수정하세요.",
            language: "sql",
            code: "UPDATE userTbl\nSET mobile1 = ( 1 )\nWHERE height >= ( 2 );",
            blanks: [
                { index: 1, answer: "'11'" },
                { index: 2, answer: "180" }
            ]
        },
        {
            id: "s1-delete-1",
            type: "code-fill",
            prompt: "buyTbl에서 userID가 'KBS'이고 제품명이 '운동화'인 레코드만 삭제하세요.",
            language: "sql",
            code: "DELETE FROM buyTbl\nWHERE userID = ( 1 ) AND prodName = ( 2 );",
            blanks: [
                { index: 1, answer: "'KBS'" },
                { index: 2, answer: "N'운동화'" }
            ]
        },
        {
            id: "s1-delete-2",
            type: "code-fill",
            prompt: "userTbl에서 mobile1과 mobile2가 모두 NULL인 사용자만 삭제하세요.",
            language: "sql",
            code: "DELETE FROM userTbl\nWHERE mobile1 IS ( 1 ) AND mobile2 IS ( 2 );",
            blanks: [
                { index: 1, answer: "NULL" },
                { index: 2, answer: "NULL" }
            ]
        },
        { id: "s1-func-1", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT LEFT('SQL Server 2019', 3);", options: ["SQL", "SER", "201", "019"], correctIndex: 0 },
        { id: "s1-func-2", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT SUBSTRING(N'대한민국화이팅', 3, 2);", options: ["민국", "한민", "국화", "화이"], correctIndex: 0 },
        { id: "s1-func-3", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT ROUND(1234.5678, 2);", options: ["1234.56", "1234.57", "1234.00", "1235"], correctIndex: 1 },
        { id: "s1-func-4", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CAST(123.45 AS INT);", options: ["123", "124", "123.45", "오류 발생"], correctIndex: 0 },
        { id: "s1-func-5", type: "mcq", prompt: "다음 쿼리의 결과에 대한 설명으로 가장 적절한 것은?\n\nSELECT GETDATE();", options: ["현재 날짜만 반환한다", "현재 시간만 반환한다", "현재 날짜와 시간을 DATETIME 형식으로 반환한다", "문자열로만 반환한다"], correctIndex: 2 },
        { id: "s1-func-6", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT DATEADD(day, 10, '2025-01-01');", options: ["2025-01-10", "2025-01-11", "2025-02-01", "오류 발생"], correctIndex: 1 },
        { id: "s1-type-1", type: "short", prompt: "데이터 타입 INT의 특징을 간단히 설명하세요.", acceptableAnswers: ["정수형", "정수를 저장", "정수 데이터"] },
        { id: "s1-type-2", type: "short", prompt: "데이터 타입 DECIMAL(7,2)의 의미를 전체 자릿수와 소수점 자릿수로 설명하세요.", acceptableAnswers: ["전체 7자리 소수점 2자리", "총 7자리 소수 2자리", "정밀도 7, 소수 2"] },
        { id: "s1-type-3", type: "short", prompt: "CHAR(10)과 VARCHAR(10)의 차이를 한 문장으로 설명하세요.", acceptableAnswers: ["CHAR는 고정길이 VARCHAR는 가변길이", "고정길이와 가변길이 차이"] },
        { id: "s1-type-4", type: "short", prompt: "NCHAR와 CHAR의 가장 큰 차이는 무엇인가요?", acceptableAnswers: ["NCHAR는 유니코드", "NCHAR는 한글 등 유니코드 저장", "CHAR는 비유니코드"] },
        { id: "s1-type-5", type: "short", prompt: "VARCHAR(MAX)의 용도를 간단히 설명하세요.", acceptableAnswers: ["대용량 문자열 저장", "긴 텍스트 저장", "LOB 문자열"] },
        { id: "s1-type-6", type: "short", prompt: "DATETIME 타입에는 어떤 정보가 저장되나요?", acceptableAnswers: ["날짜와 시간", "날짜+시간 저장"] },
        { id: "s1-field-1", type: "code-fill", prompt: "상품 가격과 세율을 저장할 priceTbl을 생성하세요.\nprice는 소수 2자리까지, 최대 9자리(소수 포함)로 저장합니다.", language: "sql", code: "CREATE TABLE priceTbl (\n  prodID INT,\n  price ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(9,2)" }] },
        { id: "s1-field-2", type: "code-fill", prompt: "학생 성적을 저장할 scoreTbl을 생성하세요.\n점수는 최대 5자리(소수 포함), 소수 1자리까지 저장합니다.", language: "sql", code: "CREATE TABLE scoreTbl (\n  stdID CHAR(8),\n  score ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(5,1)" }] },
        { id: "s1-field-3", type: "code-fill", prompt: "환율 정보를 저장할 fxTbl을 생성하세요.\nrate는 전체 10자리 중 소수 4자리까지 저장합니다.", language: "sql", code: "CREATE TABLE fxTbl (\n  currency NCHAR(3),\n  rate ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(10,4)" }] },
        { id: "s1-join-1", type: "mcq", prompt: "userTbl과 buyTbl을 INNER JOIN했을 때 결과에 대한 설명으로 옳은 것은?", options: ["모든 userTbl 레코드가 나온다", "구매 이력이 있는 사용자만 나온다", "구매 이력이 없는 사용자만 나온다", "모든 buyTbl 레코드가 나온다"], correctIndex: 1 },
        { id: "s1-join-2", type: "mcq", prompt: "userTbl을 기준으로 LEFT OUTER JOIN을 수행하면 어떤 사용자가 반드시 결과에 포함되는가?", options: ["구매 이력이 있는 사용자만", "구매 이력이 없는 사용자만", "구매 이력 유무와 상관없이 모든 사용자", "buyTbl에 존재하는 사용자만"], correctIndex: 2 },
        { id: "s1-join-3", type: "mcq", prompt: "다음 조건의 결과 설명으로 옳은 것은?\n\nSELECT U.userID, U.name\nFROM userTbl U\nLEFT OUTER JOIN buyTbl B\nON U.userID = B.userID\nWHERE B.prodName IS NULL;", options: ["구매 이력이 있는 사용자만 조회된다", "구매 이력이 없는 사용자만 조회된다", "모든 사용자가 중복 없이 조회된다", "buyTbl의 모든 물품이 조회된다"], correctIndex: 1 },
        { id: "s1-join-4", type: "mcq", prompt: "FULL OUTER JOIN에 대한 설명으로 옳은 것은?", options: ["조인 조건이 맞는 행만 나온다", "왼쪽 테이블 행만 모두 나온다", "오른쪽 테이블 행만 모두 나온다", "양쪽 테이블의 모든 행이 조건 유무와 관계없이 나온다"], correctIndex: 3 }
    ]
};

if (typeof window !== 'undefined') window.set1 = set1;
