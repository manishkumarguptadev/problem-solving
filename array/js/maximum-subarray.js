let maxSumSubArray = function (nums) {
  let currMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currMax < 0) {
      currMax = nums[i];
    } else {
      currMax += nums[i];
    }

    if (currMax > globalMax) {
      globalMax = currMax;
    }
  }

  return globalMax;
};
const maxSubArray = (nums) => {
  let currMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(currMax + nums[i], nums[i]);
    globalMax = Math.max(currMax, globalMax);
  }

  return globalMax;
};
v = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
console.log("Sum of largest subarray: " + maxSumSubArray(v));
