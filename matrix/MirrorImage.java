package matrix;

public class MirrorImage {

    public static void mirrorImage(int[][] mat) {
        int r, c, mir[][];
        r = mat.length;
        c = mat[0].length;
        mir = new int[r][c];
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++)
                mir[i][j] = mat[i][c - j - 1];
        }
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++)
                mat[i][j] = mir[i][j];
        }
    }

    public static void main(String[] args) {

        int mat[][] = { { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 } };

        mirrorImage(mat);

        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[i].length; j++) {
                System.out.print(mat[i][j] + "  ");

            }
            System.out.println();
        }

    }

}
