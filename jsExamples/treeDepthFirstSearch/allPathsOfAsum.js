/*
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

    s:12, output 2:  1-7-4, 1-9-2

            1
        7       9
      4   5   2  7


   s:23, output 2:  12-7-4, 12-1-10

            12
        7       1
      4       10  5
*/


class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  pathSum=(root,sum)=>{

    //basic error checking
    if(!root) return [];
    
    const res=[]


    //writing the helper function
    function findPaths(node,target,prevPaths){
        prevPaths.push(node.value)
        
        if(!node.left && !node.right && node.value===target){
            res.push([prevPaths])
        }

        if(node.left){
            findPaths(node.left, target-node.value, prevPaths.slice())  //.slice so we pass a copy of the array instead of reference
        }
        if(node.right){
            findPaths(node.right, target-node.value, prevPaths.slice())  //.slice so we pass a copy of the array instead of reference
        }
    }


    findPaths(root,sum,[]); //originally empty

    return res;
  }
  
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  sum = 23
//   console.log(`Tree paths with sum: ${sum}: ${pathSum(root, sum)}`)      //s:23, output 2:  12-7-4, 12-1-10
  console.log(pathSum(root, sum))      //s:23, output 2:  12-7-4, 12-1-10
  
  