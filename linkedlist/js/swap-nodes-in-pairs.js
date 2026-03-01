const swapPairsR = (head) => {
  // Empty node or a single node
  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let curr = prev.next;
  let next = curr.next;

  curr.next = prev;
  prev.next = swapPairsR(next);

  return curr;
};
const swapPairs = (head) => {
  // Empty node or a single node
  if (!head || !head.next) {
    return head;
  }

  let prev = head;
  let curr = head.next;
  let next;

  head = head.next;

  while (true) {
    next = curr.next;
    curr.next = prev;

    if (next == null || next.next == null) {
      prev.next = next;
      break;
    }

    prev.next = next.next;
    curr = next.next;
    prev = next;
  }

  return head;
};
