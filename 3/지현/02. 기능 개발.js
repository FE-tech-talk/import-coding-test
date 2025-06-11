/**
 * 기능 개발
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 *
 * [처음에 틀린 이유]
 * progresses만 shift하고, speeds는 그대로 두었음.
 */

/**
 * 직접 푼 방식
 * 시간복잡도: O(n^2)
 */
function solution(progresses, speeds) {
  const result = [];

  while (progresses.length) {
    let count = 0;
    while (progresses[0] >= 100) {
      count++;
      progresses.shift();
      speeds.shift(); // 1차 시도에서 이 코드 작성 안 함.
    }
    count && result.push(count);

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  }
  return result;
}

/**
 * 책 참고해서 푼 방식
 * 시간복잡도: O(n)
 */
function solution(progresses, speeds) {
  const result = [];

  // 끝나는 날짜
  const days = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });

  let currentDay = days[0];
  let count = 0;

  for (let i = 0; i < progresses.length; i++) {
    if (days[i] <= currentDay) {
      count++;
    } else {
      result.push(count);
      count = 1;
      currentDay = days[i];
    }
  }

  result.push(count);
  return result;
}
