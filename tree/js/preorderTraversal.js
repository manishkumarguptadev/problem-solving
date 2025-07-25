// export const preorderTraversal = function (root) {
//   if (!root) {
//     return [];
//   }

//   var stack = [root];
//   var result = [];

//   while (stack.length) {
//     var node = stack.pop();
//     result.push(node.val);

//     if (node.right) {
//       stack.push(node.right);
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }

//   return result;
// };
const preorderTraversal = function (root) {
  const result = [];

  function traverse(root) {
    if (root !== null) {
      result.push(root.val);
      traverse(root.left);
      traverse(root.right);
    }
  }

  traverse(root);
  return result;
};
export { preorderTraversal };
