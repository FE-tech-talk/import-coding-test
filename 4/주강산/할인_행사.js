// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131127

// 해시 안 쓴 버전
function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const list = discount.slice(i, i + 10);
    let exist = true;

    for (let j = 0; j < want.length; j++) {
      const item = want[j];
      const count = number[j];

      const itemCount = list.filter(v => v === item).length;

      if (itemCount !== count) {
        exist = false;
        break;
      }
    }
    if (exist) answer++;
  }
  return answer;
}

// 해시 쓴 버전 
function isShallowEqual(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (value1 !== value2) return false;
  }

  return true;
}

function solution(want, number, discount) {
  const wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }
  let answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const discount10d = {};
    for (let j = i; j < i + 10; j++) {
      const item = discount[j];
      if (wantObj[item]) {
        discount10d[item] = (discount10d[item] || 0) + 1;
      }
    }
    if (isShallowEqual(discount10d, wantObj)) {
      answer += 1;
    }
  }
  return answer;
}
