// export const levelorder = function (root) {
//   if (!root) {
//     return [];
//   }

//   const result = [];
//   let levelOutput = [];

//   const queue = [root, null];

//   while (queue.length > 0) {
//     const node = queue.shift();

//     if (node) {
//       levelOutput.push(node.val);

//       if (node.left) {
//         queue.push(node.left);
//       }

//       if (node.right) {
//         queue.push(node.right);
//       }
//     } else {
//       result.push(levelOutput);

//       if (queue.length > 0) {
//         levelOutput = [];
//         queue.push(null);
//       }
//     }
//   }

//   return result;
// };
// let levelOrderTraversal = function (root) {
//   if (!root) {
//     return;
//   }

//   let result = "";
//   let levelOutput = "";

//   let queue = [root, null];

//   while (queue.length !== 0) {
//     let node = queue.shift();

//     if (node) {
//       levelOutput += node.val + " ";

//       if (node.left) {
//         queue.push(node.left);
//       }

//       if (node.right) {
//         queue.push(node.right);
//       }
//     } else {
//       result += levelOutput;
//       console.log(levelOutput);

//       if (queue.length !== 0) {
//         levelOutput = "";
//         queue.push(null);
//       }
//     }
//   }
//   return result;
// };
const levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const currentLevelValues = [];
    const levelSize = queue.length;

    for (let i = 1; i <= levelSize; i++) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevelValues);
  }

  return result;
};

export { levelOrder };
