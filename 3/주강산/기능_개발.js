// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다.
// 각 기능은 진도가 100%가 되어야 서비스에 반영할 수 있습니다.
// 또, 각 기능의 개발 속도가 다르기 때문에, 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 완료될 수도 있습니다.
// 이때 뒤에 있는 기능은 앞의 기능이 배포될 때 함께 배포되어야 합니다.
// 배포 순서대로 작업 진도가 적힌 정수 배열 `progresses`와 각 작업의 개발 속도가 적힌 정수 배열 `speeds`가 주어질 때,
// 각 배열의 길이는 같으며, 각 배포마다 몇 개의 기능이 배포되는지 배열로 반환하도록 `solution()` 함수를 완성하세요.

// 제약조건
// • 작업 개수 (`progresses.length`, `speeds.length`)는 100개 이하입니다.
// • 작업 진도는 100 미만의 자연수입니다.
// • 작업 속도는 100 이하의 자연수입니다.
// • 배포는 하루에 한 번, **하루의 끝에** 이루어집니다. 예를 들어 진도율이 95%이고 속도가 4%인 경우, 배포는 2일 뒤에 이루어집니다.


// 시간복잡도: O(n)
function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const result = [];
  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      result.push(count);
      maxDay = days[i];
      count = 1;
    }
  }
  
  result.push(count);
  
  return result;
}