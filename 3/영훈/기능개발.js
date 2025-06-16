/**
 *
 * return
 * 1. [2, 1]
 * 2. [1, 3, 2]
 */
function solution(progresses, speeds) {
  const result = [];

  const deployDays = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i])); // 7, 3, 9

  let latestDeployDays = deployDays[0];
  let count = 0;

  for (let i = 0; i < progresses.length; i++) {
    if (deployDays[i] <= latestDeployDays) {
      count++;
    } else {
      result.push(count);
      count = 1;
      latestDeployDays = deployDays[i];
    }
  }

  result.push(count);
  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
