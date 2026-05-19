package string;

import java.util.Scanner;

class RomanToDecimal {
    static int value(char ch) {
        if (ch == 'M')
            return 1000;
        if (ch == 'D')
            return 500;
        if (ch == 'C')
            return 100;
        if (ch == 'L')
            return 50;
        if (ch == 'X')
            return 10;
        if (ch == 'V')
            return 5;
        if (ch == 'I')
            return 1;
        return -999;
    }

    public static void romanToDecimal() {
        int i, char_val, nextchar_val, sum = 0;
        String s;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a roman number in UpperCase");
        s = sc.nextLine();
        s = s.toUpperCase();
        s = s.trim();
        for (i = 0; i < s.length(); i++) {
            char_val = value(s.charAt(i));
            if (s.length() > (i + 1)) {
                nextchar_val = value(s.charAt(i + 1));
                if (char_val >= nextchar_val)
                    sum += char_val;
                else {
                    sum += nextchar_val - char_val;
                    i++;
                }
            } else
                sum += char_val;
        }
        System.out.println("Value = " + sum);
        sc.close();
    }

    public static void main(String[] args) {

    }
}
