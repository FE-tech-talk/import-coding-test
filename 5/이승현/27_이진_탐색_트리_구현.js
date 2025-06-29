// 첫 번째 인수 lst를 이용하여 이진 탐색 트리를 구성
// 두 번째 인수 searchList에 있는 각 노드를 이진 탐색트리에서 찾을 수 있는지 확인
// 이를 배열로 true, false로 표현해서 반환

// 노드 클래스
class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // 왼쪽 자식 노드
    this.right = null;
  }
}

// 트리 클래스, 탐색 값이 있는지 확인하는 search 메소드 존재
class BST {
  root;

  constructor() {
    this.root = null; // 트리의 루트 노드 초기화
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode; // 트리가 비어있으면 루트 노드로 설정
      return;
    }

    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      } else {
        if (current.left === null) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true; // 값이 발견되면 true 반환
      } else if (value < current.value) {
        current = current.left; // 왼쪽 서브트리로 이동
      } else {
        current = current.right; // 오른쪽 서브트리로 이동
      }
    }
    return false; // 값이 발견되지 않으면 false 반환
  }
}

export function solution(arr, searchList) {
  // 결과 배열
  const result = [];

  // 트리 생성해서
  const tree = new BST(arr);

  for (let a of arr) {
    tree.push(a);
  }

  // searchList 순회
  for (let i = 0; i < searchList.length; i++) {
    // 트리에서 해당 노드가 있는지 확인
    const found = tree.search(searchList[i]);
    // 결과 배열에 추가
    result.push(found);
  }

  // 결과 배열 반환
  return result;
}
