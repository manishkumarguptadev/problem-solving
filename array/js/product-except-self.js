// const productExceptSelf = (nums) => {
//   const n = nums.length;
//   const result = [];

//   result[0] = 1;
//   for (let i = 1; i < n; i++) {
//     result[i] = result[i - 1] * nums[i - 1];
//   }

//   let rightProduct = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     result[i] *= rightProduct;
//     rightProduct *= nums[i];
//   }

//   return result;
// };
const productExceptSelf = (nums) => {
  const n = nums.length;
  const result = [];

  let leftProduct = 0;
  for (let i = 0; i < n.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};
