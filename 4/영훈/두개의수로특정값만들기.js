/**
 * target에서 arr[i]를 뺐을 때의 값이 arr에 있는지 확인해야됨
 * target만큼 해시테이블 만들어서, arr에 있는 값은 1 없는 값은 0 저장
 *
 */

const createHashTable = (arr, target) => {
  const hashTable = new Array(target + 1).fill(0);

  for (const num of arr) {
    if (num <= target) {
      hashTable[num] = 1;
    }
  }

  return hashTable;
};

function solution(arr, target) {
  const hashTable = createHashTable(arr, target);

  for (const num of arr) {
    // k는 target에서 num을 뺐을때 arr 안에 존재하는 다른 숫자여야함, 즉 num에 더했을때 target이 되는 나머지 숫자
    const k = target - num;

    // num에 k를 더했을 때, 정상적으로 target이 될 수 있는 조건
    // 1. 현재 숫자와 다른 숫자여야함(arr 안에 서로 다른 두 수를 더했을 때 target이 돼야하므로.)
    // 2. 0 이상의 숫자여야함(arr의 각 숫자들은 1 이상의 숫자이며 해시테이블은 배열이므로 인덱스에 접근하기 위해.)
    // 3. target 이하의 숫자여야함(두 수를 더해서 target이 돼야하는데, target보다 크면 안됨. 또한 해시테이블의 마지막 인덱스에도 접근할 수 있어야하기 때문.)
    // 4. 해시테이블에 k로 접근했을때, 값이 1이여함. 그래야 k가 해시테이블에 존재하고, arr에도 존재하는 숫자라는 것을 증명할 수 있으므로.
    if (k !== num && k >= 0 && k <= target && hashTable[k] === 1) {
      // 이 모든 조건이 성립하면 두 수를 더했을때 target이 되므로 target이 되는 두 수가 하나라도 있으면 바로 true 반환
      return true;
    }
  }
  // 모든 수를 다 더해도 없다면 false 반환
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
