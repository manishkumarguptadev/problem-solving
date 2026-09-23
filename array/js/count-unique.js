function countUnique(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
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
  let map = new Map();
  for (element of arr) {
    map.set(element, (map.get(element) || 0) + 1);
  }
  let count = 0;
  for (const value of map.values()) {
    if (value === 1) {
      count++;
    }
  }
  return count;
}
console.log(countUnique([1, 2, 3, 4, 5]));
console.log(countUnique([1, 2, 2, 3, 4, 5, 4, 7, 5, 7, 3, 3]));
