// 2025-05-15
// 5
// 두 행렬을 받아서 행렬의 곱셈을 구하라.
function solution(arr1, arr2) {
  const firstRowLen = arr1.length;
  const secondRowLen = arr2.length;
  const secondColLen = arr2[0].length;
  const result = new Array(firstRowLen)
    .fill(0)
    .map((v) => new Array(secondColLen).fill(0));

  // 첫번째 행렬의 행과 두번째 행렬의 열 대응해서 곱해준다.
  // ㅡ ㅣ 로 기억하면 됨.
  for (let i = 0; i < firstRowLen; i++) {
    for (let j = 0; j < secondColLen; j++) {
      // result[i][j] = ( arr1[y][k] * arr2[k][x] ), k는 secondRowLen
      for (let k = 0; k < secondRowLen; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
