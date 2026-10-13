function countDistinct(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let isDistinct = true;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        isDistinct = false;
        break;
      }
    }
    if (isDistinct) {
      count++;
    }
  }
  return count;
}
function countDistinct(arr) {
  let set = new Set(arr);
  return set.size;
}
function countDistinct(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  return set.size;
}
console.log(countDistinct([1, 2, 3, 4, 5]));
console.log(countDistinct([1, 2, 3, 4, 5, 7, 5, 6, 6]));
