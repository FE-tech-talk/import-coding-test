//14
function solution(n, k, cmd) {
  // 삭제될 행을 저장할 배열
  const deleted = [];

  // 현재 행의 위, 아래 인덱스를 저장할 배열
  const up = [...new Array(n + 2)].map((_, i) => i - 1);
  const down = [...new Array(n + 2)].map((_, i) => i + 1);

  // 현재 선택한 행을 k로 설정
  k += 1;

  // cmd를 순회하며 명령어 수행
  for (let command of cmd) {
    // 현재 선택된 행 삭제 후, 바로 아래 행 선택
    if (command[0] === 'C') {
      // k 자체의 up, down은 제어하지 않고 deleted에만 추가
      deleted.push(k);
      // 삭제된 행의 위, 아래 인덱스를 연결
      up[down[k]] = up[k];
      down[up[k]] = down[k];
      // 삭제된 행이 마지막 행이라면 위로 이동
      k = n < down[k] ? up[k] : down[k];
    }

    // 가장 최근에 삭제된 행 복구
    else if (command[0] === 'Z') {
      const restore = deleted.pop();
      // 삭제되기 전 restore의 다음 인덱스의 이전 인덱스는 restore
      down[up[restore]] = restore;
      // 삭제되기 전 restore의 이전 인덱스의 다음 인덱스는 restore
      up[down[restore]] = restore;
    } else {
      // action: 명령어(D, U), num: 지정된 횟수 X
      const [action, num] = command.split(' ');

      // U: 현재 선택된 행에서 X칸 위에 있는 행 선택
      if (action === 'U') {
        for (let i = 0; i < num; i++) {
          // up 배열을 이용해 현재 테이블 기준 이전 인덱스로 이동
          k = up[k];
        }
      }

      // D: 현재 선택된 행에서 X칸 아래에 있는 행 선택
      else {
        for (let i = 0; i < num; i++) {
          // down 배열을 이용해 현재 테이블 기준 다음 인덱스로 이동
          k = down[k];
        }
      }
    }
  }

  // 정답 배열 생성
  const answer = new Array(n).fill('O');
  // 삭제된 행에 대해 X로 변경
  for (const i of deleted) {
    answer[i - 1] = 'X';
  }
  // 배열을 문자열로 변환하여 반환
  return answer.join('');
}
