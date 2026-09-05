import { display } from "./insert.js";

// let insertionSortList = function (head) {
//   let sorted = new ListNode();
//   let curr = head;
//   let temp;

//   while (curr) {
//     temp = curr.next;

//     let p = sorted;
//     while (p.next && p.next.val < curr.val) {
//       p = p.next;
//     }

//     curr.next = p.next;
//     p.next = curr;

//     curr = temp;
//   }

//   return sorted.next;
// };
let insertionSortList = function (head) {
  let sorted = null;
  let curr = head;
  let temp;

  while (curr) {
    temp = curr.next;

    if (!sorted || curr.val <= sorted.val) {
      curr.next = sorted;
      sorted = curr;
    } else {
      let p = sorted;
      while (p.next && p.next.val < curr.val) {
        p = p.next;
      }

      curr.next = p.next;
      p.next = curr;
    }

    curr = temp;
  }

  return sorted;
};
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
let head = [20, 72, 14, 36, 11, 41]
  .reverse()
  .reduce((acc, val) => new ListNode(val, acc), null);
console.log("Original:", display(head));

head = insertionSortList(head);
console.log("After sorting:", display(head));
