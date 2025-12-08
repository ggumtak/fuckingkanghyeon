/**
 * Database Midterm Quiz - Set 4
 */
const set4 = {
    setId: "set-4",
    questions: [
        { id: "s4-insert-1", type: "code-fill", prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: JHY, 성명: 전혜연, 출생년도: 1990, 지역: 서울, mobile1/2: 11-5555555, 키: 167, 가입일: 2016-09-09", language: "sql", code: "INSERT INTO userTbl (userID, name, birthYear, addr, mobile1, mobile2, height, mDate)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ), ( 6 ), ( 7 ), ( 8 ));", blanks: [{ index: 1, answer: "'JHY'" }, { index: 2, answer: "N'전혜연'" }, { index: 3, answer: "1990" }, { index: 4, answer: "N'서울'" }, { index: 5, answer: "'11'" }, { index: 6, answer: "'5555555'" }, { index: 7, answer: "167" }, { index: 8, answer: "'2016-09-09'" }] },
        { id: "s4-insert-2", type: "code-fill", prompt: "buyTbl에 다음 값을 삽입하세요:\nuserID: KBS, 제품명: 키보드, 분류: 전자, 가격: 70, 수량: 1", language: "sql", code: "INSERT INTO buyTbl (userID, prodName, groupName, price, amount)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ), ( 5 ));", blanks: [{ index: 1, answer: "'KBS'" }, { index: 2, answer: "N'키보드'" }, { index: 3, answer: "N'전자'" }, { index: 4, answer: "70" }, { index: 5, answer: "1" }] },
        { id: "s4-insert-3", type: "code-fill", prompt: "userTbl에 다음 값을 삽입하세요:\n아이디: CSJ, 성명: 최수정, 지역: 부산, 키: 170", language: "sql", code: "INSERT INTO userTbl (userID, name, addr, height)\nVALUES (( 1 ), ( 2 ), ( 3 ), ( 4 ));", blanks: [{ index: 1, answer: "'CSJ'" }, { index: 2, answer: "N'최수정'" }, { index: 3, answer: "N'부산'" }, { index: 4, answer: "170" }] },
        { id: "s4-update-1", type: "code-fill", prompt: "userTbl에서 birthYear가 1979인 사용자의 지역(addr)을 '대구'로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET addr = ( 1 )\nWHERE birthYear = ( 2 );", blanks: [{ index: 1, answer: "N'대구'" }, { index: 2, answer: "1979" }] },
        { id: "s4-update-2", type: "code-fill", prompt: "buyTbl에서 userID가 'JYP'인 전자 제품만 가격(price)을 50 인하하세요.", language: "sql", code: "UPDATE buyTbl\nSET price = price - ( 1 )\nWHERE userID = ( 2 ) AND groupName = ( 3 );", blanks: [{ index: 1, answer: "50" }, { index: 2, answer: "'JYP'" }, { index: 3, answer: "N'전자'" }] },
        { id: "s4-update-3", type: "code-fill", prompt: "userTbl에서 가입일(mDate)이 '2013-12-12'인 사용자의 키(height)를 188로 수정하세요.", language: "sql", code: "UPDATE userTbl\nSET height = ( 1 )\nWHERE mDate = ( 2 );", blanks: [{ index: 1, answer: "188" }, { index: 2, answer: "'2013-12-12'" }] },
        { id: "s4-delete-1", type: "code-fill", prompt: "buyTbl에서 amount가 5 이상인 레코드만 삭제하세요.", language: "sql", code: "DELETE FROM buyTbl\nWHERE amount >= ( 1 );", blanks: [{ index: 1, answer: "5" }] },
        { id: "s4-delete-2", type: "code-fill", prompt: "userTbl에서 addr이 '서울'이고 키(height)가 170 미만인 사용자만 삭제하세요.", language: "sql", code: "DELETE FROM userTbl\nWHERE addr = ( 1 ) AND height < ( 2 );", blanks: [{ index: 1, answer: "N'서울'" }, { index: 2, answer: "170" }] },
        { id: "s4-func-1", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT RIGHT(N'데이터베이스', 2);", options: ["데이", "이스", "베이", "이스?"], correctIndex: 1 },
        { id: "s4-func-2", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT ROUND(15.555, 2);", options: ["15.55", "15.56", "15.6", "16.00"], correctIndex: 1 },
        { id: "s4-func-3", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT CAST(12345 AS CHAR(3));", options: ["123", "12345", "오류 발생", "12"], correctIndex: 0 },
        { id: "s4-func-4", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT LEN(N'서울특별시');", options: ["3", "4", "5", "6"], correctIndex: 2 },
        { id: "s4-func-5", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT MONTH('2021-11-09');", options: ["9", "10", "11", "12"], correctIndex: 2 },
        { id: "s4-func-6", type: "mcq", prompt: "다음 쿼리의 결과는?\n\nSELECT DATEDIFF(day, '2025-01-01', '2025-01-11');", options: ["9", "10", "11", "12"], correctIndex: 1 },
        { id: "s4-type-1", type: "short", prompt: "CHAR와 NCHAR의 차이를 간단히 설명하세요.", acceptableAnswers: ["NCHAR는 유니코드", "CHAR는 비유니코드, NCHAR는 유니코드"] },
        { id: "s4-type-2", type: "short", prompt: "VARCHAR와 NCHAR 중 이름(한글)을 저장할 때 더 적절한 타입을 골라 이유를 설명하세요.", acceptableAnswers: ["NVARCHAR 또는 NCHAR가 유니코드라 적절", "유니코드 지원이 필요"] },
        { id: "s4-type-3", type: "short", prompt: "DECIMAL 타입을 사용하는 이유를 설명하세요.", acceptableAnswers: ["정확한 소수 처리", "고정 정밀도 숫자 저장"] },
        { id: "s4-type-4", type: "short", prompt: "INT와 DECIMAL의 용도 차이를 간단히 설명하세요.", acceptableAnswers: ["INT는 정수, DECIMAL은 소수 포함 정확한 값", "정수 vs 고정정밀도"] },
        { id: "s4-type-5", type: "short", prompt: "VARCHAR(20)의 의미를 설명하세요.", acceptableAnswers: ["최대 20자 가변길이 문자열", "최대 20글자 저장"] },
        { id: "s4-type-6", type: "short", prompt: "DATETIME과 TIMESTAMP(또는 DATE)의 차이를 한 문장으로 설명하세요.", acceptableAnswers: ["DATETIME은 날짜+시간, DATE는 날짜만", "시간 포함 여부 차이"] },
        { id: "s4-field-1", type: "code-fill", prompt: "이자율을 저장할 interestTbl을 생성하세요.\nrate는 전체 6자리 중 소수 4자리까지 저장합니다.", language: "sql", code: "CREATE TABLE interestTbl (\n  bankID INT,\n  rate ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(6,4)" }] },
        { id: "s4-field-2", type: "code-fill", prompt: "재고 수량과 단가를 계산할 costTbl을 생성하세요.\nunitCost는 전체 9자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE costTbl (\n  itemID INT,\n  unitCost ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(9,2)" }] },
        { id: "s4-field-3", type: "code-fill", prompt: "평균 점수를 저장할 avgTbl을 생성하세요.\navgScore는 전체 5자리 중 소수 2자리까지 저장합니다.", language: "sql", code: "CREATE TABLE avgTbl (\n  classID INT,\n  avgScore ( 1 )\n);", blanks: [{ index: 1, answer: "DECIMAL(5,2)" }] },
        { id: "s4-join-1", type: "mcq", prompt: "다음 설명 중 LEFT OUTER JOIN의 특징으로 옳은 것은?", options: ["왼쪽 테이블의 모든 행을 포함한다", "오른쪽 테이블의 모든 행을 포함한다", "조건이 맞는 행만 포함한다", "항상 중복이 제거된다"], correctIndex: 0 },
        { id: "s4-join-2", type: "mcq", prompt: "다음 쿼리 결과에 대한 설명으로 옳은 것은?\n\nSELECT U.userID, B.prodName\nFROM userTbl U\nINNER JOIN buyTbl B\nON U.userID = B.userID;", options: ["구매가 없는 사용자도 반드시 나온다", "구매가 있는 사용자와 구매 정보만 나온다", "userTbl만 단독 조회한 것과 같다", "buyTbl의 userID가 NULL인 행만 나온다"], correctIndex: 1 },
        { id: "s4-join-3", type: "mcq", prompt: "FULL OUTER JOIN의 결과에 대한 설명으로 옳은 것은?", options: ["두 테이블의 일치 행만 포함한다", "왼쪽 테이블 행만 모두 포함한다", "오른쪽 테이블 행만 모두 포함한다", "일치/불일치와 관계없이 양쪽 테이블 행을 모두 포함한다"], correctIndex: 3 },
        { id: "s4-join-4", type: "mcq", prompt: "다음 중 구매 이력이 없는 사용자를 찾는 가장 적절한 방법은?", options: ["INNER JOIN 후 WHERE B.userID IS NULL", "LEFT OUTER JOIN 후 WHERE B.userID IS NULL", "RIGHT OUTER JOIN 후 WHERE U.userID IS NULL", "CROSS JOIN 후 WHERE amount IS NULL"], correctIndex: 1 }
    ]
};

if (typeof window !== 'undefined') window.set4 = set4;
