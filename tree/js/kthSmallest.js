const kthSmallest = (root, k) => {
  let count = 0;
  let result = 0;
  const inorder = (node) => {
    if (node) {
      inorder(node.left);

      count++;
      if (count === k) {
        result = node.val;
        return;
      }

      inorder(node.right);
    }
  };

  inorder(root);

  return result;
};

export { kthSmallest };
