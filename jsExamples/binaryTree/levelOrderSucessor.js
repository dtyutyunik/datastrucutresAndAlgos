/*

ex:

Given node:3                            
Level Order sucessor: 4
        1
    2       3   
  4  5

  
ex:

Given node:9                            
Level Order sucessor: 10
        12
    7      1
  9     10   5 


ex:
Given node: 12                         
Level Order sucessor: 7
        12
    7      1
  9     10   5 



*/


class TreeNode {

    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_successorWithAnotherLoopAtTheEnd = function(root, key) {

        if(root===null){
            return null;
        }

        let queue=[root];
        let result=[];

        while(queue.length){

            let numbers=queue.length;
            
            for(let i=0;i<numbers;i++){

                let node=queue.shift()
                result.push(node.val)
             
                if(node.left){
                    queue.push(node.left)
                }
                if(node.right){

                    queue.push(node.right)
                }
            }  
            // result.push(node.value)
        
    }

    console.log(result)

    for(let i=0;i<result.length;i++){
        if(result[i]===key){
            return result[i+1]
        }
    }
    

  };

  const find_successor = function(root, key) {

    if(root===null){
        return null;
    }

    let queue=[root];
    let result=[];

    while(queue.length){

        // insert the children of current node in the queue
        let node=queue.shift()   

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        console.log(queue)
        //if we found the key, then break, at this point we have pushed the values prior to finding the key
        if(node.val===key){
            break;
        }
        
      
    
}
    // console.log(queue)
        return queue.shift()    //queue.shift() because it is the first value


};
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  result = find_successor(root, 12)
  if (result != null)
    console.log(result.val)
//   result = find_successor(root, 9)
//   if (result != null)
//     console.log(result.val)
  
//     result = find_successor(root, 10)
//   if (result != null)
//     console.log(result.val)