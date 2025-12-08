/**
 * 2회차 퀴즈 데이터: 흐름 제어
 */
const quiz2Data = {
    id: '2',
    title: '2회차: 흐름 제어',
    total: 35,
    answers: ['data', 'link', 'if', 'return', 'data', 'while', 'link', 'data', 'data', 'return', 'global', 'return', 'node', '==', '==', 'current', '<', '==', 'and', '+=', 'newNode', 'del', 'return', 'None', 'idx', 'return', 'with', 'in', 'except', '!=', 'data', '!=', 'continue', 'elif', 'else'],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(self):
        self.( 1 ) = <span class="keyword">None</span>
        self.( 2 ) = <span class="keyword">None</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(start):
    current = start
    ( 3 ) current <span class="keyword">is None</span>:
        <span class="function">print</span>(<span class="string">"(빈 리스트)"</span>)
        ( 4 )
    <span class="function">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="function">print</span>(current.( 5 ), end=<span class="string">' '</span>)
    ( 6 ) current.link <span class="keyword">is not None</span>:
        current = current.( 7 )
        <span class="function">print</span>(current.( 8 ), end=<span class="string">' '</span>)
    <span class="function">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    result = []
    current = head
    <span class="keyword">while</span> current <span class="keyword">is not None</span>:
        result.append(current.( 9 ))
        current = current.link
    ( 10 ) result

<span class="keyword">def</span> <span class="function">appendNode</span>(newData):
    ( 11 ) head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        head = node
        ( 12 )
    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        current = current.link
    current.link = ( 13 )

<span class="keyword">def</span> <span class="function">insertNode</span>(findData, insertData):
    <span class="keyword">global</span> head
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        node = Node()
        node.data = insertData
        head = node
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data ( 14 ) findData:
        node = Node()
        node.data = insertData
        node.link = head
        head = node
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data ( 15 ) findData:
            node = Node()
            node.data = insertData
            node.link = ( 16 )
            pre.link = node
            <span class="keyword">return</span>

    node = Node()
    node.data = insertData
    current.link = node

<span class="keyword">def</span> <span class="function">insertAt</span>(index, data):
    <span class="keyword">global</span> head
    <span class="keyword">if</span> index ( 17 ) <span class="number">0</span>:
        <span class="keyword">return</span>

    newNode = Node()
    newNode.data = data

    <span class="keyword">if</span> index ( 18 ) <span class="number">0</span>:
        newNode.link = head
        head = newNode
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not None</span> ( 19 ) currentIndex < index - <span class="number">1</span>:
        current = current.link
        currentIndex ( 20 ) <span class="number">1</span>
    <span class="keyword">if</span> current <span class="keyword">is None</span>:
        <span class="keyword">return</span>

    newNode.link = current.link
    current.link = ( 21 )

<span class="keyword">def</span> <span class="function">deleteNode</span>(deleteData):
    <span class="keyword">global</span> head, current, pre
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = head.link
        ( 22 )(current)
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            pre.link = current.link
            <span class="keyword">del</span>(current)
            ( 23 )

    <span class="function">print</span>(<span class="string">f"'{deleteData}' 없음"</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="keyword">global</span> head
    head = ( 24 )

<span class="keyword">def</span> <span class="function">searchNode</span>(target):
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not None</span>:
        <span class="keyword">if</span> current.data == target:
            indexes.append(( 25 ))
        current = current.link
        idx += <span class="number">1</span>
    ( 26 ) indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(filename):
    data_list = get_list_data()
    ( 27 ) <span class="function">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item ( 28 ) data_list:
            f.write(<span class="function">str</span>(item) + <span class="string">'\\n'</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(filename):
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.readlines()
    ( 29 ) FileNotFoundError:
        <span class="keyword">return</span>

    head = <span class="keyword">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.strip()
        <span class="keyword">if</span> data ( 30 ) <span class="string">''</span>:
            appendNode(data)

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    <span class="keyword">for</span> data <span class="keyword">in</span> dataArray:
        appendNode(( 31 ))
    printNodes(head)

    select = <span class="number">-1</span>
    <span class="keyword">while</span> select ( 32 ) <span class="number">9</span>:
        <span class="keyword">try</span>:
            select = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"메뉴 선택: "</span>))
        <span class="keyword">except</span> ValueError:
            ( 33 )

        <span class="keyword">if</span> select == <span class="number">1</span>:
            data = <span class="function">input</span>(<span class="string">"입력: "</span>)
            appendNode(data)
        
        ( 34 ) select == <span class="number">2</span>:
            findData = <span class="function">input</span>(<span class="string">"찾을값: "</span>)
            insertData = <span class="function">input</span>(<span class="string">"삽입값: "</span>)
            insertNode(findData, insertData)

        <span class="keyword">elif</span> select == <span class="number">9</span>:
            <span class="function">print</span>(<span class="string">"종료"</span>)
        
        ( 35 ):
            <span class="function">print</span>(<span class="string">"잘못된 선택"</span>)`
};
