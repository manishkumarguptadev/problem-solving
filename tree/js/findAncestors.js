// function findAncestors(root, k) {
//   var result = [];

//   function helper(root) {
//     if (root === null) {
//       return false;
//     }
//     if (root.val === k) {
//       result.push(root.val);
//       return true;
//     }
//     if (helper(root.left) || helper(root.right)) {
//       result.push(root.val);
//       return true;
//     }
//     return false;
//   }

//   helper(root, k);
//   return result.reverse();
// }
function findAncestors(root, k) {
  let result;

  const helper = (root, path) => {
    if (!root) {
      return;
    }

    path.push(root.val);

    if (root.val === k) {
      result = [...path];
      return;
    } else {
      helper(root.left, path);
      helper(root.right, path);
    }

    path.pop();
  };

  helper(root, []);
  return result;
}
export { findAncestors };
