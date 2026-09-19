function trailingZeroes(n) {
  let trailingZeroCount = 0;

  // Count all factors of 5 in numbers from 1 to n
  // We divide by 5, 25, 125, etc. to count multiples of 5^1, 5^2, 5^3, etc.
  while (n > 0) {
    // Integer division by 5 to count multiples of current power of 5
    n = Math.floor(n / 5);

    // Add the count of multiples to our total
    trailingZeroCount += n;
  }

  return trailingZeroCount;
}
