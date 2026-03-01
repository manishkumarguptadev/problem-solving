import { display } from "./insert.js";

var removeElements = function (head, val) {
  let prev = null;
  let current = head;

  while (current) {
    if (current.val === val) {
      if (current === head) {
        head = head.next;
        current = head;
      } else {
        prev.next = current.next;
        current = current.next;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }

  return head;
};
const removeElements = (head, val) => {
  const dummy = new ListNode(0);
  let p = dummy;

  let node = head;
  while (node) {
    if (node.val !== val) {
      p.next = node;
      p = p.next;
    }
    node = node.next;
  }

  p.next = null;

  return dummy.next;
};

const removeElementsR = (head, val) => {
  if (!head) {
    return null;
  }

  head.next = removeElementsR(head.next, val);

  return head.val === val ? head.next : head;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
let head = [20, 72, 14, 36, 11, 72, 41]
  .reverse()
  .reduce((acc, val) => new ListNode(val, acc), null);

console.log("Original:", display(head));
head = removeElementsR(head, 72);
console.log("After deleting 72 from list:", display(head));
