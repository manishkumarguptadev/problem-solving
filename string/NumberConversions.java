package string;

public class NumberConversions {

    public static int sumDigits(String number) {
        int sum = 0;
        for (int i = 0; i < number.length(); i++) {
            int current = number.charAt(i);
            if (current >= 48 && current <= 57) {
                current = current - '0';
                sum += current;
            }
        }
        return sum;
    }

    public static boolean isBinaryNumber(String number) {
        for (int i = 0; i < number.length(); i++) {
            char currentChar = number.charAt(i);
            if (!(currentChar == '0' || currentChar == '1'))
                return false;
        }
        return true;
    }

    public static boolean isHexNumber(String number) {
        number = number.toUpperCase();
        for (int i = 0; i < number.length(); i++) {
            char currentChar = number.charAt(i);
            if (!(Character.isDigit(currentChar) || (currentChar >= 'A' && currentChar <= 'F')))
                return false;
        }
        return true;
    }

    public static int binaryToDecimal(String number) {
        if (!isBinaryNumber(number))
            throw new IllegalArgumentException(number + " is not a binary number");
        int decimalValue = 0;
        for (int i = 0; i < number.length(); i++) {
            int current = number.charAt(i) - '0';
            decimalValue = decimalValue * 2 + current;
        }
        return decimalValue;
    }

    public static int hexToDecimal(String number) {
        if (!isHexNumber(number))
            throw new IllegalArgumentException(number + " is not a hex number");
        int decimalValue = 0;
        for (int i = 0; i < number.length(); i++) {
            char currentChar = number.charAt(i);
            int value = Character.getNumericValue(currentChar);
            decimalValue = decimalValue * 16 + value;
        }
        return decimalValue;
    }

    public static void main(String[] args) {
        System.out.println(isHexNumber("101fa1"));
    }
}
