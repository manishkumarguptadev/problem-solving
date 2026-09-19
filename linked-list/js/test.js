import { display } from "./insert.js";
import { length } from "./length.js";
import { reorderList } from "./reorder-list.js";

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ---- Generate our linked list ----
const head = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
// ---- Generate our linked list ----
// console.log(middleNode(head));
console.log(length(head));
reorderList(head);
console.log(display(head));
