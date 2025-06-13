// 관리자창에서는 누군가가 들어오면
// "[닉네임]님이 들어왔습니다." 출력
// "[닉네임]님이 나갔습니다." 출력
// 닉네임을 변경하려면 채팅방을 나간 후 새로운 닉네임으로 들어가거나 채팅방에서 변경하는 방법이 있다.
// 변경 후에는 기존의 메시지의 닉네임도 전부 변경된다.
// record: 들어오고 나가거나 변경한 기록들이 담긴 문자열 배열
function solution(record) {
  // 결과 배열을 만든다. {userId: string, type: enter | leave}[]
  const result = [];
  // userTable을 만든다. uesrId:nickName
  const userTable = {};
  // record를 순회한다.
  for (let r of record) {
    const [commend, userId, nickName] = r.split(' ');
    // 어떤 명령어인지 확인하고
    switch (commend) {
      // Enter면
      case 'Enter':
        // userTable에 해당 userId : nickName을 갱신해주고
        userTable[userId] = nickName;
        // 결과 배열에 갱신한다.
        result.push({ userId, type: 'Enter' });
        break;
      // Leave면
      case 'Leave':
        // 결과 배열에 갱신한다.
        result.push({ userId, type: 'Leave' });
        break;
      // Change면
      case 'Change':
        // userTable을 userId : nickName으로 갱신한다.
        userTable[userId] = nickName;
        break;
    }
  }

  // return: 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열로
  return result.map(
    ({ userId, type }) =>
      `${userTable[userId]}님이 ${
        type === 'Leave' ? '나갔습니다.' : '들어왔습니다.'
      }`
  );
  // 문자열은
  // Enter [userId] [nickName]
  // Leave [userId]
  // Change [userId] [nickName]
  // 이 존재한다.
}
