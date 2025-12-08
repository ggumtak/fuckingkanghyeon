/**
 * Quiz 9 Data - 난이도 상 30개 (핵심 로직/포인터 갱신/예외 분기)
 */

const quiz9Data = {
    id: '9',
    title: '9회차: 핵심 로직 (상)',
    total: 30,
    answers: [
        "self.link = None",
        "current = start",
        'print("(빈 리스트)")',
        'print("현재 리스트:", end=\' \')',
        "while current.link is not None:",
        "result = []",
        "while current is not None:",
        "global head",
        "head = node",
        "current = head",
        "current.link = node",
        "node.data = insertData",
        "head = node",
        "node.link = head",
        "while current.link is not None:",
        "pre.link = node",
        "current.link = node",
        'print("인덱스는 0 이상이어야 합니다.")',
        "newNode.data = data",
        "head = newNode",
        "currentIndex += 1",
        "newNode.link = current.link",
        "head = head.link",
        "pre.link = current.link",
        "head = None",
        "indexes.append(idx)",
        "data_list = get_list_data()",
        "f.write(str(item) + '\\n')",
        "lines = f.readlines()",
        "head = None"
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="variable">self</span>):
        <span class="variable">self</span>.data = <span class="keyword">None</span>
        ( 1 )

<span class="keyword">def</span> <span class="function">printNodes</span>(<span class="variable">start</span>):
    <span class="string">"""현재 연결 리스트 전체를 출력"""</span>
    ( 2 )
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="keyword">None</span>:
        ( 3 )
        <span class="keyword">return</span>
    ( 4 )
    <span class="builtin">print</span>(current.data, end=<span class="string">' '</span>)
    ( 5 )
        current = current.link
        <span class="builtin">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="builtin">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    <span class="string">"""연결 리스트의 data들을 파이썬 리스트로 반환"""</span>
    ( 6 )
    current = head
    ( 7 )
        result.append(current.data)
        current = current.link
    <span class="keyword">return</span> result

<span class="keyword">def</span> <span class="function">appendNode</span>(<span class="variable">newData</span>):
    <span class="string">"""맨 뒤에 노드 추가"""</span>
    ( 8 )
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        ( 9 )
        <span class="keyword">return</span>
    ( 10 )
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        current = current.link
    ( 11 )

<span class="keyword">def</span> <span class="function">insertNode</span>(<span class="variable">findData</span>, <span class="variable">insertData</span>):
    <span class="string">"""특정 데이터 앞에 삽입, 못 찾으면 맨 뒤에 추가"""</span>
    <span class="keyword">global</span> head
    
    <span class="comment"># 리스트가 비어 있을 경우</span>
    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        node = Node()
        ( 12 )
        ( 13 )
        <span class="keyword">return</span>

    <span class="comment"># 첫 번째 노드가 findData인 경우 (맨 앞 삽입)</span>
    <span class="keyword">if</span> head.data == findData:
        node = Node()
        node.data = insertData
        ( 14 )
        head = node
        <span class="keyword">return</span>

    <span class="comment"># 그 외 노드 탐색</span>
    current = head
    ( 15 )
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == findData:
            node = Node()
            node.data = insertData
            node.link = current
            ( 16 )
            <span class="keyword">return</span>

    <span class="comment"># findData를 끝까지 못 찾으면 맨 뒤에 추가</span>
    node = Node()
    node.data = insertData
    ( 17 )

<span class="keyword">def</span> <span class="function">insertAt</span>(<span class="variable">index</span>, <span class="variable">data</span>):
    <span class="string">"""특정 인덱스 위치에 노드 삽입"""</span>
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> index < <span class="number">0</span>:
        ( 18 )
        <span class="keyword">return</span>

    newNode = Node()
    ( 19 )

    <span class="comment"># 인덱스가 0 (맨 앞 삽입)</span>
    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        ( 20 )
        <span class="keyword">return</span>

    <span class="comment"># 중간 또는 끝 삽입을 위해 순회</span>
    current = head
    currentIndex = <span class="number">0</span>
    
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span> <span class="keyword">and</span> currentIndex < index - <span class="number">1</span>:
        current = current.link
        ( 21 )
    
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="keyword">None</span>:
        <span class="builtin">print</span>(<span class="string">"인덱스가 리스트의 길이를 초과했습니다."</span>)
        <span class="keyword">return</span>

    <span class="comment"># 삽입 실행</span>
    ( 22 )
    current.link = newNode

<span class="keyword">def</span> <span class="function">deleteNode</span>(<span class="variable">deleteData</span>):
    <span class="string">"""특정 데이터 삭제"""</span>
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        <span class="builtin">print</span>(<span class="string">"삭제할 노드가 없습니다.(빈 리스트)"</span>)
        <span class="keyword">return</span>

    <span class="comment"># 첫 번째 노드가 삭제 대상인 경우</span>
    <span class="keyword">if</span> head.data == deleteData:
        current = head
        ( 23 )
        <span class="keyword">del</span>(current)
        <span class="keyword">return</span>

    <span class="comment"># 그 외 노드 탐색</span>
    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            ( 24 )
            <span class="keyword">del</span>(current)
            <span class="keyword">return</span>

    <span class="builtin">print</span>(<span class="string">f"'{deleteData}' 데이터를 찾을 수 없습니다."</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="string">"""리스트 전체 초기화"""</span>
    <span class="keyword">global</span> head
    ( 25 )
    <span class="builtin">print</span>(<span class="string">"리스트가 초기화되었습니다."</span>)

<span class="keyword">def</span> <span class="function">searchNode</span>(<span class="variable">target</span>):
    <span class="string">"""target을 검색해서 인덱스 리스트 반환"""</span>
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span>:
        <span class="keyword">if</span> current.data == target:
            ( 26 )
        current = current.link
        idx += <span class="number">1</span>
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(<span class="variable">filename</span>):
    <span class="string">"""현재 리스트 데이터를 파일에 저장"""</span>
    ( 27 )
    <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            ( 28 )
    <span class="builtin">print</span>(<span class="string">f"리스트가 파일로 저장되었습니다. ({filename})"</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(<span class="variable">filename</span>):
    <span class="string">"""파일에서 데이터를 읽어 리스트 재구성"""</span>
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            ( 29 )
    <span class="keyword">except</span> FileNotFoundError:
        <span class="builtin">print</span>(<span class="string">"파일을 찾을 수 없습니다."</span>)
        <span class="keyword">return</span>

    <span class="comment"># 기존 리스트 초기화 후 다시 구성</span>
    ( 30 )
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.strip()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            appendNode(data)
    <span class="builtin">print</span>(<span class="string">f"파일에서 리스트를 불러왔습니다. ({filename})"</span>)

<span class="comment">## 전역 변수 선언 부분 ##</span>
memory = []
head, current, pre = <span class="keyword">None</span>, <span class="keyword">None</span>, <span class="keyword">None</span>`
};
