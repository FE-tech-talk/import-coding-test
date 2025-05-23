// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  const stack = prices.map((p) => [p, 0]);

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      stack[i][1]++;
      if (stack[i][0] > prices[j]) break;
    }
  }

  return stack.map((el) => el[1]);
}
