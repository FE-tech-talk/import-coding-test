// 이진 트리를 표현한 배열 nodes를 인자로 받습니다.
// 예를 들어서 nodes가 [1,2,3,4,5,6,7]이면 다음과 같은 트리를 표현한 것입니다.
// 해당 이진 트리에 대하여 전위순회, 중위순회, 후위순회 결과를 반환하는 solution() 함수를 구현하세요.

// 제약조건
// • 입력 노드값의 개수는 1개 이상 1,000개 이하이다.
// • 노드값은 정수형이며, 중복되지 않는다.

function solution(nodes) {
  const preOrder = [];
  const inOrder = [];
  const postOrder = [];

  function traverse(nodeIndex) {
    if (nodeIndex >= nodes.length || nodes[nodeIndex] === null) return;

    preOrder.push(nodes[nodeIndex]);

    traverse(2 * nodeIndex + 1);
    inOrder.push(nodes[nodeIndex]);

    traverse(2 * nodeIndex + 2);

    postOrder.push(nodes[nodeIndex]);
  }

  traverse(0);

  return [preOrder, inOrder, postOrder];
}
