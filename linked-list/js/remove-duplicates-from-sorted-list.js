var deleteDuplicates = function (head) {
  let prev = head;
  let curr = head;

  while (curr) {
    while (curr && curr.val === prev.val) {
      curr = curr.next;
    }
    prev.next = curr;
    prev = curr;
  }

  return head;
};

var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
