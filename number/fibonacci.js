const fibonacci = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let prev1 = 0;
  let prev2 = 1;
  let result;
  for (let i = 3; i <= n; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }
  return result;
};

const fibonacci1 = (n) => {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};
const fibonacci2 = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

const fibonacci3 = (n) =>
  [...Array(n)].reduce(
    (fibSeq, _, i) => fibSeq.concat(i > 1 ? fibSeq[i - 1] + fibSeq[i - 2] : i),
    [0, 1]
  );
// console.log(fibonacci(8));

const isFibonacci = (num) =>
  isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
// console.log(isFibonacci(5));

const isTribonacciNumberAlt = (num) =>
  [0, 0, 1]
    .concat([...Array(num)])
    .slice(3)
    .map((_, i, arr) => arr[i - 3] + arr[i - 2] + arr[i - 1])
    .includes(num);
// console.log(isTribonacciNumberAlt(21));
