var connect = function (root) {
  if (!root) {
    return null;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    let currentNode = null,
      previousNode = null;
    for (let i = 1; i <= levelSize; i++) {
      currentNode = queue.shift();
      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  return root;
};
