const isPerfectSquare = (num) => {
  let lo = 1;
  let hi = num;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return false;
};
