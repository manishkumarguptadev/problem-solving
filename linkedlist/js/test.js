import { kthFromEnd } from "./kthFromEnd.js";
import { length } from "./length.js";
import { middleNode } from "./middleNode.js";
import { search } from "./search.js";

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ---- Generate our linked list ----
const head = [6, 5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);
// ---- Generate our linked list ----
// console.log(middleNode(head));
console.log(length(head));
