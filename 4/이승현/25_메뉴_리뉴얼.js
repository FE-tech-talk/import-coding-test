// 단품을 조합해서 코스 요리 형태로 제공
// 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 함.
// 2가지 이상의 단품메뉴로 구성, 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함.
// orders: 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열
// course: 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수
function solution(orders, course) {
  const result = [];

  // compToLapsTable 생성 부분조합: 손님수
  const compToLapsTable = {};

  // orders를 순회해서
  for (let order of orders) {
    // course를 순회해서
    for (let c of course) {
      // course에 맞게 부분조합들을 생성하고
      const composition = makeComposition(order, c);
      // 부분조합을 순회해서
      for (comp of composition) {
        // 사전순으로 오름차순하고
        const newComp = comp.split('').sort().join('');
        // compToLapsTable[부분조합] = (compToLapsTable[부분조합]||0)+1
        compToLapsTable[newComp] = (compToLapsTable[newComp] || 0) + 1;
      }
    }
  }

  // lengthToLapsTable length: number
  const lengthToLapsTable = {};

  // compToLapsTable을 순회해서
  for (const comp in compToLapsTable) {
    // lengthToLapsTable을 갱신한다.
    const len = comp.length;
    lengthToLapsTable[len] = Math.max(
      lengthToLapsTable[len] || 2,
      compToLapsTable[comp]
    );
  }

  // compToLapsTable을 다시 순회해서
  for (const comp in compToLapsTable) {
    // 현재 comp가 lengthToLapsTable에 대응되는지 보고
    if (compToLapsTable[comp] === lengthToLapsTable[comp.length]) {
      // 되면 result에 추가
      result.push(comp);
    }
  }

  // result를 사전순으로 오름차순 정렬
  result.sort();

  // return: 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열
  // 사전 순으로 오름차순 정렬, 저장된 문자열로 사전순으로 오름차순 정렬
  // 여러 개라면 모두 배열에 담는다.
  return result;
}

// k 길이의 부분 조합을 구하는 함수
function makeComposition(str, k) {
  const splitedStr = str.split('');
  const composition = [];

  function makeRecursively(index, answer) {
    if (answer.length === k) {
      composition.push(answer);
    }
    for (let i = index; i < splitedStr.length; i++) {
      makeRecursively(i + 1, answer + splitedStr[i]);
    }
  }
  makeRecursively(0, '');

  return composition;
}
