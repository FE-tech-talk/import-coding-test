// 직사각형 격자 형태의 미로 탈출 필요
// 각 칸은 통로 또는 벽으로 구성, 벽은 못 지나가고 통로만 지나갈 수 있음.
// 통로 중 한 칸에는 미로를 빠져나가는 문이 있으며 이는 레버를 당겨서만 열 수 있다.
// 그래서 레버로 먼저 이동 후에 미로를 빠져나가는 문으로 이동해야 한다.
/*
S : 시작 지점
E : 출구
L : 레버
O : 통로
X : 벽
*/
const direction = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

// maps: 미로를 나타낸 문자열
function solution(maps) {
  // 현재 위치 배열 생성
  const curLoc = [0, 0];

  // 현재 시간 변수 생성
  const time = 0;

  // 시작 노드, 레버 노드, 출구 노드
  let start, lever, end;

  // maps를 순회해서
  for (let mapIndex in maps) {
    for (let NodeIndex in maps[mapIndex]) {
      const Node = maps[mapIndex][NodeIndex];
      // S일 경우 큐 초기화
      if (Node === 'S') {
        start = [+mapIndex, +NodeIndex];
      }
      if (Node === 'L') {
        lever = [+mapIndex, +NodeIndex];
      }
      if (Node === 'E') {
        end = [+mapIndex, +NodeIndex];
      }
    }
  }

  // start와 lever 기준으로 bfs
  const firstStep = bfs(start, lever);

  // lever와 end 기준으로 bfs
  const secondStep = bfs(lever, end);

  if (firstStep !== -1 && secondStep !== -1) {
    return firstStep + secondStep;
  }

  // 최대한 미로를 빠르게 빠져나가는데 걸리는 최소 시간, 탈출 못할시 -1
  // while문 다 나오면 -1 반환
  return -1;
  function bfs(start, end) {
    // memoized 배열 생성
    const memoized = new Array(maps.length).fill(0).map((map) => new Array(map.length).fill(false));

    // 큐 생성
    // 큐 초깃값은 {cur: number[], time: number}
    const queue = [{ cur: start, time: 0 }];

    // 큐가 없어질 때까지 반복
    while (queue.length !== 0) {
      const { cur, time } = queue.shift();
      // cur 분해
      const [y, x] = cur;
      const curTime = time;
      // 만약 cur가 memoized되어있으면 다음으로
      if (memoized[y][x]) continue;

      memoized[y][x] = true;

      // cur가 end에 도달했으면 time 반환
      if (end[0] === y && end[1] === x) return curTime;

      // 방향 다 돌려서 벽이면 다음으로
      for (let dir of direction) {
        const [ny, nx] = [y + dir[0], x + dir[1]];
        if (isNotOut(ny, nx)) {
          if (maps[ny][nx] === 'X') continue;
          // 아니면 큐에 time 늘려서 삽입
          queue.push({ cur: [ny, nx], time: curTime + 1 });
        }
      }
    }
    // 다 돌았는데 안나오면 return -1
    return -1;
  }

  function isNotOut(ny, nx) {
    return 0 <= ny && maps.length > ny && 0 <= nx && maps[0].length > nx;
  }
}
