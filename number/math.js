const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomInRange(1, 10));

const random1To10 = () => Math.floor(Math.random() * 10) + 1;
// console.log(random1To10());

const rollDice = () => {
  const res = Math.floor(Math.random() * 6) + 1;
  console.log(`you rolled ${res}`);
};
// rollDice();
