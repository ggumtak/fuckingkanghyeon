// File: quizzes/database/data/set23.js
// SQL Server Data Types - 데이터 타입 설명 문제 (30문항)
const set23 = {
    setId: "set-23",
    questions: [
        { id: "q1", type: "essay", prompt: "SQL Server의 'BIT' 데이터 형식에 대해 설명하세요.", rubric: ["0 또는 1", "참/거짓", "정수 데이터"], maxLength: 300 },
        { id: "q2", type: "essay", prompt: "SQL Server의 'INT' 데이터 형식에 대해 설명하세요.", rubric: ["정수", "표준 정수형", "4바이트"], maxLength: 300 },
        { id: "q3", type: "essay", prompt: "SQL Server의 'SMALLINT' 데이터 형식에 대해 설명하세요.", rubric: ["작은 정수", "INT보다 작은 범위", "2바이트"], maxLength: 300 },
        { id: "q4", type: "essay", prompt: "SQL Server의 'TINYINT' 데이터 형식에 대해 설명하세요.", rubric: ["매우 작은 정수", "0~255", "1바이트"], maxLength: 300 },
        { id: "q5", type: "essay", prompt: "SQL Server의 'BIGINT' 데이터 형식에 대해 설명하세요.", rubric: ["큰 정수", "대용량 데이터", "8바이트"], maxLength: 300 },
        { id: "q6", type: "essay", prompt: "SQL Server의 'DECIMAL' 데이터 형식에 대해 설명하세요.", rubric: ["고정 정밀도", "배율 지정", "정확한 수치 저장"], maxLength: 300 },
        { id: "q7", type: "essay", prompt: "SQL Server의 'NUMERIC' 데이터 형식에 대해 설명하세요.", rubric: ["DECIMAL과 동일", "고정 정밀도", "숫자 데이터"], maxLength: 300 },
        { id: "q8", type: "essay", prompt: "SQL Server의 'FLOAT' 데이터 형식에 대해 설명하세요.", rubric: ["부동 소수점", "근사치 저장", "과학적 계산"], maxLength: 300 },
        { id: "q9", type: "essay", prompt: "SQL Server의 'REAL' 데이터 형식에 대해 설명하세요.", rubric: ["부동 소수점", "FLOAT보다 낮은 정밀도", "4바이트"], maxLength: 300 },
        { id: "q10", type: "essay", prompt: "SQL Server의 'MONEY' 데이터 형식에 대해 설명하세요.", rubric: ["화폐 단위", "돈 저장", "소수점 4자리"], maxLength: 300 },
        { id: "q11", type: "essay", prompt: "SQL Server의 'SMALLMONEY' 데이터 형식에 대해 설명하세요.", rubric: ["작은 화폐 단위", "MONEY보다 작은 범위", "4바이트"], maxLength: 300 },
        { id: "q12", type: "essay", prompt: "SQL Server의 'CHAR' 데이터 형식에 대해 설명하세요.", rubric: ["고정 길이", "문자열", "최대 8000자"], maxLength: 300 },
        { id: "q13", type: "essay", prompt: "SQL Server의 'VARCHAR' 데이터 형식에 대해 설명하세요.", rubric: ["가변 길이", "문자열", "메모리 효율"], maxLength: 300 },
        { id: "q14", type: "essay", prompt: "SQL Server의 'NCHAR' 데이터 형식에 대해 설명하세요.", rubric: ["유니코드", "고정 길이", "다국어 지원"], maxLength: 300 },
        { id: "q15", type: "essay", prompt: "SQL Server의 'NVARCHAR' 데이터 형식에 대해 설명하세요.", rubric: ["유니코드", "가변 길이", "다국어 지원"], maxLength: 300 },
        { id: "q16", type: "essay", prompt: "SQL Server의 'TEXT' 데이터 형식에 대해 설명하세요.", rubric: ["대용량 텍스트", "이전 버전 호환용", "VARCHAR(MAX) 권장"], maxLength: 300 },
        { id: "q17", type: "essay", prompt: "SQL Server의 'NTEXT' 데이터 형식에 대해 설명하세요.", rubric: ["대용량 유니코드 텍스트", "이전 버전 호환용", "NVARCHAR(MAX) 권장"], maxLength: 300 },
        { id: "q18", type: "essay", prompt: "SQL Server의 'BINARY' 데이터 형식에 대해 설명하세요.", rubric: ["이진 데이터", "고정 길이", "바이트 스트림"], maxLength: 300 },
        { id: "q19", type: "essay", prompt: "SQL Server의 'VARBINARY' 데이터 형식에 대해 설명하세요.", rubric: ["이진 데이터", "가변 길이", "바이트 스트림"], maxLength: 300 },
        { id: "q20", type: "essay", prompt: "SQL Server의 'IMAGE' 데이터 형식에 대해 설명하세요.", rubric: ["대용량 이미지 데이터", "이진 데이터", "VARBINARY(MAX) 권장"], maxLength: 300 },
        { id: "q21", type: "essay", prompt: "SQL Server의 'DATETIME' 데이터 형식에 대해 설명하세요.", rubric: ["날짜와 시간", "YYYY-MM-DD hh:mm:ss", "3.33ms 정밀도"], maxLength: 300 },
        { id: "q22", type: "essay", prompt: "SQL Server의 'DATETIME2' 데이터 형식에 대해 설명하세요.", rubric: ["확장된 날짜와 시간", "높은 정밀도", "100ns 단위"], maxLength: 300 },
        { id: "q23", type: "essay", prompt: "SQL Server의 'DATE' 데이터 형식에 대해 설명하세요.", rubric: ["날짜만 저장", "YYYY-MM-DD", "시간 정보 없음"], maxLength: 300 },
        { id: "q24", type: "essay", prompt: "SQL Server의 'TIME' 데이터 형식에 대해 설명하세요.", rubric: ["시간만 저장", "hh:mm:ss", "100ns 정밀도"], maxLength: 300 },
        { id: "q25", type: "essay", prompt: "SQL Server의 'DATETIMEOFFSET' 데이터 형식에 대해 설명하세요.", rubric: ["표준 시간대 포함", "UTC 오프셋", "글로벌 서비스"], maxLength: 300 },
        { id: "q26", type: "essay", prompt: "SQL Server의 'SMALLDATETIME' 데이터 형식에 대해 설명하세요.", rubric: ["작은 범위의 날짜 시간", "분 단위 정밀도", "초 단위 생략"], maxLength: 300 },
        { id: "q27", type: "essay", prompt: "SQL Server의 'ROWVERSION' 데이터 형식에 대해 설명하세요.", rubric: ["자동 생성", "고유 이진 숫자", "버전 관리"], maxLength: 300 },
        { id: "q28", type: "essay", prompt: "SQL Server의 'SYSNAME' 데이터 형식에 대해 설명하세요.", rubric: ["시스템 개체 이름", "NVARCHAR(128)과 동일", "식별자 저장"], maxLength: 300 },
        { id: "q29", type: "essay", prompt: "SQL Server의 'UNIQUEIDENTIFIER' 데이터 형식에 대해 설명하세요.", rubric: ["GUID", "전역 고유 식별자", "16바이트"], maxLength: 300 },
        { id: "q30", type: "essay", prompt: "SQL Server의 'XML' 데이터 형식에 대해 설명하세요.", rubric: ["XML 데이터 저장", "태그 구조", "계층적 데이터"], maxLength: 300 }
    ]
};
