/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12949
 */

/**
 * 1. 행렬 곱셈 공식 파악. Ex. 1행 * 1열, 1행 * 2열 ...
 * 2. 각 행렬 요소 인덱스 매칭시키기. Ex. arr1[0][0] * arr2[0][0] + arr1[0][1] * arr2[1][0]
 * 3. 반복문 써서 곱한 결과값을 2차원 배열로 만들기
 */

// 기존 풀이
function solution1(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      answer.push(arr1[i][j] * arr2[j][i]);
    }
  }
  // 행렬의 곱셈 규칙에 따라, arr1[0][0] * arr2[0][0], arr1[0][1] * arr2[1][0] 등의 순서로 곱하는 것만 생각했는데, 결과 행렬의 크기에 맞는 2차원 배열을 만들고, 곱한 값을 더하는 부분에서 어떻게 로직을 짤지 몰라 타임오버
  return answer;
}

// 정답 풀이
function solution(arr1, arr2) {
  // 기존 로직에서는 for문에서 바로 arr1.length과 같이 배열1에 대한 행을 작성했는데, 이렇게 미리 변수로 선언해놓는게 가독성도 좋고 활용하기에 더 좋다고 느꼈다
  const r1 = arr1.length;
  const c1 = arr1[0].length;
  const r2 = arr2.length;
  const c2 = arr2[0].length;

  // 이렇게 결과 행렬 크기에 맞는 빈 2차원 배열을 미리 만들어 놓는 부분이 필요했을듯
  const ret = [];
  for (let i = 0; i < r1; i++) {
    ret.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      // 왜 for문을 3번이나 중첩해서 변수 k까지 쓰지?에 대한 의문이 있었는데, 결과 행렬의 각 행과 열에 위치하는 성분을 구하려면 곱한 값을 왼쪽 행렬의 열 갯수만큼 누적해서 더해줘야 하기 때문(결과 행렬의 크기 = 왼쪽 행렬의 행 * 오른쪽 행렬의 열)
      for (let k = 0; k < c1; k++) {
        ret[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return ret;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
