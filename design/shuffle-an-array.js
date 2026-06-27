class Solution {
  constructor(nums) {
    this.nums = nums;
  }

  reset() {
    return this.nums;
  }

  shuffle() {
    const rand = [...this.nums];

    for (let i = 0; i < this.nums.length; i++) {
      const r = Math.floor(Math.random() * (i + 1));
      [rand[i], rand[r]] = [rand[r], rand[i]];
    }

    return rand;
  }
}
