function containsUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

function containsUnique(arr) {
  let set = new Set(arr);
  if (set.size < arr.length) {
    return false;
  }
  return true;
}
console.log(containsUnique([1, 2, 3, 4, 5]));
console.log(containsUnique([1, 2, 3, 4, 5, 5]));
