let factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

let findKthPermutation = function (v, k, result) {
  if (!v || v.length === 0) {
    return;
  }

  let n = v.length;
  let blockSize = factorial(n - 1);
  let selected = Math.floor((k - 1) / blockSize);
  result.push(v[selected]);
  v.splice(selected, 1);
  k = k - blockSize * selected;

  findKthPermutation(v, k, result);
};

var getPermutation = function (n, k) {
  let v = [];
  for (let i = 0; i < n; i++) {
    v.push(i + 1);
  }

  let result = [];
  findKthPermutation(v, k, result);
  return result.join("");
};
console.log("8th permutation of 1234 =", getPermutation(4, 8));
