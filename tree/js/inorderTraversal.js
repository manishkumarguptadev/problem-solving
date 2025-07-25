// export const inorderTraversal = (root) => {
//   const result = [];
//   const stack = [];
//   let current = root;

//   while (stack.length || current) {
//     if (current) {
//       stack.push(current);
//       current = current.left;
//     } else {
//       current = stack.pop();
//       result.push(current.val);
//       current = current.right;
//     }
//   }

//   return result;
// };
const inorderTraversal = function (root) {
  const result = [];

  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      result.push(root.val);
      traverse(root.right);
    }
  }

  traverse(root);
  return result;
};
export { inorderTraversal };
