class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export function isEmpty(head) {
  return head === null;
}
export let insertAtHead = function (head, data) {
  let newNode = new ListNode(data);
  if (!head) {
    return newNode;
  }

  newNode.next = head;
  return newNode;
};

export let insertAtTail = function (head, data) {
  let newNode = new ListNode(data);
  if (!head) {
    return newNode;
  }

  let temp = head;

  while (temp.next) {
    temp = temp.next;
  }

  temp.next = newNode;
  return head;
};

let createRandomLinkedList = function (length) {
  let listHead = null;
  for (let i = 0; i < length; i++) {
    listHead = insertAtHead(listHead, Math.floor(Math.random() * 100 + 1));
  }
  return listHead;
};

export let createLinkedList = function (lst) {
  let listHead = null;
  lst.reverse();
  for (let x = 0; x < lst.length; x++) {
    listHead = insertAtHead(listHead, lst[x]);
  }
  return listHead;
};

export let display = function (head) {
  let temp = head;
  let s = "";
  while (temp) {
    s += temp.val;
    temp = temp.next;
    if (temp) {
      s += ", ";
    }
  }
  return s;
};

// export let display = function (head) {
//   let temp = head;
//   while (temp !== null) {
//     process.stdout.write(`${temp.value}, `);
//     temp = temp.next;
//   }
//   console.log();
// };
