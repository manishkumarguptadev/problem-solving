var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

var search = function (nums, target) {
  function findelem(start, end) {
    if (start > end) {
      return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return findelem(start, mid - 1);
    } else {
      return findelem(mid + 1, end);
    }
  }

  return findelem(0, nums.length - 1);
};
