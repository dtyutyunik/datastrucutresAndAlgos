/*

Connect All Level Order Siblings (medium) #
Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

*/


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
    
    // tree traversal using 'next' pointer
    print_tree() {
      let result = "Traversal using 'next' pointer: ";
      let current = this;
      while (current != null) {
        result += current.value + " ";
        current = current.next;
      }
      console.log(result);
    }
  };
  
  const connect_all_siblings = function(root) {
        let queue=[root];
        let result=[];
        let current=null;
        while(queue.length){
            let length=queue.length;
            let prevValue=null;
            for(let i=0;i<length;i++){
                let node=queue.shift();

                current=node.value;
                prevValue=current;
                current.next=prevValue;

                if(node.left){
                    queue.push(node.left)
                }
                if(node.right){
                    queue.push(node.right)
                }
            }
            console.log(current);
        }
        
        return current;
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
//console.log(connect_all_siblings(root))
  connect_all_siblings(root)
  root.print_tree()
  