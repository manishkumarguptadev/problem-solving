function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }

  return sum;
}

function productOfDigits(num) {
  let product = 1;

  while (num > 0) {
    let rem = num % 10;
    product = product * rem;
    num = Math.floor(num / 10);
  }

  return product;
}

function countOfDigits(num) {
  let count = 0;

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }

  return count;
}

function reverseOfDigits(num) {
  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  return rev;
}

console.log(countOfDigits(223));
