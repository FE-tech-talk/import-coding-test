// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42861

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: n }, (_, i) => i);

  const find = x => {
    if (parent[x] === x) return x;
    return parent[x] = find(parent[x]);
  };

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
      parent[rootB] = rootA;
      return true;
    }
    return false;
  };

  let totalCost = 0;
  let connected = 0;

  for (const [a, b, cost] of costs) {
    if (union(a, b)) {
      totalCost += cost;
      connected += 1;
    }

    if (connected === n - 1) break;
  }

  return totalCost;
}
