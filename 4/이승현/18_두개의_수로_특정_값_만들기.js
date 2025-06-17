// arr: n개의 양의 정수로 이루어진 리스트
// target: 정수
function makeTable(arr) {
  const table = {};
  arr.forEach((item) => (table[item] = true));
  return table;
}

export function solution(arr, target) {
  const table = makeTable(arr);

  for (let item of arr) {
    const diff = target - item;
    if (diff > 0 && diff !== item && table[diff]) {
      return true;
    }
  }

  // return: 두 수의 합이 target인 정수가 존재하는지 여부 ( boolean )
  return false;
}

console.log(solution(...[[1, 2, 3, 4, 8], 6]));
console.log(solution(...[[2, 3, 5, 9], 10]));
