
public class Stack {

    int top = -1;
    int maxSize = 256;
    int[] items = new int[256];

    boolean isFull() {
        return top == maxSize - 1;
    }

    boolean isEmpty() {
        return top == -1;
    }

    void push(int item) {
        if (isFull())
            throw new Error("stack overflow");

        top++;
        items[top] = item;

    }

    public static void main(String[] args) {
        Stack stack = new Stack();
        System.out.println(stack.isFull());
        System.out.println(stack.isEmpty());
        stack.push(3);
        System.out.println(stack.isFull());
        System.out.println(stack.isEmpty());

    }
}
