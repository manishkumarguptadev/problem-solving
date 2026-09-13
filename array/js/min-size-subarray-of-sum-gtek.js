function minSubArrayLen(nums, target) {
  let windowSum = 0,
    minLength = Number.MAX_SAFE_INTEGER;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];
    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}
console.log(
  `Smallest subarray length: ${minSubArrayLen([2, 1, 5, 2, 3, 2], 7)}`
);
console.log(`Smallest subarray length: ${minSubArrayLen([2, 1, 5, 2, 8], 7)}`);
console.log(`Smallest subarray length: ${minSubArrayLen([3, 4, 1, 1, 6], 8)}`);
