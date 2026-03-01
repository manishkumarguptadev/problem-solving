let moveZeroesToRight = function (arr) {
  let boundary = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[boundary]] = [arr[boundary], arr[right]];
      boundary++;
    }
  }
};
