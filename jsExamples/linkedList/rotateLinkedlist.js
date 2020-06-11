/*


Rotate a LinkedList (medium) #
Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

 Original List:  
 head 
 k=3  
    1   2   3   4   5   6   null   
 Rotated LinkedList:     
    4   5   6   1   2   3   null   


 Rotated LinkedList:  
 Example 1:  
 Original List:  
 
    1   2   3   4   5   null   
 Example 2:  

 k=8  
 Rotated LinkedList:  
    3   4   5   1   2   null   

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
  
  
  const rotate = function(head, rotations) {
    
    if (head === null || head.next === null || rotations <= 0) {
            return head;
        }

    // find the length and the last node of the list
    let last_node = head;
    let length=1;

    while(last_node.next){
        last_node=last_node.next;
        length++
    }

    last_node.next = head; // connect the last node with the head to make it a circular list

    skip_length = length - rotations%length;    // no need to do rotations more than the length of the list    
    // console.log(skip_length)
    // console.log(rotations%length)

    let last_node_of_rotated_list = head;
    console.log(last_node_of_rotated_list)
    // console.log(head)

    for (i = 0; i < skip_length - 1; i++) {
        // console.log(last_node_of_rotated_list)
      last_node_of_rotated_list = last_node_of_rotated_list.next;
    }
    
    
     // 'last_node_of_rotated_list.next' is pointing to the sub-list of 'k' ending nodes
    head = last_node_of_rotated_list.next;          //we do plus 1 becuse we start at the pre last value
    console.log(head)
    last_node_of_rotated_list.next = null;          

    return head;
  };


  

  function rotateList(head, k){
    let tail = head;
    if (head === null) return head;
    let len = 1;
    while (tail.next) {
        tail = tail.next;
        len++;
    }

    tail.next = head;
    let count = len - (k % len);
    console.log(count)
    while (count > 0) {
        head = head.next;
        tail = tail.next;
        console.log(head,tail)
        count--;
    }
    tail.next = null;
    return head;
  }
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of rotated LinkedList are: ${rotateList(head, 4).get_list()}`)
//   head.next.next.next.next.next = new Node(6)
  
//   console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
//   console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`)
  