function fractionToDecimal(numerator, denominator) {
  // Handle zero numerator case
  if (numerator === 0) {
    return "0";
  }

  // Result string builder array
  const result = [];

  // Check if result should be negative (XOR of signs)
  const isNegative = numerator > 0 !== denominator > 0;
  if (isNegative) {
    result.push("-");
  }

  // Work with absolute values to simplify calculation
  let dividend = Math.abs(numerator);
  let divisor = Math.abs(denominator);

  // Add the integer part of the division
  result.push(Math.floor(dividend / divisor).toString());

  // Calculate remainder
  dividend %= divisor;

  // If no remainder, return the integer result
  if (dividend === 0) {
    return result.join("");
  }

  // Add decimal point for fractional part
  result.push(".");

  // Map to track remainders and their positions for detecting repeating patterns
  const remainderToPosition = new Map();

  // Process the decimal part
  while (dividend !== 0) {
    // Store current remainder and its position in result array
    remainderToPosition.set(dividend, result.length);

    // Multiply remainder by 10 for next decimal digit
    dividend *= 10;

    // Add next decimal digit to result
    result.push(Math.floor(dividend / divisor).toString());

    // Calculate new remainder
    dividend %= divisor;

    // Check if we've seen this remainder before (indicates repeating pattern)
    if (remainderToPosition.has(dividend)) {
      // Insert opening parenthesis at the start of repeating sequence
      const repeatStartPosition = remainderToPosition.get(dividend);
      result.splice(repeatStartPosition, 0, "(");

      // Add closing parenthesis at the end
      result.push(")");
      break;
    }
  }

  // Join all parts and return the final decimal string
  return result.join("");
}
