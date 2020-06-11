/*

Reverse alternating K-element Sub-list (medium) #
Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

 Original List:  
 Example:  
 
    1   2   3   4   5   6   7   8   null   
 Reversed Sub-list:  
 k=2  
    2   1   3   4   6   5   7   8   null  


*/


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
  
  
  const reverse_alternate_k_elements = function(head, k) {
    

        if (k <= 1 || head === null) {
            return head;
        }
    
    let current=head;
    let previous=null;
    


    while(current){

        const last_node_of_previous_part = previous;
        // after reversing the LinkedList 'current' will become the last node of the sub-list
        const last_node_of_sub_list = current;
        let next = null; // will be used to temporarily store the next node
    
        // reverse 'k' nodes
        let i = 0;
        
        while (current !== null && i < k) {
            next = current.next;            //this is needed to traverse
            current.next = previous;        //current.next is previous because we reverse it
            
            previous = current;         //previous will always be one behind the current
            current = next;             //this traveres
            
            i ++;
        }

         // connect with the previous part
        if (last_node_of_previous_part !== null) {
            last_node_of_previous_part.next = previous;     //we are closing up the ends, by saying the next value= previous
        } else {
            head = previous;                //head is equal to previous because previous is where we are reversing and storying values
        }
  
        // connect with the next part
        last_node_of_sub_list.next = current;           //we are closing up the values by saying the next value is the previous

        // skip 'k' nodes
        i = 0;
        while (current !== null && i < k) {
            
            previous = current;         //previous will always be one behind
            current = current.next;     //current will be the next value
            
            i ++;
        }

        if (current === null) {
            break;
        }


        
    }

    

    return head;
  };
  
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  head.next.next.next.next.next.next = new Node(7)
  head.next.next.next.next.next.next.next = new Node(8)
  
//   console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 2).get_list()}`)
  