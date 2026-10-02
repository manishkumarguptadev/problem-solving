function findHeight(root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 0;
  }
  var lh = findHeight(root.left);
  var rh = findHeight(root.right);

  return 1 + Math.max(lh, rh);
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
