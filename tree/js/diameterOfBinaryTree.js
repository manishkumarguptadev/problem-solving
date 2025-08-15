var diameterOfBinaryTree = function (root) {
  let max = 0;

  const helper = (root) => {
    if (root === null) {
      return 0;
    }

    const left = helper(root.left);
    const right = helper(root.right);

    max = Math.max(max, left + right);

    return 1 + Math.max(left, right);
  };

  helper(root);
  return max;
};
