import { createLinkedList, display } from "./insert.js";

// export let removeDuplicates = function (head) {
//   if (!head) {
//     return head;
//   }

//   let visited = new visited();
//   visited.add(head.val);
//   let curr = head;

//   while (curr.next) {
//     if (visited.has(curr.next.val)) {
//       curr.next = curr.next.next;
//     } else {
//       visited.add(curr.next.val);
//       curr = curr.next;
//     }
//   }

//   return head;
// };

function removeDuplicates(head) {
  if (!head) {
    return head;
  }

  let curr = head;
  let prev = null;
  let visited = new Set();

  while (curr !== null) {
    if (visited.has(curr.val)) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      visited.add(curr.val);
      prev = curr;
      curr = curr.next;
    }
  }

  return head;
}

let headWithDup = createLinkedList([4, 7, 4, 9, 7, 11, 4]);

console.log("Original: ", display(headWithDup));

headWithDup = removeDuplicates(headWithDup);
console.log("After removing duplicates: ", display(headWithDup));
