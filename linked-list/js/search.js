const search = function (head, value) {
  if (head === null) {
    return false;
  }

  if (head.val === value) {
    return true;
  }

  return search(head.next, value);
};
// const search = function (head, value) {
//   let curr = head;

//   while (curr !== null) {
//     if (curr.val === value) {
//       return true;
//     }
//     curr = curr.next;
//   }
//   return false;
// };
export { search };
