// 2
function solution2(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
