var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [];
  queue.push(root);

  let leftToRight = true;
  while (queue.length > 0) {
    const currentLevelValues = [];
    const levelSize = queue.length;

    for (let i = 1; i <= levelSize; i++) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    if (leftToRight) {
      result.push(currentLevelValues);
    } else {
      result.push(currentLevelValues.reverse());
    }
    leftToRight = !leftToRight;
  }

  return result;
};
