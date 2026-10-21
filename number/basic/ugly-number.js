var isUgly = function (n) {
  // Ugly numbers must be positive
  if (n < 1) {
    return false;
  }

  // Remove all factors of 2
  while (n % 2 === 0) {
    n /= 2;
  }

  // Remove all factors of 3
  while (n % 3 === 0) {
    n /= 3;
  }

  // Remove all factors of 5
  while (n % 5 === 0) {
    n /= 5;
  }

  // If n is reduced to 1, it only had factors of 2, 3, and 5
  return n === 1;
};
