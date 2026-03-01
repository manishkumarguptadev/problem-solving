const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capitalize("follow for more"));

const toTitleCase = (str) =>
  str.replace(/\b\w/g, (match) => match.toUpperCase());
// console.log(toTitleCase("hello world"));
