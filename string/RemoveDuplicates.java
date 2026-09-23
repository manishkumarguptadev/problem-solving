package string;

import java.util.HashSet;
import java.util.stream.Collectors;

public class RemoveDuplicates {
    static String removeDuplicates(String input) {
        var result = new StringBuilder();
        var alreadySeen = new HashSet<>();
        for (int i = 0; i < input.length(); i++) {
            char currentChar = input.charAt(i);
            if (!alreadySeen.contains(currentChar)) {
                alreadySeen.add(currentChar);
                result.append(currentChar);
            }
        }
        return result.toString();
    }

    static String removeDuplicatesStream(final String input) {
        return input.chars().distinct().mapToObj(i -> (char) i + "").collect(Collectors.joining());
    }
}
