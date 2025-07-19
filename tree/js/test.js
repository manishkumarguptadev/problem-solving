import { findKDistanceNodes } from "./findKDistanceNodes.js";
import { inorderTraversal } from "./inorderTraversal.js";
import { insert } from "./insert.js";
import { postorderTraversal } from "./postorderTraversal.js";
import { preorderTraversal } from "./preorderTraversal.js";

let root = null;
root = insert(root, 6);
[4, 9, 2, 5, 8, 12].forEach((val) => {
  insert(root, val);
});

// console.log(inorderTraversal(root));
// console.log(preorderTraversal(root));
// console.log(postorderTraversal(root));
console.log(findKDistanceNodes(root, 2));
