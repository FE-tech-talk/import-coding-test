/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */

function solution(str) {
  const stack = [];
  
  for(s of str) {
      if(stack[stack.length-1] === s) {
          stack.pop();
      } else {
          stack.push(s);   
      }
  }
  return stack.length ? 0 : 1
}