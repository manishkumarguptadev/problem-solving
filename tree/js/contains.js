const contains = function (root, value) {
  if (root === null) {
    return false;
  }
  let curr = root;
  while (curr !== null) {
    if (value < curr.val) {
      curr = curr.left;
    } else if (value > curr.val) {
      curr = curr.right;
    } else {
      return true;
    }
  }
  return false;
};
