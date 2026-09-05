// A magic number is a number that eventually reaches the value 1
// when the sum of its digits is repeatedly calculated.
const isMagicNumber = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum === 1;
};
// A number is said to be a magic number, if the sum of its digits is
    // calculated till a single digit recursively by adding the sum of the digits
    // after every addition.
    // If the single digit comes out to be 1, then the number is a magic
    // number.
    // For exampleNumber= 50113
    // => 5+0+1+1+3=10
    // => 1+0=1
    // This is a Magic Number
    public static void isMagic(int n) {
        int sum, r, copy;
        /*
         * Finding sum of digits repeatedly if n is not a single
         * digit number
         */
        while (n > 9) {
            copy = n;
            sum = 0;
            while (copy != 0) {
                r = copy % 10;
                sum += r; // Sum of digits
                copy = copy / 10;
            }
            n = sum;
        }
        if (n == 1)
            System.out.println("Yes, it is a magic number");
        else
            System.out.println("No, it is not a magic number");
    }