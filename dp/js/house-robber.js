var rob = function (nums) {
  const n = nums.length;

  if (n === 1) {
    return nums[0];
  }

  const dp = Array(n).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[n - 1];
};
var rob = function (nums) {
  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let v1 = nums[0];
  let v2 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const v = Math.max(v1 + nums[i], v2);
    v1 = v2;
    v2 = v;
  }

  return v2;
};
