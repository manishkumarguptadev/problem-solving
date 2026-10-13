var runningSum = function (nums) {
  let prefixSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  return prefixSum;
};

var runningSum = function (nums) {
  let prefixSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }
  return prefixSum;
};
console.log(runningSum([10, 15, 20, 10, 5]));
