export function findKDistanceNodes(root, k) {
  var result = [];

  function findNodes(root, k) {
    if (!root) {
      return;
    }
    if (k === 0) {
      result.push(root.val);
    } else {
      findNodes(root.left, k - 1);
      findNodes(root.right, k - 1);
    }
  }

  findNodes(root, k);
  return result;
}
