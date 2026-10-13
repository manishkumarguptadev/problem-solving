package string;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class Anagram {
    // static Map<Character, Integer> calcCharFrequencies(String input) {
    // Map<Character, Integer> charCounts = new TreeMap<>();
    // for (char currentChar : input.toUpperCase().toCharArray()) {
    // charCounts.putIfAbsent(currentChar, 0);
    // charCounts.computeIfPresent(currentChar, (key, value) -> value + 1);
    // }
    // return charCounts;
    // }
    static Map<Character, Integer> calcCharFrequencies(String input) {
        Map<Character, Integer> charCounts = new HashMap<Character, Integer>();
        for (char currentChar : input.toUpperCase().toCharArray()) {
            Integer currentValue = charCounts.get(currentChar);
            if (currentValue == null) {
                charCounts.put(currentChar, 1);
            } else {
                charCounts.put(currentChar, currentValue++);
            }
        }
        return charCounts;
    }

    static boolean areAnagrams(String str1, String str2) {
        Map<Character, Integer> charCounts1 = calcCharFrequencies(str1);
        Map<Character, Integer> charCounts2 = calcCharFrequencies(str2);
        return charCounts1.equals(charCounts2);
    }
}
