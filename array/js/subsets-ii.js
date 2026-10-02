const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);
  const results = [];
  const solution = [];

  const backtracking = (start) => {
    results.push(solution.slice());

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue; // avoid duplicates
      }

      solution.push(nums[i]);
      backtracking(nums, i + 1);
      solution.pop();
    }

    backtracking(0);
    return results;
  };
};
function subsetsWithDup(nums) {
  // sort the numbers to handle duplicates
  nums.sort();
  const subsets = [[]];
  let startIndex = 0,
    endIndex = 0;
  for (i = 0; i < nums.length; i++) {
    // if current and the previous elements are same,
    //  create new subsets only from the subsets
    // added in the previous step
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    } else {
      startIndex = 0;
    }
    endIndex = subsets.length - 1;
    for (j = startIndex; j <= endIndex; j++) {
      // create a new subset from the existing subset
      // and add the current element to it
      const set = subsets[j].slice(0);
      set.push(nums[i]);
      subsets.push(set);
    }
  }
  return subsets;
}
