// function isSubtree(root, subRoot) {
//   const stack = [root];

//   while (stack.length) {
//     const node = stack.pop();

//     if (node.val === subRoot.val && isSameTree(node, subRoot)) {
//       return true;
//     }

//     if (node.left) {
//       stack.push(node.left);
//     }

//     if (node.right) {
//       stack.push(node.right);
//     }
//   }

//   return false;
// }

const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
function isSubtree(root, subRoot) {
  if (root === null) {
    return false;
  }
  if (root.val === subRoot.val) {
    if (isIdentical(root, subRoot)) {
      return true;
    }
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
export { isSubtree };
