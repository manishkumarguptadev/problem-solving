const kthSmallest = (root, k) => {
  const inorder = (node) => {
    if (node) {
      inorder(node.left);
      count++;
      if (count === k) {
        result = node.val;
        return;
      }

      inorder(node.right);
    }
  };

  let count = 0;
  let result = 0;

  inorder(root);

  return result;
};
function kthSmallest(root, k) {
  function inOrder(node) {
    if (node === null) {
      return;
    }

    inOrder(node.left);
    ioList.push(node.val);
    inOrder(node.right);
  }
  const ioList = [];
  inOrder(root);
  return ioList[k - 1];
}

const kthSmallest = (root, k) => {
  const inorder = (node) => {
    if (node) {
      inorder(node.left);
      count--;
      if (count === 0) {
        result = node.val;
        return;
      }

      inorder(node.right);
    }
  };

  let count = k;
  let result = 0;

  inorder(root);

  return result;
};
