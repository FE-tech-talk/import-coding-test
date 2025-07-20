// union(x,y), find(x)을 구현하시오.
// k: 노드의 개수
// operations: 수행할 연산
// ['u',1,2] -> 1과 2를 union
// ['f',1] -> 1의 대표 원소를 찾기
// union 조건은 value가 더 작으면 자식으로 내려가서 결합
export function solution(k, operations) {
  // 집합 배열 초기화
  const result = new Array(k).fill(0).map((_, index) => index);

  // operations를 돌려서 로직 수행
  for (const [command, ele1, ele2] of operations) {
    switch (command) {
      case 'u':
        union(ele1, ele2);
        break;
      case 'f':
        find(ele1);
        break;
    }
  }

  // return 집합의 개수 반환
  return new Set(result.map((node) => find(node))).size;

  function union(a, b) {
    const first = find(a);
    const second = find(b);

    if (first > second) {
      result[second] = first;
    } else {
      result[first] = second;
    }
  }

  function find(x) {
    if (result[x] !== x) {
      result[x] = find(result[x]);
    }
    return result[x];
  }
}
