var searchBST = function (root, val) {
  var curr = root;
  while (curr && curr.val !== val) {
    if (val < curr.val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return curr;
};
