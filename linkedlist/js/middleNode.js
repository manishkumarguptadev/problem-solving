// function middleNode(head) {
//   let midNode = null;
//   let length = 0;
//   let curr = head;
//   while (curr !== null) {
//     curr = curr.next;
//     length++;
//   }
//   let middle = Math.ceil(length / 2);
//   midNode = head;
//   for (let i = 1; i < middle; i++) {
//     midNode = midNode.next;
//   }

//   return midNode.val;
// }
function middleNode(head) {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.val;
}
export { middleNode };
