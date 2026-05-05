var maxProduct = function (nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = curMax;
    curMax = Math.max(nums[i] * curMax, nums[i], nums[i] * curMin);

    curMin = Math.min(nums[i] * curMin, nums[i], nums[i] * temp);

    result = Math.max(curMax, result);
  }
  return result;
};
