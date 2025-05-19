// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12949?language=javascript

function solution(arr1, arr2) {
  const row1 = arr1.length;
  const col1 = arr1[0].length; // 제한조건 곱할수 있는 배열만 주어진다 -> row2 와 값 일치
  const col2 = arr2[0].length;

  // 배열초기화 1차원 배열  length: row1 내부 2차원 배열 () => Array(col2).fill(0)
  const answer = Array.from({ length: row1 }, () => Array(col2).fill(0));

  // 값을 구해서 넣어줌
  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}
