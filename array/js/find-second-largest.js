function findSecondLargest() {
  let i, lar, slar;
  let arr = [56, 112, 6, 89, 63, 78, 14, 65, 77, 110];
  lar = arr[0];
  slar = Number.MIN_SAFE_INTEGER; // for all same element array
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > lar) {
      slar = lar;
      lar = arr[i];
    } else if (arr[i] > slar && arr[i] < lar) {
      slar = arr[i];
    }
  }
  console.log(
    slar === Number.MIN_SAFE_INTEGER
      ? "No second largest"
      : "Second Largest = " + slar
  );
}
findSecondLargest();
