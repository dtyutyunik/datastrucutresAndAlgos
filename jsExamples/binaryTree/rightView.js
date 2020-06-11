/*

Right View of a Binary Tree (easy) #
Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.


ex:
[1,3,7]                 
                      1
                2          3
            4       5   6       7

ex:
[12, 1, 5, 3]
                   12
                7     1
               9    10   6
             3


*/

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  const tree_right_view = function(root) {
    result = [];
    let queue=[root];
    
    while(queue.length){
        

        let length=queue.length;
        
        for(let i=0;i<length;i++){

            let node=queue.shift();    
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            //this is the last number in the node, aka the right view
            if(i===length-1){
                result.push(node.value)
            }   
        }
        

    }

    return result;
  };


  const tree_left_view = function(root) {
    result = [];
    let queue=[root];
    
    while(queue.length){
        

        let length=queue.length;
        
        for(let i=0;i<length;i++){

            let node=queue.shift();    
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            //this is the first number in the node, aka the left view
            if(i===0){
                result.push(node.value)
            }   
        }
        

    }

    return result;
  };
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.left.left.left = new TreeNode(3);
  console.log("Tree right view: " + tree_right_view(root))
  console.log("Tree left view: " + tree_left_view(root))
  