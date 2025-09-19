function fromPreorderAndInorder(preorder, inorder) {
  function helper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) {
      return null;
    }
    const value = preorder[p1];
    const index = inorder.indexOf(value);
    const count = index - i1;
    const root = new TreeNode(value);

    root.left = helper(p1 + 1, p1 + count, i1, index - 1);
    root.right = helper(p1 + count + 1, p2, index + 1, i2);

    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
}
function fromPreorderAndInorder(preorder, inorder) {
  const inorderIndexesMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    inorderIndexesMap.set(inorder[i], i);
  }
  function helper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) {
      return null;
    }
    const value = preorder[p1];
    const index = inorderIndexesMap.get(value);
    const count = index - i1;
    const root = new TreeNode(value);

    root.left = helper(p1 + 1, p1 + count, i1, index - 1);
    root.right = helper(p1 + count + 1, p2, index + 1, i2);

    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
}
