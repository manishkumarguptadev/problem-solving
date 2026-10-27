var rangeSumBST = function (root, low, high) {
  const calculateRangeSum = (curr) => {
    if (!curr) {
      return 0;
    }

    let sum = low <= curr.val && curr.val <= high ? curr.val : 0;

    if (curr.val > low) {
      sum += calculateRangeSum(curr.left);
    }

    if (curr.val < high) {
      sum += calculateRangeSum(curr.right);
    }

    return sum;
  };

  return calculateRangeSum(root);
};
