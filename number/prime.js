const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
// console.log(isPrime(30));

const firstNPrimes = (n) => {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
};
// console.log(firstNPrimes(5));

const primesInInterval = (start, end) => {
  const primes = [];
  let num = start;
  while (num <= end) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
};
// console.log(primesInInterval(5, 50));
