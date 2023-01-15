package LinkedLists;
public class IntNode {

  private Integer data;
  private IntNode link;

    public Integer getData() {
        return data;
    }

    public IntNode getLink() {
        return link;
    }
    
    public IntNode(Integer data, IntNode link) {
        this.data = data;
         this.link = link;
    }
     public void setData(Integer data) {
         this.data = data;
     }
     public void setLink(IntNode link) {
         this.link = link;
     }
     public IntNode(Integer data) {
         this.data = data;
     }

 }
