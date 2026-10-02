const fruitsIntoBaskets = function (fruits) {
  let maxLen = 0;
  const map = new Map();

  let left = 0;
  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
console.log(
  `Maximum number of fruits: ${fruitsIntoBaskets(["A", "B", "C", "A", "C"])}`
);
console.log(
  `Maximum number of fruits: ${fruitsIntoBaskets([
    "A",
    "B",
    "C",
    "B",
    "B",
    "C",
  ])}`
);
