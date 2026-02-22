// prettier-ignore
import Heap from "../../common/heap.js";
// function kSmallestPairs(nums1, nums2, k) {
//   const maxHeap = new Heap({
//     comparator: (a, b) => b[0] - a[0],
//     initialValues: [],
//   });
//   for (let i = 0; i < Math.min(k, nums1.length); i++) {
//     for (let j = 0; j < Math.min(k, nums2.length); j++) {
//       if (maxHeap.size() < k) {
//         maxHeap.push([nums1[i] + nums2[j], i, j]);
//       } else {
//         // if the sum of the two numbers from the two arrays is larger
//         // than the largest(top) element of the heap, we can 'break' here.
//         // Since the arrays are sorted in the ascending order,
//         // we'll not be able to find a pair with a smaller sum moving forward
//         if (nums1[i] + nums2[j] > maxHeap.peek()[0]) {
//           break;
//         } else {
//           // we have a pair with a smaller sum, remove top and insert this pair in the heap
//           maxHeap.pop();
//           maxHeap.push([nums1[i] + nums2[j], i, j]);
//         }
//       }
//     }
//   }

//   const result = [];
//   maxHeap.toArray().forEach((a) => {
//     result.push([nums1[a[1]], nums2[a[2]]]);
//   });

//   return result;
// }
function kSmallestPairs(nums1, nums2, k) {
  const result = [];

  const minHeap = new Heap({
    comparator: (a, b) =>
      nums1[a[0]] + nums2[a[1]] - (nums1[b[0]] + nums2[b[1]]),
    initialValues: [],
  });

  // Initialize heap with pairs (i, 0) for
  // first min(k, m) elements from nums1
  // paired with the first element of nums2
  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    minHeap.push([i, 0]);
  }

  // Extract k smallest pairs
  while (k > 0 && minHeap.size() > 0) {
    // Get the pair with minimum sum
    const [index1, index2] = minHeap.pop();

    // Add the actual values to result
    result.push([nums1[index1], nums2[index2]]);

    // If there's a next element in nums2,
    // add the pair (index1, index2 + 1) to heap
    // This ensures we explore all possible pairs in sorted order
    if (index2 + 1 < nums2.length) {
      minHeap.push([index1, index2 + 1]);
    }

    k--;
  }

  return result;
}

process.stdout.write("Pairs with smallest sum are: ");
const result = kSmallestPairs([1, 7, 11], [2, 4, 6], 3);
result.forEach((a) => {
  process.stdout.write(`[${a[0]}, ${a[1]}] `);
});
