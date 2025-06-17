// 첫 번째 인수 lst를 이용하여 이진 탐색 트리를 생성하고,
// 두 번째 인수 searchList에 있는 각 노드 를 이진 탐색 트리에서 찾을 수 있는지 확인하여
// true 또는 false를 담은 배열 result를 반환하는 함수 solution()을 작성하세요.

// 제약 조건
// • Ist의 노드는 정수로 이루어져 있으며 1,000,000개를 초과하지 않습니다.
// • 이진 탐색 트리의 삽입과 탐색 기능을 구현해야 합니다.
// • searchList의 길이는 10이하입니다.

const insert = (node, value) => {
  if (value < node.value) {
    if (!node.left) node.left = { value, left: null, right: null };
    else insert(node.left, value);
  } else {
    if (!node.right) node.right = { value, left: null, right: null };
    else insert(node.right, value);
  }
};

const search = (node, target) => {
  if (!node) return false;
  if (node.value === target) return true;
  if (target < node.value) return search(node.left, target);
  return search(node.right, target);
};

function solution(lst, searchList) {
  if (lst.length === 0) return searchList.map(() => false);

  const root = { value: lst[0], left: null, right: null };

  for (let i = 1; i < lst.length; i++) {
    insert(root, lst[i]);
  }

  return searchList.map((value) => search(root, value));
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10],[1, 2, 5, 6]));
console.log(solution([1,3,5,7,9],[2,4,6,8,10]));
