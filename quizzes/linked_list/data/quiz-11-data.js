// Quiz 11: 12주차 종합 - Singly Linked List 전체 소스 코드 (59문제)
const quiz11Data = {
    id: '11',
    title: '11회차: 12주차 종합',
    total: 59,
    answers: [
        'Node', 'data', 'link', 'start', 'link',
        'link', 'head', 'append', 'global', 'None',
        'None', 'link', 'data', 'findData', 'head',
        'pre', 'current', 'link', 'link', 'data',
        'head', 'index', '1', 'link', 'newNode',
        'return', 'link', 'del', 'deleteData', 'link',
        'None', 'indexes', 'target', 'append', '1',
        'get_list_data', 'w', 'write', 'r', 'readlines',
        'FileNotFoundError', 'strip', 'appendNode', 'None', 'data',
        'head', '9', 'input', 'continue', 'appendNode',
        'insertNode', 'insertAt', 'lower', 'deleteNode', 'clearList',
        'searchNode', 'indexes', 'saveToFile', 'loadFromFile'
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> ( 1 )():
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="variable">self</span>):
        <span class="variable">self</span>.( 2 ) = <span class="builtin">None</span>
        <span class="variable">self</span>.( 3 ) = <span class="builtin">None</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(<span class="variable">start</span>):
    <span class="string">"""현재 연결 리스트 전체를 출력"""</span>
    current = ( 4 )
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="builtin">None</span>:
        <span class="builtin">print</span>(<span class="string">"(빈 리스트)"</span>)
        <span class="keyword">return</span>
    <span class="builtin">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="builtin">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="keyword">while</span> current.( 5 ) <span class="keyword">is not</span> <span class="builtin">None</span>:
        current = current.( 6 )
        <span class="builtin">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="builtin">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    <span class="string">"""연결 리스트의 data들을 파이썬 리스트로 반환 (파일 저장용)"""</span>
    result = []
    current = ( 7 )
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="builtin">None</span>:
        result.( 8 )(current.data)
        current = current.link
    <span class="keyword">return</span> result

<span class="keyword">def</span> <span class="function">appendNode</span>(<span class="variable">newData</span>):
    <span class="string">"""맨 뒤에 노드 추가"""</span>
    ( 9 ) head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is</span> ( 10 ):
        head = node
        <span class="keyword">return</span>
    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> ( 11 ):
        current = current.link
    current.( 12 ) = node

<span class="keyword">def</span> <span class="function">insertNode</span>(<span class="variable">findData</span>, <span class="variable">insertData</span>):
    <span class="string">"""특정 데이터 앞에 삽입, 못 찾으면 맨 뒤에 추가"""</span>
    <span class="keyword">global</span> head
    
    <span class="comment"># 리스트가 비어 있을 경우</span>
    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="builtin">None</span>:
        node = Node()
        node.( 13 ) = insertData
        head = node
        <span class="keyword">return</span>

    <span class="comment"># 첫 번째 노드가 findData인 경우 (맨 앞 삽입)</span>
    <span class="keyword">if</span> head.data == ( 14 ):
        node = Node()
        node.data = insertData
        node.link = ( 15 )
        head = node
        <span class="keyword">return</span>

    <span class="comment"># 그 외 노드 탐색</span>
    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="builtin">None</span>:
        ( 16 ) = current
        current = current.link
        <span class="keyword">if</span> current.data == findData:
            node = Node()
            node.data = insertData
            node.link = ( 17 )
            pre.( 18 ) = node
            <span class="keyword">return</span>

    <span class="comment"># findData를 끝까지 못 찾으면 맨 뒤에 추가</span>
    node = Node()
    node.data = insertData
    current.( 19 ) = node

<span class="keyword">def</span> <span class="function">insertAt</span>(<span class="variable">index</span>, <span class="variable">data</span>):
    <span class="string">"""특정 인덱스 위치에 노드 삽입"""</span>
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> index < <span class="number">0</span>:
        <span class="builtin">print</span>(<span class="string">"인덱스는 0 이상이어야 합니다."</span>)
        <span class="keyword">return</span>

    newNode = Node()
    newNode.data = ( 20 )

    <span class="comment"># 인덱스가 0 (맨 앞 삽입)</span>
    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = ( 21 )
        head = newNode
        <span class="keyword">return</span>

    <span class="comment"># 중간 또는 끝 삽입을 위해 순회</span>
    current = head
    currentIndex = <span class="number">0</span>
    
    <span class="comment"># 삽입 위치 바로 직전(index-1)까지 이동</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="builtin">None</span> <span class="keyword">and</span> currentIndex < ( 22 ) - <span class="number">1</span>:
        current = current.link
        currentIndex += ( 23 )
    
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="builtin">None</span>:
        <span class="builtin">print</span>(<span class="string">"인덱스가 리스트의 길이를 초과했습니다."</span>)
        <span class="keyword">return</span>

    <span class="comment"># 삽입 실행</span>
    newNode.link = current.( 24 )
    current.link = ( 25 )

<span class="keyword">def</span> <span class="function">deleteNode</span>(<span class="variable">deleteData</span>):
    <span class="string">"""특정 데이터 삭제"""</span>
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="builtin">None</span>:
        <span class="builtin">print</span>(<span class="string">"삭제할 노드가 없습니다.(빈 리스트)"</span>)
        ( 26 )

    <span class="comment"># 첫 번째 노드가 삭제 대상인 경우</span>
    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = head.( 27 )
        ( 28 )(current)
        <span class="keyword">return</span>

    <span class="comment"># 그 외 노드 탐색</span>
    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="builtin">None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == ( 29 ):
            pre.link = current.( 30 )
            <span class="builtin">del</span>(current)
            <span class="keyword">return</span>

    <span class="builtin">print</span>(<span class="string">f"'{deleteData}' 데이터를 찾을 수 없습니다."</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="string">"""리스트 전체 초기화"""</span>
    <span class="keyword">global</span> head
    head = ( 31 )
    <span class="builtin">print</span>(<span class="string">"리스트가 초기화되었습니다."</span>)

<span class="keyword">def</span> <span class="function">searchNode</span>(<span class="variable">target</span>):
    <span class="string">"""target을 검색해서 인덱스 리스트 반환"""</span>
    <span class="keyword">global</span> head
    ( 32 ) = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="builtin">None</span>:
        <span class="keyword">if</span> current.data == ( 33 ):
            indexes.( 34 )(idx)
        current = current.link
        idx += ( 35 )
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(<span class="variable">filename</span>):
    <span class="string">"""현재 리스트 데이터를 파일에 저장"""</span>
    data_list = ( 36 )()
    <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'( 37 )'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.( 38 )(<span class="builtin">str</span>(item) + <span class="string">'\\n'</span>)
    <span class="builtin">print</span>(<span class="string">f"리스트가 파일로 저장되었습니다. ({filename})"</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(<span class="variable">filename</span>):
    <span class="string">"""파일에서 데이터를 읽어 리스트 재구성"""</span>
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'( 39 )'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.( 40 )()
    <span class="keyword">except</span> ( 41 ):
        <span class="builtin">print</span>(<span class="string">"파일을 찾을 수 없습니다."</span>)
        <span class="keyword">return</span>

    <span class="comment"># 기존 리스트 초기화 후 다시 구성</span>
    head = <span class="builtin">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.( 42 )()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            ( 43 )(data)
    <span class="builtin">print</span>(<span class="string">f"파일에서 리스트를 불러왔습니다. ({filename})"</span>)

<span class="comment">## 전역 변수 선언 부분 ##</span>
memory = []
head, current, pre = ( 44 ), <span class="builtin">None</span>, <span class="builtin">None</span>

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    <span class="comment"># 초기 데이터 셋팅</span>
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    <span class="keyword">for</span> data <span class="keyword">in</span> dataArray:
        appendNode(( 45 ))
    
    <span class="builtin">print</span>(<span class="string">"초기 연결 리스트:"</span>)
    printNodes(( 46 ))

    <span class="comment"># 사용자 입력 기반 메뉴</span>
    select = <span class="number">-1</span>
    <span class="keyword">while</span> select != ( 47 ):
        <span class="builtin">print</span>(<span class="string">"\\n--- 연결 리스트 메뉴 ---"</span>)
        <span class="builtin">print</span>(<span class="string">"1: 추가 (맨 뒤)"</span>)
        <span class="comment"># ... (메뉴 출력 생략) ...</span>
        <span class="builtin">print</span>(<span class="string">"9: 종료"</span>)

        <span class="keyword">try</span>:
            select = <span class="builtin">int</span>(( 48 )(<span class="string">"메뉴 선택: "</span>))
        <span class="keyword">except</span> ValueError:
            <span class="builtin">print</span>(<span class="string">"숫자를 입력하세요."</span>)
            ( 49 )

        <span class="keyword">if</span> select == <span class="number">1</span>:
            data = <span class="builtin">input</span>(<span class="string">"추가할 데이터 입력: "</span>)
            ( 50 )(data)
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">2</span>:
            findData = <span class="builtin">input</span>(<span class="string">"어느 데이터 앞에 삽입할까요? (찾을 데이터): "</span>)
            insertData = <span class="builtin">input</span>(<span class="string">"삽입할 데이터 입력: "</span>)
            ( 51 )(findData, insertData)
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">3</span>:
            <span class="keyword">try</span>:
                idx = <span class="builtin">int</span>(<span class="builtin">input</span>(<span class="string">"삽입할 인덱스 번호 입력: "</span>))
                data = <span class="builtin">input</span>(<span class="string">"삽입할 데이터 입력: "</span>)
                ( 52 )(idx, data)
                printNodes(head)
            <span class="keyword">except</span> ValueError:
                <span class="builtin">print</span>(<span class="string">"인덱스는 숫자로 입력해야 합니다."</span>)

        <span class="keyword">elif</span> select == <span class="number">4</span>:
            delData = <span class="builtin">input</span>(<span class="string">"삭제할 데이터 입력: "</span>)
            confirm = <span class="builtin">input</span>(<span class="string">f"정말로 '{delData}'를 삭제할까요? (y/n): "</span>)
            <span class="keyword">if</span> confirm.( 53 )() == <span class="string">'y'</span>:
                ( 54 )(delData)
                printNodes(head)
            <span class="keyword">else</span>:
                <span class="builtin">print</span>(<span class="string">"삭제를 취소했습니다."</span>)
                printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">5</span>:
            ( 55 )()
            printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="builtin">input</span>(<span class="string">"검색할 데이터 입력: "</span>)
            indexes = ( 56 )(data)
            <span class="keyword">if</span> ( 57 ):
                <span class="builtin">print</span>(<span class="string">f"'{data}' 데이터는 다음 인덱스에 있습니다: {indexes}"</span>)
            <span class="keyword">else</span>:
                <span class="builtin">print</span>(<span class="string">f"'{data}' 데이터는 리스트에 없습니다."</span>)

        <span class="keyword">elif</span> select == <span class="number">7</span>:
            filename = <span class="builtin">input</span>(<span class="string">"저장할 파일 이름 입력 (예: data.txt): "</span>)
            ( 58 )(filename)

        <span class="keyword">elif</span> select == <span class="number">8</span>:
            filename = <span class="builtin">input</span>(<span class="string">"불러올 파일 이름 입력 (예: data.txt): "</span>)
            ( 59 )(filename)
            printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">9</span>:
            <span class="builtin">print</span>(<span class="string">"프로그램을 종료합니다."</span>)
        
        <span class="keyword">else</span>:
            <span class="builtin">print</span>(<span class="string">"잘못된 선택입니다. 다시 입력하세요."</span>)`
};
