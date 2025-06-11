/**
 * 요세푸스 문제
 *
 * N명의 사람이 원형으로 서있고, 각각 1~N번의 번호를 가짐
 * K번째 사람을 제거하고, 제거된 사람의 다음 사람부터 다시 K번째 사람을 제거
 * 마지막에 남은 사람의 번호를 반환
 *
 * @param {number} N - 사람의 수
 * @param {number} K - 제거할 순서
 * @returns {number} - 마지막에 남은 사람의 번호
 */

const solution = (N, K) => {
  const queue = Array.from({ length: N }, (_, i) => i + 1);

  let count = 1;

  while (queue.length > 1) {
    if (count === K) {
      queue.shift();
      count = 1;
      continue;
    }
    queue.push(queue.shift()); // 앞에 있던걸 뒤로 이동
    count++;
  }

  return queue[0];
};

console.log(solution(5, 2)); // 3
console.log(solution(7, 3)); // 4
console.log(solution(4, 2)); // 1
