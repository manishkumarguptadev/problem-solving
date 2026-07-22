function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;

  const result = [];

  let carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    // Add digit from num1 if available
    if (i >= 0) {
      carry += parseInt(num1[i]);
    }

    // Add digit from num2 if available
    if (j >= 0) {
      carry += parseInt(num2[j]);
    }

    // Store the current digit (remainder when divided by 10)
    result.push(carry % 10);

    // Update carry for next iteration
    carry = Math.floor(carry / 10);

    i--;
    j--;
  }

  return result.reverse().join("");
}
