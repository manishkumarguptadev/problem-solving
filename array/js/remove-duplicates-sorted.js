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

function removeDuplicatesSorted(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[res - 1]) {
      arr[res] = arr[i];
      res++;
    }
  }
  return res;
}

function removeDuplicatesSorted(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

function removeDuplicatesSorted(arr) {
  return [...new Set(arr)];
}
let arr = [1, 2, 2, 3, 3, 3, 4, 5];
console.log(removeDuplicatesSorted(arr));
