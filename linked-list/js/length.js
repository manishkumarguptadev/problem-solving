function length(head) {
  let length = 0;
  let curr = head;
  while (curr !== null) {
    length = length + 1;
    curr = curr.next;
  }
  return length;
}
export { length };
