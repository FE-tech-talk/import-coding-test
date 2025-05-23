// 2025-05-14
// 4
// 3명이 수학문제를 찍음
// 각각이 다른 방식으로 찍음.
// a: 1 2 3 4 5
// b: 2 1 2 3 2 4 2 5
// c: 3 3 1 1 2 2 4 4 5 5
// 문제 1 ~ 5번, 10,000 문제
//
// @params: number[]
//
// return: 가장 많은 문제를 맞힌 사람이 누구인지 배열, 오름차순
const PATTERN_A = [1, 2, 3, 4, 5];
const PATTERN_B = [2, 1, 2, 3, 2, 4, 2, 5];
const PATTERN_C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const PATTERNS = [PATTERN_A, PATTERN_B, PATTERN_C];

function solution(answers) {
  // 각 사람들의 점수가 있는 배열을 생성해서
  const points = [0, 0, 0];

  // answer를 순회
  answers.forEach((answer, index) => {
    // PATTERN들도 돌리고
    PATTERNS.forEach((pattern, personIndex) => {
      // 해당 index를 나머지 연산으로 패턴의 어떤 인덱스에 위치하는지 확인해서
      const patternIndex = index % pattern.length;

      // 패턴에 대응되는 값과 실제 답이 일치하면 해당 인물에게 점수를 준다.
      if (answer === pattern[patternIndex]) {
        points[personIndex] += 1;
      }
    });
  });
  // 점수를 비교해서 가장 높은 사람들을 꺼내온다.
  const maxPoint = Math.max(...points);

  const result = [];
  // points를 순회해서 가장 높은 점수인 것들만 남긴다.
  points.forEach((point, index) => {
    if (point === maxPoint) {
      result.push(index + 1);
    }
  });

  // 오름차순으로 정렬해서 리턴
  return result.sort((a, b) => a - b);
}
