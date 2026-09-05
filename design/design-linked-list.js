function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let i = 0;
  let curr = this.head;
  while (i < index) {
    curr = curr.next;
    i++;
  }
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  if (this.head === null) {
    node.next = null;
    this.head = this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  node.next = null;
  if (this.head === null) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  const node = new Node(val);
  let prev = null;
  let curr = this.head;
  let i = 0;
  while (i < index) {
    prev = curr;
    curr = curr.next;
    i++;
  }
  node.next = prev.next;
  prev.next = node;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  if (this.size === 1) {
    this.head = this.tail = null;
    this.size--;
    return;
  }
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }
  if (index === this.size - 1) {
    let curr = this.head;
    while (curr.next && curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next = null;
    this.tail = curr;
    this.size--;
    return;
  }
  let prev = null;
  let curr = this.head;
  let i = 0;
  while (i < index) {
    prev = curr;
    curr = curr.next;
    i++;
  }
  prev.next = curr.next;
  this.size--;
  return;
};
