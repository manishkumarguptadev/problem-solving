var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelSum = 0;
    const levelSize = queue.length;

    for (let i = 1; i <= levelSize; i++) {
      const currentNode = queue.shift();

      levelSum += currentNode.val;

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(levelSum / levelSize);
  }

  return result;
};
