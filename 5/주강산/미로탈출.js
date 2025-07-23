// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/159993

function solution(maps) {

  const n = maps.length;
  const m = maps[0].length;
  const grid = maps.map(row => row.split(""));

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let start, lever, exit;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const c = grid[i][j];
      if (c === "S") start = [i, j];
      else if (c === "L") lever = [i, j];
      else if (c === "E") exit = [i, j];
    }
  }

  const bfs = (start, target) => {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
      const [x, y, dist] = queue.shift();

      if (grid[x][y] === target) return dist;

      for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];

        if (
          nx >= 0 && ny >= 0 && nx < n && ny < m &&
          !visited[nx][ny] && grid[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1;
  };

  const toLever = bfs(start, "L");
  if (toLever === -1) return -1;

  const toExit = bfs(lever, "E");
  if (toExit === -1) return -1;

  return toLever + toExit;
}