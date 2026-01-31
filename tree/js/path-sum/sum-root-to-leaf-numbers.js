const sumNumbers = (root) => {
  return helper(root, 0);
};

const helper = (node, sum) => {
  if (!node) {
    return 0;
  }

  sum = 10 * sum + node.val;

  if (!node.left && !node.right) {
    return sum;
  }

  return helper(node.left, sum) + helper(node.right, sum);
};
