/*

Problem Statement #
Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

Example 1:

Level Order Traversal:  
 [[1],[2,3],[4,5,6,7]] 
Example 2:

    Level Order Traversal:  
 [[12],[7,1],[9,10,5]]  

*/


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    if (!root) {
        return [];
    }

    const queue = [];
    queue.push(root);

    const result = [];

    
    while (queue.length > 0) {
             
            const node = queue.shift();
            //we pushed each value into result
            result.push(node.value);  

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
    }
    console.log(result)
    return result;
  };
  
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Level order traversal: ${traverse(root)}`);
  