var twoSum = function (nums, target) {
  const diffMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in diffMap) {
      return [diffMap[nums[i]], i];
    }
    const diff = target - nums[i];
    diffMap[diff] = i;
  }

  return [];
};
