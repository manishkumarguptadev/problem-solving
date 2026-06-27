function find_permutations(nums) {
  const results = [],
    permutations = [[]];
  for (let i = 0; i < nums.length; i++) {
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();
      for (let j = 0; j <= oldPermutation.length; j++) {
        const newPermutation = oldPermutation.slice(0);
        newPermutation.splice(j, 0, nums[i]);
        if (newPermutation.length === nums.length) {
          results.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }
  return results;
}

function generate_permutations(nums) {
  const result = [];
  generate_permutations_recursive(nums, 0, [], result);
  return result;
}

function generate_permutations_recursive(
  nums,
  index,
  currentPermutation,
  result
) {
  if (index === nums.length) {
    result.push(currentPermutation);
  } else {
    // create a new permutation by adding the current number at every position
    for (let i = 0; i < currentPermutation.length + 1; i++) {
      newPermutation = currentPermutation.slice(0); // clone the permutation
      newPermutation.splice(i, 0, nums[index]); // insert nums[index] at index 'i'
      generate_permutations_recursive(nums, index + 1, newPermutation, result);
    }
  }
}
const result = find_permutations([1, 2, 3]);
result.forEach((permutation) => {
  console.log(permutation);
});
