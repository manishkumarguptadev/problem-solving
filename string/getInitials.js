var getInitials = function (name) {
  return name
    .split(" ")
    .map(function (word) {
      return word.charAt(0);
    })
    .join("");
};

console.log(getInitials("Manish Kumar"));
