function rob(root) {
  const dfs = (node) => {
    // Base case: empty node contributes nothing
    if (!node) {
      return [0, 0];
    }

    const [leftRobbed, leftNotRobbed] = dfs(node.left);
    const [rightRobbed, rightNotRobbed] = dfs(node.right);

    // If we rob current node, we cannot rob its children
    const robCurrent = node.val + leftNotRobbed + rightNotRobbed;

    // If we don't rob current node, we can choose to rob or not rob its children
    const skipCurrent =
      Math.max(leftRobbed, leftNotRobbed) +
      Math.max(rightRobbed, rightNotRobbed);

    return [robCurrent, skipCurrent];
  };

  // Return the maximum of robbing or not robbing the root
  const [robRoot, skipRoot] = dfs(root);
  return Math.max(robRoot, skipRoot);
}
