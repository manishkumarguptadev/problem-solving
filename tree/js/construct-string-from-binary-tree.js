var tree2str = function (root) {
  function dfs(node) {
    if (!node) {
      return "";
    }
    if (node.right) {
      return `${node.val}(${dfs(node.left)})(${dfs(node.right)})`;
    }
    if (node.left) {
      return `${node.val}(${dfs(node.left)})`;
    }
    return `${node.val}`;
  }

  return dfs(root);
};
