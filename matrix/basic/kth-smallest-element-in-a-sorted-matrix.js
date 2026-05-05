import Heap from "../../common/heap.js";
var kthSmallest = function (matrix, k) {
  const minHeap = new Heap({
    comparator: (a, b) => a[0] - b[0],
    initialValues: [],
  });

  // put the 1st element of each row in the min heap
  // we don't need to push more than 'k' elements in the heap
  for (let i = 0; i < Math.min(k, matrix.length); i++) {
    minHeap.push([matrix[i][0], 0, matrix[i]]);
  }

  // take the smallest(top) element form the min heap,
  // if the running count is equal to k' return the number
  // if the row of the top element has more elements,
  // add the next element to the heap
  let numberCount = 0;
  while (minHeap.size() > 0) {
    let [number, i, row] = minHeap.pop();
    numberCount += 1;
    if (numberCount === k) {
      return number;
    }

    if (row.length > i + 1) {
      minHeap.push([row[i + 1], i + 1, row]);
    }
  }
};

console.log(
  `Kth smallest number is: ${kthSmallest(
    [
      [2, 6, 8],
      [3, 7, 10],
      [5, 8, 11],
    ],
    5
  )}`
);
console.log(
  `Kth smallest number is: ${kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )}`
);
