const factorial1 = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};
const factorial2 = (num) => {
  if (num === 0 || num === 1) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};
console.log(factorial2(4));
