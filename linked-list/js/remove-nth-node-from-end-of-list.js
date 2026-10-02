var removeNthFromEnd = function (head, n) {
  if (!head || n < 1) {
    return null;
  }

  let nth = head;
  let curr = head;
  for (let i = 1; i <= n; i++) {
    curr = curr.next;
    if (curr === null) {
      return head.next;
    }
  }

  while (curr.next !== null) {
    nth = nth.next;
    curr = curr.next;
  }

  nth.next = nth.next.next;

  return head;
};
export { removeNthFromEnd };
