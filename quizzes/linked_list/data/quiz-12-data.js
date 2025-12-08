// Quiz 12: 12주차 완전정복 - 한 줄 완성 (53문제)
const quiz12Data = {
    id: '12',
    title: '12회차: 한 줄 완성',
    total: 53,
    answers: [
        'Node', '__init__', 'self.data = None', 'self.link = None', 'printNodes',
        'current = start', 'current is None', 'return', 'current.data',
        'current.link is not None', 'current = current.link', 'current.data',
        'result = []', 'current is not None', 'result.append(current.data)', 'return result',
        'global head', 'node = Node()', 'head is None', 'current = head',
        'current.link is not None', 'current = current.link', 'current.link = node',
        'head is None', 'node = Node()', 'head.data == findData', 'node.link = head',
        'current.link is not None', 'current.data == findData', 'pre.link = node', 'current.link = node',
        'index < 0', 'newNode = Node()', 'index == 0', 'newNode.link = head',
        'currentIndex = 0', 'current is not None and currentIndex < index - 1', 'currentIndex += 1',
        'current is None', 'newNode.link = current.link', 'current.link = newNode',
        'global head, current, pre', 'head is None', 'head.data == deleteData', 'del(current)',
        'current.link is not None', 'current.data == deleteData', 'pre.link = current.link',
        'head = None', 'indexes = []', 'current is not None', 'current.data == target', 'indexes.append(idx)'
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> ( 1 )():
    <span class="keyword">def</span> ( 2 )(<span class="variable">self</span>):
        ( 3 )
        ( 4 )

<span class="keyword">def</span> ( 5 )(<span class="variable">start</span>):
    <span class="string">"""현재 연결 리스트 전체를 출력"""</span>
    ( 6 )
    <span class="keyword">if</span> ( 7 ):
        <span class="builtin">print</span>(<span class="string">"(빈 리스트)"</span>)
        ( 8 )
    <span class="builtin">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="builtin">print</span>(( 9 ), end=<span class="string">' '</span>)
    <span class="keyword">while</span> ( 10 ):
        ( 11 )
        <span class="builtin">print</span>(( 12 ), end=<span class="string">' '</span>)
    <span class="builtin">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    <span class="string">"""연결 리스트의 data들을 파이썬 리스트로 반환 (파일 저장용)"""</span>
    ( 13 )
    current = head
    <span class="keyword">while</span> ( 14 ):
        ( 15 )
        current = current.link
    ( 16 )

<span class="keyword">def</span> <span class="function">appendNode</span>(<span class="variable">newData</span>):
    <span class="string">"""맨 뒤에 노드 추가"""</span>
    ( 17 )
    ( 18 )
    node.data = newData
    <span class="keyword">if</span> ( 19 ):
        head = node
        <span class="keyword">return</span>
    ( 20 )
    <span class="keyword">while</span> ( 21 ):
        ( 22 )
    ( 23 )

<span class="keyword">def</span> <span class="function">insertNode</span>(<span class="variable">findData</span>, <span class="variable">insertData</span>):
    <span class="string">"""특정 데이터 앞에 삽입, 못 찾으면 맨 뒤에 추가"""</span>
    <span class="keyword">global</span> head
    
    <span class="comment"># 리스트가 비어 있을 경우</span>
    <span class="keyword">if</span> ( 24 ):
        ( 25 )
        node.data = insertData
        head = node
        <span class="keyword">return</span>

    <span class="comment"># 첫 번째 노드가 findData인 경우 (맨 앞 삽입)</span>
    <span class="keyword">if</span> ( 26 ):
        node = Node()
        node.data = insertData
        ( 27 )
        head = node
        <span class="keyword">return</span>

    <span class="comment"># 그 외 노드 탐색</span>
    current = head
    <span class="keyword">while</span> ( 28 ):
        pre = current
        current = current.link
        <span class="keyword">if</span> ( 29 ):
            node = Node()
            node.data = insertData
            node.link = current
            ( 30 )
            <span class="keyword">return</span>

    <span class="comment"># findData를 끝까지 못 찾으면 맨 뒤에 추가</span>
    node = Node()
    node.data = insertData
    ( 31 )

<span class="keyword">def</span> <span class="function">insertAt</span>(<span class="variable">index</span>, <span class="variable">data</span>):
    <span class="string">"""특정 인덱스 위치에 노드 삽입"""</span>
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> ( 32 ):
        <span class="builtin">print</span>(<span class="string">"인덱스는 0 이상이어야 합니다."</span>)
        <span class="keyword">return</span>

    ( 33 )
    newNode.data = data

    <span class="comment"># 인덱스가 0 (맨 앞 삽입)</span>
    <span class="keyword">if</span> ( 34 ):
        ( 35 )
        head = newNode
        <span class="keyword">return</span>

    <span class="comment"># 중간 또는 끝 삽입을 위해 순회</span>
    current = head
    ( 36 )
    
    <span class="comment"># 삽입 위치 바로 직전(index-1)까지 이동</span>
    <span class="keyword">while</span> ( 37 ):
        current = current.link
        ( 38 )
    
    <span class="keyword">if</span> ( 39 ):
        <span class="builtin">print</span>(<span class="string">"인덱스가 리스트의 길이를 초과했습니다."</span>)
        <span class="keyword">return</span>

    <span class="comment"># 삽입 실행</span>
    ( 40 )
    ( 41 )

<span class="keyword">def</span> <span class="function">deleteNode</span>(<span class="variable">deleteData</span>):
    <span class="string">"""특정 데이터 삭제"""</span>
    ( 42 )

    <span class="keyword">if</span> ( 43 ):
        <span class="builtin">print</span>(<span class="string">"삭제할 노드가 없습니다.(빈 리스트)"</span>)
        <span class="keyword">return</span>

    <span class="comment"># 첫 번째 노드가 삭제 대상인 경우</span>
    <span class="keyword">if</span> ( 44 ):
        current = head
        head = head.link
        ( 45 )
        <span class="keyword">return</span>

    <span class="comment"># 그 외 노드 탐색</span>
    current = head
    <span class="keyword">while</span> ( 46 ):
        pre = current
        current = current.link
        <span class="keyword">if</span> ( 47 ):
            ( 48 )
            <span class="builtin">del</span>(current)
            <span class="keyword">return</span>

    <span class="builtin">print</span>(<span class="string">f"'{deleteData}' 데이터를 찾을 수 없습니다."</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="string">"""리스트 전체 초기화"""</span>
    <span class="keyword">global</span> head
    ( 49 )
    <span class="builtin">print</span>(<span class="string">"리스트가 초기화되었습니다."</span>)

<span class="keyword">def</span> <span class="function">searchNode</span>(<span class="variable">target</span>):
    <span class="string">"""target을 검색해서 인덱스 리스트 반환"""</span>
    <span class="keyword">global</span> head
    ( 50 )
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> ( 51 ):
        <span class="keyword">if</span> ( 52 ):
            ( 53 )
        current = current.link
        idx += <span class="number">1</span>
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(<span class="variable">filename</span>):
    <span class="string">"""현재 리스트 데이터를 파일에 저장"""</span>
    data_list = get_list_data()
    <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.write(<span class="builtin">str</span>(item) + <span class="string">'\\n'</span>)
    <span class="builtin">print</span>(<span class="string">f"리스트가 파일로 저장되었습니다. ({filename})"</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(<span class="variable">filename</span>):
    <span class="string">"""파일에서 데이터를 읽어 리스트 재구성"""</span>
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.readlines()
    <span class="keyword">except</span> FileNotFoundError:
        <span class="builtin">print</span>(<span class="string">"파일을 찾을 수 없습니다."</span>)
        <span class="keyword">return</span>

    <span class="comment"># 기존 리스트 초기화 후 다시 구성</span>
    head = <span class="builtin">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.strip()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            appendNode(data)
    <span class="builtin">print</span>(<span class="string">f"파일에서 리스트를 불러왔습니다. ({filename})"</span>)

<span class="comment">## 전역 변수 선언 부분 ##</span>
memory = []
head, current, pre = <span class="builtin">None</span>, <span class="builtin">None</span>, <span class="builtin">None</span>

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    <span class="comment"># 초기 데이터 셋팅</span>
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    <span class="keyword">for</span> data <span class="keyword">in</span> dataArray:
        appendNode(data)
    
    <span class="builtin">print</span>(<span class="string">"초기 연결 리스트:"</span>)
    printNodes(head)

    <span class="comment"># 사용자 입력 기반 메뉴</span>
    select = <span class="number">-1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="builtin">print</span>(<span class="string">"\\n--- 연결 리스트 메뉴 ---"</span>)
        <span class="builtin">print</span>(<span class="string">"1: 추가 (맨 뒤)"</span>)
        <span class="builtin">print</span>(<span class="string">"2: 삽입 (특정 데이터 앞에 삽입)"</span>)
        <span class="builtin">print</span>(<span class="string">"3: 삽입 (특정 위치에 삽입)"</span>)
        <span class="builtin">print</span>(<span class="string">"4: 삭제 (특정 데이터 삭제 / 삭제 전 확인)"</span>)
        <span class="builtin">print</span>(<span class="string">"5: 리스트 초기화"</span>)
        <span class="builtin">print</span>(<span class="string">"6: 검색 (데이터 -> 인덱스)"</span>)
        <span class="builtin">print</span>(<span class="string">"7: 파일 저장"</span>)
        <span class="builtin">print</span>(<span class="string">"8: 파일 불러오기"</span>)
        <span class="builtin">print</span>(<span class="string">"9: 종료"</span>)

        <span class="keyword">try</span>:
            select = <span class="builtin">int</span>(<span class="builtin">input</span>(<span class="string">"메뉴 선택: "</span>))
        <span class="keyword">except</span> ValueError:
            <span class="builtin">print</span>(<span class="string">"숫자를 입력하세요."</span>)
            <span class="keyword">continue</span>

        <span class="keyword">if</span> select == <span class="number">1</span>:
            data = <span class="builtin">input</span>(<span class="string">"추가할 데이터 입력: "</span>)
            appendNode(data)
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">2</span>:
            findData = <span class="builtin">input</span>(<span class="string">"어느 데이터 앞에 삽입할까요? (찾을 데이터): "</span>)
            insertData = <span class="builtin">input</span>(<span class="string">"삽입할 데이터 입력: "</span>)
            insertNode(findData, insertData)
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">3</span>:
            <span class="keyword">try</span>:
                idx = <span class="builtin">int</span>(<span class="builtin">input</span>(<span class="string">"삽입할 인덱스 번호 입력: "</span>))
                data = <span class="builtin">input</span>(<span class="string">"삽입할 데이터 입력: "</span>)
                insertAt(idx, data)
                printNodes(head)
            <span class="keyword">except</span> ValueError:
                <span class="builtin">print</span>(<span class="string">"인덱스는 숫자로 입력해야 합니다."</span>)

        <span class="keyword">elif</span> select == <span class="number">4</span>:
            delData = <span class="builtin">input</span>(<span class="string">"삭제할 데이터 입력: "</span>)
            confirm = <span class="builtin">input</span>(<span class="string">f"정말로 '{delData}'를 삭제할까요? (y/n): "</span>)
            <span class="keyword">if</span> confirm.lower() == <span class="string">'y'</span>:
                deleteNode(delData)
                printNodes(head)
            <span class="keyword">else</span>:
                <span class="builtin">print</span>(<span class="string">"삭제를 취소했습니다."</span>)
                printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">5</span>:
            clearList()
            printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="builtin">input</span>(<span class="string">"검색할 데이터 입력: "</span>)
            indexes = searchNode(data)
            <span class="keyword">if</span> indexes:
                <span class="builtin">print</span>(<span class="string">f"'{data}' 데이터는 다음 인덱스에 있습니다: {indexes}"</span>)
            <span class="keyword">else</span>:
                <span class="builtin">print</span>(<span class="string">f"'{data}' 데이터는 리스트에 없습니다."</span>)

        <span class="keyword">elif</span> select == <span class="number">7</span>:
            filename = <span class="builtin">input</span>(<span class="string">"저장할 파일 이름 입력 (예: data.txt): "</span>)
            saveToFile(filename)

        <span class="keyword">elif</span> select == <span class="number">8</span>:
            filename = <span class="builtin">input</span>(<span class="string">"불러올 파일 이름 입력 (예: data.txt): "</span>)
            loadFromFile(filename)
            printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">9</span>:
            <span class="builtin">print</span>(<span class="string">"프로그램을 종료합니다."</span>)
        
        <span class="keyword">else</span>:
            <span class="builtin">print</span>(<span class="string">"잘못된 선택입니다. 다시 입력하세요."</span>)`
};
