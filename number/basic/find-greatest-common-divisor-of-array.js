var findGCD = function (nums) {
  let min = Infinity;
  let max = -Infinity;

  for (let num of nums) {
    if (num > max) max = num;
    if (num < min) min = num;
  }

  return gcd(min, max);
};

var findGCD = function (nums) {
  const min = Math.min(...nums);

  const max = Math.max(...nums);

  return gcd(min, max);
};

function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}
