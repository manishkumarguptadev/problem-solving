const binaryToDecimal = (binary) => parseInt(binary, 2);
// console.log(binaryToDecimal("1101"));

const binaryToDecimalWithoutParseInt = (binary) =>
  binary
    .split("")
    .reverse()
    .reduce((dec, bit, index) => dec + bit * 2 ** index, 0);
// console.log(binaryToDecimalWithoutParseInt("1101"));

const decimalToHex = (num) => num.toString(16);
const decimalToOctal = (num) => num.toString(8);
