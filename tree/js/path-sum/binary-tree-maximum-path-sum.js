var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;

  const helper = (root) => {
    if (!root) {
      return 0;
    }

    const leftSum = Math.max(helper(root.left), 0);
    const rightSum = Math.max(helper(root.right), 0);

    max = Math.max(max, root.val + leftSum + rightSum);

    return root.val + Math.max(leftSum, rightSum);
  };

  helper(root);
  return max;
};
