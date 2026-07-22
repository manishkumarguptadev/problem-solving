// function find_word_concatenation(str, words) {
//   if (words.length === 0 || words[0].length === 0) {
//     return [];
//   }

//   let wordsFreqs = new Map();

//   for (i = 0; i < words.length; i++) {
//     wordsFreqs.set(words[i], (wordsFreqs.get(words[i]) || 0) + 1);
//   }

//   const result = [],
//     wordsCount = words.length,
//     wordLength = words[0].length;

//   // Try every possible start position i
//   for (let i = 0; i < str.length - wordsCount * wordLength + 1; i++) {
//     const wordsSeen = new Map();
//     for (let j = 0; j < wordsCount; j++) {
//       const next_word_index = i + j * wordLength;
//       // Get the next word from the string
//       const word = str.substring(next_word_index, next_word_index + wordLength);

//       if (!wordsFreqs.has(word)) {
//         break;
//       }

//       // Add the word to the 'wordsSeen' map
//       wordsSeen.set(word, (wordsSeen.get(word) || 0) + 1);

//       // no need to process further if the word has higher frequency than required
//       if (wordsSeen.get(word) > (wordsFreqs.get(word) || 0)) {
//         break;
//       }
//       if (j + 1 === wordsCount) {
//         result.push(i);
//       }
//     }
//   }

//   return result;
// }

function find_word_concatenation(str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  let wordsFreqs = new Map();

  for (i = 0; i < words.length; i++) {
    wordsFreqs.set(words[i], (wordsFreqs.get(words[i]) || 0) + 1);
  }

  const result = [],
    wordsCount = words.length,
    wordLength = words[0].length,
    len = wordsCount * wordLength;

  // Try every possible start position i
  for (let i = 0; i < str.length - len + 1; i++) {
    const copy = new Map(wordsFreqs);

    for (let j = i; j < i + len; j += wordLength) {
      const word = str.substring(j, j + wordLength);

      if (!copy.has(word)) {
        break;
      }

      copy.set(word, copy.get(word) - 1);
      if (copy.get(word) === 0) {
        copy.delete(word);
      }
    }

    if (copy.size === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]));
console.log(find_word_concatenation("catcatfoxfox", ["cat", "fox"]));
