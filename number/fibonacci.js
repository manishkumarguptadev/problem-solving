const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
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

function fib(n) {
  if (n <= 1) return n;

  let last = 0;
  let curr = 1;

  for (let i = 2; i <= n; ++i) {
    [last, curr] = [curr, last + curr];
  }

  return curr;
}

const fibonacci2 = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

function fibonaccir(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[n];
}

console.log(fib(3));

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
