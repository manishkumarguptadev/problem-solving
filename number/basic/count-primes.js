var countPrimes = function (n) {
  if (n <= 2) {
    return 0;
  }
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      // Mark all multiples of i as non-prime (composite)
      // Start from i + i (or 2i) and increment by i each time
      for (let j = i * 2; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  let primeCount = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime[i]) {
      primeCount++;
    }
  }
  return primeCount;
};
