/**
 * 3회차 퀴즈 데이터: 내장함수
 */
const quiz3Data = {
    id: '3',
    title: '3회차: 내장함수',
    total: 20,
    answers: ['def', 'is', 'is not', 'print', 'append', 'global', 'and', '+=', 'del', '+=', 'open', 'str', 'try', 'except', 'strip', '__main__', 'int', 'ValueError', 'lower', 'indexes'],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    ( 1 ) <span class="function">__init__</span>(self):
        self.data = <span class="keyword">None</span>
        self.link = <span class="keyword">None</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(start):
    current = start
    <span class="keyword">if</span> current ( 2 ) <span class="keyword">None</span>:
        <span class="keyword">return</span>
    <span class="function">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="keyword">while</span> current.link ( 3 ) <span class="keyword">None</span>:
        current = current.link
        <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    ( 4 )() <span class="comment"># 줄바꿈용</span>

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    result = []
    current = head
    <span class="keyword">while</span> current <span class="keyword">is not None</span>:
        result.( 5 )(current.data)
        current = current.link
    <span class="keyword">return</span> result

<span class="keyword">def</span> <span class="function">appendNode</span>(newData):
    ( 6 ) head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        head = node
        <span class="keyword">return</span>
    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        current = current.link
    current.link = node

<span class="keyword">def</span> <span class="function">insertAt</span>(index, data):
    <span class="keyword">global</span> head
    <span class="keyword">if</span> index < <span class="number">0</span>:
        <span class="keyword">return</span>

    newNode = Node()
    newNode.data = data

    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        head = newNode
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not None</span> ( 7 ) currentIndex < index - <span class="number">1</span>:
        current = current.link
        currentIndex ( 8 ) <span class="number">1</span>
    <span class="keyword">if</span> current <span class="keyword">is None</span>:
        <span class="keyword">return</span>

    newNode.link = current.link
    current.link = newNode

<span class="keyword">def</span> <span class="function">deleteNode</span>(deleteData):
    <span class="keyword">global</span> head, current, pre
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = head.link
        ( 9 )(current)
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            pre.link = current.link
            <span class="keyword">del</span>(current)
            <span class="keyword">return</span>

<span class="keyword">def</span> <span class="function">searchNode</span>(target):
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not None</span>:
        <span class="keyword">if</span> current.data == target:
            indexes.append(idx)
        current = current.link
        idx ( 10 ) <span class="number">1</span>
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(filename):
    data_list = get_list_data()
    <span class="keyword">with</span> ( 11 )(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.write(( 12 )(item) + <span class="string">'\\n'</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(filename):
    <span class="keyword">global</span> head
    ( 13 ):
        <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.readlines()
    ( 14 ) FileNotFoundError:
        <span class="keyword">return</span>

    head = <span class="keyword">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.( 15 )()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            appendNode(data)

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"( 16 )"</span>:
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    <span class="keyword">for</span> data <span class="keyword">in</span> dataArray:
        appendNode(data)
    printNodes(head)

    select = <span class="number">-1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="keyword">try</span>:
            select = ( 17 )(<span class="function">input</span>(<span class="string">"메뉴 선택: "</span>))
        <span class="keyword">except</span> ( 18 ):
            <span class="keyword">continue</span>

        <span class="keyword">if</span> select == <span class="number">4</span>:
            delData = <span class="function">input</span>(<span class="string">"삭제: "</span>)
            confirm = <span class="function">input</span>(<span class="string">"확인(y/n): "</span>)
            <span class="keyword">if</span> confirm.( 19 )() == <span class="string">'y'</span>:
                deleteNode(delData)

        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="function">input</span>(<span class="string">"검색: "</span>)
            indexes = searchNode(data)
            <span class="keyword">if</span> ( 20 ):
                <span class="function">print</span>(<span class="string">f"인덱스: {indexes}"</span>)
            <span class="keyword">else</span>:
                <span class="function">print</span>(<span class="string">"없음"</span>)`
};
