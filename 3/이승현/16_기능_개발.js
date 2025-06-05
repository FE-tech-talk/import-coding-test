// 진도가 100%일 때 배포하고 뒤에 있는 기능이 먼저 개발되면 앞에 있는 기능이 배포될 때 같이 배포
// progresses: 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
// speeds: 각 작업의 개발 속도
function solution(progresses, speeds) {
  // 현재 배열 인덱스 변수
  let index = 0;
  // 현재 날짜 변수
  let day = 0;
  // 결과 배열 생성
  const result = [];
  // 진행율 배열 생성
  const completeDurationList = progresses.map((_, i) =>
    Math.ceil((100 - progresses[i]) / speeds[i])
  );

  // 계속 순회
  while (index < progresses.length) {
    // 현재 배포 아이템 수 변수 생성
    let currentDeploy = 0;

    // 현재 날짜와 완성 일중 더 큰 값으로 설정
    day = Math.max(day, completeDurationList[index]);

    // 현재 아이템은 배포가 가능함.
    currentDeploy += 1;
    // 한번에 배포할 다음 아이템을 보자.
    index += 1;

    while (index < progresses.length) {
      // 이제 다음 아이템들이 끝나는 기간 확인해서
      // 만약 현재 끝나지 않았으면 종료
      if (completeDurationList[index] > day) {
        break;
      }

      // 현재 배포 아이템 수 +=1
      currentDeploy += 1;
      // 다음 아이템으로 이동
      index += 1;
    }
    // 결과 배열에 아이템 수 추가
    currentDeploy != 0 && result.push(currentDeploy);
  }

  // 각 배포마다 몇 개의 기능이 배포되는지
  return result;
}
