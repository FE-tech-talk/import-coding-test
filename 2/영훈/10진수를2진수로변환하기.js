/**
 * 10진수를 입력받아 2진수로 변환해 반환하는 solution()함수를 구현하세요.
 *
 * 제약조건
 * decimal은 1이상 10억 미만의 자연수
 *
 * 1. 빈 배열(스택) 생성
 * 2. N을 2로 나누고 나머지 스택에 push
 * 3. 0이 될때까지 반복
 * 4. 0이 되면 저장된 스택 가장 뒤 인덱스부터 문자열 이어붙이기
 */

function solution(N) {
  const stack = [];

  while (0 < N) {
    stack.push(N % 2);
    N = Math.floor(N / 2);
  }

  let result = "";
  while (0 < stack.length) {
    result += stack.pop();
  }

  return result;
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
