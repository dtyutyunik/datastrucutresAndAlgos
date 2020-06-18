/*
Problem Statement #
Given a set with distinct elements, find all of its distinct subsets.

Example 1:

Input: [1, 3]
Output: [], [1], [3], [1,3]
Example 2:

Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

*/

/*
Time: Since, in each step, the number of subsets doubles as we add each element to all the existing subsets, the time complexity of the above algorithm is O(2^N), 
where ‘N’ is the total number of elements in the input set. This also means that, in the end, we will have a total of O(2^N) subsets.

Space: 0(2^n) since additional space would increase as well
*/
const find_subsets = function(nums) {
    subsets = [];
    
    //we add the empty array
    subsets.push([]);

    for(let i=0;i<nums.length;i++){
        let currentNumber=nums[i];

        //we will take all existing subsets and insert the current number in them to create a new subset
        const n= subsets.length;
        
        for(let j=0;j<n;j++){
          
          //create a new subset from the exisitng subset and insert the current element into it
          //this is the key as this visits each element in the subset and pushed the currentNumber to it
          const set= subsets[j].slice(0) //clone the permutation from the start, since we enter 0, 
          console.log(set)
          
          set.push(currentNumber);
          // console.log(set)
          subsets.push(set)
        }
        console.log('done', subsets)
    }

    return subsets;
  };
  
  
  console.log(find_subsets([1, 5,3]))
  // console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`)
  

  function subsets(nums){

    const result=[];


    const walk=(temp, start)=>{
      result.push(temp);

      //pick one from the rest, then go on
      for(let i=start;i<nums.length;i++){
        walk(temp.concat(nums[i]),i+1)
      }
    }

    walk([],0);
    return result;
  }

  // console.log(subsets([1, 5, 3]))