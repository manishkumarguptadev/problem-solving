function findMode(root) {
  previousNode = null;
  currentCount = 0;
  maxCount = 0;
  modes = [];

  inorderTraversal(root);

  return modes;
}

function inorderTraversal(node) {
  if (!node) {
    return;
  }

  inorderTraversal(node.left);

  // Process current node
  // Check if current value is same as previous (consecutive in sorted order)
  if (previousNode !== null && previousNode.val === node.val) {
    // Same value as previous, increment count
    currentCount = currentCount + 1;
  } else {
    // Different value or first node, reset count to 1
    currentCount = 1;
  }

  // Update modes based on current count
  if (currentCount > maxCount) {
    // Found a new maximum frequency
    // Clear previous modes and add current value as new mode
    modes = [];
    modes.push(node.val);
    maxCount = currentCount;
  } else if (currentCount === maxCount) {
    // Current value has same frequency as maximum
    // Add to existing modes (multiple modes with same frequency)
    modes.push(node.val);
  }

  previousNode = node;

  inorderTraversal(node.right);
}
