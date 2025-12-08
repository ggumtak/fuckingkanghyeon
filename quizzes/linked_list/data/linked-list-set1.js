/**
 * Linked List Quiz - Set 1 (V2 Format)
 * Full implementation code with logic-based blanks
 */
const linkedListSet1 = {
    setId: "linked-list-set-1",
    questions: [
        {
            id: "q1_full_code",
            type: "code-fill",
            prompt: "다음은 단순 연결 리스트(Singly Linked List)의 전체 구현 코드입니다. 주요 로직의 빈칸을 완성하세요.",
            language: "python",
            code: `## 클래스와 함수 선언 부분 ##
class Node():
    def __init__(self):
        ( 1 )

def printNodes(start):
    """현재 연결 리스트 전체를 출력"""
    current = start
    ( 2 )
        print("(빈 리스트)")
        return
    print("현재 리스트:", end=' ')
    print(current.data, end=' ')
    while current.link is not None:
        ( 3 )
        print(current.data, end=' ')
    print()

def get_list_data():
    """연결 리스트의 data들을 파이썬 리스트로 반환 (파일 저장용)"""
    result = []
    current = head
    while current is not None:
        ( 4 )
        current = current.link
    return result

def appendNode(newData):
    """맨 뒤에 노드 추가"""
    global head
    node = Node()
    node.data = newData
    if head is None:
        ( 5 )
        return
    current = head
    while current.link is not None:
        current = current.link
    ( 6 )

def insertNode(findData, insertData):
    """특정 데이터 앞에 삽입, 못 찾으면 맨 뒤에 추가"""
    global head
    
    # 리스트가 비어 있을 경우
    if head is None:
        node = Node()
        node.data = insertData
        ( 7 )
        return

    # 첫 번째 노드가 findData인 경우 (맨 앞 삽입)
    if head.data == findData:
        node = Node()
        node.data = insertData
        ( 8 )
        head = node
        return

    # 그 외 노드 탐색
    current = head
    while current.link is not None:
        ( 9 )
        current = current.link
        if current.data == findData:
            node = Node()
            node.data = insertData
            ( 10 )
            pre.link = node
            return

    # findData를 끝까지 못 찾으면 맨 뒤에 추가
    node = Node()
    node.data = insertData
    current.link = node

def insertAt(index, data):
    """특정 인덱스 위치에 노드 삽입"""
    global head
    
    if index < 0:
        print("인덱스는 0 이상이어야 합니다.")
        return

    newNode = Node()
    newNode.data = data

    # 인덱스가 0 (맨 앞 삽입)
    if index == 0:
        ( 11 )
        head = newNode
        return

    # 중간 또는 끝 삽입을 위해 순회
    current = head
    currentIndex = 0
    
    # 삽입 위치 바로 직전(index-1)까지 이동
    while ( 12 ):
        current = current.link
        currentIndex += 1
    
    if current is None:
        print("인덱스가 리스트의 길이를 초과했습니다.")
        return

    # 삽입 실행
    ( 13 )
    current.link = newNode

def deleteNode(deleteData):
    """특정 데이터 삭제"""
    global head, current, pre

    if head is None:
        print("삭제할 노드가 없습니다.(빈 리스트)")
        return

    # 첫 번째 노드가 삭제 대상인 경우
    if head.data == deleteData:
        current = head
        ( 14 )
        del(current)
        return

    # 그 외 노드 탐색
    current = head
    while current.link is not None:
        pre = current
        current = current.link
        if current.data == deleteData:
            ( 15 )
            del(current)
            return

    print(f"'{deleteData}' 데이터를 찾을 수 없습니다.")

def clearList():
    """리스트 전체 초기화"""
    global head
    ( 16 )
    print("리스트가 초기화되었습니다.")

def searchNode(target):
    """target을 검색해서 인덱스 리스트 반환"""
    global head
    indexes = []
    current = head
    idx = 0
    while current is not None:
        if current.data == target:
            ( 17 )
        current = current.link
        idx += 1
    return indexes

def saveToFile(filename):
    """현재 리스트 데이터를 파일에 저장"""
    data_list = get_list_data()
    ( 18 )
        for item in data_list:
            f.write(str(item) + '\\n')
    print(f"리스트가 파일로 저장되었습니다. ({filename})")

def loadFromFile(filename):
    """파일에서 데이터를 읽어 리스트 재구성"""
    global head
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            ( 19 )
    except FileNotFoundError:
        print("파일을 찾을 수 없습니다.")
        return

    # 기존 리스트 초기화 후 다시 구성
    head = None
    for line in lines:
        data = line.strip()
        if data != '':
            ( 20 )
    print(f"파일에서 리스트를 불러왔습니다. ({filename})")

## 전역 변수 선언 부분 ##
memory = []
head, current, pre = None, None, None

## 메인 코드 부분 ##
if __name__ == "__main__":
    # 초기 데이터 셋팅
    dataArray = ["서울대", "고대", "연대", "두원", "부산"]
    for data in dataArray:
        appendNode(data)
    
    print("초기 연결 리스트:")
    printNodes(head)

    # 사용자 입력 기반 메뉴
    select = -1
    while select != 9:
        print("\\n--- 연결 리스트 메뉴 ---")
        print("1: 추가 (맨 뒤)")
        print("2: 삽입 (특정 데이터 앞에 삽입)")
        print("3: 삽입 (특정 위치에 삽입)")
        print("4: 삭제 (특정 데이터 삭제 / 삭제 전 확인)")
        print("5: 리스트 초기화")
        print("6: 검색 (데이터 -> 인덱스)")
        print("7: 파일 저장")
        print("8: 파일 불러오기")
        print("9: 종료")

        try:
            select = int(input("메뉴 선택: "))
        except ValueError:
            print("숫자를 입력하세요.")
            continue

        if select == 1:
            data = input("추가할 데이터 입력: ")
            ( 21 )
            printNodes(head)
        
        elif select == 2:
            findData = input("어느 데이터 앞에 삽입할까요? (찾을 데이터): ")
            insertData = input("삽입할 데이터 입력: ")
            ( 22 )
            printNodes(head)
        
        elif select == 3:
            try:
                idx = int(input("삽입할 인덱스 번호 입력: "))
                data = input("삽입할 데이터 입력: ")
                ( 23 )
                printNodes(head)
            except ValueError:
                print("인덱스는 숫자로 입력해야 합니다.")

        elif select == 4:
            delData = input("삭제할 데이터 입력: ")
            confirm = input(f"정말로 '{delData}'를 삭제할까요? (y/n): ")
            if confirm.lower() == 'y':
                ( 24 )
                printNodes(head)
            else:
                print("삭제를 취소했습니다.")
                printNodes(head)

        elif select == 5:
            ( 25 )
            printNodes(head)

        elif select == 6:
            data = input("검색할 데이터 입력: ")
            indexes = searchNode(data)
            if indexes:
                print(f"'{data}' 데이터는 다음 인덱스에 있습니다: {indexes}")
            else:
                print(f"'{data}' 데이터는 리스트에 없습니다.")

        elif select == 7:
            filename = input("저장할 파일 이름 입력 (예: data.txt): ")
            ( 26 )

        elif select == 8:
            filename = input("불러올 파일 이름 입력 (예: data.txt): ")
            ( 27 )
            printNodes(head)

        elif select == 9:
            print("프로그램을 종료합니다.")
        
        else:
            print("잘못된 선택입니다. 다시 입력하세요.")`,
            blanks: [
                { index: 1, answer: "self.data = None\n        self.link = None" },
                { index: 2, answer: "if current is None:" },
                { index: 3, answer: "current = current.link" },
                { index: 4, answer: "result.append(current.data)" },
                { index: 5, answer: "head = node" },
                { index: 6, answer: "current.link = node" },
                { index: 7, answer: "head = node" },
                { index: 8, answer: "node.link = head" },
                { index: 9, answer: "pre = current" },
                { index: 10, answer: "node.link = current" },
                { index: 11, answer: "newNode.link = head" },
                { index: 12, answer: "current is not None and currentIndex < index - 1" },
                { index: 13, answer: "newNode.link = current.link" },
                { index: 14, answer: "head = head.link" },
                { index: 15, answer: "pre.link = current.link" },
                { index: 16, answer: "head = None" },
                { index: 17, answer: "indexes.append(idx)" },
                { index: 18, answer: "with open(filename, 'w', encoding='utf-8') as f:" },
                { index: 19, answer: "lines = f.readlines()" },
                { index: 20, answer: "appendNode(data)" },
                { index: 21, answer: "appendNode(data)" },
                { index: 22, answer: "insertNode(findData, insertData)" },
                { index: 23, answer: "insertAt(idx, data)" },
                { index: 24, answer: "deleteNode(delData)" },
                { index: 25, answer: "clearList()" },
                { index: 26, answer: "saveToFile(filename)" },
                { index: 27, answer: "loadFromFile(filename)" }
            ]
        }
    ]
};

if (typeof window !== 'undefined') window.linkedListSet1 = linkedListSet1;
