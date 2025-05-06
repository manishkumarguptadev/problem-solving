// Create an 10x10 matrix of null values
let nullVector = () => Array(10).fill(null);
let nullArray = nullVector().map(nullVector);

const single = (_) => console.log("hello");
console.log(single());
