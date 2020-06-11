/*

Output: 408 Explanation: The sume of all path numbers: 17 + 192 + 199

        1
      7   9
         2 9


Output: 332 Explanation: The sume of all path numbers: 101 + 116 + 115

          1
        0  1
       1  6 5
*/



class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const find_sum_of_path_numbers = function(root) {
   
    let str=''  //will be built up per root to leaf
    let sum=0;  //will be where the numbers are added

    function helper(root,str){
        if(root.left===null && root.right===null)
        {
            str+=root.value
            sum+=Number(str)    //convert it to a number
            console.log('sum',sum)
            str=''; //reseting string
        }

        str+=root.value
        
        if(root.left){
            helper(root.left,str)
        }
        if(root.right){
            helper(root.right,str)
        }

    }

    helper(root,str)
    console.log(sum)
    return sum;

  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
  