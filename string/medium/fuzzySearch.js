const fuzzySearch = function (str, query) {
  // convert the query and str
  // for case-insensitive search
  str = str.toLowerCase();
  query = query.toLowerCase();
  // use two variables to track the
  // current character
  // and last searched position in the string
  let i = 0,
    lastSearched = -1,
    current = query[i];
  while (current) {
    // if the character is not present
    // return false
    if (!~(lastSearched = str.indexOf(current, lastSearched + 1))) {
      return false;
    }
    current = query[++i];
  }
  // if the search completes
  // return true
  return true;
};
const search = function (arr, query) {
  return arr.filter((str) => fuzzySearch(str, query));
};
let arr = [
  "Doomsayer",
  "Doomguard",
  "Doomhamer",
  "Bane of Doom",
  "Fearsome Doomguard",
  "Dr. Boom",
  "Majordomo",
  "Shadowbomber",
  "Shadowform",
  "Goldshire footman",
];
console.log(search(arr, "ds"));
// Output: [ 'Doomsayer', 'Goldshire footman' ];
// For all integer operands except -1, the net operand after applying the ~ operator for the ! operator would be truthy in nature
// resulting in FALSE.
// -1 is special because ~(-1) gives 0 which is falsy in JavaScript. Adding the ! operator gives us the only TRUE.
