function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
}

console.log(cyclicSort([3, 1, 5, 4, 2]));
console.log(cyclicSort([2, 6, 4, 3, 1, 5]));
console.log(cyclicSort([1, 5, 6, 4, 3, 2]));
