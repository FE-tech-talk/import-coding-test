//12
// prices: 초 단위로 기록된 주식 가격이 담긴 배열
// 1 <= prices[number] <= 10,000
// 2 <= prices.length <= 100,000
// 마지막 원소가 아닌 이상 무조건 1초는 보장 1 더해놓고 해당 시간이 떨어졌는지 판단
function solution(prices) {
  // 매핑 {index:number,price:number}[]
  const items = mapping(prices);

  // 스택 생성, 일단 첫번째 아이템 넣음
  const stack = [items[0]];

  // 정답 배열
  const result = new Array(prices.length).fill(0);

  // prices를 순회해서
  for (let time = 1; time < prices.length; time++) {
    // 현재 price 생성
    const price = items[time];

    // 스택에 값이 있고 마지막 원소가 현재 원소보다 더 크면 반복
    while (stack.length !== 0 && stack[stack.length - 1].price > price.price) {
      // 계속 pop해서 (time-해당 원소의 index)를 result[index]에 넣어준다.
      const poppedItem = stack.pop();
      insertTimeToResult(time, poppedItem.index, result);
    }

    // 나오면 해당 값을 스택에 넣어줌.
    stack.push(price);
  }

  // stack을 반복문 돌려서
  while (stack.length !== 0) {
    // prices.length-1 - 해당 원소의 index 를 result[index]에 넣어줌.
    const poppedItem = stack.pop();
    insertTimeToResult(prices.length - 1, poppedItem.index, result);
  }
  // return: 가격이 떨어지지 않은 기간
  return result;
}

// 매핑 함수
function mapping(prices) {
  return prices.map((price, index) => ({
    price,
    index,
  }));
}

// time과 index를 받아서 result에 넣어주는 함수
function insertTimeToResult(time, index, result) {
  result[index] = time - index;
}
