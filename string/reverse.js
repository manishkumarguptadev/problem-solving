const reverse = (str) => str.split("").reverse().join("");
// console.log(reverse("hello world"));

const reverseStringRecursive = (str) =>
  str === "" ? "" : reverseStringRecursive(str.substr(1)) + str.charAt(0);
// console.log(reverseStringRecursive('hello'));

const reverseWords = (str) => str.split(" ").reverse().join(" ");
// console.log(reverseWords("Hello, world!"));
let strRev = function (str, start, end) {
  if (!str || str.length < 2) {
    return;
  }

  while (start < end) {
    let temp = str[start];
    str = str.substr(0, start) + str[end] + str.substr(start + str[end].length);
    str = str.substr(0, end) + temp + str.substr(end + temp.length);

    start++;
    end--;
  }

  return str;
};
