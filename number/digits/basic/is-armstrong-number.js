// A number is an Armstrong Number or Narcissistic number if it is
// equal to the sum of its own digits raised to the power of the number
// of digits.
// An example: 371 = 3^3 + 7^3 + 1^3 = 27 + 343 + 1
// Another: 1634 = 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256
function isArmstrongNumber(num) {
  let count = 0,
    sum = 0,
    copy1,
    copy2;

  copy1 = num;
  copy2 = num;

  // Calculating number of digits
  while (copy1 !== 0) {
    count++;
    copy1 = Math.floor(copy1 / 10);
  }
  // Calculating sum of digits raised to power count
  while (copy2 !== 0) {
    let rem = copy2 % 10;
    sum += Math.pow(rem, count);
    copy2 = Math.floor(copy2 / 10);
  }
  return sum === num;
}
const isArmstrongNumber = (num) => {
  const digits = [...String(num)].map(Number);
  const count = digits.length;
  const sum = digits.reduce((sum, digit) => sum + digit ** count, 0);
  return sum === num;
};
console.log(isArmstrong(153));
