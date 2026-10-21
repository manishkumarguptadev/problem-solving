var nthUglyNumber = function (n) {
  // Initialize dynamic programming array with the first ugly number (1)
  const dp = [1];

  // Pointers for multiples of 2, 3, and 5
  let pointer2 = 0;
  let pointer3 = 0;
  let pointer5 = 0;

  // Generate ugly numbers until we reach the nth one
  for (let i = 1; i < n; i++) {
    const nextMultipleOf2 = dp[pointer2] * 2;
    const nextMultipleOf3 = dp[pointer3] * 3;
    const nextMultipleOf5 = dp[pointer5] * 5;

    const nextUglyNumber = Math.min(
      nextMultipleOf2,
      Math.min(nextMultipleOf3, nextMultipleOf5),
    );

    // Move pointers forward if their value was selected
    // Multiple pointers can move if there are duplicates
    if (nextUglyNumber === nextMultipleOf2) {
      pointer2++;
    }
    if (nextUglyNumber === nextMultipleOf3) {
      pointer3++;
    }
    if (nextUglyNumber === nextMultipleOf5) {
      pointer5++;
    }

    dp.push(nextUglyNumber);
  }

  // Return the nth ugly number (0-indexed array, so n-1)
  return dp[n - 1];
};
