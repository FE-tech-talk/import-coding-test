// 두 팀을 만들어서 같은 곳을 다른 순서로 방문하도록해서 순회를 마친 팀이 승리
// 트리 노드의 규칙은 다음과 같다.
// 트리를 구성하는 모든 노드의 x, y 좌표 값은 정수이다.
// 모든 노드는 서로 다른 x값을 가진다.
// 같은 레벨(level)에 있는 노드는 같은 y 좌표를 가진다.
// 자식 노드의 y 값은 항상 부모 노드보다 작다.
// 임의의 노드 V의 왼쪽 서브 트리(left subtree)에 있는 모든 노드의 x값은 V의 x값보다 작다.
// 임의의 노드 V의 오른쪽 서브 트리(right subtree)에 있는 모든 노드의 x값은 V의 x값보다 크다.
// nodeinfo: 이진트리를 구성하는 노드들의 좌표가 담긴 배열
//  길이는 1 이상 10,000 이하
//  nodeinfo[i] 는 i + 1번 노드의 좌표이며, [x축 좌표, y축 좌표] 순으로 들어있다.
// 모든 노드의 좌표 값은 0 이상 100,000 이하인 정수이다.
// 트리의 깊이가 1,000 이하인 경우만 입력으로 주어진다.
// 모든 노드의 좌표는 문제에 주어진 규칙을 따르며, 잘못된 노드 위치가 주어지는 경우는 없다.
class Node {
  constructor(value, index) {
    this.value = value;
    this.index = index;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  addNode({ index, x }) {
    // node 만들고
    const node = new Node(x, index);

    // 아무것도 없으면 루트에 바로 넣기
    if (this.root === null) {
      this.root = node;
      return;
    }

    // 아니면 이진 탐색 트리 규칙에 따라 배치
    let current = this.root;
    while (true) {
      // 지금 보고 있는 노드가 새로 만든 노드보다 크면
      if (current.value > node.value) {
        // 새로 만든 노드를 그 왼쪽에 넣어야 함.
        // 이때 왼쪽이 비어 있으면 그대로 넣고
        if (current.left === null) {
          current.left = node;
          break;
        }
        // 아니면 current를 갱신하고 다시 순회
        current = current.left;
        continue;
      } else {
        // 반대라면 오른쪽에 넣어야 함.
        // 똑같이 오른쪽이 비어 있으면 그대로 넣고
        // 이때 왼쪽이 비어 있으면 그대로 넣고
        if (current.right === null) {
          current.right = node;
          break;
        }
        // 아니면 current를 갱신하고 다시 순회
        current = current.right;
        continue;
      }
    }
  }
}

function makeBST(list) {
  // y좌표(레벨) 기준으로 내림차순, x좌표(value) 기준으로 오름차순 으로 정렬
  const sortedList = list
    .map((item, index) => ({ index: index + 1, x: item[0], y: item[1] }))
    // 레벨이 같으면 x좌표를 기준으로 정렬, 레벨이 다르면 레벨 기준으로 정렬
    .sort((a, b) => (a.y === b.y ? a.x - b.x : b.y - a.y));

  const tree = new Tree();
  return sortedList.reduce((acc, cur) => {
    acc.addNode(cur);
    return acc;
  }, tree);
}

function preOrder(node, result) {
  // 현재 보는 node가 null이면 아무것도 안함.
  if (node === null) return;
  // result에 현 node 추가하고
  result.push(node.index);
  // node의 왼쪽 재귀
  preOrder(node.left, result);
  // node의 오른쪽 재귀
  preOrder(node.right, result);
}

function postOrder(node, result) {
  // 현재 보는 node가 null이면 아무것도 안함.
  if (node === null) return;
  // node의 왼쪽 재귀
  postOrder(node.left, result);
  // node의 오른쪽 재귀
  postOrder(node.right, result);
  // result에 현 node 추가
  result.push(node.index);
}

function solution(nodeList) {
  // 트리를 만들고
  const tree = new makeBST(nodeList);
  const list1 = [];
  const list2 = [];
  // 전위 순회 결과 배열에 담고
  preOrder(tree.root, list1);
  // 후위 순회 결과 배열에 담고
  postOrder(tree.root, list2);
  // return: [전위 순회 결과, 후위 순회 결과]
  return [list1, list2];
}
