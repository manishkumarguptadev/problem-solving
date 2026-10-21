var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  var stack = [root];
  var result = [];

  while (stack.length) {
    var curr = stack.pop();
    result.push(curr.val);

    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
  }

  return result;
};
var preorderTraversal = function (root) {
  const result = [];

  function traverse(root) {
    if (root !== null) {
      result.push(root.val);
      traverse(root.left);
      traverse(root.right);
    }
  }

  traverse(root);
  return result;
};
export { preorderTraversal };
