var deleteDuplicates = (head) => {
  const dummy = new ListNode(0);

  let p = dummy;
  let count = 0;
  let prev = head;
  let currr = head;

  while (currr) {
    while (currr && currr.val === prev.val) {
      currr = currr.next;
      count++;
    }

    if (count === 1) {
      p.next = prev;
      p = p.next;
    }

    prev = currr;
    count = 0;
  }

  if (p) {
    p.next = null;
  }

  return dummy.next;
};
var deleteDuplicates = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next; // Skip all duplicates
    } else {
      prev = curr; // Move to next distinct node
    }
    curr = curr.next;
  }

  return dummy.next;
};
