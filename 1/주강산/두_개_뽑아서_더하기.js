// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution1(numbers) {
  const result = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }
  return [...result].sort((a, b) => a - b);
}

// flatMap 을 사용해 새로 풀어본 방법
function solution2(numbers) {
  const sums = numbers.flatMap((num, i) =>
    numbers.slice(0, i).map((prev) => num + prev)
  );
  const uniqueSorted = [...new Set(sums)].sort((a, b) => a - b);
  return uniqueSorted;
};
