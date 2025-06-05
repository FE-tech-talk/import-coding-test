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

  constructor(array) {
    array.forEach((item) => this.push(item));
  }

  isEmpty() {
    return this.size === 0;
  }

  head() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  push(value) {
    const node = new Node(value);
    if (this.rear === null) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  pop() {
    const item = this.front;
    if (!item) {
      return null;
    }

    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }

    this.size--;
    return item.value;
  }
}

// 카드 뭉치 두 개
// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

// cards1: 문자열 배열
// cards2: 문자열 배열
// goal: 원하는 단어 배열
function solution(cards1, cards2, goal) {
  let result = true;

  const queue1 = new Queue(cards1);
  const queue2 = new Queue(cards2);

  for (let k = 0; k < goal.length; k++) {
    const item1 = queue1.head();
    const item2 = queue2.head();
    if (item1 === goal[k]) {
      queue1.pop();
    } else if (item2 === goal[k]) {
      queue2.pop();
    } else {
      result = false;
      break;
    }
  }

  // cars1, cars2를 사용해서 goal을 만들 수 있다면 "Yes" 없다면 "No"
  return result ? 'Yes' : 'No';
}
