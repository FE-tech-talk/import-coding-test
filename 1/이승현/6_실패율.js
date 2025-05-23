// 2025-05-16
// 6

// 실패율을 구하는 코드 완성
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//
// N: 전체 스테이지의수
// 1 <= N <= 500
// stages: 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
// 1 <= stages.length <= 200,000
// 1 이상 N+1 이하의 자연수, 현재 도전 중인 스테이지의 번호, N+1일 경우 N까지 클리어한 사용자
// return: 내림차순으로 실패율이 담긴 스테이지 번호 배열
// 실패율이 같다면 작은 스테이지 번호 먼저
// 도달한 유저가 없으면 실패율 0
function solution(N, stages) {
  // i번 스테이지를 통과한 사람들 총합과 멈춘 사람의 수가 담긴 배열 totalsPerStage
  // 길이는 N
  // { pass: number; now: number }
  const totalsPerStage = new Array(N).fill(0).map((_) => ({ pass: 0, now: 0 }));
  // stages 순회
  for (let i = 0; i < stages.length; i++) {
    // 그 사람의 스테이지를 뽑아서
    const stage = stages[i];
    // 그 스테이지 순회
    for (let j = 0; j < stage; j++) {
      if (j === N) continue;
      // 모든 인덱스 totalsPerstage.pass +=1
      totalsPerStage[j].pass += 1;
      // 마지막 인덱스의 totalsPerstage.now +=1
      if (j === stage - 1) {
        totalsPerStage[j].now += 1;
      }
      // 도달한 사람의 수와 멈춘 사람의 수가 담긴 배열 완성
    }
  }

  // totalsPerstage를 돌려서 now/pass로 mapping,
  // 실패율 리스트 만들어줌
  const failRateList = totalsPerStage.map(({ pass, now }, i) => ({
    fail: pass === 0 ? 0 : now / pass,
    id: i + 1,
  }));

  // 실패율을 기준으로 내림차순, 같으면 인덱스 번호로 내림차순하는 스테이지 번호 배열 리턴
  return failRateList.sort((a, b) => b.fail - a.fail).map(({ id }) => id);
}
