class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

// const printList = (head) => {
//   if (!head) {
//     return;
//   }

//   console.log(head.val);
//   printList(head.next);
// };

function printList(head) {
  let curr = head;
  let array = [];
  while (curr !== null) {
    array.push(curr.val);
    curr = curr.next;
  }
  console.log();
  console.log(array.join("    "));
}

// --------- Our solution -----------

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

printList(linkedList);
console.log("after reverse");
printList(reverseList(linkedList));
