function search(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      return true;
    }

    // Case 1: low half is sorted (mid element is greater than highmost)
    if (nums[mid] > nums[high]) {
      // Check if target lies within the sorted low half
      if (nums[low] <= target && target <= nums[mid]) {
        // Target is in low half, move high pointer to mid
        high = mid;
      } else {
        // Target is in high half, move low pointer past mid
        low = mid + 1;
      }
    }
    // Case 2: high half is sorted (mid element is less than highmost)
    else if (nums[mid] < nums[high]) {
      // Check if target lies within the sorted high half
      if (nums[mid] < target && target <= nums[high]) {
        // Target is in high half, move low pointer past mid
        low = mid + 1;
      } else {
        // Target is in low half, move high pointer to mid
        high = mid;
      }
    }
    // Case 3: Cannot determine which half is sorted due to duplicates
    else {
      // Decrement high pointer to eliminate duplicate and continue
      high--;
    }
  }

  return false;
}
