// File: quizzes/database/data/set23.js
// SQL Server Data Types - 하이라이트된 데이터 타입만 (16문항)
const set23 = {
    setId: "set-23",
    questions: [
        // === 숫자형 (7개) ===
        { id: "q1", type: "essay", prompt: "SQL Server의 'BIT' 데이터 형식에 대해 설명하세요.", rubric: ["0 또는 1", "참/거짓", "Boolean형"], answer: "BIT는 1바이트의 저장 공간을 사용하며, 0 또는 1의 값만 저장할 수 있는 정수 데이터 타입입니다. Boolean형으로 참(True)/거짓(False) 상태를 나타내는 논리적 데이터를 저장하는 데 사용됩니다.", maxLength: 300 },
        { id: "q2", type: "essay", prompt: "SQL Server의 'INT' 데이터 형식에 대해 설명하세요.", rubric: ["정수", "4바이트", "약 -21억~+21억"], answer: "INT는 4바이트의 저장 공간을 사용하는 표준 정수형 데이터 타입입니다. 약 -21억(-2,147,483,648)부터 +21억(2,147,483,647)까지의 정수를 저장할 수 있으며, SQL Server에서 가장 널리 사용됩니다.", maxLength: 300 },
        { id: "q3", type: "essay", prompt: "SQL Server의 'SMALLINT' 데이터 형식에 대해 설명하세요.", rubric: ["정수", "2바이트", "-32,768~32,767"], answer: "SMALLINT는 2바이트의 저장 공간을 사용하며, INT보다 작은 범위의 정수를 저장하는 데이터 타입입니다. -32,768부터 32,767까지의 정수를 저장할 수 있어, 저장 공간이 제한적일 때 사용합니다.", maxLength: 300 },
        { id: "q4", type: "essay", prompt: "SQL Server의 'TINYINT' 데이터 형식에 대해 설명하세요.", rubric: ["양의 정수", "1바이트", "0~255"], answer: "TINYINT는 1바이트의 저장 공간만 사용하며, 0부터 255까지의 양의 정수만 저장할 수 있는 데이터 타입입니다. 나이, 등급 등 작은 범위의 숫자를 저장할 때 효율적입니다.", maxLength: 300 },
        { id: "q5", type: "essay", prompt: "SQL Server의 'BIGINT' 데이터 형식에 대해 설명하세요.", rubric: ["정수", "8바이트", "-2^63 ~ +2^63-1"], answer: "BIGINT는 8바이트의 저장 공간을 사용하며, -2^63부터 +2^63-1까지(약 ±922경)의 매우 큰 정수를 저장할 수 있는 데이터 타입입니다. 유튜브 조회수, 대규모 일련번호 등에 사용됩니다.", maxLength: 300 },
        { id: "q6", type: "essay", prompt: "SQL Server의 'DECIMAL' 데이터 형식에 대해 설명하세요.", rubric: ["고정 정밀도(p)", "배율(s)", "5~17바이트"], answer: "DECIMAL은 5~17바이트의 저장 공간을 사용하며, 고정 정밀도(p)와 배율(s)을 가진 숫자형 데이터 타입입니다. DECIMAL(p, s) 형식으로 선언하며 p는 전체 자릿수, s는 소수점 이하 자릿수를 의미합니다. 금융 계산 등 정확한 수치가 필요할 때 사용합니다.", maxLength: 300 },
        { id: "q7", type: "essay", prompt: "SQL Server의 'FLOAT' 데이터 형식에 대해 설명하세요.", rubric: ["부동 소수점", "4~8바이트", "p값에 따라 크기 변동"], answer: "FLOAT는 부동 소수점 방식으로 근사치 숫자를 저장하는 데이터 타입입니다. p가 25미만이면 4바이트, 25이상이면 8바이트의 크기를 할당합니다. 매우 크거나 작은 수를 표현할 수 있어 과학적 계산에 적합하지만, 근사값이므로 정확한 금융 계산에는 부적합합니다.", maxLength: 300 },

        // === 문자형 (4개) ===
        { id: "q8", type: "essay", prompt: "SQL Server의 'CHAR' 데이터 형식에 대해 설명하세요.", rubric: ["고정길이", "0~8000바이트", "공백 채움"], answer: "CHAR는 0~8000바이트 크기의 고정 길이 문자열 데이터 타입입니다. 지정된 길이보다 짧은 문자열이 입력되면 나머지를 공백으로 채웁니다. 최대 8000자까지 저장 가능하며, 항상 길이가 일정한 코드(우편번호 등)에 적합합니다.", maxLength: 300 },
        { id: "q9", type: "essay", prompt: "SQL Server의 'NCHAR' 데이터 형식에 대해 설명하세요.", rubric: ["유니코드", "고정길이", "최대 4000자"], answer: "NCHAR는 유니코드를 지원하는 고정 길이 문자열 타입입니다. 0~8000바이트(글자로는 0~4000자)를 저장할 수 있습니다. 한글, 일본어, 중국어 등 다국어 문자를 저장할 수 있으며, 문자당 2바이트를 사용합니다.", maxLength: 300 },
        { id: "q10", type: "essay", prompt: "SQL Server의 'VARCHAR' 데이터 형식에 대해 설명하세요.", rubric: ["가변길이", "최대 2GB", "SQL Server 2000에서는 0~8000"], answer: "VARCHAR는 가변 길이 문자열 데이터 타입입니다. 0~2^31-1바이트(2GB)까지 저장 가능하며, SQL Server 2000에서는 0~8000바이트였습니다. 실제 입력된 데이터의 길이만큼만 저장 공간을 사용하므로 메모리 효율적입니다.", maxLength: 300 },
        { id: "q11", type: "essay", prompt: "SQL Server의 'NVARCHAR' 데이터 형식에 대해 설명하세요.", rubric: ["유니코드", "가변길이", "다국어 지원"], answer: "NVARCHAR는 유니코드를 지원하는 가변 길이 문자열 타입입니다. 0~2^31-1바이트, 글자로는 0~2^30-1자까지 저장할 수 있습니다. 다국어 문자를 저장하면서 실제 데이터 길이만큼만 저장 공간을 사용하여 효율적입니다.", maxLength: 300 },

        // === 날짜/시간 (3개) ===
        { id: "q12", type: "essay", prompt: "SQL Server의 'DATETIME' 데이터 형식에 대해 설명하세요.", rubric: ["날짜와 시간", "1753-1-1 ~ 9999-12-31", "1/1000초 정밀도"], answer: "DATETIME은 8바이트를 사용하며, 1753-1-1부터 9999-12-31까지의 날짜와 시간을 함께 저장하는 타입입니다. 정확도는 1/1000초(3.33밀리초) 단위이며, 'YYYY-MM-DD 시:분:초' 형식으로 사용합니다.", maxLength: 300 },
        { id: "q13", type: "essay", prompt: "SQL Server의 'DATE' 데이터 형식에 대해 설명하세요.", rubric: ["날짜만 저장", "0001/1/1 ~ 9999/12/31", "YYYY-MM-DD"], answer: "DATE는 3바이트를 사용하며, 0001/1/1부터 9999/12/31까지의 날짜 정보만 저장하는 데이터 타입입니다. 시간 정보는 포함하지 않으며 'YYYY-MM-DD' 형식으로 사용합니다. 생년월일 등 시간이 필요 없는 경우 효율적입니다.", maxLength: 300 },
        { id: "q14", type: "essay", prompt: "SQL Server의 'TIME' 데이터 형식에 대해 설명하세요.", rubric: ["시간만 저장", "100나노초 정밀도", "표준 시간대 인식"], answer: "TIME은 5바이트를 사용하며, 00:00:00.0000000부터 23:59:59.9999999까지의 시간 정보만 저장합니다. 정확도는 100나노초 단위이며 '시:분:초' 형식으로 사용합니다. 표준 시간대를 인식하며 24시간제를 기준으로 합니다.", maxLength: 300 },

        // === 기타 (2개) ===
        { id: "q15", type: "essay", prompt: "SQL Server의 'XML' 데이터 형식에 대해 설명하세요.", rubric: ["XML 데이터 저장", "태그 구조", "계층적 데이터"], answer: "XML은 XML 형식의 데이터를 저장하기 위한 전용 데이터 타입입니다. 태그 기반의 계층적 구조를 가진 데이터를 저장하며, XQuery와 XPath를 사용하여 XML 내부 요소를 검색할 수 있습니다.", maxLength: 300 },
        { id: "q16", type: "essay", prompt: "SQL Server의 'GEOMETRY'와 'GEOGRAPHY' 데이터 형식에 대해 설명하세요.", rubric: ["공간 데이터", "선, 점, 다각형", "위치 정보"], answer: "GEOMETRY와 GEOGRAPHY는 공간 데이터 형식으로 선, 점 및 다각형 같은 공간 데이터 개체를 저장하고 조작할 수 있습니다. GEOMETRY는 평면 좌표계(2D)에서, GEOGRAPHY는 지구 타원체 좌표계를 사용하여 위도/경도 기반의 지리적 위치 정보를 저장합니다.", maxLength: 300 }
    ]
};
