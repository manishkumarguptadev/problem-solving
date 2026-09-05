function squareIsWhite(coordinates) {
  // Get ASCII value of the column letter (a-h)
  const columnValue = coordinates.charCodeAt(0);

  // Get ASCII value of the row number (1-8)
  const rowValue = coordinates.charCodeAt(1);

  // Sum the ASCII values
  const sum = columnValue + rowValue;

  // Check if sum is odd using bitwise AND with 1
  // If the least significant bit is 1, the number is odd (white square)
  const isOdd = (sum & 1) === 1;

  return isOdd;
}
