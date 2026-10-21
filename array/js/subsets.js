const subsets = (nums) => {
  let results = [[]];

  nums.forEach((num) => {
    const newSubsets = results.map((subset) => {
      return subset.concat([num]);
    });
    results = results.concat(newSubsets);
  });

  return results;
};

function find_subsets(nums) {
  let results = [[]];

  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < results.length; j++) {
      const set = results[j].slice(0);
      set.push(nums[i]);
      results.push(set);
    }
  }

  return results;
}
const subsets_backtracking = (nums) => {
  const results = [];
  const solution = [];

  const backtracking = (start) => {
    results.push(solution.slice());

    for (let i = start; i < nums.length; i++) {
      solution.push(nums[i]);
      backtracking(i + 1);
      solution.pop();
    }
  };

  backtracking(0);
  return results;
};
function subsets_backtracking(nums) {
  const results = [];

  const backtracking = (start, solution) => {
    if (start === nums.length) {
      results.push(solution.slice());
      return;
    }

    solution.push(nums[i]);
    backtracking(i + 1, solution);
    solution.pop();
    backtracking(i + 1, solution);
  };

  backtracking(0, []);
  return results;
}
