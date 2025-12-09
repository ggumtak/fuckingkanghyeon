/**
 * Database Midterm Quiz - Set 19
 * File: quizzes/database/data/set19.js
 * 종합 문제 (INSERT, UPDATE, DELETE, 함수, 데이터타입, JOIN)
 */
const set19 = {
    setId: "set-19",
    questions: [
        {
            id: "q1",
            type: "essay",
            prompt: "다음 userTbl 테이블에 새로운 회원 정보를 입력하는 INSERT 구문을 작성하세요.\n\n**입력 데이터:**\n- 아이디: 'ABC'\n- 이름: '홍길동'\n- 생년: 1990\n- 지역: '서울'\n- 국번: '011'\n- 전화번호: '1111111'\n- 키: 175\n- 가입일: '2020-01-01'",
            rubric: [
                "INSERT INTO userTbl 구문을 사용해야 합니다.",
                "VALUES 절에 올바른 순서와 데이터 타입(문자열 따옴표 등)으로 값을 나열해야 합니다.",
                "예시: INSERT INTO userTbl VALUES ('ABC', '홍길동', 1990, '서울', '011', '1111111', 175, '2020-01-01');"
            ],
            maxLength: 200,
            explanation: "INSERT INTO 테이블명 VALUES (...) 형식을 사용하여 모든 컬럼에 값을 순서대로 입력합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "q2",
            type: "essay",
            prompt: "buyTbl 테이블에 아이디(userID), 물품명(prodName), 단가(price) 컬럼만 지정하여 데이터를 입력하는 구문을 작성하세요. (나머지 컬럼은 생략하거나 DEFAULT/NULL 처리됨)\n\n**입력 데이터:**\n- 아이디: 'KBS'\n- 물품명: '운동화'\n- 단가: 30",
            rubric: [
                "INSERT INTO buyTbl (열이름1, 열이름2, ...) 형식을 사용해야 합니다.",
                "VALUES 절에 지정한 열의 순서대로 값을 입력해야 합니다.",
                "예시: INSERT INTO buyTbl (userID, prodName, price) VALUES ('KBS', '운동화', 30);"
            ],
            maxLength: 200,
            explanation: "특정 열에만 값을 입력할 때는 테이블명 뒤에 (열이름 목록)을 명시해야 합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "INSERT" }
        },
        {
            id: "q3",
            type: "essay",
            prompt: "userTbl에서 이름이 '바비킴'인 회원의 지역(addr)을 '부산'으로 변경하는 UPDATE 구문을 작성하세요.",
            rubric: [
                "UPDATE 테이블명 SET 열이름=변경값 WHERE 조건식 형식을 사용해야 합니다.",
                "조건식에 name = '바비킴'을 정확히 명시해야 합니다.",
                "예시: UPDATE userTbl SET addr = '부산' WHERE name = '바비킴';"
            ],
            maxLength: 200,
            explanation: "특정 행의 값을 수정하기 위해 WHERE 절을 사용하여 조건을 지정하고 SET 절로 값을 변경합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "q4",
            type: "essay",
            prompt: "buyTbl의 모든 제품의 단가(price)를 1.5배 인상하는 UPDATE 구문을 작성하세요.",
            rubric: [
                "UPDATE buyTbl SET price = price * 1.5 형식을 사용해야 합니다.",
                "WHERE 절 없이 사용하면 모든 행에 적용됨을 이해해야 합니다.",
                "예시: UPDATE buyTbl SET price = price * 1.5;"
            ],
            maxLength: 200,
            explanation: "WHERE 절을 생략하면 테이블의 모든 행에 변경 사항이 적용됩니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "UPDATE" }
        },
        {
            id: "q5",
            type: "essay",
            prompt: "userTbl에서 아이디(userID)가 'BBK'인 회원을 삭제하는 DELETE 구문을 작성하세요.",
            rubric: [
                "DELETE FROM 테이블명 WHERE 조건식 형식을 사용해야 합니다.",
                "조건식에 userID = 'BBK'를 명시해야 합니다.",
                "예시: DELETE FROM userTbl WHERE userID = 'BBK';"
            ],
            maxLength: 200,
            explanation: "특정 행을 삭제하기 위해 DELETE 구문과 함께 WHERE 절을 사용하여 조건을 지정합니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "q6",
            type: "essay",
            prompt: "buyTbl에서 물품명(prodName)이 '운동화'인 모든 구매 내역을 삭제하는 구문을 작성하세요.",
            rubric: [
                "DELETE FROM buyTbl WHERE prodName = '운동화' 형식을 사용해야 합니다.",
                "문자열 조건 값에 따옴표를 사용해야 합니다."
            ],
            maxLength: 200,
            explanation: "조건을 만족하는 여러 행을 한 번에 삭제할 수 있습니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DELETE" }
        },
        {
            id: "q7",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n`SELECT LEN('SQL Server 2019');`",
            acceptableAnswers: ["15"],
            explanation: "LEN 함수는 문자열의 길이(문자 개수)를 반환합니다. 공백을 포함하여 총 15글자입니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "q8",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n`SELECT ABS(-100);`",
            acceptableAnswers: ["100"],
            explanation: "ABS 함수는 숫자의 절대값을 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "q9",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n`SELECT ROUND(1234.5678, 2);`",
            acceptableAnswers: ["1234.57"],
            explanation: "ROUND(값, 2)는 소수점 셋째 자리에서 반올림하여 소수점 둘째 자리까지 표현합니다.",
            meta: { difficulty: "medium", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "q10",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n`SELECT LEFT('SQL Server 2019', 3);`",
            acceptableAnswers: ["SQL"],
            explanation: "LEFT 함수는 문자열의 왼쪽에서 지정한 개수만큼 문자를 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "q11",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n`SELECT LOWER('abcdEFGH');`",
            acceptableAnswers: ["abcdefgh"],
            explanation: "LOWER 함수는 대문자를 소문자로 변환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "q12",
            type: "short",
            prompt: "다음 SQL 함수의 실행 결과를 예측하여 적으시오.\n\n`SELECT REVERSE('SQL');`",
            acceptableAnswers: ["LQS"],
            explanation: "REVERSE 함수는 문자열의 순서를 거꾸로 뒤집어 반환합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "Function" }
        },
        {
            id: "q13",
            type: "essay",
            prompt: "SQL Server의 데이터 타입 중 `CHAR`와 `VARCHAR`의 차이점을 서술하시오.",
            rubric: [
                "CHAR는 고정 길이 문자열이고 VARCHAR는 가변 길이 문자열임을 언급해야 합니다.",
                "CHAR는 남는 공간을 공백으로 채우고, VARCHAR는 실제 데이터 길이만큼만 저장함을 설명해야 합니다."
            ],
            maxLength: 300,
            explanation: "CHAR는 고정 길이로 공간 낭비가 발생할 수 있지만 성능이 빠를 수 있고, VARCHAR는 가변 길이로 공간을 효율적으로 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "q14",
            type: "essay",
            prompt: "데이터 타입 중 `NCHAR` 또는 `NVARCHAR`에서 앞의 'N'이 의미하는 바와, 이를 사용하는 이유를 서술하시오.",
            rubric: [
                "N은 Unicode(유니코드)를 의미함을 언급해야 합니다.",
                "다국어(한글 등)를 호환성 문제 없이 저장하기 위해 사용함을 설명해야 합니다."
            ],
            maxLength: 300,
            explanation: "NCHAR/NVARCHAR는 유니코드 문자열을 저장하며, 문자당 2바이트를 사용하여 다국어를 지원합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "q15",
            type: "essay",
            prompt: "숫자 데이터 타입 중 `INT`와 `BIGINT`의 주요 차이점을 서술하시오.",
            rubric: [
                "저장할 수 있는 숫자의 범위(크기)가 다름을 언급해야 합니다.",
                "INT는 4바이트 정수, BIGINT는 8바이트 정수로 더 큰 값을 저장할 수 있습니다."
            ],
            maxLength: 300,
            explanation: "INT는 일반적인 정수 범위를, BIGINT는 아주 큰 정수 값을 저장할 때 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "q16",
            type: "essay",
            prompt: "`DECIMAL` 데이터 타입의 특징을 `FLOAT`과 비교하여 서술하시오.",
            rubric: [
                "DECIMAL은 고정 정밀도(정확한 수치)를 저장하고, FLOAT는 부동 소수점(근사치)을 저장함을 언급해야 합니다.",
                "금융 계산 등 정확성이 필요한 경우 DECIMAL을 사용함을 설명해야 합니다."
            ],
            maxLength: 300,
            explanation: "DECIMAL은 전체 자릿수와 소수점 자릿수를 고정하여 정확한 값을 저장합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "q17",
            type: "essay",
            prompt: "날짜 및 시간 데이터 타입 중 `DATE`와 `DATETIME`의 차이를 서술하시오.",
            rubric: [
                "DATE는 날짜(연-월-일)만 저장하고, DATETIME은 날짜와 시간(시:분:초)을 모두 저장함을 언급해야 합니다."
            ],
            maxLength: 300,
            explanation: "DATE는 시간 정보 없이 날짜만 필요할 때 사용하고, DATETIME은 시각 정보까지 필요할 때 사용합니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "q18",
            type: "essay",
            prompt: "`BIT` 데이터 타입에 대해 설명하시오.",
            rubric: [
                "0 또는 1 (또는 NULL)의 값만 가질 수 있음을 언급해야 합니다.",
                "참/거짓(Boolean)과 같은 논리형 데이터를 저장할 때 주로 사용됨을 설명해야 합니다."
            ],
            maxLength: 300,
            explanation: "BIT는 0, 1만을 저장하는 가장 작은 정수형 데이터 타입입니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "DataType" }
        },
        {
            id: "q19",
            type: "short",
            prompt: "다음 요구사항에 맞는 데이터 타입 정의를 SQL 구문 형식으로 작성하시오.\n\n**조건:** 최대 50글자의 가변 길이 문자열 (영문/한글 무관하게 저장 가능하도록 유니코드 사용)",
            acceptableAnswers: ["NVARCHAR(50)"],
            explanation: "가변 길이는 VARCHAR, 유니코드는 N 접두사가 필요하므로 NVARCHAR(50)입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "q20",
            type: "short",
            prompt: "다음 요구사항에 맞는 데이터 타입 정의를 SQL 구문 형식으로 작성하시오.\n\n**조건:** 고정 길이 3글자의 유니코드 문자열 (예: 국가 코드)",
            acceptableAnswers: ["NCHAR(3)"],
            explanation: "고정 길이는 CHAR, 유니코드는 N 접두사가 필요하므로 NCHAR(3)입니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "q21",
            type: "short",
            prompt: "다음 요구사항에 맞는 데이터 타입 정의를 SQL 구문 형식으로 작성하시오.\n\n**조건:** 전체 10자리 숫자 중 소수점 이하 2자리를 가지는 숫자 (예: 12345678.90)",
            acceptableAnswers: ["DECIMAL(10,2)", "NUMERIC(10,2)"],
            explanation: "고정 정밀도 숫자는 DECIMAL(전체자릿수, 소수자릿수)를 사용합니다.",
            meta: { difficulty: "medium", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "q22",
            type: "short",
            prompt: "다음 요구사항에 맞는 데이터 타입 정의를 SQL 구문 형식으로 작성하시오.\n\n**조건:** 시간 정보 없이 '2025-12-25'와 같이 날짜만 저장",
            acceptableAnswers: ["DATE"],
            explanation: "날짜만 저장하는 타입은 DATE입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "q23",
            type: "short",
            prompt: "다음 요구사항에 맞는 데이터 타입 정의를 SQL 구문 형식으로 작성하시오.\n\n**조건:** -21억 ~ +21억 범위의 일반적인 정수",
            acceptableAnswers: ["INT", "INTEGER"],
            explanation: "표준적인 정수형은 INT입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "q24",
            type: "short",
            prompt: "다음 요구사항에 맞는 데이터 타입 정의를 SQL 구문 형식으로 작성하시오.\n\n**조건:** 참(1) 또는 거짓(0)의 상태 값 저장",
            acceptableAnswers: ["BIT"],
            explanation: "0 또는 1을 저장하는 타입은 BIT입니다.",
            meta: { difficulty: "easy", skillTag: "[코드작성]", topic: "DataType" }
        },
        {
            id: "q25",
            type: "short",
            prompt: "userTbl(회원 테이블)과 buyTbl(구매 테이블)을 **INNER JOIN** 했을 때, 조인 조건(`ON`)으로 사용하기에 가장 적절한 공통 컬럼의 이름은 무엇인가요? (영문 컬럼명 작성)",
            acceptableAnswers: ["userID"],
            explanation: "두 테이블은 userID(아이디)를 통해 PK-FK 관계를 맺고 있습니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "q26",
            type: "short",
            prompt: "userTbl(10행)과 buyTbl(12행)을 **CROSS JOIN** (상호 조인) 했을 때 결과 집합의 총 행(row) 개수는 몇 개입니까?",
            acceptableAnswers: ["120"],
            explanation: "CROSS JOIN은 두 테이블 행의 개수를 곱한 만큼(10 * 12 = 120)의 결과를 생성합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "JOIN" }
        },
        {
            id: "q27",
            type: "short",
            prompt: "`SELECT * FROM buyTbl`을 실행했을 때 조회되는 행의 개수는 몇 개입니까? (OCR 이미지 데이터 기준)",
            acceptableAnswers: ["12", "12개"],
            explanation: "이미지 상의 buyTbl에는 num 1부터 12까지 총 12개의 데이터 행이 존재합니다.",
            meta: { difficulty: "easy", skillTag: "[결과예측]", topic: "SELECT" }
        },
        {
            id: "q28",
            type: "essay",
            prompt: "userTbl과 buyTbl을 조인할 때, **LEFT OUTER JOIN**을 사용하고 `buyTbl.prodName IS NULL` 조건을 WHERE 절에 주었을 때 얻을 수 있는 결과의 의미를 서술하시오.",
            rubric: [
                "구매 이력이 없는 회원을 조회하는 것임을 설명해야 합니다.",
                "LEFT JOIN으로 모든 회원을 가져오고, NULL 체크로 구매 테이블에 매칭되지 않는(구매하지 않은) 회원을 필터링한다는 논리가 포함되어야 합니다."
            ],
            maxLength: 300,
            explanation: "전체 회원 중 구매 테이블에 정보가 없는(한 번도 구매하지 않은) 회원의 목록을 추출합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "q29",
            type: "essay",
            prompt: "다음 쿼리의 결과에 대해 설명하시오.\n\n```sql\nSELECT DISTINCT U.userid\nFROM userTbl U \nINNER JOIN buyTbl B ON U.userid = B.userid;\n```",
            rubric: [
                "INNER JOIN으로 구매 기록이 있는 회원만 선택됨을 언급해야 합니다.",
                "DISTINCT로 중복을 제거하여, '물건을 한 번이라도 구매한 적이 있는 회원들의 아이디 목록'을 조회함을 설명해야 합니다."
            ],
            maxLength: 300,
            explanation: "INNER JOIN은 교집합이므로 구매 내역이 있는 행만 조인되고, DISTINCT는 중복된 아이디를 제거합니다.",
            meta: { difficulty: "medium", skillTag: "[개념응용]", topic: "JOIN" }
        },
        {
            id: "q30",
            type: "short",
            prompt: "userTbl(회원)과 buyTbl(구매)을 INNER JOIN 하면, 회원가입은 되어있지만 물건을 한 번도 구매하지 않은 회원의 정보는 결과에 포함됩니까? (O / X 로 답하시오)",
            acceptableAnswers: ["X", "아니오", "NO"],
            explanation: "INNER JOIN은 조인 조건이 만족되는(양쪽 테이블에 모두 존재하는) 행만 출력하므로 구매 기록이 없는 회원은 제외됩니다.",
            meta: { difficulty: "easy", skillTag: "[개념응용]", topic: "JOIN" }
        }
    ]
};

if (typeof window !== 'undefined') window.set19 = set19;
