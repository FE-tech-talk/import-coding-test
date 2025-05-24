/**
 * 10진수를 2진수로 변환하기
 * 
 * 무난하게 풀었음.
 */

function solution(num) {
  const stack = [];
  while(num > 0) { // 몫이 0이 될 때까지 반복
    stack.push(num % 2); // 나머지 스택에 넣기
    num = Math.floor(num / 2); 
  }
  return stack.reverse().join('');
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));