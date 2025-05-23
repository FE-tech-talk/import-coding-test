/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */

/**
 * 1. answers의 0번 인덱스부터 마지막 인덱스까지 순회하면서 수포자 1, 2, 3의 0번 인덱스부터 마지막까지 비교하면서 같은 숫자인지 확인
 * 2. 잘 모르겠지만 if, case문으로 수포자 1, 2, 3과 정답을 비교
 * 3. 각 1, 2, 3을 결과로 반환한 뒤 배열에? 담아서 가장 큰 숫자 반환
 * 4. 가장 많이 맞힌 사람 카운트 +1 하고 최종 결과를 배열로 변환
 * 5. 가장 많이 맞힌 사람이 여러명일 수 있으므로 3명의 값을 서로 비교
 * */

// 기존 풀이
const people1 = [1, 2, 3, 4, 5];
const people2 = [2, 1, 2, 3, 2, 4, 2, 5];
const people3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

export const solution1 = (answers) => {
  let trueCount1 = 0;
  let trueCount2 = 0;
  let trueCount3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === people1[i]) {
      trueCount1 += 1;
    }
    if (answers[i] === people2[i]) {
      trueCount2 += 1;
    }
    if (answers[i] === people3[i]) {
      trueCount3 += 1;
    }
  }

  const winner = new Array(trueCount1, trueCount2, trueCount3);
  const highestScore = Math.max(...winner);
  const highestPeople = [];
  for (let i = 0; i < winner.length; i++) {
    if (winner[i] === highestScore) {
      highestPeople.push(i + 1);
    }
  }
};

// 정답 풀이
export const solution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const highestPeople = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestPeople.push(i + 1);
    }
  }

  return highestPeople;
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
