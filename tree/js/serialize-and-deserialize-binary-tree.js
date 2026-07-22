var serialize = function (root) {
  if (!root) {
    return null;
  }

  const data = [];

  // Level-order traversal
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      data.push(node.val);

      queue.push(node.left);
      queue.push(node.right);
    } else {
      data.push(null);
    }
  }

  // Clean up the trailing nulls in data
  while (data.length > 0 && data[data.length - 1] === null) {
    data.pop();
  }

  return JSON.stringify(data);
};

var deserialize = function (data) {
  // Sanity checks
  try {
    data = JSON.parse(data);
  } catch (e) {
    return null;
  }
  if (!(data instanceof Array) || data.length === 0) {
    return null;
  }

  const root = new TreeNode(data.shift());
  const queue = [root];

  while (data.length > 0) {
    const node = queue.shift();

    // Left node
    let val = data.shift();
    if (typeof val !== "undefined" && val !== null) {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }

    // Right node
    val = data.shift();
    if (typeof val !== "undefined" && val !== null) {
      node.right = new TreeNode(val);
      queue.push(node.right);
    }
  }

  return root;
};
var serialize = function (root) {
  if (!root) {
    return "";
  }
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push("N");
    }
  }
  return result.join(",");
};

// Decodes your encoded data to tree.
var deserialize = function (data) {
  if (!data) {
    return null;
  }
  let values = data.split(",");
  let root = new TreeNode(parseInt(values[0]));
  let queue = [root];
  let i = 1;
  while (queue.length > 0) {
    let node = queue.shift();
    if (values[i] !== "N") {
      node.left = new TreeNode(parseInt(values[i]));
      queue.push(node.left);
    }
    i++;
    if (values[i] !== "N") {
      node.right = new TreeNode(parseInt(values[i]));
      queue.push(node.right);
    }
    i++;
  }
  return root;
};
