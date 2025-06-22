/**
 * 두 개의 수로 특정 값 만들기
 */

// [1] for문 사용하는 방법
const solution = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

// [2] 해시 테이블 사용하는 방법
const solution2 = (arr, target) => {
  const hashTable = {};

  for (const num of arr) {
    hashTable[num] = 1;
  }

  for (const num of arr) {
    const findNum = target - num;
    if (findNum !== num && hashTable[findNum] === 1) {
      return true;
    }
  }
  return false;
};

console.log(solution2([1, 2, 3, 4, 8], 6));
console.log(solution2([2, 33, 5, 9], 10));
