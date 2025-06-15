/**
 * 문자열 해싱을 이용한 검색 함수 만들기
 */

const solution = (string, query) => {
  const hashTable = {};
  const result = [];

  for (const str of string) {
    hashTable[str] = 1;
  }

  for (const str of query) {
    if (hashTable[str] === 1) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

console.log(
  solution(
    ['apple', 'banana', 'cherry'],
    ['banana', 'orange', 'melon', 'apple']
  )
);
