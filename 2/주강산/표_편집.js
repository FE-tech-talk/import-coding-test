// 링크 https://school.programmers.co.kr/learn/courses/30/lessons/81303

function solution(n, k, cmd) {
  const table = new Array(n).fill("O");
  const deleted = [];
  let cursor = k;

  for (let i = 0; i < cmd.length; i++) {
    if (cmd[i] === "C") {
      table[cursor] = "X";
      deleted.push(cursor);
      let next = cursor + 1;
      while (next < n && table[next] === "X") next++;

      if (next < n) {
        cursor = next;
      } else {
        let prev = cursor - 1;
        while (prev >= 0 && table[prev] === "X") prev--;
        cursor = prev;
      }
    }
    if (cmd[i] === "Z") {
      const restore = deleted.pop();
      table[restore] = "O";
    }
    if (cmd[i].split("")[0] === "D") {
      const x = Number(cmd[i].split(" ")[1]);
      let count = 0;
      while (count < x) {
        cursor++;
        if (table[cursor] === "O") count++;
      }
    }

    if (cmd[i].split("")[0] === "U") {
      const x = Number(cmd[i].split(" ")[1]);
      let count = 0;
      while (count < x) {
        cursor--;
        if (table[cursor] === "O") count++;
      }
    }
  }

  return table.join("");
}
