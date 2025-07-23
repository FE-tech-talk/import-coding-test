// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92343

function solution(info, edges) {
  const graph = Array.from({ length: info.length }, () => []);
  for (const [parent, child] of edges) {
    graph[parent].push(child);
  }

  let maxSheep = 0;

  function dfs(current, sheep, wolf, nextNodes) {
    const isSheep = info[current] === 0;
    sheep += isSheep ? 1 : 0;
    wolf += isSheep ? 0 : 1;

    if (wolf >= sheep) return;

    maxSheep = Math.max(maxSheep, sheep);

    const next = [...nextNodes];
    next.push(...graph[current]);
    const idx = next.indexOf(current);
    next.splice(idx, 1);

    for (const node of next) {
      dfs(node, sheep, wolf, next);
    }
  }

  dfs(0, 0, 0, [0]);

  return maxSheep;
}


