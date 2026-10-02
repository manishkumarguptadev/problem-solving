var missingNumber = function (nums) {
  let n = nums.length;
  let sum = 0;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }
  return total - sum;
};
var missingNumber = function (nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
};
function missingNumber(arr) {
  const n = arr.length + 1;

  // x1 represents XOR of all values from 1 to n
  let x1 = 1;
  for (let i = 2; i <= n; i++) {
    x1 = x1 ^ i;
  }

  // x2 represents XOR of all values in arr
  let x2 = arr[0];
  for (let i = 1; i < n - 1; i++) {
    x2 = x2 ^ arr[i];
  }

  // missing number is the xor of x1 and x2
  return x1 ^ x2;
}
console.log(missingNumber([4, 0, 3, 1]));
console.log(missingNumber([8, 3, 5, 2, 4, 6, 0, 1]));
