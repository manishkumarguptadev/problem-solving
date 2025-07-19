export const preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  var stack = [root];
  var result = [];

  while (stack.length) {
    var node = stack.pop();
    result.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};
function DFSPreOrder() {
  let results = [];
  function traverse(currentNode) {
    results.push(currentNode.value);
    if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
  }
  traverse(this.root);
  return results;
}
