package digits;

import java.util.Scanner;

public class Digits {

    // a. Number of digits in the number
    public static void count(int num) {
        int count = 0;
        while (num != 0) {
            count++;
            num = num / 10;
        }
        System.out.println("Number of digits=" + count);
    }

    // b. Sum and product of the digits of the number
    public static void sum(int num) {
        int rem, sum = 0, product = 1;
        while (num != 0) {
            rem = num % 10;
            sum = sum + rem;
            product = product * rem;
            num = num / 10;
        }
        System.out.println("Sum of digits=" + sum);
        System.out.println("Product of digits=" + product);
    }

    public static void reverse(int num) {
        int rem, rev = 0;
        while (num != 0) {
            rem = num % 10;
            rev = rev * 10 + rem;
            num = num / 10;
        }
        System.out.println("Reverse of number =" + rev);
    }

    public static void firstAndLast(int n) {
        int f, c = 0, copy;

        copy = n;
        System.out.println("Last digit= " + (n % 10));
        while (n != 0) {
            c++; // Counting number of digits
            n = n / 10;
        }
        /*
         * Converting it to int as
         * Math.pow returns a double value
         */
        f = copy / (int) Math.pow(10, c - 1);
        System.out.println("First digit= " + f);
    }

    public static String decimalToBinary1(int decimal) {
        if (decimal == 0) {
            return "0";
        }
        StringBuilder binary = new StringBuilder();
        while (decimal > 0) {
            int remainder = decimal % 2;
            binary.insert(0, remainder);
            decimal = decimal / 2;
        }
        return binary.toString();
    }

    public static void decimalToBinary(int num) {
        int rem, i = 0;
        int bin = 0;
        while (num != 0) {
            rem = num % 2;
            bin = bin + rem * (int) Math.pow(10, i); // Finding binary equivalent
            num = num / 2;
            i++;
        }
        System.out.println("Its Binary equivalent =" + bin);
    }

    public static void binaryToDecimal(int n) {
        int r, c = 0;
        double dec = 0;
        while (n != 0) {
            r = n % 10;
            dec = dec + r * Math.pow(2, c++);
            n = n / 10;
        }
        System.out.println("Its Decimal equivalent=" + (int) dec);
    }

    public static void isPalindrome(int n) {
        int r, rev = 0, copy = n;
        while (n != 0) {
            r = n % 10;
            rev = rev * 10 + r; // to reverse the number
            n = n / 10;
        }
        if (rev == copy)
            System.out.println("YES, It is a palindrome");
        else
            System.out.println("NO, It is not a palindrome");
    }

    // A number is called Automorphic number if and only if its square ends
    // in the same digits as the number itself.
    // eg. 76 because 76^2= 5776 , 25 because 25^2= 625
    public static void isAutomorphic(int n) {
        int sq, copy, c = 0;

        sq = n * n;
        copy = n;
        // counting number of digits in n
        while (n != 0) {
            c++;
            n = n / 10;
        }
        if (sq % Math.pow(10, c) == copy)
            System.out.println("Yes, It is an automorphic number");
        else
            System.out.println("No, It is not an automorphic number");
    }

    // A number is an Armstrong Number or Narcissistic number if it is
    // equal to the sum of its own digits raised to the power of the number
    // of digits.
    // An example: 371 = 3^3 + 7^3 + 1^3 = 27 + 343 + 1
    // Another: 1634 = 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256
    public static void isArmstrong(int num) {
        int count = 0, sum = 0, copy1, copy2, rem;

        copy1 = num;
        copy2 = num;

        // Calculating number of digits
        while (copy1 != 0) {
            count++;
            copy1 = copy1 / 10;
        }
        // Calculating sum of digits raised to power c
        while (copy2 != 0) {
            rem = copy2 % 10;
            sum += (int) Math.pow(rem, count);
            copy2 = copy2 / 10;
        }
        if (sum == num)
            System.out.println("Yes, it is an Armstrong number");
        else
            System.out.println("No, it is not an Armstrong number");
    }

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

    // A number is said to be a happy number, if the sum of square of its
    // digits are calculated till a single digit recursively by adding the sum of
    // the digits after every addition.
    // If the single digit comes out to be 1, then the number is a happy
    // number.
    // For exampleNumber= 19
    // 1^2 + 9^2 = 82
    // 8^2 + 2^2 = 68
    // 6^2 + 8^2 = 100
    // 1^2 + 0^2 + 0^2 = 1
    // This is a Happy Number
    public static void isHappy(int n) {
        int sum, r, copy;

        while (n > 9) {
            copy = n;
            sum = 0;
            while (copy != 0) {
                r = copy % 10;
                sum += r * r;
                copy = copy / 10;
            }
            n = sum;
        }
        if (n == 1)
            System.out.println("Yes, it is a happy number");
        else
            System.out.println("No, it is not a happy number");
    }

    public static void main(String[] args) {
        isPalindrome(2382);
    }
}