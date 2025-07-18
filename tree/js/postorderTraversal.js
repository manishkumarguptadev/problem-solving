export const postorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    result.unshift(node.val);

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return result;
};
function DFSPostOrder() {
  let results = [];
  function traverse(currentNode) {
    if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
    results.push(currentNode.value);
  }
  traverse(this.root);
  return results;
}
