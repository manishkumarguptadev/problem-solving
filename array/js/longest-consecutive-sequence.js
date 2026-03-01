function longestConsecutiveSequence(nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }
  let longestChain = 0;
  // Look for consecutive numbers that start from each number.
  for (const num of nums) {
    let currentNum = num;
    let currentChain = 1;
    // Continue to find the next consecutive numbers in the chain.
    while (existInArray(nums, currentNum + 1)) {
      currentNum++;
      currentChain++;
    }
    longestChain = Math.max(longestChain, currentChain);
  }
  return longestChain;
}

function existInArray(nums, target) {
  for (const num of nums) {
    if (num == target) {
      return true;
    }
  }
  return false;
}

function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);
  let longestChain = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentChain = 1;
      while (numSet.contains(currentNum + 1)) {
        currentNum++;
        currentChain++;
      }
      longestChain = Math.max(longestChain, currentChain);
    }
  }

  return longestChain;
}
