var tribonacci = function (n) {
  if (n <= 2) {
    return n === 0 ? 0 : 1;
  }
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;

  for (let i = 3; i <= n; i++) {
    [t2, t1, t0] = [t2 + t1 + t0, t2, t1];
  }

  return t2;
};
var tribonacci = function (n) {
  if (n <= 2) {
    return n === 0 ? 0 : 1;
  }
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  let temp;
  for (let i = 3; i <= n; i++) {
    temp = t2 + t1 + t0;
    t0 = t1;
    t1 = t2;
    t2 = temp;
  }

  return temp;
};
const isTribonacciNumberAlt = (num) =>
  [0, 0, 1]
    .concat([...Array(num)])
    .slice(3)
    .map((_, i, arr) => arr[i - 3] + arr[i - 2] + arr[i - 1])
    .includes(num);
// console.log(isTribonacciNumberAlt(21));
