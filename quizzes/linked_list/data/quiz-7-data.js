/**
 * Quiz 7 Data - 빈칸 27개 (1줄 단위, 함수 정의 부분만)
 */

const quiz7Data = {
    id: '7',
    title: '7회차: 1줄 완성 A',
    total: 27,
    answers: [
        "self.data = None",
        "current = start",
        "print(current.data, end=' ')",
        "current = head",
        "head = node",
        "current.link = node",
        "node.data = insertData",
        "node.link = head",
        "pre.link = node",
        "current.link = node",
        "newNode.data = data",
        "head = newNode",
        "currentIndex += 1",
        "current.link = newNode",
        "del(current)",
        "del(current)",
        'print("리스트가 초기화되었습니다.")',
        "indexes.append(idx)",
        'print(f"리스트가 파일로 저장되었습니다. ({filename})")',
        "lines = f.readlines()",
        "appendNode(data)",
        "head, current, pre = None, None, None",
        "printNodes(head)",
        'select = int(input("메뉴 선택: "))',
        'findData = input("어느 데이터 앞에 삽입할까요? (찾을 데이터): ")',
        "saveToFile(filename)",
        'print("프로그램을 종료합니다.")'
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="variable">self</span>):
        ( 1 )
        <span class="variable">self</span>.link = <span class="keyword">None</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(<span class="variable">start</span>):
    <span class="string">"""현재 연결 리스트 전체를 출력"""</span>
    ( 2 )
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="keyword">None</span>:
        <span class="builtin">print</span>(<span class="string">"(빈 리스트)"</span>)
        <span class="keyword">return</span>
    <span class="builtin">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="builtin">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        current = current.link
        ( 3 )
    <span class="builtin">print</span>()

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    <span class="string">"""연결 리스트의 data들을 파이썬 리스트로 반환"""</span>
    result = []
    ( 4 )
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span>:
        result.append(current.data)
        current = current.link
    <span class="keyword">return</span> result

<span class="keyword">def</span> <span class="function">appendNode</span>(<span class="variable">newData</span>):
    <span class="string">"""맨 뒤에 노드 추가"""</span>
    <span class="keyword">global</span> head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        ( 5 )
        <span class="keyword">return</span>
    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        current = current.link
    ( 6 )

<span class="keyword">def</span> <span class="function">insertNode</span>(<span class="variable">findData</span>, <span class="variable">insertData</span>):
    <span class="string">"""특정 데이터 앞에 삽입, 못 찾으면 맨 뒤에 추가"""</span>
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        node = Node()
        ( 7 )
        head = node
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == findData:
        node = Node()
        node.data = insertData
        ( 8 )
        head = node
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == findData:
            node = Node()
            node.data = insertData
            node.link = current
            ( 9 )
            <span class="keyword">return</span>

    node = Node()
    node.data = insertData
    ( 10 )

<span class="keyword">def</span> <span class="function">insertAt</span>(<span class="variable">index</span>, <span class="variable">data</span>):
    <span class="string">"""특정 인덱스 위치에 노드 삽입"""</span>
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> index < <span class="number">0</span>:
        <span class="builtin">print</span>(<span class="string">"인덱스는 0 이상이어야 합니다."</span>)
        <span class="keyword">return</span>

    newNode = Node()
    ( 11 )

    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        ( 12 )
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span> <span class="keyword">and</span> currentIndex < index - <span class="number">1</span>:
        current = current.link
        ( 13 )
    
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="keyword">None</span>:
        <span class="builtin">print</span>(<span class="string">"인덱스가 리스트의 길이를 초과했습니다."</span>)
        <span class="keyword">return</span>

    newNode.link = current.link
    ( 14 )

<span class="keyword">def</span> <span class="function">deleteNode</span>(<span class="variable">deleteData</span>):
    <span class="string">"""특정 데이터 삭제"""</span>
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        <span class="builtin">print</span>(<span class="string">"삭제할 노드가 없습니다.(빈 리스트)"</span>)
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = head.link
        ( 15 )
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            pre.link = current.link
            ( 16 )
            <span class="keyword">return</span>

    <span class="builtin">print</span>(<span class="string">f"'{deleteData}' 데이터를 찾을 수 없습니다."</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="string">"""리스트 전체 초기화"""</span>
    <span class="keyword">global</span> head
    head = <span class="keyword">None</span>
    ( 17 )

<span class="keyword">def</span> <span class="function">searchNode</span>(<span class="variable">target</span>):
    <span class="string">"""target을 검색해서 인덱스 리스트 반환"""</span>
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span>:
        <span class="keyword">if</span> current.data == target:
            ( 18 )
        current = current.link
        idx += <span class="number">1</span>
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(<span class="variable">filename</span>):
    <span class="string">"""현재 리스트 데이터를 파일에 저장"""</span>
    data_list = get_list_data()
    <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.write(<span class="builtin">str</span>(item) + <span class="string">'\\n'</span>)
    ( 19 )

<span class="keyword">def</span> <span class="function">loadFromFile</span>(<span class="variable">filename</span>):
    <span class="string">"""파일에서 데이터를 읽어 리스트 재구성"""</span>
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            ( 20 )
    <span class="keyword">except</span> FileNotFoundError:
        <span class="builtin">print</span>(<span class="string">"파일을 찾을 수 없습니다."</span>)
        <span class="keyword">return</span>

    head = <span class="keyword">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.strip()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            ( 21 )
    <span class="builtin">print</span>(<span class="string">f"파일에서 리스트를 불러왔습니다. ({filename})"</span>)

<span class="comment">## 전역 변수 선언 부분 ##</span>
memory = []
( 22 )

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    <span class="keyword">for</span> data <span class="keyword">in</span> dataArray:
        appendNode(data)
    
    <span class="builtin">print</span>(<span class="string">"초기 연결 리스트:"</span>)
    ( 23 )

    select = -<span class="number">1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="builtin">print</span>(<span class="string">"\\n--- 연결 리스트 메뉴 ---"</span>)
        <span class="builtin">print</span>(<span class="string">"1: 추가 (맨 뒤)"</span>)
        <span class="builtin">print</span>(<span class="string">"2: 삽입 (특정 데이터 앞에 삽입)"</span>)
        <span class="comment">... (메뉴 생략)</span>

        <span class="keyword">try</span>:
            ( 24 )
        <span class="keyword">except</span> ValueError:
            <span class="builtin">print</span>(<span class="string">"숫자를 입력하세요."</span>)
            <span class="keyword">continue</span>

        <span class="keyword">if</span> select == <span class="number">1</span>:
            <span class="comment">...</span>
        
        <span class="keyword">elif</span> select == <span class="number">2</span>:
            ( 25 )
            insertData = <span class="builtin">input</span>(<span class="string">"삽입할 데이터 입력: "</span>)
            insertNode(findData, insertData)
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">7</span>:
            filename = <span class="builtin">input</span>(<span class="string">"저장할 파일 이름 입력: "</span>)
            ( 26 )

        <span class="keyword">elif</span> select == <span class="number">9</span>:
            ( 27 )`
};
