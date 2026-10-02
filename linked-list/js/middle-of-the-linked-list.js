function middleNode(head) {
  let length = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    length++;
  }

  let middle = length % 2 === 0 ? length / 2 : Math.ceil(length / 2);
  let midNode = head;
  for (let i = 1; i < middle; i++) {
    midNode = midNode.next;
  }

  return midNode;
}
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

  return slow;
}
export { middleNode };
