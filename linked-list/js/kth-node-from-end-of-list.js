// function kthFromEnd(head, k) {
//   let kth = null;
//   let length = 0;
//   let curr = head;
//   while (curr !== null) {
//     curr = curr.next;
//     length++;
//   }
//   let kthPos = length - k;
//   if (kthPos < 0 || kthPos > length) {
//     return null;
//   }
//   kth = head;
//   for (let i = 0; i < kthPos; i++) {
//     kth = kth.next;
//   }
//   return kth.val;
// }

function kthFromEnd(head, k) {
  if (!head || k < 1) {
    return null;
  }
  let kth = head;
  let curr = head;
  for (let i = 1; i <= k - 1; i++) {
    curr = curr.next;
    if (curr === null) {
      return null;
    }
  }
  while (curr.next !== null) {
    kth = kth.next;
    curr = curr.next;
  }
  return kth.val;
}

export { kthFromEnd };
