var isPalindrome = function (x) {
  var reverse = 0;
  var copy = x;

  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = Math.floor(copy / 10);
  }

  return reverse === x;
};
