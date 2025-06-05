/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */

/**
 * 스테이지에 도전한 사용자의 수 구하기
 * 아직 스테이지에 남아있는 사용자 구하기
 * 스테이지에 도전한 유저가 없는 경우 걸러내기
 * 실패율 높은 스테이지부터 내림차순 정렬
 * 실패율 같은 경우 처리
 */

// 기존 풀이
function solution1(N, stages) {
  const stageNumber = [];
  let clearUsers = [];
  let failedUsers = [];

  // 전체 스테이지 갯수 배열에 추가
  for (let i = 1; i <= N; i++) {
    stageNumber.push(i);
  }

  // 스테이지에 도달한 사용자 구하기
  for (let i = 0; i < stageNumber.length; i++) {
    let clearCount = 0;
    let failedCount = 0;
    for (let j = 0; j < stages.length; j++) {
      // 스테이지에 도달한 모든 사용자의 카운드 증가
      if (stageNumber[i] <= stages[j]) {
        clearCount++;
      }
      // 아직 스테이지에 머무르는 사용자의 카운드만 증가
      if (stageNumber[i] === stages[j]) {
        failedCount++;
      }
    }

    // 반복문 종료마다 각 배열에 계산된 카운트 저장
    clearUsers.push(clearCount);
    failedUsers.push(failedCount);
  }

  console.log(clearUsers);
  console.log(failedUsers);

  // 실패율 구해서 스테이지 순서대로 배열에 저장(정렬 전)
  const failedAverage = clearUsers.map(
    (clearUser, i) => failedUsers[i] / clearUser
  );

  console.log(failedAverage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));

/**
 * 기존 코드에서는 실패율(failedAverage)을 [ 0.125, 0.42857142857142855, 0.5, 0.5, 0 ] 와 같이 스테이지 순서대로 배열에 저장함
 * 여기서 내림차순 정렬, 실패율이 동일할 때, 더 작은 숫자의 스테이지가 앞으로 와야된다는 조건 등을 어떻게 처리할지 몰랐음
 * 또한 도달한 유저가 없는 스테이지의 실패율을 0으로 처리하는 부분도 고려하지 못한 채 타임오버
 */

// 정답 풀이
function solution(N, stages) {
  // ➊ 스테이지별 도전자 수를 구함

  // 배열의 인덱스는 0부터 시작하므로 N + 1 즉, 주어진 N에서 마지막 단계의 스테이지를 클리어한 사용자를 저장하기 위해 N + 2 크기의 배열 생성
  const challenger = new Array(N + 2).fill(0); // [0, 0, 0, 0, 0, 0, 0]

  // 이렇게 미리 스테이지 순서대로 해당 스테이지에 머무르는 사용자 구해놓으면 편할듯
  for (const stage of stages) {
    challenger[stage] += 1; // [0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [0, 1, 2, 0, 0, 0, 0], [0, 1, 2, 0, 0, 1, 0] ,,,
  }
  // challenger = [0, 1, 3, 2, 1, 1, 0] <-- 스테이지 순서대로(아직 스테이지에 머무르는 사용자들)

  // ➋ 스테이지별 실패한 사용자 수 계산
  const fails = {};
  let total = stages.length; // [2, 1, 2, 6, 2, 4, 3, 3] 일 때, 8

  // ➌ 각 스테이지를 순회하며, 실패율 계산
  for (let i = 1; i <= N; i++) {
    // challenger 배열에는 스테이지 순서대로 해당 스테이지에 머무는 사용자의 수가 담겨있으므로 challenger[0] 일 때, 실패율 0
    if (challenger[i] === 0) {
      // ➍ 도전한 사람이 없는 경우, 실패율은 0
      fails[i] = 0; // key가 스테이지, 값은 0
      continue;
    }

    // ➎ 실패율 계산
    fails[i] = challenger[i] / total; // key가 스테이지, 값은 실패율. Ex. fails: { '1': 0.125, '2': 0.428 }

    // ➏ 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌
    total -= challenger[i]; // 이 부분이 많이 헷갈렸는데, total에서 현재 스테이지에 머무는 중인 사용자를 빼면서 누적
  }

  // Object.entries()로 각 인덱스에 스테이지 숫자와 실패율을 2차원 배열로 변경 후(Ex. result = [[ '3', 0.5 ], [ '4', 0.5 ]]) 내림차순 정렬
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  // 스테이지 번호는 각 2차원 배열의 0번 인덱스에 있으므로, 스테이지 번호로만 이뤄진 새로운 배열 반환
  return result.map((v) => Number(v[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
