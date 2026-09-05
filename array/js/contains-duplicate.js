// Time complexity: O(n2)
// Space complexity: O(1)
function containsDuplicate(nums) {}

// Time complexity: O(nlogn)
// Space complexity: O(n)
function containsDuplicate(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
}

// Time complexity: O(n)
// Space complexity: O(n)
function containsDuplicate(nums) {
  const set = new Set();

  for (const n of nums) {
    if (set.has(n)) {
      return true;
    }
    set.add(n);
  }

  return false;
}
function containsDuplicate(nums) {
  const set = new Set(nums);
  return set.size < nums.length;
}
