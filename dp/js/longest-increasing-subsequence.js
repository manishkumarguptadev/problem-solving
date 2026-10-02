var lengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
var lengthOfLIS = function (nums) {
  const res = [];

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };

  for (const n of nums) {
    if (!res.length || res[res.length - 1] < n) {
      res.push(n);
    } else {
      const idx = binarySearch(res, n);
      res[idx] = n;
    }
  }

  return res.length;
};
