var convertBST = function (root) {
  let runningSum = 0;

  function dfs(node) {
    if (!node) {
      return;
    }

    dfs(node.right);

    runningSum += node.val;

    node.val = runningSum;

    dfs(node.left);
  }

  dfs(root);

  return root;
};
