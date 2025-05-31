/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */

function solution(answers) {
  const supo1 = [1,2,3,4,5];
  const supo2 = [2,1,2,3,2,4,2,5];
  const supo3 = [3,3,1,1,2,2,4,4,5,5];
  
  const count = [0,0,0]
  
  for(let i=0; i<answers.length; i++) {
      const item = answers[i];
      
      if(item === supo1[i % supo1.length]) count[0] ++;
      if(item === supo2[i % supo2.length]) count[1] ++;
      if(item === supo3[i % supo3.length]) count[2] ++;
  }
  
  let result = [];
  const max = Math.max(...count);
  for(let i=0; i<count.length; i++) {
      if(count[i] === max) result.push(i+1);
  }
  
  return result;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));