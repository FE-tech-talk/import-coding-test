// 2025-05-12
// 1
function solution1(arr) {
  return arr.sort((a, b) => a - b);
}

// 2
function solution2(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
