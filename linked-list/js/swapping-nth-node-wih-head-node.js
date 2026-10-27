let swapNthNode = function (head, n) {
  if (!head || n === 1) {
    return head;
  }

  let prev = null;
  let current = head;

  let count = 1;
  while (current && count < n) {
    prev = current;
    current = current.next;
    count++;
  }

  // if there are less than n nodes
  if (current === null) {
    return head;
  }

  // current is pointing to nth node.
  // Let's swap nth node with head.
  prev.next = head;
  let temp = head.next;
  head.next = current.next;
  current.next = temp;

  return current;
};
