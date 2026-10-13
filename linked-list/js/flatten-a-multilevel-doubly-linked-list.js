var flatten = function (head) {
  if (!head) {
    return null;
  }

  let stack = [];
  let curr = head;

  while (curr) {
    if (curr.child !== null) {
      if (curr.next !== null) {
        stack.push(curr.next);
      }
      curr.next = curr.child;
      curr.next.prev = curr;
      curr.child = null;
    }

    if (!curr.next && stack.length !== 0) {
      const temp = stack.pop();
      curr.next = temp;
      curr.next.prev = curr;
    }

    curr = curr.next;
  }

  return head;
};
