const trappedRainWater = (height) => {
  const n = height.length;

  const leftMax = [];
  const rightMax = [];

  leftMax[0] = 0;
  rightMax[n - 1] = 0;

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  let totalWater = 0;
  for (let i = 0; i < n; i++) {
    let currentWater = Math.min(leftMax[i], rightMax[i]) - height[i];
    totalWater += currentWater > 0 ? currentWater : 0;
  }

  return totalWater;
};
// const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// const getTrappedRainwater = function (heights) {
//   let totalWater = 0;

//   for (let p = 0; p < heights.length; p++) {
//     let leftP = p,
//       rightP = p,
//       maxLeft = 0,
//       maxRight = 0;

//     while (leftP >= 0) {
//       maxLeft = Math.max(maxLeft, heights[leftP]);
//       leftP--;
//     }

//     while (rightP < heights.length) {
//       maxRight = Math.max(maxRight, heights[rightP]);
//       rightP++;
//     }

//     const currentWater = Math.min(maxLeft, maxRight) - heights[p];

//     if (currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }

//   return totalWater;
// };

// console.log(getTrappedRainwater(elevationArray));
// const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// /*
// 1. Identify the pointer with the lesser value
// 2. Is this pointer value greater than or equal to max on that side
//   yes -> update max on that side
//   no -> get water for pointer, add to total
// 3. move pointer inwards
// 4. repeat for other pointer
//  */

// const getTrappedRainwater = function (heights) {
//   let left = 0,
//     right = heights.length - 1,
//     totalWater = 0,
//     maxLeft = 0,
//     maxRight = 0;

//   while (left < right) {
//     if (heights[left] <= heights[right]) {
//       if (heights[left] >= maxLeft) {
//         maxLeft = heights[left];
//       } else {
//         totalWater += maxLeft - heights[left];
//       }
//       left++;
//     } else {
//       if (heights[right] >= maxRight) {
//         maxRight = heights[right];
//       } else {
//         totalWater += maxRight - heights[right];
//       }

//       right--;
//     }
//   }

//   return totalWater;
// };

// console.log(getTrappedRainwater(elevationArray));
// var trap = function (height) {
//   let left = 0;
//   let right = height.length - 1;
//   let leftMax = height[left];
//   let rightMax = height[right];
//   let water = 0;

//   while (left < right) {
//     if (leftMax < rightMax) {
//       left++;
//       leftMax = Math.max(leftMax, height[left]);
//       water += leftMax - height[left];
//     } else {
//       right--;
//       rightMax = Math.max(rightMax, height[right]);
//       water += rightMax - height[right];
//     }
//   }

//   return water;
// };
console.log(trappedRainWater([4, 2, 0, 3, 2, 5]));
