var widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  let maxWidth = 0;
  const queue = [[root, 0]];

  while (queue.length > 0) {
    const size = queue.length;
    const levelStart = queue[0][1];
    let first = 0,
      last = 0;

    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift();
      const normalizedIndex = index - levelStart;
      if (i === 0) {
        first = normalizedIndex;
      }
      if (i === size - 1) {
        last = normalizedIndex;
      }

      if (node.left) {
        queue.push([node.left, 2 * normalizedIndex]);
      }
      if (node.right) {
        queue.push([node.right, 2 * normalizedIndex + 1]);
      }
    }

    maxWidth = Math.max(maxWidth, last - first + 1);
  }

  return maxWidth;
};

var widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }

  const q1 = [root];
  const q2 = [0];
  let max = 1;

  while (q1.length > 0) {
    const levelSize = q1.length;
    let left = 0;
    let right = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = q1.shift();
      const index = q2.shift();

      if (i === 0) {
        left = index;
      }

      if (i === levelSize - 1) {
        right = index;
      }

      if (node.left) {
        q1.push(node.left);
        q2.push(index * 2);
      }

      if (node.right) {
        q1.push(node.right);
        q2.push(index * 2 + 1);
      }
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};
