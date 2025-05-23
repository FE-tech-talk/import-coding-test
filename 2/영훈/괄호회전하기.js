/**
 * 괄호 종류는 총 3개 - (), {}, []
 * 초기 상태가 올바른 괄호 문자열인지 확인
 * 모양이 어떻게 됐든 괄호 열림부터 와야됨.
 * 회전시키기 - 0번 인덱스가 마지막 인덱스가 됨.
 * 회전 가능한 횟수 - x칸 - 0 <= x < s.length
 * 절대 올바른 괄호가 될 수 없는 경우? - 스택에 남아있는 괄호가 있는 경우일듯?
 * [({})]{}
 */

function solution(s) {
  const 괄호 = [...s];
  const stack = []; // [, (, {,
  const openParentheses = ["(", "{", "["];
  const closeParentheses = [")", "}", "]"];
  let count = 0;

  if (openParentheses.includes(괄호[0])) {
    for (let i = 0; i < s.length; i++) {
      if (openParentheses.includes(괄호[i])) {
        stack.push(s[i]);
      } else if (closeParentheses.includes(괄호[i])) {
        if (stack.length === 0) {
          return;
        }
        stack.pop();
      }
    }
    stack.length === 0 && count++;
  } else {
    // 초기 상태가 올바른 괄호가 아닐때...
  }
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
