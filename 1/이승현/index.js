// 2025-05-12
// 1
function solution1(arr) {
  return arr.sort((a, b) => a - b);
}

// 2
function solution2(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}

// 2025-05-13
// 3
function solution(numbers) {
  const result = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }
  return [...result].sort((a, b) => a - b);
}
