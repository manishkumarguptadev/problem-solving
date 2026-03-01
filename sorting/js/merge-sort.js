const merge = (nums, lo, mid, hi) => {
  const n1 = mid - lo + 1;
  const n2 = hi - mid;
  const leftPart = nums.slice(lo, mid + 1);
  const rightPart = nums.slice(mid + 1, hi + 1);

  let i = 0;
  let j = 0;
  let k = lo;
  while (i < n1 && j < n2) {
    if (leftPart[i] < rightPart[j]) {
      nums[k++] = leftPart[i++];
    } else {
      nums[k++] = rightPart[j++];
    }
  }

  while (i < n1) {
    nums[k++] = leftPart[i++];
  }

  while (j < n2) {
    nums[k++] = rightPart[j++];
  }
};

const mergeSort = (nums, lo, hi) => {
  if (lo >= hi) {
    return;
  }

  const mid = lo + Math.floor((hi - lo) / 2);

  mergeSort(nums, lo, mid);
  mergeSort(nums, mid + 1, hi);
  merge(nums, lo, mid, hi);
};

var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};
