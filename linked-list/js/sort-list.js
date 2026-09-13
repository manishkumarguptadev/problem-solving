function sortList(head) {
  // Base case: empty list or single node
  if (head === null || head.next === null) {
    return head;
  }

  // Find the middle of the list
  let slow = head;
  let fast = head.next;

  // Move pointers until fast reaches the end
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split the list into two halves
  // First half: from head to slow
  // Second half: from slow.next to end
  let firstHalf = head;
  let secondHalf = slow.next;

  // Disconnect the two halves
  slow.next = null;

  // Recursively sort both halves
  firstHalf = sortList(firstHalf);
  secondHalf = sortList(secondHalf);

  // Merge the two sorted halves
  const dummyHead = new ListNode();
  let currentTail = dummyHead;

  // Merge nodes by comparing values from both lists
  while (firstHalf !== null && secondHalf !== null) {
    if (firstHalf.val <= secondHalf.val) {
      currentTail.next = firstHalf;
      firstHalf = firstHalf.next;
    } else {
      currentTail.next = secondHalf;
      secondHalf = secondHalf.next;
    }
    currentTail = currentTail.next;
  }

  // Attach any remaining nodes from either list
  currentTail.next = firstHalf || secondHalf;

  return dummyHead.next;
}
