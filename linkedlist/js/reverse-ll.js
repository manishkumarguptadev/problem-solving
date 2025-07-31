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

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

var reverseBetween = function (head, left, right) {
  let curr = head;
  let start = head;

  for (let i = 1; i <= left - 1; i++) {
    start = curr;
    curr = curr.next;
  }

  let prev = null,
    next = null,
    end = curr;

  for (let i = 1; i <= right - left + 1; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  start.next = prev;
  end.next = curr;

  if (left > 1) {
    return head;
  } else {
    return prev;
  }
};

printList(linkedList);
console.log("after reverse");
printList(reverseBetween(linkedList, 2, 4));
