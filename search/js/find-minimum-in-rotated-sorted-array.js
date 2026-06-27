function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    // If the middle element is greater than the rightmost element,
    // it indicates that the smallest element is in the right half.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // At the end of the loop, left will be pointing at the smallest element.
  return nums[left];
}
function findMinInRotatedArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let left = 0;
  let right = arr.length - 1;
  if (arr[right] > arr[0]) {
    return arr[0];
  }
  while (right >= left) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return arr[mid + 1];
    }
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }
    if (arr[mid] > arr[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
