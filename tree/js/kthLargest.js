// function kthLargest(root, k) {
//   var tree = [];
//   inOrder(root, tree);
//   if (tree.length - k >= 0 && k > 0) {
//     return tree[tree.length - k];
//   }
//   return null;
// }

// function inOrder(root, tree) {
//   if (root !== null) {
//     inOrder(root.left, tree);
//     tree.push(root.val);
//     inOrder(root.right, tree);
//   }
// }

const kthLargest = (root, k) => {
  let count = 0;
  let result = 0;
  const reverseInOrder = (node) => {
    if (node) {
      reverseInOrder(node.right);

      count++;
      if (count === k) {
        result = node.val;
        return;
      }
      reverseInOrder(node.left);
    }
  };

  reverseInOrder(root);

  return result;
};

export { kthLargest };
