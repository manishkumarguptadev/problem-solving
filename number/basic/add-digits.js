var addDigits = function (num) {
  if (num === 0) {
    return 0;
  }

  return ((num - 1) % 9) + 1;
};

var addDigits = function (num) {
  if (num < 10) return num;
  return addDigits(add(num));
};

function add(num) {
  if (num < 10) return num;
  return (num % 10) + add(Math.floor(num / 10));
}
