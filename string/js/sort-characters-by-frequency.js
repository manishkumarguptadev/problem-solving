import Heap from "../../common/heap.js";

var frequencySort = function (s) {
  // find the frequency of each character
  const charFrequencyMap = {};
  for (let i = 0; i < s.length; i++) {
    const chr = s[i];
    if (chr in charFrequencyMap) {
      charFrequencyMap[chr]++;
    } else {
      charFrequencyMap[chr] = 1;
    }
  }

  // add all characters to the max heap
  const maxHeap = new Heap({
    comparator: (a, b) => b[0] - a[0],
    initialValues: [],
  });
  Object.keys(charFrequencyMap).forEach((key) => {
    maxHeap.push([charFrequencyMap[key], key]);
  });

  // build a string, appending the most occurring characters first
  const sortedString = [];
  while (maxHeap.size() > 0) {
    const [frequency, char] = maxHeap.pop();
    for (let i = 0; i < frequency; i++) {
      sortedString.push(char);
    }
  }
  return sortedString.join("");
};
function frequencySort(s) {
  // Create a map to store character frequencies
  const characterFrequencyMap = new Map();

  // Count the frequency of each character in the string
  for (const character of s) {
    characterFrequencyMap.set(
      character,
      (characterFrequencyMap.get(character) || 0) + 1
    );
  }

  // Get all unique characters and sort them by frequency in descending order
  const sortedCharacters = Array.from(characterFrequencyMap.keys()).sort(
    (charA, charB) => {
      const frequencyA = characterFrequencyMap.get(charA);
      const frequencyB = characterFrequencyMap.get(charB);
      return frequencyB - frequencyA;
    }
  );

  // Build the result string by repeating each character according to its frequency
  const resultArray = [];
  for (const character of sortedCharacters) {
    const frequency = characterFrequencyMap.get(character);
    resultArray.push(character.repeat(frequency));
  }

  // Join all repeated characters into the final result string
  return resultArray.join("");
}

console.log(
  `String after sorting characters by frequency: ${frequencySort(
    "Programming"
  )}`
);
console.log(
  `String after sorting characters by frequency: ${frequencySort("abcbab")}`
);
