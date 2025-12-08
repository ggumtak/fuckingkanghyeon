/**
 * Quiz 4: Vocabulary & Basic Syntax (문법 구조와 기초 변수 장악)
 * Total: 42 questions
 */
const quiz4Data = {
    id: '4',
    title: '4회차: 문법 구조와 기초 변수 장악',
    total: 42,
    answers: [
        'self.data', 'None', 'start', 'current', 'current', 'None', 'current', 'None',
        'current', 'result', 'global', 'None', 'current', 'current', 'node', 'node',
        'head', 'head', 'current', 'findData', 'pre', 'current', 'newNode', 'currentIndex',
        '1', 'newNode', 'head', 'current', 'current', 'head', 'idx', 'indexes',
        'get_list_data', "'\\n'", 'FileNotFoundError', 'strip', 'appendNode', 'ValueError',
        'head', 'indexes', 'saveToFile', 'loadFromFile'
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(self):
        ( 1 ) = <span class="keyword">None</span>        <span class="comment"># 데이터 초기화</span>
        self.link = ( 2 )   <span class="comment"># 링크 초기화</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(start):
    <span class="string">"""현재 연결 리스트 전체를 출력"""</span>
    current = ( 3 )
    <span class="keyword">if</span> ( 4 ) <span class="keyword">is None</span>:
        <span class="function">print</span>(<span class="string">"(빈 리스트)"</span>)
        <span class="keyword">return</span>
    <span class="function">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="keyword">while</span> ( 5 ).link <span class="keyword">is not</span> ( 6 ):
        current = ( 7 ).link
        <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="function">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    result = []
    current = head
    <span class="keyword">while</span> current <span class="keyword">is not</span> ( 8 ):
        result.append(( 9 ).data)
        current = current.link
    <span class="keyword">return</span> ( 10 )

<span class="keyword">def</span> <span class="function">appendNode</span>(newData):
    <span class="string">"""맨 뒤에 노드 추가"""</span>
    ( 11 ) head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is</span> ( 12 ):
        head = node
        <span class="keyword">return</span>
    current = head
    <span class="keyword">while</span> ( 13 ).link <span class="keyword">is not None</span>:
        current = ( 14 ).link
    current.link = ( 15 )

<span class="keyword">def</span> <span class="function">insertNode</span>(findData, insertData):
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        node = Node()
        node.data = insertData
        head = ( 16 )
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == findData:
        node = Node()
        node.data = insertData
        node.link = ( 17 )
        ( 18 ) = node
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = ( 19 )
        current = current.link
        <span class="keyword">if</span> current.data == ( 20 ):
            node = Node()
            node.data = insertData
            node.link = current
            ( 21 ).link = node
            <span class="keyword">return</span>

    node = Node()
    node.data = insertData
    ( 22 ).link = node

<span class="keyword">def</span> <span class="function">insertAt</span>(index, data):
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> index < <span class="number">0</span>:
        <span class="function">print</span>(<span class="string">"인덱스는 0 이상이어야 합니다."</span>)
        <span class="keyword">return</span>

    newNode = Node()
    newNode.data = data

    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        head = ( 23 )
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    
    <span class="keyword">while</span> current <span class="keyword">is not None</span> <span class="keyword">and</span> ( 24 ) < index - <span class="number">1</span>:
        current = current.link
        currentIndex += ( 25 )
    
    <span class="keyword">if</span> current <span class="keyword">is None</span>:
        <span class="function">print</span>(<span class="string">"인덱스가 리스트의 길이를 초과했습니다."</span>)
        <span class="keyword">return</span>

    newNode.link = current.link
    current.link = ( 26 )

<span class="keyword">def</span> <span class="function">deleteNode</span>(deleteData):
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        <span class="function">print</span>(<span class="string">"삭제할 노드가 없습니다.(빈 리스트)"</span>)
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = ( 27 ).link
        <span class="keyword">del</span>(( 28 ))
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            pre.link = ( 29 ).link
            <span class="keyword">del</span>(current)
            <span class="keyword">return</span>

    <span class="function">print</span>(<span class="string">f"'{deleteData}' 데이터를 찾을 수 없습니다."</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="keyword">global</span> head
    ( 30 ) = <span class="keyword">None</span>
    <span class="function">print</span>(<span class="string">"리스트가 초기화되었습니다."</span>)

<span class="keyword">def</span> <span class="function">searchNode</span>(target):
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not None</span>:
        <span class="keyword">if</span> current.data == target:
            indexes.append(( 31 ))
        current = current.link
        idx += <span class="number">1</span>
    <span class="keyword">return</span> ( 32 )

<span class="keyword">def</span> <span class="function">saveToFile</span>(filename):
    data_list = ( 33 )()  <span class="comment"># 리스트 데이터 가져오는 함수 호출</span>
    <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.write(<span class="function">str</span>(item) + ( 34 )) <span class="comment"># 줄바꿈 문자</span>

<span class="keyword">def</span> <span class="function">loadFromFile</span>(filename):
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.readlines()
    <span class="keyword">except</span> ( 35 ):
        <span class="function">print</span>(<span class="string">"파일을 찾을 수 없습니다."</span>)
        <span class="keyword">return</span>

    head = <span class="keyword">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.( 36 )() <span class="comment"># 공백 제거</span>
        <span class="keyword">if</span> data != <span class="string">''</span>:
            ( 37 )(data) <span class="comment"># 노드 추가 함수</span>

<span class="comment">## 전역 변수 및 메인 ##</span>
memory = []
head, current, pre = <span class="keyword">None</span>, <span class="keyword">None</span>, <span class="keyword">None</span>

<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    <span class="keyword">for</span> data <span class="keyword">in</span> dataArray:
        appendNode(data)
    
    <span class="function">print</span>(<span class="string">"초기 연결 리스트:"</span>)
    printNodes(head)

    select = <span class="number">-1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="comment"># (메뉴 출력 생략)</span>
        <span class="keyword">try</span>:
            select = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"메뉴 선택: "</span>))
        <span class="keyword">except</span> ( 38 ):
            <span class="function">print</span>(<span class="string">"숫자를 입력하세요."</span>)
            <span class="keyword">continue</span>

        <span class="keyword">if</span> select == <span class="number">1</span>:
            data = <span class="function">input</span>(<span class="string">"추가할 데이터 입력: "</span>)
            appendNode(data)
            printNodes(( 39 ))
        
        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="function">input</span>(<span class="string">"검색할 데이터 입력: "</span>)
            indexes = searchNode(data)
            <span class="keyword">if</span> ( 40 ):
                <span class="function">print</span>(<span class="string">f"'{data}' 데이터는 다음 인덱스에 있습니다: {indexes}"</span>)
            <span class="keyword">else</span>:
                <span class="function">print</span>(<span class="string">f"'{data}' 데이터는 리스트에 없습니다."</span>)

        <span class="keyword">elif</span> select == <span class="number">7</span>:
            filename = <span class="function">input</span>(<span class="string">"저장할 파일 이름 입력 (예: data.txt): "</span>)
            ( 41 )(filename)

        <span class="keyword">elif</span> select == <span class="number">8</span>:
            filename = <span class="function">input</span>(<span class="string">"불러올 파일 이름 입력 (예: data.txt): "</span>)
            ( 42 )(filename)
            printNodes(head)`
};
