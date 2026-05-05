function rob(nums) {
  const houseCount = nums.length;

  // Edge case: only one house to rob
  if (houseCount === 1) {
    return nums[0];
  }

  const robLinearRange = (startIndex, endIndex) => {
    // previousMax: max money when not robbing current house
    // currentMax: max money when robbing current house
    let previousMax = 0;
    let currentMax = 0;

    for (let i = startIndex; i <= endIndex; i++) {
      const tempPrevious = previousMax;
      const tempCurrent = currentMax;

      // Update states:
      // New previousMax = max of old previousMax and currentMax
      // New currentMax = old previousMax + current house value
      previousMax = Math.max(tempPrevious, tempCurrent);
      currentMax = tempPrevious + nums[i];
    }

    return Math.max(previousMax, currentMax);
  };

  const robExcludingLast = robLinearRange(0, houseCount - 2);
  const robExcludingFirst = robLinearRange(1, houseCount - 1);

  return Math.max(robExcludingLast, robExcludingFirst);
}
