const hasProperty = (obj, prop) => prop in obj;
const person = { name: "John", age: 30 };
// console.log(hasProperty(person, "name"));

const isEmptyObject = (obj) => Object.keys(obj).length === 0;
// console.log(isEmptyObject({}));

const findMaxValue = (arr, key) => Math.max(...arr.map((item) => item[key]));
const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 70 },
];
// console.log(findMaxValue(students, "score"));

const sortByProperty = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];
// console.log(sortByProperty(people, 'age'));
