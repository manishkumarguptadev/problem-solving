var addTwoNumbers = function (l1, l2) {
  let result = null;
  let last = null;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;

    let sum = a + b + carry;

    carry = Math.floor(sum / 10);
    let temp = new ListNode(sum % 10);

    if (!result) {
      result = temp;
    } else {
      last.next = temp;
    }

    last = temp;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  return result;
};
