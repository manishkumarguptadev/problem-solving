function lastDigit(num) {
  return num % 10;
}

function firstDigit(num) {
  let copy = num;
  let count = 0;
  while (num != 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return Math.floor(copy / Math.pow(10, count - 1));
}

console.log(lastDigit(123));
console.log(firstDigit(123));
