package LinkedLists;

public class IntLLQue {

    private IntLinkedList data;

    public IntLLQue(){
        data = new IntLinkedList();
    }

    public boolean isEmpty(){
        return data.isEmpty();
    }
    public void clear(){
        data = new IntLinkedList();
    }

    public boolean enqueue(Integer el){
        return data.add(el);
    }

    public Integer dequeue(){
        return data.removeFront();

    }

    public Integer peek(){
      return data.get(0);
    }
    
}
