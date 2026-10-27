package tree.java;

public class BinarySearchTree {
    private class Node {

        private int value;
        private Node left;
        private Node right;

        public Node(int value) {
            this.value = value;
        }

    }

    private Node root;

    public BinarySearchTree() {
        this.root = null;
    }

    public void insert(int value) {
        Node node = new Node(value);
        if (root == null) {
            root = node;
            return;
        }
        Node curr = root;
        while (true) {
            if (node.value == curr.value)
                return;
            if (node.value < curr.value) {
                if (curr.left == null) {
                    curr.left = node;
                    return;
                }
                curr = curr.left;
            } else {
                if (curr.right == null) {
                    curr.right = node;
                    return;
                }
                curr = curr.right;
            }
        }
    }

    public boolean contains(int value) {
        if (root == null)
            return false;
        Node curr = root;
        while (curr != null) {
            if (value < curr.value) {
                curr = curr.left;
            } else if (value > curr.value) {
                curr = curr.right;
            } else {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        BinarySearchTree bst = new BinarySearchTree();
        bst.insert(6);
        bst.insert(60);
        bst.insert(4);
        System.out.println(bst.contains(602));

    }
}
