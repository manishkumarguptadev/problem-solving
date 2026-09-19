var divide = function (dividend, divisor) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX;
  }

  const isPositiveResult = dividend > 0 === divisor > 0;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let quotient = 0;
  while (dividend >= divisor) {
    let currentQuotient = 1;
    let currentDivisor = divisor;
    // Double the divisor until it exceeds half of dividend
    while (dividend >> 1 >= currentDivisor) {
      currentDivisor = currentDivisor << 1;
      currentQuotient = currentQuotient << 1;
    }

    quotient += currentQuotient;
    dividend -= currentDivisor;
  }

  return isPositiveResult ? quotient : -quotient;
};
