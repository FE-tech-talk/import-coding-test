// 8
// s: ( 와 )로 이루어진 문자열
function solution(s) {
  // stack 생성
  const stack = [];

  // s를 돌려서
  for (let str of s) {
    console.log(stack);
    // ( 이면 stack에 넣고
    if (str === '(') {
      stack.push('(');
    }

    // ) 일 때
    if (str === ')') {
      // stack의 마지막 원소가 ( 이면
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        // stack pop
        stack.pop();
        continue;
      }
      // 아니면 false로 리턴
      return false;
    }
  }

  // 빠져나오면 true로 리턴
  return stack.length === 0;
}

console.log(solution('(())()')); // 반환값 : true
console.log(solution('((())()')); // 반환값 : false
