class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  pick(target) {
    let count = 0;
    let res = null;

    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) {
        count++;
        if (Math.floor(Math.random() * count) === count - 1) {
          res = i;
        }
      }
    }

    return res;
  }
}
