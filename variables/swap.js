const swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
};
const swap2 = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
};
