function max(a, b, c) {
  return a > b && a > c ? a : b > c ? b : c;
}
function min(a, b, c) {
  return a < b && a < c ? a : b < c ? b : c;
}
console.log(larger(177, 52, 3));
