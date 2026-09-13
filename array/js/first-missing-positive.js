function firstMissingPositive(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
}

console.log(firstMissingPositive([-3, 1, 5, 4, 2]));
console.log(firstMissingPositive([3, -2, 0, 1, 2]));
console.log(firstMissingPositive([3, 2, 5, 1]));
