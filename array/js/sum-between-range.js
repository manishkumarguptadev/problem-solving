function sumBetweenRange(nums) {
  let prefixSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  return (i, j) => {
    if (i === 0) {
      return prefixSum[j];
    }
    return prefixSum[j] - prefixSum[i - 1];
  };
}

let sumRange = sumBetweenRange([10, 15, 20, 10, 5]);
console.log(sumRange(3, 4));
var NumArray = function (nums) {
  this.pre = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    this.pre[i + 1] = this.pre[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.pre[right + 1] - this.pre[left];
};
