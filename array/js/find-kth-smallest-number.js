import Heap from "../../common/heap.js";

function findKthSmallestNumber(nums, k) {
  const maxHeap = new Heap({
    comparator: (a, b) => b - a,
    initialValues: [],
  });
  // put first k numbers in the max heap
  for (let i = 0; i < k; i++) {
    maxHeap.push(nums[i]);
  }

  // go through the remaining numbers of the array,
  // if the number from the array is smaller than the
  // top(biggest) number of the heap,
  // remove the top number from heap and add the number from array
  for (let i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(nums[i]);
    }
  }

  // the root of the heap has the Kth smallest number
  return maxHeap.peek();
}

console.log(
  `Kth smallest number is: ${findKthSmallestNumber([1, 5, 12, 2, 11, 5], 3)}`
);

// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(
  `Kth smallest number is: ${findKthSmallestNumber([1, 5, 12, 2, 11, 5], 4)}`
);

console.log(
  `Kth smallest number is: ${findKthSmallestNumber([5, 12, 11, -1, 12], 3)}`
);
