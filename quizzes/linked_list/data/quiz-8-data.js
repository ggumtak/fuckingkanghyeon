/**
 * Quiz 8 Data - 빈칸 23개 (1줄 단위, 함수 정의 부분만)
 */

const quiz8Data = {
    id: '8',
    title: '8회차: 1줄 완성 B',
    total: 23,
    answers: [
        "self.link = None",
        'print("(빈 리스트)")',
        "print()",
        "current = current.link",
        "current = head",
        "head = node",
        "pre = current",
        'print("인덱스는 0 이상이어야 합니다.")',
        'print("인덱스가 리스트의 길이를 초과했습니다.")',
        'print("삭제할 노드가 없습니다.(빈 리스트)")',
        "pre.link = current.link",
        "head = None",
        "idx += 1",
        "f.write(str(item) + '\\n')",
        'print("파일을 찾을 수 없습니다.")',
        "memory = []",
        "for data in dataArray:",
        "insertNode(findData, insertData)",
        'print("인덱스는 숫자로 입력해야 합니다.")',
        'print("삭제를 취소했습니다.")',
        'print(f"\'{data}\' 데이터는 리스트에 없습니다.")',
        "loadFromFile(filename)",
        'print("잘못된 선택입니다. 다시 입력하세요.")'
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="variable">self</span>):
        <span class="variable">self</span>.data = <span class="keyword">None</span>
        ( 1 )

<span class="keyword">def</span> <span class="function">printNodes</span>(<span class="variable">start</span>):
    <span class="string">"""현재 연결 리스트 전체를 출력"""</span>
    current = start
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="keyword">None</span>:
        ( 2 )
        <span class="keyword">return</span>
    <span class="builtin">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="builtin">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        current = current.link
        <span class="builtin">print</span>(current.data, end=<span class="string">' '</span>)
    ( 3 )

<span class="keyword">def</span> <span class="function">get_list_data</span>():
    <span class="string">"""연결 리스트의 data들을 파이썬 리스트로 반환"""</span>
    result = []
    current = head
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span>:
        result.append(current.data)
        ( 4 )
    <span class="keyword">return</span> result

<span class="keyword">def</span> <span class="function">appendNode</span>(<span class="variable">newData</span>):
    <span class="string">"""맨 뒤에 노드 추가"""</span>
    <span class="keyword">global</span> head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        head = node
        <span class="keyword">return</span>
    ( 5 )
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        current = current.link
    current.link = node

<span class="keyword">def</span> <span class="function">insertNode</span>(<span class="variable">findData</span>, <span class="variable">insertData</span>):
    <span class="string">"""특정 데이터 앞에 삽입, 못 찾으면 맨 뒤에 추가"""</span>
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        node = Node()
        node.data = insertData
        ( 6 )
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == findData:
        node = Node()
        node.data = insertData
        node.link = head
        head = node
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        ( 7 )
        current = current.link
        <span class="keyword">if</span> current.data == findData:
            node = Node()
            node.data = insertData
            node.link = current
            pre.link = node
            <span class="keyword">return</span>

    node = Node()
    node.data = insertData
    current.link = node

<span class="keyword">def</span> <span class="function">insertAt</span>(<span class="variable">index</span>, <span class="variable">data</span>):
    <span class="string">"""특정 인덱스 위치에 노드 삽입"""</span>
    <span class="keyword">global</span> head
    
    <span class="keyword">if</span> index < <span class="number">0</span>:
        ( 8 )
        <span class="keyword">return</span>

    newNode = Node()
    newNode.data = data

    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        head = newNode
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span> <span class="keyword">and</span> currentIndex < index - <span class="number">1</span>:
        current = current.link
        currentIndex += <span class="number">1</span>
    
    <span class="keyword">if</span> current <span class="keyword">is</span> <span class="keyword">None</span>:
        ( 9 )
        <span class="keyword">return</span>

    newNode.link = current.link
    current.link = newNode

<span class="keyword">def</span> <span class="function">deleteNode</span>(<span class="variable">deleteData</span>):
    <span class="string">"""특정 데이터 삭제"""</span>
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is</span> <span class="keyword">None</span>:
        ( 10 )
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        head = head.link
        <span class="keyword">del</span>(current)
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not</span> <span class="keyword">None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            ( 11 )
            <span class="keyword">del</span>(current)
            <span class="keyword">return</span>

    <span class="builtin">print</span>(<span class="string">f"'{deleteData}' 데이터를 찾을 수 없습니다."</span>)

<span class="keyword">def</span> <span class="function">clearList</span>():
    <span class="string">"""리스트 전체 초기화"""</span>
    <span class="keyword">global</span> head
    ( 12 )
    <span class="builtin">print</span>(<span class="string">"리스트가 초기화되었습니다."</span>)

<span class="keyword">def</span> <span class="function">searchNode</span>(<span class="variable">target</span>):
    <span class="string">"""target을 검색해서 인덱스 리스트 반환"""</span>
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="keyword">while</span> current <span class="keyword">is not</span> <span class="keyword">None</span>:
        <span class="keyword">if</span> current.data == target:
            indexes.append(idx)
        current = current.link
        ( 13 )
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(<span class="variable">filename</span>):
    <span class="string">"""현재 리스트 데이터를 파일에 저장"""</span>
    data_list = get_list_data()
    <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'w'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            ( 14 )
    <span class="builtin">print</span>(<span class="string">f"리스트가 파일로 저장되었습니다. ({filename})"</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(<span class="variable">filename</span>):
    <span class="string">"""파일에서 데이터를 읽어 리스트 재구성"""</span>
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="builtin">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.readlines()
    <span class="keyword">except</span> FileNotFoundError:
        ( 15 )
        <span class="keyword">return</span>

    head = <span class="keyword">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.strip()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            appendNode(data)
    <span class="builtin">print</span>(<span class="string">f"파일에서 리스트를 불러왔습니다. ({filename})"</span>)

<span class="comment">## 전역 변수 선언 부분 ##</span>
( 16 )
head, current, pre = <span class="keyword">None</span>, <span class="keyword">None</span>, <span class="keyword">None</span>

<span class="comment">## 메인 코드 부분 ##</span>
<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    dataArray = [<span class="string">"서울대"</span>, <span class="string">"고대"</span>, <span class="string">"연대"</span>, <span class="string">"두원"</span>, <span class="string">"부산"</span>]
    ( 17 )
        appendNode(data)
    
    <span class="builtin">print</span>(<span class="string">"초기 연결 리스트:"</span>)
    printNodes(head)

    select = -<span class="number">1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="comment">... (메뉴 출력 생략)</span>

        <span class="keyword">elif</span> select == <span class="number">2</span>:
            findData = <span class="builtin">input</span>(<span class="string">"어느 데이터 앞에 삽입할까요? (찾을 데이터): "</span>)
            insertData = <span class="builtin">input</span>(<span class="string">"삽입할 데이터 입력: "</span>)
            ( 18 )
            printNodes(head)
        
        <span class="keyword">elif</span> select == <span class="number">3</span>:
            <span class="keyword">try</span>:
                idx = <span class="builtin">int</span>(<span class="builtin">input</span>(<span class="string">"삽입할 인덱스 번호 입력: "</span>))
                data = <span class="builtin">input</span>(<span class="string">"삽입할 데이터 입력: "</span>)
                insertAt(idx, data)
                printNodes(head)
            <span class="keyword">except</span> ValueError:
                ( 19 )

        <span class="keyword">elif</span> select == <span class="number">4</span>:
            delData = <span class="builtin">input</span>(<span class="string">"삭제할 데이터 입력: "</span>)
            confirm = <span class="builtin">input</span>(<span class="string">f"정말로 '{delData}'를 삭제할까요? (y/n): "</span>)
            <span class="keyword">if</span> confirm.lower() == <span class="string">'y'</span>:
                deleteNode(delData)
                printNodes(head)
            <span class="keyword">else</span>:
                ( 20 )
                printNodes(head)

        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="builtin">input</span>(<span class="string">"검색할 데이터 입력: "</span>)
            indexes = searchNode(data)
            <span class="keyword">if</span> indexes:
                <span class="builtin">print</span>(<span class="string">f"'{data}' 데이터는 다음 인덱스에 있습니다: {indexes}"</span>)
            <span class="keyword">else</span>:
                ( 21 )

        <span class="keyword">elif</span> select == <span class="number">8</span>:
            filename = <span class="builtin">input</span>(<span class="string">"불러올 파일 이름 입력: "</span>)
            ( 22 )
            printNodes(head)

        <span class="keyword">else</span>:
            ( 23 )`
};
