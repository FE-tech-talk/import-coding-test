/**
 * 메뉴 리뉴얼
 * [https://school.programmers.co.kr/learn/courses/30/lessons/72411]
 */

// 메뉴 조합
const getCombination = (arr, n) => {
  // 1개 조합
  if (n === 1) return arr.map((v) => [v]);

  const result = [];

  /**
   * fixed 고정 값
   * idx 인덱스
   * arr 배열
   */
  arr.forEach((fixed, idx, arr) => {
    // idx번째 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 이전 요소를 제외하고 재귀호출
    const combination = getCombination(rest, n - 1);
    // 선택된 요소와 재귀호출 결과 조합
    const combineFix = combination.map((v) => [fixed, ...v]);
    // 결과 값 추가
    result.push(...combineFix);
  });

  return result;
};

const solution = (orders, course) => {
  const result = [];

  // 각 코스 요리 길이에 대해
  for (const c of course) {
    const menu = [];

    for (const order of orders) {
      // 주문 내역을 정렬하여 조합 생성
      const combination = getCombination(order.split('').sort(), c);
      menu.push(...combination);
    }

    // 메뉴 조합 카운트
    const menuCount = {};
    for (const m of menu) {
      const key = m.join('');
      menuCount[key] = (menuCount[key] || 0) + 1;
    }

    // 최대 주문 횟수 찾기
    const maxCount = Math.max(...Object.values(menuCount));

    if (maxCount > 1) {
      for (const [menu, count] of Object.entries(menuCount)) {
        if (count === maxCount) {
          result.push(menu);
        }
      }
    }
  }

  return result.sort();
};

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
);
console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
);
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
