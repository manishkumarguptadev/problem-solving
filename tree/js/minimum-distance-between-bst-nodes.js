var minDiffInBST = function (root) {
  const stack = [];
  let curr = root;
  let prev = null;
  let min = Infinity;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();

      if (prev) {
        min = Math.min(min, Math.abs(curr.val - prev.val));
      }
      prev = curr;

      curr = curr.right;
    }
  }

  return min;
};

var minDiffInBST = function (root) {
  let prev = null;
  let min = Infinity;

  const inorder = (curr) => {
    if (!curr) {
      return;
    }

    inorder(curr.left);

    if (prev) {
      min = Math.min(min, Math.abs(curr.val - prev.val));
    }
    prev = curr;

    inorder(curr.right);
  };

  inorder(root);
  return min;
};
