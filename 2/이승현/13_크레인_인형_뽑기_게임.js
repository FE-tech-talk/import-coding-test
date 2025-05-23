//13
// n * n 크기의 정사각 격자
// 가장 아래 칸부터 쌓여 있음
// 바구니 가장 아래 칸부터 인형이 순서대로 쌓임, 바구니 제약 없음
// 같은 모양의 인형 두 개가 쌓이면 인형이 터지고 사라짐
// board: 게임 화면의 격자의 상태 2차원 배열
// 5 <= board.length <= 30
// 0 <= board[number] <= 100
// moves: 크레인을 작동시킨 위치
// 1 <= moves.length <= 1000
// 1 <= moves[number] <= board[number].length
function solution(board, moves) {
  // 바구니 스택 생성
  const stack = [];
  // 정답 변수 생성
  let result = 0;
  // moves를 순회
  for (let move of moves) {
    const colIndex = Number(move) - 1;
    const curItem = findColumn(board, colIndex);
    // board에 해당 row에 인형이 있는지 확인

    // 없으면 다음으로
    if (!curItem) continue;

    // 스택이 있고 스택의 마지막 원소가 현재 원소와 같으면 스택 pop, 정답 +=2 (pang)
    if (stack.length !== 0 && stack[stack.length - 1] === curItem) {
      // 스택 마지막과 비교
      stack.pop();
      result += 2;
    } else {
      stack.push(curItem);
    }
  }

  // return: 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수
  return result;
}

function findColumn(board, colNumber) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (row[colNumber] !== 0) {
      const result = row[colNumber];
      board[i][colNumber] = 0;
      return result;
    }
  }
  return 0;
}
