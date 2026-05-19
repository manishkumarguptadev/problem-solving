function peakIndexInMountainArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return arr[start];
}

console.log(peakIndexInMountainArray([1, 3, 8, 12, 4, 2]));
console.log(peakIndexInMountainArray([3, 8, 3, 1]));
console.log(peakIndexInMountainArray([1, 3, 8, 12]));
console.log(peakIndexInMountainArray([10, 9, 8]));
