var numOfGoodPairs = function (nums) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      count += map.get(nums[i]);
    }

    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  return count;
};

var numOfGoodPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }

  return count;
};
