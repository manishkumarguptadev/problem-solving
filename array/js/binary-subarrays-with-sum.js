var numSubarraysWithSum = function (nums, goal) {
  let count = 0;

  const map = new Map();
  map.set(0, 1);

  let currPrefixSum = 0;
  for (let num of nums) {
    currPrefixSum += num;

    if (map.has(currPrefixSum - goal)) {
      count += map.get(currPrefixSum - goal);
    }

    map.set(currPrefixSum, (map.get(currPrefixSum) || 0) + 1);
  }

  return count;
};
