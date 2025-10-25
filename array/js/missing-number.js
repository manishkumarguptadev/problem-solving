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

console.log(missingNumber([4, 0, 3, 1]));
console.log(missingNumber([8, 3, 5, 2, 4, 6, 0, 1]));
