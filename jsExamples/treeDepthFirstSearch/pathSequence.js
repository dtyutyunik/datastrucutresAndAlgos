/*

sequence: [1,0,7] false
sequence: [1,1,6] true


         1
      0    1
     1    6  5
*/

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  
  const find_path = function(root, sequence) {
    
    if(!root){return false}

    let increment=0;    //this will be used to increment in the path
    let error=true;
    let match=false;

    let helper=function(root){

        if(root.left===null && root.right===null){    
            if(root.value===sequence[increment] && error===true){
                match=true;
            }

            increment=0;    //reset
            error=true;     //reset
        }
        
    
        if(root.value!==sequence[increment]){
            error=false;
        }
        
        if(root.left){
            increment++;
            helper(root.left)    
        }
        if(root.right){
            increment++;
            helper(root.right)
        }

    }

    helper(root)
    return match;



  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
  