var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Node found
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      // Node with two children: find the inorder successor
      let successor = root.right;
      while (successor.left) {
        successor = successor.left;
      }
      root.val = successor.val;
      root.right = deleteNode(root.right, successor.val);
    }
  }

  return root;
};
