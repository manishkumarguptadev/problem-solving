function decimalToBinary(num) {
  let bin = 0,
    pow = 0;
  while (num !== 0) {
    let rem = num % 2;
    bin = bin + rem * Math.pow(10, pow);
    num = Math.floor(num / 2);
    pow++;
  }
  return bin;
}
function binaryToDecimal(num) {
  let dec = 0,
    pow = 0;
  while (num !== 0) {
    let rem = num % 10;
    dec = dec + rem * Math.pow(2, pow);
    num = Math.floor(num / 10);
    pow++;
  }
  return dec;
}

console.log(binaryToDecimal(decimalToBinary(11)));
