import Stack from "./stack.js";

function nextGreaterElement(arr) {
  let stack = new Stack();
  let result = [];
  var top, next;

  for (var i = arr.length - 1; i >= 0; i--) {
    next = arr[i];
    if (!stack.isEmpty()) {
      top = stack.getTop();
      while (top <= next) {
        if (stack.isEmpty()) {
          break;
        }
        stack.pop();
        top = stack.getTop();
      }
    }

    if (!stack.isEmpty()) {
      result[i] = stack.getTop();
    } else {
      result[i] = -1;
    }

    stack.push(next);
  }

  return result;
}
let arr = [4, 6, 3, 2, 8, 1];
let result = nextGreaterElement(arr);
for (var i = 0; i < result.length; i++) {
  console.log(arr[i] + " --> " + result[i]);
}
