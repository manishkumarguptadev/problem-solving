var wiggleSort = function (nums) {
  const n = nums.length;
  const sorted = nums.slice().sort((a, b) => a - b);
  let j = n - 1;
  let k = Math.floor((n - 1) / 2);
  for (let i = 0; i < n; i++) {
    nums[i] = i & 1 ? sorted[j--] : sorted[k--];
  }
};
