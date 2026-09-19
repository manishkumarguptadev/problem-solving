var mergeTwoLists = function (list1, list2) {
  let temp = new ListNode();
  let cur = temp;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }
    cur = cur.next;
  }

  if (list1) {
    cur.next = list1;
  } else if (list2) {
    cur.next = list2;
  }

  return temp.next;
};
