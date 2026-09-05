function mySqrt(x) {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = Math.floor(x / 2);
  let mid;
  let square;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    square = mid * mid;
    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
