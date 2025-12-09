// File: quizzes/database/data/set19.js
const set19 = {
    setId: "set-19",
    questions: [
        { "id": "1-1", "type": "code-fill", "prompt": "다음은 buyTbl에 새로운 구매 기록을 추가하는 구문입니다. (아이디: 'SSK', 제품: '책', 수량: 10)", "language": "sql", "code": "INSERT INTO buyTbl VALUES (NULL, 'SSK', '책', '서적', 15, ( 1 ));", "blanks": [{ "index": 1, "answer": "10" }] },
        { "id": "1-2", "type": "mcq", "prompt": "INSERT문에서 값을 입력할 때, 문자열과 날짜 데이터는 어떤 기호로 감싸야 합니까?", "options": ["큰따옴표(\")", "작은따옴표(')", "대괄호([])", "백틱(`)"], "correctIndex": 1 },
        { "id": "1-3", "type": "short", "prompt": "다른 테이블의 데이터를 조회하여 한 번에 현재 테이블로 입력하는 구문은? (INSERT INTO ... ______ ...)", "acceptableAnswers": ["SELECT", "셀렉트"] },
        { "id": "1-4", "type": "essay", "prompt": "IDENTITY 속성이 설정된 'num' 열에 강제로 값을 입력하고 싶을 때 사용해야 하는 SET 옵션은 무엇인지 설명하세요.", "rubric": ["IDENTITY_INSERT", "ON 설정", "테이블명 명시"], "answer": "SET IDENTITY_INSERT 테이블명 ON을 사용해야 합니다. 이 설정을 켜면 IDENTITY 열에 직접 값을 입력할 수 있습니다. 예: SET IDENTITY_INSERT testTbl ON; INSERT 수행 후 다시 OFF로 변경해야 합니다.", "maxLength": 200 },
        { "id": "2-1", "type": "code-fill", "prompt": "userTbl에서 'BBK' 회원의 국번을 '010', 전화번호를 '1234567'로 동시에 변경하는 구문입니다.", "language": "sql", "code": "UPDATE userTbl SET mobile1 = '010' ( 1 ) mobile2 = '1234567' WHERE userID = 'BBK';", "blanks": [{ "index": 1, "answer": "," }] },
        { "id": "2-2", "type": "mcq", "prompt": "UPDATE 문 실행 전, 변경될 데이터를 미리 확인하기 위해 사용하는 가장 좋은 방법은?", "options": ["바로 실행 후 SELECT로 확인한다.", "해당 조건으로 SELECT 문을 먼저 실행해본다.", "DELETE 문을 먼저 실행해본다.", "테이블을 DROP 하고 다시 만든다."], "correctIndex": 1 },
        { "id": "2-3", "type": "short", "prompt": "UPDATE 구문에서 실제로 값을 변경하는 절(Clause)의 이름은 무엇입니까?", "acceptableAnswers": ["SET", "셋"] },
        { "id": "2-4", "type": "essay", "prompt": "실수로 WHERE 절 없이 UPDATE를 실행했을 때, 이를 되돌리기 위해 미리 걸어두었어야 하는 것은 무엇입니까?", "rubric": ["트랜잭션", "TRANSACTION", "BEGIN TRAN", "ROLLBACK 가능"], "answer": "트랜잭션(TRANSACTION)을 미리 시작해두어야 합니다. BEGIN TRAN(BEGIN TRANSACTION)으로 트랜잭션을 시작한 후 UPDATE를 실행하면, 실수가 발생했을 때 ROLLBACK으로 원래 상태로 되돌릴 수 있습니다.", "maxLength": 200 },
        { "id": "3-1", "type": "code-fill", "prompt": "테이블의 모든 행을 빠르게 삭제하고 공간을 해제하는 명령어입니다. (로그를 최소화함)", "language": "sql", "code": "( 1 ) TABLE userTbl;", "blanks": [{ "index": 1, "answer": "TRUNCATE" }] },
        { "id": "3-2", "type": "mcq", "prompt": "다음 중 userTbl에서 1980년 이후 출생자만 삭제하는 올바른 구문은?", "options": ["DELETE * FROM userTbl WHERE birthYear >= 1980", "DELETE FROM userTbl WHERE birthYear >= 1980", "DROP userTbl WHERE birthYear >= 1980", "REMOVE FROM userTbl WHERE birthYear >= 1980"], "correctIndex": 1 },
        { "id": "3-3", "type": "short", "prompt": "상위 5건의 데이터만 삭제하고 싶을 때 사용하는 키워드는? (DELETE ______ (5) ...)", "acceptableAnswers": ["TOP", "탑"] },
        { "id": "3-4", "type": "essay", "prompt": "DELETE와 TRUNCATE의 차이점을 'WHERE 절 사용 가능 여부'를 중심으로 설명하세요.", "rubric": ["DELETE는 WHERE 사용 가능", "TRUNCATE는 WHERE 사용 불가", "TRUNCATE는 전체 삭제만 가능"], "answer": "DELETE는 WHERE 절을 사용하여 특정 조건에 맞는 행만 선택적으로 삭제할 수 있습니다. 반면 TRUNCATE는 WHERE 절을 사용할 수 없으며 테이블의 모든 데이터를 전체 삭제할 때만 사용됩니다.", "maxLength": 200 },
        { "id": "4-1", "type": "code-fill", "prompt": "숫자 123.456을 소수점 둘째 자리에서 반올림하여 123.46을 만드는 함수입니다.", "language": "sql", "code": "SELECT ( 1 )(123.456, 2);", "blanks": [{ "index": 1, "answer": "ROUND" }] },
        { "id": "4-2", "type": "mcq", "prompt": "문자열 양쪽의 공백을 모두 제거하는 함수는?", "options": ["LTRIM", "RTRIM", "TRIM", "SUBSTRING"], "correctIndex": 2 },
        { "id": "4-3", "type": "short", "prompt": "입력값이 NULL이면 대체 값을 반환하는 함수는? (SQL Server 기준, IS...)", "acceptableAnswers": ["ISNULL", "이즈널"] },
        { "id": "4-4", "type": "essay", "prompt": "문자열 컬럼인 'name'에 MAX() 함수를 사용했을 때 어떤 결과가 나오는지 설명하세요.", "rubric": ["가나다 순으로 가장 뒤에 있는 값", "사전 순 마지막 값", "문자열 정렬 기준 최댓값"], "answer": "문자열에 MAX() 함수를 사용하면 사전순(알파벳 순 또는 가나다 순)으로 가장 뒤에 있는 값이 반환됩니다. 예를 들어 '임재범', '이승기', '조용필' 중에서는 '조용필'이 반환됩니다.", "maxLength": 200 },
        { "id": "5-1", "type": "code-fill", "prompt": "0~255 사이의 정수 데이터를 저장하기에 가장 효율적인 데이터 타입은?", "language": "sql", "code": "age ( 1 )", "blanks": [{ "index": 1, "answer": "TINYINT" }] },
        { "id": "5-2", "type": "mcq", "prompt": "날짜와 시간을 함께 저장하며, 3.33ms 단위의 정밀도를 가지는 데이터 타입은?", "options": ["DATE", "TIME", "DATETIME", "SMALLDATETIME"], "correctIndex": 2 },
        { "id": "5-3", "type": "short", "prompt": "참(1) 또는 거짓(0)을 저장하는 데 사용되는 1비트 데이터 타입은?", "acceptableAnswers": ["BIT", "비트"] },
        { "id": "5-4", "type": "essay", "prompt": "VARCHAR(MAX) 데이터 타입의 특징과 최대 저장 용량을 설명하세요.", "rubric": ["2GB까지 저장 가능", "대용량 텍스트", "TEXT 타입 대체"], "answer": "VARCHAR(MAX)는 최대 2GB(2,147,483,647바이트)까지 저장할 수 있는 대용량 가변 길이 문자열 타입입니다. 이전 버전의 TEXT 타입을 대체하며, 일반 문자열 함수들을 그대로 사용할 수 있어 더 편리합니다.", "maxLength": 200 },
        { "id": "6-1", "type": "code-fill", "prompt": "1부터 시작하여 1씩 자동으로 증가하는 컬럼을 정의하세요.", "language": "sql", "code": "num INT ( 1 )(1, 1) PRIMARY KEY", "blanks": [{ "index": 1, "answer": "IDENTITY" }] },
        { "id": "6-2", "type": "mcq", "prompt": "DECIMAL(5, 2) 타입에 '1234.5'를 입력하려고 하면 어떤 일이 발생하는가?", "options": ["정상 입력된다.", "123.45로 입력된다.", "오버플로우 오류가 발생한다.", "자동으로 DECIMAL(6,1)로 변환된다."], "correctIndex": 2 },
        { "id": "6-3", "type": "short", "prompt": "데이터 입력 시 특정 범위(예: 나이는 0 이상) 조건을 만족하는지 검사하는 제약 조건은?", "acceptableAnswers": ["CHECK", "체크"] },
        { "id": "6-4", "type": "essay", "prompt": "DECIMAL(p, s)에서 p(precision)와 s(scale)의 의미를 설명하세요.", "rubric": ["p는 전체 자릿수", "s는 소수점 이하 자릿수", "정수부는 p-s 자리"], "answer": "DECIMAL(p, s)에서 p는 정밀도(Precision)로 저장할 수 있는 전체 자릿수(소수점 앞뒤 포함)를 의미합니다. s는 배율(Scale)로 소수점 이하 자릿수를 의미합니다. 따라서 정수부는 p-s 자리까지 저장 가능합니다.", "maxLength": 200 },
        { "id": "7-1", "type": "code-fill", "prompt": "buyTbl을 기준으로 userTbl을 조인하되, 구매 내역이 있는 정보만 모두 출력하는 구문(오른쪽 테이블 기준)입니다.", "language": "sql", "code": "SELECT * FROM userTbl U ( 1 ) OUTER JOIN buyTbl B ON U.userID = B.userID;", "blanks": [{ "index": 1, "answer": "RIGHT" }] },
        { "id": "7-2", "type": "mcq", "prompt": "조인 조건을 지정하지 않아 두 테이블의 모든 가능한 조합(Cartesian Product)을 생성하는 조인 방식은?", "options": ["INNER JOIN", "CROSS JOIN", "OUTER JOIN", "SELF JOIN"], "correctIndex": 1 },
        { "id": "7-3", "type": "short", "prompt": "테이블 A, B, C 3개를 INNER JOIN 하려면 JOIN 구문이 최소 몇 번 나와야 합니까?", "acceptableAnswers": ["2", "2번", "two"] },
        { "id": "7-4", "type": "essay", "prompt": "FULL OUTER JOIN의 결과 집합에 대해 설명하세요.", "rubric": ["왼쪽, 오른쪽 테이블의 모든 행 포함", "매칭되지 않는 부분은 NULL", "합집합 개념"], "answer": "FULL OUTER JOIN은 두 테이블의 합집합 개념입니다. 왼쪽 테이블과 오른쪽 테이블의 모든 행이 결과에 포함되며, 매칭되지 않는 행은 상대 테이블의 컬럼 값이 NULL로 표시됩니다. LEFT JOIN과 RIGHT JOIN의 결과를 합친 것과 같습니다.", "maxLength": 200 }
    ]
};
