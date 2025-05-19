// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      const pattern = patterns[j];
      const guess = pattern[i % pattern.length];
      if (answers[i] === guess) {
        scores[j]++;
      }
    }
  }

  const maxScore = Math.max(scores[0], scores[1], scores[2]);

  const result = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      result.push(i + 1);
    }
  }

  return result;
}
