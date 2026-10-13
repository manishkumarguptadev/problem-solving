var pathSum = (root, targetSum) => {
  const result = [];

  const helper = (root, targetSum, path) => {
    if (!root) {
      return;
    }

    path.push(root.val);

    if (!root.left && !root.right && root.val === targetSum) {
      result.push(path.slice());
    }

    helper(root.left, targetSum - root.val, path);
    helper(root.right, targetSum - root.val, path);

    path.pop();
  };
  helper(root, targetSum, []);
  return result;
};
