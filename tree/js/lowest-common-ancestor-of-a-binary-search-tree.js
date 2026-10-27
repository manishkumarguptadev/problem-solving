const lowestCommonAncestor = (root, p, q) => {
  if (!root) {
    return null;
  }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};
function lowestCommonAncestor(root, p, q) {
  while (root !== null) {
    // If both p and q are greater than root, go to right subtree
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
    }
    // If both p and q are lesser than root, go to left subtree
    else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      // We have found the split point, i.e. the LCA node.
      return root;
    }
  }
  return null;
}
