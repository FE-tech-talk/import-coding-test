// 1번부터 N번까지 차례대로 배정
// 토너먼트 방식, 1,2에서 2가 승리하면 다음 라운드에서 Math.ceil(N/2)인 1을 부여 받음.
// N: 게임 참가자 수
// A: 참가자 번호
// B: 경쟁자 번호
// A,B는 항상 이긴다고 가정
function solution(N, A, B) {
  // 현재 A번호
  let curA = A;
  // 현재 B번호
  let curB = B;
  // 라운드 수
  let result = 0;
  // 계속 반복
  while (true) {
    // A와 B가 같으면 반환
    if (curA === curB) break;
    // A,B를 다음 라운드로 보내고
    curA = Math.ceil(curA / 2);
    curB = Math.ceil(curB / 2);
    // 라운드 수 증가
    result += 1;
  }

  // A번과 B번이 몇 번째 라운드에서 만나는지 반환
  // 라운드 수 반환
  return result;
}
