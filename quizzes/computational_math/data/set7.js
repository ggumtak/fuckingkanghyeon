/**
 * 전산수학 Quiz - Set 7 (ch06-q10 ~ ch07-q03)
 * Pandas 정렬, 필터링, 결측치
 */
const set7 = {
    setId: "set-7",
    questions: [
        { id: "ch06-q10", type: "mcq", prompt: "인덱스를 기준으로 데이터를 정렬할 때 사용하는 함수는?", options: ["① values", "② sort_index", "③ sorted", "④ dtypes"], correctIndex: 1, explanation: "`sort_index()`는 인덱스 기준으로 정렬한다." },
        { id: "ch06-q11", type: "mcq", prompt: "특정 열의 값(value)을 기준으로 정렬할 때 사용하는 함수는?", options: ["① sort_index", "② head", "③ sort_values", "④ values"], correctIndex: 2, explanation: "`sort_values(by='열이름')`을 사용한다." },
        { id: "ch06-q12", type: "mcq", prompt: "다음 중 행을 슬라이싱하는 방법에 대한 설명으로 옳지 않은 것은?", options: ["① values[2:6] # 2~6행 (X → 2~5행)", "② values[:-1] # 마지막 행 제외", "③ values[::3] # 3칸씩 건너뛰기", "④ values[-1:] # 마지막 행만"], correctIndex: 0, explanation: "슬라이싱 `[start:end]`에서 end 인덱스는 포함되지 않는다." },
        { id: "ch06-q13", type: "short", prompt: "데이터프레임에서 인덱스의 이름(Label)을 이용해 데이터를 선택할 때 사용하는 속성(Indexer)은?", acceptableAnswers: ["loc"], explanation: "`loc`은 라벨 기반, `iloc`은 정수 위치 기반이다." },
        { id: "ch06-q14", type: "short", prompt: "특정 열의 값이 주어진 리스트 안에 포함되는지 여부를 True/False로 반환하여 필터링에 사용하는 함수는?", acceptableAnswers: ["isin"], explanation: "`df['col'].isin([val1, val2])` 형태로 사용한다." },
        { id: "ch06-q16", type: "mcq", prompt: "특정 열에서 중복을 제거하고 고유값(Unique values)만 확인할 때 사용하는 함수는?", options: ["① replace", "② unique", "③ split", "④ strip"], correctIndex: 1, explanation: "`unique()` 함수는 중복되지 않는 값들의 배열을 반환한다." },
        { id: "ch06-q17", type: "short", prompt: "데이터를 재구조화하여 행, 열, 값을 지정해 엑셀의 피벗 테이블과 같은 형태로 만드는 함수는 `pd.________`이다.", acceptableAnswers: ["pivot_table", "pivot"], explanation: "`pivot_table`은 집계 기능을 포함한 피벗 기능을 제공한다." },
        { id: "ch06-q18", type: "short", prompt: "특정 열을 기준으로 데이터를 그룹화하여 합계, 평균 등을 계산할 때 사용하는 함수는?", acceptableAnswers: ["groupby"], explanation: "`groupby()` 함수를 사용한다." },
        { id: "ch07-q01", type: "short", prompt: "NaN(결측치)이 아닌 값에 대하여 True를 반환하는 함수는?", acceptableAnswers: ["notnull", "notna"], explanation: "`isnull()`의 반대인 `notnull()` (또는 `notna()`)을 사용한다." },
        { id: "ch07-q02", type: "short", prompt: "결측치(NaN)를 특정 값(예: 0)으로 채울 때 사용하는 함수는?", acceptableAnswers: ["fillna"], explanation: "`fillna(value)`를 사용한다." },
        { id: "ch07-q03", type: "short", prompt: "데이터프레임의 특정 열의 데이터 타입을 변경할 때 사용하는 함수는?", acceptableAnswers: ["astype"], explanation: "`df['col'].astype(int)`와 같이 사용한다." }
    ]
};

if (typeof window !== 'undefined') window.set7 = set7;
