function findLeastCommonNumber(a, b, c) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] === b[j] && b[j] === c[k]) {
      return a[i];
    }

    if (a[i] <= b[j] && a[i] <= c[k]) {
      i++;
    } else if (b[j] <= a[i] && b[j] <= c[k]) {
      j++;
    } else if (c[k] <= a[i] && c[k] <= b[j]) {
      k++;
    }
  }

  return -1;
}

function findLeastCommonNumber(a, b, c) {
  let seta = new Set(a);
  let setb = new Set(b);
  let arr = [];

  for (num of c) {
    if (seta.has(num) && setb.has(num)) {
      arr.push(num);
    }
  }

  return arr.length !== 0 ? Math.min(...arr) : -1;
}

let arr1 = [3, 4, 6, 7, 10, 25, 30, 63, 64];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 50];
let arr3 = [1, 3, 4, 6, 10, 14];
console.log("Least Common Number: " + findLeastCommonNumber(arr1, arr2, arr3));
