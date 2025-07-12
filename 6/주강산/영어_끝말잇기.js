// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const used = new Set();
  used.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];
      
    if (prev[prev.length - 1] !== curr[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    if (used.has(curr)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    used.add(curr);
  }

  return [0, 0];
}
