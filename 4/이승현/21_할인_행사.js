// 10일 간 회원 자격 부여
// 매일 한 가지 제품 할인, 원하는 제품과 수량이 10일 연속으로 일치할 경우 회원가입
// 미래 10일을 보고 모든 제품을 할인 구매할 수 있어야 회원가입
// want: 원하는 제품을 나타내는 문자열
// number: 원하는 제품의 수량을 나타내는 정수 배열
// discount: 할인하는 제품을 나타내는 문자열 배열
function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i <= discount.length; i++) {
    const wantTable = makeTableWithLists(want, number);
    const disCountTable = makeTableWithOneList(discount.slice(i, i + 10));
    for (let key in disCountTable) {
      if (wantTable[key] === disCountTable[key]) {
        delete wantTable[key];
      }
    }
    if (Object.keys(wantTable).length === 0) {
      result += 1;
    }
  }

  return result;
}

function makeTableWithOneList(list) {
  const table = {};

  for (let value of list) {
    table[value] = (table[value] || 0) + 1;
  }

  return table;
}

function makeTableWithLists(keyList, valueList) {
  const table = {};
  for (let index in keyList) {
    table[keyList[index]] = valueList[index];
  }
  return table;
}
