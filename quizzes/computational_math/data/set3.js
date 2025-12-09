/**
 * 전산수학 Quiz - Set 3 (ch03-q01 ~ ch03-q17)
 * 조건문, 반복문, 함수
 */
const set3 = {
    setId: "set-3",
    questions: [
        {
            id: "ch03-q01",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nprice = 800\nif price == 900:\n    print('적정 가격')\nelif price > 900:\n    print('비싼 가격')\nelse:\n    print('낮은 가격')\n```",
            options: ["① 비싼 가격", "② 낮은 가격", "③ 적정 가격", "④ 900"],
            correctIndex: 1,
            explanation: "`price`가 800이므로 첫 번째, 두 번째 조건을 만족하지 못하고 `else` 블록이 실행된다.",
            meta: { set: 5, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "조건문" }
        },
        {
            id: "ch03-q02",
            type: "short",
            prompt: "다음 코드의 실행 결과를 입력하시오.\n\n```python\ncurrent_price = 900\npredict_price = 1000\nfee = 0.01\n\nprofit_change = (predict_price - current_price) / current_price\n\nif profit_change > fee:\n    print(\"profit_change는 %.2f, fee는 %f \"%(profit_change, fee))\n    print(\"buy stock: 순수익률은 %.2f\"%(profit_change - fee))\nelif profit_change < -fee:\n    print(\"sell stock: 수익률은 %.2f, 수수료는 %f\"%(profit_change, fee))\nelse:\n    print(profit_change, \"hold stock\")\n```",
            acceptableAnswers: ["profit_change는 0.11, fee는 0.010000 \nbuy stock: 순수익률은 0.10", "profit_change는 0.11, fee는 0.010000\nbuy stock: 순수익률은 0.10"],
            explanation: "수익률은 (1000-900)/900 ≈ 0.111이다. 0.01보다 크므로 첫 번째 조건문이 실행된다.",
            meta: { set: 5, orderInSet: 4, skillTag: "[결과예측]", difficulty: "medium", topic: "복합 조건문" }
        },
        {
            id: "ch03-q03",
            type: "essay",
            prompt: "위 문제(2번)와 동일한 코드 구조에서 `predict_price`가 `800`이라면 어떤 결과가 출력될지 논리적 판단 근거와 함께 서술하시오. (수수료 fee는 0.01로 동일하다고 가정)",
            rubric: ["수익률(profit_change) 계산: (800-900)/900 = -0.111...", "조건 비교: -0.111은 -0.01(-fee)보다 작음", "결과 판정: 'sell stock' 조건(elif)에 해당하여 매도 메시지 출력"],
            maxLength: 300,
            explanation: "수익률이 약 -11%이므로 -1%보다 작아 매도(sell stock) 조건에 걸리게 된다.",
            meta: { set: 5, orderInSet: 5, skillTag: "[개념응용]", difficulty: "medium", topic: "조건문 분기" }
        },
        {
            id: "ch03-q04",
            type: "short",
            prompt: "다음 코드의 실행 결과를 리스트 형태로 입력하시오.\n\n```python\ngoogoo = [i*j for i in range(2, 4) for j in range(1, 3)]\nprint(googoo)\n```\n\n*(문제 원본의 range(2, 10), range(1, 10)은 너무 길어지므로 범위 축소됨)*",
            acceptableAnswers: ["[2, 4, 3, 6]"],
            explanation: "i=2일 때 j=1,2 (2,4), i=3일 때 j=1,2 (3,6) 순서로 생성된다.",
            meta: { set: 6, orderInSet: 1, skillTag: "[결과예측]", difficulty: "medium", topic: "이중 리스트 컴프리헨션" }
        },
        {
            id: "ch03-q05",
            type: "code-fill",
            prompt: "다음 코드의 실행 결과를 보고 밑줄에 들어갈 예약어를 적으시오.\n\n**[실행 결과]** (3이 출력되지 않음)\n0\n1\n2\n4\n...",
            language: "python",
            code: "for i in range(10):\n    if i == 3:\n        ( 1 )\n    else:\n        print(i)",
            blanks: [{ index: 1, answer: "continue", explanation: "3일 때 출력을 건너뛰고 다음 반복으로 넘어가야 하므로 continue를 사용한다." }],
            meta: { set: 6, orderInSet: 2, skillTag: "[코드빈칸]", difficulty: "easy", topic: "제어문 continue" }
        },
        {
            id: "ch03-q06",
            type: "short",
            prompt: "다음 코드에서 '해물찜'이 입력되었을 때 출력되는 문장을 적으시오.\n\n```python\nmenus = ['된장찌개', '삼겹살', '설렁탕']\nitem = '해물찜'\n\nif item in menus:\n    print(f\"{item} 주문합니다.\")\nelse:\n    print(f\"\\n죄송합니다. 저희는 {item}이 없습니다.\")\n```",
            acceptableAnswers: ["\n죄송합니다. 저희는 해물찜이 없습니다.", "죄송합니다. 저희는 해물찜이 없습니다."],
            explanation: "리스트에 '해물찜'이 없으므로 else 블록이 실행된다.",
            meta: { set: 6, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "in 연산자" }
        },
        {
            id: "ch03-q07",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nmy_stocks = {'ss': 10, 'lg': 5, 'sk': 5}\nmy_stocks1 = {k: v*100 for (k, v) in my_stocks.items()}\nmy_stocks1\n```",
            options: ["① {'ss': 10, 'lg': 5, 'sk': 5}", "② {'ss': 1, 'lg': 0.5, 'sk': 0.5}", "③ {'ss': 1000, 'lg': 500, 'sk': 500}", "④ {'ss': 110, 'lg': 150, 'sk': 150}"],
            correctIndex: 2,
            explanation: "딕셔너리 컴프리헨션으로 모든 값(value)에 100을 곱했다.",
            meta: { set: 6, orderInSet: 4, skillTag: "[결과예측]", difficulty: "medium", topic: "딕셔너리 컴프리헨션" }
        },
        {
            id: "ch03-q08",
            type: "short",
            prompt: "다음 코드의 첫 번째 줄 출력 결과를 적으시오.\n\n```python\nmy_stocks = {'ss': 10, 'lg': 5}\nfor i, key in enumerate(my_stocks):\n    print(i, key)\n```",
            acceptableAnswers: ["0 ss"],
            explanation: "`enumerate`는 인덱스와 키를 함께 반환하므로 첫 번째 반복에서 인덱스 0과 첫 번째 키가 출력된다.",
            meta: { set: 6, orderInSet: 5, skillTag: "[결과예측]", difficulty: "easy", topic: "enumerate" }
        },
        {
            id: "ch03-q09",
            type: "short",
            prompt: "다음 코드의 마지막 출력값(가장 큰 숫자)을 적으시오.\n\n```python\ni = 0\nwhile i < 5:\n    print(i)\n    i += 1\n```",
            acceptableAnswers: ["4"],
            explanation: "i가 0, 1, 2, 3, 4일 때 출력하고 5가 되면 루프가 종료된다.",
            meta: { set: 7, orderInSet: 1, skillTag: "[결과예측]", difficulty: "easy", topic: "while 반복문" }
        },
        {
            id: "ch03-q10",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nscores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\ntotal = 0\nfor i in range(len(scores)):\n    total += scores[i]\nprint(total)\n```",
            options: ["① 5000", "② 50", "③ 500", "④ 550"],
            correctIndex: 3,
            explanation: "10부터 100까지 10단위 숫자의 합은 550이다.",
            meta: { set: 7, orderInSet: 2, skillTag: "[결과예측]", difficulty: "easy", topic: "반복문 누적합" }
        },
        {
            id: "ch03-q11",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ndef add(a, b):\n    return a + b\nprint(add(1, 2))\n```",
            options: ["① 1", "② 3", "③ 30", "④ 2"],
            correctIndex: 1,
            explanation: "1과 2를 더한 3을 반환한다.",
            meta: { set: 7, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "함수 기초" }
        },
        {
            id: "ch03-q12",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ndef f1(x):\n    return x * 2\n\ndef doubler(f1):\n    def g(x):\n        return 2 * f1(x)\n    return g\n\ndoubler(f1)(4)\n```",
            options: ["① 6", "② 12", "③ 16", "④ 20"],
            correctIndex: 2,
            explanation: "`f1(4)`는 8이다. `doubler` 내부의 `g(x)`는 `2 * f1(x)`를 반환하므로 `2 * 8 = 16`이 된다.",
            meta: { set: 7, orderInSet: 4, skillTag: "[결과예측]", difficulty: "hard", topic: "클로저와 고차 함수" }
        },
        {
            id: "ch03-q13",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ndef sum4(x, y):\n    return x + y\nsum4(5, 10)\n```",
            options: ["① 15", "② 150", "③ 50", "④ 500"],
            correctIndex: 0,
            explanation: "5 + 10 = 15.",
            meta: { set: 7, orderInSet: 5, skillTag: "[결과예측]", difficulty: "easy", topic: "함수 실행" }
        },
        {
            id: "ch03-q14",
            type: "mcq",
            prompt: "다음 람다 함수의 실행 결과는?\n\n```python\n(lambda x,y: x+y)(5, 10)\n```",
            options: ["① 15", "② 50", "③ 500", "④ 5"],
            correctIndex: 0,
            explanation: "익명 함수 lambda가 정의되자마자 (5, 10) 인자로 호출되어 15를 반환한다.",
            meta: { set: 8, orderInSet: 1, skillTag: "[결과예측]", difficulty: "easy", topic: "lambda 함수" }
        },
        {
            id: "ch03-q15",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ndef add_mul(choice, *args):\n    if choice == \"add\":\n        result = 0\n        for i in args:\n            result = result + i\n    elif choice == \"mul\":\n        result = 1\n        for i in args:\n            result = result * i\n    return result\n\nadd_mul('add', 1, 2, 3, 4, 5)\n```",
            options: ["① 0", "② 200", "③ 120", "④ 15"],
            correctIndex: 3,
            explanation: "`choice`가 'add'이므로 뒤따르는 인자 1,2,3,4,5를 모두 더한 값 15가 반환된다.",
            meta: { set: 8, orderInSet: 2, skillTag: "[결과예측]", difficulty: "medium", topic: "가변 인자(*args)" }
        },
        {
            id: "ch03-q16",
            type: "short",
            prompt: "다음 코드를 실행했을 때 `kwargs`의 출력값을 딕셔너리 형태로 적으시오.\n\n```python\ndef stockprices(*args, **kwargs):\n    print(\"키워드 인자들:\", kwargs)\n\nstockprices(1, 2, 3, key1=\"word1\", key2=\"word2\")\n```",
            acceptableAnswers: ["{'key1': 'word1', 'key2': 'word2'}", "{'key2': 'word2', 'key1': 'word1'}"],
            explanation: "`**kwargs`는 키워드 인자를 딕셔너리 형태로 받는다.",
            meta: { set: 8, orderInSet: 3, skillTag: "[결과예측]", difficulty: "medium", topic: "키워드 가변 인자(**kwargs)" }
        },
        {
            id: "ch03-q17",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ndef other_way(x, y, z):\n    return x + y + z\nx_y_list = [1, 2]\nz_dict = {\"z\": 3}\nother_way(*x_y_list, **z_dict)\n```",
            options: ["① 3", "② 4", "③ 6", "④ 5"],
            correctIndex: 2,
            explanation: "`*x_y_list`는 1, 2로 언패킹되어 x, y에 들어가고, `**z_dict`는 z=3으로 언패킹되어 z에 들어간다. 1+2+3=6.",
            meta: { set: 8, orderInSet: 4, skillTag: "[결과예측]", difficulty: "hard", topic: "인자 언패킹" }
        }
    ]
};

if (typeof window !== 'undefined') window.set3 = set3;
