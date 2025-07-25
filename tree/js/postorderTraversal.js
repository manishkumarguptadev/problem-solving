// const postorderTraversal = function (root) {
//   if (!root) {
//     return [];
//   }

//   const result = [];
//   const stack = [root];

//   while (stack.length) {
//     const node = stack.pop();

//     result.unshift(node.val);

//     if (node.left) {
//       stack.push(node.left);
//     }
//     if (node.right) {
//       stack.push(node.right);
//     }
//   }

//   return result;
// };
const postorderTraversal = function (root) {
  const result = [];

  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      traverse(root.right);
      result.push(root.val);
    }
  }

  traverse(root);
  return result;
};
export { postorderTraversal };
