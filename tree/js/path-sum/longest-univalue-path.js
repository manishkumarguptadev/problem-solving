var longestUnivaluePath = function (root) {
  const helper = (node) => {
    if (!node) {
      return 0;
    }

    let left = helper(node.left);
    let right = helper(node.right);

    let leftPath = 0,
      rightPath = 0;

    if (node.left && node.left.val === node.val) {
      leftPath = left + 1;
    }
    if (node.right && node.right.val === node.val) {
      rightPath = right + 1;
    }

    max = Math.max(max, leftPath + rightPath);

    return Math.max(leftPath, rightPath);
  };

  let max = 0;
  helper(root);
  return max;
};
