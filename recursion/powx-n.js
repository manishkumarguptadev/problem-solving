function powerRec(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }

  let temp = powerRec(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return temp * temp;
  } else {
    return x * temp * temp;
  }
}

var myPow = function (x, n) {
  let result = powerRec(x, Math.abs(n));

  if (n >= 0) {
    return result;
  }

  return 1 / result;
};
