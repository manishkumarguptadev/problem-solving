var rotateRight = function (head, k) {
  if (!head) {
    return null;
  }

  const length = findLength(head);
  k = k % length;

  if (k === 0) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (k > 0) {
    fast = fast.next;
    k--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  let newHead = slow.next;
  slow.next = null;
  fast.next = head;

  return newHead;
};
let findLength = function (head) {
  let count = 0;

  while (head) {
    head = head.next;
    count++;
  }

  return count;
};

let rotateList = function (head, k) {
  if (!head) {
    return null;
  }

  //  find length of the linked list
  let length = findLength(head);

  //  If n (number of rotations required) is bigger than
  //  length of linked list or if n is negative then
  //  we need to adjust total number of rotations needed
  k = k % length;
  if (k < 0) {
    k = k + length;
  }

  if (k === 0) {
    return head;
  }

  //  Find the start of rotated list.
  //  If we have 1, 2, 3, 4, 5 where n = 2,
  //  4 is the start of rotated list.
  let rotationsCount = length - k - 1;
  let temp = head;

  while (rotationsCount > 0) {
    rotationsCount--;
    temp = temp.next;
  }

  //  After the above loop temp will be pointing
  //  to one node prior to rotation point
  let newHead = temp.next;

  //  Set new end of list.
  temp.next = null;

  //  Iterate to the end of list and
  //  link that to original head.
  temp = newHead;
  while (temp.next) {
    temp = temp.next;
  }

  temp.next = head;

  return newHead;
};
