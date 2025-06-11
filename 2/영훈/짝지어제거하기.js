/**
 * 앞에서부터 2개가 연속된 문자열 찾기.
 * 찾으면 pop
 * 다시 앞에서부터 2개가 연속된 문자열 찾기.
 * pop
 * 반복
 * 문자열 length만큼 반복하여 더이상 남지 않으면 1
 */

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
