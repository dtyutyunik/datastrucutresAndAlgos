/*

Problem Statement #
Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
Zig zag[12],[1,7],[9,10,5][17,20]] 


*/


class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    if (!root) return []; // Sanity check
    
    let result = [], level = [], s1 = [root], s2 = [], flag = true;
    
    while (s1.length > 0) {
        let node = s1.pop(), 
        left = node.left, 
        right = node.right;

        // Handle the current node
        level.push(node.value);
        console.log(s1)
        console.log('nnnnnnnn')
        // Get ready for the next level
        // the key of zigzag traversal is to control the order of pushing
        // left and right sub children
        if (flag) {
            if (left)  s2.push(left);
            if (right) s2.push(right);
        } else {
            if (right) s2.push(right);
            if (left)  s2.push(left);
        }
        
        // We just finish traversing the current level
        if (s1.length === 0) {
            result.push(level);
            level = [];
            flag = !flag;
            // Continue to traverse the next level
            s1 = s2;
            s2 = [];
        }
    }
    
    return result;
};

function zigzag(root){

    if (!root) return [];
    
    let stackQueue = [root];
    let result = [];
    let level = 1;
    
    while (stackQueue.length > 0) {
        const isLtoR = level % 2 === 1;
        const subLength = stackQueue.length;
        const subList = [];

        for (let i = 0; i < subLength; i++) {
            let node;
            if (isLtoR) {
               node = stackQueue.shift();
                if (node.left) stackQueue.push(node.left);
                if (node.right) stackQueue.push(node.right);
            } else {
                node = stackQueue.pop();                
                if (node.right) stackQueue.unshift(node.right);
                if (node.left) stackQueue.unshift(node.left);
                
            }
            subList.push(node.value);
        }
        level++;
        console.log(level)
        console.log(stackQueue)
        result.push(subList);
    }
    

    return result;
}

  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  root.right.left.left = new TreeNode(20)
  root.right.left.right = new TreeNode(17)
  console.log(`Zigzag traversal: ${traverse(root)}`)
  