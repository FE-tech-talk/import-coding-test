/**
 * 완주하지 못한 선수
 * [https://school.programmers.co.kr/learn/courses/30/lessons/42576]
 */

// [1] 정렬을 이용한 방법
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant.pop();
}

// [2] 해시 테이블 사용하는 방법
function solution(participant, completion) {
  const hashTable = {};
  for (const name of participant) {
    if (hashTable[name]) hashTable[name] += 1;
    else hashTable[name] = 1;
  }

  for (const name of completion) {
    hashTable[name] -= 1;
  }

  for (const name in hashTable) {
    if (hashTable[name]) return name;
  }
}
