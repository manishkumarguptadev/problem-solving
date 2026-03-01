const lcmArray = (arr) => arr.reduce((lcm, num) => (lcm * num) / gcd(lcm, num));
const lcmArray1 = (arr) =>
  arr.reduce((lcm, num) => (lcm * num) / gcdArray(arr), 1);
// console.log(lcmArray([2, 3, 4, 5]));

const lcm = (num1, num2) => (num1 * num2) / gcd(num1, num2);
// console.log(lcm(6, 8));
