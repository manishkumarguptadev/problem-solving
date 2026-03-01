
import java.util.Arrays;

public class Stack {

    private static final int DEFAULT_SIZE = 10;
    private int size;
    private int top;
    private int[] items;

    public Stack(int size) {
        this.size = size;
        this.top = -1;
        this.items = new int[size];
    }

    public Stack() {
        this(DEFAULT_SIZE);
    }

    public int size() {
        return top + 1;
    }

    public boolean isFull() {
        return top == size - 1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public void push(int item) {
        if (isFull())
            throw new StackOverflowError();

        top++;
        items[top] = item;
    }

    public int pop() {
        if (isEmpty())
            throw new IllegalStateException();

        int item = items[top];
        item--;
        return item;
    }

    public int peek() {
        if (isEmpty())
            throw new IllegalStateException();

        return items[top];
    }

    @Override
    public String toString() {
        var content = Arrays.copyOfRange(items, 0, top + 1);
        return Arrays.toString(content);
    }

    public static void main(String[] args) {
        Stack stack = new Stack();
        System.out.println(stack.isFull());
        System.out.println(stack.isEmpty());
        stack.push(3);
        stack.push(3);
        stack.push(3);
        System.out.println(stack);
        stack.push(3);
        System.out.println(stack.isFull());
        System.out.println(stack.isEmpty());

    }
}
