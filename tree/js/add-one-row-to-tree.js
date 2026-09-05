var addOneRow = function (root, val, depth) {
  // Special case: if depth is 1, create a new root with the original tree as left child
  if (depth === 1) {
    return new TreeNode(val, root, null);
  }

  /**
   * Performs depth-first search to find the target depth and insert new nodes.
   *
   * @param node - The current node being processed
   * @param currentDepth - The current depth in the tree (1-indexed)
   */
  function dfs(node, currentDepth) {
    if (!node) {
      return;
    }

    // When we reach the parent level of the target depth, insert new nodes
    if (currentDepth === depth - 1) {
      // Create new left node with original left subtree as its left child
      node.left = new TreeNode(val, node.left, null);
      // Create new right node with original right subtree as its right child
      node.right = new TreeNode(val, null, node.right);
      return;
    }

    dfs(node.left, currentDepth + 1);
    dfs(node.right, currentDepth + 1);
  }

  // Start DFS from root at depth 1
  dfs(root, 1);

  return root;
};
