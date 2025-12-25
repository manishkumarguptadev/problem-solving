
import java.lang.classfile.components.ClassPrinter.ListNode;
import java.util.*;

public class SinglyLinkedList<T> {

	private class Node {
		private T data;
		private Node next;

		public Node(T data) {
			this.data = data;
			this.next = null;
		}
	}

	private Node head;
	private Node tail;
	private int size;

	// Constructor - initializes headNode and size
	public SinglyLinkedList() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	// Helper Function that checks if List is empty or not
	// O(1)
	public boolean isEmpty() {
		return (head == null);
	}

	public int size() {
		return size;
	}

	public int length() {
		int count = 0;
		Node curr = this.head;

		// Traverse the list till you reach end
		while (curr != null) {
			count++;
			curr = curr.next;
		}
		return count;
	}

	// the sum of all values present in the node

	// public void insertAtHead(T data) {
	// // Creating a new node and assigning it the new data value
	// Node newNode = new Node();
	// newNode.data = data;
	// // Linking head to the newNode's nextNode
	// newNode.nextNode = headNode;
	// headNode = newNode;
	// size++;
	// }

	public void addFirst(T data) {
		Node node = new Node(data);
		if (isEmpty()) {
			node.next = null;
			head = tail = node;
		} else {
			node.next = head;
			head = node;
		}
		size++;
	}

	public void addLast(T data) {
		Node node = new Node(data);
		node.next = null;

		if (isEmpty()) {
			head = tail = node;
		} else {
			tail.next = node;
			tail = node;
		}
		size++;
	}

	// Inserts new data at the end of the linked list
	// public void addLast(T data) {
	// Node node = new Node(data);
	// node.next = null;

	// if (isEmpty()) {
	// head = tail = node;
	// } else {
	// Node curr = this.head;
	// while (curr.next != null) {
	// curr = curr.next;
	// }
	// curr.next = node;
	// }
	// size++;
	// }

	// inserts data after the given prev data node
	public void addAfter(T data, T previous) {

		// Creating a new Node with value data
		Node node = new Node(data);
		// Start from head node
		Node curr = this.head;
		// traverse the list until node having data equal to previous is found
		while (curr != null && !curr.data.equals(previous)) {
			curr = curr.next;
		}
		// if such a node was found
		// then point our newNode to currentNode's nextElement
		if (curr != null) {
			node.next = curr.next;
			curr.next = node;
			size++;
		}
	}

	// Searches a value in the given list.
	public boolean search(T data) {
		// Start from first element
		Node curr = this.head;

		// Traverse the list till you reach end
		while (curr != null) {
			if (curr.data.equals(data))
				return true; // value found

			curr = curr.next;
		}
		return false; // value not found
	}

	public void deleteHead() {
		if (isEmpty()) {
			throw new NoSuchElementException();
		}

		if (head == tail) {
			head = tail = null;
		} else {
			head = head.next;
		}
		size--;
	}

	public void deleteTail() {
		if (isEmpty()) {
			throw new NoSuchElementException();
		}

		if (head == tail) {
			head = tail = null;
		} else {
			Node curr = head;
			while (curr.next != tail) {
				curr = curr.next;
			}
			curr.next = null;
			tail = curr;
		}
		size--;

	}

	// removes only the first occurrence of the value from the list
	public void deleteByValue(T data) {
		// if empty then simply return
		if (isEmpty())
			throw new NoSuchElementException();

		// Start from head node
		Node prev = null;
		Node curr = head;

		if (curr.data.equals(data)) {
			// data is at head so delete from head
			deleteHead();
			return;
		}
		// traverse the list searching for the data to delete
		while (curr != null) {
			// node to delete is found
			if (data.equals(curr.data)) {
				prev.next = curr.next;
				size--;
				return;
			}
			prev = curr;
			curr = curr.next;
		}
	}

	public void reverse() {
		Node prev = null;
		Node curr = head;
		Node next = null;
		while (curr != null) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		tail = head;
		head = prev;

	}

	public int[] toArray() {
		ArrayList<T>[] arr = new ArrayList<T>[size];
		int i = 0;
		Node curr = head;
		while (curr != null) {
			arr[i] = curr.data;
			i++;
			curr = curr.next;
		}
		return arr;
	}

	public void print() {
		// System.out.println(Arrays.toString(this.toArray()));
		System.out.println("\n");
		Node curr = this.head;
		while (curr != null) {
			System.out.print(curr.data + "    ");
			curr = curr.next;
		}

	}

	// fast slow
	public boolean detectLoopNaive() {
		Set<Node> visited = new HashSet<>();
		Node curr = this.head;
		while (curr != null) {
			// Cycle detected if the current node has already been visited.
			if (visited.contains(curr))
				return true;
			visited.add(curr);
			curr = curr.next;
		}
		return false;
	}

	// Using Floyd’s Cycle Detection Algorithm
	public boolean detectLoop() {
		Node slow = this.head;
		Node fast = this.head;

		while (slow != null && fast != null && fast.next != null) {
			slow = slow.next; // the slow pointer will jump 1 step
			fast = fast.next.next; // the fasr pointer will jump 2 steps

			// when the pointers become equal then there must be a loop
			if (slow == fast) {
				return true;
			}
		}
		return false;
	}

	public Object findMiddle() {
		// if list is empty, then return null
		if (isEmpty())
			return null;

		// both nodes start from the head
		Node mid = this.head;
		Node current = this.head;

		while (mid != null && current != null && current.next != null) {
			// current jumps 2 nodes on each iteration
			current = current.next.next;
			// if current is not null (end of list is not reached)
			if (current != null) {
				// then mid jumps 1 node
				// mid is always halfway behind current
				mid = mid.next;
			}
		}
		return mid.data;
	}

	public T getKthFromEnd(int k) {
		if (isEmpty())
			throw new IllegalStateException();
		if (k < 1)
			throw new IllegalArgumentException();
		Node kth = head;
		Node curr = head;
		for (int i = 1; i <= k - 1; i++) {
			curr = curr.next;
			if (curr == null)
				throw new IllegalArgumentException();
		}
		while (curr.next != null) {
			kth = kth.next;
			curr = curr.next;
		}
		return kth.data;
	}

	public static void main(String[] args) {
		SinglyLinkedList<Integer> list = new SinglyLinkedList<Integer>();
		for (int index = 15; index > 0; index--) {
			list.addFirst(index);
		}

		list.print();
		list.reverse();
		list.print();
		// System.out.println();
		// System.out.println(list.getKthFromEnd(15));

	}
}
