package digits;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Digits {
    // a. Number of digits in the number
    // b. Sum and product of the digits of the number
    public static void sum(int n) {
        int sum = 0, product = 1, r, c = 0;
        while (n != 0) {
            r = n % 10;
            sum = sum + r;
            product = product * r;
            c++;
            n = n / 10;
        }
        System.out.println("Number of digits=" + c);
        System.out.println("Sum of digits=" + sum);
        System.out.println("Product of digits=" + product);
    }

    public static void decimalToBinary(int n) {
        int r, c = 0;
        double bin = 0;
        while (n != 0) {
            r = n % 2;
            bin = bin + r * Math.pow(10, c++); // Finding binary equivalent
            n = n / 2;
        }
        System.out.println("Its Binary equivalent =" + (int) bin);
    }

    public static void binaryToDecimal(int n) {
        int r, c = 0;
        double bin = 0;
        while (n != 0) {
            r = n % 10;
            bin = bin + r * Math.pow(2, c++);
            n = n / 10;
        }
        System.out.println("Its Decimal equivalent=" + (int) bin);
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
    public static void isArmstrong(int n) {
        int c = 0, sum = 0, copy1, copy2, r;

        copy1 = n;
        copy2 = n;
        // Calculating number of digits
        while (n != 0) {
            c++;
            n = n / 10;
        } // Calculating sum of digits raised to power c
        while (copy1 != 0) {
            r = copy1 % 10;
            sum += (int) Math.pow(r, c);
            copy1 = copy1 / 10;
        }
        if (sum == copy2)
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