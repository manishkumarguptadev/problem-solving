import Heap from "../../common/heap.js";
var KthLargest = function (k, nums) {
  this.minHeap = new Heap({
    comparator: (a, b) => a - b,
    initialValues: [],
  });
  this.k = k;

  // add the numbers in the min heap
  nums.forEach((num) => {
    this.add(num);
  });
};

KthLargest.prototype.add = function (val) {
  // add the new number in the min heap
  this.minHeap.push(val);

  // if heap has more than 'k' numbers, remove one number
  if (this.minHeap.size() > this.k) {
    this.minHeap.pop();
  }

  // return the 'Kth largest number
  return this.minHeap.peek();
};
class KthLargest {
  constructor(k, nums) {
    this.minHeap = new Heap({
      comparator: (a, b) => a - b,
      initialValues: [],
    });
    this.k = k;

    // add the numbers in the min heap
    nums.forEach((num) => {
      this.add(num);
    });
  }

  add(val) {
    // add the new number in the min heap
    this.minHeap.push(val);

    // if heap has more than 'k' numbers, remove one number
    if (this.minHeap.size() > this.k) {
      this.minHeap.pop();
    }

    // return the 'Kth largest number
    return this.minHeap.peek();
  }
}

const kthLargestNumber = new KthLargest(3, [4, 5, 8, 2]);
console.log(`3th largest number is: ${kthLargestNumber.add(3)}`);
console.log(`3th largest number is: ${kthLargestNumber.add(5)}`);
console.log(`3th largest number is: ${kthLargestNumber.add(10)}`);
console.log(`3th largest number is: ${kthLargestNumber.add(9)}`);
console.log(`3th largest number is: ${kthLargestNumber.add(4)}`);
