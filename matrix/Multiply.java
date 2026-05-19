package matrix;

public class Multiply {

    public static int[][] multiply(int[][] mat1, int[][] mat2) {
        int r1, r2, c2;
        r1 = mat1.length;
        r2 = mat2.length;
        c2 = mat2[0].length;
        int product[][] = new int[r1][c2];
        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c2; j++) {
                product[i][j] = 0;
                for (int k = 0; k < r2; k++) // or use c1
                    product[i][j] = product[i][j] + mat1[i][k] * mat2[k][j];
            }
        }
        return product;
    }

    public static void main(String[] args) {
        int r1, c1, r2, c2;
        int mat1[][] = { { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 } };
        int mat2[][] = { { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 } };

        c1 = mat1[0].length;
        r1 = mat1.length;
        c2 = mat2[0].length;
        r2 = mat2.length;

        if (c1 == r2) {
            int[][] product = multiply(mat1, mat2);
            for (int i = 0; i < r1; i++) {
                for (int j = 0; j < c2; j++)
                    System.out.print(product[i][j] + " ");
                System.out.println();
            }
        } else {
            System.out.println("Matrix cannot be multiplied");
        }

    }

}
