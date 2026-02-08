class StackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(data) {
    this.queue1.push(data);
  }

  isEmpty() {
    return this.queue1.length === 0;
  }

  swapQueues() {
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }

    let value = this.queue1.shift();
    this.swapQueues();
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue1[this.queue1.length - 1];
  }
}
let sq = new StackUsingQueue();
console.log("Pop(): " + sq.pop());
sq.push(3);
sq.push(5);
sq.push(9);
console.log("Pop(): " + sq.pop());
sq.push(10);
sq.push(16);
console.log("Pop(): " + sq.pop());
