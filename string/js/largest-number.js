function largestNumber(nums) {
  // Sort numbers based on which combination produces a larger value
  // Compare by concatenating in different orders (a+b vs b+a)
  nums.sort((a, b) => {
    // Convert numbers to strings for concatenation
    const combinationAB = String(a) + String(b);
    const combinationBA = String(b) + String(a);

    // Sort in descending order by comparing concatenated values
    // Convert back to numbers for comparison
    return Number(combinationBA) - Number(combinationAB);
  });

  // Handle edge case: if the largest number is 0, all numbers are 0
  // Return "0" instead of "000...0"
  if (nums[0] === 0) {
    return "0";
  }

  return nums.join("");
}
