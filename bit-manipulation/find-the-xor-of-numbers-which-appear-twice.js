var duplicateNumbersXOR = function (nums) {
  const frequencyCounter = Array(51).fill(0);

  let xorResult = 0;

  for (const currentNumber of nums) {
    frequencyCounter[currentNumber]++;

    if (frequencyCounter[currentNumber] === 2) {
      xorResult ^= currentNumber;
    }
  }

  return xorResult;
};
