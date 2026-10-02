let isComposite = (num) => {
  let factors = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors++;
    }
  }
  return factors > 2;
};
console.log(isComposite(61));
