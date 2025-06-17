/**
 * 배열 인덱스 순회하면서 마지막 인덱스까지 비교해야될듯?
 * Ex. [1, 2, 3, 2, 3] 일 때, index0 = 1 부터 length - 1 까지 비교
 * 만약 현재 순회중인 숫자보다 더 낮은 숫자가 나왔을때 몇번 비교했는지 구하기
 * 마지막 인덱스는 무조건 0이 되겠음
 */

function solution(prices) {
  const stack = [];
  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++; // 가격이 유지되면 1씩 증가
      if (prices[i] > prices[j]) break; // 주식 가격이 떨어지는 순간 카운트 증가 중지
    }
    stack.push(count); // 몇 초 동안 가격이 유지됐었는지 stack 배열에 push로 기록
  }
  return stack;
}

console.log(solution([1, 2, 3, 2, 3]));
