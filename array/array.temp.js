const consecutiveNumbers = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
// console.log(consecutiveNumbers(1, 5));

const randomArrayInRange = (min, max, length) =>
  Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

const randomPassword = (length) =>
  Array.from({ length }, () => Math.random().toString(36).charAt(2)).join("");
// console.log(randomPassword(8));

const randomArray = (length) =>
  Array.from({ length }, () => Math.floor(Math.random() * 100));
// console.log(randomArray(5));

const removeDuplicates = (arr) => [...new Set(arr)];
// console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));

const removeNullAndUndefined = (arr) =>
  arr.filter((item) => item !== null && item !== undefined);

const sortAscending = (arr) => arr.slice().sort((a, b) => a - b);
// console.log(sortAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3]));

// Count the occurrences of each element in a given array and
// return the counts in an object.
const countOccurrences = (arr) =>
  arr.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {});
// console.log(countOccurrences([1, 2, 1, 3, 2, 4, 1]))

const findMax = (arr) => Math.max(...arr);
// console.log(findMax([10, 5, 8, 20, 3]));

const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});
// console.log(minMax([10, 5, 25, 3, 15]));

const isSubset = (arr1, arr2) => arr1.every((item) => arr2.includes(item));
// console.log(isSubset([1, 2, 3], [2, 3, 4, 5, 6]));

const intersection = (arr1, arr2) => arr1.filter((val) => arr2.includes(val));
// console.log(intersection([1, 2, 3], [2, 3, 4]));

const difference = (arr1, arr2) => arr1.filter((val) => !arr2.includes(val));
// console.log(difference([1, 2, 3], [2, 3, 4]));

// Check if two arrays are equal through a
// shallow comparison of their elements.
const arraysAreEqual = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((val, index) => val === arr2[index]);
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output: true
// console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: false

const isSortedAscending = (arr) =>
  arr.every((el, i) => i === 0 || el >= arr[i - 1]);
// console.log(isSortedAscending([1, 2, 3, 5, 8]));

const hasUniqueValues = (arr) => new Set(arr).size === arr.length;
// console.log(hasUniqueValues([1, 2, 3, 4, 5]));

const hasEvenNumber = (arr) => arr.some((num) => num % 2 === 0);
// console.log(hasEvenNumber([1, 3, 5, 7, 8]));
