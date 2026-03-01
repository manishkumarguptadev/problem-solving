function longestSubarrayWithOnesAfterReplacement(nums, k) {
  let maxLen = 0,
    maxOnesCount = 0;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) {
      maxOnesCount++;
    }

    const numZeroesToReplace = right - left + 1 - maxOnesCount;
    if (numZeroesToReplace > k) {
      if (nums[left] === 1) {
        maxOnesCount--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(
  longestSubarrayWithOnesAfterReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
);
console.log(
  longestSubarrayWithOnesAfterReplacement(
    [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    3
  )
);
