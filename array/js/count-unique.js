function countUnique(arr) {
  let count = 0;
  let isUnique = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      count++;
    }
  }
  return count;
}
function countUnique(arr) {
  let set = new Set(arr);
  return set.size;
}
console.log(countUnique([1, 2, 3, 4, 5]));
console.log(countUnique([1, 2, 3, 4, 5, 7, 5]));
