import { findKDistanceNodes } from "./findKDistanceNodes.js";
import { kthLargest } from "./kthLargest.js";
import { inorderTraversal } from "./inorderTraversal.js";
import { insert } from "./insert.js";
import { postorderTraversal } from "./postorderTraversal.js";
import { preorderTraversal } from "./preorderTraversal.js";
import { kthSmallest } from "./kthSmallest.js";
import { findAncestors } from "./findAncestors.js";
import { findHeight } from "./findHeight.js";
import { rightSideView } from "./rightSideView.js";
import { countNodes } from "./countCBTNodes.js";
import { lca } from "./lowest-common-ancestor-of-a-binary-tree.js";
import { binaryTreePaths } from "./path-sum/binaryTreePaths.js";
import { pathSum } from "./path-sum/ed.js";

let root = null;
root = insert(root, 6);
[4, 9, 2, 5, 8, 12].forEach((val) => {
  insert(root, val);
});

// console.log(inorderTraversal(root));
// console.log(preorderTraversal(root));
// console.log(postorderTraversal(root));
// console.log(kthLargest(root, 3));
// console.log(kthSmallest(root, 7));
// console.log(lca(root, root.left, root.left.right).val);
// console.log(binaryTreePaths(root));
// console.log(findAncestors(root, 8));
console.log(pathSum(root, 12));
