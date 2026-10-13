function solveKnapsack(profits, weights, capacity) {
  // Create a 2D array (memoization table) initialized with -1 to indicate uncomputed states.
  // dp[i][c] will store the max profit using first 'i' items with 'c' capacity.
  const dp = new Array(profits.length)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(-1));
  return knapsackRecursive(dp, profits, weights, capacity, 0);
}

function knapsackRecursive(dp, profits, weights, capacity, currentIndex) {
  // Base case: If there are no items left or the knapsack capacity is 0,
  // the total value is 0
  if (capacity === 0 || currentIndex >= profits.length) {
    return 0;
  }

  // If the subproblem has already been solved,
  // return the result from memory
  if (dp[currentIndex][capacity] !== -1) {
    return dp[currentIndex][capacity];
  }

  // If the weight of the current item is more than the remaining capacity,
  // this item cannot be included.
  if (weights[currentIndex] > capacity) {
    dp[currentIndex][capacity] = knapsackRecursive(
      dp,
      profits,
      weights,
      capacity,
      currentIndex + 1
    );
    return dp[currentIndex][capacity];
  }
  // Otherwise, we have two choices:
  // 1. Include the current item: add its value and recurse with reduced capacity and remaining items.
  // 2. Exclude the current item: recurse with the same capacity and remaining items.
  // Return the maximum value of these two choices.
  else {
    // Calculate value if item is included
    let profit1 =
      profits[currentIndex] +
      knapsackRecursive(
        dp,
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );

    // Calculate value if item is excluded
    let profit2 = knapsackRecursive(
      dp,
      profits,
      weights,
      capacity,
      currentIndex + 1
    );

    dp[currentIndex][capacity] = Math.max(profit1, profit2);
    return dp[currentIndex][capacity];
  }
}
const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(solveKnapsack(profits, weights, 7));
console.log(solveKnapsack(profits, weights, 6));
