import { SinglyLinkedList } from "./singly-linked-list.js";
const list = new SinglyLinkedList();

for (let index = 15; index > 0; index--) {
  list.addFirst(index);
}
list.insertAtTail(16);
list.insertAtTail(17);
list.print();
list.reverse();
list.print();
