function checkSubarraySum(nums, k) {
  // Map to store the first occurrence index of each remainder
  // Initialize with remainder 0 at index -1 to handle edge cases
  const map = new Map([[0, -1]]);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // Update running sum and calculate remainder when divided by k
    sum += nums[i];
    if (k !== 0) {
      mod = sum % k;
    }

    if (map.has(mod)) {
      // Found a subarray with length at least 2 whose sum is divisible by k
      if (i - map.get(mod) >= 2) {
        return true;
      }
    } else {
      // First time seeing this remainder, store the current index
      map.set(mod, i);
    }
  }

  return false;
}
const checkSubarraySum = (nums, k) => {
  // step 1. store the cumulative sum in sum[]
  const sum = [...nums];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  // step 2. check the sum from nums[i] to nums[j]
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const total = sum[j] - sum[i] + nums[i];

      if (total === k || (k !== 0 && total % k === 0)) {
        return true;
      }
    }
  }

  return false;
};
