import Heap from "../../common/heap.js";
var findClosestElements = function (arr, k, x) {
  const index = binarySearch(arr, x);
  let low = index - k,
    high = index + k;

  // 'low' should not be less than zero
  low = Math.max(low, 0);
  // 'high' should not be greater the size of the array
  high = Math.min(high, arr.length - 1);

  const minHeap = new Heap({
    comparator: (a, b) => a[1] - b[1],
    initialValues: [],
  });
  // add all candidate elements to the min heap,
  //  sorted by their absolute difference from 'x'
  for (let i = low; i <= high; i++) {
    minHeap.push([arr[i], Math.abs(arr[i] - x)]);
  }

  // we need the top 'k' elements having smallest difference from 'x'
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(minHeap.pop()[0]);
  }

  result.sort((a, b) => a - b);
  return result;
};
function findClosestElements(arr, k, x) {
  const result = [];
  const index = binarySearch(arr, x);
  let leftPointer = index,
    rightPointer = index + 1;
  const n = arr.length;
  for (i = 0; i < k; i++) {
    if (leftPointer >= 0 && rightPointer < n) {
      const diff1 = Math.abs(x - arr[leftPointer]);
      const diff2 = Math.abs(x - arr[rightPointer]);
      if (diff1 <= diff2) {
        result.unshift(arr[leftPointer]);
        leftPointer -= 1;
      } else {
        result.push(arr[rightPointer]);
        rightPointer += 1;
      }
    } else if (leftPointer >= 0) {
      result.unshift(arr[leftPointer]);
      leftPointer -= 1;
    } else if (rightPointer < n) {
      result.push(arr[rightPointer]);
      rightPointer += 1;
    }
  }

  return result;
}
function binarySearch(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  }
  return low;
}
// function findClosestElements(arr, k, x) {
//   // Initialize left pointer at the beginning of array
//   let left = 0;

//   // Initialize right pointer at the end of array (exclusive)
//   let right = arr.length - 1;

//   // Narrow down the window until we have exactly k elements
//   while (right - left > k) {
//     // Compare distances from x to elements at boundaries
//     // If left element is closer or equally close, exclude right element
//     if (x - arr[left] <= arr[right - 1] - x) {
//       right--;
//     } else {
//       // Otherwise, exclude left element
//       left++;
//     }
//   }

//   // Return the k closest elements as a subarray
//   return arr.slice(left, right);
// }
console.log(
  `'k' closest numbers to 'x' are: ${findClosestElements(
    [5, 6, 7, 8, 9],
    3,
    7
  )}`
);
console.log(
  `'k' closest numbers to 'x' are: ${findClosestElements(
    [2, 4, 5, 6, 9],
    3,
    6
  )}`
);
console.log(
  `'k' closest numbers to 'x' are: ${findClosestElements(
    [2, 4, 5, 6, 9],
    3,
    10
  )}`
);
console.log(
  `'k' closest numbers to 'x' are: ${findClosestElements(
    [0, 0, 1, 2, 3, 3, 4, 7, 7, 8],

    3,
    5
  )}`
);
