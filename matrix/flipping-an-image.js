var flipAndInvertImage = function (image) {
  const C = image.length;

  for (var row = 0; row < C; ++row) {
    for (var col = 0; col < Math.floor((C + 1) / 2); col++) {
      var tmp = image[row][col] ^ 1;
      image[row][col] = image[row][C - 1 - col] ^ 1;
      image[row][C - 1 - col] = tmp;
    }
  }

  return image;
};
