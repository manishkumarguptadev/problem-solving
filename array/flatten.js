/** Flatten Array **
 *
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 *
 */

const flatten1 = (arr) => {
  const flattened = [];

  const flattenHelper = (arr) => {
    for (elem of arr) {
      if (Array.isArray(elem)) {
        flattenHelper(elem);
      } else {
        flattened.push(elem);
      }
    }
  };
  flattenHelper(arr);

  return flattened;
};

const flatten = (arr) => {
  let flattened = [];

  for (elem of arr) {
    if (Array.isArray(elem)) {
      flattened = flattened.concat(flatten(elem));
    } else {
      flattened.push(elem);
    }
  }

  return flattened;
};

const flatten2 = (arr) => {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    const elem = arr[i];
    if (Array.isArray(elem)) {
      const flatElem = flatten(elem);
      for (let j = 0; j < flatElem.length; j++) {
        flattened.push(flatElem[j]);
      }
    } else {
      flattened.push(elem);
    }
  }

  return flattened;
};

const totalCount = function (array) {
  let cnt = 0;
  for (let elem of array) {
    if (Array.isArray(elem)) {
      cnt += totalCount(elem);
    } else {
      cnt++;
    }
  }
  return cnt;
};

const flattenArray = (arr) => [].concat(...arr);
// console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([[1, 2], 3]));
