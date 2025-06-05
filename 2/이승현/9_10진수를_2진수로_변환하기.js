// 9
// 10진수를 입력 받아 2진수로 변환하는 solution 함수를 구하시오.
export function solution(decimal) {
  // decimal 복사해서 초기값 num 생성
  let num = decimal;
  // 정답 문자열 생성
  let result = '';
  // // num이 0보다 클 경우 반복
  while (num > 0) {
    // num을 2로 나눈 나머지를 정답 문자열 앞에 넣음.
    result = (num % 2) + result;
    // num을 2로 나눈 몫을 num으로 갱신
    num = Math.floor(num / 2);
  }
  // // 정답 문자열 반환
  return result;
}
