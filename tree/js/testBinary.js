import { insertBinary } from "./insertBinary.js";

import { pathSum } from "./path-sum/ed.js";

let root = insertBinary([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);

// console.log(inorderTraversal(root));
// console.log(preorderTraversal(root));
// console.log(postorderTraversal(root));
// console.log(kthLargest(root, 3));
// console.log(kthSmallest(root, 7));
// console.log(lca(root, root.left, root.left.right).val);
// console.log(binaryTreePaths(root));
// console.log(findAncestors(root, 8));
console.log(pathSum(root, 12));
