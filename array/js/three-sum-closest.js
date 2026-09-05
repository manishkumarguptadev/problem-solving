function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const currentDiff = Math.abs(currentSum - target);

      if (currentDiff < minDiff) {
        minDiff = currentDiff;
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
// the second part of the following 'if' is to handle the smallest sum when we have more than one solution
if (
  Math.abs(targetDiff) < Math.abs(smallestDiff) ||
  (Math.abs(targetDiff) === Math.abs(smallestDiff) && targetDiff > smallestDiff)
) {
  smallestDiff = targetDiff; // save the closest and the biggest difference
}
