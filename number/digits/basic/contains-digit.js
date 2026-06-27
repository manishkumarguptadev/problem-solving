function containsDigit(num, k) {
  while (num > 0) {
    if (num % 10 === k) {
      return true;
    }
    num = Math.floor(num / 10);
  }
  return false;
}
console.log(containsDigit(765, 8));
