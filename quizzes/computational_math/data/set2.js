/**
 * 전산수학 Quiz - Set 2 (ch02-q01 ~ ch02-q12)
 * 리스트, 튜플, 딕셔너리
 */
const set2 = {
    setId: "set-2",
    questions: [
        {
            id: "ch02-q01",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nprices = [85000, 140000, 200000, 15000]\nprices[0] = 5000\nprices\n```",
            options: ["① [85000, 140000, 200000, 15000]", "② [5000, 5000, 5000, 5000]", "③ [5000, 140000, 200000, 15000]", "④ [85000, 140000, 200000, 5000]"],
            correctIndex: 2,
            explanation: "리스트는 변경 가능(mutable)하므로 인덱스 0번의 값이 85000에서 5000으로 변경된다.",
            meta: { set: 3, orderInSet: 1, skillTag: "[결과예측]", difficulty: "easy", topic: "리스트 수정" }
        },
        {
            id: "ch02-q02",
            type: "mcq",
            prompt: "prices 리스트의 마지막 원소값인 200000을 가져오려면 인덱스는 어떻게 설정해야 하는가?\n\n```python\nprices = [85000, 140000, 200000]\n```",
            options: ["① prices[0]", "② prices[-1]", "③ prices[1]", "④ prices[-2]"],
            correctIndex: 1,
            explanation: "파이썬에서 리스트의 마지막 원소는 인덱스 `-1`로 접근할 수 있다.",
            meta: { set: 3, orderInSet: 2, skillTag: "[개념응용]", difficulty: "easy", topic: "리스트 인덱싱" }
        },
        {
            id: "ch02-q03",
            type: "mcq",
            prompt: "prices 리스트에서 첫 번째부터 두 번째까지 값을 가져오려면 어떻게 설정해야 하는가?\n\n```python\nprices = [85000, 140000, 200000]\n```",
            options: ["① prices[:2]", "② prices[:]", "③ prices[1:]", "④ prices[2:]"],
            correctIndex: 0,
            explanation: "슬라이싱 `[:2]`는 인덱스 0부터 2 직전(인덱스 1)까지의 요소를 가져오므로 첫 번째와 두 번째 값을 반환한다.",
            meta: { set: 3, orderInSet: 3, skillTag: "[개념응용]", difficulty: "easy", topic: "리스트 슬라이싱" }
        },
        {
            id: "ch02-q04",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ninteger_list = [1, 2, 3]\nsum(integer_list)\n```",
            options: ["① 0", "② 2", "③ 3", "④ 6"],
            correctIndex: 3,
            explanation: "`sum()` 함수는 리스트 내 모든 요소의 합을 반환한다. 1+2+3 = 6.",
            meta: { set: 3, orderInSet: 4, skillTag: "[결과예측]", difficulty: "easy", topic: "리스트 함수" }
        },
        {
            id: "ch02-q05",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\nprices = [5000, 140000, 200000, 15000]\nx = [1, 2, 3, 4]\nprices.extend(x)\nprices\n```",
            acceptableAnswers: ["[5000, 140000, 200000, 15000, 1, 2, 3, 4]"],
            explanation: "`extend()`는 리스트 뒤에 다른 리스트의 요소들을 연결하여 확장한다.",
            meta: { set: 3, orderInSet: 5, skillTag: "[결과예측]", difficulty: "easy", topic: "리스트 확장" }
        },
        {
            id: "ch02-q06",
            type: "mcq",
            prompt: "prices_tuple 튜플에서 `prices_tuple[0]`의 실행 결과는?\n\n```python\nprices_tuple = (85000, 140000, 200000)\nprices_tuple[0]\n```",
            options: ["① 140000", "② 85000", "③ 0", "④ 200000"],
            correctIndex: 1,
            explanation: "인덱스 0은 튜플의 첫 번째 요소를 의미한다.",
            meta: { set: 4, orderInSet: 1, skillTag: "[결과예측]", difficulty: "easy", topic: "튜플 인덱싱" }
        },
        {
            id: "ch02-q07",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\nprices_tuple = ('삼성전자', 'LG전자', 'SK', 85000, 140000, 200000)\nprices_tuple[2:4]\n```",
            acceptableAnswers: ["('SK', 85000)", "('SK', 85000,)"],
            explanation: "인덱스 2('SK')부터 4 직전(인덱스 3, 85000)까지 잘라내므로 두 개의 요소를 가진 튜플이 된다.",
            meta: { set: 4, orderInSet: 2, skillTag: "[결과예측]", difficulty: "medium", topic: "튜플 슬라이싱" }
        },
        {
            id: "ch02-q08",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nitem_list = [1, 2, 3, 1, 2, 3]\nnum_items = len(item_list)\nnum_items\n```",
            options: ["① 6", "② 3", "③ 2", "④ 0"],
            correctIndex: 0,
            explanation: "리스트에는 총 6개의 요소가 들어있다.",
            meta: { set: 4, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "len 함수" }
        },
        {
            id: "ch02-q09",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nitem_list = [1, 2, 3, 1, 2, 3]\nitem_set = set(item_list)\nitem_set\n```",
            options: ["① {1, 2, 3}", "② (1, 2, 3)", "③ [1, 2, 3]", "④ {1, 2, 3, 1, 2, 3}"],
            correctIndex: 0,
            explanation: "`set`은 중복을 허용하지 않는 자료형이므로 중복된 1, 2, 3이 제거된다.",
            meta: { set: 4, orderInSet: 4, skillTag: "[결과예측]", difficulty: "easy", topic: "집합(set)" }
        },
        {
            id: "ch02-q10",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\nmy_stocks = {'ss': 10, 'lg': 5, 'sk': 5}\nprint(\"number of my ss stocks: %d\" % my_stocks['ss'])\n```",
            acceptableAnswers: ["number of my ss stocks: 10"],
            explanation: "딕셔너리에서 키 'ss'의 값은 10이며, 이것이 문자열 포매팅을 통해 출력된다.",
            meta: { set: 4, orderInSet: 5, skillTag: "[결과예측]", difficulty: "medium", topic: "딕셔너리 사용" }
        },
        {
            id: "ch02-q11",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\nmy_stocks = {'ss': 10, 'lg': 5, 'sk': 5}\nmy_stocks['lg'] = 15\nprint(my_stocks)\n```",
            acceptableAnswers: ["{'ss': 10, 'lg': 15, 'sk': 5}", "{'ss': 10, 'sk': 5, 'lg': 15}"],
            explanation: "키 'lg'의 값이 5에서 15로 업데이트된다. (딕셔너리 순서는 파이썬 버전에 따라 다를 수 있으나 내용은 동일함)",
            meta: { set: 5, orderInSet: 1, skillTag: "[결과예측]", difficulty: "easy", topic: "딕셔너리 수정" }
        },
        {
            id: "ch02-q12",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nmy_stocks = {'lg': 15, 'naver': 20, 'sk': 5, 'ss': 10}\nss_quantity = my_stocks.get(\"naver\")\nss_quantity\n```",
            options: ["① 15", "② 10", "③ 20", "④ lg"],
            correctIndex: 2,
            explanation: "`get(\"naver\")`는 'naver' 키에 해당하는 값인 20을 반환한다.",
            meta: { set: 5, orderInSet: 2, skillTag: "[결과예측]", difficulty: "easy", topic: "딕셔너리 get" }
        }
    ]
};

if (typeof window !== 'undefined') window.set2 = set2;
