function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const quadruplets = [];
  for (let i = 0; i < nums.length - 3; i++) {
    // skip same element to avoid duplicate quadruplets
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      // skip same element to avoid duplicate quadruplets
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1,
        right = nums.length - 1;

      while (left < right) {
        sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
}

console.log(fourSum([4, 1, 2, -1, 1, -3], 1));
console.log(fourSum([2, 0, -1, 1, -2, 2], 2));
