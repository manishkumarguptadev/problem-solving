class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_unique_trees(n) {
  if (n <= 0) {
    return [];
  }
  return findUnique_trees_recursive(1, n);
}

function findUnique_trees_recursive(start, end) {
  const result = [];
  // base condition, return 'null' for an empty sub-tree
  // consider n = 1, in this case we will have start = end = 1,
  // this means we should have only one tree
  // we will have two recursive calls, findUniqueTreesRecursive(1, 0) & (2, 1)
  // both of these should return 'null' for the left and the right child
  if (start > end) {
    result.push(null);
    return result;
  }

  for (let i = start; i < end + 1; i++) {
    // making 'i' the root of the tree
    const leftSubtrees = findUnique_trees_recursive(start, i - 1);
    const rightSubtrees = findUnique_trees_recursive(i + 1, end);
    for (let p = 0; p < leftSubtrees.length; p++) {
      for (let q = 0; q < rightSubtrees.length; q++) {
        const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q]);
        result.push(root);
      }
    }
  }

  return result;
}
const generateTrees = (n) => {
  if (n <= 0) {
    return [];
  }

  const helper = (lo, hi) => {
    if (lo > hi) {
      return [null];
    }

    if (lo === hi) {
      return [new TreeNode(lo)];
    }

    const result = [];

    for (let k = lo; k <= hi; k++) {
      const leftBSTs = helper(lo, k - 1);
      const rightBSTs = helper(k + 1, hi);

      for (let i = 0; i < leftBSTs.length; i++) {
        for (let j = 0; j < rightBSTs.length; j++) {
          const treeNode = new TreeNode(k);
          treeNode.left = leftBSTs[i];
          treeNode.right = rightBSTs[j];
          result.push(treeNode);
        }
      }
    }

    return result;
  };

  return helper(1, n);
};
