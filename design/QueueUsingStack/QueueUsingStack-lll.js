class QueueUsingStack {
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }

  enqueue(data) {
    this.enqueueStack.push(data);
  }

  isEmpty() {
    return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.dequeueStack.length !== 0) {
      return this.dequeueStack.pop();
    } else {
      while (this.enqueueStack.length !== 0) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
      return this.dequeueStack.pop();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.dequeueStack.length !== 0) {
      return this.dequeueStack[this.dequeueStack.length - 1];
    } else {
      while (this.enqueueStack.length !== 0) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
      return this.dequeueStack[this.dequeueStack.length - 1];
    }
  }
}
let qs = new QueueUsingStack();
console.log("dequeue()" + " = " + qs.dequeue());
qs.enqueue(3);
qs.enqueue(6);
qs.enqueue(16);
console.log("dequeue()" + " = " + qs.dequeue());
qs.enqueue(8);
qs.enqueue(4);
console.log("dequeue()" + " = " + qs.dequeue());
