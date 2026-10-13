var validDigit = function (n, x) {
  let found = false;
  let lastDigit;

  while (n !== 0) {
    let digit = n % 10;
    lastDigit = digit;

    if (digit === x) {
      found = true;
    }
    n = Math.floor(n / 10);
  }

  return found && lastDigit !== x;
};

console.log(validDigit(100, 0));
