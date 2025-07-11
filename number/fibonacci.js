const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let secondLast = 0;
  let last = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = secondLast + last;
    secondLast = last;
    last = temp;
  }
  return last;
};

function fibonacci(n) {
  let f = [];
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f[n];
}
function fib(n) {
  let fibLast = 0;
  let fibCurrent = 1;

  if (n < 0) return NaN;
  if (n <= 1) return n;

  for (let i = 3; i <= n; ++i) {
    [fibLast, fibCurrent] = [fibCurrent, fibLast + fibCurrent];
  }

  return fibCurrent;
}
console.log(fibonaccim(3));

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
