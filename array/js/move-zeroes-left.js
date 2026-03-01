let moveZeroesToLeft = function (arr) {
  let boundary = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[boundary];
      arr[boundary] = temp;
      boundary--;
    }
  }
};
