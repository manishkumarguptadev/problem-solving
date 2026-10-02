var bitwiseComplement = function (n) {
  if (n === 0) {
    return 1;
  }

  // count number of total bits in 'num'
  let count = 0;
  let num = n;
  while (num > 0) {
    count++;
    num = num >> 1;
  }

  let allBitsSet = Math.pow(2, count) - 1;

  return n ^ allBitsSet;
};

console.log(`Bitwise complement is: ${bitwiseComplement(8)}`);
console.log(`Bitwise complement is: ${bitwiseComplement(10)}`);
