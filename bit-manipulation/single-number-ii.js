function singleNumber(nums) {
  let result = 0;

  // Process each bit position (0 to 31 for 32-bit integers)
  for (let bitPosition = 0; bitPosition < 32; bitPosition++) {
    // Count how many numbers have 1 at the current bit position
    const bitCount = nums.reduce((accumulator, currentNumber) => {
      // Extract the bit at current position using right shift and AND with 1
      const bitValue = (currentNumber >> bitPosition) & 1;
      return accumulator + bitValue;
    }, 0);

    // If count % 3 is 1, the single number has 1 at this bit position
    // Set the corresponding bit in result using OR and left shift
    result |= bitCount % 3 << bitPosition;
  }

  return result;
}
