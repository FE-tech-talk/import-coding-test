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

// 2025-05-14
// 4
// 3명이 수학문제를 찍음
// 각각이 다른 방식으로 찍음.
// a: 1 2 3 4 5
// b: 2 1 2 3 2 4 2 5
// c: 3 3 1 1 2 2 4 4 5 5
// 문제 1 ~ 5번, 10,000 문제
//
// @params: number[]
//
// return: 가장 많은 문제를 맞힌 사람이 누구인지 배열, 오름차순

const PATTERN_A = [1, 2, 3, 4, 5];
const PATTERN_B = [2, 1, 2, 3, 2, 4, 2, 5];
const PATTERN_C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const PATTERNS = [PATTERN_A, PATTERN_B, PATTERN_C];

function solution(answers) {
  // 각 사람들의 점수가 있는 배열을 생성해서
  const points = [0, 0, 0];

  // answer를 순회
  answers.forEach((answer, index) => {
    // PATTERN들도 돌리고
    PATTERNS.forEach((pattern, personIndex) => {
      // 해당 index를 나머지 연산으로 패턴의 어떤 인덱스에 위치하는지 확인해서
      const patternIndex = index % pattern.length;

      // 패턴에 대응되는 값과 실제 답이 일치하면 해당 인물에게 점수를 준다.
      if (answer === pattern[patternIndex]) {
        points[personIndex] += 1;
      }
    });
  });
  // 점수를 비교해서 가장 높은 사람들을 꺼내온다.
  const maxPoint = Math.max(...points);

  const result = [];
  // points를 순회해서 가장 높은 점수인 것들만 남긴다.
  points.forEach((point, index) => {
    if (point === maxPoint) {
      result.push(index + 1);
    }
  });

  // 오름차순으로 정렬해서 리턴
  return result.sort((a, b) => a - b);
}

// 2025-05-15
// 5
// 두 행렬을 받아서 행렬의 곱셈을 구하라.
function solution(arr1, arr2) {
  const firstRowLen = arr1.length;
  const secondRowLen = arr2.length;
  const secondColLen = arr2[0].length;
  const result = new Array(firstRowLen)
    .fill(0)
    .map((v) => new Array(secondColLen).fill(0));

  // 첫번째 행렬의 행과 두번째 행렬의 열 대응해서 곱해준다.
  // ㅡ ㅣ 로 기억하면 됨.
  for (let i = 0; i < firstRowLen; i++) {
    for (let j = 0; j < secondColLen; j++) {
      // result[i][j] = ( arr1[y][k] * arr2[k][x] ), k는 secondRowLen
      for (let k = 0; k < secondRowLen; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}

// 2025-05-16
// 6

// 실패율을 구하는 코드 완성
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//
// N: 전체 스테이지의수
// 1 <= N <= 500
// stages: 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
// 1 <= stages.length <= 200,000
// 1 이상 N+1 이하의 자연수, 현재 도전 중인 스테이지의 번호, N+1일 경우 N까지 클리어한 사용자
// return: 내림차순으로 실패율이 담긴 스테이지 번호 배열
// 실패율이 같다면 작은 스테이지 번호 먼저
// 도달한 유저가 없으면 실패율 0
function solution(N, stages) {
  // i번 스테이지를 통과한 사람들 총합과 멈춘 사람의 수가 담긴 배열 totalsPerStage
  // 길이는 N
  // { pass: number; now: number }
  const totalsPerStage = new Array(N).fill(0).map((_) => ({ pass: 0, now: 0 }));
  // stages 순회
  for (let i = 0; i < stages.length; i++) {
    // 그 사람의 스테이지를 뽑아서
    const stage = stages[i];
    // 그 스테이지 순회
    for (let j = 0; j < stage; j++) {
      if (j === N) continue;
      // 모든 인덱스 totalsPerstage.pass +=1
      totalsPerStage[j].pass += 1;
      // 마지막 인덱스의 totalsPerstage.now +=1
      if (j === stage - 1) {
        totalsPerStage[j].now += 1;
      }
      // 도달한 사람의 수와 멈춘 사람의 수가 담긴 배열 완성
    }
  }

  // totalsPerstage를 돌려서 now/pass로 mapping,
  // 실패율 리스트 만들어줌
  const failRateList = totalsPerStage.map(({ pass, now }, i) => ({
    fail: pass === 0 ? 0 : now / pass,
    id: i + 1,
  }));

  // 실패율을 기준으로 내림차순, 같으면 인덱스 번호로 내림차순하는 스테이지 번호 배열 리턴
  return failRateList.sort((a, b) => b.fail - a.fail).map(({ id }) => id);
}

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

// 8
// s: ( 와 )로 이루어진 문자열
function solution(s) {
  // stack 생성
  const stack = [];

  // s를 돌려서
  for (let str of s) {
    console.log(stack);
    // ( 이면 stack에 넣고
    if (str === '(') {
      stack.push('(');
    }

    // ) 일 때
    if (str === ')') {
      // stack의 마지막 원소가 ( 이면
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        // stack pop
        stack.pop();
        continue;
      }
      // 아니면 false로 리턴
      return false;
    }
  }

  // 빠져나오면 true로 리턴
  return stack.length === 0;
}

console.log(solution('(())()')); // 반환값 : true
console.log(solution('((())()')); // 반환값 : false
