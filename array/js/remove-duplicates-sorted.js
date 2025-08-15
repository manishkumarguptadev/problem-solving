function removeDuplicatesSorted(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[res - 1]) {
      arr[res] = arr[i];
      res++;
    }
  }
  let noOfDupes = arr.length - res;
  for (let i = 1; i <= noOfDupes; i++) {
    arr.pop();
  }
  return arr;
}

let arr = [1, 2, 2, 3, 3, 3, 4, 5];
console.log(removeDuplicatesSorted(arr));
