/*
Problem Statement #
Given a binary tree, populate an array to represent the averages of all of its levels.

Example 1:
[1,2.5,5.5]           1
                 2        3    
               4   5    6   7


             
*/


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  

  const find_level_averages = function(root) {

    result = [];
    let queue=[root];

    while(queue.length){
        let numbers=queue.length;       //gets recalculated here
        let sum=0;
        

        for(let i=0;i<numbers;i++){

            let node=queue.shift();     //you take the first one out
            sum+=node.value;            //sums the numbers

            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            
        }
        console.log(queue.length)

        result.push(sum/numbers)
    }

    return result;
    }
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.left.right = new TreeNode(2)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  
  console.log(`Level averages are: ${find_level_averages(root)}`)
  