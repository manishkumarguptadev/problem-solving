function solveKnapsack(profits, weights, capacity) {
  const dp = new Array(profits.length)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(-1));
  return knapsackRecursive(dp, profits, weights, capacity, 0);
}

function knapsackRecursive(dp, profits, weights, capacity, currentIndex) {
  // base checks
  if (capacity <= 0 || currentIndex >= profits.length) {
    return 0;
  }

  // if we have already solved a similar problem,
  // return the result from memory
  if (dp[currentIndex][capacity] !== -1) {
    return dp[currentIndex][capacity];
  }

  // recursive call after choosing the element at the currentIndex
  // if the weight of the element at currentIndex exceeds the capacity,
  //  we shouldn't process this
  let profit1 = 0;
  if (weights[currentIndex] <= capacity) {
    profit1 =
      profits[currentIndex] +
      knapsackRecursive(
        dp,
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );
  }

  // recursive call after excluding the element at the currentIndex
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

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(solveKnapsack(profits, weights, 7));
console.log(solveKnapsack(profits, weights, 6));
