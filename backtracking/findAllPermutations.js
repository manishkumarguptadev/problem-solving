const backtrack = (nums, used, candidate, result) => {
  if (candidate.length === nums.length) {
    result.push(candidate.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used[nums[i]]) {
      candidate.push(nums[i]);
      used[nums[i]] = true;
      backtrack(nums, used, candidate, result);
      candidate.pop();
      used[nums[i]] = false;
    }
  }
};

const findAllPermutations = (nums) => {
  const used = {};
  const candidate = [];
  const result = [];

  backtrack(nums, used, candidate, result);
  return result;
};

findAllPermutations([1, 2, 3]).forEach((arr) => console.log(arr));
