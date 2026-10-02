var findMissingAndRepeatedValues = function (grid) {
  // Get the dimension of the grid
  const gridSize = grid.length;

  // Initialize frequency counter array for numbers 1 to n*n
  // Index 0 is unused since valid numbers start from 1
  const frequencyCounter = Array(gridSize * gridSize + 1).fill(0);

  // Initialize result array: [repeated value, missing value]
  const result = Array(2).fill(0);

  // Count the frequency of each number in the grid
  for (const row of grid) {
    for (const value of row) {
      // Increment frequency and check if this number appears twice
      frequencyCounter[value]++;
      if (frequencyCounter[value] === 2) {
        // Found the repeated value
        result[0] = value;
      }
    }
  }

  // Find the missing value by checking which number has frequency 0
  for (let number = 1; n <= gridSize * gridSize; number++) {
    if (frequencyCounter[number] === 0) {
      // Found the missing value
      result[1] = number;
      return result;
    }
  }
};
