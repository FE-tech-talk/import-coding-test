// 10진수를 입력받아 2진수로 변환해 반환하는 solution() 함수를 구현하세요.

// 제약조건
// decimal은 1이상 10억 미만의 자연수

// 가장 간단한 방법
// function solution(decimal) {
//   return decimal.toString(2);
// }

// console.log(solution(10))
// console.log(solution(27))
// console.log(solution(12345))

function solution(decimal) {
  const stack = [];
  while (decimal > 0) {
    const remain = decimal % 2;
    if (remain === 1) {
      decimal = decimal - 1;
    }
    stack.unshift(remain);
    decimal = decimal / 2;
  }
  return stack.join("")
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
