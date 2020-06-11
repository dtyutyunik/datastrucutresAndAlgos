class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  //0(n) for time , 0(1) for space
  const reverse = function(head) {
    
    let prev=null;
    let current=head;

    while(current){
        
        next = current.next; // temporarily store the next node
        current.next = prev; // reverse the current node
        prev = current; // before we move to the next node, point previous to the current node

        current = next; // move on the next node
        
        
    }

    return prev;
  };
  
  head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(10);
  
//   console.log(reverse(head.value));
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
  
  