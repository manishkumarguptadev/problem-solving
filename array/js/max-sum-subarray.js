let findMaxSumSubArray = function (arr) {
  if (arr.length < 1) {
    return 0;
  }

  let currMax = arr[0];
  let globalMax = arr[0];
  let lengtharray = arr.length;
  for (let i = 1; i < lengtharray; i++) {
    if (currMax < 0) {
      currMax = arr[i];
    } else {
      currMax += arr[i];
    }

    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }
  return globalMax;
};

v = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
console.log("Sum of largest subarray: " + findMaxSumSubArray(v));
