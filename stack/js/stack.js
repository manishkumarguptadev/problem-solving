export default class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  getTop() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
// class Stack {
//   constructor() {
//     this.items = [];
//     this.top = null;
//   }

//   getTop() {
//     if (this.items.length == 0) return null;
//     return this.top;
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   push(element) {
//     this.items.push(element);
//     this.top = element;
//   }

//   pop() {
//     if (this.items.length != 0) {
//       if (this.items.length == 1) {
//         this.top = null;
//         return this.items.pop();
//       } else {
//         this.top = this.items[this.items.length - 2];
//         return this.items.pop();
//       }
//     } else return null;
//   }
// }
