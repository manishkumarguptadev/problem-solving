function findPrimePairs(n) {
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const result = [];

  // Find all prime pairs (x, y) where x + y = n
  // Only check up to n/2 to avoid duplicate pairs
  for (let x = 2; x <= Math.floor(n / 2); x++) {
    const y = n - x;

    if (isPrime[x] && isPrime[y]) {
      result.push([x, y]);
    }
  }

  return result;
}
