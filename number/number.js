const exponential = (base, exponent) => base ** exponent;
const power = (base, exponent) => Math.pow(base, exponent);
// console.log(power(2, 5));

const isPowerOfTwo = (num) => (num & (num - 1)) === 0;
// console.log(isPowerOfTwo(16));

// A duck number is a number that contains the digit "0" but does not start with "0".
const isDuckNumber = (num) =>
  String(num).includes("0") && String(num)[0] !== "0";
// console.log(isDuckNumber(1023));

const isKaprekarNumber = (num) => {
  const square = num ** 2;
  const squareStr = String(square);
  const numStr = String(num);
  const left = Number(squareStr.slice(0, numStr.length));
  const right = Number(squareStr.slice(-numStr.length));
  return left + right === num;
};
// console.log(isKaprekarNumber(9));

const isSmithNumber = (num) => sumOfDigits(num) === sumOfPrimeFactors(num);
// console.log(isSmithNumber(666));

const isCarolNumber = (num) => {
  const carolPrime = 2 ** num - 1;
  return isPrime(num) && isPerfectSquare(carolPrime);
};
// console.log(isCarolNumber(7));

const isCatalanNumber = (num) =>
  num >= 0 &&
  Number.isInteger(num) &&
  num === factorial(2 * num) / (factorial(num + 1) * factorial(num));
// console.log(isCatalanNumber(5));

const isDudeneyNumber1 = (num) => num === sumOfDigitsCube(num);
const isDudeneyNumber2 = (num) => Math.cbrt(num) === sumOfDigits(num);
// console.log(isDudeneyNumber(512));

const isLeylandNumber = (num) => {
  let found = false;
  for (let x = 2; x <= Math.floor(Math.pow(num, 1 / 3)) && !found; x++) {
    for (let y = x + 1; x * y <= num && !found; y++) {
      if (Math.pow(x, y) + Math.pow(y, x) === num) {
        found = true;
      }
    }
  }
  return found;
};
// console.log(isLeylandNumber(17))

const isPandigitalNumber = (num) => {
  const numStr = String(num);
  const digits = new Set(numStr);
  return (
    digits.size === numStr.length &&
    !digits.has("0") &&
    digits.size === Math.max(...numStr) - "0"
  );
};
// console.log(isPandigitalNumber(123456789));

const isZeiselNumber = (num) => {
  const factors = primeFactors(num);
  return factors.every((factor) => isPrime(factor + 1));
};
// console.log(isZeiselNumber(1050))

const isReversibleNumber = (num) => {
  const reversedNum = Number(String(num).split("").reverse().join(""));
  return num + reversedNum === sumOfDigits(num);
};
// console.log(isReversibleNumber(36));

const isUnitaryPerfectNumber = (num) => num === sumOfUnitaryDivisors(num);
// console.log(isUnitaryPerfectNumber(18));

// A Harshad number, also known as a Niven number,
// is an integer divisible by the sum of its digits.
const isHarshadNumber = (num) =>
  num % [...String(num)].reduce((sum, digit) => sum + Number(digit), 0) === 0;
// console.log(isHarshadNumber(18));

const isHarshadSmithNumber = (num) =>
  isHarshadNumber(num) && isSmithNumber(num);

// A neon number is a number where the sum of the digits of its
// square is equal to the number itself.
const isNeonNumber = (num) => {
  const squared = num ** 2;
  const digitSum = [...String(squared)]
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
  return squared === digitSum;
};
// console.log(isNeonNumber(9));

// The isPronicNumber function determines whether a given number is a
// pronic number (also known as an oblong number or rectangular number).
const isPronicNumber = (num) => {
  const n = Math.floor(Math.sqrt(num));
  return n * (n + 1) === num;
};
// console.log(isPronicNumber(6));

const isPronicSquare = (num) => Number.isInteger(Math.sqrt(num));
// console.log(isPronicSquare(6));

const isPowerfulNumber = (num) => {
  const factors = primeFactors(num);
  return new Set(factors).size === factors.length;
};
// console.log(isPowerfulNumber(16));

const isPracticalNumber = (num) => {
  const factors = primeFactors(num);
  for (let i = 2; i <= factors.length; i++) {
    if (sumOfArray(combinations(factors, i)) !== num) {
      return false;
    }
  }
  return true;
};
// console.log(isPracticalNumber(6));

const isStrangeNumber = (num) => {
  const factors = primeFactors(num);
  return factors.every((factor) => sumOfDigits(factor) === sumOfDigits(num));
};
// console.log(isStrangeNumber(18));

const isTauNumber = (num) => {
  const factors = primeFactors(num);
  return factors.some((factor) => sumOfDigits(factor) === sumOfDigits(num));
};
// console.log(isTauNumber(15));

// A strong number is a number whose sum of factorials of its digits
// is equal to the number itself.
const isStrongNumber = (num) => {
  const sumOfFactorials = [...String(num)].reduce(
    (sum, digit) => sum + factorial(Number(digit)),
    0
  );
  return sumOfFactorials === num;
};
// console.log(isStrongNumber(145));

const isDisariumNumber = (num) => {
  const digits = [...String(num)].map(Number);
  const sumOfPowers = digits.reduce(
    (sum, digit, index) => sum + digit ** (index + 1),
    0
  );
  return sumOfPowers === num;
};
// console.log(isDisariumNumber(89));

const isWedderburnEtheringtonNumber = (num) => {
  const primes = primeFactors(num);
  const factorials = primes.map((prime) => factorial(prime - 1));
  return (
    factorials.reduce((product, factorial) => product * factorial, 1) ===
    factorial(num)
  );
};
// console.log(isWedderburnEtheringtonNumber(6));

const isPluperfectNumber = (num) =>
  num === sumOfDivisors(sumOfDivisors(num)) - num;
// console.log(isPluperfectNumber(28));

const isRepunitNumber = (num) => /^1+$/.test(num.toString());
// console.log(isRepunitNumber(111)); // Output: true

// A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself).
const isPerfectNumber = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};
// console.log(isPerfectNumber(28));

const isPerfectPower = (num) => {
  for (let i = 2; i * i <= num; i++) {
    let power = 2;
    let result = i * i;
    while (result <= num) {
      if (result === num) {
        return true;
      }
      result *= i;
      power++;
    }
  }
  return false;
};
// console.log(isPerfectPower(64));

const isVampireNumber = (num) => {
  const numStr = String(num);
  const numLen = numStr.length;
  const numDigits = [...numStr];
  const numFactors = getFactors(num);
  for (const factor1 of numFactors) {
    const factor2 = num / factor1;
    if (factor1 % 10 === 0 && factor2 % 10 === 0) continue;
    const factorStr = String(factor1) + String(factor2);
    if (factorStr.length === numLen && areAnagrams(numDigits, [...factorStr])) {
      return true;
    }
  }
  return false;
};
// console.log(isVampireNumber(1260));

const isDeficientNumber = (num) => num > sumOfProperDivisors(num);
const isAbundantNumber = (num) => num < sumOfProperDivisors(num);

const isPrimeFactor = (num, factor) => num % factor === 0 && isPrime(factor);
// console.log(isPrimeFactor(20, 2));

const isTriangularNumber = (num) => {
  let n = 0;
  let sum = 0;
  while (sum < num) {
    n++;
    sum += n;
  }
  return sum === num;
};
// console.log(isTriangularNumber(10));

const largestPrimeFactor = (num) => {
  let factor = 2;
  while (factor <= num) {
    if (num % factor === 0) {
      num /= factor;
    } else {
      factor++;
    }
  }
  return factor;
};
// console.log(largestPrimeFactor(48));
