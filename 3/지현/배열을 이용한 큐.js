class Queue {
  items = [];
  front = 0;
  rear = 0;

  // 큐에 데이터 추가
  push(item) {
    this.items.push(item);
    this.rear++;
  }

  // 큐에서 데이터 제거
  pop() {
    return this.items[this.front++];
  }

  // 큐가 비어있는지 확인
  isEmpty() {
    return this.front === this.rear;
  }

  // 큐의 크기 반환
  size() {
    return this.rear - this.front;
  }

  // 큐 초기화
  clear() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }
}
