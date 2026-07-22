// function averagesOfSubarraysOfSizeK(arr, k) {
//   const result = [];

//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let windowSum = 0;
//     for (let j = i; j < i + k; j++) {
//       windowSum += arr[j];
//     }
//     result.push(windowSum / k);
//   }

//   return result;
// }

function averagesOfSubarraysOfSizeK(arr, k) {
  const result = [];
  let windowSum = 0;

  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];
    if (right >= k - 1) {
      result.push(windowSum / k);
      windowSum -= arr[left];
      left += 1;
    }
  }

  return result;
}

const result = averagesOfSubarraysOfSizeK([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
console.log(`Averages of subarrays of size K: ${result}`);
