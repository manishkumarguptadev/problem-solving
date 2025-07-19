// function findKthMax(root, k) {
//   var tree = [];
//   tree = inOrderTraverse(root, tree);
//   console.log(tree);
//   if (tree.length - k >= 0 && k > 0) {
//     return tree[tree.length - k];
//   }
//   return null;
// }
// //Helper recursive function to traverse the tree inorder
// function inOrderTraverse(root, tree) {
//   if (root !== null) {
//     tree = inOrderTraverse(root.left, tree);
//     tree.push(root.val);
//     tree = inOrderTraverse(root.right, tree);
//   }

//   return tree;
// }
var counter;

function findKthMax(root, k) {
  counter = 0;
  return reverseInOrder(root, k).val;
}

function reverseInOrder(root, k) {
  if (root) {
    var right = reverseInOrder(root.right, k);

    if (right) {
      if (counter == k) {
        return right;
      }
    } else {
      counter++;
      if (k == counter) {
        return root;
      }
      return reverseInOrder(root.left, k);
    }
  }
}
