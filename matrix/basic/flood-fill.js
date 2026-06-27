var floodFill = function (image, sr, sc, color) {
  const originalColor = image[sr][sc];
  if (originalColor === color) {
    return image;
  } // No change needed

  const m = image.length;
  const n = image[0].length;

  const dfs = (r, c) => {
    // Boundary and color check
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== originalColor) {
      return;
    }

    // we fill the pixel
    image[r][c] = color;

    // we recurse in 4 directions
    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  };

  dfs(sr, sc);

  return image;
};
