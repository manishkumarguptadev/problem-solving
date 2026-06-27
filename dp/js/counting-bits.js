function countBits(n) {
  let result = new Array(n + 1).fill(0);

  if (n === 0) {
    return result;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result[i] = result[Math.floor(i / 2)];
    } else {
      result[i] = result[Math.floor(i / 2)] + 1;
    }
  }

  return result;
}
function countBits(n) {
  const result = Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    result[i] = bitCount(i);
  }

  return result;
}

function bitCount(n) {
  let count = 0;

  while (n !== 0) {
    n &= n - 1;
    count++;
  }

  return count;
}

// Example usage:
let n = 5;
console.log(countBits(n));
