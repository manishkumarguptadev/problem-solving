function countFrequencyOfDigit(num, k) {
  let count = 0;

  while (num > 0) {
    if (num % 10 === k) {
      count++;
    }
    num = Math.floor(num / 10);
  }

  return count;
}
console.log(countFrequencyOfDigit(545, 5));
