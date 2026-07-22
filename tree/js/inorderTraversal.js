var inorderTraversal = (root) => {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [];
  let curr = root;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  }

  return result;
};
var inorderTraversal = function (root) {
  const result = [];

  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      result.push(root.val);
      traverse(root.right);
    }
  }

  traverse(root);
  return result;
};
export { inorderTraversal };
