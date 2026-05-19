const sumOfNaturals = (n) => (n * (n + 1)) / 2;

const sumOfSquares = (n) => (n * (n + 1) * (2 * n + 1)) / 6;

const sumOfCubes = (n) => Math.pow((n * (n + 1)) / 2, 2);

const sumOfDigits = (num) =>
  [...String(num)].reduce((sum, digit) => sum + Number(digit), 0);
// console.log(sumOfDigits(12345));

const productOfDigits = (num) =>
  [...String(num)].reduce((product, digit) => product * Number(digit), 1);
// console.log(productOfDigits(12345));

const sumOfDigitsRaisedToPower = (num) => {
  const digits = [...String(num)].map(Number);
  return digits.reduce((sum, digit, index) => sum + digit ** (index + 1), 0);
};
// console.log(sumOfDigitsRaisedToPower(12345));

const sumOfDigitsToPower = (num, power) => sumOfDigitsRaisedToPower(num, power);
// console.log(sumOfDigitsToPower(123, 3));

const sumOfDigitsRaisedToPowerUpToThousand = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (sumOfDigitsRaisedToPower(i) === i) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumOfDigitsRaisedToPowerUpToThousand());

const sumOfDivisors = (num) => sumOfArray(divisors(num));

const sumOfProperDivisors1 = (num) => {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (num / i !== i) {
        sum += num / i;
      }
    }
  }
  return sum - num;
};
const sumOfProperDivisors2 = (num) => sumOfArray(divisors(num)) - num;

const sumOfPrimeFactors = (num) => {
  let factor = 2;
  let sum = 0;
  while (num > 1) {
    if (num % factor === 0) {
      sum += sumOfDigits(factor);
      num /= factor;
    } else {
      factor++;
    }
  }
  return sum;
};
