/* const insertEveryN = function(arr, data, n) {
  let newArray = [...arr];
  let pos = 0;
  for (let i = 0; i < Math.floor(arr.length/n); i++) {
    pos += n;
    newArray.splice(pos +i, 0, data);
  }
  return newArray;
}; */

/* const insertEveryN = function(arr, data, n) {
  return arr.flatMap((elem, idx) => (idx + 1) % n === 0 ? [elem, data] : elem);
}; */

const insertEveryN = function (arr, data, n) {
  return arr.reduce(
    (acc, val, idx) =>
      Number.isInteger((idx + 1) / n) ? [...acc, val, data] : [...acc, val],
    []
  );
};

console.log(insertEveryN([50, 60, 90, 100, 20], 0, 2));
