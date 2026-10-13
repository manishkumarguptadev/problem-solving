package string;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Capitalize {
    static String capitalize(String input) {
        char[] inputChars = input.toCharArray();
        boolean capitalizeNextChar = true;
        for (int i = 0; i < inputChars.length; i++) {
            var currentChar = inputChars[i];
            if (Character.isWhitespace(currentChar)) {
                capitalizeNextChar = true;
            } else {
                if (capitalizeNextChar && Character.isLetter(currentChar)) {
                    inputChars[i] = Character.toUpperCase(currentChar);
                    capitalizeNextChar = false;
                }
            }
        }
        return new String(inputChars);
    }

    static List<String> capitalize(List<String> words) {
        List<String> capitalizedWords = new ArrayList<>();
        for (String word : words)
            capitalizedWords.add(capitalizeWord(word));
        return capitalizedWords;
    }

    static String capitalizeWord(String word) {
        if (word.isEmpty())
            return "";
        String upperCaseFirstChar = word.substring(0, 1).toUpperCase();
        String remainingChars = word.substring(1);
        return upperCaseFirstChar + remainingChars;
    }

    static List<String> capitalizeWithStream(List<String> words) {
        return words.stream().map(word -> capitalizeWord(word)).collect(Collectors.toList());
    }

    static List<String> capitalizeSpecial(List<String> words,
            List<String> ignorableWords) {
        List<String> capitalizedWords = new ArrayList<>();
        for (String word : words) {
            if (word.length() > 0) {
                if (ignorableWords.contains(word))
                    capitalizedWords.add(word);
                else
                    capitalizedWords.add(capitalizeWord(word));
            }
        }
        return capitalizedWords;
    }
}