function findSubarraysWithProductLessThanK(nums, k) {
  if (k <= 1) {
    return [];
  }

  let result = [],
    product = 1;

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    const tempList = [];
    for (let i = right; i >= left; i--) {
      tempList.unshift(nums[i]);
      result.push(tempList);
    }
  }

  return result;
}

console.log(findSubarraysWithProductLessThanK([2, 5, 3, 10], 30));
console.log(findSubarraysWithProductLessThanK([8, 2, 6, 5], 50));
