// function maxSumSubarrayOfSizeK(arr, k) {
//   let maxSum = 0;

//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let windowSum = 0;
//     for (let j = i; j < i + k; j++) {
//       windowSum += arr[j];
//     }
//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }
// function maxSumSubarrayOfSizeK(arr, k) {
//   let maxSum = 0,
//     windowSum = 0;

//   for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
//   }
//   maxSum = windowSum;
//   for (
//     let windowStart = 0, windowEnd = k;
//     windowEnd < arr.length;
//     windowEnd++, windowStart++
//   ) {
//     windowSum -= arr[windowStart];
//     windowSum += arr[windowEnd];
//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }
function maxSumSubarrayOfSizeK(arr, k) {
  let maxSum = 0,
    windowSum = 0;

  let left = 0,
    right = 0;
  while (right < arr.length) {
    windowSum += arr[right];

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[left];
      left++;
    }
    right++;
  }

  return maxSum;
}
// function maxSumSubarrayOfSizeK(arr, k) {
//   let maxSum = 0,
//     windowSum = 0;

//   let left = 0;
//   for (let right = 0; right < arr.length; right++) {
//     windowSum += arr[right];

//     if (right >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[left];
//       left++;
//     }
//   }
//   return maxSum;
// }

console.log(
  `Maximum sum of a subarray of size K: ${maxSumSubarrayOfSizeK(
    [2, 1, 5, 1, 3, 2],
    3
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${maxSumSubarrayOfSizeK(
    [2, 3, 4, 1, 5],
    2
  )}`
);
