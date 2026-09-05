class StackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  swapQueues() {
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  push(data) {
    if (this.isEmpty()) {
      this.queue1.push(data);
    } else {
      this.queue2.push(data);
      while (this.queue1.length !== 0) {
        this.queue2.push(this.queue1.shift());
      }
      this.swapQueues();
    }
  }
  isEmpty() {
    return this.queue1.length === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue1.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue1[0];
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
