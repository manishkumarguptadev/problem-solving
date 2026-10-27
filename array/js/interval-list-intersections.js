function identifyAllIntervalOverlaps(firstList, secondList) {
  const overlaps = [];

  let i, j;
  i = j = 0;
  while (i < firstList.length && j < secondList.length) {
    let a, b;
    // Set A to the interval that starts first and B to the other interval.
    if (firstList[i][0] <= secondList[j][0]) {
      a = firstList[i];
      b = secondList[j];
    } else {
      a = secondList[j];
      b = firstList[i];
    }

    // If there's an overlap, add the overlap.
    if (a[1] >= b[0]) {
      overlaps.push([b[0], Math.min(a[1], b[1])]);
    }

    // Advance the pointer associated with the interval that ends first.
    if (firstList[i][1] <= secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return overlaps;
}

// function identifyAllIntervalOverlaps(firstList, secondList) {
//   const overlaps = [];

//   let i, j;
//   i = j = 0;
//   while (i < firstList.length && j < secondList.length) {
//     let a_overlaps_b =
//       firstList[i][0] >= secondList[j][0] &&
//       firstList[i][0] <= secondList[j][1];

//     let b_overlaps_a =
//       secondList[j][0] >= firstList[i][0] &&
//       secondList[j][0] <= firstList[i][1];

//     // If there's an overlap, add the overlap.
//     if (a_overlaps_b || b_overlaps_a) {
//       overlaps.push([
//         Math.max(firstList[i][0], secondList[j][0]),
//         Math.min(firstList[i][1], secondList[j][1]),
//       ]);
//     }

//     // Advance the pointer associated with the interval that ends first.
//     if (firstList[i][1] <= secondList[j][1]) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return overlaps;
// }
// function identifyAllIntervalOverlaps(firstList, secondList) {
//   const overlaps = [];

//   let i, j;
//   i = j = 0;
//   while (i < firstList.length && j < secondList.length) {
//     let start = Math.max(firstList[i][0], secondList[j][0]);
//     let end = Math.min(firstList[i][1], secondList[j][1]);

//     if (start <= end) {
//       overlaps.push([start, end]);
//     }

//     // Advance the pointer associated with the interval that ends first.
//     if (firstList[i][1] <= secondList[j][1]) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return overlaps;
// }
console.log(
  identifyAllIntervalOverlaps(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);
