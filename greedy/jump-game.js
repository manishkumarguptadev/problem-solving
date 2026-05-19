function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return maxReach >= nums.length - 1;
}

var canJump = function (nums) {
  let destination = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= destination) {
      destination = i;
    }
  }

  return destination === 0;
};
