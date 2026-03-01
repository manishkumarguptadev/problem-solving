const createMultFunction = function (mainNum) {
  return function (num) {
    return mainNum * num;
  };
};

console.log(createMultFunction(100)(3));
console.log(createMultFunction(100).toString());
