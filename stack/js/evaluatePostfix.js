function evaluatePostfix(exp) {
  let myStack = [];
  var op1, op2;
  for (var i = 0; i < exp.length; i++) {
    if (!isNaN(parseInt(exp[i]))) {
      myStack.push(parseInt(exp[i]));
    } else {
      op1 = myStack.pop();
      op2 = myStack.pop();
      if (exp[i] === "+") {
        myStack.push(op1 + op2);
      } else if (exp[i] === "-") {
        myStack.push(op2 - op1);
      } else if (exp[i] === "*") {
        myStack.push(op1 * op2);
      } else if (exp[i] === "/") {
        myStack.push(op2 / op1);
      }
    }
  }

  return myStack.pop();
}
console.log("Result: " + evaluatePostfix("921*-8-4+"));
