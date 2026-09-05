var leftRightDifference = function (nums) {
  const n = nums.length;
  const leftsum = new Array(n).fill(0);
  const rightsum = new Array(n).fill(0);
  const result = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    leftsum[i] = leftsum[i - 1] + nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rightsum[i] = rightsum[i + 1] + nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = Math.abs(leftsum[i] - rightsum[i]);
  }

  return result;
};
var leftRightDifference = function (nums) {
  let result = [];

  let leftsum = 0;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftsum;
    leftsum += nums[i];
  }

  let rightsum = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = Math.abs(result[i] - rightsum);
    rightsum += nums[i];
  }

  return result;
};
var leftRightDifference = function (nums) {
  const n = nums.length;
  const ans = Array(n).fill(0);
  const totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    ans[i] = Math.abs(leftSum - rightSum);
    leftSum += nums[i];
  }

  return ans;
};
