function alternateDigitSum(n) {
  let sum = 0;

  let signMultiplier = 1;

  while (n > 0) {
    sum += (n % 10) * signMultiplier;

    signMultiplier = -signMultiplier;

    n = Math.floor(n / 10);
  }

  return sum * -signMultiplier;
}
