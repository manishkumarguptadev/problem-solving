import Heap from "../common/heap.js";
var reorganizeString = function (s) {
  const charFrequencyMap = {};
  for (let i = 0; i < s.length; i++) {
    const chr = s[i];
    if (!(chr in charFrequencyMap)) {
      charFrequencyMap[chr] = 1;
    } else {
      charFrequencyMap[chr]++;
    }
  }

  const maxHeap = new Heap({
    comparator: (a, b) => b[1] - a[1],
    initialValues: [],
  });
  // add all characters to the max heap
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([char, charFrequencyMap[char]]);
  });

  let previousChar = null,
    previousFrequency = 0,
    resultString = [];
  while (maxHeap.size() > 0) {
    const [char, frequency] = maxHeap.pop();
    // add the previous entry back in the heap if its frequency is greater than zero
    if (previousChar !== null && previousFrequency > 0) {
      maxHeap.push([previousChar, previousFrequency]);
    }
    // append the current character to the result string and decrement its count
    resultString.push(char);
    previousChar = char;
    previousFrequency = frequency - 1; // decrement the frequency
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === s.length) {
    return resultString.join("");
  }
  return "";
};

console.log(`Rearranged string:  ${reorganizeString("aappp")}`);
console.log(`Rearranged string:  ${reorganizeString("Programming")}`);
console.log(`Rearranged string:  ${reorganizeString("aapa")}`);
