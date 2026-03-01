var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [];
  queue.push(root);
  let minimumTreeDepth = 0;
  while (queue.length > 0) {
    minimumTreeDepth += 1;
    const levelSize = queue.length;

    for (let i = 1; i <= levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode.left === null && currentNode.right === null) {
        return minimumTreeDepth;
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
};

const minDepth = (root) => {
  if (!root) {
    return 0;
  }

  if (!root.left) {
    return 1 + minDepth(root.right);
  }

  if (!root.right) {
    return 1 + minDepth(root.left);
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
