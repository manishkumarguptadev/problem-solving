package string;

import java.util.List;
import java.util.stream.Collectors;

public class Join {

    static String join(final List<String> values, final String delimiter) {
        var sb = new StringBuilder();
        for (int i = 0; i < values.size(); i++) {
            sb.append(values.get(i));
            // No separator after last occurrence
            if (i < values.size() - 1) {
                sb.append(delimiter);
            }
        }
        return sb.toString();
    }

    static String joinStrings(final List<String> values, final String delimiter) {
        return values.stream().collect(Collectors.joining(delimiter));
    }

    public static void main(String[] args) {

    }

}
