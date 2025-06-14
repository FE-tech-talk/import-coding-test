// 각 유저는 한 번에 한 명의 유저를 신고
// 신고 횟수에 제한은 없고 서로 다른 유저를 계속 신고 가능
// 한 유저를 여러 번 신고할 수 있으나 횟수는 1회로 처리
// k번 신고되면 정리, 이 사실을 신고한 유저에게 메일로 발송
// id_list: 이용자의 ID가 담긴 문자열 배열
// report: 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
// k: 정지 기준이 되는 신고 횟수
function solution(id_list, report, k) {
  // 결과 배열 생성
  const result = id_list.map((v) => 0);

  // idTable 생성 userId: Set<userId>
  const idTable = {};

  // idToIndexTable 생성 userId: index
  const idToIndexTable = id_list.reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {});

  // report를 돌려서
  for (let r of report) {
    // attacker receiver 나눈 후에
    const [attacker, receiver] = r.split(' ');
    // idTable[receiver] 에 attacker 추가
    if (!idTable[receiver]) idTable[receiver] = new Set();
    idTable[receiver].add(attacker);
  }

  // idTable을 돌려서
  for (let receiver in idTable) {
    const attackerList = [...idTable[receiver]];
    // 내부 Set의 크기가 k일 경우
    if (attackerList.length >= k) {
      // 내부 Set에 존재하는 userId의 index를 찾아서 result에 +1
      attackerList.forEach((userId) => {
        result[idToIndexTable[userId]] += 1;
      });
    }
  }

  // return: id_list의 순서대로 메일 주는 횟수를 정수 배열로
  return result;
}
