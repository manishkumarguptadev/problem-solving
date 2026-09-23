var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid % 2 === 1) {
      mid--;
    }

    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
var singleNonDuplicate = function (nums) {
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }
  return res;
};
var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};
