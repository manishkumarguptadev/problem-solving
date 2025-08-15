package string;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class ContainsUnique {
    static boolean containsUnique(String input) {
        char[] allCharsOfInput = input.toLowerCase().toCharArray();
        Set<Character> containedChars = new HashSet<>();
        for (char currentChar : allCharsOfInput) {
            if (containedChars.contains(currentChar))
                return false;
            containedChars.add(currentChar);
        }
        return true;
    }

    static boolean checkNoDuplicateCharsStreamV1(final String input) {
        return input.toLowerCase().chars().boxed().collect(Collectors.toSet()).size() == input.length();
    }

    boolean checkNoDuplicateCharsWithStreamOpt(final String input) {
        return input.toLowerCase().chars().distinct().count() == input.length();
    }
}
