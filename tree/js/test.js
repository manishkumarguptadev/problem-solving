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
// console.log(findAncestors(root, 8));
console.log(rightSideView(root));
