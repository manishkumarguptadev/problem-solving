function checkPossibility(nums) {
  const isSorted = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
    return true;
  };

  // Iterate through the array to find the first violation of non-decreasing order
  for (let i = 0; i < nums.length - 1; i++) {
    const currentElement = nums[i];
    const nextElement = nums[i + 1];

    // Found a violation where current element is greater than next element
    if (currentElement > nextElement) {
      // Strategy 1: Try modifying the current element to match the next element
      nums[i] = nextElement;
      if (isSorted(nums)) {
        return true;
      }

      // Strategy 2: Restore the current element and try modifying the next element instead
      nums[i] = currentElement;
      nums[i + 1] = currentElement;
      if (isSorted(nums)) {
        return true;
      } else {
        return false;
      }
    }
  }

  // No violations found, array is already non-decreasing
  return true;
}
