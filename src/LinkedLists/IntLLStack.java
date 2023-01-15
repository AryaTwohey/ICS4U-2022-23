package LinkedLists;


public class IntLLStack {
    private IntNode head;
    private int top = -1;

    public boolean push(Integer el){
        head = new IntNode(el, head);
        top++;
        return true;
    }

    public Integer pop() {
        if(head==null){
            return null;
        } else {
            Integer temp = head.getData();
            head = head.getLink();
            top--;
            return temp;
        }
    }

    public boolean isEmpty(){
        return head == null;
    }

    public Integer peek(){
        if (head==null){
            return null;
        } else {
        Integer temp = head.getData();
        return temp;
        }
    }

    public Integer search(){
        if(isEmpty()){
            return -1;
        } else {
            return top;
        }
    }

    public Integer get(int index){
        return 0;
    }

    public String toString() {
        String result = "{";
        IntNode curr = head;

        while(curr != null){
            result += curr.getData() + ", ";
            curr = curr.getLink();
        }

        if(!isEmpty()){
            result = result.substring(0, result.length()-2);
        }
        result += "}";

        return result;
    }
}





