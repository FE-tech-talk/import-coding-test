import { solution } from '.';

const TESTCASE = [
  // 테스트 케이스를 여기에 작성해주세요.
  // { argument: [[1, 2, 3]], answer: [1, 2, 3] }, argument는 배열 안에 감싸주세요.
];

describe('미리 정의된 테스트 케이스를 기반으로 solution 함수를 테스트합니다.', () => {
  TESTCASE.forEach(({ argument, answer }) => {
    test('solution 함수에 현재의 테스트 케이스를 실행합니다.', () => {
      expect(solution(...argument)).toStrictEqual(answer);
    });
  });
});
