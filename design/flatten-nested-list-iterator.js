var NestedIterator = function (nestedList) {
  // Reverse the initial list so the first element is at the end (top of stack)
  this.stack = nestedList.reverse();
};

NestedIterator.prototype.hasNext = function () {
  while (this.stack.length > 0) {
    let top = this.stack[this.stack.length - 1];

    if (top.isInteger()) {
      return true;
    }

    // If it's a list, pop it and push its contents back in reverse order
    let list = this.stack.pop().getList();
    for (let i = list.length - 1; i >= 0; i--) {
      this.stack.push(list[i]);
    }
  }
  return false;
};

NestedIterator.prototype.next = function () {
  // hasNext() guarantees the top of the stack is an integer
  return this.stack.pop().getInteger();
};
