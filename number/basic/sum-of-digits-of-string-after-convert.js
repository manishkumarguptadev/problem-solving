function getLucky(s, k) {
  // Convert each character to its position in the alphabet (a=1, b=2, ..., z=26)
  // and concatenate all positions into a single string
  let numericString = "";
  for (const char of s) {
    const alphabetPosition = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    numericString += alphabetPosition;
  }

  // Perform k iterations of summing all digits in the string
  for (let iteration = 0; iteration < k; iteration++) {
    let digitSum = 0;

    // Sum all individual digits in the current numeric string
    for (const digit of numericString) {
      digitSum += Number(digit);
    }

    // Convert the sum back to string for the next iteration
    numericString = String(digitSum);
  }

  // Convert the final string result to a number and return
  return Number(numericString);
}
