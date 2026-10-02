const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let areIdentical = function (root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return (
      root1.data === root2.data &&
      areIdentical(root1.left, root2.left) &&
      areIdentical(root1.right, root2.right)
    );
  }

  return false;
};
