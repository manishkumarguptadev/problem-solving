class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(data) {
    this.stack1.push(data);
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }

    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    var temp = this.stack2.pop();

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }

    return temp;
  }
}
