import Heap from "../../common/heap.js";

var topKFrequent = function (nums, k) {
  // find the frequency of each number
  const numFrequencyMap = {};
  nums.forEach((num) => {
    if (!(num in numFrequencyMap)) {
      numFrequencyMap[num] = 1;
    } else {
      numFrequencyMap[num]++;
    }
  });

  const minHeap = new Heap({
    comparator: (a, b) => a[1] - b[1],
    initialValues: [],
  });

  // go through all numbers of the numFrequencyMap and
  //  push them in the minHeap, which will have top k frequent numbers.
  //  If the heap size is more than k, we remove the smallest(top) number
  Object.keys(numFrequencyMap).forEach((num) => {
    minHeap.push([num, numFrequencyMap[num]]);
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  });

  // create a list of top k numbers
  const topNumbers = [];
  while (minHeap.size() > 0) {
    topNumbers.push(+minHeap.pop()[0]);
  }

  return topNumbers;
};

console.log(
  `Here are the K frequent numbers: ${topKFrequent(
    [1, 3, 5, 12, 11, 12, 11],
    2
  )}`
);

console.log(
  `Here are the K frequent numbers: ${topKFrequent(
    [5, 12, 10, 11, 3, 11, 10],
    2
  )}`
);
