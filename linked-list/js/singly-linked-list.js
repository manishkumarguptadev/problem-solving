export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  isEmpty() {
    return this.head === null;
  }
  print() {
    let curr = this.head;
    let array = [];
    while (curr !== null) {
      array.push(curr.val);
      curr = curr.next;
    }
    console.log();
    console.log(array.join("    "));
  }
  //   printListWithForwardArrow(linkedListNode) {
  //     let temp = linkedListNode;
  //     let result = "";
  //     while (temp != null) {
  //         result += temp.val;
  //         temp = temp.next;
  //         if (temp != null) result += " → ";
  //         // if this is the last node, print null at the end
  //         else result += " → null";
  //     }
  //     return result;
  // }
  get(index) {
    let i = 0;
    let curr = this.head;
    while (i < index) {
      curr = curr.next;
      i++;
    }
    return curr.val;
  }
  addFirst(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      node.next = null;
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  addLast(val) {
    const node = new Node(val);
    node.next = null;
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  insertAtTail(val) {
    //Creating a new Node with val as newval
    const node = new Node(val);
    node.next = null;
    //check for case when list is empty
    if (this.isEmpty()) {
      //Needs to Insert the new node at Head
      this.head = this.tail = node;
    } else {
      //Iterate to the last element
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }

      //Make new node the nextElement of last node of list
      curr.next = node;
      this.tail = node;
    }
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}
