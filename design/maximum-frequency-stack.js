import Heap from "../common/heap.js";
var FreqStack = function () {
  this.sequenceNumber = 0;
  this.frequencyMap = {};
  this.maxHeap = new Heap({
    comparator: (a, b) => b.compare(a),
    initialValues: [],
  });
};

FreqStack.prototype.push = function (val) {
  if (!(val in this.frequencyMap)) {
    this.frequencyMap[val] = 1;
  } else {
    this.frequencyMap[val]++;
  }
  this.maxHeap.push(
    new Element(val, this.frequencyMap[val], this.sequenceNumber)
  );
  this.sequenceNumber += 1;
};

FreqStack.prototype.pop = function () {
  const val = this.maxHeap.pop().val;
  // decrement the frequency or remove if this is the last val
  if (this.frequencyMap[val] > 1) {
    this.frequencyMap[val] -= 1;
  } else {
    delete this.frequencyMap[val];
  }

  return val;
};

class Element {
  constructor(val, frequency, sequenceNumber) {
    this.val = val;
    this.frequency = frequency;
    this.sequenceNumber = sequenceNumber;
  }

  compare(other) {
    // higher frequency wins
    if (this.frequency !== other.frequency) {
      return this.frequency - other.frequency;
    }
    // if both elements have same frequency,
    // return the element that was pushed later
    return this.sequenceNumber - other.sequenceNumber;
  }
}

var obj = new FreqStack();

[[5], [7], [5], [7], [4], [5]].forEach((val) => obj.push(val));
let pops = [[], [], [], []].map((value) => obj.pop());
pops.forEach((pop) => console.log(pop));
