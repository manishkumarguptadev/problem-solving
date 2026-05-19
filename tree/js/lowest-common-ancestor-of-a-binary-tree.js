var lowestCommonAncestor = (root, p, q) => {
  if (root === null) {
    return null;
  }

  if (root === p || root === q) {
    return root;
  }

  const left_contains_p_or_q = lowestCommonAncestor(root.left, p, q);
  const right_contains_p_or_q = lowestCommonAncestor(root.right, p, q);

  if (left_contains_p_or_q && right_contains_p_or_q) {
    return root;
  }
  if (left_contains_p_or_q && !right_contains_p_or_q) {
    return left_contains_p_or_q;
  }
  if (right_contains_p_or_q && !left_contains_p_or_q) {
    return right_contains_p_or_q;
  }
  if (!left_contains_p_or_q && !right_contains_p_or_q) return null;
};
function findAncestors(root, k) {
  let result;

  const helper = (root, path) => {
    if (!root) {
      return;
    }

    path.push(root);

    if (root.val === k.val) {
      result = [...path];
      return;
    } else {
      helper(root.left, path);
      helper(root.right, path);
    }

    path.pop();
  };

  helper(root, []);
  return result;
}

var lca = function (root, p, q) {
  const path1 = findAncestors(root, p);
  const path2 = findAncestors(root, q);
  if (!path1.length || !path2.length) {
    return null;
  }
  //last common ancestor
  let i = 0;
  for (; i < path1.length && i < path2.length; i++) {
    if (path1[i] !== path2[i]) {
      break;
    }
  }
  //last equal node -> i-1th
  return path1[i - 1];
};
export { lca };
