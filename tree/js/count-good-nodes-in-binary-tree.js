var goodNodes = function (root) {
  const dfs = (node, maxSoFar) => {
    if (!node) {
      return 0;
    }

    // check if current node is good
    let count = node.val >= maxSoFar ? 1 : 0;

    // update max for children
    const newMax = Math.max(maxSoFar, node.val);

    // count good nodes in left and right subtrees
    count += dfs(node.left, newMax);
    count += dfs(node.right, newMax);

    return count;
  };

  return dfs(root, root.val);
};
