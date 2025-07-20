// 조직의 이익 분배 규칙
// 모든 판매원은 판매된 칫솔의 가격의 10%를 추천인에게 배분
// 이는 재귀적으로 발생
// 원 단위로 절사하여 10%의 가격이 1원 미만이면 작용하지 않음.
// enroll: 각 판매원의 이름을 담은 배열, 민호를 제외한 조직 구서우언의 총 수
// referral: 각 판매원을 다단계 조직에 참여시킨 다른 판매원의 이름을 담은 배열, i번째 이름은 i번째에 있는 판매원을 조직에 참여시킨 사람의 이름, "-" 일 경우 추천인이 없는 것
// seller: 판매량 집계 데이터의 판매원 이름을 나열한 배열, seller의 i번째에 있는 이름은 i번째 판매 집계 데이터가 어느 판매원에 의한 것인지 나타냅니다, 중복이 가능합니다.
// amount: 판매량 집계 데이터의 판매 수량을 나열한 배열, i번째에 있는 수는 i번째 판매 집계 데이터의 판매량을 나타냅니다.
// 칫솔 하나는 100원입니다.

// 양방향 트리를 만들어서 seller를 순회, 부모에 10%씩 전달 후 result에 기록하면 풀림.
// 트리는 논리적으로 두고 객체로 구현해야할 듯
function solution(enroll, referral, seller, amount) {
  const result = new Array(enroll.length).fill(0);

  // 객체 초기화
  const company = { '-': { parent: null, children: [], index: -1 } };

  // enroll 순회
  for (let i = 0; i < enroll.length; i++) {
    const person = enroll[i];
    // { parent: referral[i], children: [], index: enroll의 index } 로 우선 넣음
    company[enroll[i]] = { parent: referral[i], children: [], index: i };
  }

  // referral 순회
  for (let index in referral) {
    const referedPerson = enroll[index];
    // 객체[referral[index]].children.push(name)
    company[referral[index]].children.push(referedPerson);
  }

  // 객체 완성됨. 이제 seller 순회
  for (let index in seller) {
    // amount 값 꺼내고
    const price = amount[index] * 100;
    const remain = price - Math.floor((price / 10) * 1);
    // result[객체[sellerName].index] + 값 * 90/100
    result[company[seller[index]].index] += remain;

    let curPrice = Math.floor((price / 10) * 1);
    let curPerson = company[seller[index]].parent;
    // while문
    while (true) {
      // 10% 값 만들기
      const tenPercent = Math.floor(curPrice / 10);
      const remain = curPrice - tenPercent;
      // 현재 현재 값이 1원 미만이거나 현재 이름이 "-"이면 종료
      if (curPrice < 1 || curPerson === '-') {
        break;
      }
      // result[객체[현재 이름].index] + ( 현재값 * 90/100 )
      result[company[curPerson].index] += remain;

      // 다음 값 = 10%값
      curPrice = tenPercent;
      // 다음 이름 = 객체[현재 이름].parent
      curPerson = company[curPerson].parent;
    }
  }

  // return: 각 판매원이 득한 이익금을 나열한 배열,( enroll의 순서대로 나열 )
  return result;
}
