class MinStack {
  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }

  pop() {
    this.minStack.pop();
    return this.mainStack.pop();
  }

  push(val) {
    this.mainStack.push(val);
    if (
      this.minStack.length &&
      val >= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    } else {
      this.minStack.push(val);
    }
  }

  top() {
    return this.mainStack[this.mainStack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
var stack = new MinStack();
stack.push(5);
stack.push(2);
stack.push(4);
stack.push(1);
stack.push(3);
stack.push(9);
console.log("minimum value: ", stack.getMin());
stack.pop();
console.log("minimum value: ", stack.getMin());
stack.pop();
console.log("minimum value: ", stack.getMin());
stack.pop();
console.log("minimum value: ", stack.getMin());
stack.pop();
console.log("minimum value: ", stack.getMin());
stack.pop();
console.log("minimum value: ", stack.getMin());
