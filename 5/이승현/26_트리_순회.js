export function solution(tree) {
  return [preorder(0).join(' '), inorder(0).join(' '), postorder(0).join(' ')];

  // 이진 트리에 대해서 전위 순회, 중위 순회, 후위 순회 결과 반환 문자열 띄어쓰기 형태
  function preorder(index) {
    if (index >= tree.length) return '';

    // 왼쪽 자식
    const leftChild = index * 2 + 1;
    // 오른쪽 자식
    const rightChild = index * 2 + 2;
    // 현재 자신
    const value = tree[index];
    // 자신을 앞에 놓고 재귀 왼쪽, 재귀 오른쪽 이렇게 문자열로 반환
    return [value, ...preorder(leftChild), ...preorder(rightChild)];
  }

  function inorder(index) {
    if (index >= tree.length) return '';

    // 왼쪽 자식
    const leftChild = index * 2 + 1;
    // 오른쪽 자식
    const rightChild = index * 2 + 2;
    // 현재 자신
    const value = tree[index];
    // 자신을 앞에 놓고 재귀 왼쪽, 재귀 오른쪽 이렇게 문자열로 반환
    return [...inorder(leftChild), value, ...inorder(rightChild)];
  }

  function postorder(index) {
    if (index >= tree.length) return '';

    // 왼쪽 자식
    const leftChild = index * 2 + 1;
    // 오른쪽 자식
    const rightChild = index * 2 + 2;
    // 현재 자신
    const value = tree[index];
    // 자신을 앞에 놓고 재귀 왼쪽, 재귀 오른쪽 이렇게 문자열로 반환
    return [...postorder(leftChild), ...postorder(rightChild), value];
  }
}

console.log(solution([1, 2, 4, 5, 6, 7, 8, 9]));
