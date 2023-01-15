package LinkedLists;

public class TestLinkedList {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
 testRemoveNodes();
 if(!testGetNodes()){
    System.out.println("Test Failed: testGetNodes()");
    testFailed++;

 }else{
    testPassed++;
 }
   }

    private static void testAddNodes() {

        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);

        list.addFront(4);
        list.addFront(5);
        list.add(1,6);

    }

    private static boolean testRemoveNodes(){
        IntLinkedList list = new IntLinkedList();
        Integer temp = list.remove(6);
       if(temp != null){
        return false;
       }

    
        
        list.remove(6);
        System.out.println(list);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);
        list.remove(3);
        System.out.println(list);
        list.remove(1);
        list.remove(5);
        System.out.println(list);
        return false;
    }


    public void testGet(){
        testGetNodes();
        
        
    }
    private static IntLinkedList prepareLinkedList(){
        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        return list;
    }
    private static boolean testGetNodes() {
        IntLinkedList list = prepareLinkedList();
        Integer i =list.get(0);
        if(i != 1){
 
 return false;
        }
 i= list.get(list.size()-1);
 if(i != 5){
    return false;
 }
 i = list.get(2);
 if(i !=3){
    return false;
 }


      return false;
}

}