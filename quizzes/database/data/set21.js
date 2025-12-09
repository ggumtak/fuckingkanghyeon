// File: quizzes/database/data/set21.js
const set21 = {
    setId: "set-21",
    questions: [
        { "id": "q1-1", "type": "short", "prompt": "[주제1] userTbl에 새로운 회원 '성동일(SDI)'을 추가할 때, VALUES 절에서 아이디 값을 어떻게 표기해야 합니까?", "acceptableAnswers": ["'SDI'", "SDI"] },
        { "id": "q1-2", "type": "short", "prompt": "[주제1] buyTbl에 아이디 'JYP'가 '기타'를 구매한 내역을 넣을 때, 한글 제품명을 어떻게 표기해야 합니까?", "acceptableAnswers": ["N'기타'", "N\"기타\""] },
        { "id": "q1-3", "type": "short", "prompt": "[주제1] INSERT 구문에서 현재 날짜를 입력하려면 어떤 함수를 사용합니까?", "acceptableAnswers": ["GETDATE()", "GETDATE", "getdate()", "getdate"] },
        { "id": "q1-4", "type": "short", "prompt": "[주제1] INSERT 구문에서 특정 컬럼만 값을 지정할 때, userID와 함께 지정해야 할 이름 컬럼명은?", "acceptableAnswers": ["name"] },
        { "id": "q2-1", "type": "short", "prompt": "[주제2] UPDATE 구문에서 WHERE 조건으로 특정 사용자를 지정할 때 사용하는 컬럼명은? (아이디 기준)", "acceptableAnswers": ["userID", "userid"] },
        { "id": "q2-2", "type": "short", "prompt": "[주제2] UPDATE 구문에서 한글 문자열 '서울'을 비교할 때 어떻게 표기해야 합니까?", "acceptableAnswers": ["N'서울'", "N\"서울\""] },
        { "id": "q2-3", "type": "short", "prompt": "[주제2] buyTbl에서 분류명을 '서적'에서 '도서'로 수정할 때, WHERE 절에서 사용하는 한글 표기는?", "acceptableAnswers": ["N'서적'", "N\"서적\""] },
        { "id": "q2-4", "type": "short", "prompt": "[주제2] UPDATE 구문에서 키(height)와 지역을 동시에 수정할 때, 지역을 저장하는 컬럼명은?", "acceptableAnswers": ["addr"] },
        { "id": "q3-1", "type": "short", "prompt": "[주제3] DELETE 구문에서 특정 컬럼이 NULL인 행을 찾을 때 사용하는 조건 표현은?", "acceptableAnswers": ["IS NULL", "is null"] },
        { "id": "q3-2", "type": "short", "prompt": "[주제3] DELETE 구문에서 두 조건을 모두 만족하는 행을 삭제할 때 사용하는 논리 연산자는?", "acceptableAnswers": ["AND", "and"] },
        { "id": "q3-3", "type": "short", "prompt": "[주제3] DELETE 구문에서 특정 범위(1970년~1979년) 안의 값을 조건으로 할 때 사용하는 키워드는?", "acceptableAnswers": ["BETWEEN", "between"] },
        { "id": "q3-4", "type": "short", "prompt": "[주제3] buyTbl에서 '운동화' 제품을 삭제할 때, WHERE 절에서 사용하는 한글 표기는?", "acceptableAnswers": ["N'운동화'", "N\"운동화\""] },
        { "id": "q4-1", "type": "short", "prompt": "[주제4] 다음 SQL문의 결과값을 숫자로 적으시오.\n\nSELECT LEN('MySQL');", "acceptableAnswers": ["5"] },
        { "id": "q4-2", "type": "mcq", "prompt": "[주제4] 다음 중 문자열의 공백을 제거하는 함수가 아닌 것은?", "options": ["LTRIM", "RTRIM", "TRIM", "SUBSTRING"], "correctIndex": 3 },
        { "id": "q4-3", "type": "short", "prompt": "[주제4] 반올림 함수 ROUND(123.4567, 2)의 실행 결과는?", "acceptableAnswers": ["123.46"] },
        { "id": "q4-4", "type": "mcq", "prompt": "[주제4] 날짜에 특정 기간을 더하는 함수는?", "options": ["DATEADD", "DATEDIFF", "GETDATE", "YEAR"], "correctIndex": 0 },
        { "id": "q5-1", "type": "short", "prompt": "[주제5] 날짜와 시각(시,분,초,밀리초)을 모두 저장할 수 있는 SQL Server의 데이터 타입은? (DATETIME 제외)", "acceptableAnswers": ["DATETIME2", "datetime2"] },
        { "id": "q5-2", "type": "essay", "prompt": "[주제5] CHAR(5)와 VARCHAR(5)에 똑같이 'ABC'를 저장했을 때, 내부 저장 방식의 차이를 설명하세요.", "rubric": ["CHAR는 5바이트 고정(공백채움)", "VARCHAR는 실제 데이터 길이만큼만 사용", "공간 효율 차이"], "answer": "CHAR(5)에 'ABC'를 저장하면 5바이트 고정 길이로 저장되며, 나머지 2바이트는 공백으로 채워집니다('ABC  '). 반면 VARCHAR(5)에 'ABC'를 저장하면 실제 데이터 길이인 3바이트만 사용하여 저장 공간이 절약됩니다.", "maxLength": 150 },
        { "id": "q5-3", "type": "mcq", "prompt": "[주제5] 0 또는 1의 값만 가질 수 있는 논리형 데이터 타입은?", "options": ["INT", "BIT", "TINYINT", "BINARY"], "correctIndex": 1 },
        { "id": "q5-4", "type": "short", "prompt": "[주제5] 유니코드 문자열을 저장하며, 가변 길이를 지원하는 데이터 타입은?", "acceptableAnswers": ["NVARCHAR", "nvarchar"] },
        { "id": "q6-1", "type": "short", "prompt": "[주제6] 총 4자리, 소수점 1자리(000.0) 형태의 실수를 저장하는 데이터 타입 선언은?", "acceptableAnswers": ["DECIMAL(4, 1)", "DECIMAL(4,1)", "decimal(4, 1)", "decimal(4,1)", "NUMERIC(4, 1)", "NUMERIC(4,1)"] },
        { "id": "q6-2", "type": "short", "prompt": "[주제6] 날짜만 저장하는(시간 제외) 데이터 타입은?", "acceptableAnswers": ["DATE", "date"] },
        { "id": "q6-3", "type": "short", "prompt": "[주제6] CHECK 제약조건에서 age가 0 이상이어야 할 때 사용하는 비교 연산자는?", "acceptableAnswers": [">=", "> ="] },
        { "id": "q6-4", "type": "short", "prompt": "[주제6] 최대 2GB 크기의 가변 길이 문자열을 저장하는 데이터 타입은?", "acceptableAnswers": ["VARCHAR(MAX)", "varchar(max)", "NVARCHAR(MAX)", "nvarchar(max)"] },
        { "id": "q7-1", "type": "mcq", "prompt": "[주제7] userTbl(10명)과 buyTbl(12건)을 LEFT OUTER JOIN 했습니다. 이때 생성되는 총 행(Row)의 개수는?\n(힌트: 구매 내역 12건 + 구매 안 한 회원 5명)", "options": ["10", "12", "17", "22"], "correctIndex": 2 },
        { "id": "q7-2", "type": "short", "prompt": "[주제7] 다음 쿼리의 실행 결과에서 출력되는 회원의 이름은 누구인가?\n\nSELECT U.name \nFROM userTbl U \nLEFT JOIN buyTbl B ON U.userID = B.userID \nWHERE B.prodName IS NULL AND U.addr = '경남';", "acceptableAnswers": ["윤종신"] },
        { "id": "q7-3", "type": "short", "prompt": "[주제7] 두 테이블을 JOIN할 때, 양쪽 테이블에 모두 데이터가 있는 경우만 출력하는 조인 방식은?", "acceptableAnswers": ["INNER", "inner", "INNER JOIN", "inner join"] },
        { "id": "q7-4", "type": "essay", "prompt": "[주제7] CROSS JOIN(상호 조인)을 수행했을 때 결과 행의 개수가 어떻게 계산되는지 설명하세요. (userTbl 10행, buyTbl 12행일 때 예시 포함)", "rubric": ["두 테이블 행의 곱", "10 * 12 = 120행", "모든 경우의 수 조합"], "answer": "CROSS JOIN은 두 테이블의 모든 가능한 조합(Cartesian Product)을 생성합니다. 결과 행의 개수는 두 테이블 행 개수의 곱으로 계산됩니다. userTbl(10행)과 buyTbl(12행)을 CROSS JOIN하면 10 × 12 = 120행이 생성됩니다.", "maxLength": 150 }
    ]
};
