// 2025-05-17
// 7
// 4가지 명령어
// U: 위쪽 한칸
// D: 아래쪽 한칸
// R: 오른쪽 한칸
// L: 왼쪽 한칸
// (0,0) 부터 시작, (-5,5) 왼쪽 위, (5,-5) 오른쪽 아래
// 캐릭터가 처음 걸어본 길의 길이를 구한다, 움직인 길이 != 처음 걸어본 길이
// 경계를 넘어가면 무시한다.
// dirs: 명령어 문자열
function solution(dirs) {
  // 현재 위치 배열
  let location = [0, 0];
  // 도착한 위치 집합
  const locationHistorySet = new Set();

  // 명령어를 돌려서
  for (let dir of dirs) {
    // 해당 명령어가 어디로 이동을 뜻하는지 방향 배열에서 가져오고
    const [dy, dx] = DIRECTION[dir];
    const [y, x] = location;
    // 조건에 맞는다면 방향을 적용해준다.
    applyDirection({ y, x, dy, dx, location, set: locationHistorySet });
  }

  // return: 처음 걸어본 길의 길이
  return [...locationHistorySet].length / 2;

  // 현재 위치 배열에서 적용해주는 함수
  function applyDirection({ y, x, dy, dx, set }) {
    // 어디로 이동하는지 ny, nx 만들어주고
    const [ny, nx] = [dy + y, dx + x];
    // ny, nx가 범위를 벗어나는지 확인해서 벗어나면 그대로 끝
    if (!isValid({ ny, nx })) return;
    // 벗어나지 않으면 location을 해당 값으로 갱신하고
    location = [ny, nx];
    // 해당 위치를 "y,x" 값으로 set에 담아준다.
    set.add(`${y},${x}-${ny},${nx}`);
    set.add(`${ny},${nx}-${y},${x}`);
  }
}

// ny, nx가 범위를 벗어나는지 확인하는 함수
function isValid({ nx, ny }) {
  // 조건 판단해서 통과시 true
  return -5 <= nx && nx <= 5 && -5 <= ny && ny <= 5;
}

// 방향 객체
const DIRECTION = {
  U: [1, 0],
  D: [-1, 0],
  L: [0, -1],
  R: [0, 1],
};
