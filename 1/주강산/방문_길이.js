// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  // 미리 동작에 따라 값을 어떻게 추가 할지 컨트롤러
  const moves = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const visited = new Set();
  // 초기값
  let [x, y] = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const [dx, dy] = moves[dir];
    // 현재 위치에서 이동시킴
    const nx = x + dx;
    const ny = y + dy;

    // 경계선을 넘어길시 무시
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 갔을 때와 돌아 올 때 두가지 종류가 있으므로 두가지 다 넣어줌
    const path1 = `${x},${y}->${nx},${ny}`;
    const path2 = `${nx},${ny}->${x},${y}`;

    visited.add(path1);
    visited.add(path2);

    // 이동시킨 값을 저장
    x = nx;
    y = ny;
  }
  // 갔을 때 돌아 올때 두가지 다 체크했으므로 반으로 나눔
  return visited.size / 2;
}
