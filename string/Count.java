package string;

public class Count {

    public static int countVowels(String str) {
        str = str.toLowerCase(); // Convert the string to lower case to ignore case.
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {

    }
}
