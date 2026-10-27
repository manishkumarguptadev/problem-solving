function modulo(a, b) {
  // Handle negative divisors
  if (b <= 0) {
    throw new Error("Divisor must be greater than zero.");
  }

  // Handle negative dividends
  let result = a;

  // Use a loop to subtract the divisor from the dividend until the result is less than the divisor
  while (result >= b) {
    result -= b;
  }

  // If the result is negative (in case of negative a), add b to get the correct positive remainder
  while (result < 0) {
    result += b;
  }

  return result;
}
function modulo(num1, num2) {
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  if (num1 === 0) {
    return 0;
  }

  var remainderIsPositive = num1 >= 0;

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 -= num2;
  }

  return remainderIsPositive ? num1 : 0 - num1;
}
// Returns a mod n (a,n both integers)
function mod(a, n) {
  return a - Math.floor(a / n);
}
