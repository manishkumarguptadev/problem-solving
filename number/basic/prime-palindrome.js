function isPrime(n) {
  s = Math.sqrt(n);
  for (let i = 2; i <= s; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
}

function isPalindrome(x) {
  let original = x;
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed === original;
}

var primePalindrome = function (n) {
  while (true) {
    if (isPalindrome(n) && isPrime(n)) {
      return n;
    }
    // If n is between 10^7 and 10^8, skip ahead to 10^8
    // because there are no 8-digit palindromes that are prime
    if (n > 1e7 && n < 1e8) {
      n = 1e8;
    }
    n++;
  }
};
