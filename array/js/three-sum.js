// function threeSum(nums) {
//   let n = nums.length;

//   const triplets = new Set();

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const triplet = [nums[i], nums[j], nums[k]];
//           triplet.sort((a, b) => a - b);
//           triplets.add(triplet);
//         }
//       }
//     }
//   }

//   return [...triplets];
// }

function threeSum(nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);
  // Step 2. For each possible first element nums[i]
  // Make a bidirectional 2Sum search
  for (let i = 0; i < nums.length - 2; i++) {
    // Optimization: triplets consisting of only positive numbers will never sum to 0.
    if (nums[i] > 0) {
      break;
    }
    // Skip duplicate elements for a
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // Find all pairs that sum to a target of '-a' (-nums[i]).
    // const pairs = pairSumSortedAllPairs(nums, i + 1, -nums[i]);
    let left = i + 1,
      right = nums.length - 1,
      target = -nums[i];

    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === target) {
        triplets.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate elements for b
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        // Skip duplicate elements for c
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeSum([0, -1, 2, -3, 1]));
