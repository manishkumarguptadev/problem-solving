import Heap from "../common/heap.js";
class MedianFinder {
  constructor() {
    this.maxHeap = new Heap({
      comparator: (a, b) => b - a,
    });
    this.minHeap = new Heap({
      comparator: (a, b) => a - b,
    });
  }

  addNum(num) {
    if (this.maxHeap.size() === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.maxHeap.size() === this.minHeap.size()) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    }
    return this.maxHeap.peek();
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(`The median is: ${medianFinder.findMedian()}`);
medianFinder.addNum(3);
console.log(`The median is: ${medianFinder.findMedian()}`);
