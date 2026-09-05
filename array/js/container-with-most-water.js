const heightsArray = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function getMaxWaterContainer(height) {
  let maxWater = 0;

  for (let lp = 0; lp < height.length; lp++) {
    for (let rp = lp + 1; rp < height.length; rp++) {
      const containerHeight = Math.min(height[lp], height[rp]);
      const containerWidth = rp - lp;
      const currWater = containerHeight * containerWidth;

      maxWater = Math.max(maxWater, currWater);
    }
  }

  return maxWater;
}

function getMaxWaterContainer(height) {
  let lp = 0,
    rp = height.length - 1,
    maxWater = 0;

  while (lp < rp) {
    const containerHeight = Math.min(height[lp], height[rp]);
    const containerWidth = rp - lp;
    const currWater = containerHeight * containerWidth;

    maxWater = Math.max(maxWater, currWater);

    if (height[lp] < height[rp]) {
      lp++;
    } else {
      rp--;
    }
  }

  return maxWater;
}

console.log(getMaxWaterContainer(heightsArray));
