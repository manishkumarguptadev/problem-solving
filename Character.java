public class Character {
    public static void isVowel(char c) {

        switch (c) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                System.out.println("It is a vowel");
                break;
            default:
                System.out.println("It is not a vowel");
        }
    }

    public static void main(String[] args) {

    }

}
