function breadthFirstTraversal(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}
