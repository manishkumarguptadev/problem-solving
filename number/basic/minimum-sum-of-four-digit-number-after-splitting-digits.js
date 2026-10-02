function minimumSum(num) {
  // Extract all 4 digits from the number into an array
  const digits = new Array(4).fill(0);

  // Extract each digit by repeatedly taking modulo 10 and dividing by 10
  for (let i = 0; i < 4; i++) {
    digits[i] = num % 10;
    num = Math.floor(num / 10);
  }

  // Sort digits in ascending order to minimize the sum
  // Place smallest digits in tens place for minimum sum
  digits.sort((a, b) => a - b);

  // Form two numbers: first number = digits[0]*10 + digits[2]
  //                   second number = digits[1]*10 + digits[3]
  // This can be simplified to: 10*(digits[0] + digits[1]) + digits[2] + digits[3]
  return 10 * (digits[0] + digits[1]) + digits[2] + digits[3];
}
