function maxDigit(num, k) {
  let max = 0;
  while (num > 0) {
    let digit = num % 10;
    if (digit > max) {
      max = digit;
    }
    num = Math.floor(num / 10);
  }
  return max;
}
console.log(maxDigit(173));
