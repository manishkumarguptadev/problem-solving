// // ------- Code to generate our binary tree -------
// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(values) {
//     const queue = [this];
//     let i = 0;
//     while (queue.length > 0) {
//       let current = queue.shift();
//       for (let side of ["left", "right"]) {
//         if (!current[side]) {
//           if (values[i] !== null) {
//             current[side] = new TreeNode(values[i]);
//           }
//           i++;
//           if (i >= values.length) return this;
//         }
//         if (current[side]) queue.push(current[side]);
//       }
//     }
//     return this;
//   }
// }

// const root = new TreeNode();
// root.insert([1, 1, 1, 1, null, null, null, 1, null, null, null, 1, null, null]);

// ------- Code to generate our binary tree -------

// ------- Our Solution -------
// var maxDepth = function (root, currentDepth) {
//   if (!root) {
//     return currentDepth;
//   }

//   currentDepth++;

//   return Math.max(
//     maxDepth(node.right, currentDepth),
//     maxDepth(node.left, currentDepth)
//   );
// };

export const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [];
  queue.push(root);
  let maximumTreeDepth = 0;
  while (queue.length > 0) {
    maximumTreeDepth += 1;
    const levelSize = queue.length;

    for (let i = 1; i <= levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
  return maximumTreeDepth;
};
