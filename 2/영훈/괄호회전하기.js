/**
 * 괄호 종류는 총 3개 - (), {}, []
 * 초기 상태가 올바른 괄호 문자열인지 확인
 * 모양이 어떻게 됐든 괄호 열림부터 와야됨.
 * 회전시키기 - 0번 인덱스가 마지막 인덱스가 됨.
 * 회전 가능한 횟수 - x칸 - 0 <= x < s.length
 * 절대 올바른 괄호가 될 수 없는 경우? - 스택에 남아있는 괄호가 있는 경우일듯?
 * [({})]{}
 */

/* 기존 풀이 */
function solution1(s) {
  const 괄호 = [...s];
  const stack = []; // [, (, {,
  const openParentheses = ["(", "{", "["]; // 여는 괄호
  const closeParentheses = [")", "}", "]"]; // 닫는 괄호
  let count = 0; // 올바른 괄호가 되는 카운트

  for (let i = 0; i < s.length; i++) {
    if (openParentheses.includes(괄호[i])) {
      stack.push(괄호[i]); // 여는 괄호일 때 하나씩 스택에 추가
    } else if (closeParentheses.includes(괄호[i])) {
      if (stack.length === 0) {
        // 닫는 괄호인데, 스택이 비어있으면 맞는 짝이 없으므로 리턴
        return;
      }
      stack.pop(); // 짝이 맞는 괄호는 스택에서 제거
      stack.length === 0 && count++; // 짝이 맞는 괄호가 있으면 올바른 괄호 형식이므로 카운트 1 증가
    }
  }

  return count;
}

/**
 * 기존 풀이 문제점 ❗️
 * 괄호의 종류가 3개인데, 여는 괄호랑 닫는 괄호가 맞는 짝인지 판별 안함
 * 왼쪽으로 회전시킬때마다 올바른 괄호인지 확인해야 되는데 안함
 */

/* 정답 풀이 */
function solution(s) {
  // 짝이 맞는지 확인하는 함수
  const isValid = (str) => {
    const stack = [];
    const pair = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    for (let i = 0; i < str.length; i++) {
      const current = str[i]; // 현재 싸이클 인덱스 문자열

      if (["(", "{", "["].includes(current)) {
        // current가 여는 괄호일때 스택에 추가
        stack.push(current);
      } else {
        // 스택이 비어있거나, 스택 맨 위에 있는 여는 괄호와 짝이 맞지 않으면 false 반환
        if (stack.length === 0 || stack[stack.length - 1] !== pair[current]) {
          return false;
        }
        // 짝이 맞다면 스택에서 여는 괄호 제거
        stack.pop();
      }
    }

    // 스택이 비어있다면 짝이 맞았으므로 true 반환
    return stack.length === 0;
  };

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i); // slice 사용하여 새로운 문자열 조합으로 왼쪽으로 한칸씩 회전
    if (isValid(rotated)) {
      // 한칸씩 회전할때마다 isValid 함수를 통해 올바른 괄호인지 확인 후 맞다면 카운트 1씩 증가
      count++;
    }
  }

  return count; // 올바른 괄호인 총 카운트 반환
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
