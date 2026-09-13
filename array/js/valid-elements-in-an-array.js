var findValidElements = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || i === nums.length - 1) {
      result.push(nums[i]);
      continue;
    }
    if (
      nums[i] > Math.max(...nums.slice(0, i)) ||
      nums[i] > Math.max(...nums.slice(i + 1))
    ) {
      result.push(nums[i]);
    }
  }

  return result;
};
