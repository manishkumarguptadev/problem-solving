function isHappyNumber(num) {
  let sum;

  while (true) {
    sum = getNextSum(num);
    if (sum === 1) {
      return true;
    }
    if (sum === 4) {
      return false;
    }
    num = sum;
  }
}

function getNextSum(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem * rem;
    n = Math.floor(n / 10);
  }
  return sum;
}
var isHappyNumber = function (num) {
  const seen = new Set();

  while (true) {
    sum = getNextSum(num);
    if (sum === 1) {
      return true;
    }
    if (seen.has(sum)) {
      return false;
    }
    seen.add(sum);
    num = sum;
  }
};

function isHappyNumber(num) {
  let slow, fast;
  slow = fast = num;

  while (true) {
    slow = getNextNum(slow);
    fast = getNextNum(getNextNum(fast));

    if (fast === 1) {
      return true;
    }

    if (fast === slow) {
      return false;
    }
  }
}
function getNextNum(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem * rem;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(isHappyNumber(58));
