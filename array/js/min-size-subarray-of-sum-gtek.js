function minSubArrayLen(target, nums) {
  let windowSum = 0,
    minLength = Infinity;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];
    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= nums[left];
      left += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}
console.log(
  `Smallest subarray length: ${minSubArrayLen(7, [2, 1, 5, 2, 3, 2])}`
);
console.log(`Smallest subarray length: ${minSubArrayLen(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${minSubArrayLen(8, [3, 4, 1, 1, 6])}`);
