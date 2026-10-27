var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [root];

  while (stack.length) {
    const curr = stack.pop();
    result.unshift(curr.val);

    if (curr.left) {
      stack.push(curr.left);
    }
    if (curr.right) {
      stack.push(curr.right);
    }
  }

  return result;
};
var postorderTraversal = function (root) {
  const result = [];

  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      traverse(root.right);
      result.push(root.val);
    }
  }

  traverse(root);
  return result;
};
export { postorderTraversal };
