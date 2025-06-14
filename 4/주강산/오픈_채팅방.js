// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const uidToName = {}; 
  const actions = [];

  for (let i=0; i<record.length; i++) {
    const [action, uid, name] = record[i].split(" ");

    if (action === "Enter") {
      uidToName[uid] = name;
      actions.push([uid, "들어왔습니다."]);
    } else if (action === "Leave") {
      actions.push([uid, "나갔습니다."]);
    } else if (action === "Change") {
      uidToName[uid] = name;  
    }
  }

  return actions.map(([uid, action]) => {
    return `${uidToName[uid]}님이 ${action}`;
  });
}