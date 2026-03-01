// It employs the Euclidean
// algorithm to iteratively find the GCD.
const gcd1 = (num1, num2) => {
  let dividend, divisor, rem;
  if (num1 > num2) {
    dividend = num1;
    divisor = num2;
  } else {
    dividend = num2;
    divisor = num1;
  }
  while (divisor !== 0) {
    rem = dividend % divisor;
    dividend = divisor;
    divisor = rem;
  }
  return dividend;
};

const gcd2 = (num1, num2) => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));
function gcd(num1, num2) {
  // Base case
  if (num1 == num2) {
    return num1;
  }

  // Recursive case
  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  } else {
    return gcd(num1, num2 - num1);
  }
}
