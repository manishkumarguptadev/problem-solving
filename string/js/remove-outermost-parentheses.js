var removeOuterParentheses = function (s) {
  let result = [];
  let count = 0;

  for (let ch of s) {
    if (ch === "(") {
      if (count > 0) {
        result.push(ch);
      }
      count++;
    } else {
      count--;
      if (count > 0) {
        result.push(ch);
      }
    }
  }
  return result.join("");
};
