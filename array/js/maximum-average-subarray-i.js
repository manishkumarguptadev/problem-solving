var findMaxAverage = function (nums, k) {
  let windowSum = 0;
  let maxAvg = -Infinity;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right >= k - 1) {
      maxAvg = Math.max(maxAvg, windowSum / k);
      windowSum -= nums[left];
      left++;
    }
  }

  return maxAvg;
};
