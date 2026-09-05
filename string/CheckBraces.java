package string;

public class CheckBraces {
    static boolean checkBraces(String input) {
        int openingCount = 0;
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch == '(') {
                openingCount++;
            } else if (ch == ')') {
                openingCount--;
                if (openingCount < 0)
                    return false;
            }
        }
        return openingCount == 0;
    }
}
