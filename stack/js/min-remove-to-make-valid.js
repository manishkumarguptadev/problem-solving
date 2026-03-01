const string1 = "(ab)cd)";

var minRemoveToMakeValid = function (s) {
  const res = s.split("");
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    }
    if (res[i] === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        res[i] = "";
      }
    }
  }

  while (stack.length) {
    const curIdx = stack.pop();
    res[curIdx] = "";
  }

  return res.join("");
};

console.log(minRemoveToMakeValid(string1));
