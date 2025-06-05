class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  front = null;
  rear = null;
  size = 0;

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.front.value;
    this.front = this.front.next;
    this.size--;
    if (this.isEmpty()) {
      this.rear = null; // 큐가 비어있으면 rear도 null로 설정
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// 요세푸스 문제
// N명의 사람이 원 형태로 서 있다. 1 ~ N 번호표
// 임의의 숫자 K, 다음과 같이 사람을 없앤다.
// 1번 번호표 > k번쨰 사람 없앰 > 없앤 사람 다음 사람을 기준으로 다시 K번째 사람 없앰.
// n: 사람 수
// k: 없앨 사람의 순번
export function solution(n, k) {
  const queue = new Queue();

  new Array(n).fill(0).map((_, i) => queue.push(i + 1));

  let turn = 0;

  while (queue.size !== 1) {
    turn = (turn + k - 1) % queue.size;
    for (let i = 0; i < turn; i++) {
      queue.push(queue.pop());
    }
    queue.pop(); // k번째 사람 제거
  }

  // 마지막에 살아있는 사람의 번호 반환
  return queue.pop();
}
