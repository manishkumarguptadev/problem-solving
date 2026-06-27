var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0,
    count = 0;

  for (let n of nums) {
    if (n === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }

  return maxCount;
};

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      left = right + 1;
    } else {
      maxCount = Math.max(maxCount, right - left + 1);
    }
  }

  return maxCount;
};
