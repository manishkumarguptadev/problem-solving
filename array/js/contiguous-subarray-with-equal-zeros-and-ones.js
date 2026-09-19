var findMaxLength = function (nums) {
  let sumMap = new Map();
  let maxLen = 0;
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      prefixSum -= 1;
    } else {
      prefixSum += 1;
    }
    if (prefixSum === 0) {
      maxLen = i + 1;
    } else if (sumMap.has(prefixSum)) {
      maxLen = Math.max(maxLen, i - sumMap.get(prefixSum));
    } else {
      sumMap.set(prefixSum, i);
    }
  }
  return maxLen;
};
