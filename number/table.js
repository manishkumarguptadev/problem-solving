const table = (num, range) => {
  for (let i = 1; i <= range; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);
  }
};
console.log(table(5, 5));
