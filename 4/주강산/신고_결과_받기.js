// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const reportMap = {};
  const reportedUser = [];

  for (const id of id_list) {
    reportMap[id] = [];
  }

  for (let i = 0; i < report.length; i++) {
    const [reporter, reported] = report[i].split(" ");
    if (!reportMap[reporter].includes(reported)) {
      reportMap[reporter].push(reported);
      reportedUser.push(reported);
    }
  }

  const banned = [];
  for (const id of id_list) {
    const count = reportedUser.filter((v) => v === id).length;
    if (count >= k) banned.push(id);
  }

  const result = [];

  for (const id of id_list) {
    const myReports = reportMap[id];
    const count = myReports.filter((user) => banned.includes(user)).length;
    result.push(count);
  }

  return result;
}

