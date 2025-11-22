var rightSideView = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let currentLevelRightMostValue;
    const levelSize = queue.length;
    for (let i = 1; i <= levelSize; i++) {
      const currentNode = queue.shift();
      if (i === levelSize) {
        currentLevelRightMostValue = currentNode.val;
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevelRightMostValue);
  }

  return result;
};

// const rightSideView = function (root) {
//   const result = [];

//   const dfs = (node, currentLevel) => {
//     if (!node) return;
//     if (currentLevel >= result.length) {
//       result.push(node.value);
//     }

//     if (node.right) {
//       dfs(node.right, currentLevel + 1);
//     }

//     if (node.left) {
//       dfs(node.left, currentLevel + 1);
//     }
//   };

//   dfs(root, 0);
//   return result;
// };
export { rightSideView };
