/**
 * Database Midterm Quiz - Set 2
 */
const set2 = {
    setId: "set-2",
    questions: [
        { id: "s2-insert-1", type: "code-fill", prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: IU, 성명: 아이유, 출생년도: 1993, 지역: 서울, 키: 162", language: "sql", code: "INSERT INTO userTbl (userID, name, birthYear, addr, height)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'IU'" }, { index: 2, answer: "N'아이유'" }, { index: 3, answer: "1993" }, { index: 4, answer: "N'서울'" }, { index: 5, answer: "162" }] },
        { id: "s2-insert-2", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: JYP, 제품명: 마우스, 분류: 전자, 가격: 25, 수량: 2", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'JYP'" }, { index: 2, answer: "N'마우스'" }, { index: 3, answer: "N'전자'" }, { index: 4, answer: "25" }, { index: 5, answer: "2" }] },
        { id: "s2-insert-3", type: "code-fill", prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: PSG, 성명: 박서준, 출생년도: 1988, 지역: 서울, mobile1/2: 11-9999999, 키: 185, 가입일: 2014-06-01", language: "sql", code: "INSERT INTO userTbl (userID, name, birthYear, addr, mobile1, mobile2, height, mDate)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ), ( 6 ), ( 7 ), ( 8 ));", blanks: [{ index: 1, answer: "'PSG'" }, { index: 2, answer: "N'박서준'" }, { index: 3, answer: "1988" }, { index: 4, answer: "N'서울'" }, { index: 5, answer: "'11'" }, { index: 6, answer: "'9999999'" }, { index: 7, answer: "185" }, { index: 8, answer: "'2014-06-01'" }] },
        { id: "s2-update-1", type: "code-fill", prompt: "userTbl에서 addr이 '서울'인 사용자의 키(height)를 1 증가시키세요.", language: "sql", code: "UPDATE userTbl\nSET height = height + ( 1 )\nWHERE addr = ( 2 );", blanks: [{ index: 1, answer: "1" }, { index: 2, answer: "N'서울'" }] },
        { id: "s2-update-2", type: "code-fill", prompt: "buyTbl에서 userID가 'BBK'인 레코드의 수량(amount)을 2배로 수정하세요.", language: "sql", code: "UPDATE buyTbl\nSET amount = amount * ( 1 )\nWHERE userID = ( 2 );", blanks: [{ index: 1, answer: "2" }, { index: 2, answer: "'BBK'" }] },
        { id: "s2-update-3", type: "code-fill", prompt: "userTbl에서 mobile1이 NULL인 사용자의 mobile1을 '11'로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET mobile1 = ( 1 )\nWHERE mobile1 IS ( 2 );", blanks: [{ index: 1, answer: "'11'" }, { index: 2, answer: "NULL" }] },
        { id: "s2-delete-1", type: "code-fill", prompt: "buyTbl에서 price가 1000 이상인 레코드만 삭제하세요.", language: "sql", code: "DELETE FROM buyTbl\nWHERE price >= ( 1 );", blanks: [{ index: 1, answer: "1000" }] },
        { id: "s2-delete-2", type: "code-fill", prompt: "userTbl에서 birthYear가 1950 미만인 사용자만 삭제하세요.", language: "sql", code: "DELETE FROM userTbl\nWHERE birthYear < ( 1 );", blanks: [{ index: 1, answer: "1950" }] },
        { id: "s2-func-1", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT RIGHT('SQL Server 2019', 4);", options: ["SQL ", "2019", "019", "Server"], correctIndex: 1 },
        { id: "s2-func-2", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CHARINDEX('Server', 'SQL Server 2019');", options: ["1", "4", "5", "0"], correctIndex: 2 },
        { id: "s2-func-3", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CAST(10.12345 AS DECIMAL(10,2));", options: ["10.12", "10.13", "10.123", "10"], correctIndex: 0 },
        { id: "s2-func-4", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT ROUND(1234.5678, -2);", options: ["1200", "1230", "1300", "1240"], correctIndex: 0 },
        { id: "s2-func-5", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT YEAR('2022-10-20');", options: ["2020", "2021", "2022", "2023"], correctIndex: 2 },
        { id: "s2-func-6", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT LEN('SQL Server 2019');", options: ["12", "14", "15", "16"], correctIndex: 2 },
        { id: "s2-type-1", type: "short", prompt: "DECIMAL과 FLOAT의 차이를 간단히 설명하세요.", acceptableAnswers: ["DECIMAL은 고정 정밀도 FLOAT는 부동 소수점", "DECIMAL은 정확한 자릿수 관리, FLOAT는 근사값 가능"] },
        { id: "s2-type-2", type: "short", prompt: "VARCHAR와 NVARCHAR의 차이를 간단히 설명하세요.", acceptableAnswers: ["NVARCHAR는 유니코드", "한글 등 유니코드 저장은 NVARCHAR"] },
        { id: "s2-type-3", type: "short", prompt: "CHAR(5)의 특징을 간단히 설명하세요.", acceptableAnswers: ["고정길이 문자형", "항상 5글자 공간 사용"] },
        { id: "s2-type-4", type: "short", prompt: "VARCHAR(5)의 특징을 간단히 설명하세요.", acceptableAnswers: ["가변길이 문자형", "최대 5글자까지 저장"] },
        { id: "s2-type-5", type: "short", prompt: "NCHAR(5)가 적합한 사용 예를 한 가지 설명하세요.", acceptableAnswers: ["한글 이름 저장", "유니코드 고정길이 데이터"] },
        { id: "s2-type-6", type: "short", prompt: "DATE와 DATETIME의 차이를 간단히 설명하세요.", acceptableAnswers: ["DATE는 날짜만, DATETIME은 날짜와 시간", "시간 포함 여부 차이"] },
        { id: "s2-field-1", type: "code-fill", prompt: "주문 금액을 저장할 orderTbl을 생성하세요.\namount는 전체 8자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE orderTbl (\n  orderID INT,\n  amount ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(8,2)" }] },
        { id: "s2-field-2", type: "code-fill", prompt: "세금 비율을 저장할 taxTbl을 생성하세요.\nrate는 전체 4자리 중 소수 3자리까지 저장합니다.", language: "sql", code: "CREATE TABLE taxTbl (\n  taxName NCHAR(10),\n  rate ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(4,3)" }] },
        { id: "s2-field-3", type: "code-fill", prompt: "평점 정보를 저장할 ratingTbl을 생성하세요.\nrating은 전체 3자리 중 소수 1자리까지 저장합니다.", language: "sql", code: "CREATE TABLE ratingTbl (\n  itemID INT,\n  rating ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(3,1)" }] },
        { id: "s2-join-1", type: "mcq", prompt: "다음 쿼리는 어떤 결과를 의도한 것인가?\n\nSELECT DISTINCT U.userID, U.name\nFROM userTbl U\nINNER JOIN buyTbl B\nON U.userID = B.userID;", options: ["구매 이력이 없는 사용자 목록", "구매 이력이 있는 사용자 목록", "모든 사용자 목록", "제품별 사용자 목록(중복 포함)"], correctIndex: 1 },
        { id: "s2-join-2", type: "mcq", prompt: "RIGHT OUTER JOIN에 대한 설명으로 옳은 것은?", options: ["왼쪽 테이블의 모든 행이 유지된다", "오른쪽 테이블의 모든 행이 유지된다", "조인 조건이 맞는 행만 나온다", "항상 교차 조인과 동일하다"], correctIndex: 1 },
        { id: "s2-join-3", type: "mcq", prompt: "userTbl U LEFT OUTER JOIN buyTbl B 결과에서 B의 컬럼이 NULL로 나오는 경우는 언제인가?", options: ["사용자가 여러 번 구매했을 때", "사용자 정보가 중복일 때", "해당 사용자의 구매 이력이 없을 때", "groupName이 NULL일 때만"], correctIndex: 2 },
        { id: "s2-join-4", type: "mcq", prompt: "다음 중 INNER JOIN과 OUTER JOIN의 핵심 차이를 가장 정확히 설명한 것은?", options: ["INNER JOIN은 조건 불일치 행도 모두 포함한다", "OUTER JOIN은 조건 일치 행만 포함한다", "INNER JOIN은 조건 일치 행만, OUTER JOIN은 불일치 행도 포함한다", "두 조인은 항상 동일한 결과를 낸다"], correctIndex: 2 }
    ]
};

if (typeof window !== 'undefined') window.set2 = set2;
