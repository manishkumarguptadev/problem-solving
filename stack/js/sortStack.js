import Stack from "./stack.js";
function sortStack(stack) {
  var tempStack = new Stack();
  var value;
  while (stack.isEmpty() == false) {
    value = stack.pop();
    if (value >= tempStack.getTop()) {
      tempStack.push(value);
    } else {
      while (tempStack.isEmpty() == false) {
        stack.push(tempStack.pop());
      }
      tempStack.push(value);
    }
  }
  while (tempStack.isEmpty() == false) {
    stack.push(tempStack.pop());
  }
  return stack;
}
// function sortStack(stack) {
//   if (!stack.isEmpty()) {
//     var value = stack.pop();
//     sortStack(stack);
//     insert(stack, value);
//   }
//   return stack;
// }

// function insert(stack, value) {
//   if (stack.isEmpty() || value < stack.getTop()) {
//     stack.push(value);
//   } else {
//     var temp = stack.pop();
//     insert(stack, value);
//     stack.push(temp);
//   }
// }
var stack = new Stack();
stack.push(2);
stack.push(97);
stack.push(4);
stack.push(42);
stack.push(12);
stack.push(60);
stack.push(23);
let s = stack.size();
sortStack(stack);
for (var i = 0; i < s; i++) {
  console.log(stack.pop());
}
