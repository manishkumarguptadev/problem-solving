function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

function leftRotate(nums, k) {
  k %= nums.length;
  let n = nums.length;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, n - k - 1);
  reverse(nums, n - k, n - 1);
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);

leftRotate(arr, 3);
console.log(arr);
