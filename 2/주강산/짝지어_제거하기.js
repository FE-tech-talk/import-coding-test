// 링크 https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    const len = stack.length;
    if (len >= 2 && stack[len - 1] === stack[len - 2]) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}