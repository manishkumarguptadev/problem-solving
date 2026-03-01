function countSubarraysWithSumK(nums, k) {
  let n = nums.length;
  let count = 0;

  let prefixSum = [0];
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (prefixSum[j + 1] - prefixSum[i] === k) {
        count++;
      }
    }
  }

  return count;
}
function countSubarraysWithSumKOptimized(nums, k) {
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

const subarraySum = (nums, k) => {
  let count = 0;

  const map = new Map();
  map.set(0, 1);

  let currPrefixSum = 0;
  for (let num of nums) {
    currPrefixSum += num;

    if (map.has(currPrefixSum - k)) {
      count += map.get(currPrefixSum - k);
    }

    map.set(currPrefixSum, ~~map.get(currPrefixSum) + 1);
  }

  return count;
};

console.log(countSubarraysWithSumK([1, 2, -1, 1, 2], 3));
