// stringList: 문자열 리스트
// queryList: 쿼리 리스트
export function solution(stringList, queryList) {
  const hashList = stringList.map(polynomialHash);

  const result = [];

  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  // return: queryList에 있는 문자열이 stringList에 있는지 확인해서 이를 리스트 형태로 반환
  return result;
}

function polynomialHash(str) {
  const p = 31;
  const m = 1_000_000_007;
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}
