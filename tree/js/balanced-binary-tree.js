var isBalanced = function (root) {
  const getHeight = (root) => {
    if (!root) {
      return 0;
    }

    const leftHeight = getHeight(root.left);
    if (leftHeight === -1) {
      return -1;
    }

    const rightHeight = getHeight(root.right);
    if (rightHeight === -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  };

  return getHeight(root) !== -1;
};
