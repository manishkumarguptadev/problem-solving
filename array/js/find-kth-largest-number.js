import Heap from "../../common/heap.js";

function findKthLargestNumber(nums, k) {
  const minHeap = new Heap({
    comparator: (a, b) => a - b,
    initialValues: [],
  });
  // put first k numbers in the max heap
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  // go through the remaining numbers of the array,
  // if the number from the array is larger than the
  // top(biggest) number of the heap,
  // remove the top number from heap and add the number from array
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  // the root of the heap has the Kth largest number
  return minHeap.peek();
}

console.log(
  `Kth largest number is: ${findKthLargestNumber([1, 5, 12, 2, 11, 5, 6], 3)}`
);

// since there are two 5s in the input array, our 3rd and 4th largest numbers should be a '5'
console.log(
  `Kth largest number is: ${findKthLargestNumber([1, 5, 12, 2, 11, 5], 4)}`
);

console.log(
  `Kth largest number is: ${findKthLargestNumber([5, 12, 11, -1, 12], 3)}`
);
