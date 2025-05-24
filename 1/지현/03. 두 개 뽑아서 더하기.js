/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/68644
 */

const solution = (input) => {
  let result = [];

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      result.push(input[i] + input[j]);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
