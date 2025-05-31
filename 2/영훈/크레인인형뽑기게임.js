/**
 * 숫자 0은 빈칸
 * 같은 숫자가 같은 인형
 * 뽑은 인형 담을 스택 필요 [];
 * 인형이 없는 곳에 크레인 작동 시 아무일도 일어나지 않음
 * 일단 크레인이 움직인 곳이 0이 아니면 무조건 스택으로 이동 후 해당 인덱스는 0으로 변경
 * 따라서 크레인이 움직인 곳의 값이 0이면, 2차원 배열의 행에 대해 인덱스 거꾸로 탐색하며 인형 있나 탐색
 * index 0까지 반복 후 그래도 0이면 아무일도 발생시키지 않기
 *
 * 사라진 인형 갯수 반환하기!
 */

/**
 * board
 *   0 1 2 3 4
 * [[0,0,0,0,0], 0
 *  [0,0,1,0,3], 1
 *  [0,2,5,0,1], 2
 *  [4,2,4,4,2], 3
 *  [3,5,1,3,1]] 4
 *
 * moves
 * [1,5,3,5,1,2,1,4] // 각 요소에서 -1 한 값이 board의 각 칸의 위치값임
 */
function solution(board, moves) {
  const stack = [];
  let removedCount = 0;
  // 크레인 이동 순서 반복
  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1; // 크레인 이동 순서가 1부터 시작하므로 -1을 통해 board 인덱스에 알맞게 접근
    // 행 반복
    for (let row = 0; row < board.length; row++) {
      const current = board[row][col];
      if (current !== 0) {
        // 인형 꺼내기
        board[row][col] = 0;

        // 이전과 같은 인형이면 제거
        if (stack[stack.length - 1] === current) {
          stack.pop();
          removedCount += 2;
        } else {
          stack.push(current);
        }

        break; // 인형 하나만 집고 끝내야 하므로 break
      }
    }
  }
  return removedCount;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
