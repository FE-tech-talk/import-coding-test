/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 * 
 */

// 현재 푼 코드
function solution(prices) {
  const stack = [];
  
  for(let i=0; i<prices.length; i++) {
      for(let j=i+1; j<prices.length; j++) {
          if(prices[i] > prices[j] || j === prices.length - 1) {
              stack.push(j-i)
              break;
          }
      }
  }
  stack.push(0);
  
  return stack;
}

// 작년 7월에 푼 코드
function solution(prices) {
  const arr = [];
  
  for(i=0; i<prices.length-1; i++) {
      for(j=i+1; j<prices.length-1; j++) {
          if (prices[i] > prices[j]) {
              break;
          }
      }
      arr.push(Math.abs(i-j));
  }
  
  arr.push(0)
  
  return arr;
}