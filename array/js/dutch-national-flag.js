function dutchNationalFlag(nums) {
  let i = 0;
  let left = 0;
  let right = nums.length - 1;

  while (i <= right) {
    if (nums[i] < 1) {
      swap(nums, i, left);
      left++;
      i++;
    } else if (nums[i] > 1) {
      swap(nums, i, right);
      right--;
    } else {
      i++;
    }
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const arr = [2, 1, 0, 1, 2, 0];
dutchNationalFlag(arr);
console.log(arr);
