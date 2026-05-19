/* const removeFalseys = function(arr) {
  let newArray = [];
  for (let elem of arr) {
    if (elem) newArray.push(elem);
  };
  return newArray;
}; */

/* const removeFalseys = function(arr) {
  let newArray = [];
  arr.forEach(elem => elem && newArray.push(elem));
  return newArray;
}; */

const removeFalseys = function (arr) {
  return arr.filter((elem) => elem);
};
