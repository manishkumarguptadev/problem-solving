package matrix;

public class Equal {

    public static boolean areEqual(int[][] mat1, int[][] mat2) {
        int r1, c1, r2, c2;
        c1 = mat1[0].length;
        r1 = mat1.length;
        c2 = mat2[0].length;
        r2 = mat2.length;

        if (r1 == r2 && c1 == c2) {
            for (int i = 0; i < r1; i++) {
                for (int j = 0; j < c1; j++) {
                    if (mat1[i][j] != mat2[i][j]) {
                        return false;
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        int mat1[][] = { { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 } };
        int mat2[][] = { { 1, 20, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 } };

        if (areEqual(mat1, mat2))
            System.out.println("Yes, they are equal");
        else
            System.out.println("No, they are not equal");
    }
}
