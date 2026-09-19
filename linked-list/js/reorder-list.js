const reorderList = (head) => {
  if (!head || !head.next) {
    return;
  }

  // Step 1. Cut the original list into two halves
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null; // The cut

  const first = head;
  // Step 2. Reverse the 2nd half
  const second = reverse(slow);

  // Step 3. merge the two halves
  return merge(first, second);
};

const reverse = (head) => {
  let prev = null,
    curr = head,
    next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

const merge = (first, second) => {
  while (first) {
    const temp1 = first.next,
      temp2 = second.next;
    first.next = second;

    if (!temp1) {
      break;
    }

    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
