function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

function removeDuplicates(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    let isDistinct = true;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        isDistinct = false;
        break;
      }
    }
    if (isDistinct) {
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

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([7, 7, 1, 2, 3, 2, 3, 75]));
