// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  var answer = [];
  // 총 유저수
  let users = stages.length;

  for (let stage = 1; stage <= N; stage++) {
    // 현재 스테이지에 머물러 있는 사람 수
    const stay = stages.filter((s) => s === stage).length;

    // 실패율 계산
    const failRate = stay / users;

    // 스테이지와 실패율을 보관
    answer.push({ stage, failRate });

    // 스테이지에 머물러 있는 유저 수 제외
    users -= stay;
  }

  // 실패율 기준으로 내림차순 정렬, 같으면 스테이지 번호 오름차순
  answer.sort((a, b) => {
    if (b.failRate !== a.failRate) {
      return b.failRate - a.failRate;
    }
    return a.stage - b.stage;
  });

  // 스테이지 번호만 추출해서 리턴
  return answer.map((r) => r.stage);
}
