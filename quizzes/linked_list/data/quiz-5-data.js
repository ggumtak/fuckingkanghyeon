/**
 * Quiz 5: Logic Flow & Pointers (포인터 연결과 흐름 제어)
 * Total: 30 questions
 */
const quiz5Data = {
    id: '5',
    title: '5회차: 포인터 연결과 흐름 제어',
    total: 30,
    answers: [
        'current.link is not None', 'current.link', 'current.link', 'head is None',
        'current.link is not None', 'current.link', 'head', 'head', 'current', 'pre.link',
        'current.link', 'newNode', 'currentIndex < index - 1', 'current.link', 'current.link',
        'head.link', 'pre.link', 'current', 'current is not None', 'current.link',
        "str(item) + '\\n'", "data != ''", 'appendNode', 'insertNode', 'insertAt',
        'ValueError', 'confirm.lower()', 'deleteNode', 'clearList', 'searchNode'
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(self):
        self.data = <span class="keyword">None</span>
        self.link = <span class="keyword">None</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(start):
    current = start
    <span class="keyword">if</span> current <span class="keyword">is None</span>:
        <span class="keyword">return</span>
    <span class="comment"># (출력 생략)</span>
    <span class="keyword">while</span> ( 1 ):  <span class="comment"># 반복 조건</span>
        current = ( 2 )
        <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="function">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    result = []
    current = head
    <span class="keyword">while</span> current <span class="keyword">is not None</span>:
        result.append(current.data)
        current = ( 3 )
    <span class="keyword">return</span> result

<span class="keyword">def</span> <span class="function">appendNode</span>(newData):
    <span class="keyword">global</span> head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> ( 4 ): <span class="comment"># 헤드 체크</span>
        head = node
        <span class="keyword">return</span>
    current = head
    <span class="keyword">while</span> ( 5 ): <span class="comment"># 끝까지 이동 조건</span>
        current = current.link
    ( 6 ) = node <span class="comment"># 연결</span>

<span class="keyword">def</span> <span class="function">insertNode</span>(findData, insertData):
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        node = Node()
        node.data = insertData
        head = node
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == findData:
        node = Node()
        node.data = insertData
        node.link = ( 7 )
        ( 8 ) = node
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == findData:
            node = Node()
            node.data = insertData
            node.link = ( 9 )
            ( 10 ) = node <span class="comment"># 핵심 연결</span>
            <span class="keyword">return</span>

    node = Node()
    node.data = insertData
    ( 11 ) = node

<span class="keyword">def</span> <span class="function">insertAt</span>(index, data):
    <span class="keyword">global</span> head
    <span class="comment"># (인덱스 < 0 체크 생략)</span>
    newNode = Node()
    newNode.data = data

    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        head = ( 12 )
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    
    <span class="keyword">while</span> current <span class="keyword">is not None</span> <span class="keyword">and</span> ( 13 ):
        current = current.link
        currentIndex += <span class="number">1</span>
    
    <span class="keyword">if</span> current <span class="keyword">is None</span>:
        <span class="keyword">return</span>

    newNode.link = ( 14 )
    ( 15 ) = newNode

<span class="keyword">def</span> <span class="function">deleteNode</span>(deleteData):
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = ( 16 )
        <span class="keyword">del</span>(current)
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            ( 17 ) = current.link  <span class="comment"># 연결 건너뛰기</span>
            <span class="keyword">del</span>(( 18 ))
            <span class="keyword">return</span>

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="keyword">global</span> head
    head = <span class="keyword">None</span>

<span class="keyword">def</span> <span class="function">searchNode</span>(target):
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> ( 19 ):
        <span class="keyword">if</span> current.data == target:
            indexes.append(idx)
        current = ( 20 )
        idx += <span class="number">1</span>
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(filename):
    data_list = get_list_data()
    <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.write(( 21 ))

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
        <span class="keyword">if</span> ( 22 ): <span class="comment"># 데이터가 비어있지 않다면</span>
            appendNode(data)

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    <span class="comment"># (초기화 생략)</span>
    select = <span class="number">-1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="keyword">try</span>:
            select = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"메뉴 선택: "</span>))
        <span class="keyword">except</span> ValueError:
            <span class="keyword">continue</span>

        <span class="keyword">if</span> select == <span class="number">1</span>:
            data = <span class="function">input</span>(<span class="string">"추가할 데이터 입력: "</span>)
            ( 23 )(data) <span class="comment"># 함수 호출</span>
        
        <span class="keyword">elif</span> select == <span class="number">2</span>:
            findData = <span class="function">input</span>(<span class="string">"찾을 데이터: "</span>)
            insertData = <span class="function">input</span>(<span class="string">"삽입할 데이터: "</span>)
            ( 24 )(findData, insertData) <span class="comment"># 함수 호출</span>
        
        <span class="keyword">elif</span> select == <span class="number">3</span>:
            <span class="keyword">try</span>:
                idx = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"인덱스: "</span>))
                data = <span class="function">input</span>(<span class="string">"데이터: "</span>)
                ( 25 )(idx, data) <span class="comment"># 함수 호출</span>
            <span class="keyword">except</span> ( 26 ):
                <span class="function">print</span>(<span class="string">"인덱스는 숫자로 입력해야 합니다."</span>)

        <span class="keyword">elif</span> select == <span class="number">4</span>:
            delData = <span class="function">input</span>(<span class="string">"삭제할 데이터: "</span>)
            confirm = <span class="function">input</span>(<span class="string">f"정말로 '{delData}'를 삭제할까요? (y/n): "</span>)
            <span class="keyword">if</span> ( 27 ) == <span class="string">'y'</span>: <span class="comment"># 소문자 변환 체크</span>
                ( 28 )(delData) <span class="comment"># 함수 호출</span>
                printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">5</span>:
            ( 29 )()

        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="function">input</span>(<span class="string">"검색할 데이터 입력: "</span>)
            indexes = ( 30 )(data)
            <span class="keyword">if</span> indexes:
                <span class="function">print</span>(<span class="string">f"인덱스: {indexes}"</span>)

        <span class="keyword">elif</span> select == <span class="number">7</span>:
            filename = <span class="function">input</span>(<span class="string">"파일명: "</span>)
            saveToFile(filename)

        <span class="keyword">elif</span> select == <span class="number">8</span>:
            filename = <span class="function">input</span>(<span class="string">"파일명: "</span>)
            loadFromFile(filename)
            
        <span class="keyword">elif</span> select == <span class="number">9</span>:
            <span class="function">print</span>(<span class="string">"종료"</span>)
        
        <span class="keyword">else</span>:
            <span class="function">print</span>(<span class="string">"잘못된 선택"</span>)`
};
