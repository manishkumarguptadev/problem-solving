// function findKthMissingPositive(nums, k) {
//   let count = 0;
//   const n = nums.length;
//   let j = 0;
//   for (i = 1; i < nums[n - 1]; i++) {
//     if (i === nums[j]) {
//       j++;
//     } else {
//       count++;
//       if (count === k) {
//         return i;
//       }
//     }
//   }
//   return nums[n - 1] + k - count;
// }

function findKthMissingPositive(nums, k) {
  const n = nums.length;
  for (i = 0; i < n; i++) {
    if (nums[i] <= k) {
      k++;
    }
  }
  return k;
}

console.log(findKthMissingPositive([2, 3, 4, 7, 11], 5));
console.log(findKthMissingPositive([1, 2, 3, 4], 2));
