class ParenthesesString {
  constructor(str, openCount, closeCount) {
    this.str = str;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }
}

function generate_valid_parentheses(num) {
  let result = [],
    queue = [];
  queue.push(new ParenthesesString("", 0, 0));
  while (queue.length > 0) {
    const ps = queue.shift();
    if (ps.openCount === num && ps.closeCount === num) {
      result.push(ps.str);
    } else {
      if (ps.openCount < num) {
        queue.push(
          new ParenthesesString(`${ps.str}(`, ps.openCount + 1, ps.closeCount)
        );
      }
      if (ps.openCount > ps.closeCount) {
        queue.push(
          new ParenthesesString(`${ps.str})`, ps.openCount, ps.closeCount + 1)
        );
      }
    }
  }
  return result;
}
function generate_valid_parentheses(num) {
  result = [];
  const parenthesesString = Array(2 * num);
  generate_valid_parentheses_rec(num, 0, 0, parenthesesString, 0, result);
  return result;
}

function generate_valid_parentheses_rec(
  num,
  openCount,
  closeCount,
  parenthesesString,
  index,
  result
) {
  // if we've reached the maximum number of open and close parentheses, add to the result
  if (openCount === num && closeCount === num) {
    result.push(parenthesesString.join(""));
  } else {
    if (openCount < num) {
      // if we can add an open parentheses, add it
      parenthesesString[index] = "(";
      generate_valid_parentheses_rec(
        num,
        openCount + 1,
        closeCount,
        parenthesesString,
        index + 1,
        result
      );
    }
    if (openCount > closeCount) {
      // if we can add a close parentheses, add it
      parenthesesString[index] = ")";
      generate_valid_parentheses_rec(
        num,
        openCount,
        closeCount + 1,
        parenthesesString,
        index + 1,
        result
      );
    }
  }
}
var generateParenthesis = function (n) {
  const res = [];

  function dfs(openP, closeP, s) {
    if (openP === closeP && openP + closeP === n * 2) {
      res.push(s);
      return;
    }

    if (openP < n) {
      dfs(openP + 1, closeP, s + "(");
    }

    if (closeP < openP) {
      dfs(openP, closeP + 1, s + ")");
    }
  }

  dfs(0, 0, "");

  return res;
};
