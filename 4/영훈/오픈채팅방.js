/**
 * @param record
 * @return ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
 */

function solution(record) {
  const answer = [];
  const uid = {};

  // record 배열의 각 key에 접근 => 0, 1, 2 ...
  for (let line in record) {
    // split을 통해 record 배열의 각 요소를 공백을 기준으로 나눠 새 배열 반환 => Ex. [Enter, uid1234, Muzi]
    let cmd = record[line].split(" ");
    if (cmd[0] != "Leave") {
      // 상태가 Enter 또는 Change인 경우 해당 유저 id를 key, 닉네임을 value로 uid 객체에 적용 => uid: { "uid1234": Muzi }
      uid[cmd[1]] = cmd[2];
    }
  }

  console.log(uid);

  for (let line in record) {
    // 똑같이 record 각 요소를 단어별로 나눠 새 배열 반환
    let cmd = record[line].split(" ");
    // 상태가 '입장'인 경우
    if (cmd[0] == "Enter") {
      // 입장에 맞는 메시지를 answer에 저장 Ex. "Prodo님이 들어왔습니다"
      answer.push(uid[cmd[1]] + "님이 들어왔습니다.");

      // 상태가 '나감'일 경우
    } else if (cmd[0] == "Leave") {
      // 나감에 맞는 메시지를 answer에 저장 Ex. "Prodo님이 나갔습니다"
      answer.push(uid[cmd[1]] + "님이 나갔습니다.");
    }
  }

  // 모두 반복하여 answer 배열에 넣은 후 반환
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
