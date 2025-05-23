// 링크 https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  let basket = [];

  const runBasket = () => {
    const lastIdx = basket.length - 1;
    if (lastIdx > 0 && basket[lastIdx] === basket[lastIdx - 1]) {
      basket.pop();
      basket.pop();
      answer += 2;
    }
  };

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        runBasket();
        break;
      }
    }
  }
  return answer;
}
