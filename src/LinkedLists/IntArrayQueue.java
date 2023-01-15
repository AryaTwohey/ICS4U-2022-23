package LinkedLists;


public class IntArrayQueue {
    private Integer[] queue;
    private int front = -1;
    private int rear = -1;
    private int size = 0;


    public IntArrayQueue(int size){
        queue = new Integer[size];
        front = -1;
        rear=-1;
        size = 0;
    }
    
    public boolean isEmpty(){
        return size == 0;
    }
   public void clear(){
    queue = new Integer[size];
    
   }
   public boolean enqueue(int el){

    if(rear != queue.length -1){
        rear++;

        queue[rear] = el;
        size++;
        return true;
    }
    return false;
}

    public boolean dequeue(){
        int x = 0;
        if(size != 0){
            front++;

            x = queue[front];
            size++;
            return true;
        }
        return false;
   }
   public int peek(){

        int response = 0;
            if(!isEmpty()){
                response = queue[0];
                return response;
            }
            return -1;
   }
public  int getSize(){
    return queue.length;
}

}
 