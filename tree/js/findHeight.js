function findHeight(root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 0;
  }
  var left = findHeight(root.left);
  var right = findHeight(root.right);
  // if (left > right) {
  //   return left + 1;
  // } else {
  //   return right + 1;
  // }
  return 1 + Math.max(left, right);
}

// for CBT or PBT
// const findHeight = function (root) {
//   let height = 0;
//   while (root.left !== null) {
//     height++;
//     root = root.left;
//   }

//   return height;
// };

export { findHeight };
