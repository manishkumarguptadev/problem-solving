function solveKnapsack(profits, weights, capacity) {
  return knapsackRecursive(profits, weights, capacity, 0);
}

function knapsackRecursive(profits, weights, capacity, currentIndex) {
  // Base case: If there are no items left or the knapsack capacity is 0,
  // the total value is 0
  if (capacity === 0 || currentIndex === profits.length) {
    return 0;
  }

  // If the weight of the current item is more than the remaining capacity,
  // this item cannot be included.
  if (weights[currentIndex] > capacity) {
    return knapsackRecursive(profits, weights, capacity, currentIndex + 1);
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
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );

    // Calculate value if item is excluded
    let profit2 = knapsackRecursive(
      profits,
      weights,
      capacity,
      currentIndex + 1
    );

    return Math.max(profit1, profit2);
  }
}
const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(solveKnapsack(profits, weights, 7));
console.log(solveKnapsack(profits, weights, 6));
