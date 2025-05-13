// 0/홍길동/index.js
// 0은 주차 번호
// 홍길동은 이름
// 0/홍길동/0.js
// 해당 주차 문제 풀이가 완료되면 PR을 통해 제출

// 2025-05-14 1번째 문제
function solution(num1, num2) {
  return num1 + num2;
}

console.log(solution(1, 2)); // 3
console.log(solution(1, 4)); // 5

// 2025-05-14 2번째 문제
function solution(num1, num2) {
  return num1 - num2;
}
console.log(solution(1, 2)); // -1
console.log(solution(1, 4)); // -3

// 2025-05-14 3번째 문제
function solution(isLiked) {
  return `나는 코딩이 ${isLiked ? '좋아' : '싫어'}!`;
}

console.log(solution(true)); // 나는 코딩이 좋아!
console.log(solution(false)); // 나는 코딩이 싫어!
