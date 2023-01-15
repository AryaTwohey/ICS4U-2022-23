package LinkedLists;

import javax.print.attribute.standard.Sides;

public class IntArrayQueueTest {
    public static void main(String[] args) {
        
        IntArrayQueue queue = new IntArrayQueue(10);

        System.out.println("Adding Number: " + queue.enqueue(5));
        
        System.out.println("Adding Number: "+queue.enqueue(2));
        System.out.println("Adding Number: "+queue.enqueue(11));
        System.out.println("Adding Number: "+queue.enqueue(12));
        System.out.println("Adding Number: "+queue.enqueue(1000));


       System.out.println("Size:" + queue.getSize());
        System.out.println("Dequeing:  " + queue.dequeue());
        System.out.println("Size: "+queue.getSize());
        System.out.println("Calling Peak: " + queue.peek());


        System.out.println("Calling peak " + queue.peek());

        System.out.println("Calling Deque: " + queue.dequeue());
        System.out.println(queue.dequeue());
    }
}
