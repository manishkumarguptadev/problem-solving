var isValidBST = function (root) {
  const validate = (root, min, max) => {
    if (!root) {
      return true;
    }

    if (root.val <= min || root.val >= max) {
      return false;
    }

    return (
      validate(root.left, min, root.val) && validate(root.right, root.val, max)
    );
  };

  return validate(root, -Infinity, Infinity);
};

const dfs = function (node, min, max) {
  if (node.val <= min || node.val >= max) {
    return false;
  }

  if (node.left) {
    if (!dfs(node.left, min, node.val)) {
      return false;
    }
  }

  if (node.right) {
    if (!dfs(node.right, node.val, max)) {
      return false;
    }
  }

  return true;
};

const isValidBST = function (root) {
  if (!root) return true;
  return dfs(root, -Infinity, Infinity);
};

let isValidBST = function (root) {
  let prev;

  function validate(root) {
    if (!root) {
      return true;
    }

    if (validate(root.left) === false) {
      return false;
    }

    if (typeof prev === "undefined") {
      prev = root.val;
    }

    if (prev > root.val) {
      return false;
    }

    prev = root.val;

    if (validate(root.right) === false) {
      return false;
    }

    return true;
  }

  return validate(root);
};
