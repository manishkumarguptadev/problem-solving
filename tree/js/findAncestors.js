function findAncestors(root, k) {
  var result = [];

  function find(root, k) {
    if (root === null) {
      return false;
    }
    if (root.val === k) {
      return true;
    }
    if (find(root.left, k) || find(root.right, k)) {
      result.push(root.val);
      return true;
    }
    return false;
  }

  find(root, k);
  return result;
}
export { findAncestors };
