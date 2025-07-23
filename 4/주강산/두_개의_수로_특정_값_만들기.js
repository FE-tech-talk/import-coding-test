// n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때,
// 이 중에서 합이 target인 두 수가 arr에 있는지 찾고,
// 있으면 true, 없으면 false를 반환하는 solution() 함수를 작성하세요.

// 제약 조건
// • n은 2 이상 10,000 이하의 자연수입니다.
// • arr의 각 원소는 1 이상 10,000 이하의 자연수입니다.
// • arr의 원소 중 중복되는 원소는 없습니다.
// • target은 1 이상 20,000 이하의 자연수입니다.

function solution(arr, target) {
  const seen = new Set();

  for (const num of arr) {
    if (seen.has(target - num)) return true;
    seen.add(num);
  }

  return false;
}
