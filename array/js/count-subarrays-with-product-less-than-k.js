function countSubarraysWithProductLessThanK(nums, k) {
  if (k <= 1) {
    return 0;
  }

  let count = 0,
    product = 1;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

console.log(countSubarraysWithProductLessThanK([2, 5, 3, 10], 30));
console.log(countSubarraysWithProductLessThanK([8, 2, 6, 5], 50));
