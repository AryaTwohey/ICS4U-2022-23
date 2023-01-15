package LinkedLists;

public class IntArrayStack {

    private int top;

    private Integer[] stack;
    public IntArrayStack() {

        stack = new Integer[0];

        top = -1;

    }
    public Integer[] push(Integer data) {

        if (stack.length - top < 2) {
            Integer[] temp = new Integer[stack.length + 1];
            for (int i = 0; i < stack.length; i++) {
                temp[i] = stack[i];
            }
            stack = temp;
        }
        stack[++top] = data;
        return stack;
    }
    public Integer pop() {
        if (top < 0)
            return null;
        else {
            int remove = stack[top];
            Integer[] temp = new Integer[stack.length - 1];
            for (int i = 0, k = 0; i < stack.length; i++) {
                if (stack[i] != remove) {
                    temp[k] = stack[i];
                    k++;
                }
            }
            top--;
            stack = temp;
            return remove;
        }

    }



    public Integer peek(){
        if(top<0)
            return null;
        else
            return stack[top];
    }

    public Integer search(){

        return top;

    }

    public boolean empty() {
    return (top == -1);
    }
    public String toString() {

        String result = "{";

        for (int i = 0; i <= top; i++) {

            result += stack[i] + ", ";

        }

        if (!empty()) {

            result = result.substring(0, result.length() - 2);
        }
        result += "}";
        return result;

    }



}


