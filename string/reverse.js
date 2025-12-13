const reverse = (str) => str.split("").reverse().join("");
// console.log(reverse("hello world"));

const reverseStringRecursive = (str) =>
  str === "" ? "" : reverseStringRecursive(str.substr(1)) + str.charAt(0);
// console.log(reverseStringRecursive('hello'));

const reverseWords = (str) => str.split(" ").reverse().join(" ");
// console.log(reverseWords("Hello, world!"));
