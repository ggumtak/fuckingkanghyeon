/**
 * 전산수학 Quiz - Set 5 (ch04-q01 ~ ch04-q10)
 * 클래스, 모듈, 정규표현식
 */
const set5 = {
    setId: "set-5",
    questions: [
        { id: "ch04-q01", type: "mcq", prompt: "다음 코드를 실행한 결과는?\n\n```python\nclass Stocks:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nlg = Stocks(\"LG전자\", 150000)\nprint(lg.name, lg.price)\n```", options: ["① LG전자 150000", "② 삼성전자 150000", "③ LG전자 100000", "④ SK하이닉스 150000"], correctIndex: 0, explanation: "생성자 `__init__`을 통해 전달된 이름과 가격이 인스턴스 변수에 저장된다." },
        { id: "ch04-q02", type: "short", prompt: "클래스에서 정의된 메서드를 새로 만들지 않고 물려받아 사용하는 기능을 무엇이라 하는가?", acceptableAnswers: ["상속", "inheritance"], explanation: "기존 클래스의 기능을 그대로 물려받는 것을 상속(Inheritance)이라고 한다." },
        { id: "ch04-q03", type: "short", prompt: "상위 클래스의 메서드와 같은 이름으로 하위 클래스에서 메서드를 재정의하여 하위 클래스의 메서드가 우선 실행되게 하는 것을 무엇이라 하는가?", acceptableAnswers: ["오버라이딩", "메서드 오버라이딩", "method overriding", "overriding"], explanation: "같은 이름의 메서드를 덮어쓰는 것을 오버라이딩(Overriding)이라고 한다." },
        { id: "ch04-q04", type: "mcq", prompt: "다음 코드의 괄호 안에 들어갈 내용으로 적당한 것은?\n\n```python\n(     ) math import pi as p, sqrt as s\n```", options: ["① pi", "② import", "③ as", "④ from"], correctIndex: 3, explanation: "`from 모듈명 import ...` 구문을 사용한다." },
        { id: "ch04-q05", type: "mcq", prompt: "다음 코드를 실행한 결과는?\n\n```python\nimport re as regex\nmy_regex = regex.compile(\"[a-z]+\")\nchar = \"life is too short\"\nmy_regex.findall(char)\n```", options: ["① ['life', 'too', 'short']", "② ['life', 'is', 'too', 'short']", "③ ['life', 'is', 'short']", "④ ['life is too short']"], correctIndex: 1, explanation: "`[a-z]+`는 소문자 단어를 찾는다." },
        { id: "ch04-q06", type: "mcq", prompt: "다음 코드 `s(4.0)`의 실행 결과는?\n\n```python\nfrom math import sqrt as s\ns(4.0)\n```", options: ["① 1.0", "② 2.0", "③ 16.0", "④ 4.0"], correctIndex: 1, explanation: "4.0의 제곱근은 2.0이다." },
        { id: "ch04-q07", type: "mcq", prompt: "다음 `pi`의 값에 가장 가까운 것은?\n\n```python\nfrom math import pi\npi\n```", options: ["① 5", "② 7.3", "③ 3.141592653", "④ 8.5"], correctIndex: 2, explanation: "원주율 파이(pi)는 약 3.14이다." },
        { id: "ch04-q09", type: "short", prompt: "다음 코드를 실행했을 때 마지막 줄의 출력 결과(lg.count)는 얼마인가?\n\n```python\nclass Stocks:\n    def __init__(self, name, price, count=0):\n        self.name = name\n        self.price = price\n        self.count = count\n    def click(self, num_times=1):\n        self.count += num_times\n\nlg = Stocks(\"LG전자\", 150000)\nlg.click()\nlg.click()\nprint(lg.count)\n```", acceptableAnswers: ["2"], explanation: "초기 count는 0, `click()`을 두 번 호출했으므로 1씩 증가하여 2가 된다." },
        { id: "ch04-q10", type: "mcq", prompt: "다음 코드를 실행한 결과는?\n\n```python\nclass Stocks:\n    def __init__(self, name, price, count=0):\n        self.name = name\n        self.price = price\n        self.count = count\n\nlg = Stocks(\"LG전자\", 150000)\nprint(lg.name, lg.price, lg.count)\n```", options: ["① 삼성전자 150000 1", "② SK하이닉스 20000 3", "③ LG전자 150000 0", "④ LG전자 150000 1"], correctIndex: 2, explanation: "count의 디폴트 값이 0이므로 0으로 초기화된다." }
    ]
};

if (typeof window !== 'undefined') window.set5 = set5;
