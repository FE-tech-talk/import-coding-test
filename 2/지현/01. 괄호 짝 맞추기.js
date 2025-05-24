/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 
 * 많이 보던 문제 유형이라 무난하게 풀었음.
 */

function solution(str) {
  const stack = [];
  for(s of str) {
    if(s === '(') {
    stack.push(s)
    } else {
      if(stack[stack.length - 1] === '(') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(solution("()()"));
console.log(solution("(())"));
console.log(solution("(()"));
console.log(solution(")()"));
console.log(solution("(())()"));
console.log(solution("((())()"));