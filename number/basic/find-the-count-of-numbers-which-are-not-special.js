// Maximum value for prime sieve (approximately sqrt(10^9))
const MAX_PRIME_LIMIT = 31623;

const isPrime = Array(MAX_PRIME_LIMIT + 1).fill(true);

(() => {
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(MAX_PRIME_LIMIT); i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j < MAX_PRIME_LIMIT; j += i) {
        isPrime[j] = false;
      }
    }
  }
})();

function nonSpecialCount(l, r) {
  const lowerBound = Math.ceil(Math.sqrt(l));
  const upperBound = Math.floor(Math.sqrt(r));

  let specialCount = 0;
  for (let i = lowerBound; i <= upperBound; ++i) {
    if (isPrime[i]) {
      ++specialCount;
    }
  }

  return r - l + 1 - specialCount;
}
