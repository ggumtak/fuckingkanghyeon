/**
 * 전산수학 Quiz - Set 6 (ch05-q01 ~ ch06-q06)
 * Pandas Series, DataFrame
 */
const set6 = {
    setId: "set-6",
    questions: [
        { id: "ch05-q01", type: "short", prompt: "다음 Pandas 코드의 실행 결과 객체의 타입(Type)은 무엇인가?\n\n```python\nimport pandas as pd\npd.Series([1, 2, 3, 4, 5])\n```", acceptableAnswers: ["Series", "pandas.core.series.Series"], explanation: "1차원 배열 형태의 데이터 구조는 Pandas Series이다." },
        { id: "ch05-q02", type: "short", prompt: "리스트를 이용해 데이터프레임을 생성하려 한다. 빈칸에 들어갈 함수명은?\n\n```python\nscore_df = pd._________(score)\n```", acceptableAnswers: ["DataFrame"], explanation: "데이터프레임 생성자는 `pd.DataFrame()`이다." },
        { id: "ch05-q03", type: "short", prompt: "데이터프레임의 열 이름을 확인하거나 변경할 때 사용하는 속성 이름은?", acceptableAnswers: ["columns"], explanation: "`df.columns`를 통해 열 이름을 리스트 형태로 확인하거나 할당할 수 있다." },
        { id: "ch05-q04", type: "short", prompt: "데이터프레임이 몇 행 몇 열인지 구조(shape)를 확인하는 속성은?", acceptableAnswers: ["shape"], explanation: "`df.shape`는 (행, 열) 형태의 튜플을 반환한다." },
        { id: "ch05-q05", type: "short", prompt: "데이터프레임의 행 인덱스 정보(시작, 끝, 단계 등)를 확인하는 속성은?", acceptableAnswers: ["index"], explanation: "`df.index`는 RangeIndex 등의 인덱스 정보를 담고 있다." },
        { id: "ch05-q06", type: "mcq", prompt: "딕셔너리를 데이터프레임으로 변환할 때 사용하는 생성자는?\n\n```python\nscore_dict_df = pd._________(score_dict)\n```", options: ["① index", "② df", "③ columns", "④ DataFrame"], correctIndex: 3, explanation: "딕셔너리든 리스트든 `pd.DataFrame()`을 사용하여 데이터프레임을 생성한다." },
        { id: "ch05-q08", type: "short", prompt: "데이터프레임의 실제 데이터 값들만 Numpy 배열 형태로 확인하고 싶을 때 사용하는 속성은?", acceptableAnswers: ["values"], explanation: "`df.values`는 데이터프레임의 내용을 Numpy Array로 반환한다." },
        { id: "ch05-q09", type: "mcq", prompt: "특정 열을 데이터프레임의 인덱스로 설정하려고 한다. 빈칸에 들어갈 속성은?\n\n```python\nscore_dict_df.________ = score_dict_df['성명']\n```", options: ["① df", "② index", "③ columns", "④ values"], correctIndex: 1, explanation: "`df.index`에 특정 열의 데이터를 할당하면 그 열의 값들이 인덱스가 된다." },
        { id: "ch05-q10", type: "mcq", prompt: "다음 코드에서 '성명'이라는 **열(column)**을 삭제하려면 axis는 어떻게 지정해야 하는가?\n\n```python\nscore_dict_df.drop(['성명'], axis=______)\n```", options: ["① 0", "② 1", "③ 2", "④ 4"], correctIndex: 1, explanation: "Pandas에서 `axis=0`은 행, `axis=1`은 열을 의미한다." },
        { id: "ch06-q01", type: "short", prompt: "데이터프레임의 상위 5개 행을 출력하는 함수 이름은?", acceptableAnswers: ["head", "head()"], explanation: "`head()`는 기본적으로 상위 5개를 보여준다." },
        { id: "ch06-q02", type: "short", prompt: "데이터프레임의 하위 5개 행을 출력하는 함수 이름은?", acceptableAnswers: ["tail", "tail()"], explanation: "`tail()`은 끝에서부터 데이터를 보여준다." },
        { id: "ch06-q03", type: "mcq", prompt: "데이터프레임이 총 몇 건의 행(데이터)을 가지고 있는지 확인할 때 사용하는 파이썬 내장 함수는?", options: ["① head", "② tail", "③ len", "④ find"], correctIndex: 2, explanation: "`len(df)`를 사용하면 전체 행의 개수를 반환한다." },
        { id: "ch06-q05", type: "short", prompt: "행, 열의 개수뿐만 아니라 null 값 유무와 데이터 타입(dtype) 정보를 요약해서 보여주는 함수는?", acceptableAnswers: ["info", "info()"], explanation: "`df.info()`는 데이터프레임의 전반적인 요약 정보를 출력한다." },
        { id: "ch06-q06", type: "short", prompt: "모든 문자열을 숫자로 변환하고, 변환할 수 없는 값은 NaN으로 처리하려 한다. Pandas의 함수 `pd.________`를 사용해야 한다.", acceptableAnswers: ["to_numeric"], explanation: "`pd.to_numeric` 함수에 `errors='coerce'` 옵션을 주면 NaN이 된다." }
    ]
};

if (typeof window !== 'undefined') window.set6 = set6;
