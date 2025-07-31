function kSumSubarrays(nums, k) {
  let n = nums.length;
  let count = 0;

  let prefixSum = [0];
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = i; j < n + 1; j++) {
      if (prefixSum[j] - prefixSum[i - 1] === k) {
        count++;
      }
    }
  }
  return count;
}
function kSumSubarraysOptimized(nums, k) {
  let count = 0;
  let currPrefixSum = 0;

  let prefixSumMap = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    currPrefixSum += nums[i];

    if (prefixSumMap[currPrefixSum - k]) {
      count += prefixSumMap[currPrefixSum - k];
    }

    let freq = prefixSumMap[currPrefixSum] || 0;
    prefixSumMap[currPrefixSum] = freq + 1;
  }

  return count;
}
console.log(kSumSubarraysOptimized([1, 2, 3], 3));
