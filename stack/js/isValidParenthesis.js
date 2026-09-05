const parens = {
  "{": "}",
  "[": "]",
  "(": ")",
};
const isValidParentheses = function (s) {
  if (s.length === 0) {
    return true;
  }
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      if (!stack.length) {
        return false;
      }
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (s[i] !== correctBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// const isValid = (s) => {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       stack.push(")");
//     } else if (s[i] === "[") {
//       stack.push("]");
//     } else if (s[i] === "{") {
//       stack.push("}");
//     } else if (stack.length === 0 || stack.pop() !== s[i]) {
//       return false;
//     }
//   }

//   return stack.length === 0;
// };

// function isValidParentheses(s) {
//   var stack = [];
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
//       stack.push(s[i]);
//     } else {
//       if (!stack.length) {
//         return false;
//       }
//       let top = stack.pop();
//       if (
//         (s[i] === "{" && top !== "}") ||
//         (s[i] === "(" && top !== ")") ||
//         (s[i] === "[" && top !== "]")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
console.log(isValidParentheses(")[{}]"));
