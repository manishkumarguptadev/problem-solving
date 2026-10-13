function firstKMissingPositive(nums, k) {
  const n = nums.length;
  let i = 0;
  while (i < n) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  const missingNumbers = [];
  const extraNumbers = new Set();
  for (i = 0; i < n; i++) {
    if (missingNumbers.length < k) {
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(nums[i]);
      }
    }
  }

  // add the remaining missing numbers
  i = 1;
  while (missingNumbers.length < k) {
    const candidateNumber = n + i;
    if (!extraNumbers.has(candidateNumber)) {
      missingNumbers.push(candidateNumber);
    }
    i++;
  }

  return missingNumbers;
}

console.log(firstKMissingPositive([3, -1, 4, 5, 5], 3));
console.log(firstKMissingPositive([2, 3, 4], 3));
console.log(firstKMissingPositive([-2, -3, 4], 2));
