class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(data) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(data);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack1.pop();
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
// var queue = new newQueue();
// for (var i = 0; i < 5; i++) queue.enqueue(i + 1);

// console.log("----------");

// for (var i = 0; i < 5; i++) console.log(queue.dequeue());
