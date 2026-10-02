function minimumWindowSort(nums) {
  let low = 0,
    high = nums.length - 1;
  // find the first number out of sorting order from the beginning
  while (low < nums.length - 1 && nums[low] <= nums[low + 1]) {
    low += 1;
  }

  if (low === nums.length - 1) {
    // if the array is sorted
    return 0;
  }

  // find the first number out of sorting order from the end
  while (high > 0 && nums[high] >= nums[high - 1]) {
    high -= 1;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, nums[k]);
    subarrayMin = Math.min(subarrayMin, nums[k]);
  }

  // extend the subarray to include any number which is
  // bigger than the minimum of the subarray
  while (low > 0 && nums[low - 1] > subarrayMin) {
    low -= 1;
  }
  // extend the subarray to include any number which is
  //  smaller than the maximum of the subarray
  while (high < nums.length - 1 && nums[high + 1] < subarrayMax) {
    high += 1;
  }

  return high - low + 1;
}
function minimumWindowSort(nums) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      min = Math.min(min, nums[i]);
    }
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) {
      max = Math.max(max, nums[i]);
    }
  }

  let l, r;
  for (l = 0; l < nums.length; l++) {
    if (min < nums[l]) break;
  }

  for (r = nums.length - 1; r >= 0; r--) {
    if (max > nums[r]) break;
  }

  return r - l < 0 ? 0 : r - l + 1;
}
console.log(minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(minimumWindowSort([1, 3, 2, 0, -1, 7, 10]));
console.log(minimumWindowSort([1, 2, 3]));
console.log(minimumWindowSort([3, 2, 1]));
