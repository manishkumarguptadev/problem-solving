var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let map = new Map();

  let curr = head;
  while (curr !== null) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    const p = map.get(curr);
    p.next = map.get(curr.next) || null;
    p.random = map.get(curr.random) || null;
    curr = curr.next;
  }

  return map.get(head);
};
let createLinkedListWithArbPointers = function (length) {
  let head = createRandomLinkedList(length);
  let v = [];
  let temp = head;
  while (temp) {
    v.push(temp);
    temp = temp.next;
  }

  for (let i = 0; i < v.length; i++) {
    let j = Math.floor(Math.random() * (v.length - 1));
    let p = Math.floor(Math.random() * 100);
    if (p < 75) {
      v[i].arbitrary = v[j];
    }
  }
  return head;
};

let printWithArbPointers = function (head) {
  let printedResult = "";
  while (head) {
    let temp = "";
    printedResult += head.data;
    if (head.arbitrary) {
      temp += head.arbitrary.data;
    }
    printedResult += " (" + temp + ")";
    head = head.next;
    if (head) printedResult += ", ";
  }
  return printedResult;
};

let head = createLinkedListWithArbPointers(5);
console.log("Original list:", printWithArbPointers(head));

let head2 = deepCopyArbitraryPointer(head);
console.log("Deep copied list:", printWithArbPointers(head2));

head = createLinkedListWithArbPointers(3);
console.log("Changed original list:", printWithArbPointers(head));

console.log("Unchanged deep copied list:", printWithArbPointers(head2));
