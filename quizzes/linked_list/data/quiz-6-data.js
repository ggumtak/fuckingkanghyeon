/**
 * Quiz 6: Implementation Mastery (문장 완성 및 로직 구현)
 * Total: 17 questions (Line-based questions)
 */
const quiz6Data = {
    id: '6',
    title: '6회차: 문장 완성 및 로직 구현',
    total: 17,
    answers: [
        'current is None',
        'current = current.link',
        'current.link is not None',
        'current.link = node',
        'node.link = head',
        'pre.link = node',
        'current is not None and currentIndex < index - 1',
        'newNode.link = current.link',
        'current.link = newNode',
        'head = head.link',
        'pre.link = current.link',
        'current is not None',
        "with open(filename, 'w', encoding='utf-8') as f",
        'except FileNotFoundError',
        'ValueError',
        "input(f\"정말로 '{delData}'를 삭제할까요? (y/n): \").lower()",
        'indexes'
    ],
    code: `<span class="comment">## 클래스와 함수 선언 부분 ##</span>
<span class="keyword">class</span> <span class="function">Node</span>():
    <span class="keyword">def</span> <span class="function">__init__</span>(self):
        self.data = <span class="keyword">None</span>
        self.link = <span class="keyword">None</span>

<span class="keyword">def</span> <span class="function">printNodes</span>(start):
    current = start
    <span class="comment"># 1. 리스트가 비었는지 확인하는 if문 전체</span>
    <span class="keyword">if</span> ( 1 ):
        <span class="function">print</span>(<span class="string">"(빈 리스트)"</span>)
        <span class="keyword">return</span>
    <span class="function">print</span>(<span class="string">"현재 리스트:"</span>, end=<span class="string">' '</span>)
    <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        <span class="comment"># 2. 포인터를 다음으로 넘기는 구문</span>
        ( 2 )
        <span class="function">print</span>(current.data, end=<span class="string">' '</span>)
    <span class="function">print</span>()

<span class="keyword">def</span> <span class="function">appendNode</span>(newData):
    <span class="keyword">global</span> head
    node = Node()
    node.data = newData
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        head = node
        <span class="keyword">return</span>
    current = head
    <span class="comment"># 3. 마지막 노드까지 이동하는 반복문 헤더(Header) 전체</span>
    <span class="keyword">while</span> ( 3 ):
        current = current.link
    <span class="comment"># 4. 마지막 노드 뒤에 새 노드 붙이기</span>
    ( 4 )

<span class="keyword">def</span> <span class="function">insertNode</span>(findData, insertData):
    <span class="keyword">global</span> head
    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        node = Node()
        node.data = insertData
        head = node
        <span class="keyword">return</span>
    <span class="comment"># 5. 첫 번째 노드 앞에 삽입하는 경우: 새 노드 링크 연결</span>
    <span class="keyword">if</span> head.data == findData:
        node = Node()
        node.data = insertData
        ( 5 ) <span class="comment"># node.link 처리</span>
        head = node
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == findData:
            node = Node()
            node.data = insertData
            node.link = current
            <span class="comment"># 6. 이전 노드의 링크를 새 노드로 변경</span>
            ( 6 )
            <span class="keyword">return</span>

    node = Node()
    node.data = insertData
    current.link = node

<span class="keyword">def</span> <span class="function">insertAt</span>(index, data):
    <span class="keyword">global</span> head
    <span class="comment"># (인덱스 음수 체크 생략)</span>
    newNode = Node()
    newNode.data = data

    <span class="keyword">if</span> index == <span class="number">0</span>:
        newNode.link = head
        head = newNode
        <span class="keyword">return</span>

    current = head
    currentIndex = <span class="number">0</span>
    
    <span class="comment"># 7. 목표 인덱스 직전까지 이동하는 while 조건문 전체</span>
    <span class="keyword">while</span> ( 7 ):
        current = current.link
        currentIndex += <span class="number">1</span>
    
    <span class="keyword">if</span> current <span class="keyword">is None</span>:
        <span class="function">print</span>(<span class="string">"인덱스 초과"</span>)
        <span class="keyword">return</span>

    <span class="comment"># 8. 중간 삽입: 새 노드가 다음 노드를 가리키게 함</span>
    ( 8 )
    <span class="comment"># 9. 중간 삽입: 현재 노드가 새 노드를 가리키게 함</span>
    ( 9 )

<span class="keyword">def</span> <span class="function">deleteNode</span>(deleteData):
    <span class="keyword">global</span> head, current, pre

    <span class="keyword">if</span> head <span class="keyword">is None</span>:
        <span class="keyword">return</span>

    <span class="keyword">if</span> head.data == deleteData:
        current = head
        <span class="comment"># 10. 헤드를 다음 노드로 변경하는 구문</span>
        ( 10 )
        <span class="keyword">del</span>(current)
        <span class="keyword">return</span>

    current = head
    <span class="keyword">while</span> current.link <span class="keyword">is not None</span>:
        pre = current
        current = current.link
        <span class="keyword">if</span> current.data == deleteData:
            <span class="comment"># 11. 삭제할 노드를 건너뛰고 이전 노드와 다음 노드 연결 (핵심)</span>
            ( 11 )
            <span class="keyword">del</span>(current)
            <span class="keyword">return</span>

<span class="keyword">def</span> <span class="function">searchNode</span>(target):
    <span class="keyword">global</span> head
    indexes = []
    current = head
    idx = <span class="number">0</span>
    <span class="comment"># 12. 전체 순회 조건문</span>
    <span class="keyword">while</span> ( 12 ):
        <span class="keyword">if</span> current.data == target:
            indexes.append(idx)
        current = current.link
        idx += <span class="number">1</span>
    <span class="keyword">return</span> indexes

<span class="keyword">def</span> <span class="function">saveToFile</span>(filename):
    data_list = get_list_data()
    <span class="comment"># 13. 파일 열기 구문 전체 (with open...)</span>
    ( 13 ):
        <span class="keyword">for</span> item <span class="keyword">in</span> data_list:
            f.write(<span class="function">str</span>(item) + <span class="string">'\\n'</span>)

<span class="keyword">def</span> <span class="function">loadFromFile</span>(filename):
    <span class="keyword">global</span> head
    <span class="keyword">try</span>:
        <span class="keyword">with</span> <span class="function">open</span>(filename, <span class="string">'r'</span>, encoding=<span class="string">'utf-8'</span>) <span class="keyword">as</span> f:
            lines = f.readlines()
    <span class="comment"># 14. 파일 없을 때 예외 처리 구문 (except...)</span>
    ( 14 ):
        <span class="function">print</span>(<span class="string">"파일을 찾을 수 없습니다."</span>)
        <span class="keyword">return</span>

    head = <span class="keyword">None</span>
    <span class="keyword">for</span> line <span class="keyword">in</span> lines:
        data = line.strip()
        <span class="keyword">if</span> data != <span class="string">''</span>:
            appendNode(data)

<span class="keyword">if</span> __name__ == <span class="string">"__main__"</span>:
    <span class="comment"># (초기 데이터 생략)</span>
    select = <span class="number">-1</span>
    <span class="keyword">while</span> select != <span class="number">9</span>:
        <span class="keyword">try</span>:
            select = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"메뉴 선택: "</span>))
        <span class="comment"># 15. 잘못된 입력(문자 등) 예외 처리</span>
        <span class="keyword">except</span> ( 15 ):
            <span class="function">print</span>(<span class="string">"숫자를 입력하세요."</span>)
            <span class="keyword">continue</span>

        <span class="keyword">if</span> select == <span class="number">1</span>:
            data = <span class="function">input</span>(<span class="string">"입력: "</span>)
            appendNode(data)
        
        <span class="keyword">elif</span> select == <span class="number">2</span>:
            find = <span class="function">input</span>(<span class="string">"찾을값: "</span>)
            ins = <span class="function">input</span>(<span class="string">"삽입값: "</span>)
            insertNode(find, ins)
        
        <span class="keyword">elif</span> select == <span class="number">3</span>:
            <span class="keyword">try</span>:
                idx = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"인덱스: "</span>))
                data = <span class="function">input</span>(<span class="string">"값: "</span>)
                insertAt(idx, data)
            <span class="keyword">except</span> ValueError:
                <span class="function">print</span>(<span class="string">"인덱스 오류"</span>)

        <span class="keyword">elif</span> select == <span class="number">4</span>:
            delData = <span class="function">input</span>(<span class="string">"삭제값: "</span>)
            <span class="comment"># 16. 입력받은 문자열을 소문자로 변환하여 비교하는 조건문</span>
            <span class="keyword">if</span> ( 16 ) == <span class="string">'y'</span>:
                deleteNode(delData)
            <span class="keyword">else</span>:
                <span class="function">print</span>(<span class="string">"취소"</span>)

        <span class="comment"># (나머지 생략)</span>
        <span class="keyword">elif</span> select == <span class="number">6</span>:
            data = <span class="function">input</span>(<span class="string">"검색: "</span>)
            indexes = searchNode(data)
            <span class="comment"># 17. 검색 결과가 존재하는지 확인하는 if문</span>
            <span class="keyword">if</span> ( 17 ):
                <span class="function">print</span>(indexes)
            <span class="keyword">else</span>:
                <span class="function">print</span>(<span class="string">"없음"</span>)
                
        <span class="comment"># ...</span>`
};
