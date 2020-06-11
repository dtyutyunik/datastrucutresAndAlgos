/*

Problem Statement #
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.


ex1:            1
            2       3
          4  5

          ans:2


ex2:           1
            2       3
          4  5    6
        7       8

        ans: 3

*/


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_minimum_depth = function(root) {
    //sanity check
    if(root===null){
        return 0;
    }

    let queue=[root];
    let minDepth=0;

    while(queue.length){
        let length=queue.length;
        
        for(let i=0;i<length;i++){
            let node=queue.shift();
            
            if(node.left===null && node.right===null){
                return minDepth+1;  //we do plus 1 to account for the position it reached before breaking
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        minDepth++;   
    }


  };

  const find_max_depth = function(root) {
    //sanity check
    if(root===null){
        return 0;
    }

    let queue=[root];
    let maxDepth=0;

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
        }
        maxDepth++;   
    }

    return maxDepth
  };
  
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
//   console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
  console.log(`Tree Minimum Depth: ${find_max_depth(root)}`)
  root.left.left = new TreeNode(9)
  root.right.left.left = new TreeNode(11)
//   console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
  console.log(`Tree Minimum Depth: ${find_max_depth(root)}`)
  