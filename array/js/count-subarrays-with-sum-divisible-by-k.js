function subarraySumDivisibleByK(nums, k) {
  let currentPrefixSum = 0;
  let count = 0;

  const remainderCountMap = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    currentPrefixSum += nums[i];

    let remainder = ((currentPrefixSum % k) + k) % k;

    if (remainderCountMap[remainder]) {
      count += remainderCountMap[remainder];
    }

    remainderCountMap[remainder] = (remainderCountMap[remainder] || 0) + 1;
  }

  return count;
}

// Example usage:
const array = [4, 5, 0, -2, -3, 1];
const k = 5;
console.log(subarraySumDivisibleByK(array, k));
