/**
 * 전산수학 Quiz - Set 4 (ch03-q18 ~ ch03-q27)
 * 함수 심화, collections, zip
 */
const set4 = {
    setId: "set-4",
    questions: [
        {
            id: "ch03-q18",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ndef other_way1(price1, price2, price3):\n    return price1 + price2 + price3\nkwargs = {\"price1\": 85000, \"price2\": 145000, \"price3\": 120000}\nother_way1(**kwargs)\n```",
            options: ["① 500000", "② 35000", "③ 350000", "④ 50000"],
            correctIndex: 2,
            explanation: "딕셔너리 언패킹을 통해 각 매개변수에 값이 전달된다. 85000+145000+120000 = 350000.",
            meta: { set: 8, orderInSet: 5, skillTag: "[결과예측]", difficulty: "medium", topic: "딕셔너리 언패킹" }
        },
        {
            id: "ch03-q19",
            type: "short",
            prompt: "다음 코드가 실행된 후 `word_counts`에서 'apple'의 값(개수)은 얼마인가?\n\n```python\nfruits = [\"apple\", \"apple\", \"apple\", \"banana\", \"banana\", \"cherry\", \"melon\"]\nword_counts = {}\nfor word in fruits:\n    previous_count = word_counts.get(word, 0)\n    word_counts[word] = previous_count + 1\n```",
            acceptableAnswers: ["3"],
            explanation: "'apple'이 리스트에 3번 등장하므로 카운트는 3이 된다.",
            meta: { set: 9, orderInSet: 1, skillTag: "[결과예측]", difficulty: "medium", topic: "딕셔너리 카운팅" }
        },
        {
            id: "ch03-q20",
            type: "short",
            prompt: "다음 코드를 실행한 결과 `word_counts['banana']`의 값은?\n\n```python\nfrom collections import defaultdict\nfruits = [\"apple\", \"apple\", \"apple\", \"banana\", \"banana\", \"cherry\", \"melon\"]\nword_counts = defaultdict(int)\nfor i in fruits:\n    word_counts[i] += 1\n```",
            acceptableAnswers: ["2"],
            explanation: "`defaultdict(int)`는 기본값을 0으로 초기화하며, 'banana'는 2번 등장한다.",
            meta: { set: 9, orderInSet: 2, skillTag: "[결과예측]", difficulty: "medium", topic: "collections.defaultdict" }
        },
        {
            id: "ch03-q21",
            type: "short",
            prompt: "다음 코드를 실행했을 때 `Counter` 객체의 'melon' 값은?\n\n```python\nfrom collections import Counter\nc1 = Counter([\"apple\", \"apple\", \"apple\", \"banana\", \"banana\", \"cherry\", \"melon\"])\n```",
            acceptableAnswers: ["1"],
            explanation: "`Counter`는 리스트 내 요소의 개수를 자동으로 세어준다. 'melon'은 1개이다.",
            meta: { set: 9, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "collections.Counter" }
        },
        {
            id: "ch03-q22",
            type: "short",
            prompt: "다음 리스트 컴프리헨션의 결과 리스트를 적으시오.\n\n```python\nletters = ['a', 'b', 'c']\nnumbers = [1, 2, 3]\n[pair for pair in zip(letters, numbers)]\n```",
            acceptableAnswers: ["[('a', 1), ('b', 2), ('c', 3)]"],
            explanation: "`zip`은 두 리스트를 같은 인덱스끼리 묶어 튜플을 생성한다.",
            meta: { set: 9, orderInSet: 4, skillTag: "[결과예측]", difficulty: "easy", topic: "zip 함수" }
        },
        {
            id: "ch03-q23",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nnumbers1 = [1, 2, 3]\nnumbers2 = [4, 5, 6]\nsumlist = [i+j for i, j in zip(numbers1, numbers2)]\nsumlist\n```",
            options: ["① [5, 7, 9]", "② [5, 5, 5]", "③ [4, 5, 6]", "④ [9, 9, 9]"],
            correctIndex: 0,
            explanation: "같은 인덱스끼리 더해진다. 1+4=5, 2+5=7, 3+6=9.",
            meta: { set: 9, orderInSet: 5, skillTag: "[결과예측]", difficulty: "medium", topic: "zip과 리스트 컴프리헨션" }
        },
        {
            id: "ch03-q24",
            type: "short",
            prompt: "다음 코드 실행 후 `numbers` 변수의 값을 적으시오. (튜플 형태)\n\n```python\npairlist = [('a', 1), ('b', 2), ('c', 3)]\nletters, numbers = zip(*pairlist)\n```",
            acceptableAnswers: ["(1, 2, 3)"],
            explanation: "`zip(*pairlist)`는 언패킹을 통해 리스트를 다시 분리(unzip)하는 효과가 있다.",
            meta: { set: 10, orderInSet: 1, skillTag: "[결과예측]", difficulty: "hard", topic: "zip unzip(*)" }
        },
        {
            id: "ch03-q25",
            type: "short",
            prompt: "다음 코드에서 첫 번째 줄에 출력되는 내용은?\n\n```python\nmy_stocks = {'ss': 10, 'lg': 5, 'sk': 5}\ndata = enumerate(my_stocks)\nfor i, j in data:\n    print(i, \":\", j, my_stocks[j])\n```",
            acceptableAnswers: ["0 : ss 10"],
            explanation: "딕셔너리를 enumerate하면 키를 순회한다. 인덱스 0, 키 'ss', 값 10이 출력된다.",
            meta: { set: 10, orderInSet: 2, skillTag: "[결과예측]", difficulty: "medium", topic: "enumerate dictionary" }
        },
        {
            id: "ch03-q26",
            type: "short",
            prompt: "다음 코드 실행 후 `prices` 리스트의 마지막 값은?\n\n```python\nprices = [2000, 140000, 200000, 15000, 1, 2, 3, 4]\nx = [1, 2, 3, 4]\nprices.extend(x)\n```",
            acceptableAnswers: ["4"],
            explanation: "`extend(x)`로 인해 리스트 끝에 1, 2, 3, 4가 추가되므로 마지막 값은 4이다.",
            meta: { set: 10, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "list extend" }
        },
        {
            id: "ch03-q27",
            type: "short",
            prompt: "다음 코드의 실행 결과를 리스트 형태로 적으시오.\n\n```python\nx = sorted([-4, 1, -2, 3], key=abs, reverse=True)\nprint(x)\n```",
            acceptableAnswers: ["[-4, 3, -2, 1]"],
            explanation: "`key=abs`는 절댓값을 기준으로 정렬함을 의미한다. 절댓값 순서(4, 3, 2, 1)대로 내림차순 정렬된다.",
            meta: { set: 10, orderInSet: 4, skillTag: "[결과예측]", difficulty: "medium", topic: "sorted key" }
        }
    ]
};

if (typeof window !== 'undefined') window.set4 = set4;
