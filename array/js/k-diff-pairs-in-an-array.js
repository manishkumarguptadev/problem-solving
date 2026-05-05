var findPairs = function (nums, k) {
  // Step 1. Count the characters
  const map = {};
  for (let num of nums) {
    map[num] = ~~map[num] + 1;
  }

  // Step 2. Count the pairs
  let count = 0;
  for (let key in map) {
    if (k === 0) {
      if (map[key] > 1) {
        count++;
      }
    } else {
      if (parseInt(key) + k in map) {
        count++;
      }
    }
  }

  return count;
};
