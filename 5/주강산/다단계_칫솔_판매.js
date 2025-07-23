function solution(enroll, referral, seller, amount) {
  const parent = {};
  const profit = {};

  for (let i = 0; i < enroll.length; i++) {
    const child = enroll[i];
    const refer = referral[i];
    parent[child] = refer === "-" ? null : refer;
    profit[child] = 0;
  }
  console.log(parent);

  const distribute = (name, money) => {
    const give = Math.floor(money * 0.1);
    const keep = money - give;

    profit[name] += keep;

    if (parent[name] && give > 0) {
      distribute(parent[name], give);
    }
  };

  for (let i = 0; i < seller.length; i++) {
    const name = seller[i];
    const totalProfit = amount[i] * 100;
    distribute(name, totalProfit);
  }

  return enroll.map((name) => profit[name]);
}
