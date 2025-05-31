/**
 * [문제 링크]
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * 
 * 이전에 풀었다가 어려워서 못 푼 문제.
 * 책 참고해서 풀었음.
 * 객체를 활용해서 문제 푸는게 익숙하지 않아서 어려웠음.
 * 다음에 다시 풀어보기!!!!
 */

function solution(N, stages) {
  // 스테이지별 도전자 수
  const num = new Array(N+2).fill(0);
  for(const stage of stages) {
      num[stage] += 1;
  }
  
  // 스테이지별 실패한 사용자
  // 스테이지 번호가 있어야 하므로 객체 형태
  let fail = {};
  
  // 현재 스테이지를 도전했던 사용자 수
  let total = stages.length;
  
  // 실패율 계산
  for(let i= 1 ; i < N + 1; i++) {
      // 현재 스테이지에 도전 중인 사람이 없으면
      if(num[i] === 0) {
          fail[i] = 0;
          continue; // 다음으로
      }
      
      // 실패율 계산
      fail[i] = num[i] / total;
      
      // 다음 스테이지 도전했던 사용자 수
      total -= num[i];
  }
  
  // 실패율 높은 것부터 내림차순
  const result = Object.entries(fail).sort((a,b)=> b[1] - a[1]);
  
  // 스테이지 번호만 추출
  return result.map((item)=>Number(item[0]));
}