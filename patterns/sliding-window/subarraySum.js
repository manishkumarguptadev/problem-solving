function subarraySum(arr, target) {
  let sum = arr[0],
    start = 0,
    end = 0;

  while (start < arr.length) {
    if (start > end) {
      end = start;
      sum = arr[start];
    }
    if (sum < target) {
      if (end === arr.length - 1) {
        break;
      }
      end++;
      sum += arr[end];
    } else if (sum > target) {
      sum -= arr[start];
      start += 1;
    } else {
      return [start, end];
    }
  }
  return null;
}
console.log(subarraySum([2, 1, 5, 2, 3, 2], 89));
