/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

// [1] 첫 번째 풀이 (실패)
// 실패 원인: 스택을 3개 써서 괄호의 쌍을 확인했지만, "[{)]}" 와 같은 케이스에서 틀림.
function solution(s) {    
    const len = s.length;
    let result = 0;
    
    for(let i=0; i<len; i++) {
        const stack1 = [];
        const stack2 = [];
        const stack3 = [];
        
        for(let j=0; j<len; j++) {
            const cur = s[(i+j)%len];
            if(cur === '[' || cur === '(' || cur === '{') {
                if(cur === '[') stack1.push('[')
                if(cur === '(') stack2.push('(')   
                if(cur === '{') stack3.push('{')   
            } else {
                if(cur === ']') {
                    stack1.length > 0 ? stack1.pop() : stack1.push(']');
                } 
                if(cur === ')') {
                    stack2.length > 0 ? stack2.pop() : stack2.push(')');
                } 
                if(cur === '}') {
                    stack3.length > 0 ? stack3.pop() : stack3.push('}');
                } 
            }
        }
        if(stack1.length === 0 && stack2.length === 0 && stack3.length === 0) {
            result += 1;
        }
    }
    return result;
}

// [2] 두 번째 풀이
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