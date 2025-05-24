/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 * 
 * 처음에는 스택을 3개 써서 괄호의 쌍은 확인했지만, "[{)]}" 와 같은 케이스에서 틀림.
 */

function solution(s) {    
  const len = s.length;
  let result = 0;
  
  for(let i=0; i<len; i++) {
      const stack = [];
      
      for(let j=0; j<len; j++) {
          // 회전한 문자열의 현재 문자
          const cur = s[(i+j)%len];

          if(cur === '[' || cur === '(' || cur === '{') {
              stack.push(cur)  
          } else { // ']' ')' '}'
              const last = stack.pop();
              if(cur === ']' && last !== '[' || cur === ')' && last !== '(' || cur === '}' && last !== '{' ) {
                  stack.push(cur);
              }
          }
      }
      if(stack.length === 0) result++;
  }
  return result;
}