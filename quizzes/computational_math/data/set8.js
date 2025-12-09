/**
 * 전산수학 Quiz - Set 8 (ch08-q01 ~ ch09-q10)
 * Numpy 배열, 연산
 */
const set8 = {
    setId: "set-8",
    questions: [
        { id: "ch08-q01", type: "mcq", prompt: "다음 코드의 실행 결과로 옳은 것은?\n\n```python\nimport numpy as np\na = np.arange(3)\nprint(a)\n```", options: ["① [1 2 3]", "② [3 2 1]", "③ [0 1 2]", "④ [2 1 0]"], correctIndex: 2, explanation: "`arange(3)`은 0부터 3 직전까지인 0, 1, 2를 생성한다." },
        { id: "ch08-q04", type: "mcq", prompt: "다음 배열 `m`의 `shape` 속성값은?\n\n```python\nm = np.array([[0, 1, 2],\n              [3, 4, 5]])\nprint(m.shape)\n```", options: ["① (3, 3)", "② (2, 3)", "③ (3, 2)", "④ (2, 2)"], correctIndex: 1, explanation: "2행 3열의 구조를 가지므로 `(2, 3)`이다." },
        { id: "ch08-q06", type: "mcq", prompt: "다음 코드의 실행 결과로 옳은 것은?\n\n```python\nnp.arange(2, 6, 3)\n```", options: ["① array([0, 3])", "② array([1, 4])", "③ array([2, 5])", "④ array([2, 6])"], correctIndex: 2, explanation: "2부터 시작하여 3씩 증가하므로 2, 5가 생성된다." },
        { id: "ch08-q10", type: "mcq", prompt: "다음 코드의 실행 결과는?\n\n```python\nm1 = np.arange(6)\nm2 = m1.reshape(6, 1)\nprint(m2.shape)\n```", options: ["① (1, 1)", "② (1, )", "③ (6, 1)", "④ (1, 6)"], correctIndex: 2, explanation: "6개 요소를 6행 1열로 재구조화했으므로 `(6, 1)`이다." },
        { id: "ch08-q14", type: "mcq", prompt: "다음 코드의 실행 결과는?\n\n```python\nd = np.arange(6)\nprint(d[-2])\n```", options: ["① 0", "② 1", "③ 4", "④ 5"], correctIndex: 2, explanation: "`[0, 1, 2, 3, 4, 5]`에서 끝에서 두 번째 값은 4이다." },
        { id: "ch08-q15", type: "mcq", prompt: "다음 코드의 실행 결과는?\n\n```python\nd = np.arange(12).reshape(3, 4)\nprint(d[2, 1])\n```", options: ["① 0", "② 1", "③ 4", "④ 9"], correctIndex: 3, explanation: "2행 1열(0-indexed)은 9이다." },
        { id: "ch08-q18", type: "mcq", prompt: "다음 코드의 실행 결과는?\n\n```python\na = np.array([1, 2, 3, 4, 5, 6])\nprint(a[a > 2])\n```", options: ["① [1 2]", "② [0 1 2]", "③ [3 3 3 3]", "④ [3 4 5 6]"], correctIndex: 3, explanation: "불리언 인덱싱으로 2보다 큰 값들만 필터링한다." },
        { id: "ch08-q21", type: "mcq", prompt: "다음 코드의 실행 결과는?\n\n```python\na = np.arange(1, 7)\na[[1, 3, 5, 2]]\n```", options: ["① array([1, 3, 5, 2])", "② array([2, 4, 6, 3])", "③ array([1, 4, 2, 3])", "④ array([1, 2, 3, 4])"], correctIndex: 1, explanation: "팬시 인덱싱으로 인덱스 1(값2), 3(값4), 5(값6), 2(값3)을 가져온다." },
        { id: "ch09-q04", type: "mcq", prompt: "다음 코드의 결과로 옳은 것은?\n\n```python\nHong1 = [80, 90]\nHong2 = [70, 80]\nHong_S = [i + j for i, j in zip(Hong1, Hong2)]\nprint(Hong_S)\n```", options: ["① [10, 20]", "② [100, 170]", "③ [150, 170]", "④ [170, 150]"], correctIndex: 2, explanation: "80+70=150, 90+80=170." },
        { id: "ch09-q05", type: "mcq", prompt: "다음 코드의 결과로 옳은 것은?\n\n```python\nA1 = np.array([1, 2, 3, 4, 5])\nB = A1 * 2\nprint(B)\n```", options: ["① [10 8 6 4 2]", "② [2 2 2 2 2]", "③ [2 8 6 10 8]", "④ [2 4 6 8 10]"], correctIndex: 3, explanation: "Numpy 배열에 스칼라를 곱하면 모든 요소에 곱해진다(브로드캐스팅)." },
        { id: "ch09-q07", type: "mcq", prompt: "다음 코드의 결과로 옳은 것은?\n\n```python\nnpx1 = np.array([1, 2, 3])\nnpy1 = np.array([4, 5, 6])\nsum(npx1 * npy1)\n```", options: ["① 32", "② 120", "③ 6", "④ 15"], correctIndex: 0, explanation: "요소별 곱: [4, 10, 18]. 합: 4+10+18 = 32." },
        { id: "ch09-q09", type: "mcq", prompt: "다음 코드의 결과로 옳은 것은?\n\n```python\ndef vector_subtract(v, w):\n    return [v_i - w_i for v_i, w_i in zip(v, w)]\n\ndef sum_of_squares(v):\n    return sum(v_i ** 2 for v_i in v)\n\ndef squared_distance(v, w):\n    return sum_of_squares(vector_subtract(v, w))\n\nv = [1, 2]\nw = [3, 4]\nsquared_distance(v, w)\n```", options: ["① 12", "② 8", "③ 15", "④ 20"], correctIndex: 1, explanation: "차이 벡터: [-2, -2]. 제곱합: 4+4 = 8." },
        { id: "ch09-q10", type: "mcq", prompt: "다음 코드(평균제곱오차, MSE)의 결과로 옳은 것은?\n\n```python\ny = [1, 1, 0, 1, 0, 1, 0, 1, 0, 0]\nt = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0]\ndef mean_squared_error(y, t):\n    return 0.5 * np.sum((y - t) ** 2)\nmean_squared_error(np.array(y), np.array(t))\n```", options: ["① 3.0", "② 4.0", "③ 2.0", "④ 5.0"], correctIndex: 2, explanation: "다른 부분은 4곳. 차이 제곱 합은 4. 0.5 * 4 = 2.0." }
    ]
};

if (typeof window !== 'undefined') window.set8 = set8;
