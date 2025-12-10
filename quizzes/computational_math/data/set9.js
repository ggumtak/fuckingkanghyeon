/**
 * 전산수학 Quiz - Set 9 (누락 문제 추가)
 * Chapter 04-09에서 누락된 문제들
 */
const set9 = {
    setId: "set-9",
    questions: [
        // Chapter 04 누락
        {
            id: "ch04-q08",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nfrom math import sqrt as root1\nroot1(4.0)\n```",
            options: ["① 4.0", "② 3.0", "③ 1.0", "④ 2.0"],
            correctIndex: 3,
            explanation: "4.0의 제곱근은 2.0이다."
        },
        // Chapter 05 누락 (q07 - columns)
        {
            id: "ch05-q07",
            type: "short",
            prompt: "데이터프레임의 열 이름을 확인할 수 있는 속성은?\n\n빈칸에 들어갈 내용을 적으시오.\n\n`________ 속성을 통해 데이터프레임이 어떤 열로 구성되어 있는지 확인할 수 있다.`",
            acceptableAnswers: ["columns"],
            explanation: "`df.columns`를 통해 열 이름을 확인할 수 있다."
        },
        // Chapter 06 누락
        {
            id: "ch06-q04",
            type: "short",
            prompt: "데이터프레임이 몇 행 몇 열 형태인지 구조를 확인하는 함수/속성은?",
            acceptableAnswers: ["shape", ".shape"],
            explanation: "`df.shape`는 (행, 열) 형태의 튜플을 반환한다."
        },
        {
            id: "ch06-q07",
            type: "short",
            prompt: "열 이름을 한꺼번에 만들거나 변경할 때 사용하는 속성은?",
            acceptableAnswers: ["columns"],
            explanation: "`df.columns = [...]` 형태로 열 이름을 설정할 수 있다."
        },
        {
            id: "ch06-q08",
            type: "mcq",
            prompt: "열 이름을 재정의할 때 사용하는 속성은?",
            options: ["① columns", "② head", "③ tail", "④ len"],
            correctIndex: 0,
            explanation: "`columns` 속성을 이용해 열 이름을 재정의한다."
        },
        {
            id: "ch06-q09",
            type: "short",
            prompt: "데이터프레임의 행 인덱스 시작 번호, 끝 번호, 증가값을 설정하는 속성은?",
            acceptableAnswers: ["index"],
            explanation: "`df.index`는 RangeIndex 등을 통해 인덱스 정보를 담고 있다."
        },
        {
            id: "ch06-q15",
            type: "mcq",
            prompt: "문자열의 공백을 제거할 때 사용하는 함수는?",
            options: ["① split", "② strip", "③ replace", "④ len"],
            correctIndex: 1,
            explanation: "`strip()`은 문자열 양쪽 끝의 공백을 제거한다."
        },
        {
            id: "ch06-q19",
            type: "short",
            prompt: "판다스에서 특정 열을 그룹화하여 행 기준으로 데이터를 표시하고 계산하는 함수와, 열 기준으로 표시하는 함수를 각각 적으시오.\n\n(답변 형식: stack, unstack)",
            acceptableAnswers: ["stack, unstack", "stack,unstack"],
            explanation: "`stack`은 열→행, `unstack`은 행→열로 재구조화한다."
        },
        // Chapter 07 누락
        {
            id: "ch07-q04",
            type: "short",
            prompt: "데이터를 정수형 또는 실수형으로 변경할 때 사용하는 Pandas 함수는? (pd.________)",
            acceptableAnswers: ["to_numeric"],
            explanation: "`pd.to_numeric()`을 사용한다."
        },
        {
            id: "ch07-q05",
            type: "short",
            prompt: "특정 열에 결측치가 있을 때 결측치를 평균값으로 치환하려면 어떤 함수를 사용하는가?",
            acceptableAnswers: ["fillna", "mean", "fillna(mean())"],
            explanation: "`df['col'].fillna(df['col'].mean())`처럼 사용한다."
        },
        {
            id: "ch07-q06",
            type: "short",
            prompt: "원본과 같은 주소를 참조하는 객체를 생성하는 복사 방식을 무엇이라 하는가?\n\n`________ 복사는 원본 데이터를 보존하려면 깊은 복사보다 권장되지 않는다.`",
            acceptableAnswers: ["얕은", "shallow", "얕은 복사"],
            explanation: "얕은 복사(shallow copy)는 원본과 같은 주소를 참조한다."
        },
        // Chapter 08 누락
        {
            id: "ch08-q02",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\nfor i in range(1, 6, 2):\n    print(i)\n```\n\n(각 줄의 출력을 쉼표로 구분하여 입력)",
            acceptableAnswers: ["1, 3, 5", "1,3,5"],
            explanation: "1부터 6 미만까지 2씩 증가: 1, 3, 5"
        },
        {
            id: "ch08-q03",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\narr = np.arange(start=1, stop=11, step=1)\narr\n```",
            acceptableAnswers: ["array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10])", "[ 1  2  3  4  5  6  7  8  9 10]", "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"],
            explanation: "1부터 10까지의 정수 배열이 생성된다."
        },
        {
            id: "ch08-q05",
            type: "mcq",
            prompt: "다음 코드의 실행 결과로 옳은 것은?\n\n```python\nm = np.array([np.arange(3), np.arange(3, 6)])\nprint(m)\n```",
            options: ["① [[0 1 2]\n   [3 4 5]]", "② [[3 4 5]\n   [3 4 5]]", "③ [[0 1 2]\n   [0 1 2]]", "④ [[3 4 5]\n   [0 1 2]]"],
            correctIndex: 0,
            explanation: "첫 번째 행은 [0,1,2], 두 번째 행은 [3,4,5]이다."
        },
        {
            id: "ch08-q07",
            type: "short",
            prompt: "다음 3차원 배열 `m`의 `shape`는?\n\n```python\nm = np.array([[[0, 1, 2],\n               [3, 4, 5]],\n              [[0, 1, 2],\n               [3, 4, 5]]])\nprint(m.shape)\n```",
            acceptableAnswers: ["(2, 2, 3)"],
            explanation: "2x2x3 형태의 3차원 배열이다."
        },
        {
            id: "ch08-q08",
            type: "mcq",
            prompt: "다음 코드의 실행 결과로 옳은 것은?\n\n```python\narr1 = np.array([1, 2, 3, 3.14])\nprint(arr1.dtype)\n```",
            options: ["① int8", "② float64", "③ uint8", "④ int32"],
            correctIndex: 1,
            explanation: "리스트에 실수(3.14)가 포함되어 있으므로 float64로 자동 변환된다."
        },
        {
            id: "ch08-q09",
            type: "mcq",
            prompt: "다음 코드의 실행 결과로 옳은 것은?\n\n```python\nm1 = np.arange(6)\nprint(m1)\n```",
            options: ["① [0 1 2 3 4 5]", "② [1 2 3 4 5 6]", "③ [0 1 2 3 4 5 6]", "④ [0 0 0 0 0 0]"],
            correctIndex: 0,
            explanation: "`arange(6)`은 0부터 5까지 생성한다."
        },
        {
            id: "ch08-q11",
            type: "short",
            prompt: "다음 코드에서 `f.shape`의 결과는?\n\n```python\na = np.arange(12).reshape(3, 4)\nf = a.flatten()\nprint(f.shape)\n```",
            acceptableAnswers: ["(12,)"],
            explanation: "`flatten()`은 다차원 배열을 1차원으로 펼친다."
        },
        {
            id: "ch08-q12",
            type: "short",
            prompt: "다음 코드에서 첫 번째 행 출력 결과는?\n\n```python\na = np.arange(12).reshape(3, 4)\nprint(a[::-1])\n```\n\n(첫 번째 행만 입력, 예: [8 9 10 11])",
            acceptableAnswers: ["[ 8  9 10 11]", "[8 9 10 11]", "[8, 9, 10, 11]"],
            explanation: "`[::-1]`은 행 순서를 역순으로 만든다. 원래 마지막 행이 첫 번째가 된다."
        },
        {
            id: "ch08-q13",
            type: "short",
            prompt: "배열을 임시로 1차원으로 변경해 데이터를 채운 뒤 다시 원래 구조로 되돌려주는 명령은?\n\n`( ) 명령은 배열의 요소 전체를 한꺼번에 초기화할 때 사용한다.`",
            acceptableAnswers: ["flat", ".flat"],
            explanation: "`flat` 속성은 배열의 1차원 이터레이터를 반환한다."
        },
        {
            id: "ch08-q16",
            type: "short",
            prompt: "다음 코드에서 `d`의 첫 번째 행은?\n\n```python\nd = np.arange(12).reshape(3, 4)\nd[0] = 20\nprint(d)\n```\n\n(첫 번째 행만 입력)",
            acceptableAnswers: ["[20 20 20 20]", "[20, 20, 20, 20]"],
            explanation: "`d[0] = 20`은 첫 번째 행 전체를 20으로 채운다."
        },
        {
            id: "ch08-q17",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\na = np.array([1, 2, 3, 4, 5, 6])\nprint(a > 2)\n```",
            acceptableAnswers: ["[False False False  True  True  True]", "[False, False, False, True, True, True]"],
            explanation: "2보다 큰 요소는 True, 아니면 False를 반환한다."
        },
        {
            id: "ch08-q19",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\na = np.array([1, 2, 3, 4, 5, 6])\nresult = a > 2\nresult\n```",
            acceptableAnswers: ["array([False, False, False,  True,  True,  True])", "[False False False  True  True  True]"],
            explanation: "불리언 배열이 반환된다."
        },
        {
            id: "ch08-q20",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\na = np.array([1, 2, 3, 4, 5, 6])\na[a != 3]\n```",
            acceptableAnswers: ["array([1, 2, 4, 5, 6])", "[1 2 4 5 6]", "[1, 2, 4, 5, 6]"],
            explanation: "3이 아닌 요소들만 필터링된다."
        },
        {
            id: "ch08-q22",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\na = np.arange(1, 7)\nidx = [1, 3, 5]\na[idx]\n```",
            acceptableAnswers: ["array([2, 4, 6])", "[2 4 6]", "[2, 4, 6]"],
            explanation: "인덱스 1, 3, 5에 해당하는 값 2, 4, 6이 반환된다."
        },
        {
            id: "ch08-q23",
            type: "short",
            prompt: "정렬된 값이 아닌 인덱스를 반환하는 함수는?\n\n`( ) 함수는 배열에 있는 값을 오름차순 정렬하고 정렬된 배열의 요소가 아니라 배열의 인덱스를 순서대로 반환한다.`",
            acceptableAnswers: ["argsort", "np.argsort"],
            explanation: "`argsort()`는 정렬된 인덱스를 반환한다."
        },
        // Chapter 09 누락
        {
            id: "ch09-q01",
            type: "short",
            prompt: "다음 코드의 결과를 입력하시오.\n\n```python\nimport numpy as np\na = np.array([1, 2])\nb = np.array([3, 4])\nc = a + b\nc\n```",
            acceptableAnswers: ["array([4, 6])", "[4 6]", "[4, 6]"],
            explanation: "요소별 덧셈: [1+3, 2+4] = [4, 6]"
        },
        {
            id: "ch09-q02",
            type: "short",
            prompt: "다음 코드의 결과를 입력하시오.\n\n```python\na = np.array([1, 2])\nb = np.array([3, 4])\nc = a - b\nc\n```",
            acceptableAnswers: ["array([-2, -2])", "[-2 -2]", "[-2, -2]"],
            explanation: "요소별 뺄셈: [1-3, 2-4] = [-2, -2]"
        },
        {
            id: "ch09-q03",
            type: "short",
            prompt: "파이썬에서 리스트의 합과 Numpy 배열의 합은 어떻게 다른가?\n\n리스트의 합은 ( )되어 표시되고, 배열의 합은 요소별로 ( )되어 표시된다.",
            acceptableAnswers: ["연결, 더해져", "연결,더해져", "이어지고, 더해지게", "리스트, 배열"],
            explanation: "리스트는 연결(concatenation), 배열은 요소별 연산이 된다."
        },
        {
            id: "ch09-q06",
            type: "short",
            prompt: "다음 코드의 결과를 입력하시오.\n\n```python\na = 0.5\nHong_S = [150, 170]\navg_Hong1 = list(map(lambda x: x*a, Hong_S))\nprint(avg_Hong1)\n```",
            acceptableAnswers: ["[75.0, 85.0]"],
            explanation: "150*0.5=75.0, 170*0.5=85.0"
        },
        {
            id: "ch09-q08",
            type: "mcq",
            prompt: "다음 코드의 결과로 옳은 것은?\n\n```python\na = np.array([1, 2, 3, 4, 5])\nb = np.array([2, 4, 6, 8, 10])\nprint(np.sum(a + b))\n```",
            options: ["① 130", "② 110", "③ 100", "④ 45"],
            correctIndex: 3,
            explanation: "a+b = [3, 6, 9, 12, 15]. 합계: 3+6+9+12+15 = 45"
        }
    ]
};

if (typeof window !== 'undefined') window.set9 = set9;
