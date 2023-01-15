package LinkedLists;

public class IntLinkedList {

    private IntNode head;
    private int manyItems;
 
    public IntLinkedList() {
       this.head = null;
       this.manyItems = 0;
    }
 
    public boolean add(Integer data) {
       IntNode temp = new IntNode(data);
 
       if (head == null) {
          head = temp;
          manyItems++;
       } else {
          IntNode curr = head;
          while (curr.getLink() != null)
             curr = curr.getLink();
 
          curr.setLink(temp);
          manyItems++;
       }
 
       return true;
    }
 
    public Integer removeFront() {
       if (head == null)
          return null;
       else {
          Integer temp = head.getData();
          head = head.getLink();
          manyItems--;
          return temp;
       }
    }
 
    public boolean addFront(Integer data) {
       head = new IntNode(data, head);
       manyItems++;
       return true;
    }
 
    public boolean add(int index, Integer data) {
       if (index > manyItems)
          throw new IndexOutOfBoundsException("Index " + index + " is not allowed, maz index is " + manyItems);
 
       if (index == 0)
          addFront(data);
       else {
          IntNode curr = head;
          for (int i = 0; i < index - 1; i++) {
             curr = curr.getLink();
          }
 
          curr.setLink(new IntNode(data, curr.getLink()));
          manyItems++;
       }
 
       return true;
    }
 
    public int size() {
       return manyItems;
    }
 
    public boolean isEmpty() {
       return head == null;
    }
 
    public Integer remove(Integer data) {
       if (head == null) {
          return null;
       }
 
       if (head != null && head.getData() == data) {
          head = head.getLink();
          manyItems--;
          return data;
       } else {
          IntNode curr = head;
          while (curr.getLink() != null && curr.getLink().getData() != data) {
             curr = curr.getLink();
          }
 
          if (curr.getLink() != null) {
             curr.setLink(curr.getLink().getLink());
             manyItems--;
             return data;
          }
          return null;
       }
    }
 
    public String toString() {
       String result = "{";
       IntNode curr = head;
 
       while (curr != null) {
          result += curr.getData() + ", ";
          curr = curr.getLink();
       }
 
       if (!isEmpty()) {
          result = result.substring(0, result.length() - 2);
       }
       result += "}";
 
       return result;
    }
 
    public Integer get(int index) {
       if (index < 0)
          throw new IndexOutOfBoundsException("Invalid index " + index + " must be greater than 0");
 
       if (head == null)
          throw new IllegalStateException("Can't get an element from an empty list.");
       else if (index > size()) {
          throw new IndexOutOfBoundsException("Invalid index " + index + " max index is " + (size() - 1));
       } else {
          IntNode curr = head;
          for (int i = 0; i < index; i++) {
             curr = curr.getLink();
          }
 
          return curr.getData();
       }
    }
 }