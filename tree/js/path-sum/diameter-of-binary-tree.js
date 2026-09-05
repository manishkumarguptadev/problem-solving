var diameterOfBinaryTree = function (root) {
  let max = 0;

  const helper = (root) => {
    if (root === null) {
      return 0;
    }

    const leftHeight = helper(root.left);
    const rightHeight = helper(root.right);

    max = Math.max(max, leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  };

  helper(root);
  return max;
};
