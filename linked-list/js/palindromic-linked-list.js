function palindromicLinkedList(head) {
  if (!head || !head.next) {
    return true;
  }

  // Step 1. cut the original list to two halves
  let prev = null,
    slow = head,
    fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  let first = head;
  // Step 2. reverse the 2nd half
  let second = fast ? reverse(slow.next) : reverse(slow);
  let copyHeadSecond = second;

  // Step 3. compare the new two halves
  while (first && second) {
    if (first.val !== second.val) {
      break;
    }

    first = first.next;
    second = second.next;
  }

  reverse(copyHeadSecond);

  if (first === null || second === null) {
    return true;
  }

  return false;
}
// Helper function: reverse a list
const reverse = (head) => {
  let prev = null,
    curr = head,
    next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
function palindromicLinkedList(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let first = head;
  let second = prev;

  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }

  return true;
}
