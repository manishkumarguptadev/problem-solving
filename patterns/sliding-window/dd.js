// function max_sub_array_of_size_k(k, arr) {
//   let maxSum = 0,
//     windowSum = 0;

//   for (let i = 0; i < arr.length - k + 1; i++) {
//     windowSum = 0;
//     for (let j = i; j < i + k; j++) {
//       windowSum += arr[j];
//     }
//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (window_end = 0; window_end < arr.length; window_end++) {
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return maxSum;
}
console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);
