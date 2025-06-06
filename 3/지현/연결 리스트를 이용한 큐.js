class Node {
  constructor(data) {
    this.data = data; // 요소의 값
    this.next = null; // 다음 요소를 참조
  }
}

class Queue {
  constructor() {
    this.head = null; // 첫 번째 요소를 참조
    this.tail = null; // 마지막 요소를 참조
    this.size = 0; // 큐의 크기
  }

  // 큐에 데이터 추가
  push(data) {
    const newNode = new Node(data);

    // 큐가 비어 있다면 head와 tail을 모두 새로 생성한 요소로 설정
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // tail의 next를 속성을 새로운 요소로 설정 후 tail이 새로운 요소를 참조
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++; // 큐의 크기 증가
  }

  // 큐에서 데이터 제거
  pop() {
    // 큐가 비어 있다면 null 반환
    if (!this.head) return null;

    // 두 번째 요소를 head의 참조로 변경하면 자연스럽게 첫 번째 요소가 사라짐
    const removeNode = this.head;
    this.head = this.head.next;

    // 만약 두 번째 요소가 없었다면 큐가 비어 있다는 뜻이니 tail도 null로 변경
    if (!this.head) this.tail = null;

    this.size--; // 큐의 크기 감소

    return removeNode.data; // 제거된 요소의 값 반환
  }

  // 큐가 비어 있는지 확인
  isEmpty() {
    return this.size === 0;
  }
}
