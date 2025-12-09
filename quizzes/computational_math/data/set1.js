/**
 * 전산수학 Quiz - Set 1 (ch01-q01 ~ ch01-q10)
 * 변수, 자료형, 문자열 기초
 */
const set1 = {
    setId: "set-1",
    questions: [
        {
            id: "ch01-q01",
            type: "mcq",
            prompt: "변수 이름으로 사용 가능한 것은?",
            options: ["① $dollar", "② False", "③ abc", "④ 1cde"],
            correctIndex: 2,
            explanation: "파이썬 변수명은 문자로 시작해야 하며, 숫자로 시작할 수 없다. 특수문자는 `_`만 허용되며 `$`는 사용할 수 없다. `False`는 예약어이므로 변수명으로 불가능하다.",
            meta: { set: 1, orderInSet: 1, skillTag: "[개념응용]", difficulty: "easy", topic: "변수 명명 규칙" }
        },
        {
            id: "ch01-q02",
            type: "mcq",
            prompt: "문자형 데이터가 아닌 것은?",
            options: ["① '10000'", "② 10000", "③ \"8500\"", "④ '사칙 연산의 결과'"],
            correctIndex: 1,
            explanation: "따옴표로 둘러싸이지 않은 숫자 `10000`은 정수형(int) 데이터이다.",
            meta: { set: 1, orderInSet: 2, skillTag: "[개념응용]", difficulty: "easy", topic: "자료형" }
        },
        {
            id: "ch01-q03",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nvariable = 'Hello Python'\nprint(variable[0], variable[-1], variable[1])\n```",
            options: ["① H n e", "② H o e", "③ Hello", "④ Hello Python"],
            correctIndex: 0,
            explanation: "`variable[0]`은 첫 글자 'H', `variable[-1]`은 마지막 글자 'n', `variable[1]`은 두 번째 글자 'e'이다.",
            meta: { set: 1, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "문자열 인덱싱" }
        },
        {
            id: "ch01-q04",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\ncompany_name = \"Samsung\"\n\"I have %s stocks.\" % company_name\n```",
            options: ["① 'I have 5 stocks.'", "② 'I have Samsung stocks.'", "③ 'I have 5 Samsung stocks.'", "④ '41 T To estio'"],
            correctIndex: 1,
            explanation: "문자열 포매팅 연산자 `%s` 자리에 `company_name` 변수의 값인 \"Samsung\"이 대입된다.",
            meta: { set: 1, orderInSet: 4, skillTag: "[결과예측]", difficulty: "easy", topic: "문자열 포매팅" }
        },
        {
            id: "ch01-q05",
            type: "mcq",
            prompt: "실행 결과가 틀린 것은?",
            options: ["① print('%5d' % 100) →   100", "② print('%5d' % 1) →     1", "③ print('%-5d' % 1) → 10000", "④ print('%05d' % 1) → 00001"],
            correctIndex: 2,
            explanation: "`%-5d`는 왼쪽 정렬을 의미하며 뒤에 공백이 채워져야 한다. `10000`이 아니라 `1    `과 같이 출력된다.",
            meta: { set: 1, orderInSet: 5, skillTag: "[디버깅]", difficulty: "medium", topic: "문자열 포매팅 옵션" }
        },
        {
            id: "ch01-q06",
            type: "mcq",
            prompt: "다음은 f 문자열 포매팅을 사용한 것이다. 실행 결과를 보고 밑줄에 들어갈 내용으로 옳은 것은?\n\n```python\ncompany_name = \"Samsung\"\nprice = \"85,000\"\nnew_price = \"100,000\"\nstock_price = f\"\"\"__________\n{price}\n__________\"\"\"\nprint(stock_price)\n```\n\n**[실행 결과]**\n```\nSamsung\n85,000\n100,000\n```",
            options: ["① {stock_price}, {price}", "② {price}, {new_price}", "③ {company_name}, {price}", "④ {company_name}, {new_price}"],
            correctIndex: 3,
            explanation: "실행 결과의 첫 줄은 `company_name`(\"Samsung\"), 세 번째 줄은 `new_price`(\"100,000\")에 해당한다.",
            meta: { set: 2, orderInSet: 1, skillTag: "[빈칸채우기]", difficulty: "medium", topic: "f-string" }
        },
        {
            id: "ch01-q07",
            type: "mcq",
            prompt: "문자열의 첫 글자만 대문자로 변환하는 함수는?",
            options: ["① count", "② find", "③ capitalize", "④ upper"],
            correctIndex: 2,
            explanation: "`capitalize()`는 첫 글자만 대문자로, 나머지는 소문자로 변환한다. `upper()`는 전체를 대문자로 변환한다.",
            meta: { set: 2, orderInSet: 2, skillTag: "[개념응용]", difficulty: "easy", topic: "문자열 함수" }
        },
        {
            id: "ch01-q08",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\nsingle_string = \"To be, or not to be, that is the question\"\ntext = single_string\ntext.replace(\"question\", \"QUESTION\")\n```",
            options: ["① 'TO BE, OR NOT TO BE, THAT IS THE QUESTION'", "② 'To be, or not to be, that is the QUESTION'", "③ 'to be, or not to be, that is the question'", "④ 'To Be, Or Not To Be, That Is The Question'"],
            correctIndex: 1,
            explanation: "`replace` 함수는 대소문자를 구분하여 일치하는 문자열을 변경한다. 결과값(반환값)을 묻는 문제라면 변경된 문자열이 정답이다.",
            meta: { set: 2, orderInSet: 3, skillTag: "[결과예측]", difficulty: "easy", topic: "문자열 수정" }
        },
        {
            id: "ch01-q09",
            type: "mcq",
            prompt: "다음 중 공백을 기준으로 문자열을 단어 단위로 나누는 함수는?",
            options: ["① split", "② strip", "③ find", "④ count"],
            correctIndex: 0,
            explanation: "`split()`은 기본적으로 공백을 기준으로 문자열을 쪼개어 리스트로 반환한다.",
            meta: { set: 2, orderInSet: 4, skillTag: "[개념응용]", difficulty: "easy", topic: "문자열 분리" }
        },
        {
            id: "ch01-q10",
            type: "mcq",
            prompt: "다음 코드를 실행한 결과는?\n\n```python\n'https://www.hanbit.co.kr/'.strip('https:/')\n```",
            options: ["① https://www.hanbit.co.kr", "② www.hanbit.co.kr", "③ www.hanbit", "④ http://www.hanbit"],
            correctIndex: 1,
            explanation: "`strip`은 인자로 전달된 문자열에 포함된 **모든 문자**를 양 끝에서 제거한다. `h,t,p,s,:,/` 문자들이 앞뒤에서 제거되어 `www.hanbit.co.kr`만 남는다.",
            meta: { set: 2, orderInSet: 5, skillTag: "[결과예측]", difficulty: "medium", topic: "문자열 제거" }
        }
    ]
};

if (typeof window !== 'undefined') window.set1 = set1;
