/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/12949
 * 
 * 그냥 행렬 계산을 모르겠어서 참고해서 풀었음
 */

function solution(arr1, arr2) {   
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  
  const row2 = arr2.length;
  const col2 = arr2[0].length;   
  
  // 결과를 저장할 2차원 배열 초기화
  // 배열 크기 row1 * col2 
  const result = Array.from({ length: row1 }, () => Array(col2).fill(0));
  
  // arr1의 각 행과 arr2 각 열에 대하여
  for(let i = 0; i < row1; i++) {
      for(let j = 0; j < col2; j++) {
          // 두 행렬의 데이터를 곱해 결과 배열에 더해줌
          for(let k = 0; k < col1; k++) {
              result[i][j] += arr1[i][k] * arr2[k][j];
          }
      }
  }
  
  return result;
}