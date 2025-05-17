import { solution } from '.';

const TESTCASE = [
  { argument: [[1, 2, 3]], answer: [1, 2, 3] },
  { argument: [[2, 3, 2, 1]], answer: [1, 2, 2, 3] },
  {
    argument: [[9, 8, 7, 6, 5, 4, 3, 2, 1]],
    answer: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

describe('미리 정의된 테스트 케이스를 기반으로 solution 함수를 테스트합니다.', () => {
  TESTCASE.forEach(({ argument, answer }) => {
    test('solution 함수에 현재의 테스트 케이스를 실행합니다.', () => {
      expect(solution(...argument)).toStrictEqual(answer);
    });
  });
});
