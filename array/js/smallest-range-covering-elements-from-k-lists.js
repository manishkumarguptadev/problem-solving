import Heap from "../../common/heap.js";
var smallestRange = function (nums) {
  const minHeap = new Heap({
    comparator: (a, b) => a[0] - b[0],
    initialValues: [],
  });

  let rangeStart = 0,
    rangeEnd = Infinity,
    currentMaxNumber = -Infinity;

  // put the 1st element of each array in the max heap
  nums.forEach((list) => {
    minHeap.push([list[0], 0, list]);
    currentMaxNumber = Math.max(currentMaxNumber, list[0]);
  });

  // take the smallest(top) element from the min heap,
  // if it gives us smaller range, update the ranges
  // if the array of the top element has more elements,
  // insert the next element in the heap
  while (minHeap.size() === nums.length) {
    const [num, i, list] = minHeap.pop();
    if (rangeEnd - rangeStart > currentMaxNumber - num) {
      rangeStart = num;
      rangeEnd = currentMaxNumber;
    }
    if (list.length > i + 1) {
      minHeap.push([list[i + 1], i + 1, list]);
      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
};

console.log(
  `Smallest range is: ${smallestRange([
    [1, 5, 8],
    [4, 12],
    [7, 8, 10],
  ])}`
);
console.log(
  `Smallest range is: ${smallestRange([
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ])}`
);
