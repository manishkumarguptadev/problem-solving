function maximumSwap(num) {
  // Convert number to array of digits (in reverse order)
  const digits = [];
  let tempNum = num;
  while (tempNum !== 0) {
    digits.push(tempNum % 10);
    tempNum = Math.floor(tempNum / 10);
  }

  const digitCount = digits.length;

  // Build array tracking the index of maximum digit from current position to the right
  // maxIndexFromRight[i] stores the index of the largest digit from position i to 0
  const maxIndexFromRight = [];
  for (let i = 0, maxIndex = 0; i < digitCount; i++) {
    if (digits[i] > digits[maxIndex]) {
      maxIndex = i;
    }
    maxIndexFromRight.push(maxIndex);
  }

  // Traverse digits from left to right (most significant to least significant)
  // Find the first position where we can swap with a larger digit from the right
  for (let i = digitCount - 1; i >= 0; i--) {
    if (digits[maxIndexFromRight[i]] !== digits[i]) {
      // Swap current digit with the maximum digit found to its right
      [digits[maxIndexFromRight[i]], digits[i]] = [
        digits[i],
        digits[maxIndexFromRight[i]],
      ];
      break;
    }
  }

  // Reconstruct the number from the digit array
  let result = 0;
  for (let i = digitCount - 1; i >= 0; i--) {
    result = result * 10 + digits[i];
  }

  return result;
}
