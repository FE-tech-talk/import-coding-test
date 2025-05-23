// 10
// 처음엔 올바른 괄호 문자열
// x만큼 회전했을 때 올바른 괄호 문자열인 x의 개수를 찾으시오
// s: 올바른 괄호 문자열
function solution(s) {
  // x의 개수를 담을 result 생성
  let result = 0;
  const sList = s.split('');
  // s의 개수만큼 순회
  for (let i = 1; i < sList.length + 1; i++) {
    // 해당 수만큼 회전
    const newStr = [...s.slice(i, s.length), ...s.slice(0, i)];
    // 올바른 괄호 문자열인지 판단
    // stack을 만들고
    const stack = [];
    // 올바른지 판단하는 flag 변수
    let flag = true;
    // 새로운 괄호 문자열을 돌려서
    for (const newChar of newStr) {
      // 현재 괄호가 `(`일 경우 그냥 넣고
      if (newChar === '(' || newChar === '{' || newChar === '[') {
        stack.push(newChar);
      } else {
        // `)`인데 stack의 마지막이 `(`가 아닐 경우 false
        if (
          stack.length !== 0 &&
          ((newChar === ')' && stack[stack.length - 1] === '(') ||
            (newChar === '}' && stack[stack.length - 1] === '{') ||
            (newChar === ']' && stack[stack.length - 1] === '['))
        ) {
          stack.pop();
        } else {
          flag = false;
          break;
        }
      }
    }
    // 다 통과했을 때 stack.length ===0 이면 true
    flag = flag && stack.length === 0;
    // 위의 로직을 다 해서 true가 나오면 result +=1
    if (flag) result += 1;
    // 아니면 넘어감
  }

  // return: x만큼 회전했을 때 올바른 괄호 문자열인 x의 개수
  return result;
}
