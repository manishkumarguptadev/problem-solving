var majorityElement = function (nums) {
  let major = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      major = nums[i];
      count = 1;
    } else if (major === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return major;
};

var majorityElement = function (nums) {
  const hash = {};
  let major = 0;
  let count = 0;

  for (let n of nums) {
    hash[n] = 1 + (hash[n] || 0);
    if (hash[n] > count) {
      major = n;
      count = hash[n];
    }
  }

  return major;
};
