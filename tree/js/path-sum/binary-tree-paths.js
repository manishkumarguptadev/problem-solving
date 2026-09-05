var binaryTreePaths = (root) => {
  const result = [];

  const helper = (root, path) => {
    if (!root) {
      return;
    }

    path.push(root.val);

    if (!root.left && !root.right) {
      result.push(path.join("->"));
    } else {
      helper(root.left, path);
      helper(root.right, path);
    }

    path.pop();
  };

  helper(root, []);
  return result;
};

export { binaryTreePaths };
