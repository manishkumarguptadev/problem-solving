const pathSumR = (root, sum) => {
  if (!root) {
    return 0;
  }
  return (
    pathSumFrom(root, sum) +
    pathSumR(root.left, sum) +
    pathSumR(root.right, sum)
  );
};

const pathSumFrom = (node, sum) => {
  if (!node) {
    return 0;
  }

  return (
    (node.val === sum ? 1 : 0) +
    pathSumFrom(node.left, sum - node.val) +
    pathSumFrom(node.right, sum - node.val)
  );
};

/**
 * Prefix Sum
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const prefixSums = new Map();
  prefixSums.set(0, 1);

  const dfs = (node, currentSum) => {
    if (!node) {
      return 0;
    }

    currentSum += node.val;
    let count = prefixSums.get(currentSum - targetSum) || 0;

    prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
    count += dfs(node.left, currentSum);
    count += dfs(node.right, currentSum);
    prefixSums.set(currentSum, prefixSums.get(currentSum) - 1);

    return count;
  };

  return dfs(root, 0);
};

var pathSum = function (root, targetSum) {
  function helper(root, path) {
    if (root === null) {
      return 0;
    }
    path.push(root.val);

    let pathCount = 0;
    let pathSum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      pathSum += path[i];
      if (pathSum === targetSum) {
        pathCount += 1;
      }
    }
    pathCount += helper(root.left, path) + helper(root.right, path);

    path.pop();
    return pathCount;
  }
  return helper(root, []);
};
