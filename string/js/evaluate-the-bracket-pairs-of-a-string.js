function evaluate(s, knowledge) {
  const stringLength = s.length;

  const knowledgeMap = new Map();
  for (const [key, value] of knowledge) {
    knowledgeMap.set(key, value);
  }

  const result = [];
  let currentIndex = 0;

  while (currentIndex < stringLength) {
    if (s[currentIndex] === "(") {
      // Found opening bracket, find the corresponding closing bracket
      const closingBracketIndex = s.indexOf(")", currentIndex + 1);

      // Extract the key between brackets
      const key = s.slice(currentIndex + 1, closingBracketIndex);

      // Look up the value in the map, use '?' if not found
      result.push(knowledgeMap.get(key) ?? "?");

      // Move index to the closing bracket position
      currentIndex = closingBracketIndex;
    } else {
      // Regular character, add it directly to the result
      result.push(s[currentIndex]);
    }

    currentIndex++;
  }

  return result.join("");
}
