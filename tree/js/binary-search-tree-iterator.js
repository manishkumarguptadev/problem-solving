var BSTIterator = function (root) {
  this.stack = [];
  this.curr = root;
};

BSTIterator.prototype.next = function () {
  while (this.curr) {
    this.stack.push(this.curr);
    this.curr = this.curr.left;
  }

  var node = this.stack.pop();
  this.curr = node.right;
  return node.val;
};

BSTIterator.prototype.hasNext = function () {
  return this.curr || this.stack.length > 0;
};
