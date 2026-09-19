function removeNodes(head) {
  // Extract all values from the linked list into an array
  const nodeValues = [];
  let curr = head;

  while (curr !== null) {
    nodeValues.push(curr.val);
    curr = curr.next;
  }

  // Use a monotonic decreasing stack to keep only nodes
  // that don't have a greater valued node to their right
  const monotonicStack = [];

  for (const value of nodeValues) {
    // Remove all elements from stack that are less than current value
    while (
      monotonicStack.length > 0 &&
      monotonicStack[monotonicStack.length - 1] < value
    ) {
      monotonicStack.pop();
    }
    monotonicStack.push(value);
  }

  // Reconstruct the linked list from the remaining values in the stack
  const dummyHead = new ListNode();
  let tailNode = dummyHead;

  for (const value of monotonicStack) {
    tailNode.next = new ListNode(value);
    tailNode = tailNode.next;
  }

  return dummyHead.next;
}
