var trimBST = function (root, low, high) {
  if (!root) return null;

  // If current node's value is less than low, we discard left subtree
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }

  // If current node's value is greater than high, we discard right subtree
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  // Otherwise, we recursively trim both subtrees
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};
