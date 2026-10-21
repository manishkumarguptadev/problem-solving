package string;

public class FindSubstringPositions {
    public static void findSubstringPositions(String mainString, String substring) {
        int lastIndex = 0;
        while (lastIndex != -1) {
            lastIndex = mainString.indexOf(substring, lastIndex);
            if (lastIndex != -1) {
                System.out.println("The substring is at position: " + lastIndex);
                lastIndex++;
            }
        }
    }

    public static void main(String[] args) {
        findSubstringPositions("needed", "ed");
    }
}
