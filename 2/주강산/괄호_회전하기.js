// 링크: https://programmers.co.kr/learn/courses/30/lessons/76502

function isValid(chars) {
  const stack = [];

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === "(") {
      stack.push(")");
    } else if (ch === "[") {
      stack.push("]");
    } else if (ch === "{") {
      stack.push("}");
    } else {
      if (stack.pop() !== ch) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function solution(s) {
  let count = 0;
  const arr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) {
      count++;
    }

    arr.push(arr.shift());
  }

  return count;
}
