class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let res = null;
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      if (Math.floor(Math.random() * count) === 0) {
        res = node.val;
      }
      node = node.next;
    }

    return res;
  }
}
