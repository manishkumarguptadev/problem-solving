function multiply(num1, num2) {
  // Early return for zero multiplication
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  const length1 = num1.length;
  const length2 = num2.length;

  // Initialize result array with maximum possible length
  // Product of m-digit and n-digit numbers has at most m+n digits
  const resultArray = Array(length1 + length2).fill(0);

  // Perform digit-by-digit multiplication from right to left
  for (let i = length1 - 1; i >= 0; i--) {
    const digit1 = +num1[i];

    for (let j = length2 - 1; j >= 0; j--) {
      const digit2 = +num2[j];

      // Multiply current digits and add to corresponding position
      // Position i+j+1 stores the product of digits at positions i and j
      resultArray[i + j + 1] += digit1 * digit2;
    }
  }

  // Handle carry propagation from right to left
  for (let i = resultArray.length - 1; i > 0; i--) {
    // Add carry to previous position
    resultArray[i - 1] += Math.floor(resultArray[i] / 10);
    // Keep only the last digit at current position
    resultArray[i] %= 10;
  }

  // Skip leading zeros in the result
  let startIndex = 0;
  while (startIndex < resultArray.length && resultArray[startIndex] === 0) {
    startIndex++;
  }

  return resultArray.slice(startIndex).join("");
}
