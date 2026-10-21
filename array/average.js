
const average1 = (...args) => args.reduce((a, b) => a + b) / args.length;
// console.log(average(1, 2, 3, 4));
const average2 = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
// console.log(average([1, 2, 3, 4, 5]));

const averageOfOddNumbers = (arr) => {
  const oddNumbers = arr.filter((num) => num % 2 !== 0);
  return oddNumbers.reduce((sum, num) => sum + num, 0) / oddNumbers.length;
};
// console.log(averageOfOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const sumArray = (arr) => arr.reduce((acc, val) => acc + val, 0);
// console.log(sumArray([1, 2, 3, 4, 5]));

const sumOfEvenNumbers = (arr) =>
  arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);

const sumOfSquares = (arr) => arr.reduce((acc, val) => acc + val ** 2, 0);
// console.log(sumOfSquares([1, 2, 3, 4, 5]));

// median is the middle value of a dataset when it is ordered
const median = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};
// console.log(median([1, 3, 5, 7, 9]));

const mode = (arr) => {
  const frequency = {};
  arr.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
  const maxFrequency = Math.max(...Object.values(frequency));
  return Object.keys(frequency)
    .filter((num) => frequency[num] === maxFrequency)
    .map(Number);
};
// console.log(mode([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));

const standardDeviation = (arr) => {
  const avg = mean(arr);
  const squaredDiffs = arr.map((num) => Math.pow(num - avg, 2));
  const variance = mean(squaredDiffs);
  return Math.sqrt(variance);
};
// console.log(standardDeviation([1, 2, 3, 4, 5]));
