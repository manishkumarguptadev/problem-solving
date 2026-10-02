// function threeSumSmaller(nums, target) {
//   nums.sort((a, b) => a - b);
//   let count = 0;
//   for (i = 0; i < nums.length - 2; i++) {
//     let left = i + 1,
//       right = nums.length - 1;
//     while (left < right) {
//       if (nums[i] + nums[left] + nums[right] < target) {
//         count += right - left;
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return count;
// }

function threeSumSmaller(nums, target) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < target) {
        for (j = right; j > left; j--) {
          triplets.push([nums[i], nums[left], nums[j]]);
        }
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeSumSmaller([-1, 0, 2, 3], 3));
console.log(threeSumSmaller([-1, 4, 2, 1, 3], 5));
