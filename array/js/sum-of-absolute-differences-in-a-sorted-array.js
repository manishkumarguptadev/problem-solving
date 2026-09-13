var getSumAbsoluteDifferences = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b, 0);

  let prefixSum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] =
      i * nums[i] -
      prefixSum +
      (totalSum - prefixSum - (nums.length - i) * nums[i]);
    prefixSum += nums[i];
  }

  return result;
};
