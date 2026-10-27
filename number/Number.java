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

    public static void evenOdd() {
        int i, num;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        num = sc.nextInt();
        if (num % 2 == 0) {
            System.out.println(num + " is even");
        } else {
            System.out.println(num + " is odd");
        }

    }

    public static void printOdd() {
        int i, n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        n = sc.nextInt();
        for (i = 1; i <= n; i = i + 2)
            System.out.println(i);
    }

    public static long factorial(int num) {
        if (num == 0 || num == 1)
            return 1;
        long fact = 1;
        for (int i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    }

    // A number is said to be Special if the sum of the factorial of its digits
    // is equal to the original number.
    // Ex – 145 1! + 4! + 5! = 1 + 24 + 125 = 145
    void isSpecial(int n) {
        int r, copy = n;
        long sum = 0;
        while (n != 0) {
            r = n % 10;
            sum += factorial(r); // Calling function factorial(int n)
            n = n / 10;
        }
        if (sum == copy)
            System.out.println("Yes, it is a special number");
        else
            System.out.println("No, it is not a special number");
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

    public static int factors(int n) {
        int f = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0)
                f++;
        }
        return f;

    }

    boolean isPrime1(int num) {
        if (num <= 1)
            return false;
        int f = 0;
        for (int i = 1; i <= num; ++i) {
            if (num % i == 0)
                f++; // Counting number of factors of n
        }
        if (f == 2) // If number of factors is 2 then it is a prime
            return true;
        else
            return false;
    }

    boolean isPrime2(int num) {
        if (num <= 1)
            return false;
        boolean isPrime = true;
        for (int i = 2; i <= num - 1; i++) {
            if (num % i == 0)
                isPrime = false;
        }
        return isPrime;
    }

    boolean isPrime3(int num) {
        if (num <= 1)
            return false;
        for (int i = 2; i < num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    boolean isPrime4(int num) {
        if (num <= 1)
            return false;
        int sqrt = (int) Math.sqrt(num);
        for (int i = 2; i <= sqrt; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    // A number is said to be PERFECT if sum of all its factors(including 1
    // and excluding itself) is equal to the number.
    // eg. 6 = 1+2+3
    // 28 = 1+2+4+7+14
    public static void isPerfect(int n) {
        int sum = 0;

        for (int i = 1; i < n; i++) {
            if (n % i == 0)
                sum += i;
        }
        if (sum == n)
            System.out.println("Yes, it is a perfect number");
        else
            System.out.println("No, it is not a perfect number");
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

    // Start the multiplication table of Larger number using lar
    // variable. The first occurrence where lar gets completely divided by
    // the smaller number will be the LCM
    public static void lcm(int a, int b) {
        int i = 2, lar, sm;
        lar = a > b ? a : b; // Finding larger among a and b
        sm = a < b ? a : b; // Finding the smaller among a and b
        while (true) {
            if (lar % sm == 0) {
                System.out.println("LCM= " + lar);
                break;
            }
            lar = lar * i;
            i++;
        }
    }

    public static void main(String[] args) {
        perfectSquare();
    }
}
