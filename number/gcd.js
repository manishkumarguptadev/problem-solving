// It employs the Euclidean
// algorithm to iteratively find the GCD.
const gcd1 = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};
const gcd2 = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));
// console.log(gcd(48, 18));
