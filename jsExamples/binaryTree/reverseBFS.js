/*

Problem Statement #
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

Reverse Level Order Traversal:[4,5,6,7],[2,3],[1]] 

Reverse Level Order Traversal:[9,10,5],[7,1],[12]]
*/


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  const traverse = function(root) {
      
    let result = [];
    let queue=[root];
    let length=0;
    while(queue.length){

        let size=queue.length;
        let current=[];

        for(let i=0;i<size;i++){

            let head=queue.shift();
            
            current.push(head.value)

            if(head.left){
                queue.push(head.left)
            }
            if(head.right){
                queue.push(head.right)
            }

        }
        length++;
        console.log(length)

        //so at this point we have pushed all values of that level into current
        console.log(current)
        //by unshifting we move the array as a whole to the front of the list, unshift lets you move a whole array into the front
        result.unshift(current)
    }

    return result;
  }
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log(`Reverse level order traversal: ${traverse(root)}`)
  