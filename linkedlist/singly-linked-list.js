export class Node {
  constructor(data) {
    this.data = data;
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
      array.push(curr.data);
      curr = curr.next;
    }
    console.log();
    console.log(array.join("    "));
  }
  //   printListWithForwardArrow(linkedListNode) {
  //     let temp = linkedListNode;
  //     let result = "";
  //     while (temp != null) {
  //         result += temp.data;
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
    return curr.data;
  }
  addFirst(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      node.next = null;
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  addLast(data) {
    const node = new Node(data);
    node.next = null;
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  insertAtTail(data) {
    //Creating a new Node with data as newData
    const node = new Node(data);
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
