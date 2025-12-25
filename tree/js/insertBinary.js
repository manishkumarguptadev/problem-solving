export class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

export const insertBinary = function (values) {
  const root = new Node(values[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0) {
    let current = queue.shift();
    for (let side of ["left", "right"]) {
      if (!current[side]) {
        if (values[i] !== null) {
          current[side] = new Node(values[i]);
        }
        i++;
        if (i >= values.length) return root;
      }
      if (current[side]) {
        queue.push(current[side]);
      }
    }
  }
  return root;
};
