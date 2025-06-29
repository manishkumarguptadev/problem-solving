package string;

public class Rotations {

    static boolean containsRotation(final String str1, final String str2) {
        final String doubledStr1 = (str1 + str1).toLowerCase();
        return doubledStr1.indexOf(str2.toLowerCase()) != -1;
    }
}