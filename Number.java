import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Number {

    public static void intDecimal() {
        double n, I, D;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        n = sc.nextDouble();
        I = Math.floor(n); // Integer part
        D = n - I; // Decimal part
        System.out.println("Integer part= " + I);
        System.out.println("Decimal part= " + D);
        sc.close();
    }

    public static void perfectSquare() {
        int n;
        double sq, I, D;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        n = sc.nextInt();/*
                          * Calculating integer and decimal part of square root of n
                          * If the decimal part is zero then n is a perfect square
                          */
        sq = Math.sqrt(n); // Square root of n
        I = Math.floor(sq); // Integer part
        D = sq - I; // Decimal part
        if (D == 0.0)
            System.out.println("It is a perfect square");
        else
            System.out.println("It is not a perfect square");
        sc.close();
    }

    public static void maximumOfThree() {
        int a, b, c;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three integers");
        a = sc.nextInt();
        b = sc.nextInt();
        c = sc.nextInt();
        if (a > b && a > c)
            System.out.println("Maximum= " + a);
        else if (b > a && b > c)
            System.out.println("Maximum= " + b);
        else
            System.out.println("Maximum= " + c);
        sc.close();
    }

    public static void calculator() {
        int a, b, op;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers");
        a = sc.nextInt();
        b = sc.nextInt();
        System.out.println("Enter an operator among the following:");
        System.out.println("+ for addition");
        System.out.println("- for subtraction");
        System.out.println("* for multiplication");
        System.out.println("/ for division");
        op = sc.next().charAt(0); /*
                                   * To enter a character using scanner
                                   * class
                                   */
        switch (op) {
            case '+':
                System.out.println("SUM= " + (a + b));
                break;
            case '-':
                System.out.println("DIFFERENCE= " + (a * b));
                break;
            case '*':
                System.out.println("PRODUCT= " +
                        (a * b));
                break;
            case '/':
                System.out.println("QUOTIENT= " +
                        ((double) a / b));
                break;
            default:
                System.out.println("INVALID CHOICE");
        }
        sc.close();
    }

    public static void printOdd() {
        int i, n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        n = sc.nextInt();
        for (i = 1; i <= n; i = i + 2)
            System.out.println(i);
    }

    public static void factorial() {
        int i, n;
        long fact = 1;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        n = sc.nextInt();
        for (i = 1; i <= n; i++) {
            fact = fact * i; // to calculate factorial
        }

        System.out.println("Factorial =" + fact);
    }

    public static void fibonacci(int n) {
        long c, a = 0, b = 1;

        System.out.println("First " + n + " terms of fibonacci series are");
        // Printing firse two terms
        System.out.print(a + " " + b + " ");
        /*
         * As we have already printed first two
         * terms, we are left to print n-2 terms
         */
        for (int i = 1; i <= n - 2; i = i + 1) {
            c = a + b; // Sum of previous two terms
            System.out.print(c + " ");
            a = b;
            b = c;
        }
    }

    /*
     * Sum can also be calculated by using the formula n*(n+1)/2.
     * By this, loop is not required for calculating the sum
     */
    public static void sum() {
        int i, n;
        long sum = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        n = sc.nextInt();
        for (i = 1; i <= n; i++) {
            sum = sum + i; // to calculate sum
        }
        System.out.println("Sum =" + sum);
    }

    public static void factors(int n) {
        int f = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0)
                f++;
        }
        System.out.println("Total number of factors=" + f);

    }

    boolean isPrime1(int n) {
        int i, f = 0;
        for (i = 1; i <= n; ++i) {
            if (n % i == 0)
                f++; // Counting number of factors of n
        }
        if (f == 2) // If number of factors is 2 then it is a prime
            return true;
        else
            return false;
    }

    boolean isPrime(int n) {
        if (n <= 1)
            return false;
        int sqrt = (int) Math.sqrt(n);
        for (int i = 2; i <= sqrt; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }

    boolean twinPrimes(int a, int b) {
        // if( isPrime(a) && isPrime(b) && ((a-b)==2 || (b-a)==2)
        if (isPrime(a) && isPrime(b) && Math.abs(a - b) == 2)
            return true;
        else
            return false;
    }

    public static void lcmhcf(int a, int b) {
        int HCF = 1, LCM, sm;

        // Finding smallest between a and b using ternary operator
        sm = a < b ? a : b; // Ternary operator
        for (int i = 1; i <= sm; i++) {
            if (a % i == 0 && b % i == 0)
                HCF = i;
        }
        LCM = a * b / HCF;
        System.out.println("HCF=" + HCF);
        System.out.println("LCM=" + LCM);
    }

    public static void main(String[] args) {
        perfectSquare();
    }
}
