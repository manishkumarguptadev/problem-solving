function reverseKGroup(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let reversed = null;
  let current = head;
  let previous = null;
  let next = null;

  let lastNodeOfPreviousPart = null;
  let lastNodeOfCurrentPart = null;

  while (true) {
    // after reversing the LinkedList
    // current will become the last node of the current part
    lastNodeOfCurrentPart = current;

    let i = 0;
    while (current !== null && i < k) {
      // reverse 'k' nodes
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    // connect with the previous part
    if (lastNodeOfPreviousPart !== null) {
      lastNodeOfPreviousPart.next = previous;
    } else {
      reversed = previous;
    }

    // connect with the next part
    lastNodeOfCurrentPart.next = current;

    if (current === null) {
      break;
    }

    lastNodeOfPreviousPart = lastNodeOfCurrentPart;
  }

  return reversed;
}
const getLength = (head) => {
  let count = 0;
  let p = head;

  while (p) {
    p = p.next;
    count++;
  }

  return count;
};
