function removeDuplicatesSorted(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let res = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[res - 2]) {
      nums[res] = nums[i];
      res++;
    }
  }

  return res;
}
