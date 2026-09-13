import Heap from "../../common/heap.js";

function findKLargestNumbers(nums, k) {
  const minHeap = new Heap({
    comparator: (a, b) => a - b,
    initialValues: [],
  });
  // put first 'K' numbers in the min heap
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  // go through the remaining numbers of the array,
  // if the number from the array is bigger than the
  // top(i.e., smallest) number of the min-heap,
  // remove the top number from heap and add the number from array
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  // the heap has the top 'K' numbers, return them in a list
  return minHeap.toArray();
}

console.log(
  `Here are the top K numbers: ${findKLargestNumbers([3, 1, 5, 12, 2, 11], 3)}`
);
console.log(
  `Here are the top K numbers: ${findKLargestNumbers([5, 12, 11, -1, 12], 3)}`
);
