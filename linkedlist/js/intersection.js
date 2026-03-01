import { createLinkedList, display, insertAtHead } from "./insert.js";
import { removeDuplicates } from "./removeDuplicates.js";

// function intersection(list1, list2) {
//   let result;

//   let t1 = list1;
//   let t2 = list2;

//   while (t1 !== null) {
//     while (t2 !== null) {
//       if (t1.val === t2.val) {
//         result = insertAtHead(result, t1.val);
//       }
//       t2 = t2.next;
//     }
//     t2 = list2;
//     t1 = t1.next;
//   }

//   removeDuplicates(result);
//   return result;
// }
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let ptrA = headA;
  let ptrB = headB;

  while (ptrA !== ptrB) {
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }

  return ptrA;
}

let list1 = createLinkedList([10, 20, 80, 60]);
let list2 = createLinkedList([15, 20, 30, 60, 45]);
let intersectionList = intersection(list1, list2);
getIntersectionNode;
console.log("Intersection: ", display(intersectionList));
