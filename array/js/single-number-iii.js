var singleNumber = function (nums) {
  // get the XOR of the all the numbers
  let xorOfTwoUniques = 0;
  nums.forEach((num) => {
    xorOfTwoUniques ^= num;
  });

  // get the rightmost bit that is '1'
  let rightmostSetBit = 1;
  while ((rightmostSetBit & xorOfTwoUniques) === 0) {
    rightmostSetBit = rightmostSetBit << 1;
  }

  // Partition numbers into two groups based on the rightmost set bit
  // One group will contain one unique number,
  // the other group will contain the other
  let num1 = 0,
    num2 = 0;
  nums.forEach((num) => {
    if ((num & rightmostSetBit) !== 0) {
      num1 ^= num; // the bit is set
    } else {
      num2 ^= num; // the bit is not set
    }
  });
  return [num1, num2];
};

var singleNumber = function (nums) {
  // get the XOR of the all the numbers
  let xorOfTwoUniques = 0;
  nums.forEach((num) => {
    xorOfTwoUniques ^= num;
  });

  // get the rightmost bit that is '1'
  let rightmostSetBit = xorOfTwoUniques & -xorOfTwoUniques;

  // Partition numbers into two groups based on the rightmost set bit
  // One group will contain one unique number,
  // the other group will contain the other
  let num1 = 0;
  nums.forEach((num) => {
    if ((num & rightmostSetBit) !== 0) {
      num1 ^= num; // the bit is set
    }
  });
  num2 = xorOfTwoUniques ^ num1;

  return [num1, num2];
};

console.log(
  `Single numbers are: ${singleNumber([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])}`
);
console.log(`Single numbers are: ${singleNumber([2, 1, 3, 2])}`);
