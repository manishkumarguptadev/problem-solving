function swapNodes(head, k) {
  // Initialize two pointers starting at the head
  let fast = head;
  let slow = head;

  // Move fast to the kth node from the beginning
  let remainingSteps = k - 1;
  while (remainingSteps > 0) {
    fast = fast.next;
    remainingSteps--;
  }

  // Store reference to the kth node from the beginning
  const kthFromBeginning = fast;

  // Move fast to the end while moving slow
  // This positions slow at the kth node from the end
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Store reference to the kth node from the end
  const kthFromEnd = slow;

  // Swap the values of the two nodes
  const temp = kthFromBeginning.val;
  kthFromBeginning.val = kthFromEnd.val;
  kthFromEnd.val = temp;

  return head;
}
