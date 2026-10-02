var findPeakElement = function (nums) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (
      (mid == 0 || nums[mid - 1] < nums[mid]) &&
      (mid == nums.length - 1 || nums[mid] > nums[mid + 1])
    ) {
      return mid;
    }

    if (nums[mid] < nums[mid + 1]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
};
