const shuffleArray = function (arr) {
  let newArray = [...arr];
  let newPos;
  for (let i = 0; i < newArray.length; i++) {
    newPos = Math.floor(Math.random() * newArray.length);
    [newArray[i], newArray[newPos]] = [newArray[newPos], newArray[i]];
  }
  return newArray;
};

const shuffleArray2 = (arr) => arr.sort(() => 0.5 - Math.random());
// console.log(shuffleArray([1, 2, 3, 4]));

const shuffleArrayFisherYates = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
// console.log(shuffleArrayFisherYates([1, 2, 3, 4, 5]));
