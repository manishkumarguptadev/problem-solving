import {
  createLinkedList,
  display,
  insertAtTail,
  isEmpty,
  insertAtHead,
} from "./insert.js";
// import { removeDuplicates } from "./removeDuplicates.js";

// function union(list1, list2) {
//   if (isEmpty(list1)) {
//     return list2;
//   } else if (isEmpty(list2)) {
//     return list1;
//   }

//   let start = list1;

//   while (start.next) {
//     start = start.next;
//   }

//   start.next = list2;
//   removeDuplicates(list1);

//   return list1;
// }
function union(list1, list2) {
  // Write your code here
  let visited = new Set();
  let start = list1;
  while (start != null) {
    visited.add(start.val);
    start = start.next;
  }
  start = list2;
  while (start != null) {
    if (!visited.has(start.val)) {
      console.log("jj");
      list1 = insertAtHead(list1, start.val);
    }
    start = start.next;
  }
  return list1;
}

let list1 = createLinkedList([10, 20, 80, 60]);
let list2 = createLinkedList([15, 20, 30, 60, 45]);
let unionList = union(list1, list2);

console.log("Union: ", display(unionList));
