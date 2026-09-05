function subtreeWithAllDeepest(root) {
  const findDeepestSubtree = (node) => {
    // Base case: if node is null, return null with depth 0
    if (!node) {
      return [null, 0];
    }

    // Recursively process left subtree
    const [leftSubtree, leftDepth] = findDeepestSubtree(node.left);

    // Recursively process right subtree
    const [rightSubtree, rightDepth] = findDeepestSubtree(node.right);

    // If left subtree has deeper nodes, return the left subtree result
    if (leftDepth > rightDepth) {
      return [leftSubtree, leftDepth + 1];
    }

    // If right subtree has deeper nodes, return the right subtree result
    if (leftDepth < rightDepth) {
      return [rightSubtree, rightDepth + 1];
    }

    // If both subtrees have the same depth, current node is the LCA of all deepest nodes
    return [node, leftDepth + 1];
  };

  // Return the subtree root from the DFS result
  return findDeepestSubtree(root)[0];
}
