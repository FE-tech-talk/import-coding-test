/**
 * N명의 사람이 원 형태로 서 있습니다.
 * 각 사람은 1부터 N까지 번호표를 갖고 있습니다.
 * 그리고 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다.
 *
 * - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다.
 * - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다.
 *
 * N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution() 함수를 구현해주세요.
 *
 * 제약 조건
 *
 * N과 K는 1이상 1000이하의 자연수입니다.
 */

function solution(N, K) {
  const queue = [];

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    for (let i = 0; i < K; i++) {
      queue.push(queue.shift());
    }
    queue.pop();
  }

  return queue.pop();
}

console.log(solution(5, 2));
