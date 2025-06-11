// 단 한명을 제외하고 마라톤 완주함
// participant: 마라톤에 참여한 선수들의 이름 배열
// completion: 완주한 선수들의 이름 배열
function solution(participant, completion) {
  const completionTable = makePersonToBooleanMap(completion);
  const participantTable = makePersonToBooleanMap(participant);

  for (const person of participant) {
    if (completionTable[person] !== participantTable[person]) {
      return person;
    }
  }
  // return: 완주하지 못한 선수의 이름
  return '문제에 오류가 있어요.';
}

function makePersonToBooleanMap(arr) {
  const table = {};
  arr.forEach((person) => (table[person] = (table[person] || 0) + 1));
  return table;
}
