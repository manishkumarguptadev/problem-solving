var singleNumber = function (nums) {
  let res = 0;
  for (i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};

console.log(singleNumber([1, 4, 2, 1, 3, 2, 3]));
