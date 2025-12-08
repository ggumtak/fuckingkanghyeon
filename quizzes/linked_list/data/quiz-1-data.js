/**
 * 1회차 퀴즈 데이터: 골격 & 포인터
 */
const quiz1Data = {
    id: '1',
    title: '1회차: 골격 & 포인터',
    total: 46,
    answers: ['Node', 'data', 'link', 'current', 'link', 'None', 'link', 'head', 'None', 'head', 'data', 'head', 'link', 'link', 'None', 'link', 'node', 'link', 'data', 'current', 'link', 'link', 'Node', 'head', 'None', 'newNode', 'None', 'link', 'None', 'link', 'current', 'None', 'None', 'idx', 'get_list_data', 'appendNode', 'None', 'appendNode', 'head', 'insertNode', 'idx', 'deleteNode', 'clearList', 'searchNode', 'saveToFile', 'loadFromFile'],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">( 1 )</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(self):
        self.( 2 ) = <span class="keyword">None</span>
        self.( 3 ) = <span class="keyword">None</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(start):
    current = start
    <span class="keyword">if</span> ( 4 ) <span class="keyword">is None</span>:
        <span class="keyword">return</span>
    <span class="function">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="keyword">while</span> current.( 5 ) <span class="keyword">is not</span> ( 6 ):
        current = current.( 7 )
        <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="function">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    result = []
    current = ( 8 )
    <span class="keyword">while</span> current <span class="keyword">is not</span> ( 9 ):
        result.append(current.data)
        current = current.link
    <span class="keyword">return</span> result

<span class="keyword">def</span> <span class="function">appendNode</span>(newData):
    <span class="keyword">global</span> ( 10 )
    node = Node()
    node.( 11 ) = newData
    <span class="keyword">if</span> ( 12 ) <span class="keyword">is None</span>:
        head = node
        <span class="keyword">return</span>
    current = head
    <span class="keyword">while</span> current.( 13 ) <span class="keyword">is not None</span>:
        current = current.link
    current.( 14 ) = node

<span class="keyword">def</span> <span class="function">insertNode</span>(findData, insertData):
    <span class="keyword">global</span> head
    <span class="keyword">if</span> head <span class="keyword">is</span> ( 15 ):
        node = Node()
        node.data = insertData
        head = node
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == findData:
        node = Node()
        node.data = insertData
        node.( 16 ) = head
        head = ( 17 )
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.( 18 ) <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.( 19 ) == findData:
            node = Node()
            node.data = insertData
            node.link = ( 20 )
            pre.( 21 ) = node
            <span class="keyword">return</span>

    node = Node()
    node.data = insertData
    current.( 22 ) = node

<span class="keyword">def</span> <span class="function">insertAt</span>(index, data):
    <span class="keyword">global</span> head
    <span class="keyword">if</span> index < <span class="number">0</span>:
        <span class="function">print</span>(<span class="string">"인덱스는 0 이상이어야 합니다."</span>)
        <span class="keyword">return</span>

    newNode = ( 23 )()
    newNode.data = data

    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        ( 24 ) = newNode
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> ( 25 ) <span class="keyword">and</span> currentIndex < index - <span class="number">1</span>:
        current = current.link
        currentIndex += <span class="number">1</span>
    <span class="keyword">if</span> current <span class="keyword">is None</span>:
        <span class="function">print</span>(<span class="string">"범위 초과"</span>)
        <span class="keyword">return</span>

    newNode.link = current.link
    current.link = ( 26 )

<span class="keyword">def</span> <span class="function">deleteNode</span>(deleteData):
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is</span> ( 27 ):
        <span class="function">print</span>(<span class="string">"빈 리스트"</span>)
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = head.( 28 )
        <span class="keyword">del</span>(current)
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> ( 29 ):
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            pre.link = current.( 30 )
            <span class="keyword">del</span>(( 31 ))
            <span class="keyword">return</span>

    <span class="function">print</span>(<span class="string">f"'{deleteData}' 없음"</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="keyword">global</span> head
    head = ( 32 )

<span class="keyword">def</span> <span class="function">searchNode</span>(target):
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> ( 33 ):
        <span class="keyword">if</span> current.data == target:
            indexes.append(( 34 ))
        current = current.link
        idx += <span class="number">1</span>
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(filename):
    data_list = ( 35 )()
    <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.write(<span class="function">str</span>(item) + <span class="string">'\\n'</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(filename):
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.readlines()
    <span class="keyword">except</span> FileNotFoundError:
        <span class="keyword">return</span>

    head = <span class="keyword">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.strip()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            ( 36 )(data)

<span class="comment">## 전역 변수 선언 부분 ##</span>
memory = []
head, current, pre = ( 37 ), <span class="keyword">None</span>, <span class="keyword">None</span>

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    <span class="keyword">for</span> data <span class="keyword">in</span> dataArray:
        ( 38 )(data)
    
    printNodes(( 39 ))

    select = <span class="number">-1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="keyword">try</span>:
            select = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"메뉴 선택: "</span>))
        <span class="keyword">except</span> ValueError:
            <span class="keyword">continue</span>

        <span class="keyword">if</span> select == <span class="number">1</span>:
            data = <span class="function">input</span>(<span class="string">"입력: "</span>)
            appendNode(data)
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">2</span>:
            findData = <span class="function">input</span>(<span class="string">"기준: "</span>)
            insertData = <span class="function">input</span>(<span class="string">"입력: "</span>)
            ( 40 )(findData, insertData)
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">3</span>:
            idx = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"인덱스: "</span>))
            data = <span class="function">input</span>(<span class="string">"입력: "</span>)
            insertAt(( 41 ), data)
            printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">4</span>:
            delData = <span class="function">input</span>(<span class="string">"삭제: "</span>)
            confirm = <span class="function">input</span>(<span class="string">"확인(y/n): "</span>)
            <span class="keyword">if</span> confirm.lower() == <span class="string">'y'</span>:
                ( 42 )(delData)
                printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">5</span>:
            ( 43 )()
            printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="function">input</span>(<span class="string">"검색: "</span>)
            indexes = ( 44 )(data)
            <span class="function">print</span>(indexes)

        <span class="keyword">elif</span> select == <span class="number">7</span>:
            filename = <span class="function">input</span>(<span class="string">"저장: "</span>)
            ( 45 )(filename)

        <span class="keyword">elif</span> select == <span class="number">8</span>:
            filename = <span class="function">input</span>(<span class="string">"로드: "</span>)
            ( 46 )(filename)
            printNodes(head)`
};
