/**
 * Quiz 10 Data - 완전 백지복습 (스켈레톤 + 힌트)
 * 원본 코드에서 구현 라인만 빈칸 처리, 위치 힌트 제공
 * 87개 빈칸 - 최고 난이도
 */

const quiz10Data = {
    id: '10',
    title: '10회차: 백지 스켈레톤',
    total: 87,
    answers: [
        // Node.__init__ (1-2)
        "self.data = None",
        "self.link = None",
        // printNodes (3-12)
        "current = start",
        "if current is None:",
        'print("(빈 리스트)")',
        "return",
        'print("현재 리스트:", end=\' \')',
        "print(current.data, end=' ')",
        "while current.link is not None:",
        "current = current.link",
        "print(current.data, end=' ')",
        "print()",
        // get_list_data (13-18)
        "result = []",
        "current = head",
        "while current is not None:",
        "result.append(current.data)",
        "current = current.link",
        "return result",
        // appendNode (19-28)
        "global head",
        "node = Node()",
        "node.data = newData",
        "if head is None:",
        "head = node",
        "return",
        "current = head",
        "while current.link is not None:",
        "current = current.link",
        "current.link = node",
        // insertNode (29-50)
        "global head",
        "if head is None:",
        "node = Node()",
        "node.data = insertData",
        "head = node",
        "return",
        "if head.data == findData:",
        "node = Node()",
        "node.data = insertData",
        "node.link = head",
        "head = node",
        "return",
        "current = head",
        "while current.link is not None:",
        "pre = current",
        "current = current.link",
        "if current.data == findData:",
        "node = Node()",
        "node.data = insertData",
        "node.link = current",
        "pre.link = node",
        "return",
        "node = Node()",
        "node.data = insertData",
        "current.link = node",
        // insertAt (54-68)
        "global head",
        "if index < 0:",
        'print("인덱스는 0 이상이어야 합니다.")',
        "return",
        "newNode = Node()",
        "newNode.data = data",
        "if index == 0:",
        "newNode.link = head",
        "head = newNode",
        "return",
        "current = head",
        "currentIndex = 0",
        "while current is not None and currentIndex < index - 1:",
        "current = current.link",
        "currentIndex += 1",
        // deleteNode (69-80)
        "global head, current, pre",
        "if head is None:",
        'print("삭제할 노드가 없습니다.(빈 리스트)")',
        "return",
        "if head.data == deleteData:",
        "current = head",
        "head = head.link",
        "del(current)",
        "return",
        "current = head",
        "pre.link = current.link",
        "del(current)",
        // clearList, searchNode, saveToFile, loadFromFile, 전역변수 (81-87)
        "head = None",
        "indexes = []",
        "indexes.append(idx)",
        "data_list = get_list_data()",
        "f.write(str(item) + '\\n')",
        "lines = f.readlines()",
        "memory = []",
        "head, current, pre = None, None, None"
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>

<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="variable">self</span>):
        ( 1 )  <span class="comment"># 힌트: data 초기화</span>
        ( 2 )  <span class="comment"># 힌트: link 초기화</span>


<span class="keyword">def</span> <span class="function">printNodes</span>(<span class="variable">start</span>):
    <span class="string">"""현재 연결 리스트 전체를 출력"""</span>
    ( 3 )  <span class="comment"># 힌트: start를 순회 포인터로</span>
    ( 4 )  <span class="comment"># 힌트: 빈 리스트 검사 조건</span>
        ( 5 )  <span class="comment"># 힌트: "(빈 리스트)" 출력</span>
        ( 6 )  <span class="comment"># 힌트: 함수 종료</span>

    ( 7 )  <span class="comment"># 힌트: "현재 리스트:" 출력</span>
    ( 8 )  <span class="comment"># 힌트: 첫 노드 데이터 출력</span>

    ( 9 )  <span class="comment"># 힌트: 다음 노드 있는 동안 반복</span>
        ( 10 )  <span class="comment"># 힌트: current 이동</span>
        ( 11 )  <span class="comment"># 힌트: 이동한 노드 출력</span>

    ( 12 )  <span class="comment"># 힌트: 줄바꿈</span>


<span class="keyword">def</span> <span class="function">get_list_data</span>():
    <span class="string">"""연결 리스트를 파이썬 리스트로 반환"""</span>
    ( 13 )  <span class="comment"># 힌트: 결과 리스트 생성</span>
    ( 14 )  <span class="comment"># 힌트: 순회 시작</span>

    ( 15 )  <span class="comment"># 힌트: 끝까지 순회</span>
        ( 16 )  <span class="comment"># 힌트: result에 추가</span>
        ( 17 )  <span class="comment"># 힌트: current 이동</span>

    ( 18 )  <span class="comment"># 힌트: result 반환</span>


<span class="keyword">def</span> <span class="function">appendNode</span>(<span class="variable">newData</span>):
    <span class="string">"""맨 뒤에 노드 추가"""</span>
    ( 19 )  <span class="comment"># 힌트: 전역 head 선언</span>

    ( 20 )  <span class="comment"># 힌트: 새 노드 생성</span>
    ( 21 )  <span class="comment"># 힌트: data 대입</span>

    ( 22 )  <span class="comment"># 힌트: head가 None인지</span>
        ( 23 )  <span class="comment"># 힌트: head = 새 노드</span>
        ( 24 )  <span class="comment"># 힌트: 종료</span>

    ( 25 )  <span class="comment"># 힌트: current = head</span>

    ( 26 )  <span class="comment"># 힌트: 마지막까지 이동</span>
        ( 27 )  <span class="comment"># 힌트: current 이동</span>

    ( 28 )  <span class="comment"># 힌트: 마지막 link에 연결</span>


<span class="keyword">def</span> <span class="function">insertNode</span>(<span class="variable">findData</span>, <span class="variable">insertData</span>):
    <span class="string">"""특정 데이터 앞에 삽입"""</span>
    ( 29 )  <span class="comment"># 힌트: 전역 head</span>

    <span class="comment"># 빈 리스트</span>
    ( 30 )  <span class="comment"># 힌트: head None 검사</span>
        ( 31 )  <span class="comment"># 힌트: 새 노드</span>
        ( 32 )  <span class="comment"># 힌트: data 대입</span>
        ( 33 )  <span class="comment"># 힌트: head 갱신</span>
        ( 34 )  <span class="comment"># 힌트: 종료</span>

    <span class="comment"># 첫 번째 노드가 findData</span>
    ( 35 )  <span class="comment"># 힌트: head.data == findData</span>
        ( 36 )  <span class="comment"># 힌트: 새 노드</span>
        ( 37 )  <span class="comment"># 힌트: data 대입</span>
        ( 38 )  <span class="comment"># 힌트: link = head</span>
        ( 39 )  <span class="comment"># 힌트: head 교체</span>
        ( 40 )  <span class="comment"># 힌트: 종료</span>

    <span class="comment"># 그 외 탐색</span>
    ( 41 )  <span class="comment"># 힌트: current = head</span>

    ( 42 )  <span class="comment"># 힌트: while 조건</span>
        ( 43 )  <span class="comment"># 힌트: pre = current</span>
        ( 44 )  <span class="comment"># 힌트: current 이동</span>

        ( 45 )  <span class="comment"># 힌트: findData 발견 검사</span>
            ( 46 )  <span class="comment"># 힌트: 새 노드</span>
            ( 47 )  <span class="comment"># 힌트: data 대입</span>
            ( 48 )  <span class="comment"># 힌트: link = current</span>
            ( 49 )  <span class="comment"># 힌트: pre.link 연결</span>
            ( 50 )  <span class="comment"># 힌트: 종료</span>

    <span class="comment"># 못 찾으면 맨 뒤 추가</span>
    ( 51 )  <span class="comment"># 힌트: 새 노드</span>
    ( 52 )  <span class="comment"># 힌트: data 대입</span>
    ( 53 )  <span class="comment"># 힌트: current.link 연결</span>


<span class="keyword">def</span> <span class="function">insertAt</span>(<span class="variable">index</span>, <span class="variable">data</span>):
    <span class="string">"""특정 인덱스에 삽입"""</span>
    ( 54 )  <span class="comment"># 힌트: 전역 head</span>

    ( 55 )  <span class="comment"># 힌트: index < 0 검사</span>
        ( 56 )  <span class="comment"># 힌트: 에러 메시지</span>
        ( 57 )  <span class="comment"># 힌트: 종료</span>

    ( 58 )  <span class="comment"># 힌트: 새 노드</span>
    ( 59 )  <span class="comment"># 힌트: data 대입</span>

    <span class="comment"># 맨 앞 삽입</span>
    ( 60 )  <span class="comment"># 힌트: index == 0</span>
        ( 61 )  <span class="comment"># 힌트: link = head</span>
        ( 62 )  <span class="comment"># 힌트: head 갱신</span>
        ( 63 )  <span class="comment"># 힌트: 종료</span>

    <span class="comment"># 중간/끝 삽입</span>
    ( 64 )  <span class="comment"># 힌트: current = head</span>
    ( 65 )  <span class="comment"># 힌트: currentIndex = 0</span>

    ( 66 )  <span class="comment"># 힌트: while 조건</span>
        ( 67 )  <span class="comment"># 힌트: current 이동</span>
        ( 68 )  <span class="comment"># 힌트: index 증가</span>


<span class="keyword">def</span> <span class="function">deleteNode</span>(<span class="variable">deleteData</span>):
    <span class="string">"""특정 데이터 삭제"""</span>
    ( 69 )  <span class="comment"># 힌트: 전역 변수들</span>

    ( 70 )  <span class="comment"># 힌트: 빈 리스트 검사</span>
        ( 71 )  <span class="comment"># 힌트: 메시지</span>
        ( 72 )  <span class="comment"># 힌트: 종료</span>

    <span class="comment"># 첫 노드가 삭제 대상</span>
    ( 73 )  <span class="comment"># 힌트: head.data 검사</span>
        ( 74 )  <span class="comment"># 힌트: current = head</span>
        ( 75 )  <span class="comment"># 힌트: head 이동</span>
        ( 76 )  <span class="comment"># 힌트: 삭제</span>
        ( 77 )  <span class="comment"># 힌트: 종료</span>

    <span class="comment"># 그 외 탐색</span>
    ( 78 )  <span class="comment"># 힌트: current = head</span>

    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            ( 79 )  <span class="comment"># 힌트: pre.link 연결</span>
            ( 80 )  <span class="comment"># 힌트: 삭제</span>


<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="string">"""리스트 전체 초기화"""</span>
    <span class="keyword">global</span> head
    ( 81 )  <span class="comment"># 힌트: head = None</span>
    <span class="builtin">print</span>(<span class="string">"리스트가 초기화되었습니다."</span>)


<span class="keyword">def</span> <span class="function">searchNode</span>(<span class="variable">target</span>):
    <span class="string">"""검색해서 인덱스 반환"""</span>
    <span class="keyword">global</span> head
    ( 82 )  <span class="comment"># 힌트: indexes 리스트 생성</span>
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span>:
        <span class="keyword">if</span> current.data == target:
            ( 83 )  <span class="comment"># 힌트: append</span>
        current = current.link
        idx += <span class="number">1</span>
    <span class="keyword">return</span> indexes


<span class="keyword">def</span> <span class="function">saveToFile</span>(<span class="variable">filename</span>):
    <span class="string">"""파일에 저장"""</span>
    ( 84 )  <span class="comment"># 힌트: get_list_data()</span>
    <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            ( 85 )  <span class="comment"># 힌트: f.write</span>


<span class="keyword">def</span> <span class="function">loadFromFile</span>(<span class="variable">filename</span>):
    <span class="string">"""파일에서 불러오기"""</span>
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            ( 86 )  <span class="comment"># 힌트: readlines</span>
    <span class="keyword">except</span> FileNotFoundError:
        <span class="builtin">print</span>(<span class="string">"파일을 찾을 수 없습니다."</span>)


<span class="comment">## 전역 변수 선언 부분 ##</span>
( 87 )  <span class="comment"># 힌트: memory = []</span>
( 88 )  <span class="comment"># 힌트: head, current, pre 초기화</span>`
};
